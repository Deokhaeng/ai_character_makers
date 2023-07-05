export default function Home() {
  const titleTextStyle = "text-title font-semibold";
  const infoTextStyle = "text-base text-gray-midium";

  return (
    <div className="flex items-center h-screen">
      <div className="grid justify-items-center px-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary from-0% rotate-90 mb-8" />
        <p className={titleTextStyle}>AI와의 대화를 통해</p>
        <p className={titleTextStyle}>나만의 캐릭터를 만들어 보세요.</p>
        <p className={`${infoTextStyle} mt-6`}>AI 기술을 중심으로 한 캐릭터 생성을 소개합니다.</p>
        <p className={infoTextStyle}>Chat Gpt와 Kalro AI와 같은 AI를 이용하여</p>
        <p className={infoTextStyle}>성격유형검사 내용을 생성하고 사용자의 답변을 분석하여,</p>
        <p className={infoTextStyle}>최적의 캐릭터를 생성해 줍니다.</p>
        <p className={infoTextStyle}>AI 기술의 강력함과 창의성을 경험하며,</p>
        <p className={infoTextStyle}>개개인 특성에 맞춘 독특한 캐릭터를 창조할 수 있습니다.</p>
        <p className="text-base">지금 AI와의 대화를 통해 나만의 캐릭터를 만들어 보세요!</p>
        <button
          type="button"
          className="rounded bg-primary mt-8 w-full py-3 text-white hover:bg-opacity-70"
        >
          시작하기
        </button>
        <p className="text-sm text-primary underline mt-2">
          입력하는 답변은 검사 이외의 용도로 사용하지 않습니다.
        </p>
      </div>
    </div>
  );
}
