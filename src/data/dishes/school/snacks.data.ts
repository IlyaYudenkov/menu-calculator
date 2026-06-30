import type { IDish } from "../../../model/dish.model"

const SANDWICH_W_BUTTER: IDish = {
    id: '1.1',
    variants: [
        {
            id: '1.1.1',
            name: 'Бутерброд с маслом (15/20)',
            currentOutput: 35,
            components: {
                breadWheat: 20,
                butter: 15,
            },
            macronutrients: {
                proteins: 4.9,
                fats: 31.7,
                carbohydrates: 28
            },
            caloricity: 417
        },
        {
            id: '1.1.2',
            name: 'Бутерброд с маслом (10/20)',
            currentOutput: 30,
            components: {
                breadWheat: 20,
                butter: 10,
            },
            macronutrients: {
                proteins: 5.5,
                fats: 25,
                carbohydrates: 32.7
            },
            caloricity: 278
        }
    ]
}

const SANDWICH_W_JAM: IDish = {
    id: '1.2',
    generalOutput: 40,
    variants: [
        {
            id: '1.2.1',
            name: 'Бутерброд с джемом, повидлом',
            components: {
                breadWheat: 20,
                butter: 5,
                jam: 15,
            },
            macronutrients: {
                proteins: 4,
                fats: 9.5,
                carbohydrates: 24.3
            },
            caloricity: 199
        },
        {
            id: '1.2.2',
            name: 'Бутерброд с вареньем',
            components: {
                breadWheat: 20,
                butter: 5,
                jam: 15,
            },
            macronutrients: {
                proteins: 4.3,
                fats: 9.5,
                carbohydrates: 54.3
            },
            caloricity: 320
        },
        {
            id: '1.2.3',
            name: 'Бутерброд с медом',
            components: {
                breadWheat: 20,
                butter: 5,
                honey: 15,
            },
            macronutrients: {
                proteins: 4.3,
                fats: 9.5,
                carbohydrates: 54.3
            },
            caloricity: 320
        },
    ],
}

const SANDWICH_W_CHEESE: IDish = {
    id: '1.3',
    generalOutput: 40,
    variants: [
        {
            id: '1.3.1',
            name: 'Бутерброд с сыром',
            components: {
                breadWheat: 20,
                butter: 5,
                cheese: 15
            },
            macronutrients: {
                proteins: 14.3,
                fats: 19.8,
                carbohydrates: 24.3
            },
            caloricity: 332
        }
    ]
}

const SANDWICH_W_BOILED_MEAT_PRODUCTS: IDish = {
    id: '1.4',
    generalOutput: 40,
    variants: [
        {
            id: '1.4.1',
            name: 'Бутерброд отварными мясными продуктами (говядиной)',
            components: {
                breadWheat: 20,
                meat: 32,
            },
            macronutrients: {
                proteins: 18.8,
                fats: 2,
                carbohydrates: 24
            },
            caloricity: 189
        },
        {
            id: '1.4.2',
            name: 'Бутерброд отварными мясными продуктами (свининой)',
            components: {
                breadWheat: 20,
                meat: 33,
            },
            macronutrients: {
                proteins: 15,
                fats: 18.3,
                carbohydrates: 24
            },
            caloricity: 176 //бред
        },
        {
            id: '1.4.3',
            name: 'Бутерброд отварными мясными продуктами (телятина)',
            components: {
                breadWheat: 20,
                meat: 31,
            },
            macronutrients: {
                proteins: 17.8,
                fats: 1,
                carbohydrates: 24
            },
            caloricity: 176
        },
        {
            id: '1.4.4',
            name: 'Бутерброд отварными мясными продуктами (говяжий язык)',
            components: {
                breadWheat: 20,
                meat: 34,
            },
            macronutrients: {
                proteins: 16.3,
                fats: 8.5,
                carbohydrates: 24
            },
            caloricity: 238
        },
        {
            id: '1.4.5',
            name: 'Бутерброд отварными мясными продуктами (свиной язык)',
            components: {
                breadWheat: 20,
                meat: 34,
            },
            macronutrients: {
                proteins: 16.3,
                fats: 10.5,
                carbohydrates: 24
            },
            caloricity: 255
        }
    ]
}

const SANDWICH_W_MEAT_GASTRONOMIC_PRODUCTS: IDish = {
    id: '1.5',
    generalOutput: 45,
    variants: [
        {
            id: '1.5.1',
            name: 'Бутерброд с мясными гастрономическими продуктами (колбаса вареная)',
            components: {
                breadWheat: 20,
                sausageProducts: 20
            },
            macronutrients: {
                proteins: 10.3,
                fats: 11.5,
                carbohydrates: 24.8
            },
            caloricity: 244
        },
        {
            id: '1.5.2',
            name: 'Бутерброд с мясными гастрономическими продуктами (колбаса полукопченая)',
            components: {
                breadWheat: 20,
                sausageProducts: 20
            },
            macronutrients: {
                proteins: 11.3,
                fats: 19.5,
                carbohydrates: 24
            },
            caloricity: 317
        },
        {
            id: '1.5.3',
            name: 'Бутерброд с мясными гастрономическими продуктами (ветчина в оболочке)',
            components: {
                breadWheat: 20,
                meat: 20,
            },
            macronutrients: {
                proteins: 15.3,
                fats: 11,
                carbohydrates: 24
            },
            caloricity: 256
        }
    ]
}

