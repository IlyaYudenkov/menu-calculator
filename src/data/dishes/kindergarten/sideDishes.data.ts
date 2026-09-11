import type { IDish } from "@/model/dish.model";

const CRUMBLY_BUCKWHEAT_PORRIDGE: IDish = {
    id: 'kids-12.1',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-12.1.1',
            name: 'Каша рассыпчатая гречневая',
            components: {
                butter: 4,
                cereals: 61.4
            },
            macronutrients: {
                proteins: 4.6,
                fats: 3.13,
                carbohydrates: 22.9
            },
            caloricity: 141.37
        }
    ]
}

const CRUMBLY_PEARL_BARLEY_PORRIDGE: IDish = {
    id: 'kids-12.2',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-12.2.1',
            name: 'Каша рассыпчатая перловая',
            components: {
                butter: 4,
                cereals: 49.1
            },
            macronutrients: {
                proteins: 2.72,
                fats: 2.25,
                carbohydrates: 19.6
            },
            caloricity: 112.23
        }
    ]
}

const CRUMBLY_MILLET_PORRIDGE: IDish = {
    id: 'kids-12.3',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-12.3.1',
            name: 'Каша рассыпчатая пшенная',
            components: {
                butter: 4,
                cereals: 59
            },
            macronutrients: {
                proteins: 4.04,
                fats: 3.08,
                carbohydrates: 23.56
            },
            caloricity: 141.15
        }
    ]
}

const CRUMBLY_RICE_PORRIDGE: IDish = {
    id: 'kids-12.4',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-12.4.1',
            name: 'Каша рассыпчатая рисовая',
            components: {
                butter: 4,
                cereals: 52.6
            },
            macronutrients: {
                proteins: 2.2,
                fats: 2.27,
                carbohydrates: 22.6
            },
            caloricity: 122.1
        }
    ]
}

const VISCOUS_BUCKWHEAT_PORRIDGE: IDish = {
    id: 'kids-12.5',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-12.5.1',
            name: 'Каша вязкая гречневая',
            components: {
                butter: 4,
                cereals: 36.8
            },
            macronutrients: {
                proteins: 2.76,
                fats: 2.65,
                carbohydrates: 13.73
            },
            caloricity: 91.92
        }
    ]
}

const VISCOUS_PEARL_BARLEY_PORRIDGE: IDish = {
    id: 'kids-12.6',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-12.6.1',
            name: 'Каша вязкая перловая',
            components: {
                butter: 4,
                cereals: 32.7
            },
            macronutrients: {
                proteins: 1.81,
                fats: 2.15,
                carbohydrates: 13.1
            },
            caloricity: 80.7
        }
    ]
}

const VISCOUS_MILLET_PORRIDGE: IDish = {
    id: 'kids-12.7',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-12.7.1',
            name: 'Каша вязкая пшенная',
            components: {
                butter: 4,
                cereals: 36.8
            },
            macronutrients: {
                proteins: 2.52,
                fats: 2.65,
                carbohydrates: 14.7
            },
            caloricity: 94.8
        }
    ]
}

const VISCOUS_RICE_PORRIDGE: IDish = {
    id: 'kids-12.8',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-12.8.1',
            name: 'Каша вязкая рисовая',
            components: {
                butter: 4,
                cereals: 32.7
            },
            macronutrients: {
                proteins: 1.37,
                fats: 2.13,
                carbohydrates: 14.03
            },
            caloricity: 82.7
        }
    ]
}

const BOILED_PASTA_PRODUCTS: IDish = {
    id: 'kids-12.9',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-12.9.1',
            name: 'Макаронные изделия отварные',
            components: {
                butter: 5,
                pastaProducts: 51
            },
            macronutrients: {
                proteins: 3.16,
                fats: 2.75,
                carbohydrates: 21.35
            },
            caloricity: 125.56
        }
    ]
}

const BOILED_POTATOES: IDish = {
    id: 'kids-12.10',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-12.10.1',
            name: 'Картофель отварной',
            components: {
                butter: 5,
                potato: 150
            },
            macronutrients: {
                proteins: 1.8,
                fats: 2.77,
                carbohydrates: 14.7
            },
            caloricity: 88.27
        }
    ]
}

const MASHED_POTATOES: IDish = {
    id: 'kids-12.11',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-12.11.1',
            name: 'Пюре картофельное',
            components: {
                butter: 5,
                milkAndFermentedMilkProducts: 23,
                potato: 128
            },
            macronutrients: {
                proteins: 1.92,
                fats: 3.06,
                carbohydrates: 13.2
            },
            caloricity: 85.8
        }
    ]
}

const MASHED_POTATOES_W_CARROTS: IDish = {
    id: 'kids-12.12',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-12.12.1',
            name: 'Пюре картофельное с морковью',
            components: {
                butter: 3,
                milkAndFermentedMilkProducts: 19,
                potato: 108,
                vegetables: 29
            },
            macronutrients: {
                proteins: 2,
                fats: 2.15,
                carbohydrates: 12.65
            },
            caloricity: 77.7
        }
    ]
}

const VEGETABLES_IN_MILK_SAUSE: IDish = {
    id: 'kids-12.13',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-12.13.1',
            name: 'Овощи в молочном соусе',
            components: {
                butter: 2.5,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                potato: 33,
                sugar: 0.5,
                vegetables: 81
            },
            macronutrients: {
                proteins: 2.27,
                fats: 2.1,
                carbohydrates: 8.93
            },
            caloricity: 65.8
        }
    ]
}

const CARROTS_STEWED_IN_SOUR_CREAM_SAUSE: IDish = {
    id: 'kids-12.14',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-12.14.1',
            name: 'Морковь, тушенная в сметанном соусе',
            components: {
                butter: 4,
                flourWheat: 1.5,
                sourCream: 15,
                sugar: 1.5,
                vegetables: 147,
            },
            macronutrients: {
                proteins: 1.49,
                fats: 3.8,
                carbohydrates: 8.17
            },
            caloricity: 82.38
        }
    ]
}

const CARROTS_STEWED_WITH_PRUNES: IDish = {
    id: 'kids-12.15',
    generalOutput: 150,
    variants: [
        {
            id: 'kids-12.15.1',
            name: 'Морковь, тушенная с черносливом',
            components: {
                butter: 7.5,
                fruitsDried: 26.6,
                sugar: 4,
                vegetables: 127.5
            },
            macronutrients: {
                proteins: 1.56,
                fats: 2.51,
                carbohydrates: 21.4
            },
            caloricity: 122.66
        }
    ]
}