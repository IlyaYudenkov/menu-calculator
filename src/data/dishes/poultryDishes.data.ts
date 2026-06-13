import type { IDish } from "@/model/dish.model";

const FRIED_POULTRY: IDish = {
    id: '9.4',
    generalOutput: 50,
    variants: [
        {
            id: '9.4.1',
            name: 'Птица жареная (цыплята-бройлеры)',
            components: {
                poultry: 71,
                sourCream: 1.5,
                oil: 2.5
            },
            macronutrients: {
                proteins: 14.3,
                fats: 14.2,
                carbohydrates: 0.5
            },
            caloricity: 187
        },
        {
            id: '9.4.2',
            name: 'Птица жареная (куры)',
            components: {
                poultry: 75,
                sourCream: 1.5,
                oil: 2.5
            },
            macronutrients: {
                proteins: 17.4,
                fats: 18.4,
                carbohydrates: 0.9
            },
            caloricity: 239
        },
        {
            id: '9.4.3',
            name: 'Птица жареная (индейки)',
            components: {
                poultry: 71,
                sourCream: 1.5,
                oil: 2.5
            },
            macronutrients: {
                proteins: 19.7,
                fats: 22.3,
                carbohydrates: 0.1
            },
            caloricity: 280
        },
    ]
}

const MINCED_POULTRY_CUTLETS: IDish = {
    id: '9.5',
    generalOutput: 50,
    variants: [
        {
            id: '9.5.1',
            name: 'Котлеты рубленые из птицы (цыплята-бройлеры)',
            components: {
                breadWheat: 16,
                oil: 3,
                poultry: 37,
            },
            macronutrients: {
                proteins: 14.4,
                fats: 15.8,
                carbohydrates: 13.6
            },
            caloricity: 254
        },
        {
            id: '9.5.2',
            name: 'Котлеты рубленые из птицы (куры)',
            components: {
                breadWheat: 16,
                oil: 3,
                poultry: 39,
            },
            macronutrients: {
                proteins: 14.1,
                fats: 17.2,
                carbohydrates: 13.7
            },
            caloricity: 266
        },
        {
            id: '9.5.3',
            name: 'Котлеты рубленые из птицы (индейки)',
            components: {
                breadWheat: 16,
                oil: 3,
                poultry: 39,
            },
            macronutrients: {
                proteins: 14.9,
                fats: 19.4,
                carbohydrates: 13.2
            },
            caloricity: 287
        },
    ]
}

const ZRAZY_CHOPPED_TURKEY: IDish = {
    id: '9.6',
    generalOutput: 75,
    variants: [
        {
            id: '9.6.1',
            name: 'Зразы рубленые из индейки (на молоке)',
            components: {
                breadWheat: 15,
                cereals: 3,
                eggs: 8,
                meat: 5,
                milkAndFermentedMilkProducts: 13,
                oil: 8,
                poultry: 30,
                vegetables: 20,
            },
            macronutrients: {
                proteins: 11.3,
                fats: 24.5,
                carbohydrates: 15.6
            },
            caloricity: 328
        },
        {
            id: '9.6.2',
            name: 'Зразы рубленые из индейки (на воде)',
            components: {
                breadWheat: 15,
                cereals: 3,
                eggs: 8,
                meat: 5,
                oil: 8,
                poultry: 30,
                vegetables: 20,
            },
            macronutrients: {
                proteins: 11.3,
                fats: 24.5,
                carbohydrates: 15.6
            },
            caloricity: 328
        },
    ]
}

