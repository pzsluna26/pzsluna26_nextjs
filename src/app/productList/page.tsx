import { products } from "@/types/product";
import type { Product } from "@/types/product";
import Link from "next/link";

export default async function ProductList() {
  return (
   <div className="w-full h-screen flex justify-center items-center flex flex-col">
      <h1 className="text-2xl font-bold p-5">
        상품목록
      </h1>
      <p className="text-black">
        {   //상품을 클릭하면 id나오게 하고, 그 id의 정보나오게 할거야
            products.map((item : Product)=>  
                            <li key={item.id}>
                                <Link href={`/product/${item.id}`}>
                                    [{item.id}] {item.name}
                                </Link>
                            </li>
                        )
        }
      </p>
    </div>
  );
}