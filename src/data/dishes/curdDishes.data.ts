import type { IDish } from "@/model/dish.model"

const VARENIKI_LENIVIE: IDish = {
    id: '6.1',
    generalOutput: 100,
    variants: [
        {
            id: '6.1.1',
            name: 'Вареники ленивые',
            components: {
                curd: 78,
                eggs: 5.7,
                flourWheat: 11,
                sugar: 5.7
            },
            macronutrients: {
                proteins: 14,
                fats: 6.9,
                carbohydrates: 13.6
            },
            caloricity: 173
        }
    ]
}

const SYRNIKI_IZ_TVOROGA: IDish = {
    id: '6.2',
    generalOutput: 100,
    variants: [
        {
            id: '6.2.1',
            name: 'Сырники из творога',
            components: {
                curd: 90,
                eggs: 3.3,
                flourWheat: 13.3,
                oil: 3.3,
                sugar: 10
            },
            macronutrients: {
                proteins: 15.8,
                fats: 10.5,
                carbohydrates: 19
            },
            caloricity: 234
        }
    ]
}

const SYRNIKI_IZ_TVOROGA_N_KARTOFELYA: IDish = {
    id: '6.3',
    generalOutput: 100,
    variants: [
        {
            id: '6.3.1',
            name: 'Сырники из творога и картофеля',
            components: {
                curd: 60,
                eggs: 4,
                flourWheat: 12.5,
                oil: 3,
                potato: 42.5
            },
            macronutrients: {
                proteins: 12.2,
                fats: 10.7,
                carbohydrates: 15.5
            },
            caloricity: 207
        }
    ]
}

const SYRNIKI_W_MORKOV: IDish = {
    id: '6.4',
    generalOutput: 100,
    variants: [
        {
            id: '6.4.1',
            name: 'Сырники с морковью',
            components: {
                butter: 1.5,
                cereals: 3,
                curd: 70,
                eggs: 4,
                flourWheat: 12,
                oil: 4.5,
                sugar: 8,
                vegetables: 22
            },
            macronutrients: {
                proteins: 13.2,
                fats: 11,
                carbohydrates: 19.4
            },
            caloricity: 229
        }
    ]
}

const BAKED_CURD_PUDDING: IDish = {
    id: '6.5',
    generalOutput: 100,
    variants: [
        {
            id: '6.5.1',
            name: 'Пудинг из творога запеченный',
            components: {
                breadWheat: 2.5,
                butter: 2.5,
                cereals: 7.5,
                curd: 75,
                eggs: 5,
                fruitsDried: 10,
                sourCream: 2.5,
                sugar: 7.5
            },
            macronutrients: {
                proteins: 13.6,
                fats: 8.4,
                carbohydrates: 20.6
            },
            caloricity: 212
        }
    ]
}

const CURD_CASSEROLE: IDish = {
    id: '6.6',
    generalOutput: 100,
    variants: [
        {
            id: '6.6.1',
            name: 'Запеканка из творога',
            components: {
                breadWheat: 3,
                cereals: 7,
                curd: 90,
                eggs: 2.7,
                oil: 3,
                sourCream: 3.5,
                sugar: 10
            },
            macronutrients: {
                proteins: 15.5,
                fats: 11.3,
                carbohydrates: 17
            },
            caloricity: 232
        }
    ]
}

export const CURD_DISHES_ARRAY: IDish[] = [
    VARENIKI_LENIVIE,
    SYRNIKI_IZ_TVOROGA,
    SYRNIKI_IZ_TVOROGA_N_KARTOFELYA,
    SYRNIKI_W_MORKOV,
    BAKED_CURD_PUDDING,
    CURD_CASSEROLE
]