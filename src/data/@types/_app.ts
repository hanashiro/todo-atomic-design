import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

interface DefaultPageProperties {
    title: string;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps<DefaultPageProperties> & {
    Component: NextPageWithLayout<DefaultPageProperties>;
};
