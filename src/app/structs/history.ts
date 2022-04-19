import { Entry } from "./journal";

export interface HistoryItem{
    entryTime: number;
    entries: Entry[];
}