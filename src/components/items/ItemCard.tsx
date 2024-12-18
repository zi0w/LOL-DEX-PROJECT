import Image from "next/image";

import { itemUrl } from "@/lib/constants/constants";
import { Item } from "@/lib/types/Item";

type ItemCardProps = {
  item: Item;
  version: string;
};

export default function ItemCard({ item, version }: ItemCardProps) {
  const ITEM_IMAGE_URL = itemUrl(version, item.image.full);

  return (
    <div className="flex flex-col items-center gap-2 text-sm rounded-lg border text-[#828EA1] shadow-sm p-3 md:p-5">
      <div>
        <Image src={ITEM_IMAGE_URL} alt={item.name} width={60} height={60} />
      </div>
      <div className="pb-4">
        <h3>{item.name}</h3>
      </div>
    </div>
  );
}
