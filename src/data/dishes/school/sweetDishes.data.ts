import type { IDish } from "@/model/dish.model"

const FRESH_FRUITS_OR_BERRIES: IDish = {
    id: '12.1',
    generalOutput: 100,
    variants: [
        {
            id: '12.1.1',
            name: 'Плоды или ягоды свежие (яблоки)',
            components: {
                fruits: 100,
            },
            macronutrients: {
                proteins: 0.4,
                fats: 0.4,
                carbohydrates: 9.8
            },
            caloricity: 45
        },
        {
            id: '12.1.2',
            name: 'Плоды или ягоды свежие (груши)',
            components: {
                fruits: 100,
            },
            macronutrients: {
                proteins: 0.4,
                fats: 0.3,
                carbohydrates: 9.5
            },
            caloricity: 42
        },
        {
            id: '12.1.3',
            name: 'Плоды или ягоды свежие (бананы)',
            components: {
                fruits: 100,
            },
            macronutrients: {
                proteins: 1.05,
                fats: 0.07,
                carbohydrates: 13.4
            },
            caloricity: 62
        },
        {
            id: '12.1.4',
            name: 'Плоды или ягоды свежие (абрикосы, персики)',
            components: {
                fruits: 100,
            },
            macronutrients: {
                proteins: 0.4,
                fats: 0.1,
                carbohydrates: 6.3
            },
            caloricity: 28
        },
        {
            id: '12.1.5',
            name: 'Плоды или ягоды свежие (виноград)',
            components: {
                fruits: 100,
            },
            macronutrients: {
                proteins: 0.4,
                fats: 0.1,
                carbohydrates: 10.5
            },
            caloricity: 45
        }
    ]
}

const FRESH_BERRIES_W_SUGAR: IDish = {
    id: '12.2',
    variants: [
        {
            id: '12.2.1',
            name: 'Ягоды свежие с сахаром (вишня, черешня)',
            defaultOutput: 105,
            components: {
                fruits: 100,
                sugar: 5,
            },
            macronutrients: {
                proteins: 0.8,
                fats: 0.5,
                carbohydrates: 14.6
            },
            caloricity: 68
        },
        {
            id: '12.2.2',
            name: 'Ягоды свежие с сахаром (черника)',
            defaultOutput: 105,
            components: {
                fruits: 100,
                sugar: 5,
            },
            macronutrients: {
                proteins: 1,
                fats: 0.6,
                carbohydrates: 12.4
            },
            caloricity: 60
        },
        {
            id: '12.2.3',
            name: 'Ягоды свежие с сахаром (клюква)',
            defaultOutput: 65,
            components: {
                fruits: 50,
                sugar: 15,
            },
            macronutrients: {
                proteins: 0.4,
                fats: 0,
                carbohydrates: 26
            },
            caloricity: 105
        },
    ]
}

const FRESH_WATERMELON: IDish = {
    id: '12.3',
    generalOutput: 200,
    variants: [
        {
            id: '12.3.1',
            name: 'Арбуз свежий',
            components: {
                fruits: 200,
            },
            macronutrients: {
                proteins: 0.3,
                fats: 0.1,
                carbohydrates: 4.5
            },
            caloricity: 19
        }
    ]
}

const ORANGES_OR_MANDARINS_W_SUGAR: IDish = {
    id: '12.4',
    generalOutput: 55,
    variants: [
        {
            id: '12.4.1',
            name: 'Апельсины (мандарины) с сахаром',
            components: {
                fruits: 50,
                sugar: 5,
            },
            macronutrients: {
                proteins: 0.7,
                fats: 0.2,
                carbohydrates: 16.4
            },
            caloricity: 70
        }
    ]
}

const LEMONS_W_SUGAR: IDish = {
    id: '12.5',
    generalOutput: 35,
    variants: [
        {
            id: '12.5.1',
            name: 'Лимоны с сахаром',
            components: {
                fruits: 25,
                sugar: 10,
            },
            macronutrients: {
                proteins: 0.3,
                fats: 0.03,
                carbohydrates: 29.7
            },
            caloricity: 120
        }
    ]
}

