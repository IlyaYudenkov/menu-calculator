import type { IMeal } from "./meal.model";

export interface IDay {
    id: number,
    label: string,
    meals?: IMeal[]
}