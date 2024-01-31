import '@styles/globals.css';
import Providers from '@partials/_app/providers/_Providers';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { useMemo } from 'react';
import { AppPropsWithLayout } from '@typing/_app';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    // }: AppProps<{ title?: string }>) {
    const pageTitle = useMemo(() => {
        let title = process.env.NEXT_PUBLIC_APP_NAME;
        if (pageProps.title) {
            title += ` - ${pageProps.title}`;
        }
        return title;
    }, [pageProps.title]);

    const getLayout = Component?.getLayout ?? ((page) => page);

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, user-scalable=0, width=device-width, shrink-to-fit=no"
                />
            </Head>
            <div className={`${inter.className}`}>
                <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
            </div>
        </>
    );
}
