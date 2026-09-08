import type { IDish } from "@/model/dish.model";

const BOILED_POULTRY: IDish = {
    id: 'kids-11.1',
    variants: [
        {
            id: 'kids-11.1.1',
            name: 'Птица отварная (цыплята-бройлеры)',
            defaultOutput: 70,
            components: {
                poultry: 161,
                vegetables: 2
            },
            macronutrients: {
                proteins: 20.36,
                fats: 17.3,
                carbohydrates: 0.79
            },
            caloricity: 202.34
        },
        {
            id: 'kids-11.1.2',
            name: 'Птица отварная (цыплята-бройлеры) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                poultry: 161,
                vegetables: 2
            },
            macronutrients: {
                proteins: 19.04,
                fats: 20.99,
                carbohydrates: 0.77
            },
            caloricity: 233.73
        },
        {
            id: 'kids-11.1.3',
            name: 'Птица отварная (цыплята-бройлеры) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 2.5,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                poultry: 161,
                sugar: 0.5,
                vegetables: 2
            },
            macronutrients: {
                proteins: 12.63,
                fats: 12.27,
                carbohydrates: 2.81
            },
            caloricity: 150.51
        },
        {
            id: 'kids-11.1.4',
            name: 'Птица отварная (индейки)',
            defaultOutput: 70,
            components: {
                poultry: 155.4,
                vegetables: 2
            },
            macronutrients: {
                proteins: 20.36,
                fats: 17.3,
                carbohydrates: 0.79
            },
            caloricity: 202.34
        },
        {
            id: 'kids-11.1.5',
            name: 'Птица отварная (индейки) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                poultry: 155.4,
                vegetables: 2
            },
            macronutrients: {
                proteins: 19.04,
                fats: 20.99,
                carbohydrates: 0.77
            },
            caloricity: 233.73
        },
        {
            id: 'kids-11.1.6',
            name: 'Птица отварная (индейки) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 2.5,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                poultry: 155.4,
                sugar: 0.5,
                vegetables: 2
            },
            macronutrients: {
                proteins: 12.63,
                fats: 12.27,
                carbohydrates: 2.81
            },
            caloricity: 150.51
        }
    ]
}

const BEEF_STROGANOFF_MADE_FROM_POULTRY_FILLET: IDish = {
    id: 'kids-11.2',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-11.2.1',
            name: 'Бефстроганов из филе птицы (цыпленка-бройлера, масло сливочное)',
            components: {
                butter: 7,
                flourWheat: 4,
                poultry: 69,
                sourCream: 23,
                vegetables: 24
            },
            macronutrients: {
                proteins: 12.75,
                fats: 18.94,
                carbohydrates: 5.47
            },
            caloricity: 225.31
        },
        {
            id: 'kids-11.2.2',
            name: 'Бефстроганов из филе птицы (цыпленка-бройлера, масло растительное)',
            components: {
                flourWheat: 4,
                oil: 6,
                poultry: 69,
                sourCream: 23,
                vegetables: 24
            },
            macronutrients: {
                proteins: 12.75,
                fats: 18.94,
                carbohydrates: 5.47
            },
            caloricity: 225.31
        },
        {
            id: 'kids-11.2.3',
            name: 'Бефстроганов из филе птицы (индейки, масло сливочное)',
            components: {
                butter: 7,
                flourWheat: 4,
                poultry: 68,
                sourCream: 23,
                vegetables: 24
            },
            macronutrients: {
                proteins: 12.75,
                fats: 18.94,
                carbohydrates: 5.47
            },
            caloricity: 225.31
        },
        {
            id: 'kids-11.2.4',
            name: 'Бефстроганов из филе птицы (индейки, масло растительное)',
            components: {
                flourWheat: 4,
                oil: 6,
                poultry: 68,
                sourCream: 23,
                vegetables: 24
            },
            macronutrients: {
                proteins: 12.75,
                fats: 18.94,
                carbohydrates: 5.47
            },
            caloricity: 225.31
        }
    ]
}

