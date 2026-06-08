import type { IDish } from "@/model/dish.model"

export const VISCOUS_PORRIDGE_W_PRUNES_N_BUTTER: IDish = {
    id: '4.1',
    generalOutput: 130,
    variants: [
        {
            id: '4.1.1',
            name: 'Каша вязкая (пшенная) с черносливом и маслом',
            components: {
                butter: 5,
                cereals: 25,
                fruitsDried: 27,
                sugar: 2.5
            },
            macronutrients: {
                proteins: 2.6,
                fats: 3.4,
                carbohydrates: 27.2
            },
            caloricity: 150
        },
        {
            id: '4.1.2',
            name: 'Каша вязкая (пшеничная) с черносливом и маслом',
            components: {
                butter: 5,
                cereals: 25,
                fruitsDried: 27,
                sugar: 2.5
            },
            macronutrients: {
                proteins: 2.6,
                fats: 3,
                carbohydrates: 26.7
            },
            caloricity: 144
        },
        {
            id: '4.1.3',
            name: 'Каша вязкая (рисовая) с черносливом и маслом',
            components: {
                butter: 5,
                cereals: 22.5,
                fruitsDried: 27,
                sugar: 2.5
            },
            macronutrients: {
                proteins: 1.7,
                fats: 2.9,
                carbohydrates: 26.8
            },
            caloricity: 140
        }, {
            id: '4.1.4',
            name: 'Каша вязкая (хлопья "Геркулес") с черносливом и маслом',
            components: {
                butter: 5,
                cereals: 22.5,
                fruitsDried: 27,
                sugar: 2.5
            },
            macronutrients: {
                proteins: 2.3,
                fats: 3.8,
                carbohydrates: 23.3
            },
            caloricity: 137
        }
    ]
}

export const VISCOUS_PORRIDGE_W_CARROTS_N_BUTTER: IDish = {
    id: '4.2',
    generalOutput: 105,
    variants: [
        {
            id: '4.2.1',
            name: 'Каша вязкая (пшенная) с черносливом и маслом',
            components: {
                butter: 8.2,
                cereals: 22,
                milkAndFermentedMilkProducts: 34,
                sugar: 4,
                vegetables: 13.3
            },
            macronutrients: {
                proteins: 3.4,
                fats: 6.7,
                carbohydrates: 18.9
            },
            caloricity: 150
        },
        {
            id: '4.2.2',
            name: 'Каша вязкая (пшеничная) с черносливом и маслом',
            components: {
                butter: 5,
                cereals: 25,
                fruitsDried: 27,
                sugar: 2.5
            },
            macronutrients: {
                proteins: 3.4,
                fats: 6.4,
                carbohydrates: 18.2
            },
            caloricity: 144
        },
        {
            id: '4.2.3',
            name: 'Каша вязкая (овсяная) с черносливом и маслом',
            components: {
                butter: 5,
                cereals: 22.5,
                fruitsDried: 27,
                sugar: 2.5
            },
            macronutrients: {
                proteins: 3.2,
                fats: 7.2,
                carbohydrates: 15.6
            },
            caloricity: 140
        }
    ]
}

export const FRUIT_PILAF: IDish = {
    id: '4.4',
    generalOutput: 125,
    variants: [
        {
            id: '4.4.1',
            name: 'Плов фруктовый',
            components: {
                butter: 10,
                cereals: 34,
                fruitsDried: 29.5,
                vegetables: 26.2
            },
            macronutrients: {
                proteins: 2.9,
                fats: 5.4,
                carbohydrates: 32
            },
            caloricity: 187
        }
    ]
}

export const KRUPENNIK: IDish = {
    id: '4.5',
    generalOutput: 125,
    variants: [
        {
            id: '4.5.1',
            name: 'Крупенник (с крупой гречневой)',
            components: {
                breadWheat: 2.5,
                butter: 2.5,
                cereals: 40,
                curd: 37,
                eggs: 2.5,
                sourCream: 2.5,
                sugar: 5,

            },
            macronutrients: {
                proteins: 8.5,
                fats: 7.8,
                carbohydrates: 22.7
            },
            caloricity: 195
        },
        {
            id: '4.5.2',
            name: 'Крупенник (с крупой пшеничной)',
            components: {
                breadWheat: 2.5,
                butter: 2.5,
                cereals: 33.5,
                curd: 37,
                eggs: 2.5,
                sourCream: 2.5,
                sugar: 5,

            },
            macronutrients: {
                proteins: 7.7,
                fats: 7.1,
                carbohydrates: 19.7
            },
            caloricity: 173
        }
    ]
}

