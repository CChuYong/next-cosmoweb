import styles from '../styles/Home.module.css'
import Seo from "../components/Seo";
import Editor from "../components/Editor";
import {useEffect, useState} from "react";

export default function Inquiry() {
    const [editorLoaded, setEditorLoaded] = useState(false);
    useEffect(()=>{
       setEditorLoaded(true);
    }, []);
    return (
        <div className={styles.container}>
            <Seo title="1:1 문의하기"/>
            <main className={styles.main}>
                <h1>문의하기</h1>
                <table>
                    <tr>
                        <td>
                            <h3>문의 종류</h3>
                        </td>
                        <td>
                            <select name={"inquiry-type"}>
                                <option value={"connect"}>서버 접속 관련 문의</option>
                                <option value={"play"}>서버 플레이 관련 문의</option>
                                <option value={"server"}>서버 운영 관련 문의</option>
                                <option value={"bug"}>서버 버그/오류 관련 문의</option>
                                <option value={"guitar"}>기타 문의</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>문의자 마인크래프트 아이디</h3>
                        </td>
                        <td>
                            <input type={"text"} id={"nickname"}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>문의자 디스코드 아이디</h3>
                        </td>
                        <td>
                            <input type={"text"} id={"discord"}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>문의 내용</h3>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <Editor name={"test"} editorLoaded={editorLoaded} onChange={(data=>{

                            })}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <h4>* 문의에 관련 없는 내용 혹은 욕설, 협박 등을 작성시 사이트에서 차단될 수 있습니다.<br/>
                                * 코스모에이지 공식 디스코드에 가입된 디스코드 아이디어야 문의 결과를 받을 수 있습니다.
                            </h4>
                        </td>
                    </tr>

                </table>


            </main>
            <style jsx global>{`
              table > h2 {
                text-align: center;
              }
              .ck-editor__editable_inline{
                min-height: 300px;
              }


    `}</style>
        </div>

    )
}
