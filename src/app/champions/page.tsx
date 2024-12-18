import { ChampionCard } from "@/components/champions/ChampionCard";
import { Champion } from "@/types/Champion";
import { fetchChampionsList } from "@/utils/serverApi";
import { Suspense } from "react";
import Loading from "../loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "League Of Legends: 챔피언 목록",
  description: "리그 오브 레전드의 모든 챔피언 목록을 확인하세요.",
  openGraph: {
    title: "League Of Legends: 챔피언 목록",
    description: "리그 오브 레전드의 모든 챔피언 목록을 확인하세요.",
    images:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_1.jpg",
    url: "http://localhost:3000/champions",
  },
};

async function ChampionList() {
  const championList: Champion[] = await fetchChampionsList();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {championList.map((champion: Champion) => (
        <ChampionCard key={champion.id} champion={champion} />
      ))}
    </div>
  );
}

export default function ChampionsPage() {
  throw new Error("테스트에러")
  return (
    <>
      <section className="grid justify-items-center min-h-screen py-8 pb-20 m-auto max-w-custom container">
        <article className="flex flex-col gap-10 p-4">
          <div>
            <h2 className="font-bold text-3xl">챔피언 목록 보기</h2>
            <p className="font-light">
              Riot Games API를 활용하여 챔피언 정보를 제공합니다.
            </p>
          </div>
          <Suspense fallback={<Loading />}>
            <ChampionList />
          </Suspense>
        </article>
      </section>
    </>
  );
}
