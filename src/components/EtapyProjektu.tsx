import { useState } from "react";
import type { Etap, EtapData } from "../utils/types";
import { etapyProjektu } from "../utils/data";

const EtapyProjektu = ({ className }: { className: string }) => {
  const [etap, setEtap] = useState<Etap>("odkrywanie");

  const data: EtapData = etapyProjektu.reduce((acc, curr) => {
    acc[curr.type] = curr;
    return acc;
  }, {} as EtapData);

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
              alt="lupa"
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
              alt="narzedzia"
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
              alt="checkmark"
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
              alt="klucz"
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
          <p className="relative z-50 text-[18px]">{data[etap].desc}</p>
        </div>
      </div>
    </div>
  );
};

export default EtapyProjektu;
