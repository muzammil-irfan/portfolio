import { Html, Head, Main, NextScript } from 'next/document'
import { GTM_ID } from '../lib/gtm'
import { DefaultSeo } from 'next-seo';
/*
openGraph={{
          url: "https://www.avneesh.tech/",
          title: "Avneesh Agarwal",
          description: "A full stack web developer, who loves to design and develop beautiful websites. I have been coding for over a year now. One of my hobbies is writing, I love to document my journey by writing blog posts and also teach others through them.",
          images: [
            {
              url: "/og-image.png",
              width: 800,
              height: 420,
              alt: "Avneesh Agarwal",
            },
          ],
        }}
        twitter={{
          handle: "@avneesh0612",
          site: "@avneesh0612",
          cardType: "summary_large_image",
        }}
*/
export default function Document() {
    return (
      <Html lang='en'>
        <Head >
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel='icon' href='/skillatria-logo.jpg' /> 
        <meta name='viewport' content="width=device-width, initial-scale=1" />
        </Head>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://skillatria.com',
            site_name: 'Skillatria',
            images: [
              {
                url: "/skillatria-logo.jpg",
                width: 800,
                height: 420,
                alt: "Avneesh Agarwal",
              },
            ],
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title='gtm'
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}