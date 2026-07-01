import cl from './_TableDishRow.module.scss'
import type { IDishMeta } from "@/model/dish.model"
import type { IOption } from "@/model/option.model"
import Input from "@/UI/Input/Input"
import { calcDishValue } from '@/lib/calc.lib'
import { updateDishesOptions } from '@/data/dishes/dishes.data'
import { AGE_CATEGORY_LS_VARIABLE } from '@/data/localStorage.data'

interface TableDishRowProps {
    dish: IOption<IDishMeta>

    // onUpdateDish: (dish: IOption<IDishMeta>) => void
    onUpdateOutput: (value: number) => void
    onRemoveDish: () => void
}

export const TableDishRow = ({
    dish,
    // onUpdateDish,
    onUpdateOutput,
    onRemoveDish
}: TableDishRowProps) => {
    return (
        <tr className={cl.TableDishRow}>
            <td>
                <Input.TextAndSelect
                    options={updateDishesOptions(JSON.parse(localStorage.getItem(AGE_CATEGORY_LS_VARIABLE)).id)}
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