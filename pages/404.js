import Link from "next/link";
export default function NotFound(){
    return (
        <div>
            <h1>어... 어라?</h1>
            <h2>내가 뭐..라고 했더라..?</h2> <br/>
            페이지를 찾을 수 없습니다<br/><br/>
            <Link href="/"><a>메인으로 돌아가기</a></Link>
            <div className="bar"/>
            <style jsx>{`
              div{
                text-align: center;
              }          
              .bar{
                margin-bottom: 50px;
              }
              a{
                text-decoration-line: underline;
              }
              a:hover{
                color: blue;
              }
`}</style>
        </div>
    )
}