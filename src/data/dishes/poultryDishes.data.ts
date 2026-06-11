import type { IDish } from "@/model/dish.model";

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