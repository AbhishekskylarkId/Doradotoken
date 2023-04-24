import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Google Font */}
                {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap"
                    rel="stylesheet"
                ></link> */}

                {/* Favicon */}
                <link
                    rel="icon"
                    href="https://moonlit-snickerdoodle-f90af8.netlify.app/images//logo.svg"
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
