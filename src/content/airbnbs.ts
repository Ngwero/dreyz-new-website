export interface AirbnbStay {
  id: string;
  name: string;
  location: string;
  images: string[];
}

export const airbnbIntro = {
  eyebrow: "Airbnb & Homestays",
  title: "Designing Airbnb & Homestays",
  lead:
    "Airbnb are taking a toll on the Ugandan Business. At Dreyz Interior, we have discovered the secrets to creating a successful Airbnb listing, from understanding your target audience to optimizing your space for comfort and functionality.",
  body:
    "Our design creates welcoming and stylish spaces that attract guests and earn you a 5-star rating. From choosing a color scheme to adding personal touches, we have the expert knowledge for your listing to stand out from the crowd.",
};

export const airbnbStays: AirbnbStay[] = [
  {
    id: "trendy-stays-najeera",
    name: "TRENDY STAYS NAJEERA",
    location: "Najeera, Kampala",
    images: [
      "/images/airbnb/trendy-stays-najeera/01.jpg",
      "/images/airbnb/trendy-stays-najeera/02.jpg",
      "/images/airbnb/trendy-stays-najeera/03.jpg",
      "/images/airbnb/trendy-stays-najeera/04.jpg",
      "/images/airbnb/trendy-stays-najeera/05.jpg",
      "/images/airbnb/trendy-stays-najeera/06.jpg",
    ],
  },
  {
    id: "trendy-stays-jinja",
    name: "TRENDY STAYS JINJA",
    location: "Jinja",
    images: [
      "/images/airbnb/trendy-stays-jinja/01.jpg",
      "/images/airbnb/trendy-stays-jinja/02.jpg",
      "/images/airbnb/trendy-stays-jinja/03.jpg",
      "/images/airbnb/trendy-stays-jinja/04.jpg",
    ],
  },
  {
    id: "croft-homes-jinja",
    name: "THE CROFT HOMES JINJA",
    location: "Jinja",
    images: [
      "/images/airbnb/croft-homes-jinja/01.jpg",
      "/images/airbnb/croft-homes-jinja/02.jpg",
      "/images/airbnb/croft-homes-jinja/03.jpg",
      "/images/airbnb/croft-homes-jinja/04.jpg",
      "/images/airbnb/croft-homes-jinja/05.jpg",
      "/images/airbnb/croft-homes-jinja/06.jpg",
      "/images/airbnb/croft-homes-jinja/07.jpg",
      "/images/airbnb/croft-homes-jinja/08.jpg",
    ],
  },
  {
    id: "croft-homes-buwaate",
    name: "THE CROFT HOMES BUWAATE",
    location: "Buwaate",
    images: [
      "/images/airbnb/croft-homes-buwaate/01.jpg",
      "/images/airbnb/croft-homes-buwaate/02.jpg",
      "/images/airbnb/croft-homes-buwaate/03.jpg",
      "/images/airbnb/croft-homes-buwaate/04.jpg",
      "/images/airbnb/croft-homes-buwaate/05.jpg",
      "/images/airbnb/croft-homes-buwaate/06.jpg",
    ],
  },
  {
    id: "brook-homes",
    name: "THE BROOK HOMES",
    location: "Uganda",
    images: [
      "/images/airbnb/brook-homes/01.jpg",
      "/images/airbnb/brook-homes/02.jpg",
      "/images/airbnb/brook-homes/03.jpg",
      "/images/airbnb/brook-homes/04.jpg",
      "/images/airbnb/brook-homes/05.jpg",
      "/images/airbnb/brook-homes/06.jpg",
    ],
  },
];

export type AirbnbFilter = "all" | AirbnbStay["id"];

export const airbnbFilters: { id: AirbnbFilter; label: string }[] = [
  { id: "all", label: "ALL" },
  ...airbnbStays.map((s) => ({ id: s.id as AirbnbFilter, label: s.name })),
];

export function getAirbnbGalleryItems(filter: AirbnbFilter = "all") {
  const stays =
    filter === "all" ? airbnbStays : airbnbStays.filter((s) => s.id === filter);

  return stays.flatMap((stay) =>
    stay.images.map((src, index) => ({
      id: `${stay.id}-${index}`,
      src,
      name: stay.name,
      stayId: stay.id,
      location: stay.location,
    }))
  );
}