const SANDWICH_W_HERRING: IDish = {
    id: '1.6',
    generalOutput: 45,
    variants: [
        {
            id: '1.6.1',
            name: 'Бутерброд с сельдью (атлантической)',
            components: {
                breadWheat: 20,
                butter: 5,
                fish: 20
            },
            macronutrients: {
                proteins: 11.1,
                fats: 12.2,
                carbohydrates: 21.6
            },
            caloricity: 240
        },
        {
            id: '1.6.2',
            name: 'Бутерброд с сельдью (тихоокеанской)',
            components: {
                breadWheat: 20,
                butter: 5,
                fish: 20
            },
            macronutrients: {
                proteins: 13.1,
                fats: 15.6,
                carbohydrates: 21.6
            },
            caloricity: 278
        }
    ]
}

const CLOSED_SANDWICH_W_MEAT_PRODUCTS: IDish = {
    id: '1.7',
    generalOutput: 40,
    variants: [
        {
            id: '1.7.1',
            name: 'Закрытый бутерброд с мясными продуктами (говядина)',
            components: {
                breadWheat: 20,
                meat: 32
            },
            macronutrients: {
                proteins: 14,
                fats: 1.6,
                carbohydrates: 34
            },
            caloricity: 208
        },
        {
            id: '1.7.2',
            name: 'Закрытый бутерброд с мясными продуктами (свинина)',
            components: {
                breadWheat: 20,
                meat: 33
            },
            macronutrients: {
                proteins: 11.9,
                fats: 10.4,
                carbohydrates: 34
            },
            caloricity: 277
        }
    ]
}

const CLOSED_SANDWICH_W_MEAT_GASTRONOMIC_PRODUCTS: IDish = {
    id: '1.8',
    generalOutput: 40,
    variants: [
        {
            id: '1.8.1',
            name: 'Закрытый бутерброд с мясными гастрономическими продуктами (колбаса вареная)',
            components: {
                breadWheat: 20,
                sausageProducts: 25
            },
            macronutrients: {
                proteins: 9.6,
                fats: 8.1,
                carbohydrates: 32.5
            },
            caloricity: 241
        },
        {
            id: '1.8.2',
            name: 'Закрытый бутерброд с мясными продуктами (колбаса полукопченая)',
            components: {
                breadWheat: 20,
                sausageProducts: 20
            },
            macronutrients: {
                proteins: 9.9,
                fats: 11.6,
                carbohydrates: 34
            },
            caloricity: 280
        }
    ]
}

const CLOSED_SANDWICH_W_CHEESE: IDish = {
    id: '1.9',
    generalOutput: 40,
    variants: [
        {
            id: '1.9.1',
            name: 'Закрытый бутерброд с сыром (российским)',
            components: {
                breadWheat: 50,
                butter: 10,
                cheese: 20
            },
            macronutrients: {
                proteins: 10.8,
                fats: 18.3,
                carbohydrates: 30.1
            },
            caloricity: 333
        },
        {
            id: '1.9.2',
            name: 'Закрытый бутерброд с сыром (голландским)',
            components: {
                breadWheat: 50,
                butter: 10,
                cheese: 20
            },
            macronutrients: {
                proteins: 11.5,
                fats: 7.6,
                carbohydrates: 30.1
            },
            caloricity: 325
        },
        {
            id: '1.9.3',
            name: 'Закрытый бутерброд с сыром (пошехонским)',
            components: {
                breadWheat: 50,
                butter: 10,
                cheese: 20
            },
            macronutrients: {
                proteins: 11.5,
                fats: 17.6,
                carbohydrates: 30.1
            },
            caloricity: 325
        },
        {
            id: '1.9.4',
            name: 'Закрытый бутерброд с сыром (плавленным)',
            components: {
                breadWheat: 50,
                butter: 10,
                cheese: 20
            },
            macronutrients: {
                proteins: 10.5,
                fats: 17.8,
                carbohydrates: 30.1
            },
            caloricity: 323
        }
    ]
}

const SANDWICH_W_CHOPPED_EGGS: IDish = {
    id: '1.10',
    generalOutput: 50,
    variants: [
        {
            id: '1.10.1',
            name: 'Бутерброд с рубленными яйцами',
            components: {
                breadWheat: 20,
                butter: 5,
                eggs: 25
            },
            macronutrients: {
                proteins: 9,
                fats: 12.6,
                carbohydrates: 17.8
            },
            caloricity: 220
        }
    ]
}

const SANDWICH_W_BACKED_CANNED_FISH: IDish = {
    id: '1.11',
    generalOutput: 65,
    variants: [
        {
            id: '1.11.1',
            name: 'Бутерброд с рыбными консервами запеченный',
            components: {
                breadWheat: 20,
                cheese: 10,
                fish: 30,
                mayonnaise: 10
            },
            macronutrients: {
                proteins: 15.5,
                fats: 15.2,
                carbohydrates: 13.8
            },
            caloricity: 254
        }
    ]
}

const SANDWICH_ZVICHAYNII: IDish = {
    id: '1.12',
    generalOutput: 48,
    variants: [
        {
            id: '1.12.1',
            name: 'Бутерброд "Звычайны"',
            components: {
                breadWheat: 20,
                butter: 5,
                cheese: 10,
                meat: 15
            },
            macronutrients: {
                proteins: 14.8,
                fats: 18.5,
                carbohydrates: 18.3
            },
            caloricity: 299
        }
    ]
}

const SANDWICH_W_BAKED_HAM: IDish = {
    id: '1.13',
    generalOutput: 53,
    variants: [
        {
            id: '1.13.1',
            name: 'Бутерброд с ветчиной запеченный',
            components: {
                breadWheat: 20,
                cheese: 10,
                meat: 20,
                vegetables: 5,
            },
            macronutrients: {
                proteins: 15.7,
                fats: 11.7,
                carbohydrates: 16.8
            },
            caloricity: 235
        }
    ]
}

