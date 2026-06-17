import type { IDish } from "@/model/dish.model"

const CRUMBLY_PORRIDGE: IDish = {
    id: '10.1',
    generalOutput: 200,
    variants: [
        {
            id: '10.1.1',
            name: 'Каша рассыпчатая гречневая (быстроразваривающаяся)',
            components: {
                butter: 7,
                cereals: 92.4
            },
            macronutrients: {
                proteins: 5,
                fats: 3.7,
                carbohydrates: 24.3
            },
            caloricity: 151
        },
        {
            id: '10.1.2',
            name: 'Каша рассыпчатая гречневая (поджаренная)',
            components: {
                butter: 7,
                cereals: 80.9
            },
            macronutrients: {
                proteins: 5,
                fats: 3.7,
                carbohydrates: 24.3
            },
            caloricity: 151
        },
        {
            id: '10.1.3',
            name: 'Каша рассыпчатая рисовая',
            components: {
                butter: 7,
                cereals: 69.26
            },
            macronutrients: {
                proteins: 2.3,
                fats: 2.8,
                carbohydrates: 24.2
            },
            caloricity: 131
        },
        {
            id: '10.1.4',
            name: 'Каша рассыпчатая ячневая',
            components: {
                butter: 7,
                cereals: 64.6
            },
            macronutrients: {
                proteins: 3.1,
                fats: 2.8,
                carbohydrates: 20.7
            },
            caloricity: 120
        },
        {
            id: '10.1.5',
            name: 'Каша рассыпчатая перловая',
            components: {
                butter: 7,
                cereals: 64.6
            },
            macronutrients: {
                proteins: 2.9,
                fats: 2.8,
                carbohydrates: 20.8
            },
            caloricity: 120
        },
        {
            id: '10.1.6',
            name: 'Каша рассыпчатая кукурузная',
            components: {
                butter: 7,
                cereals: 64.6
            },
            macronutrients: {
                proteins: 2.9,
                fats: 2.8,
                carbohydrates: 20.8
            },
            caloricity: 120
        },
        {
            id: '10.1.7',
            name: 'Каша рассыпчатая пшенная',
            components: {
                butter: 7,
                cereals: 77.6
            },
            macronutrients: {
                proteins: 4.3,
                fats: 3.6,
                carbohydrates: 25.3
            },
            caloricity: 151
        },
        {
            id: '10.1.8',
            name: 'Каша рассыпчатая пшеничная',
            components: {
                butter: 7,
                cereals: 77.6
            },
            macronutrients: {
                proteins: 4.3,
                fats: 2.8,
                carbohydrates: 23.9
            },
            caloricity: 138
        }
    ]
}