const POULTRY_STEWED_IN_SAUSE: IDish = {
    id: 'kids-11.3',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-11.3.1',
            name: 'Птица, тушенная в соусе (цыплята-бройлеры)',
            components: {
                butter: 2.8,
                flourWheat: 2.8,
                milkAndFermentedMilkProducts: 25,
                oil: 3,
                poultry: 68,
            },
            macronutrients: {
                proteins: 12.21,
                fats: 14.88,
                carbohydrates: 3.13
            },
            caloricity: 175.24
        }
    ]
}

const POULTRY_STEWED_W_VEGETABLES: IDish = {
    id: 'kids-11.4',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-11.4.1',
            name: 'Птица, тушенная с овощами',
            components: {
                butter: 6.5,
                flourWheat: 4,
                oil: 1.5,
                potato: 65,
                poultry: 68,
                sugar: 1,
                vegetables: 56.9,
            },
            macronutrients: {
                proteins: 6.83,
                fats: 7.99,
                carbohydrates: 8.59
            },
            caloricity: 124.46
        }
    ]
}

const HOMEMADE_ROAST_MADE_FROM_POULTRY_FILLET: IDish = {
    id: 'kids-11.5',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-11.5.1',
            name: 'Жаркое по-домашнему из филе птицы',
            components: {
                oil: 6,
                potato: 125,
                poultry: 68,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 6.86,
                fats: 7.68,
                carbohydrates: 9.9
            },
            caloricity: 124.3
        }
    ]
}

const BOILED_POULTRY_GOULASH: IDish = {
    id: 'kids-11.6',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-11.6.1',
            name: 'Гуляш из отварной птицы (цыплята-бройлеры)',
            components: {
                butter: 7,
                flourWheat: 3,
                poultry: 115,
                tomatoPuree: 3,
                vegetables: 23,
            },
            macronutrients: {
                proteins: 10.83,
                fats: 13.76,
                carbohydrates: 4.17
            },
            caloricity: 167.31
        },
        {
            id: 'kids-11.6.2',
            name: 'Гуляш из отварной птицы (индейки)',
            components: {
                butter: 7,
                flourWheat: 3,
                poultry: 111,
                tomatoPuree: 3,
                vegetables: 23,
            },
            macronutrients: {
                proteins: 10.83,
                fats: 13.76,
                carbohydrates: 4.17
            },
            caloricity: 167.31
        }
    ]
}

const POULTRY_PILAFF: IDish = {
    id: 'kids-11.7',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-11.7.1',
            name: 'Плов из птицы',
            components: {
                cereals: 46,
                oil: 10,
                poultry: 68,
                vegetables: 30,
            },
            macronutrients: {
                proteins: 7.27,
                fats: 9.43,
                carbohydrates: 15.99
            },
            caloricity: 170.85
        }
    ]
}

const BOILED_POULTRY_PILAFF: IDish = {
    id: 'kids-11.8',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-11.8.1',
            name: 'Плов из отварной птицы (цыплята-бройлеры)',
            components: {
                butter: 7.5,
                cereals: 51,
                poultry: 115,
                vegetables: 28.5
            },
            macronutrients: {
                proteins: 6.85,
                fats: 11.67,
                carbohydrates: 17.56
            },
            caloricity: 197.45
        },
        {
            id: 'kids-11.8.2',
            name: 'Плов из отварной птицы (индейки)',
            components: {
                butter: 7.5,
                cereals: 51,
                poultry: 111,
                vegetables: 28.5
            },
            macronutrients: {
                proteins: 6.85,
                fats: 11.67,
                carbohydrates: 17.56
            },
            caloricity: 197.45
        }
    ]
}

