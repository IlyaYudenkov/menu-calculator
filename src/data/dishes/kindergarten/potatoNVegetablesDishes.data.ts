import type { IDish } from "@/model/dish.model";

const POTATO_IN_A_MILK: IDish = {
    id: 'kids-3.1',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.1.1',
            name: 'Картофель в молоке',
            components: {
                butter: 5,
                milkAndFermentedMilkProducts: 60,
                potato: 140,
            },
            macronutrients: {
                proteins: 2.01,
                fats: 2.72,
                carbohydrates: 11.57
            },
            caloricity: 76.95
        },

    ]
}

const PUMPKIN_PUREE: IDish = {
    id: 'kids-3.2',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.2.1',
            name: 'Пюре из тыквы',
            components: {
                butter: 23,
                flourWheat: 13,
                milkAndFermentedMilkProducts: 90,
                vegetables: 120,
            },
            macronutrients: {
                proteins: 1.87,
                fats: 3.35,
                carbohydrates: 6.45
            },
            caloricity: 101.42
        },

    ]
}

const CARROTS_W_GREEN_PEAS_IN_MILK_SAUSE: IDish = {
    id: 'kids-3.3',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.3.1',
            name: 'Морковь с зеленым горошком в молочном соусе',
            components: {
                butter: 12,
                flourWheat: 3,
                milkAndFermentedMilkProducts: 60,
                vegetables: 148,
            },
            macronutrients: {
                proteins: 2.18,
                fats: 5.12,
                carbohydrates: 6.89
            },
            caloricity: 87.68
        },

    ]
}

const PUMPKIN_PORRIDGE: IDish = {
    id: 'kids-3.4',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.4.1',
            name: 'Каша из тыквы (на молоке)',
            components: {
                butter: 5,
                cereals: 25,
                milkAndFermentedMilkProducts: 30,
                sugar: 10,
                vegetables: 195,
            },
            macronutrients: {
                proteins: 2.03,
                fats: 2.01,
                carbohydrates: 15.81
            },
            caloricity: 92.73
        },
        {
            id: 'kids-3.4.2',
            name: 'Каша из тыквы (на воде)',
            components: {
                butter: 5,
                cereals: 25,
                sugar: 10,
                vegetables: 195,
            },
            macronutrients: {
                proteins: 2.4,
                fats: 2.34,
                carbohydrates: 16.45
            },
            caloricity: 99.75
        },

    ]
}

const STEAMED_VEGETABLES_IN_MILK_SAUSE: IDish = {
    id: 'kids-3.5',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.5.1',
            name: 'Овощи, припущенные в молочном соусе',
            components: {
                butter: 9,
                flourWheat: 3,
                milkAndFermentedMilkProducts: 60,
                sugar: 1.5,
                vegetables: 150,
            },
            macronutrients: {
                proteins: 0.82,
                fats: 2.95,
                carbohydrates: 4.64
            },
            caloricity: 49.98
        },
    ]
}

const STEWED_BEETROOT: IDish = {
    id: 'kids-3.6',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-3.6.1',
            name: 'Свекла тушеная',
            components: {
                oil: 3.3,
                sugar: 1.7,
                vegetables: 93,
            },
            macronutrients: {
                proteins: 1.4,
                fats: 3.39,
                carbohydrates: 10.16
            },
            caloricity: 75.17
        },
    ]
}

const STEWED_BEETROOT_IN_SOUR_CREAM_SAUSE: IDish = {
    id: 'kids-3.7',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.7.1',
            name: 'Свекла, тушенная в сметанном соусе',
            components: {
                flourWheat: 2,
                oil: 8,
                sourCream: 20,
                vegetables: 208,
            },
            macronutrients: {
                proteins: 2.21,
                fats: 5.36,
                carbohydrates: 9.43
            },
            caloricity: 93.89
        },
    ]
}

const STEWED_BEETROOT_IN_SOUR_CREAM: IDish = {
    id: 'kids-3.8',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.8.1',
            name: 'Свекла, тушенная в сметане',
            components: {
                butter: 4.8,
                sourCream: 28.5,
                vegetables: 195,
            },
            macronutrients: {
                proteins: 1.67,
                fats: 4.34,
                carbohydrates: 8.42
            },
            caloricity: 88.7
        },
    ]
}

const CARROTS_STEWED_W_RICE_N_PRUNES: IDish = {
    id: 'kids-3.9',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.9.1',
            name: 'Морковь, тушенная с рисом и черносливом',
            components: {
                butter: 16,
                cereals: 30,
                fruitsDried: 27,
                sugar: 5,
                vegetables: 76,
            },
            macronutrients: {
                proteins: 1.72,
                fats: 5.98,
                carbohydrates: 22.29
            },
            caloricity: 154.91
        },
    ]
}

