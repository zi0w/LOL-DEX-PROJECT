import ItemCard from "@/components/items/ItemCard";
import { Item } from "@/types/Item";
import { fetchItems, fetchVersion } from "@/utils/serverApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "League Of Legends: 아이템 목록",
  description: "리그 오브 레전드의 모든 아이템 목록을 확인하세요.",
  openGraph: {
    title: "League Of Legends: 아이템 목록",
    description: "리그 오브 레전드의 모든 아이템 목록을 확인하세요.",
    images:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_1.jpg",
    url: "http://localhost:3000/champions",
  },
};

export default async function ItemsPage() {
  const version: string = await fetchVersion();
  const items: Item[] = await fetchItems();

  return (
    <section className="grid justify-items-center min-h-screen m-auto py-8 pb-20 max-w-[1400px] container">
      <article className="flex flex-col gap-10 p-4">
        <div>
          <h2 className="font-bold text-3xl">아이템 목록 보기</h2>
          <p className="font-light">
            Riot Games API를 활용하여 아이템 정보를 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map((item: Item) => (
            <ItemCard key={item.id} item={item} version={version} />
          ))}
        </div>
      </article>
    </section>
  );
}