const STEAMED_POULTRY_CUTLETS: IDish = {
    id: 'kids-11.9',
    variants: [
        {
            id: 'kids-11.9.1',
            name: 'Биточки из птицы (паровые)',
            defaultOutput: 70,
            components: {
                breadWheat: 13,
                butter: 2,
                milkAndFermentedMilkProducts: 18,
                poultry: 54,
            },
            macronutrients: {
                proteins: 14.33,
                fats: 13.33,
                carbohydrates: 9.49
            },
            caloricity: 193.6
        },
        {
            id: 'kids-11.9.2',
            name: 'Биточки из птицы (паровые) с маслом сливочным',
            defaultOutput: 75,
            components: {
                breadWheat: 13,
                butter: 7,
                milkAndFermentedMilkProducts: 18,
                poultry: 54,
            },
            macronutrients: {
                proteins: 13.4,
                fats: 17.28,
                carbohydrates: 8.91
            },
            caloricity: 225.55
        },
        {
            id: 'kids-11.9.3',
            name: 'Биточки из птицы (паровые) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 13,
                butter: 4.5,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 68,
                poultry: 54,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 9.65,
                fats: 10.65,
                carbohydrates: 8.98
            },
            caloricity: 158.38
        }
    ]
}

const CHOPPED_CUTLETS_MADE_FROM_BROILER_CHICKENS_V1: IDish = {
    id: 'kids-11.10',
    variants: [
        {
            id: 'kids-11.10.1',
            name: 'Котлеты рубленые из цыплят-бройлеров (вариант 1)',
            defaultOutput: 70,
            components: {
                breadWheat: 18,
                butter: 4,
                milkAndFermentedMilkProducts: 17,
                potato: 51,
            },
            macronutrients: {
                proteins: 14.36,
                fats: 14.87,
                carbohydrates: 14.44
            },
            caloricity: 229.61
        },
        {
            id: 'kids-11.10.2',
            name: 'Котлеты рубленые из цыплят-бройлеров (вариант 1) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 18,
                butter: 6.5,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 67,
                potato: 51,
                sugar: 0.5,
            },
            macronutrients: {
                proteins: 9.9,
                fats: 11.15,
                carbohydrates: 13.68
            },
            caloricity: 183.92
        },
    ]
}

const CHOPPED_CUTLETS_MADE_FROM_BROILER_CHICKENS_V2: IDish = {
    id: 'kids-11.11',
    variants: [
        {
            id: 'kids-11.11.1',
            name: 'Котлеты рубленые из цыплят-бройлеров (вариант 2)',
            defaultOutput: 70,
            components: {
                breadWheat: 18,
                milkAndFermentedMilkProducts: 17,
                oil: 4,
                potato: 51,
            },
            macronutrients: {
                proteins: 14.33,
                fats: 15.74,
                carbohydrates: 14.4
            },
            caloricity: 237.39
        },
        {
            id: 'kids-11.11.2',
            name: 'Котлеты рубленые из цыплят-бройлеров (вариант 2) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 18,
                butter: 2.5,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 67,
                oil: 4,
                potato: 51,
                sugar: 0.5,
            },
            macronutrients: {
                proteins: 9.7,
                fats: 12.1,
                carbohydrates: 11.84
            },
            caloricity: 183.94
        },
    ]
}

const POULTRY_CUTLETS_ORIGINALNIYE: IDish = {
    id: 'kids-11.12',
    variants: [
        {
            id: 'kids-11.12.1',
            name: 'Котлеты из птицы "Оригинальные"',
            defaultOutput: 70,
            components: {
                breadWheat: 6,
                eggs: 6,
                oil: 8,
                poultry: 60,
                vegetables: 20.5,
            },
            macronutrients: {
                proteins: 14.34,
                fats: 18.09,
                carbohydrates: 8.03
            },
            caloricity: 236.79
        },
        {
            id: 'kids-11.12.1',
            name: 'Котлеты из птицы "Оригинальные" с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 6,
                butter: 2.5,
                eggs: 6,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                oil: 8,
                poultry: 60,
                sugar: 0.5,
                vegetables: 20.5,
            },
            macronutrients: {
                proteins: 10.78,
                fats: 13,
                carbohydrates: 8.14
            },
            caloricity: 179.3
        }
    ]
}