const COMPOTE_OF_FRESH_FRUITS: IDish = {
    id: '12.6',
    generalOutput: 200,
    variants: [
        {
            id: '12.6.1',
            name: 'Компот из свежих фруктов (яблок)',
            components: {
                fruits: 40,
                sugar: 20,
            },
            macronutrients: {
                proteins: 0.1,
                fats: 0.1,
                carbohydrates: 10.9
            },
            caloricity: 44
        },
        {
            id: '12.6.2',
            name: 'Компот из свежих фруктов (груш)',
            components: {
                fruits: 40,
                sugar: 20,
            },
            macronutrients: {
                proteins: 0.1,
                fats: 0.06,
                carbohydrates: 10.8
            },
            caloricity: 44
        },
        {
            id: '12.6.3',
            name: 'Компот из свежих фруктов (вишни)',
            components: {
                fruits: 40,
                sugar: 20,
            },
            macronutrients: {
                proteins: 0.2,
                fats: 0.1,
                carbohydrates: 11
            },
            caloricity: 45
        },
        {
            id: '12.6.4',
            name: 'Компот из свежих фруктов (слив)',
            components: {
                fruits: 40,
                sugar: 20,
            },
            macronutrients: {
                proteins: 0.2,
                fats: 0,
                carbohydrates: 10.8
            },
            caloricity: 44
        },
        {
            id: '12.6.5',
            name: 'Компот из свежих фруктов (абрикос)',
            components: {
                fruits: 40,
                sugar: 20,
            },
            macronutrients: {
                proteins: 0.2,
                fats: 0.02,
                carbohydrates: 10.7
            },
            caloricity: 44
        }
    ]
}

const COMPOTE_OF_GRAPE: IDish = {
    id: '12.7',
    generalOutput: 200,
    variants: [
        {
            id: '12.7.1',
            name: 'Компот из винограда',
            components: {
                fruits: 40,
                sugar: 19,
            },
            macronutrients: {
                proteins: 0.4,
                fats: 0,
                carbohydrates: 21.5
            },
            caloricity: 83
        }
    ]
}

const COMPOTE_OF_ORANGES_OR_MANDARINS: IDish = {
    id: '12.8',
    generalOutput: 200,
    variants: [
        {
            id: '12.8.1',
            name: 'Компот из апельсинов (мандаринов)',
            components: {
                fruits: 50,
                sugar: 20,
            },
            macronutrients: {
                proteins: 0.4,
                fats: 0.1,
                carbohydrates: 21.8
            },
            caloricity: 87
        }
    ]
}

const COMPOTE_OF_DRIED_FRUITS_OR_BERRIS: IDish = {
    id: '12.9',
    generalOutput: 200,
    variants: [
        {
            id: '12.9.1',
            name: 'Компот из плодов или ягод сушеных (яблок)',
            components: {
                fruitsDried: 20,
                sugar: 16,
            },
            macronutrients: {
                proteins: 0.2,
                fats: 0,
                carbohydrates: 11.6
            },
            caloricity: 46
        },
        {
            id: '12.9.2',
            name: 'Компот из плодов или ягод сушеных (груш)',
            components: {
                fruitsDried: 30,
                sugar: 16,
            },
            macronutrients: {
                proteins: 0.3,
                fats: 0,
                carbohydrates: 13.5
            },
            caloricity: 54
        },
        {
            id: '12.9.3',
            name: 'Компот из плодов или ягод сушеных (кураги)',
            components: {
                fruitsDried: 20,
                sugar: 16,
            },
            macronutrients: {
                proteins: 0.5,
                fats: 0,
                carbohydrates: 12.3
            },
            caloricity: 49
        },
        {
            id: '12.9.4',
            name: 'Компот из плодов или ягод сушеных (чернослива)',
            components: {
                fruitsDried: 25,
                sugar: 13,
            },
            macronutrients: {
                proteins: 0.3,
                fats: 0,
                carbohydrates: 12.5
            },
            caloricity: 50
        },
        {
            id: '12.9.5',
            name: 'Компот из плодов или ягод сушеных (урюка)',
            components: {
                fruitsDried: 25,
                sugar: 16,
            },
            macronutrients: {
                proteins: 0.5,
                fats: 0,
                carbohydrates: 12.5
            },
            caloricity: 49
        },
        {
            id: '12.9.6',
            name: 'Компот из плодов или ягод сушеных (изюма)',
            components: {
                fruitsDried: 20,
                sugar: 13,
            },
            macronutrients: {
                proteins: 0.2,
                fats: 0,
                carbohydrates: 13.3
            },
            caloricity: 52
        },

    ]
}

