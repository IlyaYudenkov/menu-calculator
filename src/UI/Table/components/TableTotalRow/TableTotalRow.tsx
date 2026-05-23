import type { IMacronutrients } from '@/model/dish.model'
import cl from './_TableTotalRow.module.scss'
import { calcMealPercentage } from '@/lib/calc.lib'

interface TableTotalRowProps extends IMacronutrients {
    label: string,
    caloricity?: number,
    selectedAgeCategoryValue?: number,
    totalMealPercentage?: string
}

export const TableTotalRow = ({
    label,
    caloricity,
    carbohydrates,
    fats,
    proteins,
    selectedAgeCategoryValue,
    totalMealPercentage
}: TableTotalRowProps) => {
    return (
        <tr className={cl.TableTotalRow}>
            <td>{label}</td>
            <td>{proteins}</td>
            <td>{fats}</td>
            <td>{carbohydrates}</td>
            <td>{caloricity}</td>
            {!!selectedAgeCategoryValue && !!caloricity &&
                <td>
                    {calcMealPercentage(caloricity, selectedAgeCategoryValue)}
                </td>
            }
            {totalMealPercentage && <td>
                {totalMealPercentage}
            </td>}
        </tr>
    )
}