import type { IDish } from "@/model/dish.model"

const TEA_W_SUGAR_OR_JAM_OR_HONEY: IDish = {
    id: '13.1',
    generalOutput: 200,
    variants: [
        {
            id: '13.1.1',
            name: 'Чай с сахаром',
            components: {
                tea: 1,
                sugar: 15
            },
            macronutrients: {
                proteins: 0.1,
                fats: 0.03,
                carbohydrates: 7.5
            },
            caloricity: 28
        },
        {
            id: '13.1.2',
            name: 'Чай с вареньем, повидлом',
            components: {
                confectioneryProducts: 15,
                tea: 1,
            },
            macronutrients: {
                proteins: 0.1,
                fats: 0.03,
                carbohydrates: 5.3
            },
            caloricity: 20
        },
        {
            id: '13.1.3',
            name: 'Чай с джемом',
            components: {
                confectioneryProducts: 15,
                tea: 1,
            },
            macronutrients: {
                proteins: 0.15,
                fats: 0.03,
                carbohydrates: 5.1
            },
            caloricity: 20
        },
        {
            id: '13.1.4',
            name: 'Чай с медом',
            components: {
                confectioneryProducts: 15,
                tea: 1,
            },
            macronutrients: {
                proteins: 0.2,
                fats: 0.03,
                carbohydrates: 6
            },
            caloricity: 24
        }
    ]
}

const TEA_W_LEMON: IDish = {
    id: '13.2',
    generalOutput: 207,
    variants: [
        {
            id: '13.2.1',
            name: 'Чай с лимоном',
            components: {
                fruits: 7,
                tea: 0.9,
                sugar: 15
            },
            macronutrients: {
                proteins: 0.1,
                fats: 0.03,
                carbohydrates: 7.4
            },
            caloricity: 29
        }
    ]
}

const TEA_W_MILK: IDish = {
    id: '13.3',
    generalOutput: 200,
    variants: [
        {
            id: '13.3.1',
            name: 'Чай с молоком',
            components: {
                milkAndFermentedMilkProducts: 50,
                tea: 0.9,
                sugar: 15
            },
            macronutrients: {
                proteins: 0.8,
                fats: 0.7,
                carbohydrates: 8.7
            },
            caloricity: 44
        }
    ]
}

const COFFEE_DRINK_W_MILK: IDish = {
    id: '13.4',
    generalOutput: 200,
    variants: [
        {
            id: '13.4.1',
            name: 'Кофейный напиток с молоком',
            components: {
                coffeeDrink: 8,
                milkAndFermentedMilkProducts: 50,
                sugar: 20
            },
            macronutrients: {
                proteins: 0.7,
                fats: 0.5,
                carbohydrates: 10.1
            },
            caloricity: 48
        },
        {
            id: '13.4.2',
            name: 'Кофейный напиток с молоком концентрированным',
            components: {
                coffeeDrink: 8,
                milkAndFermentedMilkProducts: 15,
                sugar: 20
            },
            macronutrients: {
                proteins: 0.7,
                fats: 0.5,
                carbohydrates: 10.1
            },
            caloricity: 48
        }
    ]
}

const COFFEE_DRINK_W_CONDENSED_MILK: IDish = {
    id: '13.5',
    generalOutput: 200,
    variants: [
        {
            id: '13.5.1',
            name: 'Кофейный напиток с молоком сгущенным (молоко сгущенное в кондитерские изделия)',
            components: {
                coffeeDrink: 8,
                confectioneryProducts: 19,
                sugar: 22
            },
            macronutrients: {
                proteins: 0.6,
                fats: 0.7,
                carbohydrates: 4.8
            },
            caloricity: 28
        },
        {
            id: '13.5.2',
            name: 'Кофейный напиток с молоком сгущенным (молоко сгущенное в молочные продукты)',
            components: {
                coffeeDrink: 8,
                milkAndFermentedMilkProducts: 19,
                sugar: 22
            },
            macronutrients: {
                proteins: 0.6,
                fats: 0.7,
                carbohydrates: 4.8
            },
            caloricity: 28
        },
    ]
}

const COCOA_W_MILK: IDish = {
    id: '13.6',
    generalOutput: 200,
    variants: [
        {
            id: '13.6.1',
            name: 'Какао с молоком',
            components: {
                cocoa: 4,
                milkAndFermentedMilkProducts: 100,
                sugar: 20
            },
            macronutrients: {
                proteins: 1.8,
                fats: 1.4,
                carbohydrates: 11.7
            },
            caloricity: 67
        },
        {
            id: '13.6.1',
            name: 'Какао с молоком концентрированным',
            components: {
                cocoa: 4,
                milkAndFermentedMilkProducts: 29,
                sugar: 20
            },
            macronutrients: {
                proteins: 1.8,
                fats: 1.4,
                carbohydrates: 11.7
            },
            caloricity: 67
        },
    ]
}