const COMPOTE_OF_MIXTURE_OF_DRIED_FRUITS: IDish = {
    id: '12.10',
    generalOutput: 200,
    variants: [
        {
            id: '12.10.1',
            name: 'Компот из смеси сухофруктов',
            components: {
                fruitsDried: 20,
                sugar: 16,
            },
            macronutrients: {
                proteins: 0.3,
                fats: 0,
                carbohydrates: 12.6
            },
            caloricity: 50
        }
    ]
}

const CRANBERRY_DRINK_VITAMINNIY: IDish = {
    id: '12.11',
    generalOutput: 200,
    variants: [
        {
            id: '12.11.1',
            name: 'Напиток из клюквы "Витаминный"',
            components: {
                fruitsDried: 25,
                sugar: 20,
            },
            macronutrients: {
                proteins: 0,
                fats: 0,
                carbohydrates: 14.7
            },
            caloricity: 105
        }
    ]
}

const KISSEL_OF_FRESH_FRUITS_OR_BERRIES: IDish = {
    id: '12.12',
    generalOutput: 200,
    variants: [
        {
            id: '12.12.1',
            name: 'Кисель из плодов или ягод свежих (клюквы)',
            components: {
                fruits: 20,
                sugar: 20,
                potatoStarch: 9
            },
            macronutrients: {
                proteins: 0.05,
                fats: 0,
                carbohydrates: 12.7
            },
            caloricity: 50
        },
        {
            id: '12.12.2',
            name: 'Кисель из плодов или ягод свежих (смородины красной)',
            components: {
                fruits: 20,
                sugar: 20,
                potatoStarch: 9
            },
            macronutrients: {
                proteins: 0.06,
                fats: 0.02,
                carbohydrates: 13
            },
            caloricity: 52
        },
        {
            id: '12.12.3',
            name: 'Кисель из плодов или ягод свежих (смородины черной)',
            components: {
                fruits: 20,
                sugar: 20,
                potatoStarch: 9
            },
            macronutrients: {
                proteins: 0.1,
                fats: 0.02,
                carbohydrates: 13
            },
            caloricity: 51
        },
        {
            id: '12.12.4',
            name: 'Кисель из плодов или ягод свежих (вишни)',
            components: {
                fruits: 24,
                sugar: 20,
                potatoStarch: 9
            },
            macronutrients: {
                proteins: 0.1,
                fats: 0.06,
                carbohydrates: 13.5
            },
            caloricity: 54
        },
        {
            id: '12.12.5',
            name: 'Кисель из плодов или ягод свежих (сливы)',
            components: {
                fruits: 24,
                sugar: 20,
                potatoStarch: 9
            },
            macronutrients: {
                proteins: 0.1,
                fats: 0,
                carbohydrates: 13.4
            },
            caloricity: 53
        },
        {
            id: '12.12.6',
            name: 'Кисель из плодов или ягод свежих (алычи)',
            components: {
                fruits: 24,
                sugar: 20,
                potatoStarch: 9
            },
            macronutrients: {
                proteins: 0.03,
                fats: 0,
                carbohydrates: 13
            },
            caloricity: 52
        },

    ]
}

const KISSEL_OF_APPLES: IDish = {
    id: '12.13',
    generalOutput: 200,
    variants: [
        {
            id: '12.13.1',
            name: 'Кисель из яблок',
            components: {
                fruits: 30,
                sugar: 20,
                potatoStarch: 8
            },
            macronutrients: {
                proteins: 0.06,
                fats: 0.06,
                carbohydrates: 13.3
            },
            caloricity: 52
        },
    ]
}

