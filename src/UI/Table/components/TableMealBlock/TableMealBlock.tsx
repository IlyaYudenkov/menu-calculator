import Input from '@/UI/Input/Input'
import { DISHES_TO_OPTION } from '@/data/dishes/dishes.data'
import type { IMeal } from '@/model/meal.model'
import type { IOption } from '@/model/option.model'
import type { IDishMeta } from '@/model/dish.model'
import type { Dispatch, SetStateAction } from 'react'
import { TableDishRow } from '../TableDishRow/TableDishRow'
import { TableTotalRow } from '../TableTotalRow/TableTotalRow'
import { calcMealTotal } from '@/lib/calc.lib'

interface TableMealBlockProps<T> {
    meal: IMeal
    setMealsList: Dispatch<SetStateAction<IMeal[]>>
    selectedAgeCategoryValue?: number,
    filteredMealOptions: IOption[],
    onChangeSelect?: (opt: IOption<T>) => void
}

export const TableMealBlock = <T,> ({
    meal,
    setMealsList,
    selectedAgeCategoryValue,
    filteredMealOptions,
    onChangeSelect
 }: TableMealBlockProps<T>) => {  

    const addDish = (option: IOption<IDishMeta>) => {
        setMealsList(prev =>
            prev.map(m =>
                m.id !== meal.id
                    ? m
                    : {
                        ...m,
                        dishes: [...(m.dishes ?? []), option],
                        caloricity: calcMealTotal(meal, 'caloricity')
                    }
            )
        )
    }


    const updateDishOutput = (dishId: string, currentOutput: number) => {
        setMealsList(prev =>
            prev.map(m =>
                m.id !== meal.id
                    ? m
                    : {
                        ...m,
                        dishes: m.dishes?.map(d =>
                            d.id !== dishId
                                ? d
                                : {
                                    ...d,
                                    meta: d.meta
                                        ? {
                                            ...d.meta,
                                            currentOutput,
                                        }
                                        : d.meta
                                }
                        ),
                        caloricity: calcMealTotal(meal, 'caloricity')
                    }
            )
        )
    }

    // const updateDish = (dishId: string, newDish: IOption<IDishMeta>) => {
    //     setMealsList(prev =>
    //         prev.map(m =>
    //             m.id !== meal.id
    //                 ? m
    //                 : {
    //                     ...m,
    //                     dishes: m.dishes?.map(d =>
    //                         d.id !== dishId
    //                             ? d
    //                             : newDish
    //                     ),
    //                     caloricity: calcMealTotal(meal, 'caloricity')
    //                 }
    //         )
    //     )
    // }

    const removeDish = (dishId: string) => {
        setMealsList(prev =>
            prev.map(m =>
                m.id !== meal.id
                    ? m
                    : {
                        ...m,
                        dishes: m.dishes?.filter(d => d.id !== dishId),
                        caloricity: calcMealTotal(m, 'caloricity')
                    }
            )
        )
    }

    return (
        <>
            <tr>
                <td>
                    <Input.Select
                        defaultValue={meal.value}
                        options={filteredMealOptions}
                        placeholder={meal.value}
                        onChange={onChangeSelect}
                    />
                </td>
            </tr>

            {(meal.dishes ?? []).map(dish => (
                <TableDishRow
                    key={dish.id}
                    dish={dish}
                    // onUpdateDish={(newDish) =>
                    //     updateDish(dish.id, newDish)
                    // }
                    onUpdateOutput={(value) =>
                        updateDishOutput(dish.id, Number(value))
                    }
                    onRemoveDish={() => removeDish(dish.id)}
                />
            ))}

            <tr>
                <td>
                    <Input.TextAndSelect
                        options={DISHES_TO_OPTION}
                        placeholder="Добавить блюдо"
                        onSelectChange={(_, option) => addDish(option)}
                    />
                </td>
            </tr>
            <TableTotalRow
                label='Итого'
                proteins={calcMealTotal(meal, 'proteins')}
                fats={calcMealTotal(meal, 'fats')}
                carbohydrates={calcMealTotal(meal, 'carbohydrates')}
                caloricity={calcMealTotal(meal, 'caloricity')}
                selectedAgeCategoryValue={selectedAgeCategoryValue}
            />
        </>
    )
}