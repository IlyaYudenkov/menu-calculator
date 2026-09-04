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