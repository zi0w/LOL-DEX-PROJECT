"use client";
import Head from "next/head";

import { Champion } from "@/lib/types/Champion";
import { getChampionRotation } from "@/lib/utils/rotationApi";
import { useQuery } from "@tanstack/react-query";
import { ChampionCard } from "@/components/champions/ChampionCard";

import Loading from "../loading";
import Error from "./error";

type RotationProps = {
  allPlayers: Champion[];
  newPlayers: Champion[];
};

export default function RotationPage() {
  const { data, isPending, error, refetch } = useQuery<RotationProps>({
    queryKey: ["championRotation"],
    queryFn: () => getChampionRotation(), // 넥스트에선 콜백으로 사용
    retry: false,
  });

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} reset={() => refetch()} />;
  }

  const { allPlayers, newPlayers } = data;

  return (
    <>
      <Head>
        <title>금주 플레이어 로테이션 확인</title>
        <meta
          name="description"
          content="Riot Games API를 활용하여 금주 플레이어 로테이션 정보를 제공합니다."
        />
        <meta name="og:title" content="금주 플레이어 로테이션 확인" />
        <meta
          name="og:description"
          content="Riot Games API를 활용하여 금주 플레이어 로테이션 정보를 제공합니다."
        />
        <meta
          name="og:images"
          content="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_1.jpg"
        />
        <meta name="og:url" content="http://localhost:3000/champions" />
      </Head>

      <section className="grid justify-items-center min-h-screen py-8 pb-20 m-auto max-w-custom container">
        <article className="flex flex-col gap-16 p-4">
          <div>
            <div className="pb-10">
              <h2 className="font-bold text-3xl">
                금주 플레이어 로테이션 확인
              </h2>
              <p className="font-light">
                Riot Games API를 활용하여 금주 플레이어 로테이션 정보를
                제공합니다.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {allPlayers.map((champion) => (
                <ChampionCard key={champion.id} champion={champion} />
              ))}
            </div>
          </div>

          <div>
            <div className="pb-10">
              <h2 className="font-bold text-3xl">
                금주 신규 플레이어 로테이션 확인
              </h2>
              <p className="font-light">
                Riot Games API를 활용하여 금주 신규 플레이어 로테이션 정보를
                제공합니다.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {newPlayers.map((champion) => (
                <ChampionCard key={champion.id} champion={champion} />
              ))}
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