const VISCOUS_PORRIDGE: IDish = {
    id: '10.2',
    generalOutput: 200,
    variants: [
        {
            id: '10.2.1',
            name: 'Каша вязкая гречневая',
            components: {
                butter: 7,
                cereals: 48.5
            },
            macronutrients: {
                proteins: 3,
                fats: 3,
                carbohydrates: 14.6
            },
            caloricity: 97
        },
        {
            id: '10.2.2',
            name: 'Каша вязкая пшенная, пшеничная',
            components: {
                butter: 7,
                cereals: 48.5
            },
            macronutrients: {
                proteins: 2.7,
                fats: 3.1,
                carbohydrates: 15.6
            },
            caloricity: 101
        },
        {
            id: '10.2.3',
            name: 'Каша вязкая овсяная',
            components: {
                butter: 7,
                cereals: 48.5
            },
            macronutrients: {
                proteins: 2.6,
                fats: 3.8,
                carbohydrates: 11.7
            },
            caloricity: 91
        },
        {
            id: '10.2.4',
            name: 'Каша вязкая рисовая',
            components: {
                butter: 7,
                cereals: 43.06
            },
            macronutrients: {
                proteins: 1.4,
                fats: 2.7,
                carbohydrates: 14.9
            },
            caloricity: 90
        },
        {
            id: '10.2.5',
            name: 'Каша вязкая перловая',
            components: {
                butter: 7,
                cereals: 43.06
            },
            macronutrients: {
                proteins: 2,
                fats: 2.5,
                carbohydrates: 13.8
            },
            caloricity: 86
        },
        {
            id: '10.2.6',
            name: 'Каша вязкая ячневая',
            components: {
                butter: 7,
                cereals: 43.06
            },
            macronutrients: {
                proteins: 2.1,
                fats: 2.7,
                carbohydrates: 13.8
            },
            caloricity: 88
        },
        {
            id: '10.2.7',
            name: 'Каша вязкая манная',
            components: {
                butter: 7,
                cereals: 43.06
            },
            macronutrients: {
                proteins: 2.1,
                fats: 2.7,
                carbohydrates: 14.1
            },
            caloricity: 89
        },
        {
            id: '10.2.8',
            name: 'Каша вязкая из хлопьев "Геркулес"',
            components: {
                butter: 7,
                cereals: 43.06
            },
            macronutrients: {
                proteins: 2.3,
                fats: 3.7,
                carbohydrates: 10.4
            },
            caloricity: 84
        },
        {
            id: '10.2.9',
            name: 'Каша вязкая кукурузная',
            components: {
                butter: 7,
                cereals: 55.3
            },
            macronutrients: {
                proteins: 2.3,
                fats: 3.7,
                carbohydrates: 10.4
            },
            caloricity: 84
        },
        {
            id: '10.2.10',
            name: 'Каша вязкая гречневая на молоке',
            components: {
                butter: 7,
                cereals: 48.5,
                milkAndFermentedMilkProducts: 93.12,
                sugar: 15
            },
            macronutrients: {
                proteins: 3,
                fats: 3,
                carbohydrates: 14.6
            },
            caloricity: 97
        },
        {
            id: '10.2.11',
            name: 'Каша вязкая пшенная, пшеничная на молоке',
            components: {
                butter: 7,
                cereals: 48.5,
                milkAndFermentedMilkProducts: 93.12,
                sugar: 15
            },
            macronutrients: {
                proteins: 2.7,
                fats: 3.1,
                carbohydrates: 15.6
            },
            caloricity: 101
        },
        {
            id: '10.2.12',
            name: 'Каша вязкая овсяная на молоке',
            components: {
                butter: 7,
                cereals: 48.5,
                milkAndFermentedMilkProducts: 93.12,
                sugar: 15
            },
            macronutrients: {
                proteins: 2.6,
                fats: 3.8,
                carbohydrates: 11.7
            },
            caloricity: 91
        },
        {
            id: '10.2.13',
            name: 'Каша вязкая рисовая на молоке',
            components: {
                butter: 7,
                cereals: 43.06,
                milkAndFermentedMilkProducts: 95.5,
                sugar: 15
            },
            macronutrients: {
                proteins: 1.4,
                fats: 2.7,
                carbohydrates: 14.9
            },
            caloricity: 90
        },
        {
            id: '10.2.14',
            name: 'Каша вязкая перловая на молоке',
            components: {
                butter: 7,
                cereals: 43.06,
                milkAndFermentedMilkProducts: 95.5,
                sugar: 15
            },
            macronutrients: {
                proteins: 2,
                fats: 2.5,
                carbohydrates: 13.8
            },
            caloricity: 86
        },
        {
            id: '10.2.15',
            name: 'Каша вязкая ячневая на молоке',
            components: {
                butter: 7,
                cereals: 43.06,
                milkAndFermentedMilkProducts: 95.5,
                sugar: 15
            },
            macronutrients: {
                proteins: 2.1,
                fats: 2.7,
                carbohydrates: 13.8
            },
            caloricity: 88
        },
        {
            id: '10.2.16',
            name: 'Каша вязкая манная на молоке',
            components: {
                butter: 7,
                cereals: 43.06,
                milkAndFermentedMilkProducts: 95.5,
                sugar: 15
            },
            macronutrients: {
                proteins: 2.1,
                fats: 2.7,
                carbohydrates: 14.1
            },
            caloricity: 89
        },
        {
            id: '10.2.17',
            name: 'Каша вязкая из хлопьев "Геркулес" на молоке',
            components: {
                butter: 7,
                cereals: 43.06,
                milkAndFermentedMilkProducts: 95.5,
                sugar: 15
            },
            macronutrients: {
                proteins: 2.3,
                fats: 3.7,
                carbohydrates: 10.4
            },
            caloricity: 84
        },
        {
            id: '10.2.18',
            name: 'Каша вязкая кукурузная на молоке',
            components: {
                butter: 7,
                cereals: 55.3,
                milkAndFermentedMilkProducts: 89.64,
                sugar: 15
            },
            macronutrients: {
                proteins: 2.3,
                fats: 3.7,
                carbohydrates: 10.4
            },
            caloricity: 84
        },
    ]
}

