import type { GROCERIES_KEYS } from "@/data/dishes/dishes.data"

export interface IDish {
    id: string,
    variants: IDishVariant[],
    generalOutput?: number
    supplements?: string
}

export interface IDishMeta extends Omit<IDishVariant, 'id' | 'name'> {}

export interface IDishVariant {
    id: string,
    name: string,
    currentOutput?: number
    components: TGroseries,
    macronutrients: IMacronutrients,
    caloricity: number,
    defaultOutput?: number
}

export type TGroseries = Partial<
    Record<(typeof GROCERIES_KEYS)[number], number>
>

export type TAgeCategoryKey = 
    '1' |
    '2' |
    '3' |
    '4' |
    '5' |
    '6'

export interface IMacronutrients {
    proteins: number,
    fats: number,
    carbohydrates: number
}

export type TMacroType =
    | 'proteins'
    | 'fats'
    | 'carbohydrates'
    | 'caloricity'