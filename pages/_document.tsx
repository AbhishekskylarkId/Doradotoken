import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Google Font */}
                <link rel="preconnect" href="/images/favicon.png" />
                <link rel="preconnect" href="/images/favicon.png" />
                <link
                    href="/images/favicon.png"
                    rel="stylesheet"
                ></link>

                {/* Favicon */}
                <link
                    rel="icon"
                    href="/images/favicon.png"
                />

                {/* Font Awesome */}
                <script
                    src="https://kit.fontawesome.com/96239c21a7.js"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
