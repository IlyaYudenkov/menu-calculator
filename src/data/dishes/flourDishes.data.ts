import type { IDish } from "@/model/dish.model"

const DUMPLINGS: IDish = {
    id: '14.1',
    generalOutput: 100,
    variants: [
        {
            id: '14.1.1',
            name: 'Пельмени с говядиной и свининой',
            components: {
                eggs: 4.7,
                flourWheat: 31.5,
                meat: 43,
                vegetables: 4.2,
            },
            macronutrients: {
                proteins: 10.5,
                fats: 7.4,
                carbohydrates: 20.1
            },
            caloricity: 189
        },
        {
            id: '14.1.2',
            name: 'Пельмени мясные',
            components: {
                eggs: 4.7,
                flourWheat: 31.5,
                meat: 43,
                vegetables: 4.2,
            },
            macronutrients: {
                proteins: 11.5,
                fats: 2.1,
                carbohydrates: 20.1
            },
            caloricity: 145
        },
    ]
}

const BOIED_DUMPLINGS: IDish = {
    id: '14.2',
    variants: [
        {
            id: '14.2.1',
            name: 'Пельмени отварные с говядиной и свининой',
            defaultOutput: 160,
            components: {
                eggs: 7.2,
                flourWheat: 46.62,
                meat: 63.6,
                vegetables: 6.2
            },
            macronutrients: {
                proteins: 9.7,
                fats: 6.8,
                carbohydrates: 18.6
            },
            caloricity: 174
        },
        {
            id: '14.2.2',
            name: 'Пельмени отварные мясные',
            defaultOutput: 160,
            components: {
                eggs: 7.2,
                flourWheat: 46.62,
                meat: 63.6,
                vegetables: 6.2
            },
            macronutrients: {
                proteins: 10.6,
                fats: 2,
                carbohydrates: 18.6
            },
            caloricity: 135
        },
        {
            id: '14.2.3',
            name: 'Пельмени отварные с говядиной и свининой с маслом сливочным',
            defaultOutput: 170,
            components: {
                butter: 10,
                eggs: 7.2,
                flourWheat: 46.62,
                meat: 63.6,
                vegetables: 6.2
            },
            macronutrients: {
                proteins: 10,
                fats: 6.4,
                carbohydrates: 17.6
            },
            caloricity: 168
        },
        {
            id: '14.2.4',
            name: 'Пельмени отварные мясные с маслом сливочным',
            defaultOutput: 170,
            components: {
                butter: 10,
                eggs: 7.2,
                flourWheat: 46.62,
                meat: 63.6,
                vegetables: 6.2
            },
            macronutrients: {
                proteins: 9.1,
                fats: 10.6,
                carbohydrates: 17.6
            },
            caloricity: 203
        },
    ]
}

const VARENIKI_W_CURD: IDish = {
    id: '14.3',
    generalOutput: 160,
    variants: [
        {
            id: '14.3.1',
            name: 'Вареники с творогом (на молоке)',
            components: {
                curd: 74.6,
                eggs: 6.9,
                flourWheat: 48.9,
                milkAndFermentedMilkProducts: 16.1,
                sugar: 5.74,
            },
            macronutrients: {
                proteins: 10,
                fats: 7.5,
                carbohydrates: 22.3
            },
            caloricity: 197
        },
        {
            id: '14.3.2',
            name: 'Вареники с творогом (на воде)',
            components: {
                curd: 74.6,
                eggs: 6.9,
                flourWheat: 48.9,
                sugar: 5.74,
            },
            macronutrients: {
                proteins: 10,
                fats: 7.5,
                carbohydrates: 22.3
            },
            caloricity: 197
        }
    ]
}

