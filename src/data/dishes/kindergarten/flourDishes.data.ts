import type { IDish } from "@/model/dish.model";

const PANCAKES: IDish = {
    id: 'kids-16.1',
    variants: [
        {
            id: 'kids-16.1.1',
            name: 'Блины',
            defaultOutput: 70,
            components: {
                butter: 1.4,
                eggs: 2.1,
                flourWheat: 33.6,
                milkAndFermentedMilkProducts: 53.6,
                oil: 2,
                sugar: 1.4,
                yeasts: 1.4,
            },
            macronutrients: {
                proteins: 6.9,
                fats: 6.46,
                carbohydrates: 34.86
            },
            caloricity: 227.77
        },
        {
            id: 'kids-16.1.2',
            name: 'Блины с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 6.4,
                eggs: 2.1,
                flourWheat: 33.6,
                milkAndFermentedMilkProducts: 53.6,
                oil: 2,
                sugar: 1.4,
                yeasts: 1.4,
            },
            macronutrients: {
                proteins: 6.47,
                fats: 10.87,
                carbohydrates: 32.57
            },
            caloricity: 257.47
        },
        {
            id: 'kids-16.1.3',
            name: 'Блины со сметаной',
            defaultOutput: 80,
            components: {
                butter: 1.4,
                eggs: 2.1,
                flourWheat: 33.6,
                milkAndFermentedMilkProducts: 53.6,
                oil: 2,
                sourCream: 10,
                sugar: 1.4,
                yeasts: 1.4,
            },
            macronutrients: {
                proteins: 6.35,
                fats: 7.85,
                carbohydrates: 30.86
            },
            caloricity: 222.48
        },
        {
            id: 'kids-16.1.4',
            name: 'Блины с повидлом',
            defaultOutput: 80,
            components: {
                butter: 1.4,
                confectioneryProducts: 10,
                eggs: 2.1,
                flourWheat: 33.6,
                milkAndFermentedMilkProducts: 53.6,
                oil: 2,
                sugar: 1.4,
                yeasts: 1.4,
            },
            macronutrients: {
                proteins: 6.08,
                fats: 5.65,
                carbohydrates: 26.15
            },
            caloricity: 227.43
        },
    ]
}

const PANCAKES_MADE_W_KEFIR: IDish = {
    id: 'kids-16.2',
    variants: [
        {
            id: 'kids-16.2.1',
            name: 'Блины на кефире',
            defaultOutput: 70,
            components: {
                eggs: 8,
                flourWheat: 31,
                milkAndFermentedMilkProducts: 50,
                oil: 2,
                sugar: 2,
            },
            macronutrients: {
                proteins: 7.26,
                fats: 4.13,
                carbohydrates: 32.54
            },
            caloricity: 201.41
        },
        {
            id: 'kids-16.2.2',
            name: 'Блины на кефире с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                eggs: 8,
                flourWheat: 31,
                milkAndFermentedMilkProducts: 50,
                oil: 2,
                sugar: 2,
            },
            macronutrients: {
                proteins: 6.8,
                fats: 8.7,
                carbohydrates: 30.43
            },
            caloricity: 232.87
        },
        {
            id: 'kids-16.2.3',
            name: 'Блины на кефире с повидлом',
            defaultOutput: 80,
            components: {
                confectioneryProducts: 10,
                eggs: 8,
                flourWheat: 31,
                milkAndFermentedMilkProducts: 50,
                oil: 2,
                sugar: 2,
            },
            macronutrients: {
                proteins: 6.4,
                fats: 3.61,
                carbohydrates: 35.83
            },
            caloricity: 204.36
        }
    ]
}

