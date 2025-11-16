"use client"

const papers = [
  {
    category: "물리학",
    title: "Portable Laser-Pumped Rb Atomic Clock with Digital Circuits",
    authors: "Qiang Hao, Shaojie Yang 등",
  },
  {
    category: "인공지능",
    title: "Agent AI with LangGraph: A Modular Framework for Enhancing Machine Translation Using Large Language Models",
    authors: "Jialin Wang, Zhihua Duan 등",
  },
  {
    category: "네트워크 보안",
    title: "eBPF-Based DDoS Mitigation in IoT Networks",
    authors: "Alex Kim, Maria Rodriguez 등",
  },
  {
    category: "자연어처리",
    title: "Attention Is All You Need",
    authors: "Ashish Vaswani, Noam Shazeer 등",
  },
  {
    category: "소프트웨어 엔지니어링",
    title: "LaajMeter: A Framework for LaaJ Evaluation",
    authors: "Gal Amram, Eitan Farchi 등",
  },
  {
    category: "교육 기술",
    title: "Between Tool and Ornament: Student Attitudes Toward AI in Programming Education",
    authors: "Sergio Rojas-Galeano, Julian Tejada 등",
  },
]

export function PaperGridSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">다양한 분야의 논문들</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {papers.map((paper, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
              <span className="text-xs font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                {paper.category}
              </span>
              <h3 className="text-lg font-bold text-foreground mt-4 mb-2 line-clamp-2">{paper.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{paper.authors}</p>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                체험해보기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
