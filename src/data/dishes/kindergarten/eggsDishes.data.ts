import type { IDish } from "@/model/dish.model";

const EGG_PORRIDGE_V1: IDish = {
    id: 'kids-7.1',
    generalOutput: 70,
    variants: [
        {
            id: 'kids-7.1.1',
            name: 'Яичная кашка (вариант 1)',
            components: {
                butter: 3,
                eggs: 53,
                milkAndFermentedMilkProducts: 27
            },
            macronutrients: {
                proteins: 9.54,
                fats: 11.63,
                carbohydrates: 2.14
            },
            caloricity: 153.9
        }
    ]
}

const EGG_PORRIDGE_V2: IDish = {
    id: 'kids-7.2',
    generalOutput: 70,
    variants: [
        {
            id: 'kids-7.2.1',
            name: 'Яичная кашка (вариант 2)',
            components: {
                eggs: 53,
                milkAndFermentedMilkProducts: 27,
                oil: 3
            },
            macronutrients: {
                proteins: 9.53,
                fats: 12.27,
                carbohydrates: 2.11
            },
            caloricity: 159.7
        }
    ]
}

const OMELETTE_NATURAL: IDish = {
    id: 'kids-7.3',
    variants: [
        {
            id: 'kids-7.3.1',
            name: 'Омлет натуральный',
            defaultOutput: 70,
            components: {
                eggs: 53,
                milkAndFermentedMilkProducts: 20,
                oil: 3
            },
            macronutrients: {
                proteins: 9.3,
                fats: 12.1,
                carbohydrates: 1.7
            },
            caloricity: 155.03
        },
        {
            id: 'kids-7.3.2',
            name: 'Омлет натуральный с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                eggs: 53,
                milkAndFermentedMilkProducts: 20,
                oil: 3
            },
            macronutrients: {
                proteins: 8.68,
                fats: 16.1,
                carbohydrates: 1.63
            },
            caloricity: 189.57
        }
    ]
}

const OMELETTE_W_ONION_V1: IDish = {
    id: 'kids-7.4',
    variants: [
        {
            id: 'kids-7.4.1',
            name: 'Омлет с луком (вариант 1)',
            defaultOutput: 70,
            components: {
                eggs: 49,
                milkAndFermentedMilkProducts: 19,
                oil: 5,
                vegetables: 8
            },
            macronutrients: {
                proteins: 8.74,
                fats: 13.96,
                carbohydrates: 2.53
            },
            caloricity: 174.1
        },
        {
            id: 'kids-7.4.2',
            name: 'Омлет с луком с маслом сливочным (вариант 1)',
            defaultOutput: 75,
            components: {
                butter: 5,
                eggs: 49,
                milkAndFermentedMilkProducts: 19,
                oil: 5,
                vegetables: 8
            },
            macronutrients: {
                proteins: 8.19,
                fats: 17.87,
                carbohydrates: 2.41
            },
            caloricity: 207.39
        }
    ]
}

const OMELETTE_W_ONION_V2: IDish = {
    id: 'kids-7.5',
    variants: [
        {
            id: 'kids-7.5.1',
            name: 'Омлет с луком (вариант 2)',
            defaultOutput: 70,
            components: {
                butter: 5,
                eggs: 49,
                milkAndFermentedMilkProducts: 19,
                vegetables: 8
            },
            macronutrients: {
                proteins: 8.77,
                fats: 12.87,
                carbohydrates: 2.59
            },
            caloricity: 164.4
        },
        {
            id: 'kids-7.5.2',
            name: 'Омлет с луком с маслом сливочным (вариант 2)',
            defaultOutput: 75,
            components: {
                butter: 10,
                eggs: 49,
                milkAndFermentedMilkProducts: 19,
                vegetables: 8
            },
            macronutrients: {
                proteins: 8.21,
                fats: 16.85,
                carbohydrates: 2.45
            },
            caloricity: 198.32
        }
    ]
}

const OMELETTE_W_CHEESE: IDish = {
    id: 'kids-7.6',
    variants: [
        {
            id: 'kids-7.6.1',
            name: 'Омлет с сыром',
            defaultOutput: 70,
            components: {
                butter: 3,
                cheese: 10,
                eggs: 49,
                milkAndFermentedMilkProducts: 18,
            },
            macronutrients: {
                proteins: 11.89,
                fats: 14.1,
                carbohydrates: 1.6
            },
            caloricity: 184.8
        },
        {
            id: 'kids-7.6.2',
            name: 'Омлет с сыром с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 8,
                cheese: 10,
                eggs: 49,
                milkAndFermentedMilkProducts: 18,
            },
            macronutrients: {
                proteins: 11.12,
                fats: 17.99,
                carbohydrates: 1.51
            },
            caloricity: 217.36
        }
    ]
}

const OMELETTE_W_APPLES: IDish = {
    id: 'kids-7.7',
    variants: [
        {
            id: 'kids-7.7.1',
            name: 'Омлет с яблоками',
            defaultOutput: 95,
            components: {
                butter: 7,
                eggs: 49,
                fruits: 36,
                milkAndFermentedMilkProducts: 18,
            },
            macronutrients: {
                proteins: 6.47,
                fats: 11.12,
                carbohydrates: 4.53
            },
            caloricity: 146.71
        },
        {
            id: 'kids-7.7.2',
            name: 'Омлет с яблоками с маслом сливочным',
            defaultOutput: 100,
            components: {
                butter: 12,
                eggs: 49,
                fruits: 36,
                milkAndFermentedMilkProducts: 18,
            },
            macronutrients: {
                proteins: 6.17,
                fats: 14.19,
                carbohydrates: 4.34
            },
            caloricity: 173.03
        }
    ]
}

