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
    authors: ["bartek", "hela", "marzenka", "krystian", "oliwia", "heniek"],
    redirect: "https://google.com"
  },
  {
    title: "Redesign strony Browaru Stu Mostów",
    tags: ["praktyka", 'e-commerce'],
    image: "browar",
    authors: ["marzenka", "maja", "julka"],
    redirect: "https://google.com"
  },
  {
    title: "Strona lekarza rodzinnego",
    tags: ["praktyka", 'wizytówka'],
    image: "lekarz",
    authors: ["angelika", "bartek", "karol", "marysia"],
    redirect: "https://google.com"
  },
  {
    title: "Strona zespołu gamedev Mage's Tea",
    tags: ["Już wkrótce"]
  },
  {
    title: "Strona koła naukowego SpaceTeam AGH",
    tags: ["Już wkrótce"]
  }
]