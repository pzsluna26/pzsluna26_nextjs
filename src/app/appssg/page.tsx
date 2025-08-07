
export default async function AppSSG() {
  const ssgTime = new Date().toLocaleString("ko-KR");
  return (
    <div className="w-full h-screen flex justify-center items-center flex flex-col">
      <h1 className="text-2xl font-bold p-5">
        SSG 예제 : {ssgTime}
      </h1>
      <p className="text-blue-500">
        빌드시 HTML 문서로 생성되고 새로고침 변경되지 않습니다.
      </p>
    </div>
  );
}