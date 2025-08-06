import Link from "next/link";

export default function NotFOund() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex flex-col">
      <h1 className="text-2xl font-bold p-5">
        404-페이지를 찾을 수 없습니다.
      </h1>
      <p className="text-blue-500">
        요청하신 페이지가 존재하지 않습니다.
      </p>
      <Link href="/"> 처음으로 </Link>
    </div>
  );
}