const BOILED_RICE: IDish = {
    id: '10.3',
    generalOutput: 200,
    variants: [
        {
            id: '10.3.1',
            name: 'Рис отварной',
            components: {
                butter: 9,
                cereals: 72
            },
            macronutrients: {
                proteins: 2.5,
                fats: 3.6,
                carbohydrates: 21.9
            },
            caloricity: 130
        },
    ]
}

const POACHED_RICE: IDish = {
    id: '10.4',
    generalOutput: 200,
    variants: [
        {
            id: '10.4.1',
            name: 'Рис припущенный',
            components: {
                butter: 7,
                cereals: 70
            },
            macronutrients: {
                proteins: 2.4,
                fats: 2.6,
                carbohydrates: 23.8
            },
            caloricity: 128
        },
    ]
}

const VISCOUS_PORRIDGE_ARTEKOVSKAYA: IDish = {
    id: '10.5',
    generalOutput: 200,
    variants: [
        {
            id: '10.5.1',
            name: 'Каша вязкая "Артековская"',
            components: {
                butter: 16,
                cereals: 47.2,
                milkAndFermentedMilkProducts: 162,
                sugar: 5
            },
            macronutrients: {
                proteins: 4.2,
                fats: 2.6,
                carbohydrates: 19.2
            },
            caloricity: 117
        },
    ]
}

const RICE_W_VEGETABLES: IDish = {
    id: '10.6',
    generalOutput: 200,
    variants: [
        {
            id: '10.6.1',
            name: 'Рис с овощами',
            components: {
                butter: 20,
                cereals: 60,
                tomatoPuree: 6,
                vegetables: 25.8
            },
            macronutrients: {
                proteins: 2.4,
                fats: 6.7,
                carbohydrates: 20.9
            },
            caloricity: 154
        },
    ]
}

const BOILED_PASTA: IDish = {
    id: '10.7',
    generalOutput: 200,
    variants: [
        {
            id: '10.7.1',
            name: 'Макаронные изделия отварные',
            components: {
                butter: 7,
                pastaProducts: 67.9
            },
            macronutrients: {
                proteins: 3.4,
                fats: 2.9,
                carbohydrates: 20.2
            },
            caloricity: 120
        },
    ]
}

const BOILED_POTATOES: IDish = {
    id: '10.8',
    generalOutput: 200,
    variants: [
        {
            id: '10.8.1',
            name: 'Картофель отварной',
            components: {
                butter: 7,
                potato: 200,
            },
            macronutrients: {
                proteins: 1.9,
                fats: 2.9,
                carbohydrates: 14.9
            },
            caloricity: 93
        },
    ]
}

const MASHED_POTATOES: IDish = {
    id: '10.9',
    generalOutput: 200,
    variants: [
        {
            id: '10.9.1',
            name: 'Пюре картофельное',
            components: {
                butter: 7,
                milkAndFermentedMilkProducts: 30,
                potato: 171
            },
            macronutrients: {
                proteins: 2.1,
                fats: 3.3,
                carbohydrates: 13.4
            },
            caloricity: 92
        },
    ]
}

