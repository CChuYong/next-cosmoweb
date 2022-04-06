import TopBar from "../TopBar";
import Footer from "../Footer";

export default function DefaultLayout({children}){
    return (
      <div>
          <head>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
              />
              <script
                  dangerouslySetInnerHTML={{
                      __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
                  }}
              />
          </head>
          <TopBar/>
          <div>{children}</div>
          <Footer/>
      </div>
    );
}