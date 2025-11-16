"use client"

const steps = [
  {
    number: "1",
    title: "링크 입력",
    description: "arXiv 논문 링크를 검색창에 입력하세요.",
  },
  {
    number: "2",
    title: "분석 시작",
    description:
      "분석 페이지에 이동해 PDF 자료 분석을 시작합니다. 인터넷 연결 상태와 환경에 따라 분석에 시간이 다소 소요될 수 있습니다.",
  },
  {
    number: "3",
    title: "요약 및 스토리텔링",
    description:
      "논문을 한눈에 왜인할 수 있는 요약과 스토리텔링을 확인합니다. 배경 → 문제 → 해결책 → 실험 → 결과의 구성을 통해 논문을 쉽게 이해할 수 있습니다.",
  },
]

export function StepsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">사용 방법</h2>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 md:p-8 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                  Step {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
