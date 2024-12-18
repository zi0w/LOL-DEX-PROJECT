import { NextResponse } from "next/server";

import { ROTATE_API_URL } from "@/lib/constants/constants";
import { Rotation } from "@/lib/types/Rotation";

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API 요청 중 에러 발생" });
  }

  try {
    const response = await fetch(ROTATE_API_URL, {
      method: "GET",
      headers: {
        "X-Riot-Token": apiKey,
      },
      next: {
        revalidate: 86400,
      },
    });
    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }

    const data: Rotation = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "챔피언 로테이션 정보를 가지고 오는데 실패했습니다.",
    });
  }
}
