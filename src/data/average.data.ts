import type { IOption } from "@/model/option.model"
import { AFTERNOON_SNACK_MEAL_OPTION, BREAKFAST_MEAL_OPTION, DINNER_MEAL_OPTION, LUNCH_MEAL_OPTION, SECOND_BREAKFAST_MEAL_OPTION, SECOND_DINNER_MEAL_OPTION } from "./meal.data"

export const TABLE_AVERAGE_CCAL_ELEMENTS: IOption[]  = [
    {
        id: 'proteins',
        value: '0',
        label: 'Белки',
    },
    {
        id: 'fats',
        value: '0',
        label: 'Жиры',
    },
    {
        id: 'carbohydrates',
        value: '0',
        label: 'Углеводы',
    },
    {
        id: 'caloricity',
        value: '0',
        label: 'Калорийность',
    }
]

export const TABLE_AVERAGE_MEALS_ELEMENTS: IOption[] = [
    {
        id: BREAKFAST_MEAL_OPTION.id,
        value: '0',
        label: BREAKFAST_MEAL_OPTION.value
    },
    {
        id: SECOND_BREAKFAST_MEAL_OPTION.id,
        value: '0',
        label: SECOND_BREAKFAST_MEAL_OPTION.value,
    },
    {
        id: LUNCH_MEAL_OPTION.id,
        value: '0',
        label: LUNCH_MEAL_OPTION.value,
    },
    {
        id: AFTERNOON_SNACK_MEAL_OPTION.id,
        value: '0',
        label: AFTERNOON_SNACK_MEAL_OPTION.value,
    },
    {
        id: DINNER_MEAL_OPTION.id,
        value: '0',
        label: DINNER_MEAL_OPTION.value,
    },
    {
        id: SECOND_DINNER_MEAL_OPTION.id,
        value: '0',
        label: SECOND_DINNER_MEAL_OPTION.value,
    }
]

export const TABLE_AVERAGE_TAB_ITEMS_ARRAY = [
    TABLE_AVERAGE_CCAL_ELEMENTS,
    TABLE_AVERAGE_MEALS_ELEMENTS
]