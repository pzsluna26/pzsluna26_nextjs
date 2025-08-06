'use client'
// home.jsx

import { useAtom } from "jotai";
                        //src기준 => @
import { isLogin } from "@/atoms/IsLoginAtom";
import { useEffect, useState } from "react";

// login
import Login from "@/components/Login";

export default function Home() {
  const [login] = useAtom(isLogin);
  const [id, setId] = useState<string | null>(null);

    useEffect(() => {
    if (login) {
                      //클라이언트에서 실행되니까 => 'use client'
      const storedId = localStorage.getItem("id");
      setId(storedId);
    }
  }, [login]);

  return (
    <div>
      {login ? (
        <div className="mt-50">{id} 님 로그인이 되었습니다☺️</div>
      ) : ( 
       <Login />
      )}
    </div>
  );
}
