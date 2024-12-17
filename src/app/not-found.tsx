import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid justify-items-center min-h-screen py-8 pb-20 m-auto max-w-custom container">
      <article className="flex flex-col justify-center items-center gap-10 p-4">
        <div>
          <h2 className="font-bold text-3xl">
            404 - 페이지를 찾을 수 없습니다!
          </h2>
          <p className="font-light">
            요청하신 페이지가 존재하지 않거나, 경로가 잘못되었습니다.
          </p>
        </div>
        <Link href={"/"}>
          <button className="border border-black py-1.5 px-2 rounded-md">
            홈으로 돌아가기
          </button>
        </Link>
      </article>
    </section>
  );
}
