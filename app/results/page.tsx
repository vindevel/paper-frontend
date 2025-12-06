"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"

interface TabContent {
  title: string
  content: string
}

const mockAnalysis = {
  title: "Portable Laser-Pumped Rb Atomic Clock with Digital Circuits",
  authors: "Qiang Hao, Shaojie Yang",
  abstract:
    "루비듐 원자시계는 높은 주파수 안정성과 정확도를 제공하는 정밀 시계로, 광펌핑 기술과 디지털 회로를 결합하여 소형화와 저전력화를 구현할 수 있다. 본 논문은 이러한 시스템의 설계 및 구현 과정을 다루며, 실험적 결과를 통해 제안된 시스템의 성능을 검증한다.",
  summaries: [
    {
      title: "연구 목적",
      content:
        "이 연구의 목적은 휴대용 루비듐 원자시계를 개발하여 이동형 정밀 시각 동기화 시스템에 적용할 수 있도록 하는 것이다.",
    },
    {
      title: "핵심 방법",
      content:
        "레이저 광펌핑 기술과 디지털 회로 제어 기법을 결합하여 기존 원자시계보다 작고 효율적인 시스템을 설계하였다.",
    },
    {
      title: "결론 및 의의",
      content:
        "제안된 시스템은 실험적으로 높은 안정성과 정확도를 입증하였으며, 저전력 정밀 타이밍 장치의 실현 가능성을 제시하였다.",
    },
  ],
  equations: [
    { title: "페이지 1", content: "주파수 변화: Δf/f = (Δλ/λ) × (c/f)" },
    { title: "페이지 2", content: "불확실도: σ = √(σ₀² + σ₁²)" },
  ],
  images: [
    { title: "이미지 1", content: "원자시계의 전체 블록 다이어그램" },
    { title: "이미지 2", content: "광펌핑 시스템의 세부 구조" },
  ],
  tables: [
    { title: "표 1", content: "성능 사양 비교표" },
    { title: "표 2", content: "측정 결과 데이터" },
  ],
}

