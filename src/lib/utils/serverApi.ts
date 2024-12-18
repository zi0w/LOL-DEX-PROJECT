import { API_URL, dataUrl } from "@/lib/constants/constants";
import { Champion, ChampionDetail } from "@/lib/types/Champion";
import { Item } from "@/lib/types/Item";

// Data Dragon API 버전 정보
export async function fetchVersion(): Promise<string> {
  const response = await fetch(`${API_URL}/api/versions.json`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`버전 정보 요청 실패: ${response.status}`);
  }

  const data: string[] = await response.json();
  return data[0];
}

// 쳄피언 목록
export async function fetchChampionsList(): Promise<Champion[]> {
  const version = await fetchVersion();
  const response = await fetch(`${dataUrl(version)}/champion.json`, {
    next: {
      revalidate: 86400, // 하루
    },
  });

  if (!response.ok) {
    throw new Error(`챔피언 목록 요청 실패: ${response.status}`);
  }

  const data = await response.json();
  const champions: Champion[] = Object.values(data.data);
  return champions;
}

// 챔피언 상세 정보
export async function fetchChampionDetail(id: string): Promise<ChampionDetail> {
  const version = await fetchVersion();
  const response = await fetch(`${dataUrl(version)}/champion/${id}.json`);

  if (!response.ok) {
    throw new Error(`챔피언 정보 요청 실패: ${response.status}`);
  }

  const data = await response.json();
  const championDetail = data.data[id];

  return championDetail;
}

// 아이템 목록
export async function fetchItems(): Promise<Item[]> {
  const version = await fetchVersion();
  const response = await fetch(`${dataUrl(version)}/item.json`, {
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error(`아이템 정보 요청 실패: ${response.status}`);
  }

  const data = await response.json();
  const items: Item[] = Object.values(data.data);
  return items;
}
