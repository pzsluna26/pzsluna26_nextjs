// 20250807-2 useState
'use client'

// 20250807-1 이미지
import Image from "next/image";
import { useState } from "react";


import type { FoodItem } from "@/types/Food";
  

interface FoodCardProbs { 
    item: FoodItem 
}

                                  
export default function FoodCard({ item }: FoodCardProbs) {              
    const [flag , setFalg] = useState<boolean>(false) ;
    const handleToggle = () => {
    setFalg(!flag) ;
    }
    const type = item["구분"];

    // 20250807-2 이미지 경로 변경
    const imageSrc =
        type === "광역지원센터"
            ? "/img/busan.png"
            : type === "기초푸드뱅크"
            ? "/img/bank.png"
            : type === "기초푸드마켓"
            ? "/img/market.png"
            : null;

    return (
        <div className="w-full flex justify-start items-start
                    border rounded-2xl border-gray-300">
            <div className="w-1/4 p-4">
                {imageSrc && (
                    <Image src={imageSrc} alt="category icon" width={200} height={100} />
                )}
            </div>
            <div className="w-3/4 flex flex-col justify-between items-start">
                <div className="w-full flex flex-col justify-start items-start">
                    <h1 className="mt-5 text-small font-bold">
                        {item["사업장명"]}
                    </h1>
                    <h2 className="text-small font-bold text-gray-500">
                        {item["운영주체명"]}
                    </h2>
                    <p className="h-12 w-full text-left text-xs text-gray-500">
                        {item["사업장 소재지"]}
                    </p>
                </div>
                <div className="bg-gray-100 h-8 mt-4 px-4 text-gray-700 text-left hover:cursor-pointer w-full"
                     onClick={handleToggle}>
                    {flag && item["연락처(대표번호)"]}
                </div>
            </div>
                
            
        </div>
    );
}

                