export default function Results() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<
    "summary" | "story" | "equations" | "images" | "tables"
  >("summary")
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleItem = (key: string) => {
    setExpandedItems((prev) =>
      prev.includes(key)
        ? prev.filter((item) => item !== key) // 이미 열려있으면 제거(닫기)
        : [...prev, key]                      // 없으면 추가(열기)
    )
  }

  const tabs = [
    { id: "summary", label: "요약" },
    { id: "story", label: "스토리텔링" },
    { id: "equations", label: "수식 분석" },
    { id: "images", label: "이미지 분석" },
    { id: "tables", label: "표 분석" },
  ] as const

  const renderContent = () => {
    switch (activeTab) {
      // 요약 탭 (multi toggle)
      case "summary":
        return (
          <div className="space-y-3">
            {mockAnalysis.summaries.map((item, idx) => {
              const key = `sum-${idx}`

              return (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(key)}
                    className="w-full px-4 py-3 text-left font-semibold flex justify-between items-center hover:bg-gray-50"
                  >
                    {item.title}
                    <span>{expandedItems.includes(key) ? "−" : "+"}</span>
                  </button>

                  {expandedItems.includes(key) && (
                    <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 text-gray-700 leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )


      // 스토리텔링 탭
      case "story":
        return (
          <div className="bg-[rgba(253,195,36,0.1)] p-8 rounded-lg border border-[#FDC324]/30">
            <h3 className="font-semibold text-lg mb-2 text-[#000000]">논문 스토리</h3>
            <p className="text-gray-700 mb-8">
              이 논문이 어떻게 탄생했고, 무엇을 해결했는지 이야기로 알아보세요!
            </p>

            <div className="relative border-l-2 border-[#FDC324] ml-6 space-y-10">
              {[
                { icon: "📖", title: "배경", text: "논문의 배경 내용을 여기에 입력하세요." },
                { icon: "❓", title: "문제", text: "논문의 문제 내용을 여기에 입력하세요." },
                { icon: "💡", title: "해결책", text: "논문의 해결책 내용을 여기에 입력하세요." },
                { icon: "🧪", title: "실험", text: "논문의 실험 내용을 여기에 입력하세요." },
                { icon: "🏁", title: "결과", text: "논문의 결과 내용을 여기에 입력하세요." },
              ].map((item, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute -left-5 top-0 flex items-center justify-center w-8 h-8 bg-white border-2 border-[#FDC324] rounded-full text-xl">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )

      // 수식 분석
      case "equations":
        return (
          <div className="space-y-3">
            {mockAnalysis.equations.map((item, idx) => {
              const key = `eq-${idx}`
              const isOpen = expandedItems.includes(key)

              return (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(key)}
                    className="w-full px-4 py-3 text-left font-semibold flex justify-between items-center hover:bg-gray-50"
                  >
                    {item.title}
                    <span>{isOpen ? "−" : "+"}</span>
                  </button>

                  {isOpen && (
                    <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 text-gray-700">
                      {item.content}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )

      // 이미지 분석
      case "images":
        return (
          <div className="space-y-3">
            {mockAnalysis.images.map((item, idx) => {
              const key = `img-${idx}`
              const isOpen = expandedItems.includes(key)

              return (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(key)}
                    className="w-full px-4 py-3 text-left font-semibold flex justify-between items-center hover:bg-gray-50"
                  >
                    {item.title}
                    <span>{isOpen ? "−" : "+"}</span>
                  </button>

                  {isOpen && (
                    <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 text-gray-700">
                      {item.content}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )


      // 표 분석
      case "tables":
        return (
          <div className="space-y-3">
            {mockAnalysis.tables.map((item, idx) => {
              const key = `tbl-${idx}`
              const isOpen = expandedItems.includes(key)

              return (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(key)}
                    className="w-full px-4 py-3 text-left font-semibold flex justify-between items-center hover:bg-gray-50"
                  >
                    {item.title}
                    <span>{isOpen ? "−" : "+"}</span>
                  </button>

                  {isOpen && (
                    <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 text-gray-700">
                      {item.content}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )
      }
  }
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 논문 기본 정보 */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{mockAnalysis.title}</h1>
          <p className="text-gray-600 mb-4">저자: {mockAnalysis.authors}</p>

          {/* 초록 박스 - 회색톤 통일 */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h3 className="font-semibold text-lg mb-2 text-[#000000]">초록 (Abstract)</h3>
            <p className="text-gray-700 leading-relaxed">{mockAnalysis.abstract}</p>
          </div>
        </div>

        {/* 분석 통계 카드 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { icon: "🗐", label: "분석된 섹션", value: 7 },
            { icon: "∑", label: "분석된 수식", value: mockAnalysis.equations.length },
            { icon: "⧉", label: "분석된 이미지", value: mockAnalysis.images.length },
            { icon: "𝄜", label: "분석된 표", value: mockAnalysis.tables.length },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-2xl py-4 px-3 text-gray-900 border border-[#FDC324]/30"
              style={{ backgroundColor: "rgba(253, 195, 36, 0.1)" }}
            >
              <div className="text-3xl mb-1">{item.icon}</div>
              <div className="text-sm font-semibold">{item.label}</div>
              <div className="text-xl font-bold mt-1">{item.value}</div>
            </div>
          ))}
        </div>

        {/* 탭 바 */}
        <div className="flex gap-3 mb-8 border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-semibold whitespace-nowrap border-b-2 transition-all ${
                activeTab === tab.id
                  ? "border-yellow-400 text-yellow-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
              style={activeTab === tab.id ? { borderBottomColor: "#FDC324", color: "#FDC324" } : {}}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 콘텐츠 영역 */}
        <div className="mb-12">{renderContent()}</div>
      </div>
    </main>
  )
}
