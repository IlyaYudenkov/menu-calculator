import type { IDish } from "@/model/dish.model";

export const FRIED_POULTRY: IDish = {
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

export const MINCED_POULTRY_CUTLETS: IDish = {
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

export const ZRAZY_CHOPPED_TURKEY: IDish = {
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

export const POTATO_CASSEROLE_W_POULTRY: IDish = {
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