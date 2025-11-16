"use client";

import { useState } from "react";

export default function Usage() {
  const [mode, setMode] = useState<"title" | "link">("title");

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-start px-4 py-12">
      {/* 탭 버튼 */}
      <div className="flex gap-8 mb-10 pb-2">
        <button
          onClick={() => setMode("title")}
          className={`pb-2 text-lg font-semibold transition-all ${
            mode === "title"
              ? "text-[#FDC324] border-b-2 border-[#FDC324]"
              : "text-black hover:text-[#FDC324]"
          }`}
        >
          제목 입력으로 시작
        </button>
        <button
          onClick={() => setMode("link")}
          className={`pb-2 text-lg font-semibold transition-all ${
            mode === "link"
              ? "text-[#FDC324] border-b-2 border-[#FDC324]"
              : "text-black hover:text-[#FDC324]"
          }`}
        >
          링크 입력으로 시작
        </button>
      </div>

      {/* 안내 영역 */}
      <div className="w-full max-w-4xl rounded-3xl p-8 shadow-sm"
      style={{ backgroundColor: "rgba(253, 195, 36, 0.1)" }}>
        {mode === "title" ? (
          <>
            {/* Step 1 */}
            <div className="flex items-start gap-4 mb-8">
              <div className="px-3 py-1 rounded-md bg-[#FDC324] text-white font-semibold">
                Step 1
              </div>
              <div>
                <h2 className="font-bold text-lg mb-1">제목 입력</h2>
                <p>arXiv 논문 제목을 검색창에 입력하세요.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 mb-8">
              <div className="px-3 py-1 rounded-md bg-[#FDC324] text-white font-semibold">
                Step 2
              </div>
              <div>
                <h2 className="font-bold text-lg mb-1">논문 선택</h2>
                <p>5개의 논문 중 원하는 논문을 선택하세요.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 mb-8">
              <div className="px-3 py-1 rounded-md bg-[#FDC324] text-white font-semibold">
                Step 3
              </div>
              <div>
                <h2 className="font-bold text-lg mb-1">분석 시작</h2>
                <p>선택한 논문에 대해 PDF 자동 분석이 시작됩니다.</p>
                <p>
                  인터넷 연결 상태와 환경에 따라 분석 시간이 다소 소요될 수 있습니다.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-4">
              <div className="px-3 py-1 rounded-md bg-[#FDC324] text-white font-semibold">
                Step 4
              </div>
              <div>
                <h2 className="font-bold text-lg mb-1">요약 및 스토리텔링</h2>
                <p>논문한입에서는 논문의 요약과 스토리텔링을 한눈에 확인할 수 있습니다.</p>
                <p>
                  배경 → 문제 → 해결책 → 실험 → 결과의 구조를 통해 논문을 쉽게 이해할 수 있습니다.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Step 1 */}
            <div className="flex items-start gap-4 mb-8">
              <div className="px-3 py-1 rounded-md bg-[#FDC324] text-white font-semibold">
                Step 1
              </div>
              <div>
                <h2 className="font-bold text-lg mb-1">링크 입력</h2>
                <p>arXiv 논문 링크를 검색창에 입력하세요.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 mb-8">
              <div className="px-3 py-1 rounded-md bg-[#FDC324] text-white font-semibold">
                Step 2
              </div>
              <div>
                <h2 className="font-bold text-lg mb-1">분석 시작</h2>
                <p>분석 페이지로 이동하여 PDF 자동 분석이 시작됩니다.</p>
                <p>
                  인터넷 연결 상태와 환경에 따라 분석 시간이 다소 소요될 수 있습니다.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="px-3 py-1 rounded-md bg-[#FDC324] text-white font-semibold">
                Step 3
              </div>
              <div>
                <h2 className="font-bold text-lg mb-1">요약 및 스토리텔링</h2>
                <p>논문한입에서 논문 요약과 스토리텔링 결과를 확인할 수 있습니다.</p>
                <p>
                  배경 → 문제 → 해결책 → 실험 → 결과의 구성을 통해 논문을 쉽게 이해할 수 있습니다.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