const MASHED_POTATOES_W_CARROTS: IDish = {
    id: '10.10',
    generalOutput: 200,
    variants: [
        {
            id: '10.10.1',
            name: 'Пюре картофельное с морковью',
            components: {
                butter: 4,
                milkAndFermentedMilkProducts: 25.4,
                potato: 144,
                vegetables: 38.6
            },
            macronutrients: {
                proteins: 2,
                fats: 2.1,
                carbohydrates: 12.6
            },
            caloricity: 77
        },
    ]
}

const FRIED_POTATOES: IDish = {
    id: '10.11',
    generalOutput: 200,
    variants: [
        {
            id: '10.11.1',
            name: 'Картофель жареный (из сырого)',
            components: {
                oil: 20,
                potato: 289.8,
            },
            macronutrients: {
                proteins: 2.8,
                fats: 9.5,
                carbohydrates: 18
            },
            caloricity: 172
        },
    ]
}

const VEGETABLES_IN_MILK_SAUSE: IDish = {
    id: '10.12',
    generalOutput: 200,
    variants: [
        {
            id: '10.12.1',
            name: 'Овощи в молочном соусе',
            components: {
                butter: 3.74,
                flourWheat: 3.74,
                milkAndFermentedMilkProducts: 34,
                potato: 40,
                sugar: 0.68,
                vegetables: 100,
            },
            macronutrients: {
                proteins: 2,
                fats: 1.8,
                carbohydrates: 8.3
            },
            caloricity: 57
        },
    ]
}

const BOILED_VEGETABLES: IDish = {
    id: '10.13',
    generalOutput: 200,
    variants: [
        {
            id: '10.13.1',
            name: 'Овощи (морковь) отварные',
            components: {
                butter: 7,
                vegetables: 210.8,
            },
            macronutrients: {
                proteins: 1.3,
                fats: 3,
                carbohydrates: 6.9
            },
            caloricity: 39
        },
        {
            id: '10.13.2',
            name: 'Овощи (капуста белокочанная свежая) отварные',
            components: {
                butter: 7,
                vegetables: 210.8,
            },
            macronutrients: {
                proteins: 1.8,
                fats: 3,
                carbohydrates: 4.5
            },
            caloricity: 52
        },
    ]
}

const BOILED_CORN: IDish = {
    id: '10.14',
    generalOutput: 200,
    variants: [
        {
            id: '10.14.1',
            name: 'Кукуруза отварная',
            components: {
                butter: 7,
                vegetables: 194,
            },
            macronutrients: {
                proteins: 2.1,
                fats: 2.9,
                carbohydrates: 10.9
            },
            caloricity: 78
        }
    ]
}

const BOILED_GREEN_PEA: IDish = {
    id: '10.15',
    generalOutput: 200,
    variants: [
        {
            id: '10.15.1',
            name: 'Зеленый горошек (консервированный) отварной',
            components: {
                butter: 7,
                vegetables: 194,
            },
            macronutrients: {
                proteins: 3,
                fats: 2.7,
                carbohydrates: 6.4
            },
            caloricity: 62
        },
        {
            id: '10.15.2',
            name: 'Зеленый горошек (быстрозамороженный) отварной',
            components: {
                butter: 7,
                vegetables: 210.8
            },
            macronutrients: {
                proteins: 3,
                fats: 2.7,
                carbohydrates: 6.4
            },
            caloricity: 62
        }
    ]
}

