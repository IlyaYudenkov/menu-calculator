import cl from './_TableTBody.module.scss'
import type { IMeal } from '@/model/meal.model'
import { useEffect, type Dispatch, type SetStateAction } from 'react'
import type { IDay } from '@/model/day.model'
import { TableCumulativeBlock } from '../TableCumulativeBlock/TableCumulativeBlock'
import { TableDayBlock } from '../TableDayBlock/TableDayBlock'
import { TableAverageTab } from '../TableAverageTab/TableAverageTab'
import { calcMealTotal, calcMealTypeAverages, calcTotalAveragesMacros } from '@/lib/calc.lib'

interface TableTBodyProps {
    mealsList: IMeal[]
    setMealsList: Dispatch<SetStateAction<IMeal[]>>,
    isDayTable?: boolean,
    isAverageTable?: boolean,
    days?: IDay[],
    setDays: Dispatch<SetStateAction<IDay[]>>,
    selectedAgeCategoryValue?: number
}

export const TableTBody = ({
    mealsList,
    setMealsList,
    isDayTable,
    isAverageTable,
    days,
    setDays,
    selectedAgeCategoryValue
}: TableTBodyProps) => {

    const macros = calcTotalAveragesMacros(days || [])
    const mealsAverages = calcMealTypeAverages(days || [])

    useEffect(() => {
        setDays(prev => prev.map(day => ({
            ...day,
            meals: day?.meals?.map(meal => ({
                ...meal,
                caloricity: calcMealTotal(meal, 'caloricity')
            }))
        })))
    }, [])

    return (
        <tbody className={cl.TableTBody}>

            {isDayTable
                ?
                <TableDayBlock
                    mealsList={mealsList}
                    setMealsList={setMealsList}
                    selectedAgeCategoryValue={selectedAgeCategoryValue}
                />
                : isAverageTable ? <TableAverageTab
                    macros={macros}
                    mealsAverages={mealsAverages}
                    selectedAgeCategoryValue={selectedAgeCategoryValue}

                /> : <TableCumulativeBlock
                    days={days}
                />
            }
        </tbody>
    )
}