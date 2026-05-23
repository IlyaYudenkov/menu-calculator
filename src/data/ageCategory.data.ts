import type { IOption } from "@/model/option.model";

export const SIX_TO_TEN_AGE_CATEGORIES_CCAL_ITEM: IOption = {
    id: '1',
    label: '6-10 лет',
    value: '2300'
}

const ELEVEN_TO_THIRTEEN_AGE_CATEGORIES_CCAL_ITEM: IOption = {
    id: '2',
    label: '11-13 лет',
    value: '2500'
}

const FOURTEEN_TO_SEVENTEEN_AGE_CATEGORIES_CCAL_ITEM: IOption = {
    id: '3',
    label: '14-17 лет',
    value: '2700'
}

const ELEVEN_TO_SEVENTEEN_AGE_CATEGORIES_CCAL_ITEM: IOption = {
    id: '4',
    label: '11-17 лет',
    value: '2700'
}

const ONE_TO_THREE_AGE_CATEGORIES_CCAL_ITEM: IOption = {
    id: '5',
    label: '1-3 лет',
    value: '1500'
}

const THREE_TO_SIX_AGE_CATEGORIES_CCAL_ITEM: IOption = {
    id: '6',
    label: '3-6 лет',
    value: '2000'
}

export const AGE_CATEGORIES_ITEMS_ARRAY: IOption[] = [
    ONE_TO_THREE_AGE_CATEGORIES_CCAL_ITEM,
    THREE_TO_SIX_AGE_CATEGORIES_CCAL_ITEM,
    SIX_TO_TEN_AGE_CATEGORIES_CCAL_ITEM,
    ELEVEN_TO_THIRTEEN_AGE_CATEGORIES_CCAL_ITEM,
    FOURTEEN_TO_SEVENTEEN_AGE_CATEGORIES_CCAL_ITEM,
    ELEVEN_TO_SEVENTEEN_AGE_CATEGORIES_CCAL_ITEM,
]