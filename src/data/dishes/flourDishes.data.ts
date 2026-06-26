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

const BLINCHIKI_W_CABBAGE_OR_POULTRY: IDish = {
    id: '14.6',
    generalOutput: 135,
    variants: [
        {
            id: '14.6.1',
            name: 'Блинчики с капустой (на молоке)',
            components: {
                eggs: 14.5,
                flourWheat: 41.6,
                milkAndFermentedMilkProducts: 104,
                oil: 6.6,
                sugar: 2.5,
                vegetables: 60,
            },
            macronutrients: {
                proteins: 6.8,
                fats: 9.7,
                carbohydrates: 25.4
            },
            caloricity: 216
        },
        {
            id: '14.6.2',
            name: 'Блинчики с капустой (на воде)',
            components: {
                eggs: 14.5,
                flourWheat: 41.6,
                oil: 6.6,
                sugar: 2.5,
                vegetables: 60,
            },
            macronutrients: {
                proteins: 6.8,
                fats: 9.7,
                carbohydrates: 25.4
            },
            caloricity: 216
        },
        {
            id: '14.6.3',
            name: 'Блинчики с птицей (на молоке)',
            components: {
                butter: 6,
                eggs: 24.5,
                flourWheat: 41.6,
                milkAndFermentedMilkProducts: 104,
                oil: 6.6,
                poultry: 46,
                sugar: 2.5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 13.4,
                fats: 13.7,
                carbohydrates: 25.5
            },
            caloricity: 279
        },
        {
            id: '14.6.4',
            name: 'Блинчики с птицей (на воде)',
            components: {
                butter: 6,
                eggs: 24.5,
                flourWheat: 41.6,
                oil: 6.6,
                poultry: 46,
                sugar: 2.5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 13.4,
                fats: 13.7,
                carbohydrates: 25.5
            },
            caloricity: 279
        },
    ]
}

const BLINCHIKI_W_CARROTS_N_CINNAMON: IDish = {
    id: '14.7',
    variants: [
        {
            id: '14.7.1',
            name: 'Блинчики с морковью и корицей (на молоке)',
            defaultOutput: 105,
            components: {
                eggs: 6.1,
                flourWheat: 25,
                milkAndFermentedMilkProducts: 62.4,
                oil: 8,
                sugar: 1.5,
                vegetables: 54,
            },
            macronutrients: {
                proteins: 5.2,
                fats: 8.9,
                carbohydrates: 22.2
            },
            caloricity: 188
        },
        {
            id: '14.7.2',
            name: 'Блинчики с морковью и корицей (на воде)',
            defaultOutput: 105,
            components: {
                eggs: 6.1,
                flourWheat: 25,
                oil: 8,
                sugar: 1.5,
                vegetables: 54,
            },
            macronutrients: {
                proteins: 5.2,
                fats: 8.9,
                carbohydrates: 22.2
            },
            caloricity: 188
        },
        {
            id: '14.7.3',
            name: 'Блинчики с морковью и корицей с маслом сливочным (на молоке)',
            defaultOutput: 110,
            components: {
                butter: 5,
                eggs: 6.1,
                flourWheat: 25,
                milkAndFermentedMilkProducts: 62.4,
                oil: 8,
                sugar: 1.5,
                vegetables: 54,
            },
            macronutrients: {
                proteins: 5.2,
                fats: 12.3,
                carbohydrates: 22.2
            },
            caloricity: 220
        },
        {
            id: '14.7.4',
            name: 'Блинчики с морковью и корицей с маслом сливочным (на воде)',
            defaultOutput: 110,
            components: {
                butter: 5,
                eggs: 6.1,
                flourWheat: 25,
                oil: 8,
                sugar: 1.5,
                vegetables: 54,
            },
            macronutrients: {
                proteins: 5.2,
                fats: 12.3,
                carbohydrates: 22.2
            },
            caloricity: 220
        },
    ]
}

