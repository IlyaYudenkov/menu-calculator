import { TABLE_AVERAGE_CCAL_ELEMENTS, TABLE_AVERAGE_MEALS_ELEMENTS } from '@/data/average.data'
import { TableAverageBlock } from '../TableAverageBlock/TableAverageBlock'
import type { TMacroType } from '@/model/dish.model'
import type { IOption } from '@/model/option.model'
import { round } from '@/lib/round.lib'
import type { TMealTypeValue } from '@/model/meal.model'

interface TableAverageTabProps {
    macros: Record<TMacroType, number>,
    mealsAverages: Record<TMealTypeValue, number>,
    selectedAgeCategoryValue?: number
}

export const TableAverageTab = ({
    macros,
    mealsAverages,
    selectedAgeCategoryValue
}: TableAverageTabProps) => {

    if (!selectedAgeCategoryValue) return;

    const finalTableElementsAverageCcal: IOption[] = TABLE_AVERAGE_CCAL_ELEMENTS.map((it: IOption) => ({
        ...it,
        value: String(round(macros[it.id as TMacroType]))
    }))

    const finalTableElementsAverageMealPercentage: IOption[] = TABLE_AVERAGE_MEALS_ELEMENTS.map((it: IOption<unknown>) => ({
        ...it,
        value: String(round(mealsAverages[it.id as TMealTypeValue] * 100 / selectedAgeCategoryValue))
    }))

    return (
        <>
            <TableAverageBlock elements={finalTableElementsAverageCcal} />
            <TableAverageBlock elements={finalTableElementsAverageMealPercentage} />
        </>
    )
}