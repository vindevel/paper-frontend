"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

interface AnalysisResult {
  id: string;
  title: string;
  summary: string;
  equations: string[];
  images: string[];
  tables: string[];
}

const mockPapers: AnalysisResult[] = [
  {
    id: "1",
    title: "Portable Laser-Pumped Rb Atomic Clock with Digital Circuits",
    summary:
      "이 논문은 레이저로 구동되는 휴대용 루비듐 원자시계에 대해 설명합니다.",
    equations: ["E = hf", "λ = c/f"],
    images: ["시계 다이어그램", "레이저 설정도"],
    tables: ["성능 매개변수", "주파수 안정성"],
  },
  {
    id: "2",
    title: "Agent AI with LangGraph: A Modular Framework",
    summary:
      "LangGraph를 사용한 에이전트 AI 프레임워크에 대한 모듈식 접근",
    equations: ["P(A|B) = P(B|A)P(A)/P(B)"],
    images: ["아키텍처 다이어그램"],
    tables: ["성능 비교"],
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const result = mockPapers[0];
      router.push(
        `/results?paperId=${result.id}&query=${encodeURIComponent(searchQuery)}`
      );
    }
  };

  return (
    <main
      className="
        h-[calc(100vh-64px)]   /* 네비게이션 높이(64px) 제외 */
        w-full                 /* 가로 스크롤 방지 */
        overflow-hidden         /* 스크롤 완전 제거 */
        bg-white
        flex items-center justify-center
      "
    >
      {/* 중앙 카드 */}
      <div
        className="
          rounded-3xl shadow-xl
          p-25
          w-[80vw] max-w-5xl
          text-center
          transform -translate-y-6
        "
        style={{
          backgroundColor: "rgba(253, 195, 36, 0.1)", // FDC324 + 투명도 10%
        }}
      >
        <div className="text-center mb-10">
          <div className="flex justify-center mb-2">
            <img
              src="/black_logo.png"
              alt="논문한입 검은색 로고"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <h1 className="text-5xl text-[#030303] sm:text-5xl font-medium mb-4">논문한입</h1>
        </div>

        {/* Search Box */}
        <div className="flex justify-center gap-3 mb-6">
          <div className="flex-1 max-w-2xl flex items-center border-2 border-gray-300 rounded-lg px-4 py-3 bg-white/70">
            <Search size={22} className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="arXiv 논문 링크 또는 논문 제목 입력"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 outline-none bg-transparent text-gray-900 text-lg"
            />
          </div>
          <button
            onClick={handleSearch}
            className="px-8 py-3 rounded-lg font-semibold text-black transition-all hover:shadow-lg"
            style={{ backgroundColor: "#FDC324" }}
          >
            검색
          </button>
        </div>

        <p className="text-center text-base text-gray-600">
          사용자가 논문을 잘 이해할 수 있도록 돕는 AI 솔루션
        </p>
      </div>
    </main>
  );
}
