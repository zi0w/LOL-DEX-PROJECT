"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  const router = useRouter();

  return (
    <section className="grid justify-items-center min-h-screen py-8 pb-20 m-auto max-w-custom container">
      <article className="flex flex-col justify-center items-center gap-10 p-4 text-center">
        <div>
          <h2 className="font-bold text-3xl">
            아이템 페이지에서 에러가 발생했습니다!
          </h2>
          <p className="font-light">{error.message}</p>
        </div>
        <button
          onClick={() => {
            // 묶어서 한 번에 실행
            startTransition(() => {
              router.refresh();
              reset();
            });
          }}
          className="border border-black py-1.5 px-2 rounded-md"
        >
          다시 시도하기
        </button>
      </article>
    </section>
  );
}