const STEWED_CARROTS: IDish = {
    id: 'kids-3.10',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.10.1',
            name: 'Морковь тушеная',
            components: {
                oil: 3.3,
                sugar: 1.7,
                vegetables: 95,
            },
            macronutrients: {
                proteins: 0.55,
                fats: 1.49,
                carbohydrates: 3.84
            },
            caloricity: 35.38
        },
    ]
}

const CARROTS_STEWED_W_APPLES: IDish = {
    id: 'kids-3.11',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.11.1',
            name: 'Морковь, тушенная с яблоками',
            components: {
                butter: 10,
                fruits: 40,
                sugar: 5,
                vegetables: 170,
            },
            macronutrients: {
                proteins: 1.08,
                fats: 3.78,
                carbohydrates: 9.56
            },
            caloricity: 84.52
        },
    ]
}

const POTATO_N_VEGETABLES_STEWED_IN_SOUR_CREAM_SAUSE: IDish = {
    id: 'kids-3.12',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.12.1',
            name: 'Картофель и овощи, тушенные в соусе (сметанном)',
            components: {
                flourWheat: 2,
                oil: 14,
                potato: 168,
                sourCream: 20,
                vegetables: 31,
            },
            macronutrients: {
                proteins: 2.02,
                fats: 8.23,
                carbohydrates: 13.35
            },
            caloricity: 139.78
        },
    ]
}

const POTATO_N_VEGETABLES_STEWED_IN_RED_MAIN_SAUSE: IDish = {
    id: 'kids-3.13',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.13.1',
            name: 'Картофель и овощи, тушенные в соусе (красном основном)',
            components: {
                flourWheat: 2,
                oil: 14.8,
                potato: 168,
                sourCream: 20,
                tomatoPuree: 4,
                vegetables: 34.8,
            },
            macronutrients: {
                proteins: 1.86,
                fats: 6.82,
                carbohydrates: 14.67
            },
            caloricity: 124.44
        },
    ]
}

const VEGETABLES_STEW: IDish = {
    id: 'kids-3.14',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-3.14.1',
            name: 'Рагу из овощей',
            components: {
                flourWheat: 3,
                oil: 10,
                potato: 94,
                sourCream: 30,
                vegetables: 88
            },
            macronutrients: {
                proteins: 0.82,
                fats: 2.95,
                carbohydrates: 4.64
            },
            caloricity: 49.98
        },
    ]
}

const POTATO_CUTLETS_W_CURD: IDish = {
    id: 'kids-3.15',
    variants: [
        {
            id: 'kids-3.15.1',
            name: 'Котлеты картофельные с творогом (мука пшеничная)',
            defaultOutput: 150,
            components: {
                butter: 3,
                curd: 50,
                eggs: 7,
                flourWheat: 13.5,
                oil: 7,
                potato: 100,
            },
            macronutrients: {
                proteins: 8.46,
                fats: 10.03,
                carbohydrates: 17.81
            },
            caloricity: 199.2
        },
        {
            id: 'kids-3.15.2',
            name: 'Котлеты картофельные с творогом (сухари пшеничные)',
            defaultOutput: 150,
            components: {
                butter: 3,
                breadWheat: 6.5,
                curd: 50,
                eggs: 7,
                flourWheat: 7,
                oil: 7,
                potato: 100,
            },
            macronutrients: {
                proteins: 8.46,
                fats: 10.03,
                carbohydrates: 17.81
            },
            caloricity: 199.2
        },
        {
            id: 'kids-3.15.3',
            name: 'Котлеты картофельные с творогом с маслом (мука пшеничная)',
            defaultOutput: 155,
            components: {
                butter: 8,
                curd: 50,
                eggs: 7,
                flourWheat: 13.5,
                oil: 7,
                potato: 100,
            },
            macronutrients: {
                proteins: 8.21,
                fats: 12.45,
                carbohydrates: 17.86
            },
            caloricity: 221.23
        },
        {
            id: 'kids-3.15.4',
            name: 'Котлеты картофельные с творогом с маслом (сухари пшеничные)',
            defaultOutput: 155,
            components: {
                butter: 8,
                breadWheat: 6.5,
                curd: 50,
                eggs: 7,
                flourWheat: 7,
                oil: 7,
                potato: 100,
            },
            macronutrients: {
                proteins: 8.21,
                fats: 12.45,
                carbohydrates: 17.86
            },
            caloricity: 221.23
        },
        {
            id: 'kids-3.15.5',
            name: 'Котлеты картофельные с творогом со сметаной (мука пшеничная)',
            defaultOutput: 160,
            components: {
                butter: 3,
                curd: 50,
                eggs: 7,
                flourWheat: 13.5,
                oil: 7,
                sourCream: 10,
                potato: 100,
            },
            macronutrients: {
                proteins: 8.2,
                fats: 11.28,
                carbohydrates: 17
            },
            caloricity: 206.06
        },
        {
            id: 'kids-3.15.6',
            name: 'Котлеты картофельные с творогом со сметаной (сухари пшеничные)',
            defaultOutput: 160,
            components: {
                butter: 3,
                breadWheat: 6.5,
                curd: 50,
                eggs: 7,
                flourWheat: 7,
                oil: 7,
                sourCream: 10,
                potato: 100,
            },
            macronutrients: {
                proteins: 8.2,
                fats: 11.28,
                carbohydrates: 17
            },
            caloricity: 206.06
        },
        {
            id: 'kids-3.15.7',
            name: 'Котлеты картофельные с творогом с соусом молочным (мука пшеничная)',
            defaultOutput: 200,
            components: {
                butter: 5.5,
                curd: 50,
                eggs: 7,
                flourWheat: 16,
                milkAndFermentedMilkProducts: 50,
                oil: 7,
                potato: 100,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 8.2,
                fats: 11.28,
                carbohydrates: 17
            },
            caloricity: 206.06
        },
        {
            id: 'kids-3.15.8',
            name: 'Котлеты картофельные с творогом с соусом молочным (сухари пшеничные)',
            defaultOutput: 200,
            components: {
                butter: 5.5,
                breadWheat: 6.5,
                curd: 50,
                eggs: 7,
                flourWheat: 9.5,
                milkAndFermentedMilkProducts: 50,
                oil: 7,
                potato: 100,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 7.2,
                fats: 9.07,
                carbohydrates: 15.67
            },
            caloricity: 175.79
        },
    ]
}

