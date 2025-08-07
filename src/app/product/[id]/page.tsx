import type { Product } from "@/types/product";
import { products } from "@/types/product";
import Link from "next/link";
                                                         
export default async function ProductDetail({
    params
} : {
    //async의 결과는 Promise로 잡혀야함
    params: Promise <{id : string}>
}) {
 const {id} = await params;
 console.log("id=",id)

 const p = products.filter((item : Product) => item.id == id)[0];
 return (
    <div className="w-full h-screen flex justify-center items-center flex flex-col">
      <h1 className="text-2xl font-bold text-gray-700  p-5">
        상품상세정보
      </h1>
      <ul className="border border-gray-300 text-gray-700 rounded-xl p-5">
        <li>{p.id}</li>
        <li>{p.name}</li>
        <li>{p.category}</li>
        <li>{p.price}</li>
        <li>{p.description}</li>
      </ul>
      <div className="mt-5">
        <Link href = "/productList" className="text-gray-700">이전으로</Link> 
      </div>
    </div>
  );
}