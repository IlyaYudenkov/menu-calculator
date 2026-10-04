import cl from './_HomeScreen.module.scss'
import { Table } from '@/UI/Table'
import {
    useEffect,
    useMemo,
    useState,
    type Dispatch,
    type SetStateAction
} from 'react'
import {
    AGE_CATEGORY_LS_VARIABLE,
    DAYS_LS_VARIABLE,
    MENU_DURATION_LS_VARIABLE
} from '@/data/localStorage.data'
import type { IMeal } from '@/model/meal.model'
import { SwitchSelector } from '@/UI/SwitchSelector'
import {
    CUMULATIVE_TABLE_ITEM,
    DURATION_MENU_ITEMS_ARRAY,
    FOURTEEN_DAYS_DATA_ARRAY,
    PRODUCT_NAME_ITEM,
    TABLE_HEAD_DAY_TABLE_ELEMENTS,
    TEN_DAYS_DATA_ARRAY,
    TEN_DAYS_DURATION_MENU_ITEM,
    TOTAL_AVERAGE_NAME_ITEM,
    TOTAL_TABLE_ITEM
} from '@/data/day.data'
import type { IDay } from '@/model/day.model'
import Input from '@/UI/Input/Input'
import {
    AGE_CATEGORIES_ITEMS_ARRAY,
    SIX_TO_TEN_AGE_CATEGORIES_CCAL_ITEM
} from '@/data/ageCategory.data'
import type { IOption } from '@/model/option.model'
import { type IDish, type TAgeCategoryKey } from '@/model/dish.model'
import { ALL_DISHES_BY_SELECTED_AGE_CATEGORY } from '@/data/dishes/dishes.data'
import { DishesByAgeCategoryArrayContext } from '@/context/dishes/dishesArrayContext'
import { useAuth } from '@/context/auth/useAuth'

export const HomeScreen = () => {
    const [days, setDays] = useState<IDay[]>([])
    const [activeDayId, setActiveDayId] = useState<number | null>(null)

    const [ageCategory, setAgeCategory] = useState<IOption>(JSON.parse(localStorage.getItem(AGE_CATEGORY_LS_VARIABLE))
        || SIX_TO_TEN_AGE_CATEGORIES_CCAL_ITEM)

    const [menuDuration, setMenuDuration] = useState<IOption>(JSON.parse(localStorage.getItem(MENU_DURATION_LS_VARIABLE))
        || TEN_DAYS_DURATION_MENU_ITEM);

    const { logout } = useAuth()

    useEffect(() => {
        if (menuDuration) {
            localStorage.setItem(
                MENU_DURATION_LS_VARIABLE,
                JSON.stringify(menuDuration)
            )
        }

    }, [menuDuration])

    useEffect(() => {
        if (ageCategory) {
            localStorage.setItem(
                AGE_CATEGORY_LS_VARIABLE,
                JSON.stringify(ageCategory)
            )
        }
    }, [ageCategory])

    useEffect(() => {
        if (!days.length) return
        localStorage.setItem(DAYS_LS_VARIABLE, JSON.stringify(days))
    }, [days])

    const baseDays = useMemo(() => {
        return menuDuration?.value === TEN_DAYS_DURATION_MENU_ITEM.value
            ? TEN_DAYS_DATA_ARRAY
            : FOURTEEN_DAYS_DATA_ARRAY
    }, [menuDuration])

    const selectedDishesArray: IDish[] = useMemo(() => {
        return ageCategory
            ? ALL_DISHES_BY_SELECTED_AGE_CATEGORY[ageCategory.id as TAgeCategoryKey]
            : [];
    }, [ageCategory]);

    useEffect(() => {
        const saved = localStorage.getItem(DAYS_LS_VARIABLE)

        const finalDays = [
            ...baseDays,
            CUMULATIVE_TABLE_ITEM,
            TOTAL_AVERAGE_NAME_ITEM
        ]

        if (saved) {
            try {
                const parsed: IDay[] = JSON.parse(saved)
                const merged = finalDays.map(d => {
                    const existing = parsed.find(p => p.id === d.id)

                    return existing ?? {
                        id: d.id,
                        label: d.label,
                        meals: []
                    }
                })

                setDays(merged)
                return
            } catch { }
        }

        setDays(
            finalDays.map(d => ({
                id: d.id,
                label: d.label,
                meals: []
            }))
        )
    }, [menuDuration])

    useEffect(() => {
        if (!days.length) return

        if (activeDayId == null) {
            setActiveDayId(days[0].id)
            return
        }

        const exists = days.some(d => d.id === activeDayId)

        if (!exists) {
            setActiveDayId(days[0].id)
        }
    }, [days])

    const currentMeals =
        days.find(d => d.id === activeDayId)?.meals ?? []

    const setMealsForDay: Dispatch<SetStateAction<IMeal[]>> = (value) => {
        setDays(prev =>
            prev.map(day => {
                if (day.id !== activeDayId || activeDayId == null) return day

                const prevMeals = day.meals ?? []

                const nextMeals =
                    typeof value === 'function'
                        ? value(prevMeals)
                        : value

                return {
                    ...day,
                    meals: nextMeals
                }
            })
        )
    }

    const switchSelectorOptions = useMemo(() => {
        return [
            ...baseDays,
            CUMULATIVE_TABLE_ITEM,
            TOTAL_AVERAGE_NAME_ITEM
        ]
    }, [baseDays])


    const cumulativeHead = useMemo(() => {
        return [
            PRODUCT_NAME_ITEM,
            ...baseDays,
            TOTAL_TABLE_ITEM
        ]
    }, [baseDays])

    const isCumulative = activeDayId === CUMULATIVE_TABLE_ITEM.id;
    const isAverage = activeDayId === TOTAL_AVERAGE_NAME_ITEM.id;

    return (
        <DishesByAgeCategoryArrayContext value={selectedDishesArray}>
            <div className={cl.HomeScreen}>
                <Input.Select
                    options={DURATION_MENU_ITEMS_ARRAY}
                    defaultValue={menuDuration.label}
                    placeholder="Выберите продолжительность меню"
                    onChange={(option: IOption) => {
                        setMenuDuration(option)
                    }}
                />

                <Input.Select
                    options={AGE_CATEGORIES_ITEMS_ARRAY}
                    placeholder="Возрастная категория"
                    defaultValue={ageCategory.label}
                    onChange={(option: IOption) => {
                        setAgeCategory(option)
                    }}
                />

                <SwitchSelector
                    options={switchSelectorOptions}
                    value={activeDayId ?? undefined}
                    onChange={setActiveDayId}
                />

                <Table
                    mealsList={currentMeals}
                    setMealsList={setMealsForDay}
                    tableHeadOptions={
                        isCumulative
                            ? cumulativeHead
                            : TABLE_HEAD_DAY_TABLE_ELEMENTS
                    }
                    isDayTable={!isCumulative && !isAverage}
                    isAverageTable={isAverage}
                    days={days}
                    setDays={setDays}
                    selectedAgeCategoryValue={+ageCategory?.value || 0}
                />
                <button
                    className={cl.logoutBtn}
                    onClick={() => logout()}>
                    Выйти
                </button>
            </div>
        </DishesByAgeCategoryArrayContext>
    )
}