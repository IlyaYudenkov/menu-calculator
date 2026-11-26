import type { IMeal, IMealMeta, TMealTypeValue } from '@/model/meal.model'
import { useMemo, type Dispatch, type SetStateAction } from 'react'
import { TableMealBlock } from '../TableMealBlock/TableMealBlock'
import Input from '@/UI/Input/Input'
import { TableTotalRow } from '../TableTotalRow/TableTotalRow'
import { calcDayTotal, calcMacroDistribution, calcMealPercentage } from '@/lib/calc.lib'
import { MEALS_TO_OPTION } from '@/data/meal.data'
import type { IOption } from '@/model/option.model'

interface TableDayBlockProps {
    mealsList: IMeal[]
    setMealsList: Dispatch<SetStateAction<IMeal[]>>,
    selectedAgeCategoryValue?: number
}

const MAX_MEALS = 6

export const TableDayBlock = ({
    mealsList,
    setMealsList,
    selectedAgeCategoryValue
}: TableDayBlockProps) => {

    const handleAddMeal = (option: IOption<IMealMeta>) => {

        if (!option.meta) return
        if (mealsList.length >= MAX_MEALS) return

        setMealsList(prev => [
            ...prev,
            {
                id: option.value as TMealTypeValue,
                value: option.label,
                minPercentageOfCaloricity: option.meta!.minPercentageOfCaloricity,
                maxPercentageOfCaloricity: option.meta!.maxPercentageOfCaloricity,
                dishes: [],
            }
        ])
    }

    const handleUpdateMeal = (
        currentMealId: TMealTypeValue,
        option: IOption<IMealMeta>
    ) => {
        if (!option.meta) return;

        setMealsList(prev =>
            prev.map(meal =>
                meal.id !== currentMealId
                    ? meal
                    : {
                        ...meal,
                        id: option.value as TMealTypeValue,
                        value: option.label,
                        minPercentageOfCaloricity:
                            option.meta!.minPercentageOfCaloricity,
                        maxPercentageOfCaloricity:
                            option.meta!.maxPercentageOfCaloricity,
                    }
            )
        )
    }

    const TOTAL_PROTEINS = calcMacroDistribution(calcDayTotal(mealsList, 'proteins'), calcDayTotal(mealsList, 'caloricity'), 'proteins');
    const TOTAL_FATS = calcMacroDistribution(calcDayTotal(mealsList, 'fats'), calcDayTotal(mealsList, 'caloricity'), 'fats');
    const TOTAL_CARBOHYDRATES = calcMacroDistribution(calcDayTotal(mealsList, 'carbohydrates'), calcDayTotal(mealsList, 'caloricity'), 'carbohydrates');

    const filteredMealOptions = useMemo(() => {
        return MEALS_TO_OPTION.filter(meal => !mealsList.some(item => (
            meal.id === item.id
        )))
    }, [mealsList])

    return (
        <>
            {mealsList.map((meal) => (
                <TableMealBlock
                    key={meal.id}
                    meal={meal}
                    setMealsList={setMealsList}
                    selectedAgeCategoryValue={selectedAgeCategoryValue}
                    filteredMealOptions={filteredMealOptions}
                    onChangeSelect={(option: IOption<IMealMeta>) => {
                        handleUpdateMeal(meal.id, option)
                    }}

                />
            ))}

            {mealsList.length < MAX_MEALS && (
                <tr>
                    <td>
                        <Input.Select
                            key={mealsList.length}
                            options={filteredMealOptions}
                            placeholder="Добавить прием пищи"
                            onChange={(option: IOption<IMealMeta>) => {
                                handleAddMeal(option)
                            }}
                        />
                    </td>
                </tr>
            )}

            <TableTotalRow
                label='Итого за день'
                proteins={calcDayTotal(mealsList, 'proteins')}
                fats={calcDayTotal(mealsList, 'fats')}
                carbohydrates={calcDayTotal(mealsList, 'carbohydrates')}
                caloricity={calcDayTotal(mealsList, 'caloricity')}
                totalMealPercentage={
                    calcMealPercentage(calcDayTotal(mealsList, 'caloricity'), selectedAgeCategoryValue!)
                }
            />
            <TableTotalRow
                label='Распределение калорийности в %'
                proteins={TOTAL_PROTEINS || 0}
                fats={TOTAL_FATS || 0}
                carbohydrates={TOTAL_CARBOHYDRATES || 0}
            />
        </>
    )
}