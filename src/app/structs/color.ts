export interface Color{
    name: string;
    class: string;
    journalNeed: number;
    timerNeed: number;
}

export const THEMES: Color[] = [
    {
        name: 'Red',
        class: 'themeRed',
        journalNeed: 1,
        timerNeed: 0
    },
    {
        name: 'Green',
        class: 'themeGreen',
        journalNeed: 2,
        timerNeed: 1
    },
    {
        name: 'Blue',
        class: 'themeBlue',
        journalNeed: 0,
        timerNeed: 0
    }
];