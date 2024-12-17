export const API_URL = "https://ddragon.leagueoflegends.com";
export const LOADING_IMG_URL = `${API_URL}/cdn/img/champion/loading`;
export const SPLASH_IMG_URL = `${API_URL}/cdn/img/champion/splash`;

export const dataUrl = (version: string) =>
  `${API_URL}/cdn/${version}/data/ko_KR`;

export const passiveImgUrl = (version: string, passiveImg: string) =>
  `${API_URL}/cdn/${version}/img/passive/${passiveImg}`;

export const spellImgUrl = (version: string, spellImg: string) =>
  `${API_URL}/cdn/${version}/img/spell/${spellImg}`;

export const itemUrl = (version: string, itemImg: string) =>
  `${API_URL}/cdn/${version}/img/item/${itemImg}`;
