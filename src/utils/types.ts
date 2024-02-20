export type EtapProjektu = {
  title: string;
  image: "lupa" | "klucz" | "checkmark" | "narzedzia";
  desc: string[];
};

export type Projekt = {
  title: string;
  tags: string[];
  image?: string;
  redirect?: string;
  authors?: string[];
  isArriveSoon: boolean;
};