export const CASSEROLE_RICE_OR_MILLET_OR_SEMOLINA: IDish = {
    id: '4.6',
    generalOutput: 100,
    variants: [
        {
            id: '4.6.1',
            name: 'Запеканка рисовая',
            components: {
                breadWheat: 2,
                butter: 2,
                cereals: 22.8,
                eggs: 3.2,
                sourCream: 2,
                sugar: 4
            },
            macronutrients: {
                proteins: 2.1,
                fats: 5.6,
                carbohydrates: 19.3
            },
            caloricity: 136
        },
        {
            id: '4.6.2',
            name: 'Запеканка манная',
            components: {
                breadWheat: 2,
                butter: 2,
                cereals: 22.8,
                eggs: 3.2,
                sourCream: 2,
                sugar: 4
            },
            macronutrients: {
                proteins: 2.8,
                fats: 5.6,
                carbohydrates: 18.2
            },
            caloricity: 136
        },
        {
            id: '4.6.3',
            name: 'Запеканка пшенная',
            components: {
                breadWheat: 2,
                butter: 2,
                cereals: 26.4,
                eggs: 3.2,
                sourCream: 2,
                sugar: 4
            },
            macronutrients: {
                proteins: 3.3,
                fats: 5.7,
                carbohydrates: 22
            },
            caloricity: 153
        },
        {
            id: '4.6.4',
            name: 'Запеканка пшеничная',
            components: {
                breadWheat: 2,
                butter: 2,
                cereals: 26.4,
                eggs: 3.2,
                sourCream: 2,
                sugar: 4
            },
            macronutrients: {
                proteins: 3.3,
                fats: 5.7,
                carbohydrates: 19.4
            },
            caloricity: 142
        },
    ]
}

export const CASSEROLE_RICE_W_CURD: IDish = {
    id: '4.7',
    generalOutput: 100,
    variants: [
        {
            id: '4.7.1',
            name: 'Запеканка рисовая с творогом',
            components: {
                butter: 2,
                breadWheat: 2,
                cereals: 30,
                curd: 16.2,
                eggs: 4,
                sourCream: 2,
                sugar: 6
            },
            macronutrients: {
                proteins: 5,
                fats: 7,
                carbohydrates: 25.4
            },
            caloricity: 185
        }
    ]
}

export const CASSEROLE_W_FRESH_FRUITS: IDish = {
    id: '4.8',
    generalOutput: 125,
    variants: [
        {
            id: '4.8.1',
            name: 'Запеканка (пшенная) со свежими плодами',
            components: {
                breadWheat: 2,
                butter: 2.5,
                cereals: 27,
                eggs: 2,
                fruits: 15,
                milkAndFermentedMilkProducts: 25,
                sourCream: 2,
                sugar: 5
            },
            macronutrients: {
                proteins: 3.04,
                fats: 3.84,
                carbohydrates: 20.32
            },
            caloricity: 128
        },
        {
            id: '4.8.2',
            name: 'Запеканка (рисовая) со свежими плодами',
            components: {
                breadWheat: 2,
                butter: 2.5,
                cereals: 27,
                eggs: 2,
                fruits: 15,
                milkAndFermentedMilkProducts: 25,
                sourCream: 2,
                sugar: 5
            },
            macronutrients: {
                proteins: 2.4,
                fats: 3.92,
                carbohydrates: 20.72
            },
            caloricity: 128
        },
        {
            id: '4.8.3',
            name: 'Запеканка (манная) со свежими плодами',
            components: {
                breadWheat: 2,
                butter: 2.5,
                cereals: 27,
                eggs: 2,
                fruits: 15,
                milkAndFermentedMilkProducts: 25,
                sourCream: 2,
                sugar: 5,
            },
            macronutrients: {
                proteins: 3.12,
                fats: 3.92,
                carbohydrates: 19.92
            },
            caloricity: 127.2
        }
    ]
}

