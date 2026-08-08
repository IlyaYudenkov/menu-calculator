import type { IDish } from "@/model/dish.model";

const EGG_PORRIDGE_V1: IDish = {
    id: 'kids-7.1',
    generalOutput: 70,
    variants: [
        {
            id: 'kids-7.1.1',
            name: 'Яичная кашка (вариант 1)',
            components: {
                butter: 3,
                eggs: 53,
                milkAndFermentedMilkProducts: 27
            },
            macronutrients: {
                proteins: 9.54,
                fats: 11.63,
                carbohydrates: 2.14
            },
            caloricity: 153.9
        }
    ]
}

const EGG_PORRIDGE_V2: IDish = {
    id: 'kids-7.2',
    generalOutput: 70,
    variants: [
        {
            id: 'kids-7.2.1',
            name: 'Яичная кашка (вариант 2)',
            components: {
                eggs: 53,
                milkAndFermentedMilkProducts: 27,
                oil: 3
            },
            macronutrients: {
                proteins: 9.53,
                fats: 12.27,
                carbohydrates: 2.11
            },
            caloricity: 159.7
        }
    ]
}

const OMELETTE_NATURAL: IDish = {
    id: 'kids-7.3',
    variants: [
        {
            id: 'kids-7.3.1',
            name: 'Омлет натуральный',
            defaultOutput: 70,
            components: {
                eggs: 53,
                milkAndFermentedMilkProducts: 20,
                oil: 3
            },
            macronutrients: {
                proteins: 9.3,
                fats: 12.1,
                carbohydrates: 1.7
            },
            caloricity: 155.03
        },
        {
            id: 'kids-7.3.2',
            name: 'Омлет натуральный с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                eggs: 53,
                milkAndFermentedMilkProducts: 20,
                oil: 3
            },
            macronutrients: {
                proteins: 8.68,
                fats: 16.1,
                carbohydrates: 1.63
            },
            caloricity: 189.57
        }
    ]
}

const OMELETTE_W_ONION_V1: IDish = {
    id: 'kids-7.4',
    variants: [
        {
            id: 'kids-7.4.1',
            name: 'Омлет с луком (вариант 1)',
            defaultOutput: 70,
            components: {
                eggs: 49,
                milkAndFermentedMilkProducts: 19,
                oil: 5,
                vegetables: 8
            },
            macronutrients: {
                proteins: 8.74,
                fats: 13.96,
                carbohydrates: 2.53
            },
            caloricity: 174.1
        },
        {
            id: 'kids-7.4.2',
            name: 'Омлет с луком с маслом сливочным (вариант 1)',
            defaultOutput: 75,
            components: {
                butter: 5,
                eggs: 49,
                milkAndFermentedMilkProducts: 19,
                oil: 5,
                vegetables: 8
            },
            macronutrients: {
                proteins: 8.19,
                fats: 17.87,
                carbohydrates: 2.41
            },
            caloricity: 207.39
        }
    ]
}