const COCOA_W_CONDENSED_MILK: IDish = {
    id: '13.7',
    generalOutput: 200,
    variants: [
        {
            id: '13.7.1',
            name: 'Какао с молоком цельным сгущенным с сахаром (молоко сгущенное в кондитерские изделия)',
            components: {
                cocoa: 4,
                confectioneryProducts: 38,
                sugar: 3
            },
            macronutrients: {
                proteins: 1.8,
                fats: 1.7,
                carbohydrates: 11.8
            },
            caloricity: 70
        },
        {
            id: '13.7.2',
            name: 'Какао с молоком цельным сгущенным с сахаром (молоко сгущенное в молочные продукты)',
            components: {
                cocoa: 4,
                milkAndFermentedMilkProducts: 38,
                sugar: 3
            },
            macronutrients: {
                proteins: 1.8,
                fats: 1.7,
                carbohydrates: 11.8
            },
            caloricity: 70
        },
        {
            id: '13.7.3',
            name: 'Какао с молоком сгущенным стерилизованным (молоко сгущенное в кондитерские изделия)',
            components: {
                cocoa: 4,
                confectioneryProducts: 46,
                sugar: 20
            },
            macronutrients: {
                proteins: 1.8,
                fats: 1.7,
                carbohydrates: 11.8
            },
            caloricity: 70
        },
        {
            id: '13.7.4',
            name: 'Какао с молоком сгущенным стерилизованным (молоко сгущенное в молочные продукты)',
            components: {
                cocoa: 4,
                milkAndFermentedMilkProducts: 46,
                sugar: 20
            },
            macronutrients: {
                proteins: 1.8,
                fats: 1.7,
                carbohydrates: 11.8
            },
            caloricity: 70
        },
    ]
}

const BOILED_MILK: IDish = {
    id: '13.8',
    generalOutput: 200,
    variants: [
        {
            id: '13.8.1',
            name: 'Молоко кипяченое',
            components: {
                milkAndFermentedMilkProducts: 211,
            },
            macronutrients: {
                proteins: 2.8,
                fats: 2.3,
                carbohydrates: 4.5
            },
            caloricity: 50
        }
    ]
}

const KEFIR_OR_ACIDOPHILUS: IDish = {
    id: '13.9',
    variants: [
        {
            id: '13.9.1',
            name: 'Кефир, ацидофилин',
            defaultOutput: 200,
            components: {
                milkAndFermentedMilkProducts: 200,
            },
            macronutrients: {
                proteins: 2.8,
                fats: 3.2,
                carbohydrates: 4.1
            },
            caloricity: 56
        },
        {
            id: '13.9.2',
            name: 'Кефир, ацидофилин с сахаром',
            defaultOutput: 207,
            components: {
                milkAndFermentedMilkProducts: 200,
                sugar: 7
            },
            macronutrients: {
                proteins: 2.8,
                fats: 3.2,
                carbohydrates: 4.1
            },
            caloricity: 56
        }
    ]
}

const CRANBERRY_DRINK: IDish = {
    id: '13.10',
    generalOutput: 200,
    variants: [
        {
            id: '13.10.1',
            name: 'Напиток клюквенный',
            components: {
                fruits: 25,
                sugar: 24
            },
            macronutrients: {
                proteins: 0.06,
                fats: 0,
                carbohydrates: 12
            },
            caloricity: 48
        }
    ]
}

const LEMON_DRINK: IDish = {
    id: '13.11',
    generalOutput: 200,
    variants: [
        {
            id: '13.11.1',
            name: 'Напиток лимонный',
            components: {
                fruits: 16,
                sugar: 20
            },
            macronutrients: {
                proteins: 0.07,
                fats: 0.01,
                carbohydrates: 9.9
            },
            caloricity: 40
        }
    ]
}

const ROSEHIP_FRUIT_DRINK: IDish = {
    id: '13.12',
    generalOutput: 200,
    variants: [
        {
            id: '13.12.1',
            name: 'Напиток из плодов шиповника (без сахара)',
            components: {
                fruitsDried: 20,
            },
            macronutrients: {
                proteins: 0.3,
                fats: 0,
                carbohydrates: 2.1
            },
            caloricity: 11
        },
        {
            id: '13.12.2',
            name: 'Напиток из плодов шиповника (с сахаром)',
            components: {
                fruitsDried: 20,
                sugar: 20
            },
            macronutrients: {
                proteins: 0.3,
                fats: 0,
                carbohydrates: 11.7
            },
            caloricity: 48
        },
        {
            id: '13.12.3',
            name: 'Напиток из плодов шиповника (с мёдом)',
            components: {
                confectioneryProducts: 20,
                fruitsDried: 20,
            },
            macronutrients: {
                proteins: 0.4,
                fats: 0,
                carbohydrates: 9.8
            },
            caloricity: 41
        }
    ]
}

export const DRINKS_ARRAY: IDish[] = [
    TEA_W_SUGAR_OR_JAM_OR_HONEY,
    TEA_W_LEMON,
    TEA_W_MILK,
    COFFEE_DRINK_W_MILK,
    COFFEE_DRINK_W_CONDENSED_MILK,
    COCOA_W_MILK,
    COCOA_W_CONDENSED_MILK,
    BOILED_MILK,
    KEFIR_OR_ACIDOPHILUS,
    CRANBERRY_DRINK,
    LEMON_DRINK,
    ROSEHIP_FRUIT_DRINK
]