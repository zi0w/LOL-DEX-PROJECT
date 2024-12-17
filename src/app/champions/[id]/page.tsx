import { ChampionDetail } from "@/types/Champion";
import { fetchChampionDetail } from "@/utils/serverApi";

type DetailProps = {
  params: {
    id: string;
  };
};

export default async function ChampionDetailPage({ params }: DetailProps) {
  const champion: ChampionDetail = await fetchChampionDetail(params.id);
}
