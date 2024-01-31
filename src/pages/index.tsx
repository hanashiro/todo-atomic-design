import { NextPageWithLayout } from '@typing/_app';
import { GetStaticProps } from 'next';

// import Layout from '@templates/layout/Layout';
// import { Component } from '@partials/index/Index.styled';
// import { useIndexPage } from '@partials/index/Index.hook';
// import { IndexPageLogic } from '@partials/index/Index.logic';
// import { IndexPageStore } from '@partials/index/Index.store';

type IndexProps = NextPageWithLayout & {
    title: string;
};

export default function Index(props: IndexProps) {
    return (
        <div>
            <div>Index</div>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            title: 'Index',
        },
    };
};

// Index.getLayout = Layout;