const SANDWICH_W_BAKED_SAUSAGE: IDish = {
    id: '1.14',
    generalOutput: 40,
    variants: [
        {
            id: '1.14.1',
            name: 'Бутерброд с колбасой запеченный',
            components: {
                breadWheat: 15,
                cheese: 5,
                mayonnaise: 7,
                sausageProducts: 15
            },
            macronutrients: {
                proteins: 10.8,
                fats: 21,
                carbohydrates: 17.3
            },
            caloricity: 301
        }
    ]
}

const SANDWICH_OSENNII: IDish = {
    id: '1.15',
    generalOutput: 55,
    variants: [
        {
            id: '1.15.1',
            name: 'Бутерброд "Осенний"',
            components: {
                breadWheat: 20,
                cheese: 10,
                vegetables: 30
            },
            macronutrients: {
                proteins: 7.6,
                fats: 4.7,
                carbohydrates: 17.8
            },
            caloricity: 143
        }
    ]
}

const SANDWICH_KUPALLE: IDish = {
    id: '1.16',
    generalOutput: 45,
    variants: [
        {
            id: '1.16.1',
            name: 'Бутерброд "Купалле"',
            components: {
                breadWheat: 20,
                butter: 5,
                cheese: 23
            },
            macronutrients: {
                proteins: 12.9,
                fats: 16.7,
                carbohydrates: 16
            },
            caloricity: 266
        }
    ]
}

const SANDWICH_YABLOKO_BAKED: IDish = {
    id: '1.17',
    generalOutput: 40,
    variants: [
        {
            id: '1.17.1',
            name: 'Бутерброд "Яблоко" (запеченный)',
            components: {
                breadWheat: 20,
                fruits: 20,
                sugar: 3
            },
            macronutrients: {
                proteins: 3.8,
                fats: 1.5,
                carbohydrates: 34
            },
            caloricity: 165
        }
    ]
}

const SANDWICH_W_BAKED_SAUSAGE_N_CHEESE: IDish = {
    id: '1.18',
    generalOutput: 50,
    variants: [
        {
            id: '1.18.1',
            name: 'Бутерброд с колбасой полукопченной и сыром запеченный',
            components: {
                breadWheat: 20,
                butter: 5,
                cheese: 10,
                sausageProducts: 20
            },
            macronutrients: {
                proteins: 13.6,
                fats: 25.8,
                carbohydrates: 176
            },
            caloricity: 357
        }
    ]
}

const BUTTER_IN_PORTIONS: IDish = {
    id: '1.19',
    generalOutput: 10,
    variants: [
        {
            id: '1.19.1',
            name: 'Масло (порциями)',
            components: {
                butter: 10,
            },
            macronutrients: {
                proteins: 0.08,
                fats: 7.3,
                carbohydrates: 0.1
            },
            caloricity: 66
        }
    ]
}

const CHEESE_IN_PORTIONS: IDish = {
    id: '1.20',
    generalOutput: 30,
    variants: [
        {
            id: '1.20.1',
            name: 'Сыр порциями (российский)',
            components: {
                cheese: 10,
            },
            macronutrients: {
                proteins: 6.9,
                fats: 8.7,
                carbohydrates: 0
            },
            caloricity: 108
        },
        {
            id: '1.20.2',
            name: 'Сыр порциями (пошехонский, голландский)',
            components: {
                cheese: 10,
            },
            macronutrients: {
                proteins: 7.8,
                fats: 8,
                carbohydrates: 0
            },
            caloricity: 105
        },
        {
            id: '1.20.3',
            name: 'Сыр порциями (плавленный)',
            components: {
                cheese: 10,
            },
            macronutrients: {
                proteins: 6.6,
                fats: 8.1,
                carbohydrates: 0
            },
            caloricity: 102
        }
    ]
}

//SALADS
const SALAD_W_FRESH_CUCUMBERS: IDish = {
    id: '1.21',
    generalOutput: 100,
    variants: [
        {
            id: '1.21.1',
            name: 'Салат из свежих огурцов со сметаной',
            components: {
                sourCream: 20,
                vegetables: 81
            },
            macronutrients: {
                proteins: 1.1,
                fats: 4.1,
                carbohydrates: 2.2
            },
            caloricity: 50
        },
        {
            id: '1.21.2',
            name: 'Салат из свежих огурцов с маслом растительным',
            components: {
                oil: 11.1,
                vegetables: 90
            },
            macronutrients: {
                proteins: 0.6,
                fats: 11.1,
                carbohydrates: 1.7
            },
            caloricity: 109
        },
    ]
}

const SALAD_W_FRESH_TOMATOES: IDish = {
    id: '1.22',
    generalOutput: 100,
    variants: [
        {
            id: '1.22.1',
            name: 'Салат из свежих помидоров со сметаной',
            components: {
                sourCream: 20,
                vegetables: 81
            },
            macronutrients: {
                proteins: 1.5,
                fats: 4.1,
                carbohydrates: 3.7
            },
            caloricity: 59
        },
        {
            id: '1.22.2',
            name: 'Салат из свежих помидоров с маслом растительным',
            components: {
                oil: 11.1,
                vegetables: 90
            },
            macronutrients: {
                proteins: 1,
                fats: 11.2,
                carbohydrates: 3.4
            },
            caloricity: 118
        },
    ]
}

const SALAD_W_FRESH_TOMATOES_N_CUCUMBERS: IDish = {
    id: '1.23',
    generalOutput: 100,
    variants: [
        {
            id: '1.23.1',
            name: 'Салат из свежих помидоров и огурцов со сметаной',
            components: {
                sourCream: 20,
                vegetables: 81
            },
            macronutrients: {
                proteins: 1.4,
                fats: 4.1,
                carbohydrates: 3.1
            },
            caloricity: 55
        },
        {
            id: '1.23.2',
            name: 'Салат из свежих помидоров и огурцов с маслом растительным',
            components: {
                oil: 11.1,
                vegetables: 90
            },
            macronutrients: {
                proteins: 0.9,
                fats: 11.2,
                carbohydrates: 2.8
            },
            caloricity: 116
        },
    ]
}