const CARROT_CUTLETS: IDish = {
    id: 'kids-3.16',
    variants: [
        {
            id: 'kids-3.16.1',
            name: 'Котлеты морковные (мука пшеничная)',
            defaultOutput: 150,
            components: {
                butter: 17,
                cereals: 15,
                eggs: 10,
                flourWheat: 12,
                vegetables: 140,
            },
            macronutrients: {
                proteins: 4.58,
                fats: 10.93,
                carbohydrates: 20.13
            },
            caloricity: 197.45
        },
        {
            id: 'kids-3.16.2',
            name: 'Котлеты морковные (сухари пшеничные)',
            defaultOutput: 150,
            components: {
                butter: 17,
                breadWheat: 12,
                cereals: 15,
                eggs: 10,
                vegetables: 140,
            },
            macronutrients: {
                proteins: 4.58,
                fats: 10.93,
                carbohydrates: 20.13
            },
            caloricity: 197.45
        },
        {
            id: 'kids-3.16.3',
            name: 'Котлеты морковные со сметаной (мука пшеничная)',
            defaultOutput: 165,
            components: {
                butter: 17,
                cereals: 15,
                eggs: 10,
                flourWheat: 12,
                sourCream: 15,
                vegetables: 140,
            },
            macronutrients: {
                proteins: 4.42,
                fats: 11.76,
                carbohydrates: 18.59
            },
            caloricity: 198.23
        },
        {
            id: 'kids-3.16.4',
            name: 'Котлеты морковные со сметаной (сухари пшеничные)',
            defaultOutput: 165,
            components: {
                butter: 17,
                breadWheat: 12,
                cereals: 15,
                eggs: 10,
                sourCream: 15,
                vegetables: 140,
            },
            macronutrients: {
                proteins: 4.42,
                fats: 11.76,
                carbohydrates: 18.59
            },
            caloricity: 198.23
        },
        {
            id: 'kids-3.16.5',
            name: 'Котлеты морковные с соусом молочным (мука пшеничная)',
            defaultOutput: 200,
            components: {
                butter: 19.5,
                cereals: 15,
                eggs: 10,
                flourWheat: 14.5,
                milkAndFermentedMilkProducts: 50,
                sugar: 0.5,
                vegetables: 140,
            },
            macronutrients: {
                proteins: 4.28,
                fats: 9.75,
                carbohydrates: 17.41
            },
            caloricity: 174.48
        },
        {
            id: 'kids-3.16.6',
            name: 'Котлеты морковные с соусом молочным (сухари пшеничные)',
            defaultOutput: 200,
            components: {
                butter: 19.5,
                breadWheat: 12,
                cereals: 15,
                eggs: 10,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                sugar: 0.5,
                vegetables: 140,
            },
            macronutrients: {
                proteins: 4.28,
                fats: 9.75,
                carbohydrates: 17.41
            },
            caloricity: 174.48
        },
        {
            id: 'kids-3.16.7',
            name: 'Котлеты морковные с соусом сметанным (мука пшеничная)',
            defaultOutput: 200,
            components: {
                butter: 17,
                cereals: 15,
                eggs: 10,
                flourWheat: 15.75,
                sourCream: 12.5,
                vegetables: 140,
            },
            macronutrients: {
                proteins: 3.81,
                fats: 9.47,
                carbohydrates: 16.59
            },
            caloricity: 167.23
        },
        {
            id: 'kids-3.16.8',
            name: 'Котлеты морковные с соусом сметанным (сухари пшеничные)',
            defaultOutput: 200,
            components: {
                butter: 17,
                breadWheat: 12,
                cereals: 15,
                eggs: 10,
                flourWheat: 3.75,
                sourCream: 12.5,
                vegetables: 140,
            },
            macronutrients: {
                proteins: 3.81,
                fats: 9.47,
                carbohydrates: 16.59
            },
            caloricity: 167.23
        }
    ]
}

