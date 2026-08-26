export type Location = {
  city: string;
  label: string;
  address?: string;
  headOffice?: boolean;
};

export const LOCATIONS: Location[] = [
  {
    city: "Port Harcourt",
    label: "Head Office",
    address: "No. 89 Elenlewa, Akpor, Old Airport Road / Old Refinery Road",
    headOffice: true,
  },
  {
    city: "Abuja",
    label: "Branch Office",
    address: "Addis Ababa Plaza, Zone 4, Wuse, Abuja",
  },
  {
    city: "Kaduna",
    label: "Branch Office",
  },
];