const SALAD_SLUCH: IDish = {
    id: '1.24',
    generalOutput: 100,
    variants: [
        {
            id: '1.24.1',
            name: 'Салат "Случь"',
            components: {
                oil: 9,
                vegetables: 92
            },
            macronutrients: {
                proteins: 1.2,
                fats: 9.2,
                carbohydrates: 3.5
            },
            caloricity: 102
        }
    ]
}

const SALAD_SHKOLNIE_GODY: IDish = {
    id: '1.25',
    generalOutput: 100,
    variants: [
        {
            id: '1.25.1',
            name: 'Салат "Школьные годы"',
            components: {
                oil: 5,
                vegetables: 96
            },
            macronutrients: {
                proteins: 1.2,
                fats: 5.1,
                carbohydrates: 3.5
            },
            caloricity: 65
        }
    ]
}

const SALAD_BELOSNEZHKA: IDish = {
    id: '1.26',
    generalOutput: 100,
    variants: [
        {
            id: '1.26.1',
            name: 'Салат "Белоснежка"',
            components: {
                eggs: 14,
                oil: 7,
                sugar: 1,
                vegetables: 100.1
            },
            macronutrients: {
                proteins: 3.1,
                fats: 8.5,
                carbohydrates: 5.2
            },
            caloricity: 110
        }
    ]
}

const SALAD_CARROT_W_SUGAR: IDish = {
    id: '1.27',
    generalOutput: 100,
    variants: [
        {
            id: '1.27.1',
            name: 'Морковь с сахаром',
            components: {
                sugar: 5,
                vegetables: 96
            },
            macronutrients: {
                proteins: 1.3,
                fats: 0.1,
                carbohydrates: 11.9
            },
            caloricity: 51
        }
    ]
}

const SALAD_SVEZHEST: IDish = {
    id: '1.28',
    generalOutput: 100,
    variants: [
        {
            id: '1.28.1',
            name: 'Салат "Свежесть"',
            components: {
                fruits: 7,
                fruitsDried: 10,
                sugar: 10,
                vegetables: 74,
            },
            macronutrients: {
                proteins: 1.2,
                fats: 0.1,
                carbohydrates: 22.1
            },
            caloricity: 92
        }
    ]
}

const SALAD_CVETNOI: IDish = {
    id: '1.29',
    generalOutput: 100,
    variants: [
        {
            id: '1.29.1',
            name: 'Салат "Цветной"',
            components: {
                oil: 7.5,
                sugar: 3,
                vegetables: 89,
            },
            macronutrients: {
                proteins: 3,
                fats: 8.5,
                carbohydrates: 4.9
            },
            caloricity: 108
        }
    ]
}

const SALAD_VOSTORG: IDish = {
    id: '1.30',
    generalOutput: 100,
    variants: [
        {
            id: '1.30.1',
            name: 'Салат "Восторг"',
            components: {
                fruits: 25,
                oil: 5,
                sugar: 3,
                vegetables: 68,
            },
            macronutrients: {
                proteins: 1.4,
                fats: 5.2,
                carbohydrates: 9.3
            },
            caloricity: 88
        }
    ]
}

const SALAD_METELKA: IDish = {
    id: '1.31',
    generalOutput: 100,
    variants: [
        {
            id: '1.31.1',
            name: 'Салат "Метелка"',
            components: {
                fruits: 41,
                vegetables: 60,
            },
            macronutrients: {
                proteins: 1.1,
                fats: 0.2,
                carbohydrates: 7.1
            },
            caloricity: 34
        }
    ]
}

const SALAD_VITAMINNII: IDish = {
    id: '1.32',
    generalOutput: 100,
    variants: [
        {
            id: '1.32.1',
            name: 'Салат витаминный со сметаной',
            components: {
                fruits: 4.2,
                sourCream: 15,
                sugar: 5,
                vegetables: 80
            },
            macronutrients: {
                proteins: 1.9,
                fats: 3.1,
                carbohydrates: 10.9
            },
            caloricity: 78
        },
        {
            id: '1.32.2',
            name: 'Салат витаминный с маслом растительным',
            components: {
                fruits: 4.4,
                oil: 10.5,
                sugar: 5.3,
                vegetables: 84.2
            },
            macronutrients: {
                proteins: 1.5,
                fats: 10.6,
                carbohydrates: 10.9
            },
            caloricity: 145
        }
    ]
}

const SALAD_W_WHITE_CABBAGE_N_OIL: IDish = {
    id: '1.33',
    generalOutput: 100,
    variants: [
        {
            id: '1.33.1',
            name: 'Салат из белокочанной капусты с маслом растительным',
            components: {
                oil: 5,
                sugar: 5,
                vegetables: 135.4
            },
            macronutrients: {
                proteins: 2.4,
                fats: 5.1,
                carbohydrates: 11.3
            },
            caloricity: 101
        }
    ]
}

const SALAD_W_WHITE_CABBAGE_N_CUCUMBERS: IDish = {
    id: '1.34',
    generalOutput: 100,
    variants: [
        {
            id: '1.34.1',
            name: 'Салат из белокочанной капусты с огурцами',
            components: {
                oil: 5,
                sugar: 5,
                vegetables: 91
            },
            macronutrients: {
                proteins: 1.4,
                fats: 5.1,
                carbohydrates: 8.8
            },
            caloricity: 85
        }
    ]
}

