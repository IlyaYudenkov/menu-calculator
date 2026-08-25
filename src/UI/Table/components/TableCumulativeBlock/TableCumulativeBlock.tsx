import { GROCERIES_DATA_ARRAY } from '@/data/dishes/dishes.data';
import cl from './_TableCumulativeBlock.module.scss'
import type { IDay } from '@/model/day.model';
import { calcGroceriesByDay } from '@/lib/calc.lib';
import { cls } from '@/lib/classes.lib';
import { CUMULATIVE_TABLE_ITEM } from '@/data/day.data';
import { useMemo } from 'react';
import { round } from '@/lib/round.lib';

interface TableCumulativeBlockProps {
    days?: IDay[]
}

export const TableCumulativeBlock = ({
    days = []
}: TableCumulativeBlockProps) => {

    const validDays = useMemo(() => {
        return days?.filter(day => day.id < CUMULATIVE_TABLE_ITEM.id)
    }, [days])

    return (
        <>
            {
                GROCERIES_DATA_ARRAY.map((item) => {

                    const values = validDays.map(day =>
                        round(calcGroceriesByDay(day.meals ?? [], item.key))
                    )

                    const total = values.reduce(
                        (sum, value) => sum + value,
                        0
                    )

                    return (
                        <tr
                            key={item.key}
                            className={cls(
                                cl.groceriesBody,
                                days?.length === 12 ? cl.tenDays : cl.fourteenDays
                            )}
                        >
                            <td>{item.label}</td>

                            {values.map((value, idx) => (
                                <td key={validDays[idx].id}>
                                    {value}
                                </td>
                            ))}
                            <td>{round(total)}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}
