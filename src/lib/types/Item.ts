import { Image } from "./Champion";

export type Item = {
  id: string;
  name: string;
  description: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: {
    base: number;
    total: number;
    sell: number;
    purchasable: boolean;
  };
  tag: string[];
};

export type ItemListResponse = {
  type: string;
  version: string;
  data: {
    [key: string]: Item;
  };
};