const OMELETTE_W_MEAT: IDish = {
    id: 'kids-7.8',
    variants: [
        {
            id: 'kids-7.8.1',
            name: 'Омлет с мясом',
            defaultOutput: 70,
            components: {
                butter: 1.5,
                eggs: 39,
                meat: 23,
                milkAndFermentedMilkProducts: 24,
            },
            macronutrients: {
                proteins: 12.84,
                fats: 8.99,
                carbohydrates: 1.83
            },
            caloricity: 141.73
        },
        {
            id: 'kids-7.8.2',
            name: 'Омлет с мясом с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 6.5,
                eggs: 39,
                meat: 23,
                milkAndFermentedMilkProducts: 24,
            },
            macronutrients: {
                proteins: 12.01,
                fats: 12.27,
                carbohydrates: 1.75
            },
            caloricity: 168.19
        }
    ]
}

const OMELETTE_W_SAUSAGE: IDish = {
    id: 'kids-7.9',
    variants: [
        {
            id: 'kids-7.9.1',
            name: 'Омлет с колбасой',
            defaultOutput: 70,
            components: {
                butter: 4,
                eggs: 43,
                milkAndFermentedMilkProducts: 16,
                sausageProducts: 18
            },
            macronutrients: {
                proteins: 10.21,
                fats: 16.03,
                carbohydrates: 1.4
            },
            caloricity: 194.3
        },
        {
            id: 'kids-7.9.2',
            name: 'Омлет с колбасой с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 9,
                eggs: 43,
                milkAndFermentedMilkProducts: 16,
                sausageProducts: 18
            },
            macronutrients: {
                proteins: 9.57,
                fats: 19.8,
                carbohydrates: 1.36
            },
            caloricity: 226.21
        }
    ]
}

const OMELETTE_W_SAUSAGES_V1: IDish = {
    id: 'kids-7.10',
    variants: [
        {
            id: 'kids-7.10.1',
            name: 'Омлет с сосисками (вариант 1)',
            defaultOutput: 70,
            components: {
                butter: 1,
                eggs: 43,
                milkAndFermentedMilkProducts: 16,
                oil: 3,
                sausageProducts: 18
            },
            macronutrients: {
                proteins: 10.04,
                fats: 16.93,
                carbohydrates: 1.74
            },
            caloricity: 203.34
        },
        {
            id: 'kids-7.10.2',
            name: 'Омлет с сосисками с маслом сливочным (вариант 1)',
            defaultOutput: 75,
            components: {
                butter: 6,
                eggs: 43,
                milkAndFermentedMilkProducts: 16,
                oil: 3,
                sausageProducts: 18
            },
            macronutrients: {
                proteins: 9.4,
                fats: 20.64,
                carbohydrates: 1.67
            },
            caloricity: 234.7
        }
    ]
}

const OMELETTE_W_SAUSAGES_V2: IDish = {
    id: 'kids-7.11',
    variants: [
        {
            id: 'kids-7.11.1',
            name: 'Омлет с сосисками (вариант 2)',
            defaultOutput: 70,
            components: {
                butter: 4,
                eggs: 43,
                milkAndFermentedMilkProducts: 16,
                sausageProducts: 18
            },
            macronutrients: {
                proteins: 10.06,
                fats: 16.27,
                carbohydrates: 1.77
            },
            caloricity: 197.53
        },
        {
            id: 'kids-7.11.2',
            name: 'Омлет с сосисками с маслом сливочным (вариант 2)',
            defaultOutput: 75,
            components: {
                butter: 9,
                eggs: 43,
                milkAndFermentedMilkProducts: 16,
                sausageProducts: 18
            },
            macronutrients: {
                proteins: 9.41,
                fats: 20.03,
                carbohydrates: 1.71
            },
            caloricity: 229.24
        }
    ]
}

const BAKED_OMELETTE_W_POTATOES: IDish = {
    id: 'kids-7.12',
    variants: [
        {
            id: 'kids-7.12.1',
            name: 'Омлет с картофелем (запеченный)',
            defaultOutput: 95,
            components: {
                eggs: 45,
                milkAndFermentedMilkProducts: 17,
                oil: 5,
                potato: 44.4,
                sausageProducts: 18
            },
            macronutrients: {
                proteins: 6.63,
                fats: 9.17,
                carbohydrates: 7.74
            },
            caloricity: 143.33
        },
        {
            id: 'kids-7.12.2',
            name: 'Омлет с картофелем (запеченный) с маслом сливочным',
            defaultOutput: 100,
            components: {
                butter: 5,
                eggs: 45,
                milkAndFermentedMilkProducts: 17,
                oil: 5,
                potato: 44.4,
                sausageProducts: 18
            },
            macronutrients: {
                proteins: 6.32,
                fats: 12.34,
                carbohydrates: 7.39
            },
            caloricity: 169.82
        }
    ]
}

const DRETCHENA: IDish = {
    id: 'kids-7.13',
    generalOutput: 70,
    variants: [
        {
            id: 'kids-7.13.1',
            name: 'Драчена',
            components: {
                butter: 3.5,
                eggs: 56,
                flourWheat: 4,
                milkAndFermentedMilkProducts: 18,
                sourCream: 7
            },
            macronutrients: {
                proteins: 10.49,
                fats: 14.1,
                carbohydrates: 5.47
            },
            caloricity: 194.46
        }
    ]
}