import { cls } from '@/lib/classes.lib'
import cl from './_TableTHead.module.scss'

interface TableTHeadProps {
    options?: { id: number, label: string }[]
    isDayTable?: boolean,
}


export const TableTHead = ({
    options,
    isDayTable,
}: TableTHeadProps) => {

    return (
        <thead className={cls(
            cl.TableTHead,
            options?.length === 12 ? cl.tenDays : cl.fourteenDays,
            isDayTable ? cl.dayTHead : '')}>
            <tr>
                {options?.map(el => (
                    <td className={cl.tableElement} key={el.id}>
                        {el.label}
                    </td>
                ))}
            </tr>
        </thead>
    )
}
