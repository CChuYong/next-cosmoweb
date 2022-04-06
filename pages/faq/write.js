import Accordion from "/components/Accordion";
import Seo from "../../components/Seo";
import {useEffect, useState} from "react";
import api, {post} from "/components/API";
import Editor from "../../components/Editor";
import {useRouter} from "next/router";

export default function FaqWrite() {
    let doc = [];
    const router = useRouter();
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");
    const [title, setTitle] = useState("");
    useEffect(()=>{
        setEditorLoaded(true);
    }, []);
    const change = (ev) => {
        setTitle(ev.target.value);
    }
    const uploadData = ()=>{
        console.log(title);
        console.log(data);
        post("/faq/write", {
            'title': title,
            'data': data
        }).then(res=>{
            alert(res.data.message);
            router.push(res.data.redirect)
        });
    };
    return (
        <div >
            <Seo title="자주 묻는 질문"/>
            <div className={"super-div"}>
                <div className={"faq-title"}>
                    <table>
                        <tr>
                            <td><h2>자주 묻는 질문 작성</h2></td>
                            <td><input className={"search-box"} type={"text"} name={"um"} onChange={change} placeholder={"질문 제목을 입력하세요"}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <Editor name={"test"} editorLoaded={editorLoaded} onChange={(data=>{
                                    setData(data);
                                })}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={uploadData}>업로드</button>
                            </td>
                        </tr>
                    </table>
                </div>


            </div>

            <style jsx global>{`
              @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,900);
              
              .super-div{
                padding-top: 20px;
              }
              
              .ck-editor__editable_inline{
                min-height: 300px;
              }
              
              .faq-title > h2 {
                padding-right: 20px;
              }
              
              .faq-title > table > tr > td > input {
                display: inline-block;
                border-radius: 20px 20px;
                width: 100%;
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
              

              html,
              body {
                width: 100%;
                height: 100%;
                margin: 0px;
                padding: 0px;
              }
            `}</style>
        </div>
    );
}