const KISSEL_OF_CRANBERRY: IDish = {
    id: '12.14',
    generalOutput: 200,
    variants: [
        {
            id: '12.14.1',
            name: 'Кисель из клюквенного припаса',
            components: {
                fruitsDried: 25,
                sugar: 10,
                potatoStarch: 6
            },
            macronutrients: {
                proteins: 0,
                fats: 0,
                carbohydrates: 33.5
            },
            caloricity: 132
        },
    ]
}

const KISSEL_OF_FRUIT_OR_BERRY_JUICE_W_SUGAR: IDish = {
    id: '12.15',
    generalOutput: 200,
    variants: [
        {
            id: '12.15.1',
            name: 'Кисель из сока плодового или ягодного с сахаром',
            components: {
                juices: 60,
                sugar: 16,
                potatoStarch: 10
            },
            macronutrients: {
                proteins: 0.15,
                fats: 0,
                carbohydrates: 16.2
            },
            caloricity: 65
        },
    ]
}

const KISSEL_OF_CONCENTRATE_OF_FRUIT_OR_BERRY_EXTRACTS: IDish = {
    id: '12.16',
    generalOutput: 200,
    variants: [
        {
            id: '12.16.1',
            name: 'Кисель из концентрата на плодовых или ягодных экстрактах',
            components: {
                juices: 24,
                sugar: 11
            },
            macronutrients: {
                proteins: 0.1,
                fats: 0,
                carbohydrates: 14.3
            },
            caloricity: 55
        },
    ]
}

const MILK_KISSEL: IDish = {
    id: '12.17',
    generalOutput: 200,
    variants: [
        {
            id: '12.17.1',
            name: 'Кисель молочный',
            components: {
                milkAndFermentedMilkProducts: 140,
                sugar: 13
            },
            macronutrients: {
                proteins: 2,
                fats: 1.6,
                carbohydrates: 12.7
            },
            caloricity: 73
        },
    ]
}

const MILK_JELLY_SNEZHANA: IDish = {//орехи поместил во фрукты
    id: '12.18',
    generalOutput: 100,
    variants: [
        {
            id: '12.18.1',
            name: 'Желе молочное "Снежана"',
            components: {
                fruits: 7,
                milkAndFermentedMilkProducts: 75,
                sugar: 1
            },
            macronutrients: {
                proteins: 4.5,
                fats: 4.9,
                carbohydrates: 19.9
            },
            caloricity: 148
        },
    ]
}

const JELLY_OF_FRESH_FRUITS_OR_BERRIES: IDish = {
    id: '12.19',
    generalOutput: 100,
    variants: [
        {
            id: '12.19.1',
            name: 'Желе из плодов или ягод свежих (клюква)',
            components: {
                fruits: 12,
                sugar: 12
            },
            macronutrients: {
                proteins: 2.4,
                fats: 0.1,
                carbohydrates: 11.2
            },
            caloricity: 55
        },
        {
            id: '12.19.2',
            name: 'Желе из плодов или ягод свежих (смородина красная)',
            components: {
                fruits: 12,
                sugar: 12
            },
            macronutrients: {
                proteins: 2.5,
                fats: 0.3,
                carbohydrates: 11.5
            },
            caloricity: 59
        }
    ]
}

const MULTILAYERED_JELLY: IDish = {
    id: '12.20',
    generalOutput: 100,
    variants: [
        {
            id: '12.20.1',
            name: 'Желе многослойное (сироп в соки)',
            components: {
                juices: 14.85,
                milkAndFermentedMilkProducts: 25.5,
                sugar: 8.04
            },
            macronutrients: {
                proteins: 3.3,
                fats: 0.7,
                carbohydrates: 15.1
            },
            caloricity: 77
        },
        {
            id: '12.20.2',
            name: 'Желе многослойное (сироп в кондитерские изделия)',
            components: {
                confectioneryProducts: 6.6,
                juices: 8.25,
                milkAndFermentedMilkProducts: 25.5,
                sugar: 8.04
            },
            macronutrients: {
                proteins: 3.3,
                fats: 0.7,
                carbohydrates: 15.1
            },
            caloricity: 77
        },
    ]
}

