import type { IDish } from "@/model/dish.model"

const CORN_N_CARROTS_STEWED_IN_SAUSE: IDish = {
    id: 'kids-5.1',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-5.1.1',
            name: 'Курукуза с морковью, припущенная в соусе',
            components: {
                butter: 7.5,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                sugar: 2,
                vegetables: 157,
            },
            macronutrients: {
                proteins: 1.97,
                fats: 3.46,
                carbohydrates: 9.2
            },
            caloricity: 80.2
        },
    ]
}

const CORN_BAKED_IN_SOUR_CREAM_SAUSE: IDish = {
    id: 'kids-5.2',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-5.2.1',
            name: 'Курукуза, запеченная в сметанном соусе',
            components: {
                butter: 5,
                cheese: 5,
                flourWheat: 2.8,
                sourCream: 27.5,
                vegetables: 160,
            },
            macronutrients: {
                proteins: 4.97,
                fats: 6.48,
                carbohydrates: 6.99
            },
            caloricity: 107.87
        },
    ]
}

const PEAS_IN_MILK_SAUSE: IDish = {
    id: 'kids-5.3',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-5.3.1',
            name: 'Бобовые в молочном соусе (горох)',
            components: {
                butter: 7,
                flourWheat: 2,
                legumes: 50.4,
                milkAndFermentedMilkProducts: 40,
            },
            macronutrients: {
                proteins: 7.7,
                fats: 4.46,
                carbohydrates: 17.36
            },
            caloricity: 142.86
        },
    ]
}

const BEANS_IN_MILK_SAUSE: IDish = {
    id: 'kids-5.4',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-5.4.1',
            name: 'Бобовые в молочном соусе (фасоль)',
            components: {
                butter: 7,
                flourWheat: 2,
                legumes: 50.4,
                milkAndFermentedMilkProducts: 40,
            },
            macronutrients: {
                proteins: 7.1,
                fats: 4.58,
                carbohydrates: 16.1
            },
            caloricity: 136.2
        },
    ]
}

const GREEN_PEAS_SOUFFLE: IDish = {
    id: 'kids-5.5',
    variants: [
        {
            id: 'kids-5.5.1',
            name: 'Суфле из зеленого горошка',
            defaultOutput: 200,
            components: {
                butter: 11.5,
                eggs: 20,
                flourWheat: 6.5,
                milkAndFermentedMilkProducts: 45,
                vegetables: 150,
            },
            macronutrients: {
                proteins: 4.09,
                fats: 5.85,
                carbohydrates: 7.47
            },
            caloricity: 100.14
        },
        {
            id: 'kids-5.5.2',
            name: 'Суфле из зеленого горошка с маслом сливочным',
            defaultOutput: 205,
            components: {
                butter: 16.5,
                eggs: 20,
                flourWheat: 6.5,
                milkAndFermentedMilkProducts: 45,
                vegetables: 150,
            },
            macronutrients: {
                proteins: 4,
                fats: 7.47,
                carbohydrates: 7.3
            },
            caloricity: 114.1
        },
    ]
}

const PEAS_N_POTATO_CASSEROLE: IDish = {
    id: 'kids-5.6',
    variants: [
        {
            id: 'kids-5.6.1',
            name: 'Запеканка из бобовых и картофеля (горох)',
            defaultOutput: 150,
            components: {
                breadWheat: 3,
                eggs: 7,
                legumes: 32,
                oil: 7,
                potato: 75,
                sourCream: 3,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 6.15,
                fats: 5.43,
                carbohydrates: 19.19
            },
            caloricity: 151.24
        },
        {
            id: 'kids-5.6.2',
            name: 'Запеканка из бобовых и картофеля со сметаной (горох)',
            defaultOutput: 165,
            components: {
                breadWheat: 3,
                eggs: 7,
                legumes: 32,
                oil: 7,
                potato: 75,
                sourCream: 18,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 5.59,
                fats: 5.55,
                carbohydrates: 17.44
            },
            caloricity: 134.5
        },
    ]
}

const BEANS_N_POTATO_CASSEROLE: IDish = {
    id: 'kids-5.7',
    variants: [
        {
            id: 'kids-5.7.1',
            name: 'Запеканка из бобовых и картофеля (фасоль)',
            defaultOutput: 150,
            components: {
                breadWheat: 3,
                eggs: 7,
                legumes: 32,
                oil: 7,
                potato: 75,
                sourCream: 3,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 5.77,
                fats: 5.51,
                carbohydrates: 18.38
            },
            caloricity: 147.01
        },
        {
            id: 'kids-5.7.2',
            name: 'Запеканка из бобовых и картофеля со сметаной (фасоль)',
            defaultOutput: 165,
            components: {
                breadWheat: 3,
                eggs: 7,
                legumes: 32,
                oil: 7,
                potato: 75,
                sourCream: 18,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 5.24,
                fats: 6,
                carbohydrates: 16.7
            },
            caloricity: 139.01
        }
    ]
}

export const BEANS_N_CORN_DISHES_ARRAY: IDish[] = [
    CORN_N_CARROTS_STEWED_IN_SAUSE,
    CORN_BAKED_IN_SOUR_CREAM_SAUSE,
    PEAS_IN_MILK_SAUSE,
    BEANS_IN_MILK_SAUSE,
    GREEN_PEAS_SOUFFLE,
    PEAS_N_POTATO_CASSEROLE,
    BEANS_N_POTATO_CASSEROLE
]