const PANCAKES_MADE_W_APPLES: IDish = {
    id: 'kids-16.3',
    variants: [
        {
            id: 'kids-16.3.1',
            name: 'Блинчики с яблоками',
            defaultOutput: 70,
            components: {
                butter: 3,
                eggs: 4.5,
                flourWheat: 22,
                fruits: 22,
                milkAndFermentedMilkProducts: 54,
                oil: 1,
                sugar: 6,
            },
            macronutrients: {
                proteins: 5.67,
                fats: 7.13,
                carbohydrates: 26.9
            },
            caloricity: 197.67
        },
        {
            id: 'kids-16.3.2',
            name: 'Блинчики с яблоками с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 8,
                eggs: 4.5,
                flourWheat: 22,
                fruits: 22,
                milkAndFermentedMilkProducts: 54,
                oil: 1,
                sugar: 6,
            },
            macronutrients: {
                proteins: 5.32,
                fats: 11.49,
                carbohydrates: 25.16
            },
            caloricity: 229.37
        },
        {
            id: 'kids-16.3.3',
            name: 'Блинчики с яблоками с повидлом',
            defaultOutput: 80,
            components: {
                butter: 3,
                confectioneryProducts: 10,
                eggs: 4.5,
                flourWheat: 22,
                fruits: 22,
                milkAndFermentedMilkProducts: 54,
                oil: 1,
                sugar: 6,
            },
            macronutrients: {
                proteins: 5.01,
                fats: 6.24,
                carbohydrates: 30.89
            },
            caloricity: 201.09
        }
    ]
}

const OLADYI: IDish = {
    id: 'kids-16.4',
    variants: [
        {
            id: 'kids-16.4.1',
            name: 'Оладьи',
            defaultOutput: 70,
            components: {
                eggs: 2,
                flourWheat: 40,
                milkAndFermentedMilkProducts: 40,
                oil: 3.5,
                sugar: 1.4,
                yeasts: 1.1,
            },
            macronutrients: {
                proteins: 7.17,
                fats: 6.53,
                carbohydrates: 39.69
            },
            caloricity: 249.83
        },
        {
            id: 'kids-16.4.2',
            name: 'Оладьи с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                eggs: 2,
                flourWheat: 40,
                milkAndFermentedMilkProducts: 40,
                oil: 3.5,
                sugar: 1.4,
                yeasts: 1.1,
            },
            macronutrients: {
                proteins: 6.72,
                fats: 10.93,
                carbohydrates: 37.08
            },
            caloricity: 278.05
        },
        {
            id: 'kids-16.4.3',
            name: 'Оладьи со сметаной',
            defaultOutput: 80,
            components: {
                eggs: 2,
                flourWheat: 40,
                milkAndFermentedMilkProducts: 40,
                oil: 3.5,
                sourCream: 10,
                sugar: 1.4,
                yeasts: 1.1,
            },
            macronutrients: {
                proteins: 6.59,
                fats: 7.91,
                carbohydrates: 35.08
            },
            caloricity: 241.78
        },
        {
            id: 'kids-16.4.4',
            name: 'Оладьи с повидлом',
            defaultOutput: 80,
            components: {
                confectioneryProducts: 10,
                eggs: 2,
                flourWheat: 40,
                milkAndFermentedMilkProducts: 40,
                oil: 3.5,
                sugar: 1.4,
                yeasts: 1.1,
            },
            macronutrients: {
                proteins: 6.33,
                fats: 5.71,
                carbohydrates: 42.06
            },
            caloricity: 246.73
        }
    ]
}