const POULTRY_CUTLETS_BAKED_W_MILK_SAUSE: IDish = {
    id: 'kids-11.13',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-11.13.1',
            name: 'Котлеты из птицы, запеченные с молочным соусом (с сыром пошехонским)',
            components: {
                breadWheat: 11,
                butter: 12,
                cheese: 4,
                flourWheat: 5,
                milkAndFermentedMilkProducts: 49,
                poultry: 53,
            },
            macronutrients: {
                proteins: 11.76,
                fats: 17.95,
                carbohydrates: 10.26
            },
            caloricity: 237.36
        },
        {
            id: 'kids-11.13.2',
            name: 'Котлеты из птицы, запеченные с молочным соусом (с сыром российским)',
            components: {
                breadWheat: 11,
                butter: 12,
                cheese: 4,
                flourWheat: 5,
                milkAndFermentedMilkProducts: 49,
                poultry: 53,
            },
            macronutrients: {
                proteins: 11.66,
                fats: 18.04,
                carbohydrates: 10.26
            },
            caloricity: 237.72
        },
        {
            id: 'kids-11.13.3',
            name: 'Котлеты из птицы, запеченные с молочным соусом (с сыром голландским)',
            components: {
                breadWheat: 11,
                butter: 12,
                cheese: 4,
                flourWheat: 5,
                milkAndFermentedMilkProducts: 49,
                poultry: 53,
            },
            macronutrients: {
                proteins: 11.76,
                fats: 17.96,
                carbohydrates: 10.26
            },
            caloricity: 237.43
        }
    ]
}

const CHOPPED_ZRAZY_MADE_FROM_POULTRY_FILLED_W_OMELET_W_VEGETABLES: IDish = {
    id: 'kids-11.14',
    variants: [
        {
            id: 'kids-11.14.1',
            name: 'Зразы рубленые из филе птицы с омлетом с овощами',
            defaultOutput: 70,
            components: {
                breadWheat: 8.5,
                butter: 1.2,
                eggs: 6,
                milkAndFermentedMilkProducts: 15.5,
                poultry: 46.5,
                vegetables: 9,
            },
            macronutrients: {
                proteins: 12.16,
                fats: 17.94,
                carbohydrates: 8.26
            },
            caloricity: 229.03
        },
        {
            id: 'kids-11.14.2',
            name: 'Зразы рубленые из филе птицы с омлетом с овощами с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 8.5,
                butter: 3.7,
                eggs: 6,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 65.5,
                poultry: 46.5,
                sugar: 0.5,
                vegetables: 9,
            },
            macronutrients: {
                proteins: 8.34,
                fats: 12.92,
                carbohydrates: 8.28
            },
            caloricity: 174.81
        }
    ]
}

const POULTRY_MEATBALLS: IDish = {
    id: 'kids-11.15',
    variants: [
        {
            id: 'kids-11.15.1',
            name: 'Фрикадельки из птицы',
            defaultOutput: 70,
            components: {
                breadWheat: 10,
                milkAndFermentedMilkProducts: 16,
                poultry: 56,
            },
            macronutrients: {
                proteins: 13.94,
                fats: 11.16,
                carbohydrates: 7.49
            },
            caloricity: 163.77
        },
        {
            id: 'kids-11.15.2',
            name: 'Фрикадельки из птицы с маслом сливочным',
            defaultOutput: 75,
            components: {
                breadWheat: 10,
                butter: 5,
                milkAndFermentedMilkProducts: 16,
                poultry: 56,
            },
            macronutrients: {
                proteins: 13.04,
                fats: 15.25,
                carbohydrates: 7.04
            },
            caloricity: 193.73
        },
        {
            id: 'kids-11.15.3',
            name: 'Фрикадельки из птицы с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 10,
                butter: 2.5,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 56,
                poultry: 56,
                sugar: 0.5,
            },
            macronutrients: {
                proteins: 9.42,
                fats: 9.38,
                carbohydrates: 7.72
            },
            caloricity: 140.5
        }
    ]
}

const TEFTELI_IZ_PTICY: IDish = {
    id: 'kids-11.16',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-11.16.1',
            name: 'Тефтели из птицы',
            components: {
                breadWheat: 8,
                flourWheat: 7,
                milkAndFermentedMilkProducts: 10,
                oil: 5,
                poultry: 43,
                sourCream: 10,
                vegetables: 10,
            },
            macronutrients: {
                proteins: 9.06,
                fats: 15.15,
                carbohydrates: 9.88
            },
            caloricity: 202.44
        }
    ]
}

