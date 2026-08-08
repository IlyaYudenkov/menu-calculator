import type { IDish } from "@/model/dish.model";

const MACARONI_W_CHEESE: IDish = {
    id: 'kids-6.1',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-6.1.1',
            name: 'Макароны с сыром',
            components: {
                butter: 10,
                cheese: 18,
                pastaProducts: 60.3
            },
            macronutrients: {
                proteins: 4.9,
                fats: 6.02,
                carbohydrates: 18.95
            },
            caloricity: 153.46
        }
    ]
}

const BAKES_MACARONI_W_EGG: IDish = {
    id: 'kids-6.2',
    variants: [
        {
            id: 'kids-6.2.1',
            name: 'Макароны, запеченные с яйцом',
            defaultOutput: 200,
            components: {
                butter: 3,
                eggs: 20,
                milkAndFermentedMilkProducts: 46,
                oil: 1,
                pastaProducts: 52
            },
            macronutrients: {
                proteins: 3.8,
                fats: 3.01,
                carbohydrates: 20.4
            },
            caloricity: 125.46
        },
        {
            id: 'kids-6.2.2',
            name: 'Макароны, запеченные с яйцом, с маслом сливочным',
            defaultOutput: 205,
            components: {
                butter: 8,
                eggs: 20,
                milkAndFermentedMilkProducts: 46,
                oil: 1,
                pastaProducts: 52
            },
            macronutrients: {
                proteins: 3.71,
                fats: 4.7,
                carbohydrates: 19.9
            },
            caloricity: 138.8
        }
    ]
}

const MACARONNIK: IDish = {
    id: 'kids-6.3',
    variants: [
        {
            id: 'kids-6.3.1',
            name: 'Макаронник',
            defaultOutput: 200,
            components: {
                breadWheat: 4,
                butter: 4,
                eggs: 16,
                milkAndFermentedMilkProducts: 80,
                pastaProducts: 60,
                sugar: 8
            },
            macronutrients: {
                proteins: 4.89,
                fats: 3.46,
                carbohydrates: 25.43
            },
            caloricity: 115.7
        },
        {
            id: 'kids-6.3.2',
            name: 'Макаронник с маслом сливочным',
            defaultOutput: 205,
            components: {
                breadWheat: 4,
                butter: 9,
                eggs: 16,
                milkAndFermentedMilkProducts: 80,
                pastaProducts: 60,
                sugar: 8
            },
            macronutrients: {
                proteins: 4.8,
                fats: 5.1,
                carbohydrates: 24.82
            },
            caloricity: 166.9
        }
    ]
}

const LAPSHEVNIK_W_CURD_V1: IDish = {//добавить соус фруктовый в components
    id: 'kids-6.4',
    variants: [
        {
            id: 'kids-6.4.1',
            name: 'Лапшевник с творогом (вариант 1)',
            defaultOutput: 200,
            components: {
                breadWheat: 3,
                curd: 67,
                eggs: 7,
                oil: 3,
                pastaProducts: 48,
                sourCream: 3,
                sugar: 7,
            },
            macronutrients: {
                proteins: 7.78,
                fats: 4.84,
                carbohydrates: 19.81
            },
            caloricity: 157.14
        },
        {
            id: 'kids-6.4.2',
            name: 'Лапшевник с творогом с маслом сливочным (вариант 1)',
            defaultOutput: 205,
            components: {
                breadWheat: 3,
                butter: 5,
                curd: 67,
                eggs: 7,
                oil: 3,
                pastaProducts: 48,
                sourCream: 3,
                sugar: 7,
            },
            macronutrients: {
                proteins: 7.6,
                fats: 6.5,
                carbohydrates: 19.3
            },
            caloricity: 169.7
        },
        {
            id: 'kids-6.4.3',
            name: 'Лапшевник с творогом со сметаной (вариант 1)',
            defaultOutput: 215,
            components: {
                breadWheat: 3,
                curd: 67,
                eggs: 7,
                oil: 3,
                pastaProducts: 48,
                sourCream: 18,
                sugar: 7,
            },
            macronutrients: {
                proteins: 7.4,
                fats: 5.73,
                carbohydrates: 18.6
            },
            caloricity: 159.1
        },
        {
            id: 'kids-6.4.4',
            name: 'Лапшевник с творогом с соусом фруктовым (яблочным) (вариант 1)', //добавить соус фруктовый в components
            defaultOutput: 250,
            components: {
                breadWheat: 3,
                curd: 67,
                eggs: 7,
                oil: 3,
                pastaProducts: 48,
                sourCream: 3,
                sugar: 7,
            },
            macronutrients: {
                proteins: 6.25,
                fats: 3.87,
                carbohydrates: 18.5
            },
            caloricity: 136.16
        }
    ]
}