const CHOPPED_STEAMED_POULTRY_CHOPS: IDish = {
    id: '9.7',
    generalOutput: 50,
    variants: [
        {
            id: '9.7.1',
            name: 'Биточки рубленые из птицы паровые (цыплята-бройлеры)',
            components: {
                breadWheat: 9,
                poultry: 39
            },
            macronutrients: {
                proteins: 14.4,
                fats: 10.6,
                carbohydrates: 8.2
            },
            caloricity: 186
        },
        {
            id: '9.7.2',
            name: 'Биточки рубленые из птицы паровые (куры)',
            components: {
                breadWheat: 9,
                poultry: 39
            },
            macronutrients: {
                proteins: 14,
                fats: 12.2,
                carbohydrates: 8.4
            },
            caloricity: 199
        },
        {
            id: '9.7.3',
            name: 'Биточки рубленые из птицы паровые (индейки)',
            components: {
                breadWheat: 9,
                poultry: 39
            },
            macronutrients: {
                proteins: 14.9,
                fats: 14.5,
                carbohydrates: 7.9
            },
            caloricity: 222
        },
    ]
}

const MINCED_POULTRY_CUTLETS_BAKED_W_MILK_SAUSE: IDish = {
    id: '9.8',
    generalOutput: 70,
    variants: [
        {
            id: '9.8.1',
            name: 'Котлеты рубленые из птицы, запеченные с соусом молочным (на молоке)',
            components: {
                breadWheat: 8,
                butter: 8.25,
                cheese: 3,
                flourWheat: 3.25,
                milkAndFermentedMilkProducts: 34.5,
                poultry: 37,
            },
            macronutrients: {
                proteins: 11.4,
                fats: 17.6,
                carbohydrates: 7.4
            },
            caloricity: 236
        },
        {
            id: '9.8.2',
            name: 'Котлеты рубленые из птицы, запеченные с соусом молочным (на воде)',
            components: {
                breadWheat: 8,
                butter: 8.25,
                cheese: 3,
                flourWheat: 3.25,
                milkAndFermentedMilkProducts: 22.5,
                poultry: 37,
            },
            macronutrients: {
                proteins: 11.4,
                fats: 17.6,
                carbohydrates: 7.4
            },
            caloricity: 236
        }
    ]
}

const POULTRY_MEATBALLS: IDish = {
    id: '9.9',
    generalOutput: 50,
    variants: [
        {
            id: '9.9.1',
            name: 'Фрикадельки из птицы (из цыплят-бройлеров)',
            components: {
                breadWheat: 7.5,
                milkAndFermentedMilkProducts: 11.5,
                poultry: 39.5,
            },
            macronutrients: {
                proteins: 14.7,
                fats: 11.1,
                carbohydrates: 7.9
            },
            caloricity: 190
        },
        {
            id: '9.9.2',
            name: 'Фрикадельки из птицы (из кур)',
            components: {
                breadWheat: 7.5,
                milkAndFermentedMilkProducts: 11.5,
                poultry: 39.5,
            },
            macronutrients: {
                proteins: 14.4,
                fats: 12.6,
                carbohydrates: 8
            },
            caloricity: 203
        },
    ]
}

