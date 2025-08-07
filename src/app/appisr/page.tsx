export const revalidate = 10;
export default async function AppISR() {
  const ssgTime = new Date().toLocaleString("ko-KR");
  return (
    <div className="w-full h-screen flex justify-center items-center flex flex-col">
      <h1 className="text-2xl font-bold p-5">
        ISR 예제 : {ssgTime}
      </h1>
      <p className="text-blue-500">
        빌드시 HTML 문서로 생성되고 주기적으로 업데이트됨으로 10초 간격으로 변경 
      </p>
    </div>
  );
}