const BLINY: IDish = {
    id: '14.4',
    variants: [
        {
            id: '14.4.1',
            name: 'Блины (на молоке)',
            defaultOutput: 100,
            components: {
                butter: 2,
                eggs: 2.7,
                flourWheat: 48,
                milkAndFermentedMilkProducts: 76.7,
                oil: 3,
                sugar: 2,
                yeasts: 2,
            },
            macronutrients: {
                proteins: 7.2,
                fats: 6.4,
                carbohydrates: 33.6
            },
            caloricity: 220
        },
        {
            id: '14.4.2',
            name: 'Блины (на воде)',
            defaultOutput: 100,
            components: {
                butter: 2,
                eggs: 2.7,
                flourWheat: 48,
                oil: 3,
                sugar: 2,
                yeasts: 2,
            },
            macronutrients: {
                proteins: 7.2,
                fats: 6.4,
                carbohydrates: 33.6
            },
            caloricity: 220
        },
        {
            id: '14.4.3',
            name: 'Блины с маслом сливочным (на молоке)',
            defaultOutput: 110,
            components: {
                butter: 12,
                eggs: 2.7,
                flourWheat: 48,
                milkAndFermentedMilkProducts: 76.7,
                oil: 3,
                sugar: 2,
                yeasts: 2,
            },
            macronutrients: {
                proteins: 6.6,
                fats: 12.4,
                carbohydrates: 30.5
            },
            caloricity: 259
        },
        {
            id: '14.4.4',
            name: 'Блины с маслом сливочным (на воде)',
            defaultOutput: 110,
            components: {
                butter: 12,
                eggs: 2.7,
                flourWheat: 48,
                oil: 3,
                sugar: 2,
                yeasts: 2,
            },
            macronutrients: {
                proteins: 6.6,
                fats: 12.4,
                carbohydrates: 30.5
            },
            caloricity: 259
        },
        {
            id: '14.4.5',
            name: 'Блины со сметаной (на молоке)',
            defaultOutput: 115,
            components: {
                butter: 2,
                eggs: 2.7,
                flourWheat: 48,
                milkAndFermentedMilkProducts: 76.7,
                oil: 3,
                sourCream: 15,
                sugar: 2,
                yeasts: 2,
            },
            macronutrients: {
                proteins: 6.7,
                fats: 8.2,
                carbohydrates: 29.6
            },
            caloricity: 217
        },
        {
            id: '14.4.6',
            name: 'Блины со сметаной (на воде)',
            defaultOutput: 115,
            components: {
                butter: 2,
                eggs: 2.7,
                flourWheat: 48,
                oil: 3,
                sourCream: 15,
                sugar: 2,
                yeasts: 2,
            },
            macronutrients: {
                proteins: 6.7,
                fats: 8.2,
                carbohydrates: 29.6
            },
            caloricity: 217
        },
        {
            id: '14.4.7',
            name: 'Блины с джемом (на молоке)',
            defaultOutput: 115,
            components: {
                butter: 2,
                confectioneryProducts: 15,
                eggs: 2.7,
                flourWheat: 48,
                milkAndFermentedMilkProducts: 76.7,
                oil: 3,
                sugar: 2,
                yeasts: 2,
            },
            macronutrients: {
                proteins: 6.3,
                fats: 5.6,
                carbohydrates: 38.5
            },
            caloricity: 228
        },
        {
            id: '14.4.8',
            name: 'Блины с джемом (на воде)',
            defaultOutput: 115,
            components: {
                butter: 2,
                confectioneryProducts: 15,
                eggs: 2.7,
                flourWheat: 48,
                oil: 3,
                sugar: 2,
                yeasts: 2,
            },
            macronutrients: {
                proteins: 6.3,
                fats: 5.6,
                carbohydrates: 38.5
            },
            caloricity: 228
        },
        {
            id: '14.4.9',
            name: 'Блины с медом (на молоке)',
            defaultOutput: 110,
            components: {
                butter: 2,
                confectioneryProducts: 10,
                eggs: 2.7,
                flourWheat: 48,
                milkAndFermentedMilkProducts: 76.7,
                oil: 3,
                sugar: 2,
                yeasts: 2,
            },
            macronutrients: {
                proteins: 6.6,
                fats: 5.8,
                carbohydrates: 45
            },
            caloricity: 258
        },
        {
            id: '14.4.10',
            name: 'Блины с медом (на воде)',
            defaultOutput: 110,
            components: {
                butter: 2,
                confectioneryProducts: 10,
                eggs: 2.7,
                flourWheat: 48,
                oil: 3,
                sugar: 2,
                yeasts: 2,
            },
            macronutrients: {
                proteins: 6.6,
                fats: 5.8,
                carbohydrates: 45
            },
            caloricity: 258
        },
        {
            id: '14.4.11',
            name: 'Блины c молоком сгущенным (на молоке, молоко сгущенное в кондитерские изделия)',
            defaultOutput: 115,
            components: {
                butter: 2,
                confectioneryProducts: 15,
                eggs: 2.7,
                flourWheat: 48,
                milkAndFermentedMilkProducts: 76.7,
                oil: 3,
                sugar: 2,
                yeasts: 2,
            },
            macronutrients: {
                proteins: 7.1,
                fats: 6.8,
                carbohydrates: 36.4
            },
            caloricity: 234
        },
        {
            id: '14.4.12',
            name: 'Блины c молоком сгущенным (на воде, молоко сгущенное в кондитерские изделия)',
            defaultOutput: 115,
            components: {
                butter: 2,
                confectioneryProducts: 15,
                eggs: 2.7,
                flourWheat: 48,
                oil: 3,
                sugar: 2,
                yeasts: 2,
            },
            macronutrients: {
                proteins: 7.1,
                fats: 6.8,
                carbohydrates: 36.4
            },
            caloricity: 234
        },
        {
            id: '14.4.13',
            name: 'Блины c молоком сгущенным (на молоке, молоко сгущенное в молочные продукты)',
            defaultOutput: 115,
            components: {
                butter: 2,
                eggs: 2.7,
                flourWheat: 48,
                milkAndFermentedMilkProducts: 91.7,
                oil: 3,
                sugar: 2,
                yeasts: 2,
            },
            macronutrients: {
                proteins: 7.1,
                fats: 6.8,
                carbohydrates: 36.4
            },
            caloricity: 234
        },
        {
            id: '14.4.14',
            name: 'Блины c молоком сгущенным (на воде, молоко сгущенное в молочные продукты)',
            defaultOutput: 115,
            components: {
                butter: 2,
                eggs: 2.7,
                flourWheat: 48,
                milkAndFermentedMilkProducts: 15,
                oil: 3,
                sugar: 2,
                yeasts: 2,
            },
            macronutrients: {
                proteins: 7.1,
                fats: 6.8,
                carbohydrates: 36.4
            },
            caloricity: 234
        },
    ]
}

