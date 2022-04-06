import Link from "next/link";
import Image from "next/image"
import logo from "/public/cosmo-horizontal.png"
import discordLogo from "/public/discord-logo.svg"
import cafeLogo from "/public/naver-cafe.png"


export default function TopBar(){
    return (
        <div>
            <div className={"elemMargin"}/>
            <nav>
                <div className={"topMargin"}/>
                <span className="logo-wrapper">
                <Link href="/"><Image src={logo} alt="" width="180px" height="55px"/></Link>
            </span>
                <span className="navigator">
                <Link href="/"><a className="navLink">메인화면</a></Link>
                <Link href="/faq"><a className="navLink">도움말</a></Link>
                <Link href="/inquiry"><a className="navLink">1:1 문의하기</a></Link>
                <Link href="https://discord.com/invite/ZrWgRFK"><div className="div-inline"><div className="discordLogo">
                    <Image src={discordLogo} height="100%" width="100%" layout={"fill"} alt=""/>
                </div><a className="navLink">서버 디스코드</a></div></Link>
                <Link href="https://cafe.naver.com/cosmoage"><div className="div-inline">
                    <div className="cafeLogo">
                        <Image src={cafeLogo} height="100%" width="100%" layout={"fill"} alt=""/>
                    </div>
                    <a  className="navLink">서버 공식 카페</a>
                </div></Link>
            </span>
            </nav>
            <style jsx>{`
              .navLink:hover{
                color: #0070f3;
              }
              .logo-wrapper{
                filter: invert(80%);
                margin-right: 60px;
                margin-bottom: 10px;
                cursor: pointer;
              }
              .topMargin{
                background-color: #ffffff;
                position: static;
                display: block;
                height: 10px;
                width: 100%;
              }
              nav{
                position: fixed;
                top: 0px;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                border-bottom: 1px solid #eaeaea;
                background-color: #ffffff;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 10px -28px, rgba(0, 0, 0, 0.3) 30px 15px 20px -30px;
              }
              .navigator{
                font-size: 20px;
                display: inline-block;
                position: relative;
                bottom: 8px;
              }
              .discordLogo{
                  display: inline-block;
                  filter: invert(70%);
                  margin-right: 10px;
                  width: 27px;
                  height: 27px;
                  position: relative;
                  top: 5px;
              }  
              .cafeLogo{
                  display: inline-block;
                  margin-right: 10px;
                  width: 27px;
                  height: 27px;
                  position: relative;
                  top: 5px;
              }
              a{
                font-weight: bold;
                margin-right: 30px;
                color: #474747;
              }
              .div-inline{
              cursor: pointer;
                display: inline;
              }
              .elemMargin{
                height: 80px;
                width: 100%;
              }
        `}</style>
        </div>
    );
}