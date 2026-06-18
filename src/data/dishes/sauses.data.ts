import type { IDish } from "@/model/dish.model"

const RED_MAIN_SAUSE: IDish = {
    id: '11.1',
    generalOutput: 50,
    variants: [
        {
            id: '11.1.1',
            name: 'Соус красный основной',
            components: {
                butter: 1,
                flourWheat: 2.5,
                sugar: 0.75,
                tomatoPuree: 5,
                vegetables: 5,
            },
            macronutrients: {
                proteins: 0.9,
                fats: 1.5,
                carbohydrates: 6.3
            },
            caloricity: 42
        }
    ]
}

const WHITE_MAIN_SAUSE: IDish = {
    id: '11.2',
    generalOutput: 50,
    variants: [
        {
            id: '11.2.1',
            name: 'Соус белый основной',
            components: {
                butter: 2.5,
                flourWheat: 2.5,
                vegetables: 1.5,
            },
            macronutrients: {
                proteins: 0.6,
                fats: 3.2,
                carbohydrates: 3.4
            },
            caloricity: 45
        }
    ]
}

const STEAM_SAUSE: IDish = {
    id: '11.3',
    generalOutput: 50,
    variants: [
        {
            id: '11.3.1',
            name: 'Соус паровой',
            components: {
                butter: 4,
                flourWheat: 2.5,
                vegetables: 1.5,
            },
            macronutrients: {
                proteins: 0.6,
                fats: 5.9,
                carbohydrates: 3.4
            },
            caloricity: 69
        }
    ]
}

const TOMATO_SAUSE: IDish = {
    id: '11.4',
    generalOutput: 50,
    variants: [
        {
            id: '11.4.1',
            name: 'Соус томатный',
            components: {
                butter: 3,
                flourWheat: 2.25,
                sugar: 0.5,
                tomatoPuree: 12.5,
                vegetables: 4,
            },
            macronutrients: {
                proteins: 1.4,
                fats: 4.4,
                carbohydrates: 7
            },
            caloricity: 73
        }
    ]
}

const MILK_SAUSE_TO_SERVE_THE_DISH: IDish = {
    id: '11.5',
    generalOutput: 50,
    variants: [
        {
            id: '11.5.1',
            name: 'Соус молочный (для подачи к блюду)',
            components: {
                butter: 2.75,
                flourWheat: 2.75,
                milkAndFermentedMilkProducts: 25,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 1.9,
                fats: 5.2,
                carbohydrates: 6.6
            },
            caloricity: 81
        }
    ]
}

const MILK_SAUSE_SWEET: IDish = {
    id: '11.6',
    generalOutput: 50,
    variants: [
        {
            id: '11.6.1',
            name: 'Соус молочный (сладкий)',
            components: {
                butter: 2.25,
                flourWheat: 2.25,
                milkAndFermentedMilkProducts: 25,
                sugar: 4
            },
            macronutrients: {
                proteins: 1.8,
                fats: 4.4,
                carbohydrates: 12.3
            },
            caloricity: 96
        }
    ]
}

const MILK_SAUSE_FOR_BAKING: IDish = {
    id: '11.7',
    generalOutput: 50,
    variants: [
        {
            id: '11.7.1',
            name: 'Соус молочный (для запекания овощей, мяса, рыбы)',
            components: {
                butter: 5.5,
                flourWheat: 5.5,
                milkAndFermentedMilkProducts: 25,
            },
            macronutrients: {
                proteins: 2.5,
                fats: 9.2,
                carbohydrates: 9.1
            },
            caloricity: 129
        }
    ]
}

const MILK_SAUSE_THICK: IDish = {
    id: '11.8',
    generalOutput: 50,
    variants: [
        {
            id: '11.8.1',
            name: 'Соус молочный густой (для фарширования)',
            components: {
                butter: 6.5,
                flourWheat: 6.5,
                milkAndFermentedMilkProducts: 45,
            },
            macronutrients: {
                proteins: 3.7,
                fats: 11.6,
                carbohydrates: 12.1
            },
            caloricity: 168
        }
    ]
}

const SOUR_CREAM_SAUSE: IDish = {
    id: '11.9',
    generalOutput: 50,
    variants: [
        {
            id: '11.9.1',
            name: 'Соус сметанный',
            components: {
                flourWheat: 3.75,
                sourCream: 12.5,
            },
            macronutrients: {
                proteins: 1.4,
                fats: 4.5,
                carbohydrates: 5.4
            },
            caloricity: 68
        }
    ]
}

