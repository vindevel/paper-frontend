"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function LoadingPage() {
  const params = useSearchParams();
  const router = useRouter();

  const [loadingMessage, setLoadingMessage] = useState("논문 분석 중입니다...");

  useEffect(() => {
    const run = async () => {
      setLoadingMessage("PDF 다운로드 중...");

      // 2초 대기 (PDF 다운로드 단계)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoadingMessage("AI 분석 진행 중...");

      // 2초 대기 (AI 분석 단계)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // 테스트용 dummy 데이터 생성
      const dummy = {
        title: "Mock Paper Title",
        summary: "This is a mock summary for loading page test.",
        equations: [],
      };

      // 결과 페이지로 이동
      router.push(
        `/results?data=${encodeURIComponent(JSON.stringify(dummy))}`
      );
    };

    run();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-xl text-gray-700">
      <div className="w-12 h-12 mb-6 border-4 border-gray-300 border-t-[#FDC324] rounded-full animate-spin"></div>
      {loadingMessage}
    </div>
  );
}