const DRANIKI_PO_DOMASHNEMU: IDish = {
    id: 'kids-3.17',
    variants: [
        {
            id: 'kids-3.17.1',
            name: 'Драники по-домашнему',
            defaultOutput: 200,
            components: {
                flourWheat: 4,
                oil: 16,
                potato: 238,
                vegetables: 12,
            },
            macronutrients: {
                proteins: 2.38,
                fats: 7.47,
                carbohydrates: 19.19
            },
            caloricity: 151.55
        },
        {
            id: 'kids-3.17.2',
            name: 'Драники по-домашнему с маслом сливочным',
            defaultOutput: 205,
            components: {
                butter: 5,
                flourWheat: 4,
                oil: 16,
                potato: 238,
                vegetables: 12,
            },
            macronutrients: {
                proteins: 2.33,
                fats: 9.06,
                carbohydrates: 18.74
            },
            caloricity: 164.27
        },
        {
            id: 'kids-3.17.3',
            name: 'Драники по-домашнему со сметаной',
            defaultOutput: 215,
            components: {
                flourWheat: 4,
                oil: 16,
                potato: 238,
                sourCream: 15,
                vegetables: 12,
            },
            macronutrients: {
                proteins: 2.39,
                fats: 8.18,
                carbohydrates: 18.05
            },
            caloricity: 153.91
        }
    ]
}

const DRANIKI_LYUBITELSKIYE: IDish = {
    id: 'kids-3.18',
    variants: [
        {
            id: 'kids-3.18.1',
            name: 'Драники "Любительские"',
            defaultOutput: 200,
            components: {
                curd: 64,
                eggs: 9,
                flourWheat: 11,
                oil: 16,
                potato: 157,
            },
            macronutrients: {
                proteins: 7.17,
                fats: 10.35,
                carbohydrates: 15.53
            },
            caloricity: 185.09
        },
        {
            id: 'kids-3.18.2',
            name: 'Драники "Любительские" с маслом сливочным',
            defaultOutput: 205,
            components: {
                butter: 5,
                curd: 64,
                eggs: 9,
                flourWheat: 11,
                oil: 16,
                potato: 157,
            },
            macronutrients: {
                proteins: 7,
                fats: 11.87,
                carbohydrates: 15.17
            },
            caloricity: 197
        },
        {
            id: 'kids-3.18.3',
            name: 'Драники "Любительские" со сметаной',
            defaultOutput: 215,
            components: {
                curd: 64,
                eggs: 9,
                flourWheat: 11,
                oil: 16,
                potato: 157,
                sourCream: 15,
            },
            macronutrients: {
                proteins: 6.84,
                fats: 10.86,
                carbohydrates: 14.65
            },
            caloricity: 185.1
        }
    ]
}

const POTATO_PANCAKES_W_FRESH_CABBAGE_N_CARROTS: IDish = {
    id: 'kids-3.19',
    variants: [
        {
            id: 'kids-3.19.1',
            name: 'Картофельные оладьи со свежей капустой и морковью',
            defaultOutput: 200,
            components: {
                eggs: 16,
                flourWheat: 10.5,
                oil: 16,
                potato: 120,
                vegetables: 110,
            },
            macronutrients: {
                proteins: 3.23,
                fats: 8.16,
                carbohydrates: 15
            },
            caloricity: 149.41
        },
        {
            id: 'kids-3.19.2',
            name: 'Картофельные оладьи со свежей капустой и морковью с маслом сливочным',
            defaultOutput: 205,
            components: {
                butter: 5,
                eggs: 16,
                flourWheat: 10.5,
                oil: 16,
                potato: 120,
                vegetables: 110,
            },
            macronutrients: {
                proteins: 3.16,
                fats: 9.73,
                carbohydrates: 14.65
            },
            caloricity: 162.19
        },
        {
            id: 'kids-3.19.3',
            name: 'Картофельные оладьи со свежей капустой и морковью со сметаной',
            defaultOutput: 215,
            components: {
                eggs: 16,
                flourWheat: 10.5,
                oil: 16,
                potato: 120,
                sourCream: 15,
                vegetables: 110,
            },
            macronutrients: {
                proteins: 3.17,
                fats: 8.81,
                carbohydrates: 14.15
            },
            caloricity: 151.9
        },
        {
            id: 'kids-3.19.4',
            name: 'Картофельные оладьи со свежей капустой и морковью с соусом молочным',
            defaultOutput: 250,
            components: {
                butter: 2.5,
                eggs: 16,
                flourWheat: 13,
                milkAndFermentedMilkProducts: 50,
                oil: 16,
                potato: 120,
                sugar: 0.5,
                vegetables: 110,
            },
            macronutrients: {
                proteins: 3.2,
                fats: 7.84,
                carbohydrates: 13.6
            },
            caloricity: 140.6
        }
    ]
}

