import { Champion } from "@/lib/types/Champion";
import { Rotation } from "@/lib/types/Rotation";

import { fetchChampionsList } from "./serverApi";

export async function getChampionRotation(): Promise<{
  allPlayers: Champion[];
  newPlayers: Champion[];
}> {
  try {
    const response = await fetch("/api/rotation", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }

    const data: Rotation = await response.json();
    const freeChampionIds: number[] = data.freeChampionIds;
    const freeChampionIdsForNewPlayers: number[] =
      data.freeChampionIdsForNewPlayers;

    const champions = await fetchChampionsList();

    const allPlayers: Champion[] = champions.filter((champion) =>
      freeChampionIds.includes(Number(champion.key))
    );
    const newPlayers: Champion[] = champions.filter((champion) =>
      freeChampionIdsForNewPlayers.includes(Number(champion.key))
    );

    return {
      allPlayers,
      newPlayers,
    };
  } catch (error) {
    console.error("챔피언 로테이션 데이터를 가져오는 중 에러가 발생했습니다.");
    throw new Error(
      "챔피언 로테이션 데이터를 가져오는 중 에러가 발생했습니다."
    );
  }
}
