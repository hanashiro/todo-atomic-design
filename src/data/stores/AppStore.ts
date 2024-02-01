import { createStore } from '@udecode/zustood';

export const AppStore = createStore('App')({
    mode: 'dark' as 'light' | 'dark',
}).extendActions((set, get, api) => ({
    toggleTheme() {
        const nextTheme = get.mode() === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', nextTheme);
        set.mode(nextTheme);
    },
}));
//.extendSelectors((set, get, api) => ({
//    newGetValue: () => get.value(),
//}))