const OLADYI_W_RAISINS: IDish = {
    id: 'kids-16.5',
    variants: [
        {
            id: 'kids-16.5.1',
            name: 'Оладьи с изюмом',
            defaultOutput: 70,
            components: {
                eggs: 2,
                flourWheat: 35,
                fruitsDried: 9,
                milkAndFermentedMilkProducts: 35,
                oil: 4,
                sugar: 1,
                yeasts: 1
            },
            macronutrients: {
                proteins: 6.53,
                fats: 6.93,
                carbohydrates: 42.07
            },
            caloricity: 259.16
        },
        {
            id: 'kids-16.5.2',
            name: 'Оладьи с изюмом с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                eggs: 2,
                flourWheat: 35,
                fruitsDried: 9,
                milkAndFermentedMilkProducts: 35,
                oil: 4,
                sugar: 1,
                yeasts: 1
            },
            macronutrients: {
                proteins: 6.12,
                fats: 11.31,
                carbohydrates: 39.32
            },
            caloricity: 286.76
        },
        {
            id: 'kids-16.5.3',
            name: 'Оладьи с изюмом со сметаной',
            defaultOutput: 80,
            components: {
                eggs: 2,
                flourWheat: 35,
                fruitsDried: 9,
                milkAndFermentedMilkProducts: 35,
                oil: 4,
                sourCream: 10,
                sugar: 1,
                yeasts: 1
            },
            macronutrients: {
                proteins: 6.03,
                fats: 8.26,
                carbohydrates: 37.18
            },
            caloricity: 233.44
        },
        {
            id: 'kids-16.5.4',
            name: 'Оладьи с изюмом с вареньем',
            defaultOutput: 80,
            components: {
                confectioneryProducts: 10,
                eggs: 2,
                flourWheat: 35,
                fruitsDried: 9,
                milkAndFermentedMilkProducts: 35,
                oil: 4,
                sugar: 1,
                yeasts: 1
            },
            macronutrients: {
                proteins: 5.75,
                fats: 6.06,
                carbohydrates: 44.79
            },
            caloricity: 257.25
        },
        {
            id: 'kids-16.5.5',
            name: 'Оладьи с изюмом с медом',
            defaultOutput: 80,
            components: {
                confectioneryProducts: 10,
                eggs: 2,
                flourWheat: 35,
                fruitsDried: 9,
                milkAndFermentedMilkProducts: 35,
                oil: 4,
                sugar: 1,
                yeasts: 1
            },
            macronutrients: {
                proteins: 5.8,
                fats: 6.06,
                carbohydrates: 45.85
            },
            caloricity: 262.09
        }
    ]
}

const OLADYI_W_APPLES: IDish = {
    id: 'kids-16.6',
    variants: [
        {
            id: 'kids-16.6.1',
            name: 'Оладьи с яблоками',
            defaultOutput: 70,
            components: {
                eggs: 2,
                flourWheat: 36,
                fruits: 7,
                milkAndFermentedMilkProducts: 36,
                oil: 4,
                sugar: 1.5,
                yeasts: 1
            },
            macronutrients: {
                proteins: 6.53,
                fats: 7.01,
                carbohydrates: 36.9
            },
            caloricity: 240.3
        },
        {
            id: 'kids-16.6.2',
            name: 'Оладьи с яблоками с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                eggs: 2,
                flourWheat: 36,
                fruits: 7,
                milkAndFermentedMilkProducts: 36,
                oil: 4,
                sugar: 1.5,
                yeasts: 1
            },
            macronutrients: {
                proteins: 6.12,
                fats: 11.39,
                carbohydrates: 34.5
            },
            caloricity: 269.16
        },
        {
            id: 'kids-16.6.3',
            name: 'Оладьи с яблоками со сметаной',
            defaultOutput: 80,
            components: {
                eggs: 2,
                flourWheat: 36,
                fruits: 7,
                milkAndFermentedMilkProducts: 36,
                oil: 4,
                sourCream: 10,
                sugar: 1.5,
                yeasts: 1
            },
            macronutrients: {
                proteins: 6.03,
                fats: 8.34,
                carbohydrates: 32.65
            },
            caloricity: 233.44
        },
        {
            id: 'kids-16.6.4',
            name: 'Оладьи с яблоками с сахаром',
            defaultOutput: 75,
            components: {
                eggs: 2,
                flourWheat: 36,
                fruits: 7,
                milkAndFermentedMilkProducts: 36,
                oil: 4,
                sugar: 6.5,
                yeasts: 1
            },
            macronutrients: {
                proteins: 6.1,
                fats: 6.55,
                carbohydrates: 40.43
            },
            caloricity: 247.01
        },
        {
            id: 'kids-16.6.5',
            name: 'Оладьи с яблоками с медом',
            defaultOutput: 80,
            components: {
                confectioneryProducts: 10,
                eggs: 2,
                flourWheat: 36,
                fruits: 7,
                milkAndFermentedMilkProducts: 36,
                oil: 4,
                sugar: 1.5,
                yeasts: 1
            },
            macronutrients: {
                proteins: 5.8,
                fats: 6.14,
                carbohydrates: 41.33
            },
            caloricity: 245.59
        }
    ]
}