const SOUR_CREAM_JELLY_W_COCOA: IDish = {
    id: '12.21',
    generalOutput: 100,
    variants: [
        {
            id: '12.21.1',
            name: 'Желе из сметаны с какао',
            components: {
                cocoa: 1.5,
                sourCream: 67,
                sugar: 13
            },
            macronutrients: {
                proteins: 4.2,
                fats: 15,
                carbohydrates: 13.7
            },
            caloricity: 206
        }
    ]
}

const JELLY_MOZAIKA: IDish = {
    id: '12.22',
    generalOutput: 100,
    variants: [
        {
            id: '12.22.1',
            name: 'Желе "Мозайка" (сироп в соки)',
            components: {
                juices: 15.5,
                milkAndFermentedMilkProducts: 22.5,
                sugar: 7.2
            },
            macronutrients: {
                proteins: 3.1,
                fats: 0.6,
                carbohydrates: 9
            },
            caloricity: 52
        },
        {
            id: '12.22.2',
            name: 'Желе "Мозайка" (сироп в кондитерские изделия)',
            components: {
                confectioneryProducts: 8,
                juices: 7.5,
                milkAndFermentedMilkProducts: 22.5,
                sugar: 7.2
            },
            macronutrients: {
                proteins: 3.1,
                fats: 0.6,
                carbohydrates: 9
            },
            caloricity: 52
        }
    ]
}

const BAKED_APPLES: IDish = {
    id: '12.23',
    variants: [
        {
            id: '12.23.1',
            name: 'Яблоки печеные',
            defaultOutput: 60,
            components: {
                fruits: 69,
                sugar: 5,
            },
            macronutrients: {
                proteins: 0.3,
                fats: 0.3,
                carbohydrates: 17.6
            },
            caloricity: 74
        },
        {
            id: '12.23.2',
            name: 'Яблоки печеные c сахарной пудрой',
            defaultOutput: 65,
            components: {
                fruits: 69,
                sugar: 10,
            },
            macronutrients: {
                proteins: 0.3,
                fats: 0.3,
                carbohydrates: 24
            },
            caloricity: 99
        },
        {
            id: '12.23.3',
            name: 'Яблоки печеные с вареньем',
            defaultOutput: 80,
            components: {
                confectioneryProducts: 20,
                fruits: 69,
                sugar: 5,
            },
            macronutrients: {
                proteins: 0.4,
                fats: 0.3,
                carbohydrates: 30.8
            },
            caloricity: 125
        },
    ]
}

const APPLES_STUFFED_W_CURD: IDish = {
    id: '12.24',
    variants: [
        {
            id: '12.24.1',
            name: 'Яблоки, фаршированные творогом',
            defaultOutput: 100,
            components: {
                curd: 17,
                eggs: 4.6,
                fruits: 100,
                sugar: 3,
            },
            macronutrients: {
                proteins: 3.4,
                fats: 2.1,
                carbohydrates: 11.8
            },
            caloricity: 81
        },
        {
            id: '12.24.2',
            name: 'Яблоки, фаршированные творогом с сахарной пудрой',
            defaultOutput: 105,
            components: {
                curd: 17,
                eggs: 4.6,
                fruits: 100,
                sugar: 8,
            },
            macronutrients: {
                proteins: 3.2,
                fats: 2,
                carbohydrates: 15.9
            },
            caloricity: 94
        },
        {
            id: '12.24.3',
            name: 'Яблоки, фаршированные творогом с вареньем',
            defaultOutput: 115,
            components: {
                confectioneryProducts: 15,
                curd: 17,
                eggs: 4.6,
                fruits: 100,
                sugar: 3,
            },
            macronutrients: {
                proteins: 3,
                fats: 1.8,
                carbohydrates: 19.3
            },
            caloricity: 105
        },
    ]
}