const POULTRY_SOUFFLE_W_RICE_N_CHEESE: IDish = {
    id: 'kids-11.17',
    variants: [
        {
            id: 'kids-11.17.1',
            name: 'Суфле из птицы с рисом и сыром (пошехонским)',
            defaultOutput: 70,
            components: {
                butter: 3,
                cereals: 4.5,
                cheese: 2,
                eggs: 7,
                poultry: 110,
            },
            macronutrients: {
                proteins: 16.24,
                fats: 16.79,
                carbohydrates: 4.6
            },
            caloricity: 209.9
        },
        {
            id: 'kids-11.17.2',
            name: 'Суфле из птицы с рисом и сыром (пошехонским) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 8,
                cereals: 4.5,
                cheese: 2,
                eggs: 7,
                poultry: 110,
            },
            macronutrients: {
                proteins: 15.17,
                fats: 19.55,
                carbohydrates: 4.33
            },
            caloricity: 231.8
        },
        {
            id: 'kids-11.17.3',
            name: 'Суфле из птицы с рисом и сыром (пошехонским) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 5.5,
                cereals: 4.5,
                cheese: 2,
                eggs: 7,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                poultry: 110,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 10.51,
                fats: 12.36,
                carbohydrates: 5.42
            },
            caloricity: 161.13
        },
        {
            id: 'kids-11.17.4',
            name: 'Суфле из птицы с рисом и сыром (российским)',
            defaultOutput: 70,
            components: {
                butter: 3,
                cereals: 4.5,
                cheese: 2,
                eggs: 7,
                poultry: 110,
            },
            macronutrients: {
                proteins: 16.16,
                fats: 16.86,
                carbohydrates: 4.6
            },
            caloricity: 210.16
        },
        {
            id: 'kids-11.17.5',
            name: 'Суфле из птицы с рисом и сыром (российским) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 8,
                cereals: 4.5,
                cheese: 2,
                eggs: 7,
                poultry: 110,
            },
            macronutrients: {
                proteins: 15.11,
                fats: 19.6,
                carbohydrates: 4.33
            },
            caloricity: 232.04
        },
        {
            id: 'kids-11.17.6',
            name: 'Суфле из птицы с рисом и сыром (российским) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 5.5,
                cereals: 4.5,
                cheese: 2,
                eggs: 7,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                poultry: 110,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 10.47,
                fats: 12.4,
                carbohydrates: 5.42
            },
            caloricity: 161.3
        },
        {
            id: 'kids-11.17.7',
            name: 'Суфле из птицы с рисом и сыром (голландским)',
            defaultOutput: 70,
            components: {
                butter: 3,
                cereals: 4.5,
                cheese: 2,
                eggs: 7,
                poultry: 110,
            },
            macronutrients: {
                proteins: 16.24,
                fats: 16.8,
                carbohydrates: 4.6
            },
            caloricity: 209.9
        },
        {
            id: 'kids-11.17.8',
            name: 'Суфле из птицы с рисом и сыром (голландским) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 8,
                cereals: 4.5,
                cheese: 2,
                eggs: 7,
                poultry: 110,
            },
            macronutrients: {
                proteins: 15.17,
                fats: 19.55,
                carbohydrates: 4.33
            },
            caloricity: 231.9
        },
        {
            id: 'kids-11.17.9',
            name: 'Суфле из птицы с рисом и сыром (голландским) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 5.5,
                cereals: 4.5,
                cheese: 2,
                eggs: 7,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                poultry: 110,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 10.51,
                fats: 12.37,
                carbohydrates: 5.42
            },
            caloricity: 161.16
        }
    ]
}

