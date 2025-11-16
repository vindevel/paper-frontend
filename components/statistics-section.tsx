"use client"

const stats = [
  {
    icon: "📋",
    label: "분석된 논문",
    value: "7",
    description: "최 분석업데이트 중",
  },
  {
    icon: "✏️",
    label: "분석된 수식",
    value: "11",
    description: "최 분석업데이트 중",
  },
  {
    icon: "🖼️",
    label: "분석된 이미지",
    value: "7",
    description: "최 분석업데이트 중",
  },
  {
    icon: "📊",
    label: "분석된 표",
    value: "4",
    description: "최 분석업데이트 중",
  },
]

export function StatisticsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-muted/50 rounded-xl p-8 md:p-12">
          <h3 className="text-lg font-semibold text-foreground mb-8">실시간 분석 결과</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-primary/10 rounded-2xl p-4 md:p-6 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-4">상세 분석 결과</h4>
            <div className="flex gap-2 flex-wrap">
              {["제목과 요약", "수식 분석", "이미지 분석", "표 분석"].map((tag, idx) => (
                <div key={idx} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
