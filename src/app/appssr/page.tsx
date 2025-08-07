
export const dynamic = 'force-dynamic'
export default async function AppSSR() {
  const ssgTime = new Date().toLocaleString("ko-KR");
  return (
    <div className="w-full h-screen flex justify-center items-center flex flex-col">
      <h1 className="text-2xl font-bold p-5">
        SSR 예제 : {ssgTime}
      </h1>
      <p className="text-blue-500">
        요청시 서버에서 HTML을 생성함으로 새로고침하면 변경된 내용이 보임
      </p>
    </div>
  );
}