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

const MIXTURE_OF_DRIED_FRUITS_COMPOTE: IDish = {
    id: 'kids-14.11',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.11.1',
            name: 'Компот из смеси сухофруктов',
            components: {
                fruitsDried: 20,
                sugar: 16
            },
            macronutrients: {
                proteins: 0.19,
                fats: 0,
                carbohydrates: 12.17
            },
            caloricity: 47.63
        }
    ]
}

const FRESH_APPLES_KISSEL: IDish = {
    id: 'kids-14.12',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.12.1',
            name: 'Кисель из свежих яблок',
            components: {
                fruits: 30,
                potatoStarch: 8,
                sugar: 20
            },
            macronutrients: {
                proteins: 0.06,
                fats: 0.06,
                carbohydrates: 13.17
            },
            caloricity: 51.96
        }
    ]
}

const APPLE_JUICE_KISSEL: IDish = {
    id: 'kids-14.13',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.13.1',
            name: 'Кисель из сока яблочного',
            components: {
                juices: 60,
                potatoStarch: 10,
                sugar: 20
            },
            macronutrients: {
                proteins: 0.14,
                fats: 0,
                carbohydrates: 15.02
            },
            caloricity: 59.09
        }
    ]
}

const BLACKCURRANT_JUICE_KISSEL: IDish = {
    id: 'kids-14.14',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.14.1',
            name: 'Кисель из сока черносмородинового',
            components: {
                juices: 60,
                potatoStarch: 10,
                sugar: 20
            },
            macronutrients: {
                proteins: 0.14,
                fats: 0,
                carbohydrates: 14.7
            },
            caloricity: 59.63
        }
    ]
}

const MILK_KISSEL: IDish = {
    id: 'kids-14.15',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.15.1',
            name: 'Кисель молочный',
            components: {
                milkAndFermentedMilkProducts: 148,
                potatoStarch: 10,
                sugar: 13
            },
            macronutrients: {
                proteins: 1.81,
                fats: 2.04,
                carbohydrates: 12.49
            },
            caloricity: 74.73
        }
    ]
}

const CARROT_KISSEL: IDish = {
    id: 'kids-14.16',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.16.1',
            name: 'Кисель морковный',
            components: {
                potatoStarch: 7,
                sugar: 20,
                vegetables: 50,
            },
            macronutrients: {
                proteins: 0.29,
                fats: 0.02,
                carbohydrates: 13.11
            },
            caloricity: 54.48
        }
    ]
}

const CRANBERRY_SUPPLIES_KISSEL: IDish = {
    id: 'kids-14.17',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-14.17.1',
            name: 'Кисель из клюквенного припаса',
            components: {
                fruitsDried: 25,
                potatoStarch: 6,
                sugar: 10,
            },
            macronutrients: {
                proteins: 0.06,
                fats: 0,
                carbohydrates: 7.07
            },
            caloricity: 28.81
        }
    ]
}

const APPLE_MOUSSE_MADE_W_SEMOLINA: IDish = {
    id: 'kids-14.18',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-14.18.1',
            name: 'Мусс яблочный (на манной крупе)',
            components: {
                cereals: 8,
                fruits: 30,
                sugar: 13,
            },
            macronutrients: {
                proteins: 0.84,
                fats: 0.18,
                carbohydrates: 19.2
            },
            caloricity: 80.11
        }
    ]
}

const FRUIT_N_BERRY_MOUSSE_MADE_W_SEMOLINA: IDish = {
    id: 'kids-14.19',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-14.19.1',
            name: 'Мусс плодово-ягодный (на манной крупе) (пюре из яблок и черной смородины)',
            components: {
                cereals: 10,
                confectioneryProducts: 20,
                sugar: 14,
            },
            macronutrients: {
                proteins: 0.99,
                fats: 0.09,
                carbohydrates: 20.99
            },
            caloricity: 86.81
        },
        {
            id: 'kids-14.19.2',
            name: 'Мусс плодово-ягодный (на манной крупе) (пюре из яблок)',
            components: {
                cereals: 10,
                confectioneryProducts: 20,
                sugar: 14,
            },
            macronutrients: {
                proteins: 1.02,
                fats: 0.09,
                carbohydrates: 22.12
            },
            caloricity: 91.31
        }
    ]
}

