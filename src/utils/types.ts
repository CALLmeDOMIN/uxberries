type ProjektData = {
  title: string;
  tags: string[];
  image: string;
  redirect: string;
  authors: string[];
};

export type Projekt = Partial<ProjektData> & {
  title: string;
  isArriveSoon: boolean;
};

export type ArriveSoon = {
  title: string;
};

export type Etap = "odkrywanie" | "projektowanie" | "testowanie" | "wdrazanie";

export type EtapProjektu = {
  title: string;
  desc: string;
  desktop: string;
  type: Etap;
};

export type EtapProjektuMobile = Omit<EtapProjektu, "desktop">;

export type EtapData = {
  odkrywanie: EtapProjektu;
  projektowanie: EtapProjektu;
  testowanie: EtapProjektu;
  wdrazanie: EtapProjektu;
};
