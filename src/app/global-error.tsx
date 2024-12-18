"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorProps) {
  const router = useRouter();

  return (
    <html>
      <body>
        <section className="grid justify-items-center min-h-screen py-8 pb-20 m-auto max-w-custom container">
          <article className="flex flex-col justify-center items-center gap-10 p-4 text-center">
            <div>
              <h2 className="font-bold text-3xl">
                예상치 못한 에러가 발생했습니다!
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
      </body>
    </html>
  );
}