export const PUDDING_W_RICE_OR_SEMOLINA_OR_MILLET: IDish = {
    id: '4.9',
    generalOutput: 100,
    variants: [
        {
            id: '4.9.1',
            name: 'Пудинг рисовый',
            components: {
                breadWheat: 2.5,
                butter: 5,
                cereals: 25.5,
                eggs: 10,
                milkAndFermentedMilkProducts: 25,
                sourCream: 2.5,
                sugar: 7.5,
            },
            macronutrients: {
                proteins: 2.9,
                fats: 4.3,
                carbohydrates: 30.7
            },
            caloricity: 173
        },
        {
            id: '4.9.2',
            name: 'Пудинг манный',
            components: {
                breadWheat: 2.5,
                butter: 5,
                cereals: 25.5,
                eggs: 10,
                milkAndFermentedMilkProducts: 25,
                sourCream: 2.5,
                sugar: 7.5,
            },
            macronutrients: {
                proteins: 3.6,
                fats: 4.3,
                carbohydrates: 29.7
            },
            caloricity: 172
        },
        {
            id: '4.9.3',
            name: 'Пудинг пшенный',
            components: {
                breadWheat: 2.5,
                butter: 5,
                cereals: 29,
                eggs: 10,
                milkAndFermentedMilkProducts: 25,
                sourCream: 2.5,
                sugar: 7.5,
            },
            macronutrients: {
                proteins: 4.1,
                fats: 4.9,
                carbohydrates: 31.2
            },
            caloricity: 185
        },
    ]
}

export const CUE_BALL_OR_CUTLETS_OF_MILLET_OR_WHEAT_OR_PEARL_OR_BARLEY: IDish = {
    id: '4.10',
    generalOutput: 100,
    variants: [
        {
            id: '4.10.1',
            name: 'Биточки или котлеты пшенные',
            components: {
                breadWheat: 4,
                cereals: 32,
                oil: 5,
                sugar: 4
            },
            macronutrients: {
                proteins: 4,
                fats: 4,
                carbohydrates: 25.6
            },
            caloricity: 154
        },
        {
            id: '4.10.2',
            name: 'Биточки или котлеты пшеничные',
            components: {
                breadWheat: 4,
                cereals: 32,
                oil: 5,
                sugar: 4
            },
            macronutrients: {
                proteins: 4,
                fats: 3.3,
                carbohydrates: 24.8
            },
            caloricity: 144
        },
        {
            id: '4.10.3',
            name: 'Биточки или котлеты пшенные',
            components: {
                breadWheat: 4,
                cereals: 32,
                oil: 5,
                sugar: 4
            },
            macronutrients: {
                proteins: 2.8,
                fats: 3.3,
                carbohydrates: 25.6
            },
            caloricity: 143
        },
        {
            id: '4.10.4',
            name: 'Биточки или котлеты пшенные',
            components: {
                breadWheat: 4,
                cereals: 32,
                oil: 5,
                sugar: 4
            },
            macronutrients: {
                proteins: 3,
                fats: 3.3,
                carbohydrates: 25.5
            },
            caloricity: 143
        },
    ]
}

export const CUE_BALL_OR_CUTLETS_OF_SEMOLINA_OR_RICE: IDish = {//учитывал БЖУ со сметаной но выход без нее 
    id: '4.11',
    generalOutput: 100,
    variants: [
        {
            id: '4.11.1',
            name: 'Биточки или котлеты манные',
            components: {
                breadWheat: 4,
                cereals: 28,
                oil: 5,
                sugar: 4
            },
            macronutrients: {
                proteins: 3.1,
                fats: 6.1,
                carbohydrates: 20.8
            },
            caloricity: 150
        },
        {
            id: '4.11.2',
            name: 'Биточки или котлеты рисовые',
            components: {
                breadWheat: 4,
                cereals: 28,
                oil: 5,
                sugar: 4
            },
            macronutrients: {
                proteins: 2.3,
                fats: 6,
                carbohydrates: 21.6
            },
            caloricity: 150
        }
    ]
}

export const MANNIK: IDish = {
    id: '4.12',
    generalOutput: 100,
    variants: [
        {
            id: '4.12.1',
            name: 'Биточки или котлеты манные',
            components: {
                butter: 3,
                cereals: 26.7,
                eggs: 6.7,
                milkAndFermentedMilkProducts: 80,
                sugar: 6.7
            },
            macronutrients: {
                proteins: 5.5,
                fats: 4.9,
                carbohydrates: 25.6
            },
            caloricity: 168
        }
    ]
}

export const BEEN_OR_POTATO_CASSEROLE: IDish = {//учитывал выход  и БЖУ со сметаной
    id: '4.13',
    generalOutput: 115,
    variants: [
        {
            id: '4.13.1',
            name: 'Запеканка из бобовых и картофеля',
            components: {
                breadWheat: 2.2,
                eggs: 4.5,
                legumes: 21.4,
                oil: 4.5,
                potato: 50,
                sourCream: 2.2,
                vegetables: 9.4
            },
            macronutrients: {
                proteins: 5.7,
                fats: 7.3,
                carbohydrates: 16.6
            },
            caloricity: 155
        }
    ]
}

