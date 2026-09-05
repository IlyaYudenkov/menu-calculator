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