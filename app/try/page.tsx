"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface Paper {
  id: string
  category: string
  title: string
  authors: string
}

const samplePapers: Paper[] = [
  { id: "1", category: "Physics", title: "Portable Laser-Pumped Rb Atomic Clock with Digital Circuits", authors: "Qiang Hao, Shaojie Yang 등" },
  { id: "2", category: "Artificial Intelligence", title: "Agent AI with LangGraph: A Modular Framework for Enhancing Machine Translation Using Large Language Models", authors: "Jialin Wang, Zhihua Duan 등" },
  { id: "3", category: "Network Security", title: "eBPF-Based DDoS Mitigation in IoT Networks", authors: "Alex Kim, Maria Rodriguez 등" },
  { id: "4", category: "Natural Language Processing", title: "Attention Is All You Need", authors: "Ashish Vaswani, Noam Shazeer 등" },
  { id: "5", category: "Software Engineering", title: "LaajMeter: A Framework for Laaj Evaluation", authors: "Gal Amram, Eitan Farchi 등" },
  { id: "6", category: "Education Technology", title: "Between Tool and Agent: Exploring Student Attitudes Toward AI in Programming Education", authors: "Sergio Rojas-Galeano, Julian Tejada 등" },
]

const apiMap: Record<string, string> = {
  "1": "https://arxiv.org/abs/2508.12437",
  "2": "https://arxiv.org/abs/2412.03801",
  "3": "https://arxiv.org/abs/2508.00851",
  "4": "https://arxiv.org/abs/1706.03762v7",
  "5": "https://arxiv.org/abs/2508.10161",
  "6": "https://arxiv.org/abs/2508.05999v1",
}

export default function Try() {
  const [selectedPaper, setSelectedPaper] = useState<string | null>(null)
  const router = useRouter()

  const handleStart = () => {
    if (!selectedPaper) return

    const paperUrl = apiMap[selectedPaper]

    // 방식 A: API 호출 없이 URL만 넘김
    router.push(`/loading?url=${encodeURIComponent(paperUrl)}`)
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">체험하기</h1>
        <p className="text-gray-600 mb-12">다음 6개 논문 중 하나를 선택하여 분석해보세요</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samplePapers.map((paper) => (
            <div
              key={paper.id}
              onClick={() => setSelectedPaper(paper.id)}
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all flex flex-col justify-between h-full ${
                selectedPaper === paper.id
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-gray-200 hover:border-yellow-300"
              }`}
            >
              <div>
                <div className="text-sm font-semibold mb-2" style={{ color: "#FDC324" }}>
                  {paper.category}
                </div>
                <h3 className="font-bold mb-3 leading-tight">{paper.title}</h3>
                <p className="text-sm text-gray-600">{paper.authors}</p>
              </div>

              <button
                className="mt-6 w-full py-2 rounded text-sm font-semibold"
                style={{ backgroundColor: "#FDC324", color: "#000000" }}
              >
                선택
              </button>
            </div>
          ))}
        </div>

        {selectedPaper && (
          <div
            className="mt-12 p-6 bg-yellow-50 rounded-lg border-2"
            style={{ borderColor: "#FDC324", backgroundColor: "#FFFACD" }}
          >
            <p className="text-center font-semibold mb-4">
              논문이 선택되었습니다! 분석을 시작하시겠습니까?
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleStart}
                className="px-8 py-2 rounded font-semibold"
                style={{ backgroundColor: "#FDC324", color: "#000000" }}
              >
                분석 시작
              </button>

              <button
                onClick={() => setSelectedPaper(null)}
                className="px-8 py-2 rounded font-semibold border-2 border-gray-300"
              >
                다른 논문 선택
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