const SALAD_W_WHITE_CABBAGE_N_CUCUMBERS_N_CARROT: IDish = {
    id: '1.35',
    generalOutput: 100,
    variants: [
        {
            id: '1.35.1',
            name: 'Салат из белокочанной капусты с огурцами и морковью',
            components: {
                oil: 9,
                sugar: 9,
                vegetables: 83
            },
            macronutrients: {
                proteins: 1.2,
                fats: 9.1,
                carbohydrates: 12.5
            },
            caloricity: 134
        }
    ]
}

const SALAD_W_WHITE_CABBAGE_N_GREEN_PERS_N_ONION: IDish = {
    id: '1.36',
    generalOutput: 100,
    variants: [
        {
            id: '1.36.1',
            name: 'Салат из белокочанной капусты с зеленым горошком и луком',
            components: {
                eggs: 15,
                oil: 8,
                vegetables: 77
            },
            macronutrients: {
                proteins: 3.4,
                fats: 9.5,
                carbohydrates: 4.7
            },
            caloricity: 117
        }
    ]
}

const SALAD_W_CARROT_N_CUCUMBERS_N_GREAN_PEAS: IDish = {
    id: '1.37',
    generalOutput: 100,
    variants: [
        {
            id: '1.37.1',
            name: 'Салат из моркови с огурцами и зеленым горошком',
            components: {
                oil: 8,
                vegetables: 93
            },
            macronutrients: {
                proteins: 1.3,
                fats: 8.1,
                carbohydrates: 4.4
            },
            caloricity: 95
        }
    ]
}

const SALAD_AGENCHICK: IDish = {
    id: '1.38',
    generalOutput: 100,
    variants: [
        {
            id: '1.38.1',
            name: 'Салат "Агенчык" с майонезом',
            components: {
                mayonnaise: 20,
                vegetables: 81
            },
            macronutrients: {
                proteins: 2.2,
                fats: 13.5,
                carbohydrates: 6.3
            },
            caloricity: 155
        },
        {
            id: '1.38.2',
            name: 'Салат "Агенчык" с маслом растительным',
            components: {
                oil: 11.1,
                vegetables: 90
            },
            macronutrients: {
                proteins: 1.8,
                fats: 11.2,
                carbohydrates: 6.5
            },
            caloricity: 134
        }
    ]
}

const SALAD_W_POTATO: IDish = {
    id: '1.39',
    generalOutput: 100,
    variants: [
        {
            id: '1.39.1',
            name: 'Салат картофельный со сметаной',
            components: {
                potato: 72,
                sourCream: 15,
                vegetables: 14
            },
            macronutrients: {
                proteins: 2.1,
                fats: 3.3,
                carbohydrates: 13.5
            },
            caloricity: 94
        },
        {
            id: '1.39.2',
            name: 'Салат картофельный с маслом растительным',
            components: {
                oil: 10.5,
                potato: 75.8,
                vegetables: 14.7
            },
            macronutrients: {
                proteins: 1.7,
                fats: 10.8,
                carbohydrates: 13.7
            },
            caloricity: 161
        }
    ]
}

const SALAD_W_POTATO_N_CUCUMBERS: IDish = {
    id: '1.40',
    generalOutput: 100,
    variants: [
        {
            id: '1.40.1',
            name: 'Салат картофельный с огурцами со сметаной',
            components: {
                potato: 42.4,
                sourCream: 15,
                vegetables: 43.6
            },
            macronutrients: {
                proteins: 1.7,
                fats: 3.2,
                carbohydrates: 9.3
            },
            caloricity: 75
        },
        {
            id: '1.40.2',
            name: 'Салат картофельный с огурцами с маслом растительным',
            components: {
                oil: 10.5,
                potato: 44.6,
                vegetables: 45.9
            },
            macronutrients: {
                proteins: 1.4,
                fats: 10.7,
                carbohydrates: 9.3
            },
            caloricity: 141
        }
    ]
}

const SALAD_W_POTATO_N_GREEN_PEAS: IDish = {
    id: '1.41',
    generalOutput: 100,
    variants: [
        {
            id: '1.41.1',
            name: 'Салат картофельный с зеленым горошком со сметаной',
            components: {
                eggs: 12,
                potato: 54,
                sourCream: 15,
                vegetables: 20
            },
            macronutrients: {
                proteins: 3.4,
                fats: 4.4,
                carbohydrates: 9.9
            },
            caloricity: 93
        },
        {
            id: '1.41.2',
            name: 'Салат картофельный с зеленым горошком с маслом растительным',
            components: {
                eggs: 12.6,
                oil: 10.5,
                potato: 56.8,
                vegetables: 21
            },
            macronutrients: {
                proteins: 3.2,
                fats: 12,
                carbohydrates: 9
            },
            caloricity: 156
        }
    ]
}

const SALAD_STUDENCHESKIY: IDish = {
    id: '1.42',
    generalOutput: 100,
    variants: [
        {
            id: '1.42.1',
            name: 'Салат "Студенческий"',
            components: {
                eggs: 16,
                oil: 9,
                potato: 37,
                vegetables: 39
            },
            macronutrients: {
                proteins: 3.5,
                fats: 10.5,
                carbohydrates: 7.6
            },
            caloricity: 138
        }
    ]
}

const SALAD_APPETITNIY: IDish = {
    id: '1.43',
    generalOutput: 100,
    variants: [
        {
            id: '1.43.1',
            name: 'Салат "Аппетитный"',
            components: {
                oil: 9,
                potato: 25,
                vegetables: 67
            },
            macronutrients: {
                proteins: 1.4,
                fats: 9.2,
                carbohydrates: 7.7
            },
            caloricity: 119
        }
    ]
}

