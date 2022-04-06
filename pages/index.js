import styles from '../styles/Home.module.css'
import Seo from "../components/Seo";
import CountUp from 'react-countup';
import {useEffect, useState} from "react";
import Link from "next/link"

// export async function getServerSideProps(){
//   const { players } = await(await fetch("https://mcapi.xdefcon.com/server/cosmoage.kr/players/json")).json();
//   return {
//     props:{
//       players,
//     }
//   }
// }

export default function Home() {
  const [currPlayer, setCurrPlayer] = useState();
  useEffect(()=>{
    (async ()=>{
      const data = await fetch("https://api.minetools.eu/ping/1.255.101.56/1708");
      const { players } = await data.json();
      setCurrPlayer(players);
    })();
  }, []);
  return (
    <div className={styles.container}>
      <Seo title="메인 페이지"/>
      <main className={styles.main}>
        <h1>대한민국 1위 국가전쟁 서버</h1>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">코스모 에이지</a>에 오신것을 환영합니다
        </h1>
        <p className={styles.description}>
          현재 코스모에이지는 {' '}
            <CountUp
              start={0}
              end={currPlayer?.online}
              duration={1.5}
              delay={0}
              startOnMount={true}
          >
            {({ countUpRef }) => (
                <span>
                  <span ref={countUpRef} />
                </span>
            )}
          </CountUp>
          명의 유저들이 플레이중입니다!
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>서버 접속하기 &rarr;</h2>
            <p>이 배너를 클릭해 코스모에이지 서버에 접속하는 방법을 확인해보세요!</p>
          </a>

          <Link href={"/inquiry"}><a className={styles.card}>
            <h2>1:1 문의하기 &rarr;</h2>
            <p>이 배너를 클릭해 서버 관리자/가이드에게 문의할 수 있습니다.</p>
          </a></Link>

          <Link href={"/faq"}><a className={styles.card}>
            <h2>도움말 &rarr;</h2>
            <p>코스모에이지 유저분들이 자주 하는 질문들을 확인해보세요.</p>
          </a></Link>


          <a
            href="https://discord.com/invite/ZrWgRFK"
            className={styles.card}
          >
            <h2>공식 디스코드 &rarr;</h2>
            <p>
              서버의 공지, 업데이트 알림 및 유저와 소통을 할 수 있는 디스코드를 가입해보세요.
            </p>
          </a>
        </div>
        <div className={"test"}></div>
      </main>
      <style jsx>{`
        div{
       //   background-image: url('/cosmo-background.png');
        }


    `}</style>
    </div>

  )
}
