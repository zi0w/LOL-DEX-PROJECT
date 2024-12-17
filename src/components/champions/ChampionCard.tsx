import { LOADING_IMG_URL } from "@/constants/constants";
import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

type ChampionCardProps = {
  champion: Champion;
};

export function ChampionCard({ champion }: ChampionCardProps) {
  const IMAGE_URL = `${LOADING_IMG_URL}/${champion.id}_0.jpg`;

  return (
    <Link href={`/champions/${champion.id}`}>
      <div className="rounded-lg border bg-white text-black shadow-sm p-3 md:p-5">
        <div className="flex flex-col space-y-1.5 p-0 pb-4">
          <h3 className="text-2xl font-semibold">{champion.name}</h3>
          <p className="text-sm font-light text-[#828EA1]">{champion.title}</p>
        </div>
        <div className="flex justify-center w-full overflow-hidden">
          <Image
            src={IMAGE_URL}
            alt={`${champion.name} 이미지`}
            width={300}
            height={300}
            className="scale-110"
          />
        </div>
      </div>
    </Link>
  );
}
