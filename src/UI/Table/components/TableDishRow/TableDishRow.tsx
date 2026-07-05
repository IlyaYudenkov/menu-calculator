import cl from './_TableDishRow.module.scss'
import type { IDishMeta } from "@/model/dish.model"
import type { IOption } from "@/model/option.model"
import Input from "@/UI/Input/Input"
import { calcDishValue } from '@/lib/calc.lib'

interface TableDishRowProps {
    dish: IOption<IDishMeta>,
    selectedDishesArrayOptions: IOption[]

    // onUpdateDish: (dish: IOption<IDishMeta>) => void
    onUpdateOutput: (value: number) => void
    onRemoveDish: () => void
}

export const TableDishRow = ({
    dish,
    selectedDishesArrayOptions,
    // onUpdateDish,
    onUpdateOutput,
    onRemoveDish
}: TableDishRowProps) => {
    return (
        <tr className={cl.TableDishRow}>
            <td>
                <Input.TextAndSelect
                    options={selectedDishesArrayOptions}
                    defaultValue={dish}
                    placeholder="Выберите блюдо"
                    disabled={!!dish}
                // onSelectChange={() => {
                //     onUpdateDish(dish)
                // }}
                />
            </td>
            <td>
                <Input.Text
                    type="number"
                    value={dish.meta?.currentOutput}
                    onValueChange={(value) => {
                        onUpdateOutput(+value || 0)
                    }}
                />
            </td>

            <td>{calcDishValue(dish, 'proteins')}</td>
            <td>{calcDishValue(dish, 'fats')}</td>
            <td>{calcDishValue(dish, 'carbohydrates')}</td>
            <td>{calcDishValue(dish, 'caloricity')}</td>
            <td>
                <button
                    className={cl.deleteButton}
                    onClick={() => onRemoveDish()}
                    aria-label='Удалить блюдо'
                >
                    X
                </button>
            </td>
        </tr>
    )
}