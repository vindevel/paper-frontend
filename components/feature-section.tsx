"use client"

export function FeatureSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">논문 이해를 위한 새로운 접근</h2>
        </div>

        {/* Venn Diagram Section */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="relative w-full max-w-lg h-80">
            {/* Left Circle */}
            <div className="absolute left-0 top-0 w-40 h-40 bg-primary/80 rounded-full flex items-center justify-center text-white font-bold text-lg text-center p-4 md:left-1/4 md:top-1/2 md:-translate-y-1/2">
              <div>
                <div className="text-2xl mb-2">📊</div>
                <div>자세한 요약</div>
              </div>
            </div>

            {/* Right Circle */}
            <div className="absolute right-0 top-0 w-40 h-40 bg-blue-300 rounded-full flex items-center justify-center font-bold text-lg text-center p-4 md:right-1/4 md:top-1/2 md:-translate-y-1/2">
              <div>
                <div className="text-2xl mb-2">✨</div>
                <div>스토리텔링</div>
              </div>
            </div>

            {/* Center Text - Mobile positioning */}
            <div className="absolute inset-0 flex items-center justify-center md:hidden">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">
                  <div>수식</div>
                  <div>도표</div>
                  <div>이미지</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-8 space-y-4">
            <h3 className="text-lg font-semibold text-foreground">단순 요약을 넘어</h3>
            <p className="text-muted-foreground max-w-2xl">
              사용자가 논문을 잘 이해할 수 있도록 돕는 <span className="text-primary font-semibold">AI 솔루션</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