const ZUCCHINI_PANCAKES: IDish = {
    id: 'kids-3.20',
    variants: [
        {
            id: 'kids-3.20.1',
            name: 'Оладьи из кабачков',
            defaultOutput: 200,
            components: {
                cereals: 16,
                eggs: 16,
                flourWheat: 16,
                oil: 12,
                vegetables: 245,
            },
            macronutrients: {
                proteins: 3.03,
                fats: 6.56,
                carbohydrates: 15.29
            },
            caloricity: 132.87
        },
        {
            id: 'kids-3.20.2',
            name: 'Оладьи из кабачков с маслом сливочным',
            defaultOutput: 205,
            components: {
                butter: 5,
                cereals: 16,
                eggs: 16,
                flourWheat: 16,
                oil: 12,
                vegetables: 245,
            },
            macronutrients: {
                proteins: 2.96,
                fats: 8.17,
                carbohydrates: 14.93
            },
            caloricity: 146.05
        },
        {
            id: 'kids-3.20.3',
            name: 'Оладьи из кабачков со сметаной',
            defaultOutput: 215,
            components: {
                cereals: 16,
                eggs: 16,
                flourWheat: 16,
                oil: 12,
                sourCream: 15,
                vegetables: 245,
            },
            macronutrients: {
                proteins: 2.99,
                fats: 7.33,
                carbohydrates: 14.42
            },
            caloricity: 136.5
        }
    ]
}

const POTATO_CASSEROLE_W_VEGETABLES: IDish = {
    id: 'kids-3.21',
    variants: [
        {
            id: 'kids-3.21.1',
            name: 'Запеканка картофельная с овощами',
            defaultOutput: 200,
            components: {
                breadWheat: 5,
                butter: 5,
                eggs: 5,
                potato: 200,
                sourCream: 5,
                vegetables: 44,
            },
            macronutrients: {
                proteins: 2.66,
                fats: 2.88,
                carbohydrates: 16.75
            },
            caloricity: 102.66
        },
        {
            id: 'kids-3.21.2',
            name: 'Запеканка картофельная с овощами со сметаной',
            defaultOutput: 215,
            components: {
                breadWheat: 5,
                butter: 5,
                eggs: 5,
                potato: 200,
                sourCream: 20,
                vegetables: 44,
            },
            macronutrients: {
                proteins: 2.48,
                fats: 4.36,
                carbohydrates: 15.6
            },
            caloricity: 111.15
        },
        {
            id: 'kids-3.21.3',
            name: 'Запеканка картофельная с овощами с соусом молочным',
            defaultOutput: 250,
            components: {
                breadWheat: 5,
                butter: 7.5,
                eggs: 5,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                potato: 200,
                sourCream: 5,
                sugar: 0.5,
                vegetables: 44,
            },
            macronutrients: {
                proteins: 2.72,
                fats: 3.77,
                carbohydrates: 14.88
            },
            caloricity: 103.92
        }
    ]
}

const CARROT_CASSEROLE: IDish = {
    id: 'kids-3.22',
    variants: [
        {
            id: 'kids-3.22.1',
            name: 'Запеканка морковная',
            defaultOutput: 200,
            components: {
                breadWheat: 5,
                butter: 10,
                cereals: 20,
                milkAndFermentedMilkProducts: 35,
                sourCream: 5,
                sugar: 6,
                vegetables: 217.4,
            },
            macronutrients: {
                proteins: 2.94,
                fats: 4.67,
                carbohydrates: 18.24
            },
            caloricity: 137.61
        },
        {
            id: 'kids-3.22.2',
            name: 'Запеканка морковная с маслом сливочным',
            defaultOutput: 205,
            components: {
                breadWheat: 10,
                butter: 10,
                cereals: 20,
                milkAndFermentedMilkProducts: 35,
                sourCream: 5,
                sugar: 6,
                vegetables: 217.4,
            },
            macronutrients: {
                proteins: 2.88,
                fats: 6.33,
                carbohydrates: 17.8
            },
            caloricity: 151.92
        },
        {
            id: 'kids-3.22.3',
            name: 'Запеканка морковная с маслом сливочным',
            defaultOutput: 250,
            components: {
                breadWheat: 10,
                butter: 12.5,
                cereals: 20,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 85,
                sourCream: 5,
                sugar: 6.5,
                vegetables: 217.4,
            },
            macronutrients: {
                proteins: 2.62,
                fats: 4.75,
                carbohydrates: 15.6
            },
            caloricity: 124.6
        },
    ]
}

