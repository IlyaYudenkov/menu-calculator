import type { IDish } from "@/model/dish.model"

const BOILED_EGGS: IDish = {
    id: '5.1',
    generalOutput: 40,
    variants: [
        {
            id: '5.1.1',
            name: 'Яйца вареные',
            components: {
                eggs: 40,
            },
            macronutrients: {
                proteins: 11.9,
                fats: 10.1,
                carbohydrates: 0.6
            },
            caloricity: 141
        },
    ]

}

const OMELET_NATURAL: IDish = {
    id: '5.2',
    variants: [
        {
            id: '5.2.1',
            name: 'Омлет натуральный',
            defaultOutput: 105,
            components: {
                eggs: 80,
                milkAndFermentedMilkProducts: 30,
                oil: 5
            },
            macronutrients: {
                proteins: 9.5,
                fats: 12,
                carbohydrates: 1.6
            },
            caloricity: 152
        },
        {
            id: '5.2.2',
            name: 'Омлет натуральный с маслом сливочным',
            defaultOutput: 110,
            components: {
                butter: 5,
                eggs: 80,
                milkAndFermentedMilkProducts: 30,
                oil: 5
            },
            macronutrients: {
                proteins: 9.5,
                fats: 15.3,
                carbohydrates: 1.6
            },
            caloricity: 182
        },
    ]

}

const OMELET_W_ONION: IDish = {
    id: '5.3',
    variants: [
        {
            id: '5.3.1',
            name: 'Омлет с луком (репчатый лук)',
            defaultOutput: 113,
            components: {
                eggs: 80,
                milkAndFermentedMilkProducts: 30,
                oil: 8.7,
                vegetables: 13.3
            },
            macronutrients: {
                proteins: 9.3,
                fats: 14.1,
                carbohydrates: 2.7
            },
            caloricity: 174
        },
        {
            id: '5.3.2',
            name: 'Омлет с луком (репчатый лук) с маслом сливочным',
            defaultOutput: 118,
            components: {
                butter: 5,
                eggs: 80,
                milkAndFermentedMilkProducts: 30,
                oil: 8.7,
                vegetables: 13.3
            },
            macronutrients: {
                proteins: 8.9,
                fats: 16.9,
                carbohydrates: 2.5
            },
            caloricity: 198
        },
        {
            id: '5.3.3',
            name: 'Омлет с луком (зеленый лук)',
            defaultOutput: 113,
            components: {
                eggs: 80,
                milkAndFermentedMilkProducts: 30,
                oil: 8.7,
                vegetables: 6.7
            },
            macronutrients: {
                proteins: 9.3,
                fats: 14.1,
                carbohydrates: 2.7
            },
            caloricity: 174
        },
        {
            id: '5.3.4',
            name: 'Омлет с луком (зеленый лук) с маслом сливочным',
            defaultOutput: 118,
            components: {
                butter: 5,
                eggs: 80,
                milkAndFermentedMilkProducts: 30,
                oil: 8.7,
                vegetables: 6.7
            },
            macronutrients: {
                proteins: 8.9,
                fats: 16.9,
                carbohydrates: 2.5
            },
            caloricity: 198
        },
    ]

}

const OMELET_W_CHEESE: IDish = {
    id: '5.4',
    variants: [
        {
            id: '5.4.1',
            name: 'Омлет с сыром (на молоке)',
            defaultOutput: 115,
            components: {
                cheese: 15,
                eggs: 80,
                milkAndFermentedMilkProducts: 30,
                oil: 5,
            },
            macronutrients: {
                proteins: 12.3,
                fats: 14.1,
                carbohydrates: 1.7
            },
            caloricity: 182
        },
        {
            id: '5.4.2',
            name: 'Омлет с сыром (на молоке) с маслом сливочным',
            defaultOutput: 120,
            components: {
                butter: 5,
                cheese: 15,
                eggs: 80,
                milkAndFermentedMilkProducts: 30,
                oil: 5,
            },
            macronutrients: {
                proteins: 11.8,
                fats: 16.9,
                carbohydrates: 1.6
            },
            caloricity: 206
        },
        {
            id: '5.4.3',
            name: 'Омлет с сыром (на воде)',
            defaultOutput: 115,
            components: {
                cheese: 15,
                eggs: 80,
                oil: 5,
            },
            macronutrients: {
                proteins: 12.3,
                fats: 14.1,
                carbohydrates: 1.7
            },
            caloricity: 182
        },
        {
            id: '5.4.4',
            name: 'Омлет с сыром (на воде) с маслом сливочным',
            defaultOutput: 120,
            components: {
                butter: 5,
                cheese: 15,
                eggs: 80,
                oil: 5,
            },
            macronutrients: {
                proteins: 11.8,
                fats: 16.9,
                carbohydrates: 1.6
            },
            caloricity: 206
        },
    ]

}

const OMELET_W_APPLES: IDish = {
    id: '5.5',
    variants: [
        {
            id: '5.5.1',
            name: 'Омлет с яблоками',
            defaultOutput: 155,
            components: {
                butter: 8,
                eggs: 80,
                fruits: 59,
                milkAndFermentedMilkProducts: 30,
            },
            macronutrients: {
                proteins: 6.9,
                fats: 8.8,
                carbohydrates: 4.6
            },
            caloricity: 125
        },
        {
            id: '5.5.2',
            name: 'Омлет с яблоками с маслом сливочным',
            defaultOutput: 160,
            components: {
                butter: 13,
                eggs: 80,
                fruits: 59,
                milkAndFermentedMilkProducts: 30,
            },
            macronutrients: {
                proteins: 6.7,
                fats: 11.1,
                carbohydrates: 4.5
            },
            caloricity: 145
        },
    ]

}

