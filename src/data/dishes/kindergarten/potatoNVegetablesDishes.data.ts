import type { IDish } from "@/model/dish.model";

const POTATO_IN_A_MILK: IDish = {
    id: 'kids-3.1',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.1.1',
            name: 'Картофель в молоке',
            components: {
                butter: 5,
                milkAndFermentedMilkProducts: 60,
                potato: 140,
            },
            macronutrients: {
                proteins: 2.01,
                fats: 2.72,
                carbohydrates: 11.57
            },
            caloricity: 76.95
        },

    ]
}

const PUMPKIN_PUREE: IDish = {
    id: 'kids-3.2',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.2.1',
            name: 'Пюре из тыквы',
            components: {
                butter: 23,
                flourWheat: 13,
                milkAndFermentedMilkProducts: 90,
                vegetables: 120,
            },
            macronutrients: {
                proteins: 1.87,
                fats: 3.35,
                carbohydrates: 6.45
            },
            caloricity: 101.42
        },

    ]
}

const CARROTS_W_GREEN_PEAS_IN_MILK_SAUSE: IDish = {
    id: 'kids-3.3',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.3.1',
            name: 'Морковь с зеленым горошком в молочном соусе',
            components: {
                butter: 12,
                flourWheat: 3,
                milkAndFermentedMilkProducts: 60,
                vegetables: 148,
            },
            macronutrients: {
                proteins: 2.18,
                fats: 5.12,
                carbohydrates: 6.89
            },
            caloricity: 87.68
        },

    ]
}

const PUMPKIN_PORRIDGE: IDish = {
    id: 'kids-3.4',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.4.1',
            name: 'Каша из тыквы (на молоке)',
            components: {
                butter: 5,
                cereals: 25,
                milkAndFermentedMilkProducts: 30,
                sugar: 10,
                vegetables: 195,
            },
            macronutrients: {
                proteins: 2.03,
                fats: 2.01,
                carbohydrates: 15.81
            },
            caloricity: 92.73
        },
        {
            id: 'kids-3.4.2',
            name: 'Каша из тыквы (на воде)',
            components: {
                butter: 5,
                cereals: 25,
                sugar: 10,
                vegetables: 195,
            },
            macronutrients: {
                proteins: 2.4,
                fats: 2.34,
                carbohydrates: 16.45
            },
            caloricity: 99.75
        },

    ]
}

const STEAMED_VEGETABLES_IN_MILK_SAUSE: IDish = {
    id: 'kids-3.5',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.5.1',
            name: 'Овощи, припущенные в молочном соусе',
            components: {
                butter: 9,
                flourWheat: 3,
                milkAndFermentedMilkProducts: 60,
                sugar: 1.5,
                vegetables: 150,
            },
            macronutrients: {
                proteins: 0.82,
                fats: 2.95,
                carbohydrates: 4.64
            },
            caloricity: 49.98
        },
    ]
}