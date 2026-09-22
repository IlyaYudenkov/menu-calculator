import type { IDish } from "@/model/dish.model";

const PANCAKES: IDish = {
    id: 'kids-16.1',
    variants: [
        {
            id: 'kids-16.1.1',
            name: 'Блины',
            defaultOutput: 70,
            components: {
                butter: 1.4,
                eggs: 2.1,
                flourWheat: 33.6,
                milkAndFermentedMilkProducts: 53.6,
                oil: 2,
                sugar: 1.4,
                yeasts: 1.4,
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.46,
                carbohydrates: 34.86
            },
            caloricity: 227.77
        },
        {
            id: 'kids-16.1.2',
            name: 'Блины с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 6.4,
                eggs: 2.1,
                flourWheat: 33.6,
                milkAndFermentedMilkProducts: 53.6,
                oil: 2,
                sugar: 1.4,
                yeasts: 1.4,
            },
            macronutrients: {
                proteins: 6.47,
                fats: 10.87,
                carbohydrates: 32.57
            },
            caloricity: 257.47
        },
        {
            id: 'kids-16.1.3',
            name: 'Блины со сметаной',
            defaultOutput: 80,
            components: {
                butter: 1.4,
                eggs: 2.1,
                flourWheat: 33.6,
                milkAndFermentedMilkProducts: 53.6,
                oil: 2,
                sourCream: 10,
                sugar: 1.4,
                yeasts: 1.4,
            },
            macronutrients: {
                proteins: 6.35,
                fats: 7.85,
                carbohydrates: 30.86
            },
            caloricity: 222.48
        },
        {
            id: 'kids-16.1.4',
            name: 'Блины с повидлом',
            defaultOutput: 80,
            components: {
                butter: 1.4,
                confectioneryProducts: 10,
                eggs: 2.1,
                flourWheat: 33.6,
                milkAndFermentedMilkProducts: 53.6,
                oil: 2,
                sugar: 1.4,
                yeasts: 1.4,
            },
            macronutrients: {
                proteins: 6.08,
                fats: 5.65,
                carbohydrates: 26.15
            },
            caloricity: 227.43
        },
    ]
}

const PANCAKES_MADE_W_KEFIR: IDish = {
    id: 'kids-16.2',
    variants: [
        {
            id: 'kids-16.2.1',
            name: 'Блины на кефире',
            defaultOutput: 70,
            components: {
                eggs: 8,
                flourWheat: 31,
                milkAndFermentedMilkProducts: 50,
                oil: 2,
                sugar: 2,
            },
            macronutrients: {
                proteins: 7.26,
                fats: 4.13,
                carbohydrates: 32.54
            },
            caloricity: 201.41
        },
        {
            id: 'kids-16.2.2',
            name: 'Блины на кефире с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                eggs: 8,
                flourWheat: 31,
                milkAndFermentedMilkProducts: 50,
                oil: 2,
                sugar: 2,
            },
            macronutrients: {
                proteins: 6.8,
                fats: 8.7,
                carbohydrates: 30.43
            },
            caloricity: 232.87
        },
        {
            id: 'kids-16.2.3',
            name: 'Блины на кефире с повидлом',
            defaultOutput: 80,
            components: {
                confectioneryProducts: 10,
                eggs: 8,
                flourWheat: 31,
                milkAndFermentedMilkProducts: 50,
                oil: 2,
                sugar: 2,
            },
            macronutrients: {
                proteins: 6.4,
                fats: 3.61,
                carbohydrates: 35.83
            },
            caloricity: 204.36
        }
    ]
}

const PANCAKES_MADE_W_APPLES: IDish = {
    id: 'kids-16.3',
    variants: [
        {
            id: 'kids-16.3.1',
            name: 'Блинчики с яблоками',
            defaultOutput: 70,
            components: {
                butter: 3,
                eggs: 4.5,
                flourWheat: 22,
                fruits: 22,
                milkAndFermentedMilkProducts: 54,
                oil: 1,
                sugar: 6,
            },
            macronutrients: {
                proteins: 5.67,
                fats: 7.13,
                carbohydrates: 26.9
            },
            caloricity: 197.67
        },
        {
            id: 'kids-16.3.2',
            name: 'Блинчики с яблоками с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 8,
                eggs: 4.5,
                flourWheat: 22,
                fruits: 22,
                milkAndFermentedMilkProducts: 54,
                oil: 1,
                sugar: 6,
            },
            macronutrients: {
                proteins: 5.32,
                fats: 11.49,
                carbohydrates: 25.16
            },
            caloricity: 229.37
        },
        {
            id: 'kids-16.3.3',
            name: 'Блинчики с яблоками с повидлом',
            defaultOutput: 80,
            components: {
                butter: 3,
                confectioneryProducts: 10,
                eggs: 4.5,
                flourWheat: 22,
                fruits: 22,
                milkAndFermentedMilkProducts: 54,
                oil: 1,
                sugar: 6,
            },
            macronutrients: {
                proteins: 5.01,
                fats: 6.24,
                carbohydrates: 30.89
            },
            caloricity: 201.09
        }
    ]
}

