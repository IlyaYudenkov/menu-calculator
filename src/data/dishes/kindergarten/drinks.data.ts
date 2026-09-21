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

const TEA_W_MILK_V2: IDish = {
    id: 'kids-15.6',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-15.6.1',
            name: 'Чай с молоком (вариант 2)',
            components: {
                milkAndFermentedMilkProducts: 120,
                sugar: 15,
                tea: 0.3,
            },
            macronutrients: {
                proteins: 1.54,
                fats: 1.33,
                carbohydrates: 9.31
            },
            caloricity: 53.67
        }
    ]
}

const COCOA_W_MILK: IDish = {
    id: 'kids-15.7',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-15.7.1',
            name: 'Какао с молоком',
            components: {
                cocoa: 4,
                milkAndFermentedMilkProducts: 100,
                sugar: 20,
            },
            macronutrients: {
                proteins: 1.69,
                fats: 1.41,
                carbohydrates: 11.62
            },
            caloricity: 64.35
        }
    ]
}

const COCOA_W_CONDENSED_MILK: IDish = {
    id: 'kids-15.8',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-15.8.1',
            name: 'Какао с молоком сгущенным (молоко сгущенное в кондитерские изделия)',
            components: {
                confectioneryProducts: 38,
                cocoa: 4,
            },
            macronutrients: {
                proteins: 1.15,
                fats: 1.73,
                carbohydrates: 11.43
            },
            caloricity: 66.68
        },
        {
            id: 'kids-15.8.2',
            name: 'Какао с молоком сгущенным (молоко сгущенное в молочные продукты)',
            components: {
                cocoa: 4,
                milkAndFermentedMilkProducts: 38,
            },
            macronutrients: {
                proteins: 1.15,
                fats: 1.73,
                carbohydrates: 11.43
            },
            caloricity: 66.68
        }
    ]
}

const BOILED_MILK: IDish = {
    id: 'kids-15.9',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-15.9.1',
            name: 'Молоко кипяченое',
            components: {
                milkAndFermentedMilkProducts: 211
            },
            macronutrients: {
                proteins: 2.65,
                fats: 2.32,
                carbohydrates: 4.49
            },
            caloricity: 49.38
        },
    ]
}

const COFFEE_DRINK_W_MILK_V1: IDish = {
    id: 'kids-15.10',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-15.10.1',
            name: 'Кофейный напиток с молоком (вариант 1)',
            components: {
                coffeeDrink: 8,
                milkAndFermentedMilkProducts: 100,
                sugar: 15
            },
            macronutrients: {
                proteins: 1.26,
                fats: 1.1,
                carbohydrates: 8.87
            },
            caloricity: 48.99
        },
    ]
}

const COFFEE_DRINK_W_MILK_V2: IDish = {
    id: 'kids-15.11',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-15.11.1',
            name: 'Кофейный напиток с молоком (вариант 2)',
            components: {
                coffeeDrink: 6,
                milkAndFermentedMilkProducts: 100,
                sugar: 15
            },
            macronutrients: {
                proteins: 1.26,
                fats: 1.1,
                carbohydrates: 8.87
            },
            caloricity: 48.99
        },
    ]
}

const COFFEE_DRINK_W_CONDENSED_MILK: IDish = {
    id: 'kids-15.12',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-15.12.1',
            name: 'Кофейный напиток с молоком сгущенным',
            components: {
                coffeeDrink: 6,
                milkAndFermentedMilkProducts: 100,
                sugar: 15
            },
            macronutrients: {
                proteins: 0.61,
                fats: 0.71,
                carbohydrates: 9.73
            },
            caloricity: 46.12
        },
    ]
}

const COFFEE_DRINK_W_MILK_V3: IDish = {
    id: 'kids-15.13',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-15.13.1',
            name: 'Кофейный напиток с молоком (вариант 3)',
            components: {
                coffeeDrink: 4.5,
                milkAndFermentedMilkProducts: 75,
                sugar: 11.25
            },
            macronutrients: {
                proteins: 0.94,
                fats: 0.83,
                carbohydrates: 6.65
            },
            caloricity: 36.74
        },
    ]
}

const ROSEHIP_DECOCTION: IDish = {
    id: 'kids-15.14',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-15.14.1',
            name: 'Отвар шиповника',
            components: {
                fruitsDried: 20
            },
            macronutrients: {
                proteins: 0.305,
                fats: 0,
                carbohydrates: 1.94
            },
            caloricity: 9.9
        },
    ]
}

const ROSEHIP_DECOCTION_W_SUGAR_V1: IDish = {
    id: 'kids-15.15',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-15.15.1',
            name: 'Отвар шиповника с сахаром (вариант 1)',
            components: {
                fruitsDried: 20,
                sugar: 20
            },
            macronutrients: {
                proteins: 0.305,
                fats: 0,
                carbohydrates: 10.92
            },
            caloricity: 44.01
        },
    ]
}

const ROSEHIP_DECOCTION_W_SUGAR_V2: IDish = {
    id: 'kids-15.16',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-15.16.1',
            name: 'Отвар шиповника с сахаром (вариант 2)',
            components: {
                fruitsDried: 20,
                sugar: 15
            },
            macronutrients: {
                proteins: 0.305,
                fats: 0,
                carbohydrates: 8.67
            },
            caloricity: 35.49
        },
    ]
}

const CRANBERRY_SUPPLY_DRINK: IDish = {
    id: 'kids-15.17',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-15.17.1',
            name: 'Напиток из клюквенного припаса',
            components: {
                fruitsDried: 25,
                sugar: 20
            },
            macronutrients: {
                proteins: 0.055,
                fats: 0,
                carbohydrates: 9.41
            },
            caloricity: 37.04
        },
    ]
}