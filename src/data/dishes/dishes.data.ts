import type { IDish, IDishMeta } from "@/model/dish.model";
import { SNACKS_ARRAY } from "./snacks.data";
import type { IOption } from "@/model/option.model";
import { SOUPS_ARRAY } from "./soups.data";

export const ALL_DISHES_ARRAY: IDish[] = [
    ...SNACKS_ARRAY,
    ...SOUPS_ARRAY
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
    { key: 'eggs', label: 'Яйца' },
    { key: 'cocoa', label: 'Какао' },
    { key: 'potato', label: 'Картофель' },
    { key: 'coffeeDrink', label: 'Кофейный напиток' },
    { key: 'cereals', label: 'Крупы' },
    { key: 'pastaProducts', label: 'Макаронные изделия' },
    { key: 'mayonnaise', label: 'Майонез' },
    { key: 'butter', label: 'Масло сливочное' },
    { key: 'oil', label: 'Масло растительное' },
    { key: 'meat', label: 'Мясо' },
    { key: 'milkAndFermentedMilkProducts', label: 'Молочные продукты' },
    { key: 'flourWheat', label: 'Мука пшеничная' },
    { key: 'honey', label: 'Мёд' },
    { key: 'vegetables', label: 'Овощи' },
    { key: 'poultry', label: 'Птица' },
    { key: 'fish', label: 'Рыба' },
    { key: 'sugar', label: 'Сахар' },
    { key: 'sausageProducts', label: 'Колбасные изделия' },
    { key: 'confectioneryProducts', label: 'Кондитерские изделия' },
    { key: 'potatoStarch', label: 'Крахмал' },
    { key: 'sourCream', label: 'Сметана' },
    { key: 'juices', label: 'Соки' },
    { key: 'byProducts', label: 'Субпродукты' },
    { key: 'cheese', label: 'Сыр' },
    { key: 'curd', label: 'Творог' },
    { key: 'tomatoPuree', label: 'Томатное пюре' },
    { key: 'fruits', label: 'Фрукты' },
    { key: 'fruitsDried', label: 'Сухофрукты' },
    { key: 'breadWheat', label: 'Хлеб пшеничный' },
    { key: 'breadRye', label: 'Хлеб ржаной' },
    { key: 'tea', label: 'Чай' }
] as const;