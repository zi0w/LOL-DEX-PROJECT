import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <section className="grid justify-items-center min-h-screen py-8 pb-20 m-auto max-w-custom container">
      <article className="flex flex-col gap-10 p-4">
        <div>
          <h2 className="font-bold text-3xl">리그 오브 레전드 정보 앱</h2>
          <p className="font-light">
            Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
          </p>
        </div>

        <div>
          <ul className="flex flex-col gap-3 items-center justify-center lg:flex-row">
            <li>
              <Link
                href={"/champions"}
                className="flex flex-col gap-2 items-center justify-center"
              >
                <Image
                  src="/images/image1.jpg"
                  alt="champions-image"
                  width={450}
                  height={350}
                />
                <p>챔피언 목록 보기</p>
              </Link>
            </li>
            <li>
              <Link href={"/items"} className="flex flex-col gap-2 items-center justify-center"> 
                <Image
                  src="/images/image2.jpg"
                  alt="items-image"
                  width={430}
                  height={330}
                />
                <p>아이템 목록 보기</p>
              </Link>
            </li>
            <li>
              <Link href={"/rotation"} className="flex flex-col gap-2 items-center justify-center">
                <Image
                  src="/images/image3.jpg"
                  alt="rotation-image"
                  width={430}
                  height={330}
                />
                <p>금주 로테이션 확인</p>
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default HomePage;
