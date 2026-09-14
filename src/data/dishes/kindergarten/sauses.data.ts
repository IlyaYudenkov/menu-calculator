import type { IDish } from "@/model/dish.model";

const RED_MAIN_SAUSE: IDish = {
    id: 'kids-13.1',
    generalOutput: 1000,
    variants: [
        {
            id: 'kids-13.1.1',
            name: 'Соус красный основной',
            components: {
                flourWheat: 50,
                oil: 29,
                sugar: 15,
                tomatoPuree: 100,
                vegetables: 100,
            },
            macronutrients: {
                proteins: 0.89,
                fats: 2.61,
                carbohydrates: 6.19
            },
            caloricity: 53.51
        }
    ]
}

const WHITE_MAIN_SAUSE: IDish = {
    id: 'kids-13.2',
    generalOutput: 1000,
    variants: [
        {
            id: 'kids-13.2.1',
            name: 'Соус белый основной',
            components: {
                butter: 50,
                flourWheat: 50,
                vegetables: 30,
            },
            macronutrients: {
                proteins: 0.52,
                fats: 3.68,
                carbohydrates: 3.38
            },
            caloricity: 49.92
        }
    ]
}

const MILK_SAUSE: IDish = {
    id: 'kids-13.3',
    generalOutput: 1000,
    variants: [
        {
            id: 'kids-13.3.1',
            name: 'Соус молочный',
            components: {
                butter: 50,
                flourWheat: 50,
                milkAndFermentedMilkProducts: 1000,
                sugar: 10,
            },
            macronutrients: {
                proteins: 2.99,
                fats: 5.88,
                carbohydrates: 8.29
            },
            caloricity: 98.9
        }
    ]
}

const MILK_SWEETY_SAUSE: IDish = {
    id: 'kids-13.4',
    generalOutput: 1000,
    variants: [
        {
            id: 'kids-13.4.1',
            name: 'Соус молочный сладкий',
            components: {
                butter: 40,
                flourWheat: 40,
                milkAndFermentedMilkProducts: 1000,
                sugar: 120,
            },
            macronutrients: {
                proteins: 2.89,
                fats: 5.14,
                carbohydrates: 17.55
            },
            caloricity: 126.68
        }
    ]
}

const SOUR_CREAM_SAUSE: IDish = {
    id: 'kids-13.5',
    generalOutput: 1000,
    variants: [
        {
            id: 'kids-13.5.1',
            name: 'Соус сметанный',
            components: {
                flourWheat: 75,
                sourCream: 250,
            },
            macronutrients: {
                proteins: 1.31,
                fats: 4.47,
                carbohydrates: 5.37
            },
            caloricity: 68.9
        }
    ]
}

const SOUR_CREAM_SAUSE_W_TOMATO_PUREE: IDish = {
    id: 'kids-13.6',
    generalOutput: 1000,
    variants: [
        {
            id: 'kids-13.6.1',
            name: 'Соус сметанный с томатным пюре',
            components: {
                flourWheat: 76.5,
                sourCream: 255,
                tomatoPuree: 60,
            },
            macronutrients: {
                proteins: 1.53,
                fats: 4.56,
                carbohydrates: 6.12
            },
            caloricity: 73.8
        }
    ]
}