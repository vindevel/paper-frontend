export default function About() {
  return (
    <main
      className="
        h-[calc(100vh-64px)]  /* 네비게이션 높이 제외 */
        w-full
        bg-white
        overflow-hidden
        flex flex-col items-center justify-center
        px-4
      "
    >
      {/* 상단 제목 */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-18">
        논문 이해를 위한 새로운 접근
      </h1>

      {/* 중앙 이미지 (원 대신) */}
      <div className="mb-18 flex justify-center">
        <img
          src="/explain.png"
          alt="논문한입 개념 다이어그램"
          className="w-[600px] md:w-[700px] h-auto object-contain"
        />
      </div>

      {/* 하단 문구 */}
      <div className="text-center">
        <p className="text-gray-600 mb-2 text-xl font-bold">단순 요약을 넘어</p>
        <p className="text-xl md:text-2xl font-bold">
          사용자가 논문을 잘 이해할 수 있도록 돕는{" "}
          <span className="text-[#FDC324]">AI 솔루션</span>
        </p>
      </div>
    </main>
  );
}
