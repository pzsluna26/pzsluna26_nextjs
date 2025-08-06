type TdataItem = {
    title : string,
    content : string
}

const getData = async () => {
    return new Promise<TdataItem>((resolve)=>{
        setTimeout(()=>{
            resolve({
                title : 'App route',
                content : '앱라우트 테스트 중입니다.'
            })
        }, 3000); //3초있다가 resolve호출해서 promise완료 할거야 
     });
}

export default async function App01Page({
    searchParams
}:{ searchParams:{[key:string]:string}
}) {
    if(searchParams.error == 'true'){
        throw new Error('서버에서 발생된 에러');
    }
  const Tdata = await getData();

  return (
    <div className="w-full h-screen flex justify-center items-center flex flex-col">
      <h1 className="text-2xl font-bold p-5">
        {Tdata.title}
      </h1>
      <p className="text-blue-500">
        {Tdata.content}
      </p>
    </div>
  );
}