const SOUR_CREAM_SAUSE_W_TOMATO: IDish = {
    id: '11.10',
    generalOutput: 50,
    variants: [
        {
            id: '11.10.1',
            name: 'Соус сметанный с томатом',
            components: {
                flourWheat: 3.75,
                sourCream: 12.5,
                tomatoPuree: 5,
            },
            macronutrients: {
                proteins: 1.7,
                fats: 4.5,
                carbohydrates: 6.5
            },
            caloricity: 73
        }
    ]
}

const SOUR_CREAM_SAUSE_W_ONION: IDish = {
    id: '11.11',
    generalOutput: 50,
    variants: [
        {
            id: '11.11.1',
            name: 'Соус сметанный с луком',
            components: {
                butter: 1,
                flourWheat: 3.375,
                sourCream: 11.25,
                tomatoPuree: 2.45,
                vegetables: 10,
            },
            macronutrients: {
                proteins: 1.6,
                fats: 5.5,
                carbohydrates: 6.8
            },
            caloricity: 83
        }
    ]
}

const VEGETABLE_MARINADE_W_TOMATO: IDish = {
    id: '11.12',
    generalOutput: 50,
    variants: [
        {
            id: '11.12.1',
            name: 'Маринад овощной с томатом',
            components: {
                oil: 5,
                sugar: 1.25,
                tomatoPuree: 7.5,
                vegetables: 37.5,
            },
            macronutrients: {
                proteins: 1.4,
                fats: 8.9,
                carbohydrates: 9.1
            },
            caloricity: 122
        }
    ]
}

const VEGETABLE_MARINADE_WO_TOMATO: IDish = {
    id: '11.13',
    generalOutput: 50,
    variants: [
        {
            id: '11.13.1',
            name: 'Маринад овощной без томата',
            components: {
                flourWheat: 1.5,
                oil: 5,
                sugar: 1.25,
                vegetables: 47.5,
            },
            macronutrients: {
                proteins: 1.5,
                fats: 8.9,
                carbohydrates: 10.6
            },
            caloricity: 129
        }
    ]
}

const CHOCOLATE_SAUSE: IDish = {//молоко цельное сгущенное с сахаром отнес в молочные продукты
    id: '11.14',
    generalOutput: 50,
    variants: [
        {
            id: '11.14.1',
            name: 'Соус шоколадный',
            components: {
                milkAndFermentedMilkProducts: 22.75,
                sugar: 10,
            },
            macronutrients: {
                proteins: 5.4,
                fats: 4.9,
                carbohydrates: 43.9
            },
            caloricity: 241
        }
    ]
}

const APRICOT_SAUSE_FROM_DRIED_APRICOTS: IDish = {
    id: '11.15',
    generalOutput: 50,
    variants: [
        {
            id: '11.15.1',
            name: 'Соус абрикосовый (из кураги)',
            components: {
                fruitsDried: 5.5,
                sugar: 30,
            },
            macronutrients: {
                proteins: 0.5,
                fats: 0,
                carbohydrates: 63.6
            },
            caloricity: 256
        }
    ]
}

const CRANBERRY_SAUSE: IDish = {
    id: '11.16',
    generalOutput: 50,
    variants: [
        {
            id: '11.16.1',
            name: 'Соус клюквенный',
            components: {
                fruits: 5,
                sugar: 5,
                potatoStarch: 1.5,
            },
            macronutrients: {
                proteins: 0.1,
                fats: 0,
                carbohydrates: 12.4
            },
            caloricity: 50
        }
    ]
}

const APPLE_SAUSE: IDish = {
    id: '11.17',
    generalOutput: 50,
    variants: [
        {
            id: '11.17.1',
            name: 'Соус яблочный',
            components: {
                fruits: 11.25,
                sugar: 6.25,
                potatoStarch: 1.5,
            },
            macronutrients: {
                proteins: 0.1,
                fats: 0.1,
                carbohydrates: 16.5
            },
            caloricity: 67
        }
    ]
}

export const SAUSES_ARRAY: IDish[] = [
    RED_MAIN_SAUSE,
    WHITE_MAIN_SAUSE,
    STEAM_SAUSE,
    TOMATO_SAUSE,
    MILK_SAUSE_TO_SERVE_THE_DISH,
    MILK_SAUSE_SWEET,
    MILK_SAUSE_FOR_BAKING,
    MILK_SAUSE_THICK,
    SOUR_CREAM_SAUSE,
    SOUR_CREAM_SAUSE_W_TOMATO,
    SOUR_CREAM_SAUSE_W_ONION,
    VEGETABLE_MARINADE_W_TOMATO,
    VEGETABLE_MARINADE_WO_TOMATO,
    CHOCOLATE_SAUSE,
    APRICOT_SAUSE_FROM_DRIED_APRICOTS,
    CRANBERRY_SAUSE,
    APPLE_SAUSE
]