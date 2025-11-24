"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

function isUrl(text: string) {
  const pattern = /^https?:\/\/[^\s]+$/;
  return pattern.test(text);
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showOverlay, setShowOverlay] = useState(false);

  const router = useRouter();

  const handleSearch = async () => {
    const trimmed = searchQuery.trim();
    if (!trimmed) return;

    /** -------------------------------------
     * 1) URL 검색 → 바로 로딩 페이지 이동
     * ------------------------------------- */
    if (isUrl(trimmed)) {
        try {
          const res = await fetch("http://localhost:8080/api/arxiv/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: trimmed }),
          });

          const data = await res.json();

          router.push(
            `/loading?paper=${encodeURIComponent(JSON.stringify(data))}`
          );
        } catch (e) {
          console.error("UPLOAD ERROR:", e);
        }

        return;
      }

    /** -------------------------------------
     * 2) 제목 검색 → arXiv POST 검색 API 호출
     * ------------------------------------- */
    try {
        const res = await fetch(
          `http://localhost:8080/api/arxiv/search?query=${encodeURIComponent(trimmed)}`,
          {
            method: "GET",
          }
        );

        const data = await res.json();

        if (!Array.isArray(data) || data.length === 0) {
          setSearchResults([]);
          setShowOverlay(false);
          return;
        }

        setSearchResults(data);
        setShowOverlay(true);

      } catch (e) {
        console.error("SEARCH ERROR:", e);
      }
    };

  /** -------------------------------------
   * 제목 검색 결과 중 하나 선택하면
   * 로딩 페이지로 이동
   * ------------------------------------- */
  const handleSelectPaper = (paper: any) => {
    router.push(
      `/loading?paper=${encodeURIComponent(JSON.stringify(paper))}`
    );
  };

  return (
    <main
      className="
        h-[calc(100vh-64px)]
        w-full
        overflow-hidden
        bg-white
        flex items-center justify-center
      "
    >
      {/* 중앙 카드 */}
      <div
        className="
          relative
          rounded-3xl shadow-xl
          p-25
          w-[80vw] max-w-5xl
          text-center
          transform -translate-y-6
        "
        style={{
          backgroundColor: "rgba(253, 195, 36, 0.1)",
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
          <h1 className="text-5xl text-[#030303] sm:text-5xl font-medium mb-4">
            논문한입
          </h1>
        </div>

        {/* Search Box */}
        <div className="flex justify-center gap-3 mb-6 relative">
          <div className="flex-1 max-w-2xl flex items-center border-2 border-gray-300 rounded-lg px-4 py-3 bg-white/70">
            <Search size={22} className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="arXiv 논문 링크 또는 논문 제목 입력"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
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

          {/* ▼▼ 검색 결과 오버레이 (디자인 변경 없음) ▼▼ */}
          {showOverlay && searchResults.length > 0 && (
            <div
              className="
                absolute left-0 right-0 top-full mt-2
                bg-white border border-gray-200
                shadow-lg rounded-xl
                max-h-80 overflow-y-auto z-50
                text-left
              "
            >
              {searchResults.map((paper, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectPaper(paper)}
                  className="p-4 border-b hover:bg-gray-50 cursor-pointer"
                >
                  <h2 className="font-semibold">{paper.title}</h2>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {paper.summary}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <p className="text-center text-base text-gray-600">
          사용자가 논문을 잘 이해할 수 있도록 돕는 AI 솔루션
        </p>
      </div>
    </main>
  );
}