const POULTRY_STEWED_IN_SAUCE: IDish = {
    id: '9.10',
    variants: [
        {
            id: '9.10.1',
            defaultOutput: 100,
            name: 'Птица, тушенная в соусе (цыплята-бройлеры) выход 50/50',
            components: {
                butter: 1,
                flourWheat: 2.5,
                oil: 2,
                poultry: 71,
                sugar: 0.75,
                tomatoPuree: 5,
                vegetables: 5
            },
            macronutrients: {
                proteins: 7.8,
                fats: 8.4,
                carbohydrates: 3.3
            },
            caloricity: 120
        },
        {
            id: '9.10.2',
            defaultOutput: 100,
            name: 'Птица, тушенная в соусе (куры) выход 50/50',
            components: {
                butter: 1,
                flourWheat: 2.5,
                oil: 2,
                poultry: 75,
                sugar: 0.75,
                tomatoPuree: 5,
                vegetables: 5
            },
            macronutrients: {
                proteins: 9.3,
                fats: 10.8,
                carbohydrates: 3.5
            },
            caloricity: 148
        },
        {
            id: '9.10.3',
            defaultOutput: 100,
            name: 'Птица, тушенная в соусе (индейка) выход 50/50',
            components: {
                butter: 1,
                flourWheat: 2.5,
                oil: 2,
                poultry: 71,
                sugar: 0.75,
                tomatoPuree: 5,
                vegetables: 5
            },
            macronutrients: {
                proteins: 10.5,
                fats: 13,
                carbohydrates: 3.2
            },
            caloricity: 172
        },
        {
            id: '9.10.4',
            defaultOutput: 80,
            name: 'Птица, тушенная в соусе (цыплята-бройлеры) выход 50/30',
            components: {
                butter: 0.6,
                flourWheat: 1.5,
                oil: 2,
                poultry: 71,
                sugar: 0.45,
                tomatoPuree: 3,
                vegetables: 3
            },
            macronutrients: {
                proteins: 9.3,
                fats: 10,
                carbohydrates: 3.9
            },
            caloricity: 142
        },
        {
            id: '9.10.5',
            defaultOutput: 80,
            name: 'Птица, тушенная в соусе (куры) выход 50/30',
            components: {
                butter: 0.6,
                flourWheat: 1.5,
                oil: 2,
                poultry: 75,
                sugar: 0.45,
                tomatoPuree: 3,
                vegetables: 3
            },
            macronutrients: {
                proteins: 11.4,
                fats: 12.8,
                carbohydrates: 4.1
            },
            caloricity: 176
        },
        {
            id: '9.10.6',
            defaultOutput: 80,
            name: 'Птица, тушенная в соусе (индейка) выход 50/30',
            components: {
                butter: 0.6,
                flourWheat: 1.5,
                oil: 2,
                poultry: 71,
                sugar: 0.45,
                tomatoPuree: 3,
                vegetables: 3
            },
            macronutrients: {
                proteins: 12.5,
                fats: 15.6,
                carbohydrates: 3.7
            },
            caloricity: 205
        },
    ]
}

const POULTRY_STEWED_IN_SAUCE_W_VEGETABLES: IDish = {
    id: '9.11',
    generalOutput: 170,
    variants: [
        {
            id: '9.11.1',
            name: 'Птица, тушенная в соусе с овощами (цыплята-бройлеры)',
            components: {
                flourWheat: 3.13,
                oil: 7.25,
                potato: 55,
                poultry: 71,
                sugar: 0.94,
                tomatoPuree: 6.25,
                vegetables: 33.75,
            },
            macronutrients: {
                proteins: 5.2,
                fats: 7,
                carbohydrates: 8.2
            },
            caloricity: 133
        },
        {
            id: '9.11.2',
            name: 'Птица, тушенная в соусе с овощами (куры)',
            components: {
                flourWheat: 3.13,
                oil: 7.25,
                potato: 55,
                poultry: 75,
                sugar: 0.94,
                tomatoPuree: 6.25,
                vegetables: 33.75,
            },
            macronutrients: {
                proteins: 5.7,
                fats: 7.9,
                carbohydrates: 8.2
            },
            caloricity: 127
        },
        {
            id: '9.11.3',
            name: 'Птица, тушенная в соусе с овощами (индейка)',
            components: {
                flourWheat: 3.13,
                oil: 7.25,
                potato: 55,
                poultry: 71,
                sugar: 0.94,
                tomatoPuree: 6.25,
                vegetables: 33.75,
            },
            macronutrients: {
                proteins: 5.7,
                fats: 9.3,
                carbohydrates: 8
            },
            caloricity: 139
        },
    ]
}