export const PASTA_W_CHEESE: IDish = { //учитывал выход  и БЖУ с сыром
    id: '4.14',
    generalOutput: 110,
    variants: [
        {
            id: '4.14.1',
            name: 'Макароны с сыром',
            components: {
                butter: 5,
                cheese: 10,
                pastaProducts: 33.3
            },
            macronutrients: {
                proteins: 5.2,
                fats: 5.5,
                carbohydrates: 19.3
            },
            caloricity: 148
        }
    ]
}

export const BAKED_PASTA_W_EGG: IDish = {//учитывал выход  и БЖУ с маслом сливочным 
    id: '4.16',
    generalOutput: 140,
    variants: [
        {
            id: '4.16.1',
            name: 'Макароны, запеченные с яйцом',
            components: {
                butter: 7,
                eggs: 20,
                milkAndFermentedMilkProducts: 25,
                oil: 0.5,
                pastaProducts: 35,
            },
            macronutrients: {
                proteins: 4.6,
                fats: 5.9,
                carbohydrates: 16.8
            },
            caloricity: 139
        }
    ]
}

export const BAKED_PASTA_W_CHEESE: IDish = {//учитывал выход  и БЖУ с маслом сливочным 
    id: '4.17',
    generalOutput: 105,
    variants: [
        {
            id: '4.17.1',
            name: 'Макароны, запеченные с яйцом',
            components: {
                butter: 5,
                cheese: 7.6,
                pastaProducts: 35,
            },
            macronutrients: {
                proteins: 5.1,
                fats: 5,
                carbohydrates: 21.2
            },
            caloricity: 150
        }
    ]
}

export const MAKARONNIK: IDish = {//учитывал выход  и БЖУ с маслом сливочным 
    id: '4.18',
    generalOutput: 105,
    variants: [
        {
            id: '4.18.1',
            name: 'Макаронник',
            components: {
                breadWheat: 2,
                butter: 7,
                eggs: 4,
                pastaProducts: 32,
                sugar: 4,
            },
            macronutrients: {
                proteins: 3.7,
                fats: 5.4,
                carbohydrates: 24.1
            },
            caloricity: 160
        }
    ]
}

export const LAPSHEVNIK_W_CURD: IDish = {
    id: '4.19',
    generalOutput: 125,
    variants: [
        {
            id: '4.19.1',
            name: 'Лапшевник',
            components: {
                breadWheat: 2,
                butter: 2,
                curd: 42,
                eggs: 4.2,
                pastaProducts: 30,
                sourCream: 2,
                sugar: 4.2,
            },
            macronutrients: {
                proteins: 8.24,
                fats: 4.64,
                carbohydrates: 19.92
            },
            caloricity: 154.4
        }
    ]
}

export const MUESLI_W_MILK: IDish = { //мюсли определил в крупы
    id: '4.20',
    generalOutput: 100,
    variants: [
        {
            id: '4.20.1',
            name: 'Мюсли ("Тропический ливень") с молоком',
            components: {
                cereals: 33,
                milkAndFermentedMilkProducts: 66,
                sugar: 2
            },
            macronutrients: {
                proteins: 5.1,
                fats: 3.9,
                carbohydrates: 22.8
            },
            caloricity: 140
        },
        {
            id: '4.20.2',
            name: 'Мюсли ("С добрым утром") с молоком',
            components: {
                cereals: 33,
                milkAndFermentedMilkProducts: 66,
                sugar: 2
            },
            macronutrients: {
                proteins: 5.1,
                fats: 3.6,
                carbohydrates: 22.9
            },
            caloricity: 139
        },
        {
            id: '4.20.3',
            name: 'Мюсли ("Ореховые") с молоком',
            components: {
                cereals: 33,
                milkAndFermentedMilkProducts: 66,
                sugar: 2
            },
            macronutrients: {
                proteins: 5.2,
                fats: 4.7,
                carbohydrates: 21.7
            },
            caloricity: 145
        },
        {
            id: '4.20.4',
            name: 'Мюсли ("Южные") с молоком',
            components: {
                cereals: 33,
                milkAndFermentedMilkProducts: 66,
                sugar: 2
            },
            macronutrients: {
                proteins: 5.3,
                fats: 4.7,
                carbohydrates: 21.9
            },
            caloricity: 146
        },
        {
            id: '4.20.5',
            name: 'Мюсли ("Изобилие") с молоком',
            components: {
                cereals: 33,
                milkAndFermentedMilkProducts: 66,
                sugar: 2
            },
            macronutrients: {
                proteins: 5.3,
                fats: 5,
                carbohydrates: 22
            },
            caloricity: 148
        }
    ]
}