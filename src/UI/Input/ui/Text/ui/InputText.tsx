import type { InputHTMLAttributes } from 'react'
import cl from './_InputText.module.scss'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    onValueChange?: (value: string) => void
}

export const InputText = ({ onValueChange, onChange, ...props }: InputTextProps) => {
    return (
        <input
            className={cl.input}
            {...props}
            onChange={(e) => {
                let value = e.target.value

                if (value.length === 2 && value.startsWith('0')) {
                    value = value.slice(1)
                    e.target.value = value
                }
                onChange?.(e)
                onValueChange?.(e.target.value)
            }}
        />
    )
}
