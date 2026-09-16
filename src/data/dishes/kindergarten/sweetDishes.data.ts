import type { IDish } from "@/model/dish.model";

const FRESH_CHERRIES_COMPOTE: IDish = {
    id: 'kids-14.1',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.1.1',
            name: 'Компот из свежих плодов (вишня)',
            components: {
                fruits: 40,
                sugar: 20
            },
            macronutrients: {
                proteins: 0.11,
                fats: 0.07,
                carbohydrates: 10.38
            },
            caloricity: 41.13
        }
    ]
}

const FRESH_PEARS_COMPOTE: IDish = {
    id: 'kids-14.2',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.2.1',
            name: 'Компот из свежих плодов (груши)',
            components: {
                fruits: 40,
                sugar: 20
            },
            macronutrients: {
                proteins: 0.11,
                fats: 0.07,
                carbohydrates: 8.13
            },
            caloricity: 32.61
        }
    ]
}

const FRESH_PLUMS_COMPOTE: IDish = {
    id: 'kids-14.3',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.3.1',
            name: 'Компот из свежих плодов (сливы)',
            components: {
                fruits: 40,
                sugar: 20
            },
            macronutrients: {
                proteins: 0.14,
                fats: 0,
                carbohydrates: 10.71
            },
            caloricity: 41.85
        }
    ]
}

const FRESH_APPLES_COMPOTE: IDish = {
    id: 'kids-14.4',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.4.1',
            name: 'Компот из свежих плодов (яблоки)',
            components: {
                fruits: 40,
                sugar: 20
            },
            macronutrients: {
                proteins: 0.07,
                fats: 0.07,
                carbohydrates: 10.75
            },
            caloricity: 42.21
        }
    ]
}

const ORANGE_COMPOTE: IDish = {
    id: 'kids-14.5',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.5.1',
            name: 'Компот апельсиновый',
            components: {
                fruits: 22,
                sugar: 20
            },
            macronutrients: {
                proteins: 0.09,
                fats: 0.02,
                carbohydrates: 9.9
            },
            caloricity: 38.07
        }
    ]
}

const LEMON_COMPOTE: IDish = {
    id: 'kids-14.6',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.6.1',
            name: 'Компот лимонный',
            components: {
                fruits: 16.1,
                sugar: 20
            },
            macronutrients: {
                proteins: 0.04,
                fats: 0.005,
                carbohydrates: 9.12
            },
            caloricity: 35.6
        }
    ]
}

const CRANBERRY_COMPOTE: IDish = {
    id: 'kids-14.7',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.7.1',
            name: 'Компот из клюквы',
            components: {
                fruits: 25,
                sugar: 24
            },
            macronutrients: {
                proteins: 0.055,
                fats: 0,
                carbohydrates: 11.21
            },
            caloricity: 43.86
        }
    ]
}

const DRIED_APRICOT_COMPOTE: IDish = {
    id: 'kids-14.8',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.8.1',
            name: 'Компот из кураги',
            components: {
                fruitsDried: 25,
                sugar: 10
            },
            macronutrients: {
                proteins: 0.58,
                fats: 0,
                carbohydrates: 10.68
            },
            caloricity: 43.38
        }
    ]
}

const DRIED_FRUITS_COMPOTE_APPLES_OR_PEARS: IDish = {
    id: 'kids-14.9',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.9.1',
            name: 'Компот из плодов сушеных (яблок)',
            components: {
                fruitsDried: 15,
                sugar: 16
            },
            macronutrients: {
                proteins: 0.15,
                fats: 0,
                carbohydrates: 10.43
            },
            caloricity: 40.72
        },
        {
            id: 'kids-14.9.2',
            name: 'Компот из плодов сушеных (груш)',
            components: {
                fruitsDried: 30,
                sugar: 16
            },
            macronutrients: {
                proteins: 0.31,
                fats: 0,
                carbohydrates: 13.8
            },
            caloricity: 54.43
        }
    ]
}

const DRIED_FRUITS_COMPOTE_DRIED_PLUMS_OR_RAISINS: IDish = {
    id: 'kids-14.10',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.10.1',
            name: 'Компот из плодов сушеных (чернослив)',
            components: {
                fruitsDried: 25,
                sugar: 13
            },
            macronutrients: {
                proteins: 0.26,
                fats: 0,
                carbohydrates: 12.41
            },
            caloricity: 49.4
        },
        {
            id: 'kids-14.10.2',
            name: 'Компот из плодов сушеных (изюм)',
            components: {
                fruitsDried: 20,
                sugar: 13
            },
            macronutrients: {
                proteins: 0.16,
                fats: 0,
                carbohydrates: 11.78
            },
            caloricity: 45.75
        }
    ]
}