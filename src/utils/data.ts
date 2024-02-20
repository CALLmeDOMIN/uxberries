import { type EtapProjektu, type Projekt } from "./types";

export const etapyProjektu: EtapProjektu[] = [
  {
    title: "Spotkajmy się, żeby lepiej poznać Twoje cele i potrzeby",
    image: "lupa",
    desc: ["Zrozumienie potrzeb oraz", "celów klienta jest podstawą do","zaprojektowania właściwego", "rozwiązania. Z tego też", "powodu, na początku", "spotkamy się z Tobą, aby lepiej", "poznać Twój punkt widzenia,","a także zaznajomić się z Twoimi wymaganiami."],
  },
  {
    title:
      "Zaprojektujemy Twój produkt zgodnie z zasadami User Centered Designu",
    image: "narzedzia",
    desc: ["Projektowanie zorientowane", "na użytkownika umożliwia", "stworzenie kompleksowego", "produktu, który idealnie trafia", "w potrzeby i gusta odbiorców.", "Dzięki zastosowaniu tego", "podejścia projektowego, Twój", "produkt z pewnością zostanie", "ciepło przyjęty przez", "użytkowników."]
  },
  {
    title: "Zweryfikujemy Twój nowy produkt z prawdziwymi użytkownikami",
    image: "checkmark",
    desc: ["Testowanie jest kluczem do", "stworzenia produktu", "skrojonego pod wymagania", "Twoje oraz Twoich odbiorców.", "Właśnie dlatego stawiamy na", "ciągłe testowanie projektu", "z użytkownikami oraz", "konsultowanie go z Tobą przez", "cały czas jego trwania."]
  },
  {
    title: "Na Twoje życzenie zajmiemy się też wdrożeniem produktu",
    image: "klucz",
    desc: ["Radość z posiadania", "gotowego produktu to", "niesamowite uczucie,", "a zadowolenie z posiadania", "wdrożonego projektu jest tym", "większe. Z tego powodu na", "Twoje życzenie zajmiemy się", "również urzeczywistnieniem", "gotowego produktu."]
  },
];

export const Projects: Projekt[] = [
  {
    title: "Redesign strony zespołu wyścigowego AGH Racing",
    tags: ["multi-page", 'wizytówka'],
    image: "racing",
    authors: ["1", "2", "3", "4", "5", "6"],
    redirect: "https://google.com",
    isArriveSoon: false
  },
  {
    title: "Redesign strony Browaru Stu Mostów",
    tags: ["praktyka", 'e-commerce'],
    image: "piwo",
    authors: ["3", "8", "11"],
    redirect: "https://google.com",
    isArriveSoon: false
  },
  {
    title: "Strona lekarza rodzinnego",
    tags: ["praktyka", 'wizytówka'],
    image: "doktor",
    authors: ["10", "1", "9", "12"],
    redirect: "https://google.com",
    isArriveSoon: false
  },
  {
    title: "Strona zespołu gamedev Mage's Tea",
    tags: [],
    isArriveSoon: true
  },
  {
    title: "Strona koła naukowego SpaceTeam AGH",
    tags: [],
    isArriveSoon: true
  }
]