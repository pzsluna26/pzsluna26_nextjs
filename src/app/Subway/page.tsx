'use client'

import { useEffect } from 'react'
import TailSelect from '@/ui/TailSelect'
import { useRef,useState } from 'react'
import SubwayBox from './SubwayBox'

//알고있으면 키값을, [key: string]: any; 보다는 명시적으로 아래처럼 하는게 좋음
// interface SubwayItem {
//       "city": string,
//       "pm10": string,
//       "co2": string,
//       "co": string,
//       "no2": string,
//       "no": string,
//       "nox": string,
//       "o3": string,
//       "pm25": string,
//       "fad": string,
//       "controlnumber": string,
//       "areaIndex": string,
//       "office": string,
//       "site": string
// };

interface SubwayItem {
  controlnumber: string;
  site: string;
  city: string;
  [key: string]: string | number | undefined;  
}



export default function Subway() {
  const selv = useRef<HTMLSelectElement>(null);
  const [tdata, setTdata] = useState<SubwayItem[]>([]);
  const [timeData, setTimeData] = useState<SubwayItem[]>([]);


  const getDataFatch = async() => {

    const baseurl = "https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?"
                             
                             //20250807
                             //nextjs 는 api 가져올때,
                             //.env.local 파일에서
                             //NEXT_PUBLIC_XXX 이름으로 불러와야함!
    const key = `serviceKey=${process.env.NEXT_PUBLIC_API}`
    const etc = `&pageNo=1&resultType=json&controlnumber=20250723&areaIndex=${selv.current?.value}`

    const url = `${baseurl}${key}${etc}`

    
    const resp = await fetch(url);
    const data = await resp.json();
    
    setTdata(data.response.body.items.item);
  }


  const handelSel = () => {
    console.log(selv.current?.value);
    getDataFatch()

  }

  useEffect(()=>{
    console.log("tdata",tdata)

    // let tm : string[] = [];  => 명시안해도 ts가 유추함
    let tm = [];

    tm = tdata.map(item => item.controlnumber);
    tm.sort();
    console.log("시간 정렬", tm);

    // tmData => timedata, <tdataime>의 배열
    let tmData = [];
    tmData = tm.map(item => tdata.filter(titem => titem.controlnumber == item)[0])

    setTimeData(tmData);
  }, [tdata]);

  return (
  <div className='w-full'>
   <div className="flex justify-between items-center w-full px-4 gap-4 mb-5">
      <div className="font-bold text-3xl ml-20">측정소 선택</div>
      <TailSelect selRef={selv} handleSel={handelSel}/>
    </div>
    <div className='ml-20 mr-20'>
        {
            timeData.map((item, idx)=>(
                <SubwayBox key={item['controlnumber']}
                            data={item}
                            idx={idx}/>
            ))


        }
    </div>
   
  </div>  

  )
}