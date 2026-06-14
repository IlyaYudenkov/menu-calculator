import { useEffect, useRef, useState } from 'react'
import type { InputHTMLAttributes } from 'react'
import type { IOption } from '@/model/option.model'
import { cls } from '@/lib/classes.lib'
import cl from './_InputTextAndSelect.module.scss'
import { normalizeFilter } from '@/lib/filter.lib'

interface InputTextAndSelectProps<T> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onSelect' | 'defaultValue'> {
    options: IOption<T>[]
    selectPlaceholder?: string
    defaultValue?: IOption<T>,
    onSelectChange?: (value: string, option: IOption<T>) => void
}

export const InputTextAndSelect = <T,>({
    options,
    placeholder,
    defaultValue,
    onSelectChange,
    disabled,
    ...inputProps
}: InputTextAndSelectProps<T>) => {

    // STATE
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [inputValue, setInputValue] = useState(defaultValue?.label || '')

    // REF
    const ref = useRef<HTMLDivElement>(null)

    // EFFECT
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])


    const filteredOptions = options.filter(opt =>
        normalizeFilter(opt.label).includes(normalizeFilter(inputValue))
    )

    return (
        <div className={cls(
            cl.wrapper,
            disabled ? cl.disabled : '',
            isDropdownOpen ? cl.openWrapper : ''
        )}
            ref={ref}
        >

            <input
                {...inputProps}
                className={cl.input}
                placeholder={placeholder}
                value={inputValue}
                onFocus={() => setIsDropdownOpen(true)}
                onChange={(e) => {
                    setInputValue(e.target.value)
                    setIsDropdownOpen(true)
                }}
            />

            <div className={cl.control}>
                <span className={cls(cl.arrow, isDropdownOpen ? cl.arrowOpen : '')} />
            </div>

            <div className={cls(cl.dropdown, isDropdownOpen ? cl.open : '')}>
                {filteredOptions.length > 0 ? (
                    filteredOptions.map((opt, idx) => (
                        <div
                            key={`${opt.value}.${idx}`}
                            className={cl.option}
                            onClick={() => {
                                setInputValue(opt.label)
                                onSelectChange?.(opt.value, opt)
                                setInputValue('')
                                setIsDropdownOpen(false)
                            }}
                        >
                            {opt.label}
                        </div>
                    ))
                ) : (
                    <div className={cl.empty}>
                        (X_X) Ничего не найдено (X_X)
                    </div>
                )}
            </div>
        </div>
    )
}