const STEAMED_VEGETABLES: IDish = {
    id: '10.16',
    generalOutput: 200,
    variants: [
        {
            id: '10.16.1',
            name: 'Овощи (морковь) припущенные',
            components: {
                butter: 7,
                flourWheat: 3,
                sugar: 3,
                vegetables: 206.6
            },
            macronutrients: {
                proteins: 1.2,
                fats: 2.4,
                carbohydrates: 6.7
            },
            caloricity: 53
        },
        {
            id: '10.16.2',
            name: 'Овощи (тыква) припущенные',
            components: {
                butter: 7,
                flourWheat: 3,
                sugar: 3,
                vegetables: 229
            },
            macronutrients: {
                proteins: 1.2,
                fats: 2.4,
                carbohydrates: 6.7
            },
            caloricity: 53
        },
        {
            id: '10.16.3',
            name: 'Овощи (кабачки) припущенные',
            components: {
                butter: 7,
                flourWheat: 3,
                sugar: 3,
                vegetables: 243.6
            },
            macronutrients: {
                proteins: 1.2,
                fats: 2.4,
                carbohydrates: 6.7
            },
            caloricity: 53
        },
        {
            id: '10.16.4',
            name: 'Овощи (капуста) припущенные',
            components: {
                butter: 7,
                flourWheat: 3,
                sugar: 3,
                vegetables: 211.2
            },
            macronutrients: {
                proteins: 1.2,
                fats: 2.4,
                carbohydrates: 6.7
            },
            caloricity: 53
        },
        {
            id: '10.16.5',
            name: 'Овощи (горошек зелёный быстрозамороженный) припущенные',
            components: {
                butter: 7,
                flourWheat: 3,
                sugar: 3,
                vegetables: 206.6
            },
            macronutrients: {
                proteins: 1.2,
                fats: 2.4,
                carbohydrates: 6.7
            },
            caloricity: 53
        },
        {
            id: '10.16.6',
            name: 'Овощи (горошек зеленый консервированный) припущенные',
            components: {
                butter: 7,
                flourWheat: 3,
                sugar: 3,
                vegetables: 190
            },
            macronutrients: {
                proteins: 1.2,
                fats: 2.4,
                carbohydrates: 6.7
            },
            caloricity: 53
        },

    ]
}

const CARROTS_STEWED_IN_SOUR_CREAM_SAUSE: IDish = {
    id: '10.17',
    generalOutput: 200,
    variants: [
        {
            id: '10.17.1',
            name: 'Морковь, тушенная в сметанном соусе',
            components: {
                butter: 5,
                flourWheat: 3,
                sourCream: 10,
                sugar: 2,
                vegetables: 196,
            },
            macronutrients: {
                proteins: 1.3,
                fats: 2.6,
                carbohydrates: 7.6
            },
            caloricity: 59
        },
    ]
}

const CARROTS_STEWED_W_PRUNES_OR_APPLES: IDish = {
    id: '10.18',
    generalOutput: 200,
    variants: [
        {
            id: '10.18.1',
            name: 'Морковь, тушенная с черносливом',
            components: {
                butter: 10,
                fruitsDried: 53.4,
                sugar: 5,
                vegetables: 170,
            },
            macronutrients: {
                proteins: 1.7,
                fats: 3.3,
                carbohydrates: 22.1
            },
            caloricity: 125
        },
        {
            id: '10.18.2',
            name: 'Морковь, тушенная с яблоками',
            components: {
                butter: 10,
                fruits: 40,
                sugar: 5,
                vegetables: 170,
            },
            macronutrients: {
                proteins: 1.7,
                fats: 3.3,
                carbohydrates: 22.1
            },
            caloricity: 125
        },
    ]
}

const STEWED_CABBAGE: IDish = {
    id: '10.19',
    generalOutput: 200,
    variants: [
        {
            id: '10.19.1',
            name: 'Капуста (белокочанная свежая) тушеная (масло растительное)',
            components: {
                flourWheat: 2.4,
                oil: 7,
                sugar: 6,
                tomatoPuree: 12,
                vegetables: 241.2,

            },
            macronutrients: {
                proteins: 2.4,
                fats: 3.2,
                carbohydrates: 9.5
            },
            caloricity: 76
        },
        {
            id: '10.19.2',
            name: 'Капуста (белокочанная свежая) тушеная (масло сливочное)',
            components: {
                butter: 7,
                flourWheat: 2.4,
                sugar: 6,
                tomatoPuree: 12,
                vegetables: 241.2,

            },
            macronutrients: {
                proteins: 2.4,
                fats: 3.2,
                carbohydrates: 9.5
            },
            caloricity: 76
        },
        {
            id: '10.19.3',
            name: 'Капуста (квашеная) тушеная (масло растительное)',
            components: {
                flourWheat: 2.4,
                oil: 7,
                sugar: 6,
                tomatoPuree: 12,
                vegetables: 212,

            },
            macronutrients: {
                proteins: 2.4,
                fats: 3.2,
                carbohydrates: 9.5
            },
            caloricity: 76
        },
        {
            id: '10.19.4',
            name: 'Капуста (квашеная) тушеная (масло сливочное)',
            components: {
                butter: 7,
                flourWheat: 2.4,
                sugar: 6,
                tomatoPuree: 12,
                vegetables: 212,

            },
            macronutrients: {
                proteins: 2.4,
                fats: 3.2,
                carbohydrates: 9.5
            },
            caloricity: 76
        },
    ]
}