const POULTRY_SOUFFLE: IDish = {
    id: '9.12',
    generalOutput: 55,
    variants: [
        {
            id: '9.12.1',
            name: 'Суфле из птицы (цыплята-бройлеры)',
            components: {
                butter: 4.45,
                eggs: 10,
                flourWheat: 1.95,
                milkAndFermentedMilkProducts: 13.5,
                poultry: 86
            },
            macronutrients: {
                proteins: 15.3,
                fats: 17.3,
                carbohydrates: 3.8
            },
            caloricity: 275
        },
        {
            id: '9.12.2',
            name: 'Суфле из птицы (куры)',
            components: {
                butter: 4.45,
                eggs: 10,
                flourWheat: 1.95,
                milkAndFermentedMilkProducts: 13.5,
                poultry: 99
            },
            macronutrients: {
                proteins: 18.4,
                fats: 21.8,
                carbohydrates: 4.2
            },
            caloricity: 287
        },
        {
            id: '9.12.3',
            name: 'Суфле из птицы (индейка)',
            components: {
                butter: 4.45,
                eggs: 10,
                flourWheat: 1.95,
                milkAndFermentedMilkProducts: 13.5,
                poultry: 83.5
            },
            macronutrients: {
                proteins: 18.4,
                fats: 21.8,
                carbohydrates: 4.2
            },
            caloricity: 287
        },
    ]
}

const POULTRY_SOUFFLE_W_RICE: IDish = {
    id: '9.13',
    generalOutput: 55,
    variants: [
        {
            id: '9.13.1',
            name: 'Суфле из птицы с рисом (цыплята-бройлеры)',
            components: {
                butter: 5,
                cereals: 3.5,
                cheese: 1.5,
                eggs: 6,
                poultry: 86
            },
            macronutrients: {
                proteins: 14.5,
                fats: 18.2,
                carbohydrates: 4.5
            },
            caloricity: 240
        },
        {
            id: '9.13.2',
            name: 'Суфле из птицы с рисом (куры)',
            components: {
                butter: 5,
                cereals: 3.5,
                cheese: 1.5,
                eggs: 6,
                poultry: 99
            },
            macronutrients: {
                proteins: 17.6,
                fats: 21.8,
                carbohydrates: 4.9
            },
            caloricity: 287
        },
        {
            id: '9.13.3',
            name: 'Суфле из птицы с рисом (индейка)',
            components: {
                butter: 5,
                cereals: 3.5,
                cheese: 1.5,
                eggs: 6,
                poultry: 83.5
            },
            macronutrients: {
                proteins: 17.6,
                fats: 21.8,
                carbohydrates: 4.9
            },
            caloricity: 287
        },
    ]
}

const POTATO_CASSEROLE_W_POULTRY: IDish = {
    id: '9.50', //ПОМЕНЯТЬ ID, КОГДА ВНЕСУ ВСЕ БЛЮДА ИЗ ПТИЦЫ
    generalOutput: 200,
    variants: [
        {
            id: '9.50.1',
            name: 'Запеканка картофельная с птицей (масло растительное)',
            components: {
                breadWheat: 4,
                oil: 5,
                potato: 192,
                poultry: 92,
                vegetables: 16,
            },
            macronutrients: {
                proteins: 10.4,
                fats: 5.3,
                carbohydrates: 16.4
            },
            caloricity: 155
        },
        {
            id: '9.50.2',
            name: 'Запеканка картофельная с птицей (масло сливочное)',
            components: {
                breadWheat: 4,
                butter: 2.5,
                oil: 2.5,
                potato: 192,
                poultry: 92,
                vegetables: 16,
            },
            macronutrients: {
                proteins: 10.4,
                fats: 5.3,
                carbohydrates: 16.4
            },
            caloricity: 155
        },
    ]
}

export const POULTRY_DISHES_ARRAY = [
    FRIED_POULTRY,
    MINCED_POULTRY_CUTLETS,
    ZRAZY_CHOPPED_TURKEY,
    CHOPPED_STEAMED_POULTRY_CHOPS,
    MINCED_POULTRY_CUTLETS_BAKED_W_MILK_SAUSE,
    POULTRY_MEATBALLS,
    POULTRY_STEWED_IN_SAUCE,
    POULTRY_STEWED_IN_SAUCE_W_VEGETABLES,
    POULTRY_SOUFFLE,
    POULTRY_SOUFFLE_W_RICE,
    POTATO_CASSEROLE_W_POULTRY,
]