const SALAD_SHCHEDRAYA_OSEN: IDish = {
    id: '1.44',
    generalOutput: 100,
    variants: [
        {
            id: '1.44.1',
            name: 'Салат "Щедрая осень" со сметаной',
            components: {
                eggs: 13,
                sourCream: 20,
                vegetables: 70.3
            },
            macronutrients: {
                proteins: 3.1,
                fats: 5.4,
                carbohydrates: 3.4
            },
            caloricity: 74
        },
        {
            id: '1.44.2',
            name: 'Салат "Щедрая осень" с майонезом',
            components: {
                eggs: 13,
                mayonnaise: 20,
                vegetables: 70.3
            },
            macronutrients: {
                proteins: 3.1,
                fats: 14.8,
                carbohydrates: 3.3
            },
            caloricity: 159
        },
        {
            id: '1.44.3',
            name: 'Салат "Щедрая осень" с маслом растительным',
            components: {
                eggs: 14.4,
                oil: 11.1,
                vegetables: 78.1
            },
            macronutrients: {
                proteins: 2.8,
                fats: 12.7,
                carbohydrates: 3.1
            },
            caloricity: 138
        }
    ]
}

const SALAD_W_VEGETABLES_W_SEA_CABBAGE: IDish = {
    id: '1.45',
    generalOutput: 100,
    variants: [
        {
            id: '1.45.1',
            name: 'Салат из овощей с морской капустой',
            components: {
                oil: 7,
                potato: 34,
                vegetables: 60
            },
            macronutrients: {
                proteins: 1.3,
                fats: 7.2,
                carbohydrates: 7.4
            },
            caloricity: 100
        }
    ]
}

const SALAD_W_SEA_N_WHITE_CABBAGE: IDish = {
    id: '1.46',
    generalOutput: 100,
    variants: [
        {
            id: '1.46.1',
            name: 'Салат из морской и белокочанной капусты',
            components: {
                oil: 5,
                sugar: 5,
                vegetables: 122
            },
            macronutrients: {
                proteins: 2,
                fats: 5.1,
                carbohydrates: 10.2
            },
            caloricity: 94
        }
    ]
}

const SALAD_W_BEETROOT_N_CHEESE_N_GARLIC: IDish = {
    id: '1.47',
    generalOutput: 100,
    variants: [
        {
            id: '1.47.1',
            name: 'Салат из свеклы с сыром и чесноком с маслом растительным',
            components: {
                cheese: 15.8,
                oil: 10.5,
                vegetables: 75
            },
            macronutrients: {
                proteins: 5.5,
                fats: 15.1,
                carbohydrates: 5.8
            },
            caloricity: 181
        },
        {
            id: '1.47.2',
            name: 'Салат из свеклы с сыром и чесноком с майонезом',
            components: {
                cheese: 15,
                mayonnaise: 15,
                vegetables: 71.25
            },
            macronutrients: {
                proteins: 5.4,
                fats: 14.4,
                carbohydrates: 5.8
            },
            caloricity: 174
        }
    ]
}

const SALAD_ROZOVIY: IDish = {
    id: '1.48',
    generalOutput: 100,
    variants: [
        {
            id: '1.48.1',
            name: 'Салат "Розовый" с маслом растительным',
            components: {
                eggs: 44.4,
                oil: 11.1,
                vegetables: 45.6
            },
            macronutrients: {
                proteins: 5.6,
                fats: 14.8,
                carbohydrates: 3.6
            },
            caloricity: 170
        },
        {
            id: '1.48.2',
            name: 'Салат "Розовый" с майонезом',
            components: {
                eggs: 40,
                mayonnaise: 20,
                vegetables: 41
            },
            macronutrients: {
                proteins: 5.7,
                fats: 14.1,
                carbohydrates: 3.8
            },
            caloricity: 165
        }
    ]
}

const SALAD_ZARYA: IDish = {
    id: '1.49',
    generalOutput: 100,
    variants: [
        {
            id: '1.49.1',
            name: 'Салат "Заря" с маслом растительным',
            components: {
                eggs: 10.5,
                oil: 10.5,
                vegetables: 80
            },
            macronutrients: {
                proteins: 2.5,
                fats: 11.7,
                carbohydrates: 6.4
            },
            caloricity: 141
        },
        {
            id: '1.49.2',
            name: 'Салат "Заря" с майонезом',
            components: {
                eggs: 10,
                mayonnaise: 15,
                vegetables: 76
            },
            macronutrients: {
                proteins: 2.8,
                fats: 11.1,
                carbohydrates: 6.5
            },
            caloricity: 137
        }
    ]
}

const SALAD_BURYACHOK: IDish = {
    id: '1.50',
    generalOutput: 100,
    variants: [
        {
            id: '1.50.1',
            name: 'Салат "Бурячок"',
            components: {
                fruits: 17,
                oil: 9,
                vegetables: 75
            },
            macronutrients: {
                proteins: 1.6,
                fats: 8.2,
                carbohydrates: 7
            },
            caloricity: 108
        }
    ]
}

const SALAD_ZDOROVYE: IDish = {
    id: '1.51',
    generalOutput: 100,
    variants: [
        {
            id: '1.51.1',
            name: 'Салат "Здоровье"',
            components: {
                oil: 10,
                vegetables: 91
            },
            macronutrients: {
                proteins: 1.6,
                fats: 10.1,
                carbohydrates: 5.9
            },
            caloricity: 121
        }
    ]
}

const SALAD_W_BEETROOT_N_APPLES: IDish = {
    id: '1.52',
    generalOutput: 100,
    variants: [
        {
            id: '1.52.1',
            name: 'Салат из свеклы с яблоками с маслом растительным',
            components: {
                fruits: 27,
                oil: 15,
                sugar: 3,
                vegetables: 66
            },
            macronutrients: {
                proteins: 1,
                fats: 5.2,
                carbohydrates: 10.4
            },
            caloricity: 92
        }
    ]
}

