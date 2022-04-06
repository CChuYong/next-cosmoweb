import Accordion from "/components/Accordion";
import Seo from "../../components/Seo";
import {useEffect, useState} from "react";
import api from "/components/API";
import {useRouter} from "next/router";
import $ from 'jquery';

export default function Faq() {
    let doc = [];
    const router = useRouter();
    const defaultQuery = router.query.query || ""
    const [size, setSize] = useState(10);
    const [query, setQuery] = useState(defaultQuery);
    const [faqs, setFaqs] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        (async ()=>{
            if(!loaded){
                setQuery(defaultQuery)
                $('.search-box').attr("value", defaultQuery);
                const data = await api("/faq");
                setLoaded(true);
                setFaqs(data);
            }
        })();
    });
    let matchedCounter = 0;
    if(faqs.length === 0){
        doc.push("도움말 로드중...")
    }else{
        let buildCounter = 0;
        for (let i = 0; i < faqs.length; i++) {
            const faq = faqs[i];
            const contentIncludes = query !== "" && faq.content.includes(query);
            if (query === "" || faq.title.includes(query) || contentIncludes) {
                matchedCounter++;
                if (buildCounter < size) {
                    buildCounter++;
                    doc.push(
                        <div className={contentIncludes ? "accor active" :"accor"} title={faq.title}>
                            <div className="head">{faq.title}</div>
                            <div className="body" dangerouslySetInnerHTML={{__html: faq.content}}/>
                        </div>
                    )
                }
            }
        }
    }
    const change = (ev)=> setQuery(ev.target.value);
    return (
        <div >
            <Seo title="자주 묻는 질문"/>
            <div className={"super-div"}>
                <div className={"faq-title"}>
                    <h2>자주 묻는 질문</h2>
                    <input className={"search-box"} type={"text"} name={"um"} onChange={change} placeholder={"검색어를 입력하세요"}/>
                </div>

                <div className={"accor-parent"}>
                    <Accordion>
                        {doc}
                    </Accordion>

                </div>
                <div className={"accor-parent"}>
                    {matchedCounter > size ? <div className={"more-items"} onClick={() => setSize(size + 10)}>10개 더 보기..</div> : null}
                </div>
            </div>

            <style jsx global>{`
              @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,900);
              
              .super-div{
                padding-top: 20px;
              }
              
              .faq-title > h2 {
                padding-right: 20px;
              }
              
              .faq-title > input {
                display: inline-block;
                border-radius: 20px 20px;
                width: 30%;
                height: 100%;
                padding: 10px 10px;
              }
              
              .faq-title{
                display: flex;
                justify-content: center;
                align-items: center;
              }

              * {
                font-family: "Roboto";
                box-sizing: border-box;
              }
              
              h3 {
                display: inline;
              }
              
              
              .accor[disabled]{
                display: none;
              }
              
              .accor-main{
                margin-top: 20px;
                margin-bottom: 20px;
                width: 60%;
              }
              
              .accor-parent{
                display: flex;
                justify-content: center;
                flex-direction: row;
                align-items: center;
                width: 100%;
              }
              
              .more-items{
                border-radius: 20px 20px;
                width: 60%;
                border: 1px solid #ddd;
                height: 41px;
                text-align: center;
                cursor: pointer;
                
                margin-bottom: 20px;
              }

              html,
              body {
                width: 100%;
                height: 100%;
                margin: 0px;
                padding: 0px;
              }

              .accor {
                border-radius: 20px 20px;
                width: 100%;
                margin-top: 10px;
                margin-bottom: 10px;
                border: 1px solid #ddd;
                transition: 0.4s;
              }

              .accor .head {
                border-radius: 20px 20px;
                background: #eee;
                padding: 10px 20px;
                cursor: pointer;
              }

              .accor .body {
                border-radius: 20px 20px;
                background: #fafafa;
                padding: 0 20px;
                max-height: 0;
                overflow: hidden;
                transition: 200ms ease-in-out;
              }

              .accor.active > .body {
                padding: 10px 20px;
                max-height: 600px;
              }
            `}</style>
        </div>
    );
}