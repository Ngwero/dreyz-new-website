"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

function isDomReconcileError(error: Error) {
  return (
    error.name === "NotFoundError" ||
    /removeChild|insertBefore|replaceChild/.test(error.message ?? "")
  );
}

/**
 * Remounts children when USAL/GSAP (or browser extensions) mutate the DOM
 * in a way that breaks React reconciliation.
 */
export class DomErrorBoundary extends Component<
  { children: ReactNode },
  { generation: number }
> {
  state = { generation: 0 };

  static getDerivedStateFromError() {
    return {};
  }

  componentDidCatch(error: Error, _info: ErrorInfo) {
    if (!isDomReconcileError(error)) return;
    queueMicrotask(() => {
      this.setState((s) => ({ generation: s.generation + 1 }));
    });
  }

  render() {
    return <div key={this.state.generation}>{this.props.children}</div>;
  }
}