const CARROT_CASSEROLE_W_CURD: IDish = {
    id: 'kids-3.23',
    variants: [
        {
            id: 'kids-3.23.1',
            name: 'Запеканка морковная с творогом',
            defaultOutput: 200,
            components: {
                breadWheat: 5,
                butter: 10,
                cereals: 10,
                curd: 75,
                eggs: 20,
                milkAndFermentedMilkProducts: 30,
                sourCream: 5,
                sugar: 10,
                vegetables: 120,
            },
            macronutrients: {
                proteins: 8.56,
                fats: 8.505,
                carbohydrates: 14.47
            },
            caloricity: 176.76
        },
        {
            id: 'kids-3.23.2',
            name: 'Запеканка морковная с творогом с маслом сливочным',
            defaultOutput: 205,
            components: {
                breadWheat: 5,
                butter: 15,
                cereals: 10,
                curd: 75,
                eggs: 20,
                milkAndFermentedMilkProducts: 30,
                sourCream: 5,
                sugar: 10,
                vegetables: 120,
            },
            macronutrients: {
                proteins: 8.36,
                fats: 10.07,
                carbohydrates: 14.14
            },
            caloricity: 188.9
        },
        {
            id: 'kids-3.23.3',
            name: 'Запеканка морковная с творогом с соусом молочным',
            defaultOutput: 250,
            components: {
                breadWheat: 5,
                butter: 12.5,
                cereals: 10,
                curd: 75,
                eggs: 20,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 80,
                sourCream: 5,
                sugar: 10.5,
                vegetables: 120,
            },
            macronutrients: {
                proteins: 7.64,
                fats: 8.13,
                carbohydrates: 13.18
            },
            caloricity: 162.45
        }
    ]
}

const VEGETABLE_CASSEROLE: IDish = {
    id: 'kids-3.24',
    variants: [
        {
            id: 'kids-3.24.1',
            name: 'Запеканка овощная',
            defaultOutput: 200,
            components: {
                breadWheat: 10,
                cereals: 10,
                eggs: 5,
                oil: 5,
                potato: 124,
                sourCream: 5,
                vegetables: 114,
            },
            macronutrients: {
                proteins: 3.19,
                fats: 3.26,
                carbohydrates: 18.59
            },
            caloricity: 118.58
        },
        {
            id: 'kids-3.24.2',
            name: 'Запеканка овощная с маслом сливочным',
            defaultOutput: 205,
            components: {
                breadWheat: 10,
                butter: 5,
                cereals: 10,
                eggs: 5,
                oil: 5,
                potato: 124,
                sourCream: 5,
                vegetables: 114,
            },
            macronutrients: {
                proteins: 3.12,
                fats: 4.95,
                carbohydrates: 18.15
            },
            caloricity: 132.1
        },
        {
            id: 'kids-3.24.3',
            name: 'Запеканка овощная со сметаной',
            defaultOutput: 215,
            components: {
                breadWheat: 10,
                cereals: 10,
                eggs: 5,
                oil: 5,
                potato: 124,
                sourCream: 20,
                vegetables: 114,
            },
            macronutrients: {
                proteins: 3.13,
                fats: 4.26,
                carbohydrates: 17.5
            },
            caloricity: 123.24
        },
        {
            id: 'kids-3.24.4',
            name: 'Запеканка овощная с соусом молочным',
            defaultOutput: 250,
            components: {
                breadWheat: 10,
                butter: 2.5,
                cereals: 10,
                eggs: 5,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                oil: 5,
                potato: 124,
                sourCream: 5,
                sugar: 0.5,
                vegetables: 114,
            },
            macronutrients: {
                proteins: 3.16,
                fats: 3.93,
                carbohydrates: 16.5
            },
            caloricity: 115.91
        }
    ]
}

