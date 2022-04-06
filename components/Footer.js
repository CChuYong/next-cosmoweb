import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";


export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div>
                CosmoAGE 이용시 개인정보 취급방침에 동의하는 것으로 간주합니다.<br/>
                사업자등록정보 상호: 코스모 | 성명: 최지민 | 사업자 등록번호: 766-71-00468
                <br/>© 2022. Cosmo Co. All Rights Reserved.<br/>
                Minecraft는 Mojang AB의 상표이며, 본 페이지는 Minecraft와 제휴 관계가 아닌 서드파티 사이트입니다.
            </div>
            <style jsx>{`
              div{
                text-align: center;
                color: #8c8c8c;
              }
              footer{
                background-color: #f2f2f2;
              }         
`}</style>
        </footer>
    );
}