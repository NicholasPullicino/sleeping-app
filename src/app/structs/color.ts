export interface Color{
    name: string;
    class: string;
    disabled?: boolean;
    journalNeed: number;
    timerNeed: number;
}

export const THEMES: Color[] = [
    {
        name: 'Red',
        class: 'themeRed',
        disabled: true,
        journalNeed: 1,
        timerNeed: 0
    },
    {
        name: 'Green',
        class: 'themeGreen',
        disabled: true,
        journalNeed: 2,
        timerNeed: 1
    },
    {
        name: 'Blue',
        class: 'themeBlue',
        disabled: false,
        journalNeed: 0,
        timerNeed: 0
    }
];