const PRUNES_IN_MILK: IDish = {
    id: 'kids-14.20',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-14.20.1',
            name: 'Чернослив (c косточкой) в молоке',
            components: {
                fruitsDried: 40.8,
                milkAndFermentedMilkProducts: 132,
                sugar: 5.3,
            },
            macronutrients: {
                proteins: 4.05,
                fats: 2.74,
                carbohydrates: 33.71
            },
            caloricity: 174.35
        },
        {
            id: 'kids-14.20.2',
            name: 'Чернослив (без косточкой) в молоке',
            components: {
                fruitsDried: 30.6,
                milkAndFermentedMilkProducts: 132,
                sugar: 5.3,
            },
            macronutrients: {
                proteins: 4.05,
                fats: 2.74,
                carbohydrates: 33.71
            },
            caloricity: 174.35
        }
    ]
}

const BAKED_APPLES: IDish = {
    id: 'kids-14.21',
    variants: [
        {
            id: 'kids-14.21.1',
            name: 'Яблоки печеные',
            defaultOutput: 100,
            components: {
                fruits: 113,
                sugar: 10,
            },
            macronutrients: {
                proteins: 0.42,
                fats: 0.4,
                carbohydrates: 17.63
            },
            caloricity: 75
        },
        {
            id: 'kids-14.21.2',
            name: 'Яблоки печеные с рафинадной пудрой',
            defaultOutput: 105,
            components: {
                fruits: 113,
                sugar: 15,
            },
            macronutrients: {
                proteins: 0.44,
                fats: 0.42,
                carbohydrates: 23.23
            },
            caloricity: 96.66
        },
        {
            id: 'kids-14.21.3',
            name: 'Яблоки печеные с вареньем',
            defaultOutput: 120,
            components: {
                confectioneryProducts: 20,
                fruits: 113,
                sugar: 10,
            },
            macronutrients: {
                proteins: 0.56,
                fats: 0.48,
                carbohydrates: 36.47
            },
            caloricity: 148.54
        }
    ]
}

const LEMONS_W_SUGAR: IDish = {
    id: 'kids-14.22',
    generalOutput: 30,
    variants: [
        {
            id: 'kids-14.22.1',
            name: 'Лимоны с сахаром',
            components: {
                fruits: 20,
                sugar: 10,
            },
            macronutrients: {
                proteins: 0.6,
                fats: 0.07,
                carbohydrates: 35.27
            },
            caloricity: 148.3
        }
    ]
}

export const SWEET_DISHES_KINDERGARTEN_ARRAY: IDish[] = [
    FRESH_CHERRIES_COMPOTE,
    FRESH_PEARS_COMPOTE,
    FRESH_PLUMS_COMPOTE,
    FRESH_APPLES_COMPOTE,
    ORANGE_COMPOTE,
    LEMON_COMPOTE,
    CRANBERRY_COMPOTE,
    DRIED_APRICOT_COMPOTE,
    DRIED_FRUITS_COMPOTE_APPLES_OR_PEARS,
    DRIED_FRUITS_COMPOTE_DRIED_PLUMS_OR_RAISINS,
    MIXTURE_OF_DRIED_FRUITS_COMPOTE,
    FRESH_APPLES_KISSEL,
    APPLE_JUICE_KISSEL,
    BLACKCURRANT_JUICE_KISSEL,
    MILK_KISSEL,
    CARROT_KISSEL,
    CRANBERRY_SUPPLIES_KISSEL,
    APPLE_MOUSSE_MADE_W_SEMOLINA,
    FRUIT_N_BERRY_MOUSSE_MADE_W_SEMOLINA,
    PRUNES_IN_MILK,
    BAKED_APPLES,
    LEMONS_W_SUGAR
]