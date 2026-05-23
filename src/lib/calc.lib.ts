import type { IOption } from '@/model/option.model'
import type { IDishMeta, TMacroType } from '@/model/dish.model'
import type { IMeal, TMealTypeValue } from '@/model/meal.model'
import { round } from './round.lib'
import type { GROCERIES_KEYS } from '@/data/dishes/dishes.data'
import type { IDay } from '@/model/day.model'

export const calcDishValue = (
    dish: IOption<IDishMeta>,
    type: TMacroType
): number => {
    const meta = dish.meta
    if (!meta || !meta.currentOutput) return 0;
    const ratio = meta.currentOutput / 100

    const totalDishValue = ratio * (type === 'caloricity'
        ? meta.caloricity 
        : meta.macronutrients[type])

    return round(totalDishValue)
}

export const calcMealTotal = (
    meal: IMeal,
    type: TMacroType
): number => {
    return round((meal.dishes ?? []).reduce(
        (sum, d) => sum + calcDishValue(d, type),
        0
    ))
}

export const calcDayTotal = (
    mealsList: IMeal[],
    type: TMacroType
): number => {
    return mealsList.reduce((sum, meal) => {
        return round(sum + calcMealTotal(meal, type))
    }, 0)
}

export const calcMacroDistribution = (value: number, totalValue: number, type: TMacroType) => {
    if (type === 'caloricity') return;
    if (type === 'fats') return round(value * 9 * 100 / totalValue);
    return round(value * 4 * 100 / totalValue);
}


export const calcGroceriesByDay = (
    meals: IMeal[],
    key: (typeof GROCERIES_KEYS)[number]
) => {
    return meals.reduce((sum, meal) => {
        return sum + (meal.dishes ?? []).reduce((acc, dish) => {
            const meta = dish.meta;
            const components = meta?.components
            const defaultOutput = meta?.defaultOutput
            const totalOutput = defaultOutput !== 100 ? defaultOutput : 100;

            const output = meta?.currentOutput
            const value = components?.[key] ?? 0
            if (!output || !totalOutput) return 0;

            return acc + (value * output / totalOutput)
        }, 0)
    }, 0)
}


export const calcMealPercentage = (value: number, totalDayCaloricity: number) => {
    return round(value * 100 / totalDayCaloricity) + '%'
}


export const calcTotalAveragesMacros = (days: IDay[]): Record<TMacroType, number> => {
    let proteins = 0
    let fats = 0
    let carbohydrates = 0
    let caloricity = 0
    let count = 0

    days.forEach(day => {
        if (day.id > 14) return;
        day.meals?.forEach(meal => {

            proteins += calcMealTotal(meal, 'proteins')
            fats += calcMealTotal(meal, 'fats')
            carbohydrates += calcMealTotal(meal, 'carbohydrates')
            caloricity += calcMealTotal(meal, 'caloricity')
            count++
        })
    })

    if (count === 0) {
        return {
            proteins: 0,
            fats: 0,
            carbohydrates: 0,
            caloricity: 0,
        }
    }

    return {
        proteins: proteins / count,
        fats: fats / count,
        carbohydrates: carbohydrates / count,
        caloricity: caloricity / count,
    }
}


export const calcMealTypeAverages = (days: IDay[]): Record<TMealTypeValue, number> => {

    const averagesMeals = {
        breakfast: 0,
        second_breakfast: 0,
        lunch: 0,
        afternoon_snack: 0,
        dinner: 0,
        second_dinner: 0
    }

    days.forEach(day => {
        day.meals?.forEach(meal => {
            if (!meal.id) return
            averagesMeals[meal.id] += meal.caloricity || 0
        })
    })

    const daysCount = days.length - 2;

    Object.keys(averagesMeals).forEach(key => {
        averagesMeals[key as keyof typeof averagesMeals] /= daysCount
    })

    return averagesMeals
}