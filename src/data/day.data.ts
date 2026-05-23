import type { IDay } from "@/model/day.model";
import type { IOption } from "@/model/option.model";

export const DAY_1: IDay = {
    id: 1,
    label: 'День 1',
    meals: []
}

export const DAY_2: IDay = {
    id: 2,
    label: 'День 2',
    meals: []
}

export const DAY_3: IDay = {
    id: 3,
    label: 'День 3',
    meals: []
}

export const DAY_4: IDay = {
    id: 4,
    label: 'День 4',
    meals: []
}

export const DAY_5: IDay = {
    id: 5,
    label: 'День 5',
    meals: []
}

export const DAY_6: IDay = {
    id: 6,
    label: 'День 6',
    meals: []
}

export const DAY_7: IDay = {
    id: 7,
    label: 'День 7',
    meals: []
}

export const DAY_8: IDay = {
    id: 8,
    label: 'День 8',
    meals: []
}

export const DAY_9: IDay = {
    id: 9,
    label: 'День 9',
    meals: []
}

export const DAY_10: IDay = {
    id: 10,
    label: 'День 10',
    meals: []
}

export const DAY_11: IDay = {
    id: 11,
    label: 'День 11',
    meals: []
}

export const DAY_12: IDay = {
    id: 12,
    label: 'День 12',
    meals: []
}

export const DAY_13: IDay = {
    id: 13,
    label: 'День 13',
    meals: []
}

export const DAY_14: IDay = {
    id: 14,
    label: 'День 14',
    meals: []
}

export const TEN_DAYS_DATA_ARRAY: IDay[] = [
    DAY_1,
    DAY_2,
    DAY_3,
    DAY_4,
    DAY_5,
    DAY_6,
    DAY_7,
    DAY_8,
    DAY_9,
    DAY_10
]


export const FOURTEEN_DAYS_DATA_ARRAY: IDay[] = [
    DAY_1,
    DAY_2,
    DAY_3,
    DAY_4,
    DAY_5,
    DAY_6,
    DAY_7,
    DAY_8,
    DAY_9,
    DAY_10,
    DAY_11,
    DAY_12,
    DAY_13,
    DAY_14
]

export const CUMULATIVE_TABLE_ITEM = {
    id: 15,
    label: 'Накопительная таблица',
}

export const TOTAL_TABLE_ITEM = {
    id: 16,
    label: 'Итого за рацион'
}

export const PRODUCT_NAME_ITEM = {
    id: 17,
    label: 'Наименование продукта'
}

export const TOTAL_AVERAGE_NAME_ITEM = {
    id: 18,
    label: 'В среднем'
}

export const DAYS_ITEMS_ARRAY: IDay[] = [
    ...FOURTEEN_DAYS_DATA_ARRAY,

]

export const TEN_DAYS_DURATION_MENU_ITEM: IOption = {
    id: '10',
    label: '10 дней',
    value: '10 days'
}

const FOURTEEN_DAYS_DURATION_MENU_ITEM: IOption = {
    id: '14',
    label: '14 дней',
    value: '14 days'
}

export const DURATION_MENU_ITEMS_ARRAY: IOption[] = [
    TEN_DAYS_DURATION_MENU_ITEM,
    FOURTEEN_DAYS_DURATION_MENU_ITEM
]


export const TABLE_HEAD_DAY_TABLE_ELEMENTS = [
    {
        id: 1,
        label: 'Наименование блюда'
    },
    {
        id: 2,
        label: 'Выход блюда в гр'
    },
    {
        id: 3,
        label: 'Белки'
    },
    {
        id: 4,
        label: 'Жиры',
    },
    {
        id: 5,
        label: 'Углеводы',
    },
    {
        id: 6,
        label: 'Калорийность',
    },
    {
        id: 7,
        label: '% приема пищи'
    },
]