const POULTRY_PUDDING_W_VEGETABLES_N_CHEESE: IDish = {
    id: 'kids-11.18',
    variants: [
        {
            id: 'kids-11.18.1',
            name: 'Пудинг из птицы с овощами и сыром',
            defaultOutput: 200,
            components: {
                breadWheat: 5,
                butter: 11,
                cereals: 6,
                cheese: 5,
                eggs: 14,
                poultry: 191,
                sourCream: 6,
                vegetables: 103,
            },
            macronutrients: {
                proteins: 11.22,
                fats: 13.08,
                carbohydrates: 6.39
            },
            caloricity: 176.38
        },
        {
            id: 'kids-11.18.2',
            name: 'Пудинг из птицы с овощами и сыром с маслом сливочным',
            defaultOutput: 205,
            components: {
                breadWheat: 5,
                butter: 16,
                cereals: 6,
                cheese: 5,
                eggs: 14,
                poultry: 191,
                sourCream: 6,
                vegetables: 103,
            },
            macronutrients: {
                proteins: 10.95,
                fats: 14.53,
                carbohydrates: 6.25
            },
            caloricity: 188.5
        },
        {
            id: 'kids-11.18.3',
            name: 'Пудинг из птицы с овощами и сыром с соусом молочным',
            defaultOutput: 250,
            components: {
                breadWheat: 5,
                butter: 13.5,
                cereals: 6,
                cheese: 5,
                eggs: 14,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                poultry: 191,
                sourCream: 6,
                sugar: 0.5,
                vegetables: 103,
            },
            macronutrients: {
                proteins: 9.6,
                fats: 11.2,
                carbohydrates: 6.84
            },
            caloricity: 157.36
        }
    ]
}

const POULTRY_DUMPLINGS_V1: IDish = {
    id: 'kids-11.19',
    variants: [
        {
            id: 'kids-11.19.1',
            name: 'Кнели из птицы (вариант 1)',
            defaultOutput: 70,
            components: {
                butter: 3,
                cereals: 6,
                milkAndFermentedMilkProducts: 5,
                poultry: 67,
            },
            macronutrients: {
                proteins: 16.66,
                fats: 16.9,
                carbohydrates: 6.3
            },
            caloricity: 215.3
        },
        {
            id: 'kids-11.19.2',
            name: 'Кнели из птицы (вариант 1) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 8,
                cereals: 6,
                milkAndFermentedMilkProducts: 5,
                poultry: 67,
            },
            macronutrients: {
                proteins: 15.59,
                fats: 20.61,
                carbohydrates: 5.91
            },
            caloricity: 245.83
        },
        {
            id: 'kids-11.19.3',
            name: 'Кнели из птицы (вариант 1) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 5.5,
                cereals: 6,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 55,
                poultry: 67,
                sugar: 0.5,
            },
            macronutrients: {
                proteins: 11.03,
                fats: 13.83,
                carbohydrates: 7.12
            },
            caloricity: 181.15
        }
    ]
}

const POULTRY_DUMPLINGS_V2: IDish = {
    id: 'kids-11.20',
    variants: [
        {
            id: 'kids-11.20.1',
            name: 'Кнели из птицы (вариант 2)',
            defaultOutput: 70,
            components: {
                cereals: 6,
                milkAndFermentedMilkProducts: 5,
                oil: 3,
                poultry: 67,
            },
            macronutrients: {
                proteins: 16.64,
                fats: 17.56,
                carbohydrates: 6.24
            },
            caloricity: 221.11
        },
        {
            id: 'kids-11.20.2',
            name: 'Кнели из птицы (вариант 2) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                cereals: 6,
                milkAndFermentedMilkProducts: 5,
                oil: 3,
                poultry: 67,
            },
            macronutrients: {
                proteins: 15.56,
                fats: 21.23,
                carbohydrates: 5.88
            },
            caloricity: 251.25
        },
        {
            id: 'kids-11.20.3',
            name: 'Кнели из птицы (вариант 2) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 2.5,
                cereals: 6,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 55,
                oil: 3,
                poultry: 67,
                sugar: 0.5,
            },
            macronutrients: {
                proteins: 11.02,
                fats: 14.21,
                carbohydrates: 7.1
            },
            caloricity: 184.55
        }
    ]
}