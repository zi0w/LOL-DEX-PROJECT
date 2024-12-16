// 챔피언 기본 정보
export type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: Image;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
};

// 이미지 정보 타입
export type Image = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

// 챔피언 상세 정보 API 응답 타입
export type ChampionDetailResponse = {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: ChampionDetail;
  };
};

// 챔피언 상세 정보 타입
export type ChampionDetail = Champion & {
  lore: string;
  skins: ChampionSkin[];
  spells: ChampionSkill[];
  passive: ChampionPassive;
};

// 챔피언 스킨 정보 타입
export type ChampionSkin = {
  id: string;
  name: string;
  num: number;
  chromas: boolean;
};

// 챔피언 스킬 정보 타입
export type ChampionSkill = {
  id: string;
  key: string;
  name: string;
  description: string;
  image: Image;
};

// 챔피언 패시브
export type ChampionPassive = {
  name: string;
  description: string;
  image: Image;
};
