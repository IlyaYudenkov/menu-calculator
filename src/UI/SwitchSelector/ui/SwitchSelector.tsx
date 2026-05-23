import { cls } from '@/lib/classes.lib';
import cl from './_SwitchSelector.module.scss'

interface SwitchSelectorProps {
    options: { id: number; label: string }[]
    value?: number
    onChange: (id: number) => void
}

export const SwitchSelector = ({
    options,
    value,
    onChange
}: SwitchSelectorProps) => {

    const handleClick = (id: number) => onChange?.(id);

    return (
        <div className={cl.SwitchSelector}>
            {options.map(opt => {
                const isActive = opt.id === value;

                return (
                    <button
                        key={opt.id}
                        onClick={() => handleClick(opt.id)}
                        className={(cls(cl.selectorButton), isActive ? cl.active : '')}
                    >
                        {opt.label}
                    </button>
                )
            })}
        </div>
    )
}