const BLINCHIKI_VITAMINNYE: IDish = {
    id: '14.8',
    variants: [
        {
            id: '14.8.1',
            name: 'Блинчики витаминные (на молоке)',
            defaultOutput: 105,
            components: {
                curd: 15,
                eggs: 4.25,
                flourWheat: 20.8,
                fruits: 25,
                milkAndFermentedMilkProducts: 52,
                oil: 2.3,
                sourCream: 15,
                sugar: 1.25,
                vegetables: 11,
            },
            macronutrients: {
                proteins: 6.6,
                fats: 7.3,
                carbohydrates: 19.2
            },
            caloricity: 169
        },
        {
            id: '14.8.2',
            name: 'Блинчики витаминные (на воде)',
            defaultOutput: 105,
            components: {
                curd: 15,
                eggs: 4.25,
                flourWheat: 20.8,
                fruits: 25,
                oil: 2.3,
                sourCream: 15,
                sugar: 1.25,
                vegetables: 11,
            },
            macronutrients: {
                proteins: 6.6,
                fats: 7.3,
                carbohydrates: 19.2
            },
            caloricity: 169
        },
        {
            id: '14.8.3',
            name: 'Блинчики витаминные с сахарной пудрой (на молоке)',
            defaultOutput: 110,
            components: {
                curd: 15,
                eggs: 4.25,
                flourWheat: 20.8,
                fruits: 25,
                milkAndFermentedMilkProducts: 52,
                oil: 2.3,
                sourCream: 15,
                sugar: 6.25,
                vegetables: 11,
            },
            macronutrients: {
                proteins: 6.3,
                fats: 7,
                carbohydrates: 22.7//исправил ошибку в сборнике
            },
            caloricity: 169
        },
        {
            id: '14.8.4',
            name: 'Блинчики витаминные с сахарной пудрой (на воде)',
            defaultOutput: 110,
            components: {
                curd: 15,
                eggs: 4.25,
                flourWheat: 20.8,
                fruits: 25,
                oil: 2.3,
                sourCream: 15,
                sugar: 6.25,
                vegetables: 11,
            },
            macronutrients: {
                proteins: 6.3,
                fats: 7,
                carbohydrates: 22.7//исправил ошибку в сборнике
            },
            caloricity: 169
        },
    ]
}