const OLADYI: IDish = {
    id: 'kids-16.4',
    variants: [
        {
            id: 'kids-16.4.1',
            name: 'Оладьи',
            defaultOutput: 70,
            components: {
                eggs: 2,
                flourWheat: 40,
                milkAndFermentedMilkProducts: 40,
                oil: 3.5,
                sugar: 1.4,
                yeasts: 1.1,
            },
            macronutrients: {
                proteins: 7.17,
                fats: 6.53,
                carbohydrates: 39.69
            },
            caloricity: 249.83
        },
        {
            id: 'kids-16.4.2',
            name: 'Оладьи с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                eggs: 2,
                flourWheat: 40,
                milkAndFermentedMilkProducts: 40,
                oil: 3.5,
                sugar: 1.4,
                yeasts: 1.1,
            },
            macronutrients: {
                proteins: 6.72,
                fats: 10.93,
                carbohydrates: 37.08
            },
            caloricity: 278.05
        },
        {
            id: 'kids-16.4.3',
            name: 'Оладьи со сметаной',
            defaultOutput: 80,
            components: {
                eggs: 2,
                flourWheat: 40,
                milkAndFermentedMilkProducts: 40,
                oil: 3.5,
                sourCream: 10,
                sugar: 1.4,
                yeasts: 1.1,
            },
            macronutrients: {
                proteins: 6.59,
                fats: 7.91,
                carbohydrates: 35.08
            },
            caloricity: 241.78
        },
        {
            id: 'kids-16.4.4',
            name: 'Оладьи с повидлом',
            defaultOutput: 80,
            components: {
                confectioneryProducts: 10,
                eggs: 2,
                flourWheat: 40,
                milkAndFermentedMilkProducts: 40,
                oil: 3.5,
                sugar: 1.4,
                yeasts: 1.1,
            },
            macronutrients: {
                proteins: 6.33,
                fats: 5.71,
                carbohydrates: 42.06
            },
            caloricity: 246.73
        }
    ]
}

const OLADYI_W_RAISINS: IDish = {
    id: 'kids-16.5',
    variants: [
        {
            id: 'kids-16.5.1',
            name: 'Оладьи с изюмом',
            defaultOutput: 70,
            components: {
                eggs: 2,
                flourWheat: 35,
                fruitsDried: 9,
                milkAndFermentedMilkProducts: 35,
                oil: 4,
                sugar: 1,
                yeasts: 1
            },
            macronutrients: {
                proteins: 6.53,
                fats: 6.93,
                carbohydrates: 42.07
            },
            caloricity: 259.16
        },
        {
            id: 'kids-16.5.2',
            name: 'Оладьи с изюмом с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                eggs: 2,
                flourWheat: 35,
                fruitsDried: 9,
                milkAndFermentedMilkProducts: 35,
                oil: 4,
                sugar: 1,
                yeasts: 1
            },
            macronutrients: {
                proteins: 6.12,
                fats: 11.31,
                carbohydrates: 39.32
            },
            caloricity: 286.76
        },
        {
            id: 'kids-16.5.3',
            name: 'Оладьи с изюмом со сметаной',
            defaultOutput: 80,
            components: {
                eggs: 2,
                flourWheat: 35,
                fruitsDried: 9,
                milkAndFermentedMilkProducts: 35,
                oil: 4,
                sourCream: 10,
                sugar: 1,
                yeasts: 1
            },
            macronutrients: {
                proteins: 6.03,
                fats: 8.26,
                carbohydrates: 37.18
            },
            caloricity: 233.44
        },
        {
            id: 'kids-16.5.4',
            name: 'Оладьи с изюмом с вареньем',
            defaultOutput: 80,
            components: {
                confectioneryProducts: 10,
                eggs: 2,
                flourWheat: 35,
                fruitsDried: 9,
                milkAndFermentedMilkProducts: 35,
                oil: 4,
                sugar: 1,
                yeasts: 1
            },
            macronutrients: {
                proteins: 5.75,
                fats: 6.06,
                carbohydrates: 44.79
            },
            caloricity: 257.25
        },
        {
            id: 'kids-16.5.5',
            name: 'Оладьи с изюмом с медом',
            defaultOutput: 80,
            components: {
                confectioneryProducts: 10,
                eggs: 2,
                flourWheat: 35,
                fruitsDried: 9,
                milkAndFermentedMilkProducts: 35,
                oil: 4,
                sugar: 1,
                yeasts: 1
            },
            macronutrients: {
                proteins: 5.8,
                fats: 6.06,
                carbohydrates: 45.85
            },
            caloricity: 262.09
        }
    ]
}