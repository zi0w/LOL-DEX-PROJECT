import {
  LOADING_IMG_URL,
  passiveImgUrl,
  spellImgUrl,
  SPLASH_IMG_URL,
} from "@/constants/constants";
import { ChampionDetail, ChampionSkill } from "@/types/Champion";
import { fetchChampionDetail, fetchVersion } from "@/utils/serverApi";
import Image from "next/image";

type DetailProps = {
  params: {
    id: string;
  };
};

export default async function ChampionDetailPage({ params }: DetailProps) {
  const version: string = await fetchVersion();
  const champion: ChampionDetail = await fetchChampionDetail(params.id);

  const keyBoard: string[] = ["Q", "W", "E", "R"];
  const spellsWithKeys: ChampionSkill[] = champion.spells.map(
    (spell: ChampionSkill, idx: number) => ({
      ...spell,
      key: keyBoard[idx],
    })
  );

  return (
    <article className="relative w-full min-h-screen text-white">
      {/* 배경 */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-no-repeat bg-fixed opacity-80 grayscale-[60%]"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),
        url(${SPLASH_IMG_URL}/${champion.id}_1.jpg)`,
        }}
      ></div>

      <div className="relative m-auto min-h-screen max-w-[1400px] py-8 pb-20 container">
        <div className="flex flex-col gap-10 p-4">
          <h2 className="font-bold text-3xl">
            <p className="font-light text-base opacity-80">{champion.title}</p>
            {champion.name}
          </h2>
          <div className="flex flex-col gap-10">
            <div className="flex items-start justify-center max-w-[200px] max-h-[200px] overflow-hidden rounded-lg">
              <Image
                src={`${LOADING_IMG_URL}/${champion.id}_0.jpg`}
                alt={champion.name}
                width={300}
                height={300}
                className="scale-110"
              />
            </div>
            <p>{champion.lore}</p>
          </div>

          <h2 className="font-bold text-3xl">스탯</h2>
          <div className="flex flex-row gap-4">
            <p>공격력: {champion.info.attack}</p>
            <p>방어력: {champion.info.defense}</p>
            <p>마법력: {champion.info.magic}</p>
            <p>난이도: {champion.info.difficulty}</p>
          </div>

          <h2 className="font-bold text-3xl">스킬</h2>
          <div className="w-full flex justify-start md:-ml-2">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={passiveImgUrl(version, champion.passive.image.full)}
                  width={50}
                  height={50}
                  alt={champion.passive.name}
                  className="rounded-sm"
                />
                <p className="mt-2 text-sm text-center">
                  {champion.passive.name}
                  <br />
                  (P)
                </p>
              </div>

              {spellsWithKeys.map((spell: ChampionSkill) => (
                <div
                  key={spell.id}
                  className="flex flex-col justify-center items-center"
                >
                  <Image
                    src={spellImgUrl(version, spell.image.full)}
                    alt={spell.name}
                    width={50}
                    height={50}
                    className="rounded-sm"
                  />
                  <p className="mt-2 text-sm text-center">
                    {spell.name} <br />({spell.key})
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
