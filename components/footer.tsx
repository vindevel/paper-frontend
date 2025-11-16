"use client"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">논문한입</h4>
            <p className="text-sm opacity-80">AI를 통한 새로운 논문 이해 방식</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">메뉴</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100">
                  메인화면
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  사용방법
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">지원</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100">
                  문의하기
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  피드백
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  도움말
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">연락처</h4>
            <p className="text-sm opacity-80">contact@nonmunhanip.com</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 논문한입. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
