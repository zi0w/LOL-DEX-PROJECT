import { ChampionCard } from "@/components/champions/ChampionCard";
import { Champion } from "@/types/Champion";
import { fetchChampionsList } from "@/utils/serverApi";

export default async function ChampionsPage() {
  const championList: Champion[] = await fetchChampionsList();

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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {championList.map((champion: Champion) => (
              <ChampionCard key={champion.id} champion={champion} />
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
