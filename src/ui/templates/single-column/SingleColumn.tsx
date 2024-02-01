import React, { ReactNode } from 'react';

import { MainContent, PageWrapper } from './SingleColumn.styled';
import Footer from '@components/organism/surfaces/Footer/Footer';
import Header from '@components/organism/surfaces/Header/Header';
import { AppStore } from '@stores/AppStore';
// import { SingleColumnTemplateLogic } from './SingleColumn.logic';
// import { useSingleColumnTemplate } from './SingleColumn.hook';

export default function SingleColumn(page: ReactNode) {
    const isLightTheme = AppStore.use.mode() === 'light';
    return (
        <PageWrapper>
            <Header
                title="ToDo"
                isLightTheme={isLightTheme}
                onThemeChange={() => AppStore.set.toggleTheme()}
            />
            <MainContent>{page}</MainContent>
            <Footer />
        </PageWrapper>
    );
}
