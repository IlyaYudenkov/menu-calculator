import { TableTHead } from '../components/THead/TableTHead'
import cl from './_Table.module.scss'
import type { Dispatch, SetStateAction } from 'react'
import { TableTBody } from '../components/TBody/TableTBody'
import type { IMeal } from '@/model/meal.model'
import type { IDay } from '@/model/day.model'

interface TableProps {
    mealsList: IMeal[]
    setMealsList: Dispatch<SetStateAction<IMeal[]>>
    tableHeadOptions: { id: number, label: string }[],
    isDayTable?: boolean
    isAverageTable?: boolean,
    days?: IDay[],
    setDays: Dispatch<SetStateAction<IDay[]>>,
    selectedAgeCategoryValue?: number
}

export const Table = ({
    mealsList,
    setMealsList,
    tableHeadOptions,
    isDayTable,
    isAverageTable,
    days,
    setDays,
    selectedAgeCategoryValue
}: TableProps) => {
    return (
        <table className={cl.Table}>

            {!isAverageTable && <TableTHead
                options={tableHeadOptions}
                isDayTable={isDayTable}
            />}

            <TableTBody
                mealsList={mealsList}
                setMealsList={setMealsList}
                isDayTable={isDayTable}
                isAverageTable={isAverageTable}
                setDays={setDays}
                days={days}
                selectedAgeCategoryValue={selectedAgeCategoryValue}
            />

        </table>
    )
}