const OLADYI_W_CURD: IDish = {
    id: 'kids-16.7',
    variants: [
        {
            id: 'kids-16.7.1',
            name: 'Оладьи с творогом',
            defaultOutput: 70,
            components: {
                curd: 12,
                eggs: 2,
                flourWheat: 34,
                milkAndFermentedMilkProducts: 34.4,
                oil: 4,
                sugar: 1,
                yeasts: 1,
            },
            macronutrients: {
                proteins: 8.71,
                fats: 8.26,
                carbohydrates: 33.81
            },
            caloricity: 248.69
        },
        {
            id: 'kids-16.7.2',
            name: 'Оладьи с творогом с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                curd: 12,
                eggs: 2,
                flourWheat: 34,
                milkAndFermentedMilkProducts: 34.4,
                oil: 4,
                sugar: 1,
                yeasts: 1,
            },
            macronutrients: {
                proteins: 8.17,
                fats: 12.55,
                carbohydrates: 31.61
            },
            caloricity: 276.99
        },
        {
            id: 'kids-16.7.3',
            name: 'Оладьи с творогом со сметаной',
            defaultOutput: 80,
            components: {
                curd: 12,
                eggs: 2,
                flourWheat: 34,
                milkAndFermentedMilkProducts: 34.4,
                oil: 4,
                sourCream: 10,
                sugar: 1,
                yeasts: 1,
            },
            macronutrients: {
                proteins: 7.94,
                fats: 9.43,
                carbohydrates: 29.95
            },
            caloricity: 240.78
        },
        {
            id: 'kids-16.7.4',
            name: 'Оладьи с творогом с сахаром',
            defaultOutput: 75,
            components: {
                curd: 12,
                eggs: 2,
                flourWheat: 34,
                milkAndFermentedMilkProducts: 34.4,
                oil: 4,
                sugar: 6,
                yeasts: 1,
            },
            macronutrients: {
                proteins: 8.13,
                fats: 7.71,
                carbohydrates: 37.56
            },
            caloricity: 254.84
        }
    ]
}

const YEASTS_DOUGH_BAKED_PIES_W_JAM: IDish = {
    id: 'kids-16.8',
    generalOutput: 60,
    variants: [
        {
            id: 'kids-16.8.1',
            name: 'Пирожки печеные из дрожжевого теста с повидлом',
            components: {
                butter: 3,
                confectioneryProducts: 25,
                eggs: 4.2,
                flourWheat: 28.8,
                oil: 0.1,
                sugar: 2,
                yeasts: 1,
            },
            macronutrients: {
                proteins: 5.55,
                fats: 4.98,
                carbohydrates: 57.33
            },
            caloricity: 294.3
        }
    ]
}

const SMAZHANKA_W_BOILED_BEEF_N_ONIONS: IDish = {
    id: 'kids-16.9',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-16.9.1',
            name: 'Смажанка с отварной говядиной и луком',
            components: {
                eggs: 11.5,
                flourWheat: 32,
                meat: 32,
                oil: 5.2,
                sourCream: 10,
                sugar: 1,
                vegetables: 10,
                yeasts: 1,
            },
            macronutrients: {
                proteins: 10.53,
                fats: 8.53,
                carbohydrates: 21.92
            },
            caloricity: 210.53
        }
    ]
}

