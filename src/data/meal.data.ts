import type { IMeal } from "@/model/meal.model";

export const BREAKFAST_MEAL_OPTION: IMeal = {
    id: 'breakfast',
    value: 'Завтрак',
    minPercentageOfCaloricity: 20,
    maxPercentageOfCaloricity: 25
}

export const SECOND_BREAKFAST_MEAL_OPTION: IMeal = {
    id: 'second_breakfast',
    value: 'Второй завтрак',
    minPercentageOfCaloricity: 5,
    maxPercentageOfCaloricity: 5
}

export const LUNCH_MEAL_OPTION: IMeal = {
    id: 'lunch',
    value: 'Обед',
    minPercentageOfCaloricity: 30,
    maxPercentageOfCaloricity: 35
}

export const AFTERNOON_SNACK_MEAL_OPTION: IMeal = {
    id: 'afternoon_snack',
    value: 'Полдник',
    minPercentageOfCaloricity: 10,
    maxPercentageOfCaloricity: 15
}

export const DINNER_MEAL_OPTION: IMeal = {
    id: 'dinner',
    value: 'Ужин',
    minPercentageOfCaloricity: 20,
    maxPercentageOfCaloricity: 25
}

export const SECOND_DINNER_MEAL_OPTION: IMeal = {
    id: 'second_dinner',
    value: 'Второй ужин',
    minPercentageOfCaloricity: 8,
    maxPercentageOfCaloricity: 10
}

export const TYPES_OF_MEALS_OPTIONS_ARRAY: IMeal[] = [
    BREAKFAST_MEAL_OPTION,
    SECOND_BREAKFAST_MEAL_OPTION,
    LUNCH_MEAL_OPTION,
    AFTERNOON_SNACK_MEAL_OPTION,
    DINNER_MEAL_OPTION,
    SECOND_DINNER_MEAL_OPTION
]


export const MEALS_TO_OPTION = TYPES_OF_MEALS_OPTIONS_ARRAY.flatMap((meal: IMeal) => (
    {
        id: meal.id,
        label: meal.value,
        value: meal.id,
        meta: {
            minPercentageOfCaloricity: meal.minPercentageOfCaloricity,
            maxPercentageOfCaloricity: meal.maxPercentageOfCaloricity
        }
    }
))