const SALAD_SVEKOLKA: IDish = {
    id: '1.53',
    generalOutput: 100,
    variants: [
        {
            id: '1.53.1',
            name: 'Салат "Свеколка"',
            components: {
                fruitsDried: 83,
                oil: 10,
                vegetables: 75
            },
            macronutrients: {
                proteins: 1.6,
                fats: 10.1,
                carbohydrates: 15.1
            },
            caloricity: 157
        }
    ]
}

const SALAD_OSENNIY: IDish = {
    id: '1.54',
    generalOutput: 100,
    variants: [
        {
            id: '1.54.1',
            name: 'Салат "Осенний" с маслом растительным',
            components: {
                fruits: 22.2,
                oil: 11.1,
                vegetables: 67.8
            },
            macronutrients: {
                proteins: 2,
                fats: 11.3,
                carbohydrates: 7.3
            },
            caloricity: 133
        },
        {
            id: '1.54.2',
            name: 'Салат "Осенний" с майонезом',
            components: {
                fruits: 20,
                oil: 10,
                vegetables: 61
            },
            macronutrients: {
                proteins: 1.8,
                fats: 13.6,
                carbohydrates: 6.5
            },
            caloricity: 155
        }
    ]
}

const SALAD_SHKOLNIY: IDish = {
    id: '1.55',
    generalOutput: 100,
    variants: [
        {
            id: '1.55.1',
            name: 'Салат "Школьный"',
            components: {
                oil: 8,
                vegetables: 93
            },
            macronutrients: {
                proteins: 1.4,
                fats: 8.1,
                carbohydrates: 5.6
            },
            caloricity: 101
        }
    ]
}

const SALAD_W_CORN_PRUNE: IDish = {
    id: '1.56',
    generalOutput: 100,
    variants: [
        {
            id: '1.56.1',
            name: 'Салат из кукурузы с черносливом с маслом растительным',
            components: {
                cheese: 16.9,
                fruitsDried: 15.1,
                oil: 13.8,
                vegetables: 68.1
            },
            macronutrients: {
                proteins: 6.1,
                fats: 18.5,
                carbohydrates: 16.9
            },
            caloricity: 260
        },
        {
            id: '1.56.2',
            name: 'Салат из кукурузы с черносливом с майонезом',
            components: {
                cheese: 15.2,
                fruitsDried: 13.6,
                mayonnaise: 20,
                oil: 0.25,
                vegetables: 61.3
            },
            macronutrients: {
                proteins: 1.4,
                fats: 20.1,
                carbohydrates: 15.7
            },
            caloricity: 269
        }
    ]
}

const VINAIGRETTE_W_VEGETABLES: IDish = {
    id: '1.57',
    generalOutput: 100,
    variants: [
        {
            id: '1.57.1',
            name: 'Винегрет овощной',
            components: {
                oil: 10,
                potato: 21,
                vegetables: 70
            },
            macronutrients: {
                proteins: 1.2,
                fats: 10.1,
                carbohydrates: 6.4
            },
            caloricity: 121
        }
    ]
}

const VINAIGRETTE_SEA: IDish = {
    id: '1.58',
    generalOutput: 100,
    variants: [
        {
            id: '1.58.1',
            name: 'Винегрет морской',
            components: {
                oil: 10,
                potato: 12,
                vegetables: 75,
                sugar: 4
            },
            macronutrients: {
                proteins: 1.2,
                fats: 10,
                carbohydrates: 8.5
            },
            caloricity: 129
        }
    ]
}

const SALAD_CHAIKA: IDish = {
    id: '1.59',
    generalOutput: 100,
    variants: [
        {
            id: '1.59.1',
            name: 'Салат "Чайка" с маслом растительным',
            components: {
                cheese: 37.8,
                eggs: 22.2,
                oil: 11.1,
                vegetables: 30,
            },
            macronutrients: {
                proteins: 13.2,
                fats: 23.4,
                carbohydrates: 2.4
            },
            caloricity: 273
        },
        {
            id: '1.59.2',
            name: 'Салат "Чайка" с майонезом',
            components: {
                cheese: 34,
                eggs: 20,
                mayonnaise: 20,
                vegetables: 27,
            },
            macronutrients: {
                proteins: 12.5,
                fats: 24.3,
                carbohydrates: 2.4
            },
            caloricity: 278
        }
    ]
}

const SALAD_OSTRIY: IDish = {
    id: '1.60',
    generalOutput: 100,
    variants: [
        {
            id: '1.60.1',
            name: 'Салат "Острый"',
            components: {
                cheese: 30,
                eggs: 20,
                mayonnaise: 25,
                vegetables: 25.8,
            },
            macronutrients: {
                proteins: 11.2,
                fats: 26.7,
                carbohydrates: 2.6
            },
            caloricity: 296
        }
    ]
}

const IKRA_SVEKOLNAYA: IDish = {
    id: '1.61',
    generalOutput: 100,
    variants: [
        {
            id: '1.61.1',
            name: 'Икра свекольная',
            components: {
                oil: 7.5,
                sugar: 1.2,
                vegetables: 92.5,
            },
            macronutrients: {
                proteins: 2.2,
                fats: 6.7,
                carbohydrates: 11.6
            },
            caloricity: 125
        }
    ]
}