const VATRUSHKA_W_JAM: IDish = {
    id: 'kids-16.10',
    generalOutput: 75,
    variants: [
        {
            id: 'kids-16.10.1',
            name: 'Ватрушка с повидлом',
            components: {
                butter: 1.8,
                confectioneryProducts: 30,
                eggs: 3.4,
                flourWheat: 39,
                oil: 0.2,
                sugar: 2,
                yeasts: 1.2
            },
            macronutrients: {
                proteins: 5.61,
                fats: 2.97,
                carbohydrates: 58.2
            },
            caloricity: 280.13
        }
    ]
}

const DESSERT_BUN_V1: IDish = {
    id: 'kids-16.11',
    generalOutput: 50,
    variants: [
        {
            id: 'kids-16.11.1',
            name: 'Булочка десертная (вариант 1)',
            components: {
                butter: 3.2,
                confectioneryProducts: 11,
                eggs: 3.15,
                flourWheat: 27,
                milkAndFermentedMilkProducts: 11.6,
                oil: 0.13,
                sugar: 5.25,
                yeasts: 1
            },
            macronutrients: {
                proteins: 6.56,
                fats: 6.54,
                carbohydrates: 58.94
            },
            caloricity: 320.14
        }
    ]
}

const DESSERT_BUN_V2: IDish = {
    id: 'kids-16.12',
    generalOutput: 50,
    variants: [
        {
            id: 'kids-16.12.1',
            name: 'Булочка десертная (вариант 2)',
            components: {
                butter: 2.8,
                confectioneryProducts: 11,
                eggs: 3.15,
                flourWheat: 27,
                milkAndFermentedMilkProducts: 12,
                oil: 0.13,
                sugar: 5.25,
                yeasts: 1
            },
            macronutrients: {
                proteins: 6.58,
                fats: 5.96,
                carbohydrates: 56.86
            },
            caloricity: 306.6
        }
    ]
}

const VITBA_BUN_V1: IDish = {
    id: 'kids-16.13',
    generalOutput: 50,
    variants: [
        {
            id: 'kids-16.13.1',
            name: 'Булочка "Витьба" (вариант 1)',
            components: {
                butter: 2.8,
                eggs: 5.75,
                flourWheat: 31.5,
                milkAndFermentedMilkProducts: 11.7,
                oil: 0.13,
                sugar: 5,
                yeasts: 1
            },
            macronutrients: {
                proteins: 7.9,
                fats: 6.56,
                carbohydrates: 49.16
            },
            caloricity: 289.86
        }
    ]
}

const VITBA_BUN_V2: IDish = {
    id: 'kids-16.14',
    generalOutput: 50,
    variants: [
        {
            id: 'kids-16.14.1',
            name: 'Булочка "Витьба" (вариант 2)',
            components: {
                butter: 2.5,
                eggs: 5.75,
                flourWheat: 31.5,
                milkAndFermentedMilkProducts: 12,
                oil: 0.13,
                sugar: 5,
                yeasts: 1
            },
            macronutrients: {
                proteins: 7.92,
                fats: 6.14,
                carbohydrates: 49.18
            },
            caloricity: 286.1
        }
    ]
}

const VKUSNAYA_BUN_V1: IDish = {
    id: 'kids-16.15',
    generalOutput: 50,
    variants: [
        {
            id: 'kids-16.15.1',
            name: 'Булочка "Вкусная" (вариант 1)',
            components: {
                butter: 5.3,
                confectioneryProducts: 2,
                eggs: 1.9,
                flourWheat: 32,
                oil: 0.13,
                sugar: 6,
                yeasts: 1.8
            },
            macronutrients: {
                proteins: 6.76,
                fats: 8.96,
                carbohydrates: 52.92
            },
            caloricity: 320.66
        }
    ]
}