import MyClockTime from "../myClock/MyClockTime";

export default async function AppCSR() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex flex-col">
      <h1 className="text-2xl font-bold p-5">
        CSR 예제 
      </h1>
      <p className="text-blue-500">
        클라이언트에서 실행되며 클라이언트의 시간을 가져옴
      </p>
      <MyClockTime/>
    </div>
  );
}