const SALAD_DARY_MORYA: IDish = {
    id: '1.62',
    generalOutput: 100,
    variants: [
        {
            id: '1.62.1',
            name: 'Салат "Дары моря"',
            components: {
                cheese: 15.5,
                eggs: 10,
                fish: 40,
                potato: 25.5,
                vegetables: 10,
            },
            macronutrients: {
                proteins: 14.2,
                fats: 7.5,
                carbohydrates: 5.1
            },
            caloricity: 145
        }
    ]
}

const SELD_S_LUKOM: IDish = {
    id: '1.63',
    generalOutput: 50,
    variants: [
        {
            id: '1.63.1',
            name: 'Сельдь с луком',
            components: {
                fish: 25,
                oil: 5,
                vegetables: 20,
            },
            macronutrients: {
                proteins: 9.1,
                fats: 14.3,
                carbohydrates: 3.6
            },
            caloricity: 178
        }
    ]
}

const ZHARENAYA_RYBA_POD_MARINADOM: IDish = {
    id: '1.64',
    generalOutput: 100,
    variants: [
        {
            id: '1.64.1',
            name: 'Жареная рыба под маринадом',
            components: {
                fish: 60,
                flourWheat: 3,
                oil: 9,
                sugar: 1.25,
                tomatoPuree: 7.5,
                vegetables: 37.5,
            },
            macronutrients: {
                proteins: 10.4,
                fats: 9.1,
                carbohydrates: 6.1
            },
            caloricity: 148
        }
    ]
}

const SALAD_SEKUNDA: IDish = {
    id: '1.65',
    generalOutput: 100,
    variants: [
        {
            id: '1.65.1',
            name: 'Салат "Секунда"',
            components: {
                eggs: 26,
                mayonnaise: 20,
                sausageProducts: 35,
                vegetables: 20,
            },
            macronutrients: {
                proteins: 7.2,
                fats: 15,
                carbohydrates: 1.3
            },
            caloricity: 172
        }
    ]
}

const SALAD_ZARNICA: IDish = {
    id: '1.66',
    generalOutput: 100,
    variants: [
        {
            id: '1.66.1',
            name: 'Салат "Зарница"',
            components: {
                oil: 5,
                sugar: 5,
                vegetables: 89,
            },
            macronutrients: {
                proteins: 1.6,
                fats: 5.1,
                carbohydrates: 9.4
            },
            caloricity: 88
        }
    ]
}

export const SNACKS_ARRAY: IDish[] = [
    SANDWICH_W_BUTTER,
    SANDWICH_W_JAM,
    SANDWICH_W_CHEESE,
    SANDWICH_W_BOILED_MEAT_PRODUCTS,
    SANDWICH_W_MEAT_GASTRONOMIC_PRODUCTS,
    SANDWICH_W_HERRING,
    CLOSED_SANDWICH_W_MEAT_PRODUCTS,
    CLOSED_SANDWICH_W_MEAT_GASTRONOMIC_PRODUCTS,
    CLOSED_SANDWICH_W_CHEESE,
    SANDWICH_W_CHOPPED_EGGS,
    SANDWICH_W_BACKED_CANNED_FISH,
    SANDWICH_ZVICHAYNII,
    SANDWICH_W_BAKED_HAM,
    SANDWICH_W_BAKED_SAUSAGE,
    SANDWICH_OSENNII,
    SANDWICH_KUPALLE,
    SANDWICH_YABLOKO_BAKED,
    SANDWICH_W_BAKED_SAUSAGE_N_CHEESE,
    BUTTER_IN_PORTIONS,
    CHEESE_IN_PORTIONS,

    // SALADS
    SALAD_W_FRESH_CUCUMBERS,
    SALAD_W_FRESH_TOMATOES,
    SALAD_W_FRESH_TOMATOES_N_CUCUMBERS,
    SALAD_SLUCH,
    SALAD_SHKOLNIE_GODY,
    SALAD_BELOSNEZHKA,
    SALAD_CARROT_W_SUGAR,
    SALAD_SVEZHEST,
    SALAD_CVETNOI,
    SALAD_VOSTORG,
    SALAD_METELKA,
    SALAD_VITAMINNII,
    SALAD_W_WHITE_CABBAGE_N_OIL,
    SALAD_W_WHITE_CABBAGE_N_CUCUMBERS,
    SALAD_W_WHITE_CABBAGE_N_CUCUMBERS_N_CARROT,
    SALAD_W_WHITE_CABBAGE_N_GREEN_PERS_N_ONION,
    SALAD_W_CARROT_N_CUCUMBERS_N_GREAN_PEAS,
    SALAD_AGENCHICK,
    SALAD_W_POTATO,
    SALAD_W_POTATO_N_CUCUMBERS,
    SALAD_W_POTATO_N_GREEN_PEAS,
    SALAD_STUDENCHESKIY,
    SALAD_APPETITNIY,
    SALAD_SHCHEDRAYA_OSEN,
    SALAD_W_VEGETABLES_W_SEA_CABBAGE,
    SALAD_W_SEA_N_WHITE_CABBAGE,
    SALAD_W_BEETROOT_N_CHEESE_N_GARLIC,
    SALAD_ROZOVIY,
    SALAD_ZARYA,
    SALAD_BURYACHOK,
    SALAD_ZDOROVYE,
    SALAD_W_BEETROOT_N_APPLES,
    SALAD_SVEKOLKA,
    SALAD_OSENNIY,
    SALAD_SHKOLNIY,
    SALAD_W_CORN_PRUNE,
    VINAIGRETTE_W_VEGETABLES,
    VINAIGRETTE_SEA,
    SALAD_CHAIKA,
    SALAD_OSTRIY,
    IKRA_SVEKOLNAYA,
    SALAD_DARY_MORYA,
    SELD_S_LUKOM,
    ZHARENAYA_RYBA_POD_MARINADOM,
    SALAD_SEKUNDA,
    SALAD_ZARNICA
]