const STEWED_CABBAGE_W_APPLES: IDish = {
    id: '10.20',
    generalOutput: 200,
    variants: [
        {
            id: '10.20.1',
            name: 'Капуста, тушенная с яблоками',
            components: {
                butter: 16,
                flourWheat: 2,
                fruits: 40,
                sugar: 3,
                vegetables: 210
            },
            macronutrients: {
                proteins: 2,
                fats: 5.3,
                carbohydrates: 8.4
            },
            caloricity: 89
        }
    ]
}

const FRIED_CABBAGE: IDish = {
    id: '10.21',
    generalOutput: 200,
    variants: [
        {
            id: '10.21.1',
            name: 'Капуста (белокочанная) жареная',
            components: {
                butter: 8,
                vegetables: 266.6
            },
            macronutrients: {
                proteins: 2.3,
                fats: 2.6,
                carbohydrates: 5.7
            },
            caloricity: 56
        },
        {
            id: '10.21.2',
            name: 'Капуста (кольраби) жареная',
            components: {
                butter: 8,
                vegetables: 357.2
            },
            macronutrients: {
                proteins: 2.3,
                fats: 2.6,
                carbohydrates: 5.7
            },
            caloricity: 56
        }
    ]
}

const BEETROOT_STEWED_IN_SOUR_CREAM: IDish = {
    id: '10.22',
    generalOutput: 200,
    variants: [
        {
            id: '10.22.1',
            name: 'Свекла, тушенная в сметанном соусе',
            components: {
                flourWheat: 2.5,
                sourCream: 25,
                sugar: 3,
                vegetables: 190,
            },
            macronutrients: {
                proteins: 1.8,
                fats: 2.4,
                carbohydrates: 9.2
            },
            caloricity: 66
        }
    ]
}

const VEGETABLES_STEW: IDish = {
    id: '10.23',
    generalOutput: 200,
    variants: [
        {
            id: '10.23.1',
            name: 'Рагу овощное',
            components: {
                butter: 3.6,
                flourWheat: 2.7,
                oil: 10,
                potato: 96.2,
                sugar: 0.6,
                tomatoPuree: 15,
                vegetables: 92.84
            },
            macronutrients: {
                proteins: 2,
                fats: 5.8,
                carbohydrates: 11.8
            },
            caloricity: 107
        }
    ]
}

export const SIDE_DISHES_ARRAY = [
    CRUMBLY_PORRIDGE,
    VISCOUS_PORRIDGE,
    BOILED_RICE,
    POACHED_RICE,
    VISCOUS_PORRIDGE_ARTEKOVSKAYA,
    RICE_W_VEGETABLES,
    BOILED_PASTA,
    BOILED_POTATOES,
    MASHED_POTATOES,
    MASHED_POTATOES_W_CARROTS,
    FRIED_POTATOES,
    VEGETABLES_IN_MILK_SAUSE,
    BOILED_VEGETABLES,
    BOILED_CORN,
    BOILED_GREEN_PEA,
    STEAMED_VEGETABLES,
    CARROTS_STEWED_IN_SOUR_CREAM_SAUSE,
    CARROTS_STEWED_W_PRUNES_OR_APPLES,
    STEWED_CABBAGE,
    STEWED_CABBAGE_W_APPLES,
    FRIED_CABBAGE,
    BEETROOT_STEWED_IN_SOUR_CREAM,
    VEGETABLES_STEW
]