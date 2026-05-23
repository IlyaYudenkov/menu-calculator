import type { IDishMeta } from "./dish.model"
import type { IOption } from "./option.model"

export type TMealTypeValue =
    'breakfast' |
    'second_breakfast' |
    'lunch' |
    'afternoon_snack' |
    'dinner' |
    'second_dinner';

export interface IMeal {
    id: TMealTypeValue,
    value: string,
    minPercentageOfCaloricity: number,
    maxPercentageOfCaloricity: number,
    dishes?: IOption<IDishMeta>[]
    caloricity?: number
}

export interface IMealMeta extends Omit<IMeal, 'id' | 'value'> {}