const OLADYI: IDish = {
    id: '14.9',
    variants: [
        {
            id: '14.9.1',
            name: 'Оладьи (на молоке, масло растительное)',
            defaultOutput: 100,
            components: {
                eggs: 2.7,
                flourWheat: 56.4,
                milkAndFermentedMilkProducts: 56.4,
                sugar: 2,
                oil: 6
            },
            macronutrients: {
                proteins: 7.5,
                fats: 7.2,
                carbohydrates: 39.7
            },
            caloricity: 254
        },
        {
            id: '14.9.2',
            name: 'Оладьи (на воде, масло растительное)',
            defaultOutput: 100,
            components: {
                eggs: 2.7,
                flourWheat: 56.4,
                sugar: 2,
                oil: 6
            },
            macronutrients: {
                proteins: 7.5,
                fats: 7.2,
                carbohydrates: 39.7
            },
            caloricity: 254
        },
        {
            id: '14.9.3',
            name: 'Оладьи (на молоке, масло сливочное)',
            defaultOutput: 100,
            components: {
                butter: 6,
                eggs: 2.7,
                flourWheat: 56.4,
                milkAndFermentedMilkProducts: 56.4,
                sugar: 2,
            },
            macronutrients: {
                proteins: 7.5,
                fats: 7.2,
                carbohydrates: 39.7
            },
            caloricity: 254
        },
        {
            id: '14.9.4',
            name: 'Оладьи (на воде, масло сливочное)',
            defaultOutput: 100,
            components: {
                butter: 6,
                eggs: 2.7,
                flourWheat: 56.4,
                sugar: 2,
            },
            macronutrients: {
                proteins: 7.5,
                fats: 7.2,
                carbohydrates: 39.7
            },
            caloricity: 254
        },
        {
            id: '14.9.5',
            name: 'Оладьи с маслом сливочным (на молоке, масло растительное)',
            defaultOutput: 110,
            components: {
                butter: 10,
                eggs: 2.7,
                flourWheat: 56.4,
                milkAndFermentedMilkProducts: 56.4,
                sugar: 2,
                oil: 6
            },
            macronutrients: {
                proteins: 6.9,
                fats: 13.1,
                carbohydrates: 36.2
            },
            caloricity: 290
        },
        {
            id: '14.9.6',
            name: 'Оладьи с маслом сливочным (на воде, масло растительное)',
            defaultOutput: 110,
            components: {
                butter: 10,
                eggs: 2.7,
                flourWheat: 56.4,
                sugar: 2,
                oil: 6
            },
            macronutrients: {
                proteins: 6.9,
                fats: 13.1,
                carbohydrates: 36.2
            },
            caloricity: 290
        },
        {
            id: '14.9.7',
            name: 'Оладьи с маслом сливочным (на молоке, масло сливочное)',
            defaultOutput: 110,
            components: {
                butter: 16,
                eggs: 2.7,
                flourWheat: 56.4,
                milkAndFermentedMilkProducts: 56.4,
                sugar: 2,
            },
            macronutrients: {
                proteins: 6.9,
                fats: 13.1,
                carbohydrates: 36.2
            },
            caloricity: 290
        },
        {
            id: '14.9.8',
            name: 'Оладьи с маслом сливочным (на воде, масло сливочное)',
            defaultOutput: 100,
            components: {
                butter: 16,
                eggs: 2.7,
                flourWheat: 56.4,
                sugar: 2,
            },
            macronutrients: {
                proteins: 6.9,
                fats: 13.1,
                carbohydrates: 36.2
            },
            caloricity: 290
        },
        {
            id: '14.9.9',
            name: 'Оладьи со сметаной (на молоке, масло растительное)',
            defaultOutput: 115,
            components: {
                eggs: 2.7,
                flourWheat: 56.4,
                milkAndFermentedMilkProducts: 56.4,
                sourCream: 15,
                sugar: 2,
                oil: 6
            },
            macronutrients: {
                proteins: 6.9,
                fats: 13.1,
                carbohydrates: 36.2
            },
            caloricity: 290
        },
        {
            id: '14.9.10',
            name: 'Оладьи со сметаной (на воде, масло растительное)',
            defaultOutput: 115,
            components: {
                butter: 10,
                eggs: 2.7,
                flourWheat: 56.4,
                sourCream: 15,
                sugar: 2,
                oil: 6
            },
            macronutrients: {
                proteins: 6.9,
                fats: 13.1,
                carbohydrates: 36.2
            },
            caloricity: 290
        },
        {
            id: '14.9.11',
            name: 'Оладьи со сметаной (на молоке, масло сливочное)',
            defaultOutput: 115,
            components: {
                butter: 6,
                eggs: 2.7,
                flourWheat: 56.4,
                milkAndFermentedMilkProducts: 56.4,
                sourCream: 15,
                sugar: 2,
            },
            macronutrients: {
                proteins: 6.9,
                fats: 13.1,
                carbohydrates: 36.2
            },
            caloricity: 290
        },
        {
            id: '14.9.12',
            name: 'Оладьи со сметаной (на воде, масло сливочное)',
            defaultOutput: 115,
            components: {
                butter: 6,
                eggs: 2.7,
                flourWheat: 56.4,
                sourCream: 15,
                sugar: 2,
            },
            macronutrients: {
                proteins: 6.9,
                fats: 13.1,
                carbohydrates: 36.2
            },
            caloricity: 290
        },
        {
            id: '14.9.13',
            name: 'Оладьи c молоком сгущенным (на молоке, масло растительное, молоко сгущенное в молочные продукты)',
            defaultOutput: 120,
            components: {
                eggs: 2.7,
                flourWheat: 56.4,
                milkAndFermentedMilkProducts: 76.4,
                sourCream: 15,
                sugar: 2,
                oil: 6
            },
            macronutrients: {
                proteins: 7.4,
                fats: 7.5,
                carbohydrates: 42.4
            },
            caloricity: 267
        },
        {
            id: '14.9.14',
            name: 'Оладьи c молоком сгущенным (на воде, масло растительное, молоко сгущенное в молочные продукты)',
            defaultOutput: 120,
            components: {
                eggs: 2.7,
                flourWheat: 76.4,
                sourCream: 15,
                sugar: 2,
                oil: 6
            },
            macronutrients: {
                proteins: 7.4,
                fats: 7.5,
                carbohydrates: 42.4
            },
            caloricity: 267
        },
        {
            id: '14.9.15',
            name: 'Оладьи c молоком сгущенным (на молоке, масло сливочное, молоко сгущенное в молочные продукты)',
            defaultOutput: 120,
            components: {
                butter: 6,
                eggs: 2.7,
                flourWheat: 56.4,
                milkAndFermentedMilkProducts: 76.4,
                sourCream: 15,
                sugar: 2,
            },
            macronutrients: {
                proteins: 7.4,
                fats: 7.5,
                carbohydrates: 42.4
            },
            caloricity: 267
        },
        {
            id: '14.9.16',
            name: 'Оладьи c молоком сгущенным (на воде, масло сливочное, молоко сгущенное в молочные продукты)',
            defaultOutput: 120,
            components: {
                butter: 6,
                eggs: 2.7,
                flourWheat: 76.4,
                sourCream: 15,
                sugar: 2,
            },
            macronutrients: {
                proteins: 7.4,
                fats: 7.5,
                carbohydrates: 42.4
            },
            caloricity: 267
        },
        {
            id: '14.9.17',
            name: 'Оладьи c молоком сгущенным (на молоке, масло растительное, молоко сгущенное в кондитерские изделия)',
            defaultOutput: 120,
            components: {
                confectioneryProducts: 20,
                eggs: 2.7,
                flourWheat: 56.4,
                milkAndFermentedMilkProducts: 56.4,
                sourCream: 15,
                sugar: 2,
                oil: 6
            },
            macronutrients: {
                proteins: 7.4,
                fats: 7.5,
                carbohydrates: 42.4
            },
            caloricity: 267
        },
        {
            id: '14.9.18',
            name: 'Оладьи c молоком сгущенным (на воде, масло растительное, молоко сгущенное в кондитерские изделия)',
            defaultOutput: 120,
            components: {
                confectioneryProducts: 20,
                eggs: 2.7,
                flourWheat: 76.4,
                sourCream: 15,
                sugar: 2,
                oil: 6
            },
            macronutrients: {
                proteins: 7.4,
                fats: 7.5,
                carbohydrates: 42.4
            },
            caloricity: 267
        },
        {
            id: '14.9.19',
            name: 'Оладьи c молоком сгущенным (на молоке, масло сливочное, молоко сгущенное в кондитерские изделия)',
            defaultOutput: 120,
            components: {
                butter: 6,
                confectioneryProducts: 20,
                eggs: 2.7,
                flourWheat: 56.4,
                milkAndFermentedMilkProducts: 76.4,
                sourCream: 15,
                sugar: 2,
            },
            macronutrients: {
                proteins: 7.4,
                fats: 7.5,
                carbohydrates: 42.4
            },
            caloricity: 267
        },
        {
            id: '14.9.20',
            name: 'Оладьи c молоком сгущенным (на воде, масло сливочное, молоко сгущенное в кондитерские изделия)',
            defaultOutput: 120,
            components: {
                butter: 6,
                confectioneryProducts: 20,
                eggs: 2.7,
                flourWheat: 76.4,
                sourCream: 15,
                sugar: 2,
            },
            macronutrients: {
                proteins: 7.4,
                fats: 7.5,
                carbohydrates: 42.4
            },
            caloricity: 267
        },
        {
            id: '14.9.21',
            name: 'Оладьи c повидлом (на молоке, масло растительное)',
            defaultOutput: 110,
            components: {
                confectioneryProducts: 10,
                eggs: 2.7,
                flourWheat: 56.4,
                milkAndFermentedMilkProducts: 56.4,
                sourCream: 15,
                sugar: 2,
                oil: 6
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.5,
                carbohydrates: 42.4
            },
            caloricity: 255
        },
        {
            id: '14.9.22',
            name: 'Оладьи c повидлом (на воде, масло растительное)',
            defaultOutput: 110,
            components: {
                confectioneryProducts: 10,
                eggs: 2.7,
                flourWheat: 76.4,
                sourCream: 15,
                sugar: 2,
                oil: 6
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.5,
                carbohydrates: 42.4
            },
            caloricity: 255
        },
        {
            id: '14.9.23',
            name: 'Оладьи c повидлом (на молоке, масло сливочное)',
            defaultOutput: 110,
            components: {
                butter: 6,
                confectioneryProducts: 10,
                eggs: 2.7,
                flourWheat: 56.4,
                milkAndFermentedMilkProducts: 76.4,
                sourCream: 15,
                sugar: 2,
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.5,
                carbohydrates: 42.4
            },
            caloricity: 255
        },
        {
            id: '14.9.24',
            name: 'Оладьи c повидлом (на воде, масло сливочное)',
            defaultOutput: 120,
            components: {
                butter: 6,
                confectioneryProducts: 10,
                eggs: 2.7,
                flourWheat: 76.4,
                sourCream: 15,
                sugar: 2,
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.5,
                carbohydrates: 42.4
            },
            caloricity: 255
        },
    ]
}

