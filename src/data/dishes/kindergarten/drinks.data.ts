import type { IDish } from "@/model/dish.model";

const TEA_W_SUGAR_V1: IDish = {
    id: 'kids-15.1',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-15.1.1',
            name: 'Чай с сахаром (вариант 1)',
            components: {
                sugar: 13,
                tea: 0.3,
            },
            macronutrients: {
                proteins: 0.03,
                fats: 0.005,
                carbohydrates: 5.86
            },
            caloricity: 22.17
        },
        {
            id: 'kids-15.1.2',
            name: 'Чай с джемом (вариант 1)',
            components: {
                confectioneryProducts: 13,
                tea: 0.3,
            },
            macronutrients: {
                proteins: 0.06,
                fats: 0.005,
                carbohydrates: 4.01
            },
            caloricity: 15.51
        },
        {
            id: 'kids-15.1.3',
            name: 'Чай с вареньем (вариант 1)',
            components: {
                confectioneryProducts: 13,
                tea: 0.3,
            },
            macronutrients: {
                proteins: 0.05,
                fats: 0.005,
                carbohydrates: 4.17
            },
            caloricity: 15.86
        },
        {
            id: 'kids-15.1.4',
            name: 'Чай с медом (вариант 1)',
            components: {
                confectioneryProducts: 13,
                tea: 0.3,
            },
            macronutrients: {
                proteins: 0.08,
                fats: 0.005,
                carbohydrates: 4.72
            },
            caloricity: 18.37
        }
    ]
}

const TEA_W_SUGAR_V2: IDish = {
    id: 'kids-15.2',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-15.2.1',
            name: 'Чай с сахаром (вариант 2)',
            components: {
                sugar: 10,
                tea: 0.3,
            },
            macronutrients: {
                proteins: 0.015,
                fats: 0.005,
                carbohydrates: 4.51
            },
            caloricity: 17.06
        },
        {
            id: 'kids-15.2.2',
            name: 'Чай с джемом (вариант 2)',
            components: {
                confectioneryProducts: 10,
                tea: 0.3,
            },
            macronutrients: {
                proteins: 0.045,
                fats: 0.005,
                carbohydrates: 3.08
            },
            caloricity: 11.93
        },
        {
            id: 'kids-15.2.3',
            name: 'Чай с вареньем (вариант 2)',
            components: {
                confectioneryProducts: 10,
                tea: 0.3,
            },
            macronutrients: {
                proteins: 0.05,
                fats: 0.005,
                carbohydrates: 3.21
            },
            caloricity: 12.2
        },
        {
            id: 'kids-15.2.4',
            name: 'Чай с медом (вариант 2)',
            components: {
                confectioneryProducts: 10,
                tea: 0.3,
            },
            macronutrients: {
                proteins: 0.05,
                fats: 0.005,
                carbohydrates: 3.63
            },
            caloricity: 14.13
        }
    ]
}

const TEA_W_LEMON_V1: IDish = {
    id: 'kids-15.3',
    generalOutput: 207,
    variants: [
        {
            id: 'kids-15.3.1',
            name: 'Чай с лимоном (вариант 1)',
            components: {
                fruits: 7,
                sugar: 14,
                tea: 0.3,
            },
            macronutrients: {
                proteins: 0.055,
                fats: 0.01,
                carbohydrates: 6.4
            },
            caloricity: 24.92
        }
    ]
}

const TEA_W_LEMON_V2: IDish = {
    id: 'kids-15.4',
    generalOutput: 207,
    variants: [
        {
            id: 'kids-15.4.1',
            name: 'Чай с лимоном (вариант 2)',
            components: {
                fruits: 7,
                sugar: 10,
                tea: 0.3,
            },
            macronutrients: {
                proteins: 0.04,
                fats: 0,
                carbohydrates: 7.06
            },
            caloricity: 27.78
        }
    ]
}

const TEA_W_MILK_V1: IDish = {
    id: 'kids-15.5',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-15.5.1',
            name: 'Чай с молоком (вариант 1)',
            components: {
                milkAndFermentedMilkProducts: 120,
                sugar: 13,
                tea: 0.3,
            },
            macronutrients: {
                proteins: 1.54,
                fats: 1.33,
                carbohydrates: 8.42
            },
            caloricity: 50.25
        }
    ]
}