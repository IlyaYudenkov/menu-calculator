import type { IOption } from '@/model/option.model'
import cl from './_TableAverageBlock.module.scss'
import React from 'react'

interface TableAverageBlockProps {
    elements: IOption[]
}

export const TableAverageBlock = ({
    elements
}: TableAverageBlockProps) => {

    return (
        <>
            <tr className={cl.title}>
                <td>В среднем</td>
            </tr>
            <tr className={cl.TableAverageBlock}>
                {elements.map(it => (
                    <React.Fragment key={it.id}>
                        <td>{it.label}</td>
                        <td>{it.value}</td>
                    </React.Fragment>
                ))}
            </tr>
        </>

    )
}
