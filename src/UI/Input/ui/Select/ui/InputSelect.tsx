import { useEffect, useRef, useState } from 'react'
import cl from './_InputSelect.module.scss'
import type { IOption } from '@/model/option.model'
import { cls } from '@/lib/classes.lib'

interface InputSelectProps<T> {
    options: IOption[]
    placeholder?: string
    defaultValue?: string
    onChange?: (opt: IOption<T>) => void
    disabled?: boolean
}

export const InputSelect = <T,>({
    options,
    placeholder,
    defaultValue,
    onChange,
    disabled
}: InputSelectProps<T>) => {

    //STATE
    const [open, setOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(defaultValue || '')

    //REF
    const ref = useRef<HTMLDivElement>(null)

    //EFFECT
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    return (
        <div className={cl.wrapper} ref={ref}>
            <div
                className={cls(
                    cl.control,
                     disabled ? cl.disabled : '',
                     open ? cl.openControl : ''
                    )}
                onClick={() => !disabled && setOpen(prev => !prev)}
            >
                <span className={!selectedValue ? cl.placeholder : ''}>
                    {selectedValue || placeholder}
                </span>

                <span className={cls(cl.arrow, open ? cl.arrowOpen : '')} />
            </div>

            <div className={cls(cl.dropdown, open ? cl.open : '')}>
                {options.map(opt => (
                    <div
                        key={opt.id}
                        className={cl.option}
                        onClick={() => {
                            setSelectedValue(opt.label)
                            onChange?.(opt as IOption<T>)
                            setOpen(false)
                        }}
                    >
                        {opt.label}
                    </div>
                ))}
            </div>
        </div>
    )
}