import { useState } from "react";

type Etap = "odkrywanie" | "projektowanie" | "testowanie" | "wdrazanie";

type EtapElement = {
  title: string;
  description: string;
};

type EtapData = {
  odkrywanie: EtapElement;
  projektowanie: EtapElement;
  testowanie: EtapElement;
  wdrazanie: EtapElement;
};

const data: EtapData = {
  odkrywanie: {
    title: "Spotkamy się, żeby lepiej poznać Twoje cele i potrzeby",
    description:
      "Zrozumienie potrzeb oraz celów klienta jest podstawą do zaprojektowania odpowiedniego rozwiązania. Z tego też powodu, na początku spotkamy    się z Tobą, aby lepiej poznać Twój punkt widzenia, a także zaznajomić się                       z Twoimi wymaganiami. Następnie przeprowadzimy badania, które pozwolą nam lepiej zrozumieć Twoich odbiorców oraz poznać Twoich konkurentów.",
  },
  projektowanie: {
    title:
      "Zaprojektujemy Twój produkt zgodnie z zasadami User Centered Designu",
    description:
      "Projektowanie zorientowane na użytkownika umożliwia stworzenie kompleksowego produktu, który idealnie trafia w potrzeby i gusta odbiorców. Dzięki zastosowaniu tego podejścia projektowego, Twój produkt z pewnością zostanie ciepło przyjęty przez użytkowników. ",
  },
  testowanie: {
    title: "Zweryfikujemy Twój nowy produkt z prawdziwymi użytkownikami",
    description:
      "Testowanie jest kluczem do stworzenia produktu skrojonego pod wymagania Twoje oraz Twoich odbiorców. Właśnie dlatego stawiamy na ciągłe testowanie projektu z użytkownikami oraz konsultowanie go z Tobą przez cały czas jego trwania. Natomiast wszelkie wykryte problemy od razu rozwiążemy, tak by gotowy produkt był nieskazitelny.",
  },
  wdrazanie: {
    title:
      "Na Twoje życzenie zajmiemy się również wdrożeniem gotowego produktu",
    description:
      "Radość z posiadania gotowego produktu to niesamowite uczucie, a zadowolenie z posiadania wdrożonego projektu jest tym większe. Z tego powodu na Twoje życzenie zajmiemy się również urzeczywistnieniem gotowego produktu. W tym celu skontaktujemy się ze specjalistami z branży IT, którzy przy zastosowaniu najnowocześniejszych technik i standardów sprawią, że Twój produkt zaistnieje   w cyfrowym świecie.",
  },
};

const EtapyProjektu = ({ className }: { className: string }) => {
  const [etap, setEtap] = useState<Etap>("odkrywanie");

  return (
    <div className={className}>
      <div className="flex gap-6">
        <div className="flex flex-col gap-4">
          <button
            className={`flex w-64 gap-4 rounded-[10px] p-6 py-4 text-[18px] transition-all hover:bg-hover ${etap !== "odkrywanie" ? "opacity-50 hover:opacity-100" : "bg-inblock"}`}
            onClick={() => setEtap("odkrywanie")}
          >
            <img
              src="/etapy/icons/odkrywanie.svg"
              alt="odkrywanie"
              loading="lazy"
              width={20}
              height={20}
            />
            Odkrywanie
          </button>
          <button
            className={`flex w-64 gap-4 rounded-[10px] p-6 py-4 text-[18px] transition-all hover:bg-hover ${etap !== "projektowanie" ? "opacity-50 hover:opacity-100" : "bg-inblock"}`}
            onClick={() => setEtap("projektowanie")}
          >
            <img
              src="/etapy/icons/projektowanie.svg"
              alt="projektowanie"
              loading="lazy"
              width={20}
              height={20}
            />
            Projektowanie
          </button>
          <button
            className={`flex w-64 gap-4 rounded-[10px] p-6 py-4 text-[18px] transition-all hover:bg-hover ${etap !== "testowanie" ? "opacity-50 hover:opacity-100" : "bg-inblock"}`}
            onClick={() => setEtap("testowanie")}
          >
            <img
              src="/etapy/icons/testowanie.svg"
              alt="testowanie"
              loading="lazy"
              width={20}
              height={20}
            />
            Testowanie
          </button>
          <button
            className={`flex w-64 gap-4 rounded-[10px] p-6 py-4 text-[18px] transition-all hover:bg-hover ${etap !== "wdrazanie" ? "opacity-50 hover:opacity-100" : "bg-inblock"}`}
            onClick={() => setEtap("wdrazanie")}
          >
            <img
              src="/etapy/icons/wdrazanie.svg"
              alt="wdrażanie"
              loading="lazy"
              width={20}
              height={20}
            />
            Wdrażanie
          </button>
        </div>
        <div className="relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-[20px] bg-block p-12 transition-all">
          <div className="absolute inset-0 h-full w-full">
            <div className="absolute inset-0 left-6 h-full w-full bg-[url('/grid.png')]"></div>
            <div className="absolute inset-0 z-20 h-full w-full bg-block/70"></div>
            <img
              className="absolute bottom-0 right-4 z-20"
              src={`/etapy/desktop/${etap}.svg`}
              alt={etap}
              width={395}
              height={395}
            />
            <div className="absolute inset-0 z-40 h-full w-full bg-gradient-to-t from-block from-5% via-transparent"></div>
            <div className="absolute inset-0 z-40 h-full w-full bg-gradient-to-r from-block from-10% via-transparent"></div>
          </div>
          <h1 className="relative z-50 max-w-[430px] text-3xl font-medium">
            {data[etap].title}
          </h1>
          <p className="relative z-50 text-[18px]">{data[etap].description}</p>
        </div>
      </div>
    </div>
  );
};

export default EtapyProjektu;