const OLADYI_W_APPLES_OR_RAISIN: IDish = {
    id: '14.10',
    variants: [
        {
            id: '14.10.1',
            name: 'Оладьи с яблоками (на молоке, масло растительное)',
            defaultOutput: 100,
            components: {
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                milkAndFermentedMilkProducts: 51.6,
                oil: 6,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.3,
                carbohydrates: 37.2
            },
            caloricity: 233
        },
        {
            id: '14.10.2',
            name: 'Оладьи с яблоками (на воде, масло растительное)',
            defaultOutput: 100,
            components: {
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                oil: 6,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.3,
                carbohydrates: 37.2
            },
            caloricity: 233
        },
        {
            id: '14.10.3',
            name: 'Оладьи с яблоками (на молоке, масло сливочное)',
            defaultOutput: 100,
            components: {
                butter: 6,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                milkAndFermentedMilkProducts: 51.6,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.3,
                carbohydrates: 37.2
            },
            caloricity: 233
        },
        {
            id: '14.10.4',
            name: 'Оладьи с яблоками (на воде, масло сливочное)',
            defaultOutput: 100,
            components: {
                butter: 6,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.3,
                carbohydrates: 37.2
            },
            caloricity: 233
        },
        {
            id: '14.10.5',
            name: 'Оладьи с яблоками с маслом сливочным (на молоке, масло растительное)',
            defaultOutput: 110,
            components: {
                butter: 10,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                milkAndFermentedMilkProducts: 51.6,
                oil: 6,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.4,
                fats: 12.3,
                carbohydrates: 33.9
            },
            caloricity: 272
        },
        {
            id: '14.10.6',
            name: 'Оладьи с яблоками с маслом сливочным (на воде, масло растительное)',
            defaultOutput: 110,
            components: {
                butter: 10,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                oil: 6,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.4,
                fats: 12.3,
                carbohydrates: 33.9
            },
            caloricity: 272
        },
        {
            id: '14.10.7',
            name: 'Оладьи с яблоками с маслом сливочным (на молоке, масло сливочное)',
            defaultOutput: 110,
            components: {
                butter: 16,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                milkAndFermentedMilkProducts: 51.6,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.4,
                fats: 12.3,
                carbohydrates: 33.9
            },
            caloricity: 272
        },
        {
            id: '14.10.8',
            name: 'Оладьи с яблоками с маслом сливочным (на воде, масло сливочное)',
            defaultOutput: 110,
            components: {
                butter: 16,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.4,
                fats: 12.3,
                carbohydrates: 33.9
            },
            caloricity: 272
        },
        {
            id: '14.10.9',
            name: 'Оладьи с яблоками со сметаной (на молоке, масло растительное)',
            defaultOutput: 115,
            components: {
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                milkAndFermentedMilkProducts: 51.6,
                oil: 6,
                sourCream: 15,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.4,
                fats: 8.1,
                carbohydrates: 32.8
            },
            caloricity: 230
        },
        {
            id: '14.10.10',
            name: 'Оладьи с яблоками со сметаной (на воде, масло растительное)',
            defaultOutput: 115,
            components: {
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                oil: 6,
                sourCream: 15,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.4,
                fats: 8.1,
                carbohydrates: 32.8
            },
            caloricity: 230
        },
        {
            id: '14.10.11',
            name: 'Оладьи с яблоками со сметаной (на молоке, масло сливочное)',
            defaultOutput: 115,
            components: {
                butter: 6,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                milkAndFermentedMilkProducts: 51.6,
                sourCream: 15,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.4,
                fats: 8.1,
                carbohydrates: 32.8
            },
            caloricity: 230
        },
        {
            id: '14.10.12',
            name: 'Оладьи с яблоками со сметаной (на воде, масло сливочное)',
            defaultOutput: 115,
            components: {
                butter: 6,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                sourCream: 15,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.4,
                fats: 8.1,
                carbohydrates: 32.8
            },
            caloricity: 230
        },
        {
            id: '14.10.13',
            name: 'Оладьи с яблоками с молоком сгущенным (на молоке, масло растительное, молоко сгущенное в молочные продукты)',
            defaultOutput: 120,
            components: {
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                milkAndFermentedMilkProducts: 71.6,
                oil: 6,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.8,
                carbohydrates: 40.3
            },
            caloricity: 248
        },
        {
            id: '14.10.14',
            name: 'Оладьи с яблоками с молоком сгущенным (на воде, масло растительное,молоко сгущенное в молочные продукты)',
            defaultOutput: 120,
            components: {
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                milkAndFermentedMilkProducts: 20,
                oil: 6,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.8,
                carbohydrates: 40.3
            },
            caloricity: 248
        },
        {
            id: '14.10.15',
            name: 'Оладьи с яблоками с молоком сгущенным (на молоке, масло сливочное, молоко сгущенное в молочные продукты)',
            defaultOutput: 120,
            components: {
                butter: 6,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                milkAndFermentedMilkProducts: 71.6,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.8,
                carbohydrates: 40.3
            },
            caloricity: 248
        },
        {
            id: '14.10.16',
            name: 'Оладьи с яблоками с молоком сгущенным (на воде, масло сливочное, молоко сгущенное в молочные продукты)',
            defaultOutput: 120,
            components: {
                butter: 6,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                milkAndFermentedMilkProducts: 20,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.8,
                carbohydrates: 40.3
            },
            caloricity: 248
        },
        {
            id: '14.10.17',
            name: 'Оладьи с яблоками с молоком сгущенным (на молоке, масло растительное, молоко сгущенное в кондитерские изделия)',
            defaultOutput: 120,
            components: {
                confectioneryProducts: 20,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                milkAndFermentedMilkProducts: 51.6,
                oil: 6,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.8,
                carbohydrates: 40.3
            },
            caloricity: 248
        },
        {
            id: '14.10.18',
            name: 'Оладьи с яблоками с молоком сгущенным (на воде, масло растительное, молоко сгущенное в кондитерские изделия)',
            defaultOutput: 120,
            components: {
                confectioneryProducts: 20,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                oil: 6,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.8,
                carbohydrates: 40.3
            },
            caloricity: 248
        },
        {
            id: '14.10.19',
            name: 'Оладьи с яблоками с молоком сгущенным (на молоке, масло сливочное, молоко сгущенное в кондитерские изделия)',
            defaultOutput: 120,
            components: {
                butter: 6,
                confectioneryProducts: 20,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                milkAndFermentedMilkProducts: 51.6,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.8,
                carbohydrates: 40.3
            },
            caloricity: 248
        },
        {
            id: '14.10.20',
            name: 'Оладьи с яблоками с молоком сгущенным (на воде, масло сливочное, молоко сгущенное в кондитерские изделия)',
            defaultOutput: 120,
            components: {
                butter: 6,
                confectioneryProducts: 20,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.8,
                carbohydrates: 40.3
            },
            caloricity: 248
        },
        {
            id: '14.10.21',
            name: 'Оладьи с яблоками с повидлом (на молоке, масло растительное)',
            defaultOutput: 110,
            components: {
                confectioneryProducts: 10,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                milkAndFermentedMilkProducts: 51.6,
                oil: 6,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.4,
                fats: 5.7,
                carbohydrates: 40.1
            },
            caloricity: 241
        },
        {
            id: '14.10.22',
            name: 'Оладьи с яблоками с повидлом (на воде, масло растительное)',
            defaultOutput: 110,
            components: {
                confectioneryProducts: 10,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                oil: 6,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.4,
                fats: 5.7,
                carbohydrates: 40.1
            },
            caloricity: 241
        },
        {
            id: '14.10.23',
            name: 'Оладьи с яблоками с повидлом (на молоке, масло сливочное)',
            defaultOutput: 110,
            components: {
                butter: 6,
                confectioneryProducts: 10,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                milkAndFermentedMilkProducts: 51.6,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.4,
                fats: 5.7,
                carbohydrates: 40.1
            },
            caloricity: 241
        },
        {
            id: '14.10.24',
            name: 'Оладьи с яблоками с повидлом (на воде, масло сливочное)',
            defaultOutput: 110,
            components: {
                butter: 6,
                confectioneryProducts: 10,
                eggs: 2.5,
                flourWheat: 51.6,
                fruits: 10,
                sugar: 1.8,
                yeasts: 1.5
            },
            macronutrients: {
                proteins: 6.4,
                fats: 5.7,
                carbohydrates: 40.1
            },
            caloricity: 241
        },
        {
            id: '14.10.25',
            name: 'Оладьи с изюмом (на молоке, масло растительное)',
            defaultOutput: 100,
            components: {
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 50,
                oil: 6,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.2,
                carbohydrates: 43.1
            },
            caloricity: 256
        },
        {
            id: '14.10.26',
            name: 'Оладьи с изюмом (на воде, масло растительное)',
            defaultOutput: 100,
            components: {
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                oil: 6,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.2,
                carbohydrates: 43.1
            },
            caloricity: 256
        },
        {
            id: '14.10.27',
            name: 'Оладьи с изюмом (на молоке, масло сливочное)',
            defaultOutput: 100,
            components: {
                butter: 6,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 50,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.2,
                carbohydrates: 43.1
            },
            caloricity: 256
        },
        {
            id: '14.10.28',
            name: 'Оладьи с изюмом (на воде, масло сливочное)',
            defaultOutput: 100,
            components: {
                butter: 6,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.2,
                carbohydrates: 43.1
            },
            caloricity: 256
        },
        {
            id: '14.10.29',
            name: 'Оладьи с изюмом с маслом сливочным (на молоке, масло растительное)',
            defaultOutput: 110,
            components: {
                butter: 10,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 50,
                oil: 6,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.4,
                fats: 12.2,
                carbohydrates: 39.3
            },
            caloricity: 293
        },
        {
            id: '14.10.30',
            name: 'Оладьи с изюмом с маслом сливочным (на воде, масло растительное)',
            defaultOutput: 110,
            components: {
                butter: 10,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                oil: 6,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.4,
                fats: 12.2,
                carbohydrates: 39.3
            },
            caloricity: 293
        },
        {
            id: '14.10.31',
            name: 'Оладьи с изюмом с маслом сливочным (на молоке, масло сливочное)',
            defaultOutput: 110,
            components: {
                butter: 16,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 50,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.4,
                fats: 12.2,
                carbohydrates: 39.3
            },
            caloricity: 293
        },
        {
            id: '14.10.32',
            name: 'Оладьи с изюмом с маслом сливочным (на воде, масло сливочное)',
            defaultOutput: 110,
            components: {
                butter: 16,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 50,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.4,
                fats: 12.2,
                carbohydrates: 39.3
            },
            caloricity: 293
        },
        {
            id: '14.10.33',
            name: 'Оладьи с изюмом со сметаной (на молоке, масло растительное)',
            defaultOutput: 115,
            components: {
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 50,
                oil: 6,
                sourCream: 15,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.4,
                fats: 8.1,
                carbohydrates: 32.8
            },
            caloricity: 230
        },
        {
            id: '14.10.34',
            name: 'Оладьи с изюмом со сметаной (на воде, масло растительное)',
            defaultOutput: 115,
            components: {
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                oil: 6,
                sourCream: 15,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.4,
                fats: 8.1,
                carbohydrates: 32.8
            },
            caloricity: 230
        },
        {
            id: '14.10.35',
            name: 'Оладьи с изюмом со сметаной (на молоке, масло сливочное)',
            defaultOutput: 115,
            components: {
                butter: 6,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 50,
                sourCream: 15,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.4,
                fats: 8.1,
                carbohydrates: 32.8
            },
            caloricity: 230
        },
        {
            id: '14.10.36',
            name: 'Оладьи с изюмом со сметаной (на воде, масло сливочное)',
            defaultOutput: 115,
            components: {
                butter: 6,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 50,
                sourCream: 15,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.4,
                fats: 8.1,
                carbohydrates: 32.8
            },
            caloricity: 230
        },
        {
            id: '14.10.37',
            name: 'Оладьи с изюмом с молоком сгущенным (на молоке, масло растительное, молоко сгущенное в молочные продукты)',
            defaultOutput: 120,
            components: {
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 70,
                oil: 6,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.8,
                carbohydrates: 40.3
            },
            caloricity: 250
        },
        {
            id: '14.10.38',
            name: 'Оладьи с изюмом с молоком сгущенным (на воде, масло растительное, молоко сгущенное в молочные продукты)',
            defaultOutput: 120,
            components: {
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 20,
                oil: 6,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.8,
                carbohydrates: 40.3
            },
            caloricity: 250
        },
        {
            id: '14.10.39',
            name: 'Оладьи с изюмом с молоком сгущенным (на молоке, масло сливочное, молоко сгущенное в молочные продукты)',
            defaultOutput: 120,
            components: {
                butter: 6,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 70,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.8,
                carbohydrates: 40.3
            },
            caloricity: 250
        },
        {
            id: '14.10.40',
            name: 'Оладьи с изюмом с молоком сгущенным (на воде, масло сливочное, молоко сгущенное в молочные продукты)',
            defaultOutput: 120,
            components: {
                butter: 6,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 20,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.8,
                carbohydrates: 40.3
            },
            caloricity: 250
        },
        {
            id: '14.10.41',
            name: 'Оладьи с изюмом с молоком сгущенным (на молоке, масло растительное, молоко сгущенное в кондитерские изделия)',
            defaultOutput: 120,
            components: {
                confectioneryProducts: 20,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 50,
                oil: 6,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.8,
                carbohydrates: 40.3
            },
            caloricity: 250
        },
        {
            id: '14.10.42',
            name: 'Оладьи с изюмом с молоком сгущенным (на воде, масло растительное, молоко сгущенное в кондитерские изделия)',
            defaultOutput: 120,
            components: {
                confectioneryProducts: 20,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                oil: 6,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.8,
                carbohydrates: 40.3
            },
            caloricity: 250
        },
        {
            id: '14.10.43',
            name: 'Оладьи с изюмом с молоком сгущенным (на молоке, масло сливочное, молоко сгущенное в кондитерские изделия)',
            defaultOutput: 120,
            components: {
                butter: 6,
                confectioneryProducts: 20,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 50,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.8,
                carbohydrates: 40.3
            },
            caloricity: 250
        },
        {
            id: '14.10.44',
            name: 'Оладьи с изюмом с молоком сгущенным (на воде, масло сливочное, молоко сгущенное в кондитерские изделия)',
            defaultOutput: 120,
            components: {
                butter: 6,
                confectioneryProducts: 20,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 50,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.8,
                carbohydrates: 40.3
            },
            caloricity: 250
        },
        {
            id: '14.10.45',
            name: 'Оладьи с изюмом с повидлом (на молоке, масло растительное)',
            defaultOutput: 110,
            components: {
                confectioneryProducts: 10,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 50,
                oil: 6,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.4,
                fats: 5.7,
                carbohydrates: 40.1
            },
            caloricity: 236
        },
        {
            id: '14.10.46',
            name: 'Оладьи с изюмом с повидлом (на воде, масло растительное)',
            defaultOutput: 110,
            components: {
                confectioneryProducts: 10,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                oil: 6,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.4,
                fats: 5.7,
                carbohydrates: 40.1
            },
            caloricity: 236
        },
        {
            id: '14.10.47',
            name: 'Оладьи с изюмом с повидлом (на молоке, масло сливочное)',
            defaultOutput: 110,
            components: {
                butter: 6,
                confectioneryProducts: 10,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 50,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.4,
                fats: 5.7,
                carbohydrates: 40.1
            },
            caloricity: 236
        },
        {
            id: '14.10.48',
            name: 'Оладьи с изюмом с повидлом (на воде, масло сливочное)',
            defaultOutput: 110,
            components: {
                butter: 6,
                confectioneryProducts: 10,
                eggs: 2.4,
                flourWheat: 50,
                fruitsDried: 13.3,
                milkAndFermentedMilkProducts: 50,
                sugar: 1.77,
                yeasts: 1.45
            },
            macronutrients: {
                proteins: 6.4,
                fats: 5.7,
                carbohydrates: 40.1
            },
            caloricity: 236
        }
    ]
}

export const FLOUR_DISHES_ARRAY: IDish[] = [
    DUMPLINGS,
    BOIED_DUMPLINGS,
    VARENIKI_W_CURD,
    BLINY,
    BLINCHIKI_W_FARSH,
    BLINCHIKI_W_CABBAGE_OR_POULTRY,
    BLINCHIKI_W_CARROTS_N_CINNAMON,
    BLINCHIKI_VITAMINNYE,
    OLADYI,
    OLADYI_W_APPLES_OR_RAISIN
]