const LAPSHEVNIK_W_CURD_V2: IDish = {//добавить соус фруктовый в components
    id: 'kids-6.5',
    variants: [
        {
            id: 'kids-6.5.1',
            name: 'Лапшевник с творогом (вариант 2)',
            defaultOutput: 200,
            components: {
                breadWheat: 3,
                butter: 3,
                curd: 67,
                eggs: 7,
                pastaProducts: 48,
                sourCream: 3,
                sugar: 7,
            },
            macronutrients: {
                proteins: 7.79,
                fats: 4.62,
                carbohydrates: 19.82
            },
            caloricity: 155.1
        },
        {
            id: 'kids-6.5.2',
            name: 'Лапшевник с творогом с маслом сливочным (вариант 2)',
            defaultOutput: 205,
            components: {
                breadWheat: 3,
                butter: 8,
                curd: 67,
                eggs: 7,
                pastaProducts: 48,
                sourCream: 3,
                sugar: 7,
            },
            macronutrients: {
                proteins: 7.6,
                fats: 6.27,
                carbohydrates: 19.35
            },
            caloricity: 167.7
        },
        {
            id: 'kids-6.5.3',
            name: 'Лапшевник с творогом со сметаной (вариант 2)',
            defaultOutput: 215,
            components: {
                breadWheat: 3,
                butter: 3,
                curd: 67,
                eggs: 7,
                pastaProducts: 48,
                sourCream: 18,
                sugar: 7,
            },
            macronutrients: {
                proteins: 7.42,
                fats: 5.5,
                carbohydrates: 18.63
            },
            caloricity: 157.2
        },
        {
            id: 'kids-6.5.4',
            name: 'Лапшевник с творогом с соусом фруктовым (яблочным) (вариант 2)', //добавить соус фруктовый в components
            defaultOutput: 250,
            components: {
                breadWheat: 3,
                butter: 3,
                curd: 67,
                eggs: 7,
                pastaProducts: 48,
                sourCream: 3,
                sugar: 7,
            },
            macronutrients: {
                proteins: 6.3,
                fats: 3.7,
                carbohydrates: 18.5
            },
            caloricity: 134.53
        },
    ]
}

const BOILED_MACARONI_W_VEGETABLES: IDish = {
    id: 'kids-6.6',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-6.6.1',
            name: 'Макароны отварные с овощами',
            components: {
                butter: 10,
                pastaProducts: 56,
                tomatoPuree: 5,
                vegetables: 35,
            },
            macronutrients: {
                proteins: 2.98,
                fats: 3.92,
                carbohydrates: 18.97
            },
            caloricity: 126.88
        }
    ]
}

export const PASTA_PRODUCTS_DISHES_ARRAY: IDish[] = [
    MACARONI_W_CHEESE,
    BAKES_MACARONI_W_EGG,
    MACARONNIK,
    LAPSHEVNIK_W_CURD_V1,
    LAPSHEVNIK_W_CURD_V2,
    BOILED_MACARONI_W_VEGETABLES
]