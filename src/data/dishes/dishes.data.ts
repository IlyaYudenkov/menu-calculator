import type { IDish, IDishMeta } from "@/model/dish.model";
import { SNACKS_ARRAY } from "./snacks.data";
import type { IOption } from "@/model/option.model";
import { SOUPS_ARRAY } from "./soups.data";
import { POTATO_N_VEGETABLES_DISHES_ARRAY } from "./potatoNVegetablesDishes.data";
import { CURD_DISHES_ARRAY } from "./curdDishes.data";
import { EGGS_DISHES_ARRAY } from "./eggsDishes.data";
import { SIDE_DISHES_ARRAY } from "./sideDishes.data";
import { SAUSES_ARRAY } from "./sauses.data";

export const ALL_DISHES_ARRAY: IDish[] = [
    ...SNACKS_ARRAY,
    ...SOUPS_ARRAY,
    ...POTATO_N_VEGETABLES_DISHES_ARRAY,
    ...EGGS_DISHES_ARRAY,
    ...CURD_DISHES_ARRAY,
    ...SIDE_DISHES_ARRAY,
    ...SAUSES_ARRAY
]

export const DISHES_TO_OPTION: IOption<IDishMeta>[] = ALL_DISHES_ARRAY.flatMap((dish: IDish): IOption<IDishMeta>[] =>
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
)

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