import Head from "next/head";
import React from "react";

interface MetaProps {
    title?: string;
    keywords?: string;
    description?: string;
}

const Meta = ({ title = "", keywords = "", description = "" }: MetaProps) => {
    return (
        <Head>
            <title>{title}</title>

            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Head>
    );
};

export default Meta;