const APPLES_STUFFED_W_RICE_N_RAISINS: IDish = {
    id: '12.25',
    generalOutput: 100,
    variants: [
        {
            id: '12.25.1',
            name: 'Яблоки, фаршированные рисом и изюмом',
            components: {
                butter: 4,
                cereals: 6.5,
                eggs: 30,
                fruits: 100,
                fruitsDried: 5,
                milkAndFermentedMilkProducts: 10.5,
                sourCream: 10,
                sugar: 3.5,
            },
            macronutrients: {
                proteins: 5,
                fats: 8.5,
                carbohydrates: 20.2
            },
            caloricity: 177
        }
    ]
}

const APPLES_PO_BRESTSKI: IDish = {
    id: '12.26',
    variants: [
        {
            id: '12.26.1',
            name: 'Яблоки по-брестски',
            defaultOutput: 100,
            components: {
                butter: 2,
                eggs: 4,
                fruits: 95,
                fruitsDried: 4,
                milkAndFermentedMilkProducts: 16,
                sugar: 5,
                potatoStarch: 3,
            },
            macronutrients: {
                proteins: 1.3,
                fats: 2.4,
                carbohydrates: 18.3
            },
            caloricity: 100
        },
        {
            id: '12.26.2',
            name: 'Яблоки по-брестски с сахарной пудрой',
            defaultOutput: 105,
            components: {
                butter: 2,
                eggs: 4,
                fruits: 95,
                fruitsDried: 4,
                milkAndFermentedMilkProducts: 16,
                sugar: 10,
                potatoStarch: 3,
            },
            macronutrients: {
                proteins: 1.4,
                fats: 2.4,
                carbohydrates: 39.2
            },
            caloricity: 183
        },
        {
            id: '12.26.3',
            name: 'Яблоки по-брестски с сиропом плодовым или ягодным',
            defaultOutput: 115,
            components: {
                butter: 2,
                eggs: 4,
                fruits: 95,
                fruitsDried: 4,
                juices: 15,
                milkAndFermentedMilkProducts: 16,
                sugar: 5,
                potatoStarch: 3,
            },
            macronutrients: {
                proteins: 1.1,
                fats: 1.8,
                carbohydrates: 30.2
            },
            caloricity: 141
        },
        {
            id: '12.26.4',
            name: 'Яблоки по-брестски с вареньем',
            defaultOutput: 130,
            components: {
                butter: 2,
                eggs: 4,
                confectioneryProducts: 30,
                fruits: 95,
                fruitsDried: 4,
                milkAndFermentedMilkProducts: 16,
                sugar: 5,
                potatoStarch: 3,
            },
            macronutrients: {
                proteins: 1.1,
                fats: 1.8,
                carbohydrates: 30.2
            },
            caloricity: 141
        }
    ]
}

export const SWEET_DISHES_ARRAY: IDish[] = [
    FRESH_FRUITS_OR_BERRIES,
    FRESH_BERRIES_W_SUGAR,
    FRESH_WATERMELON,
    ORANGES_OR_MANDARINS_W_SUGAR,
    LEMONS_W_SUGAR,
    COMPOTE_OF_FRESH_FRUITS,
    COMPOTE_OF_GRAPE,
    COMPOTE_OF_ORANGES_OR_MANDARINS,
    COMPOTE_OF_DRIED_FRUITS_OR_BERRIS,
    COMPOTE_OF_MIXTURE_OF_DRIED_FRUITS,
    CRANBERRY_DRINK_VITAMINNIY,
    KISSEL_OF_FRESH_FRUITS_OR_BERRIES,
    KISSEL_OF_APPLES,
    KISSEL_OF_CRANBERRY,
    KISSEL_OF_FRUIT_OR_BERRY_JUICE_W_SUGAR,
    KISSEL_OF_CONCENTRATE_OF_FRUIT_OR_BERRY_EXTRACTS,
    MILK_KISSEL,
    MILK_JELLY_SNEZHANA,
    JELLY_OF_FRESH_FRUITS_OR_BERRIES,
    MULTILAYERED_JELLY,
    SOUR_CREAM_JELLY_W_COCOA,
    JELLY_MOZAIKA,
    BAKED_APPLES,
    APPLES_STUFFED_W_CURD,
    APPLES_STUFFED_W_RICE_N_RAISINS,
    APPLES_PO_BRESTSKI
]