const PUMPKIN_CASSEROLE: IDish = {
    id: 'kids-3.25',
    variants: [
        {
            id: 'kids-3.25.1',
            name: 'Запеканка из тыквы',
            defaultOutput: 200,
            components: {
                breadWheat: 5,
                butter: 5,
                cereals: 40,
                eggs: 8,
                milkAndFermentedMilkProducts: 100,
                sourCream: 5,
                vegetables: 127,
            },
            macronutrients: {
                proteins: 4.64,
                fats: 4.43,
                carbohydrates: 18.18
            },
            caloricity: 135.12
        },
        {
            id: 'kids-3.25.2',
            name: 'Запеканка из тыквы с маслом сливочным',
            defaultOutput: 205,
            components: {
                breadWheat: 5,
                butter: 10,
                cereals: 40,
                eggs: 8,
                milkAndFermentedMilkProducts: 100,
                sourCream: 5,
                vegetables: 127,
            },
            macronutrients: {
                proteins: 4.53,
                fats: 6.09,
                carbohydrates: 17.75
            },
            caloricity: 148.24
        },
        {
            id: 'kids-3.25.3',
            name: 'Запеканка из тыквы с соусом сметанным',
            defaultOutput: 250,
            components: {
                breadWheat: 5,
                butter: 10,
                cereals: 40,
                eggs: 8,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 100,
                sourCream: 17.5,
                vegetables: 127,
            },
            macronutrients: {
                proteins: 4.05,
                fats: 5.31,
                carbohydrates: 15.45
            },
            caloricity: 129.64
        }
    ]
}

const BABKA_W_POTATO_N_ONION: IDish = {
    id: 'kids-3.26',
    variants: [
        {
            id: 'kids-3.26.1',
            name: 'Бабка картофельная с луком',
            defaultOutput: 200,
            components: {
                flourWheat: 5,
                oil: 18,
                potato: 195,
                vegetables: 46,
            },
            macronutrients: {
                proteins: 2.25,
                fats: 8.28,
                carbohydrates: 17.74
            },
            caloricity: 153.98
        },
        {
            id: 'kids-3.26.2',
            name: 'Бабка картофельная с луком с маслом сливочным',
            defaultOutput: 205,
            components: {
                butter: 5,
                flourWheat: 5,
                oil: 18,
                potato: 195,
                vegetables: 46,
            },
            macronutrients: {
                proteins: 2.2,
                fats: 9.85,
                carbohydrates: 17.32
            },
            caloricity: 166.64
        },
        {
            id: 'kids-3.26.3',
            name: 'Бабка картофельная с луком со сметаной',
            defaultOutput: 215,
            components: {
                flourWheat: 5,
                oil: 18,
                potato: 195,
                sourCream: 15,
                vegetables: 46,
            },
            macronutrients: {
                proteins: 2.27,
                fats: 8.93,
                carbohydrates: 16.7
            },
            caloricity: 156.17
        }
    ]
}

const PUDDING_W_PUMPKIN_N_APPLES: IDish = {
    id: 'kids-3.27',
    variants: [
        {
            id: 'kids-3.27.1',
            name: 'Пудинг из тыквы и яблок',
            defaultOutput: 200,
            components: {
                breadWheat: 10,
                butter: 4,
                cereals: 12,
                eggs: 10,
                fruits: 100,
                milkAndFermentedMilkProducts: 40,
                sugar: 8,
                vegetables: 84,
            },
            macronutrients: {
                proteins: 2.67,
                fats: 2.73,
                carbohydrates: 17.27
            },
            caloricity: 106.29
        },
        {
            id: 'kids-3.27.2',
            name: 'Пудинг из тыквы и яблок с маслом сливочным',
            defaultOutput: 205,
            components: {
                breadWheat: 10,
                butter: 9,
                cereals: 12,
                eggs: 10,
                fruits: 100,
                milkAndFermentedMilkProducts: 40,
                sugar: 8,
                vegetables: 84,
            },
            macronutrients: {
                proteins: 2.61,
                fats: 4.34,
                carbohydrates: 16.86
            },
            caloricity: 120.12
        },
        {
            id: 'kids-3.27.3',
            name: 'Пудинг из тыквы и яблок с соусом сметанным',
            defaultOutput: 250,
            components: {
                breadWheat: 10,
                butter: 4,
                cereals: 12,
                eggs: 10,
                flourWheat: 3.75,
                fruits: 100,
                milkAndFermentedMilkProducts: 40,
                sourCream: 12.5,
                sugar: 8,
                vegetables: 84,
            },
            macronutrients: {
                proteins: 2.37,
                fats: 3.25,
                carbohydrates: 14.61
            },
            caloricity: 99.16
        }
    ]
}