const OMELET_W_MEAT_PRODUCTS: IDish = {
    id: '5.6',
    variants: [
        {
            id: '5.6.1',
            name: 'Омлет с мясными продуктами (колбаса вареная или сосиски, на молоке)',
            defaultOutput: 130,
            components: {
                eggs: 80,
                milkAndFermentedMilkProducts: 30,
                oil: 5,
                sausageProducts: 33,
            },
            macronutrients: {
                proteins: 10.8,
                fats: 12.8,
                carbohydrates: 1.5
            },
            caloricity: 164
        },
        {
            id: '5.6.2',
            name: 'Омлет с мясными продуктами (говядина, на молоке)',
            defaultOutput: 130,
            components: {
                eggs: 80,
                meat: 48,
                milkAndFermentedMilkProducts: 30,
                oil: 5,
            },
            macronutrients: {
                proteins: 10.8,
                fats: 12.8,
                carbohydrates: 1.5
            },
            caloricity: 164
        },
        {
            id: '5.6.3',
            name: 'Омлет с мясными продуктами (колбаса вареная или сосиски, на молоке) с маслом сливочным',
            defaultOutput: 135,
            components: {
                butter: 5,
                eggs: 80,
                milkAndFermentedMilkProducts: 30,
                oil: 5,
                sausageProducts: 33,
            },
            macronutrients: {
                proteins: 10.4,
                fats: 15.3,
                carbohydrates: 1.5
            },
            caloricity: 185
        },
        {
            id: '5.6.4',
            name: 'Омлет с мясными продуктами (говядина, на молоке) с маслом сливочным',
            defaultOutput: 135,
            components: {
                butter: 5,
                eggs: 80,
                meat: 48,
                milkAndFermentedMilkProducts: 30,
                oil: 5,
            },
            macronutrients: {
                proteins: 10.4,
                fats: 15.3,
                carbohydrates: 1.5
            },
            caloricity: 185
        },
        {
            id: '5.6.5',
            name: 'Омлет с мясными продуктами (колбаса вареная или сосиски, на воде)',
            defaultOutput: 130,
            components: {
                eggs: 80,
                oil: 5,
                sausageProducts: 33,
            },
            macronutrients: {
                proteins: 10.8,
                fats: 12.8,
                carbohydrates: 1.5
            },
            caloricity: 164
        },
        {
            id: '5.6.6',
            name: 'Омлет с мясными продуктами (говядина, на воде)',
            defaultOutput: 130,
            components: {
                eggs: 80,
                meat: 48,
                oil: 5,
            },
            macronutrients: {
                proteins: 10.8,
                fats: 12.8,
                carbohydrates: 1.5
            },
            caloricity: 164
        },
        {
            id: '5.6.7',
            name: 'Омлет с мясными продуктами (колбаса вареная или сосиски, на воде) с маслом сливочным',
            defaultOutput: 135,
            components: {
                butter: 5,
                eggs: 80,
                oil: 5,
                sausageProducts: 33,
            },
            macronutrients: {
                proteins: 10.4,
                fats: 15.3,
                carbohydrates: 1.5
            },
            caloricity: 185
        },
        {
            id: '5.6.8',
            name: 'Омлет с мясными продуктами (говядина, на воде) с маслом сливочным',
            defaultOutput: 135,
            components: {
                butter: 5,
                eggs: 80,
                meat: 48,
                oil: 5,
            },
            macronutrients: {
                proteins: 10.4,
                fats: 15.3,
                carbohydrates: 1.5
            },
            caloricity: 185
        },
    ]

}

const BACKED_OMELET_W_POTATOES: IDish = {
    id: '5.7',
    variants: [
        {
            id: '5.7.1',
            name: 'Омлет с картофелем запеченный',
            defaultOutput: 100,
            components: {
                eggs: 60,
                milkAndFermentedMilkProducts: 22.5,
                oil: 5,
                potato: 28,
            },
            macronutrients: {
                proteins: 8.4,
                fats: 10.6,
                carbohydrates: 5.6
            },
            caloricity: 151
        },
        {
            id: '5.7.2',
            name: 'Омлет с картофелем запеченный с маслом сливочным',
            defaultOutput: 105,
            components: {
                butter: 5,
                eggs: 60,
                milkAndFermentedMilkProducts: 22.5,
                oil: 5,
                potato: 28,
            },
            macronutrients: {
                proteins: 8,
                fats: 14,
                carbohydrates: 5.3
            },
            caloricity: 179
        },
    ]
}

const DRACHENA: IDish = {
    id: '5.8',
    generalOutput: 100,
    variants: [
        {
            id: '5.8.1',
            name: 'Драчена',
            components: {
                eggs: 80,
                flourWheat: 6,
                milkAndFermentedMilkProducts: 25,
                oil: 5,
                sourCream: 10,
            },
            macronutrients: {
                proteins: 11.1,
                fats: 14.9,
                carbohydrates: 5.6
            },
            caloricity: 200
        }
    ]
}

export const EGGS_DISHES_ARRAY: IDish[] = [
    BOILED_EGGS,
    OMELET_NATURAL,
    OMELET_W_ONION,
    OMELET_W_CHEESE,
    OMELET_W_APPLES,
    OMELET_W_MEAT_PRODUCTS,
    BACKED_OMELET_W_POTATOES,
    DRACHENA
]