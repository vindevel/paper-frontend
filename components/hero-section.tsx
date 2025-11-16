"use client"

import { Search } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center">
              <img
                src="/black_logo.png"
                alt="논문한입 로고"
                className="w-100 h-100 object-contain"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">논문한입</h1>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto flex gap-2">
            <div className="flex-1 flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-border">
              <Search size={20} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="arxiv 논문 링크 및 논문 제목 입력"
                className="flex-1 outline-none text-foreground placeholder:text-muted-foreground bg-transparent"
              />
            </div>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              검색
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
