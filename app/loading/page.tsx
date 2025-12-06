"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function LoadingPage() {
  const params = useSearchParams();
  const router = useRouter();

  const [loadingMessage, setLoadingMessage] = useState("논문 분석 중입니다...");

  useEffect(() => {
    const run = async () => {
      const paperData = params.get("paper");
      const url = params.get("url");

      // 1) 검색결과 클릭 → 이미 분석된 JSON 전달됨
      if (paperData) {
        setLoadingMessage("결과 불러오는 중...");
        await new Promise((r) => setTimeout(r, 500));

        router.push(`/results?data=${encodeURIComponent(paperData)}`);
        return;
      }

      // 2) Home URL 입력 + Try → 분석 API 호출
      if (url) {
        try {
          setLoadingMessage("PDF 다운로드 중...");

          const res = await fetch("http://localhost:8080/api/arxiv/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url }),
          });

          setLoadingMessage("AI 분석 진행 중...");

          const data = await res.json();

          router.push(
            `/results?data=${encodeURIComponent(JSON.stringify(data))}`
          );
        } catch (e) {
          console.error("LOAD ERROR:", e);

          router.push(
            `/results?error=${encodeURIComponent("분석 중 오류가 발생했습니다.")}`
          );
        }
      }
    };

    run();
  }, [params, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-xl text-gray-700">
      <div className="w-12 h-12 mb-6 border-4 border-gray-300 border-t-[#FDC324] rounded-full animate-spin"></div>
      {loadingMessage}
    </div>
  );
}