const BLINCHIKI_W_FARSH: IDish = {
    id: '14.5',
    generalOutput: 135,
    variants: [
        {
            id: '14.5.1',
            name: 'Блинчики с яблочным фаршем (на молоке)',
            components: {
                eggs: 8.5,
                flourWheat: 41.6,
                fruits: 50.6,
                milkAndFermentedMilkProducts: 104,
                oil: 6.6,
                sugar: 17.5,
            },
            macronutrients: {
                proteins: 5.7,
                fats: 7.6,
                carbohydrates: 36.4
            },
            caloricity: 236
        },
        {
            id: '14.5.2',
            name: 'Блинчики с яблочным фаршем (на воде)',
            components: {
                eggs: 8.5,
                flourWheat: 41.6,
                fruits: 50.6,
                oil: 6.6,
                sugar: 17.5,
            },
            macronutrients: {
                proteins: 5.7,
                fats: 7.6,
                carbohydrates: 36.4
            },
            caloricity: 236
        },
        {
            id: '14.5.3',
            name: 'Блинчики с рисом и изюмом (на молоке)',
            components: {
                butter: 2,
                cereals: 13.9,
                eggs: 8.5,
                flourWheat: 41.6,
                fruitsDried: 6,
                milkAndFermentedMilkProducts: 104,
                oil: 6.6,
                sugar: 6.25,
            },
            macronutrients: {
                proteins: 6.4,
                fats: 10.4,
                carbohydrates: 35
            },
            caloricity: 259
        },
        {
            id: '14.5.4',
            name: 'Блинчики с рисом и изюмом (на воде)',
            components: {
                butter: 2,
                cereals: 13.9,
                eggs: 8.5,
                flourWheat: 41.6,
                fruitsDried: 6,
                oil: 6.6,
                sugar: 6.25,
            },
            macronutrients: {
                proteins: 6.4,
                fats: 10.4,
                carbohydrates: 35
            },
            caloricity: 259
        }
    ]
}

export const FLOUR_DISHES_ARRAY: IDish[] = [
    DUMPLINGS,
    BOIED_DUMPLINGS,
    VARENIKI_W_CURD,
    BLINY,
    BLINCHIKI_W_FARSH
]