const PUDDING_W_CARROTS_N_APPLES: IDish = {
    id: 'kids-3.28',
    variants: [
        {
            id: 'kids-3.28.1',
            name: 'Пудинг из моркови и яблок',
            defaultOutput: 200,
            components: {
                butter: 5,
                cereals: 10,
                eggs: 10,
                fruits: 81,
                milkAndFermentedMilkProducts: 40,
                sugar: 5,
                vegetables: 113,
            },
            macronutrients: {
                proteins: 2.34,
                fats: 3,
                carbohydrates: 13.43
            },
            caloricity: 95.7
        },
        {
            id: 'kids-3.28.2',
            name: 'Пудинг из моркови и яблок с маслом сливочным',
            defaultOutput: 205,
            components: {
                butter: 10,
                cereals: 10,
                eggs: 10,
                fruits: 81,
                milkAndFermentedMilkProducts: 40,
                sugar: 5,
                vegetables: 113,
            },
            macronutrients: {
                proteins: 2.29,
                fats: 4.7,
                carbohydrates: 13.12
            },
            caloricity: 109.79
        },
        {
            id: 'kids-3.28.3',
            name: 'Пудинг из моркови и яблок со сметаной',
            defaultOutput: 215,
            components: {
                butter: 5,
                cereals: 10,
                eggs: 10,
                fruits: 81,
                milkAndFermentedMilkProducts: 40,
                sourCream: 15,
                sugar: 5,
                vegetables: 113,
            },
            macronutrients: {
                proteins: 2.34,
                fats: 4.01,
                carbohydrates: 12.69
            },
            caloricity: 101.96
        }
    ]
}

const SOUFFLE_W_POTATOES_N_CARROTS: IDish = {
    id: 'kids-3.29',
    variants: [
        {
            id: 'kids-3.29.1',
            name: 'Суфле из картофеля и моркови',
            defaultOutput: 200,
            components: {
                butter: 12,
                eggs: 16,
                flourWheat: 4,
                milkAndFermentedMilkProducts: 41,
                potato: 124,
                vegetables: 43,
            },
            macronutrients: {
                proteins: 2.83,
                fats: 5.74,
                carbohydrates: 12.44
            },
            caloricity: 113.97
        },
        {
            id: 'kids-3.29.2',
            name: 'Суфле из картофеля и моркови с маслом сливочным',
            defaultOutput: 205,
            components: {
                butter: 17,
                eggs: 16,
                flourWheat: 4,
                milkAndFermentedMilkProducts: 41,
                potato: 124,
                vegetables: 43,
            },
            macronutrients: {
                proteins: 2.77,
                fats: 7.37,
                carbohydrates: 12.16
            },
            caloricity: 127.6
        },
        {
            id: 'kids-3.29.3',
            name: 'Суфле из картофеля и моркови со сметаной',
            defaultOutput: 215,
            components: {
                butter: 12,
                eggs: 16,
                flourWheat: 4,
                milkAndFermentedMilkProducts: 41,
                potato: 124,
                sourCream: 15,
                vegetables: 43,
            },
            macronutrients: {
                proteins: 2.8,
                fats: 6.57,
                carbohydrates: 11.77
            },
            caloricity: 119.95
        }
    ]
}

const VEGETABLE_CABBAGE_ROLLS: IDish = {
    id: 'kids-3.30',
    variants: [
        {
            id: 'kids-3.30.1',
            name: 'Голубцы овощные',
            defaultOutput: 200,
            components: {
                butter: 10,
                cereals: 9,
                eggs: 8,
                flourWheat: 6,
                sourCream: 20,
                vegetables: 158,
            },
            macronutrients: {
                proteins: 2.44,
                fats: 5.92,
                carbohydrates: 8.76
            },
            caloricity: 102.93
        }
    ]
}

const BAKED_ZUCCHINI_W_SOUR_CREAM_SAUSE: IDish = {
    id: 'kids-3.31',
    variants: [
        {
            id: 'kids-3.31.1',
            name: 'Кабачки, запеченные под соусом (сметанным, с сыром пошехонским)',
            defaultOutput: 200,
            components: {
                cheese: 5,
                flourWheat: 13.5,
                oil: 13,
                sourCream: 25,
                vegetables: 179,
            },
            macronutrients: {
                proteins: 1.99,
                fats: 8.8,
                carbohydrates: 8.5
            },
            caloricity: 122.46
        },
        {
            id: 'kids-3.31.2',
            name: 'Кабачки, запеченные под соусом (сметанным, с сыром российским)',
            defaultOutput: 200,
            components: {
                cheese: 5,
                flourWheat: 13.5,
                oil: 13,
                sourCream: 25,
                vegetables: 179,
            },
            macronutrients: {
                proteins: 1.92,
                fats: 8.86,
                carbohydrates: 8.5
            },
            caloricity: 122.69
        },
        {
            id: 'kids-3.31.3',
            name: 'Кабачки, запеченные под соусом (сметанным, с сыром голландским)',
            defaultOutput: 200,
            components: {
                cheese: 5,
                flourWheat: 13.5,
                oil: 13,
                sourCream: 25,
                vegetables: 179,
            },
            macronutrients: {
                proteins: 1.99,
                fats: 8.81,
                carbohydrates: 8.5
            },
            caloricity: 122.51
        }
    ]
}