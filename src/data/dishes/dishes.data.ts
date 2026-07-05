import type { IDish, IDishMeta, TAgeCategoryKey } from "@/model/dish.model";
import type { IOption } from "@/model/option.model";
import { SCHOOL_DISHES_ARRAY } from "./school/schoolDishes.data";
import { KINDERGARTEN_DISHES_ARRAY } from "./kindergarten/kindergartenDishes.data";

export const ALL_DISHES_BY_SELECTED_AGE_CATEGORY: Record<TAgeCategoryKey, IDish[]> = {
    '1': SCHOOL_DISHES_ARRAY,
    '2': SCHOOL_DISHES_ARRAY,
    '3': SCHOOL_DISHES_ARRAY,
    '4': SCHOOL_DISHES_ARRAY,
    '5': KINDERGARTEN_DISHES_ARRAY,
    '6': KINDERGARTEN_DISHES_ARRAY
}

export const updateDishesOptions = (dishesArray: IDish[]) => {
    return dishesArray.flatMap((dish: IDish): IOption<IDishMeta>[] =>
        dish.variants.map(variant => ({
            id: String(variant.id),
            label: variant.name,
            value: String(variant.id),
            meta: {
                caloricity: variant.caloricity,
                components: variant.components,
                defaultOutput: dish.generalOutput || variant.currentOutput,
                currentOutput: dish.generalOutput || variant.currentOutput,
                macronutrients: variant.macronutrients
            }
        }))
    );
}


export const GROCERIES_KEYS = [
    'breadRye',
    'breadWheat',
    'butter',
    'byProducts',
    'cereals',
    'cheese',
    'cocoa',
    'coffeeDrink',
    'confectioneryProducts',
    'curd',
    'eggs',
    'honey',
    'fish',
    'fruits',
    'fruitsDried',
    'flourWheat',
    'jam',
    'juices',
    'mayonnaise',
    'meat',
    'milkAndFermentedMilkProducts',
    'legumes',
    'oil',
    'pastaProducts',
    'potato',
    'potatoStarch',
    'poultry',
    'sausageProducts',
    'sourCream',
    'sugar',
    'tea',
    'tomatoPuree',
    'vegetables',
    'yeasts'
] as const;

export const GROCERIES_DATA_ARRAY = [
    { key: 'legumes', label: 'Бобовые' },
    { key: 'jam', label: 'Варенье' },
    { key: 'yeasts', label: 'Дрожжи' },
    { key: 'cocoa', label: 'Какао' },
    { key: 'potato', label: 'Картофель' },
    { key: 'sausageProducts', label: 'Колбасные изделия' },
    { key: 'confectioneryProducts', label: 'Кондитерские изделия' },
    { key: 'coffeeDrink', label: 'Кофейный напиток' },
    { key: 'potatoStarch', label: 'Крахмал' },
    { key: 'cereals', label: 'Крупы' },
    { key: 'mayonnaise', label: 'Майонез' },
    { key: 'pastaProducts', label: 'Макаронные изделия' },
    { key: 'oil', label: 'Масло растительное' },
    { key: 'butter', label: 'Масло сливочное' },
    { key: 'honey', label: 'Мёд' },
    { key: 'milkAndFermentedMilkProducts', label: 'Молочные продукты' },
    { key: 'flourWheat', label: 'Мука пшеничная' },
    { key: 'meat', label: 'Мясо' },
    { key: 'vegetables', label: 'Овощи' },
    { key: 'poultry', label: 'Птица' },
    { key: 'fish', label: 'Рыба' },
    { key: 'sugar', label: 'Сахар' },
    { key: 'sourCream', label: 'Сметана' },
    { key: 'juices', label: 'Соки' },
    { key: 'byProducts', label: 'Субпродукты' },
    { key: 'fruitsDried', label: 'Сухофрукты' },
    { key: 'cheese', label: 'Сыр' },
    { key: 'curd', label: 'Творог' },
    { key: 'tomatoPuree', label: 'Томатное пюре' },
    { key: 'fruits', label: 'Фрукты' },
    { key: 'breadWheat', label: 'Хлеб пшеничный' },
    { key: 'breadRye', label: 'Хлеб ржаной' },
    { key: 'tea', label: 'Чай' },
    { key: 'eggs', label: 'Яйца' }
] as const;