import type { IDish } from "@/model/dish.model"

const POTATO_IN_A_MILK: IDish = {
    id: '3.1',
    generalOutput: 125,
    variants: [
        {
            id: '3.1.1',
            name: 'Картофель в молоке',
            components: {
                butter: 2.5,
                milkAndFermentedMilkProducts: 35.5,
                potato: 90
            },
            macronutrients: {
                proteins: 2.2,
                fats: 3.4,
                carbohydrates: 12
            },
            caloricity: 87
        }
    ]
}

const CARROTS_W_GREEN_PEAS_IN_MILK_SAUSE: IDish = {
    id: '3.2',
    generalOutput: 115,
    variants: [
        {
            id: '3.2.1',
            name: 'Морковь с зеленым горошком (консервированным) в молочном соусе',
            components: {
                butter: 9.4,
                flourWheat: 2.2,
                milkAndFermentedMilkProducts: 20,
                vegetables: 79.5,
                sugar: 0.4

            },
            macronutrients: {
                proteins: 1.9,
                fats: 5.6,
                carbohydrates: 6.6
            },
            caloricity: 84
        },
        {
            id: '3.2.2',
            name: 'Морковь с зеленым горошком (свежим) в молочном соусе',
            components: {
                butter: 9.4,
                flourWheat: 2.2,
                milkAndFermentedMilkProducts: 20,
                vegetables: 81.5,
                sugar: 0.4
            },
            macronutrients: {
                proteins: 1.9,
                fats: 5.6,
                carbohydrates: 6.6
            },
            caloricity: 84
        }
    ]
}

const PUMPKIN_PORRIDGE: IDish = {
    id: '3.3',
    generalOutput: 130,
    variants: [
        {
            id: '3.3.1',
            name: 'Каша из тыквы',
            components: {
                butter: 7.5,
                cereals: 15,
                milkAndFermentedMilkProducts: 15,
                vegetables: 117.5,
                sugar: 5,

            },
            macronutrients: {
                proteins: 2.3,
                fats: 5.1,
                carbohydrates: 14.6
            },
            caloricity: 115
        }
    ]
}

const STEAMED_VEGETABLES_IN_MILK_OR_SOUR_CREAM_SAUSE: IDish = {
    id: '3.4',
    generalOutput: 125,
    variants: [
        {
            id: '3.4.1',
            name: 'Овощи, припущенные в молочном соусе',
            components: {
                butter: 7,
                flourWheat: 2,
                milkAndFermentedMilkProducts: 18.8,
                sugar: 1.4,
                vegetables: 94.5

            },
            macronutrients: {
                proteins: 2.3,
                fats: 5.1,
                carbohydrates: 14.6
            },
            caloricity: 115
        },
        {
            id: '3.4.2',
            name: 'Овощи, припущенные в сметанном соусе',
            components: {
                butter: 5,
                flourWheat: 2.8,
                sourCream: 9.4,
                vegetables: 94.5

            },
            macronutrients: {
                proteins: 2.3,
                fats: 5.1,
                carbohydrates: 14.6
            },
            caloricity: 115
        }
    ]
}

const STEWED_CABAGGE: IDish = {
    id: '3.5',
    generalOutput: 100,
    variants: [
        {
            id: '3.5.1',
            name: 'Капуста (свежая) тушеная',
            components: {
                flourWheat: 1.2,
                oil: 3.6,
                tomatoPuree: 6,
                sugar: 3.2,
                vegetables: 120
            },
            macronutrients: {
                proteins: 2.5,
                fats: 14.2,
                carbohydrates: 12.6
            },
            caloricity: 188
        },
        {
            id: '3.5.2',
            name: 'Капуста (квашеная) тушеная',
            components: {
                flourWheat: 1.2,
                oil: 3.6,
                tomatoPuree: 6,
                sugar: 3.2,
                vegetables: 106
            },
            macronutrients: {
                proteins: 2.5,
                fats: 14.2,
                carbohydrates: 12.6
            },
            caloricity: 188
        }
    ]
}

const BEETROOT_STEWED_IN_MILK_SAUSE_OR_SOUR_CREAM: IDish = {
    id: '3.6',
    variants: [
        {
            id: '3.6.1',
            name: 'Свекла, тушенная в молочном соусе',
            defaultOutput: 125,
            components: {
                butter: 6.38,
                flourWheat: 1.38,
                milkAndFermentedMilkProducts: 12.5,
                sugar: 0.25,
                vegetables: 130
            },
            macronutrients: {
                proteins: 1.8,
                fats: 3.9,
                carbohydrates: 9.8
            },
            caloricity: 80
        },
        {
            id: '3.6.2',
            name: 'Свекла, тушенная в сметане',
            defaultOutput: 105,
            components: {
                butter: 2.5,
                sourCream: 15,
                vegetables: 102.5
            },
            macronutrients: {
                proteins: 1.8,
                fats: 3.2,
                carbohydrates: 8.8
            },
            caloricity: 69
        }
    ]
}

const BEETROOT_STEWED_W_APPLES: IDish = {
    id: '3.7',
    generalOutput: 100,
    variants: [
        {
            id: '3.7.1',
            name: 'Свекла, тушенная с яблоками',
            components: {
                butter: 4,
                flourWheat: 0.75,
                fruits: 20,
                sourCream: 2.5,
                sugar: 2,
                vegetables: 70
            },
            macronutrients: {
                proteins: 1.2,
                fats: 3.2,
                carbohydrates: 10
            },
            caloricity: 73
        }
    ]
}

const POTATO_N_VEGETABLES_STEWET_IN_TOMATO_SAUSE_OR_SOUR_CREAM_SAUSE: IDish = {
    id: '3.8',
    generalOutput: 125,
    variants: [
        {
            id: '3.8.1',
            name: 'Картофель и овощи, тушенные в соусе томатном',
            components: {
                butter: 10.5,
                flourWheat: 1.13,
                potato: 105,
                sugar: 0.25,
                tomatoPuree: 6.25,
                vegetables: 21,
            },
            macronutrients: {
                proteins: 2.1,
                fats: 5.8,
                carbohydrates: 14.8
            },
            caloricity: 120
        },
        {
            id: '3.8.2',
            name: 'Картофель и овощи, тушенные в сметанном соусе',
            components: {
                butter: 9,
                flourWheat: 1.9,
                potato: 105,
                sourCream: 6.25,
                vegetables: 19
            },
            macronutrients: {
                proteins: 2.1,
                fats: 5.8,
                carbohydrates: 14.8
            },
            caloricity: 120
        }
    ]
}

const VEGETABLES_STEW: IDish = {
    id: '3.9',
    generalOutput: 100,
    variants: [
        {
            id: '3.9.1',
            name: 'Рагу из овощей с соусом сметанным',
            components: {
                butter: 5,
                flourWheat: 2.25,
                potato: 32,
                sourCream: 7.5,
                vegetables: 65
            },
            macronutrients: {
                proteins: 1.7,
                fats: 5,
                carbohydrates: 9.2
            },
            caloricity: 89
        },
        {
            id: '3.9.2',
            name: 'Рагу из овощей с соусом красным основным',
            components: {
                butter: 5.72,
                flourWheat: 1.5,
                potato: 32,
                sourCream: 7.5,
                sugar: 0.45,
                tomatoPuree: 3,
                vegetables: 68
            },
            macronutrients: {
                proteins: 1.6,
                fats: 4.2,
                carbohydrates: 9.5
            },
            caloricity: 82
        }
    ]
}

const POTATO_PATTIES: IDish = {
    id: '3.10',
    generalOutput: 100,
    variants: [
        {
            id: '3.10.1',
            name: 'Котлеты картофельные (мука пшеничная)',
            components: {
                flourWheat: 3,
                eggs: 3,
                oil: 5,
                potato: 107.5
            },
            macronutrients: {
                proteins: 3,
                fats: 4.6,
                carbohydrates: 19.7
            },
            caloricity: 132
        },
        {
            id: '3.10.2',
            name: 'Котлеты картофельные (сухари пшеничные)',
            components: {
                breadWheat: 3,
                eggs: 3,
                oil: 5,
                potato: 107.5
            },
            macronutrients: {
                proteins: 3,
                fats: 4.6,
                carbohydrates: 19.7
            },
            caloricity: 132
        },
    ]
}

const POTATO_PATTIES_W_CURD: IDish = {
    id: '3.11',
    generalOutput: 90,
    variants: [
        {
            id: '3.11.1',
            name: 'Котлеты картофельные с творогом (мука пшеничная)',
            components: {
                butter: 2,
                curd: 30,
                flourWheat: 8,
                eggs: 4,
                oil: 4.5,
                potato: 60
            },
            macronutrients: {
                proteins: 6.3,
                fats: 9.3,
                carbohydrates: 13.3
            },
            caloricity: 170
        },
        {
            id: '3.11.2',
            name: 'Котлеты картофельные с творогом (сухари пшеничные)',
            components: {
                butter: 2,
                breadWheat: 4,
                curd: 30,
                flourWheat: 4,
                eggs: 4,
                oil: 4.5,
                potato: 60
            },
            macronutrients: {
                proteins: 6.3,
                fats: 9.3,
                carbohydrates: 13.3
            },
            caloricity: 170
        },
    ]
}

const POTATO_PIES: IDish = {
    id: '3.12',
    generalOutput: 100,
    variants: [
        {
            id: '3.12.1',
            name: 'Пирожки картофельные с овощным фаршем',
            components: {
                eggs: 6.5,
                flourWheat: 2.5,
                oil: 6,
                potato: 90,
                vegetables: 32
            },
            macronutrients: {
                proteins: 6.3,
                fats: 9.3,
                carbohydrates: 13.3
            },
            caloricity: 170
        },
        {
            id: '3.12.2',
            name: 'Пирожки картофельные с капустным фаршем (из свежей капусты)',
            components: {
                eggs: 6.5,
                flourWheat: 2.5,
                oil: 3,
                potato: 90,
                vegetables: 28.2
            },
            macronutrients: {
                proteins: 6.3,
                fats: 9.3,
                carbohydrates: 13.3
            },
            caloricity: 170
        },
        {
            id: '3.12.3',
            name: 'Пирожки картофельные с капустным фаршем (из квашеной капусты)',
            components: {
                eggs: 6.5,
                flourWheat: 2.5,
                oil: 3.2,
                potato: 90,
                sugar: 0.3,
                vegetables: 24.4
            },
            macronutrients: {
                proteins: 6.3,
                fats: 9.3,
                carbohydrates: 13.3
            },
            caloricity: 170
        },
        {
            id: '3.12.4',
            name: 'Пирожки картофельные с овощным фаршем с маслом сливочным',
            components: {
                butter: 5,
                eggs: 6.5,
                flourWheat: 2.5,
                oil: 6,
                potato: 90,
                vegetables: 32
            },
            macronutrients: {
                proteins: 2.4,
                fats: 8,
                carbohydrates: 17.2
            },
            caloricity: 151
        },
        {
            id: '3.12.5',
            name: 'Пирожки картофельные с капустным фаршем (из свежей капусты) с маслом сливочным',
            components: {
                butter: 5,
                eggs: 6.5,
                flourWheat: 2.5,
                oil: 3,
                potato: 90,
                vegetables: 28.2
            },
            macronutrients: {
                proteins: 2.4,
                fats: 8,
                carbohydrates: 17.2
            },
            caloricity: 151
        },
        {
            id: '3.12.6',
            name: 'Пирожки картофельные с капустным фаршем (из квашеной капусты) с маслом сливочным',
            components: {
                butter: 5,
                eggs: 6.5,
                flourWheat: 2.5,
                oil: 3.2,
                potato: 90,
                sugar: 0.3,
                vegetables: 24.4
            },
            macronutrients: {
                proteins: 2.4,
                fats: 8,
                carbohydrates: 17.2
            },
            caloricity: 151
        },
    ]
}

const POTATO_ZRAZI: IDish = {
    id: '3.13',
    generalOutput: 100,
    variants: [
        {
            id: '3.13.1',
            name: 'Зразы картофельные (мука пшеничная) с маслом сливочным',
            components: {
                butter: 5,
                eggs: 2,
                flourWheat: 6,
                oil: 7.5,
                potato: 90.5,
                vegetables: 35
            },
            macronutrients: {
                proteins: 3,
                fats: 10.8,
                carbohydrates: 19.9
            },
            caloricity: 189
        },
        {
            id: '3.13.2',
            name: 'Зразы картофельные (сухари пшеничные) с маслом сливочным',
            components: {
                breadWheat: 6,
                butter: 5,
                eggs: 2,
                oil: 7.5,
                potato: 90.5,
                vegetables: 35
            },
            macronutrients: {
                proteins: 3,
                fats: 10.8,
                carbohydrates: 19.9
            },
            caloricity: 189
        },
        {
            id: '3.13.3',
            name: 'Зразы картофельные (мука пшеничная) со сметаной',
            components: {
                eggs: 2,
                flourWheat: 6,
                oil: 7.5,
                potato: 90.5,
                sourCream: 10,
                vegetables: 35
            },
            macronutrients: {
                proteins: 3.2,
                fats: 9,
                carbohydrates: 20.1
            },
            caloricity: 174
        },
        {
            id: '3.13.4',
            name: 'Зразы картофельные (сухари пшеничные) со сметаной',
            components: {
                breadWheat: 6,
                butter: 5,
                eggs: 2,
                oil: 7.5,
                potato: 90.5,
                sourCream: 10,
                vegetables: 35
            },
            macronutrients: {
                proteins: 3.2,
                fats: 9,
                carbohydrates: 20.1
            },
            caloricity: 174
        },
    ]
}

const POTATO_CASSEROLE_W_VEGETABLES: IDish = {
    id: '3.14',
    generalOutput: 100,
    variants: [
        {
            id: '3.14.1',
            name: 'Запеканка картофельная с овощами',
            components: {
                breadWheat: 2.5,
                eggs: 5,
                oil: 5,
                potato: 90,
                sourCream: 2.5,
                vegetables: 20,
            },
            macronutrients: {
                proteins: 2.9,
                fats: 7,
                carbohydrates: 15.2
            },
            caloricity: 136
        },
        {
            id: '3.14.2',
            name: 'Запеканка картофельная с овощами со сметаной',
            components: {
                breadWheat: 2.5,
                eggs: 5,
                oil: 5,
                potato: 90,
                sourCream: 12.5,
                vegetables: 20,
            },
            macronutrients: {
                proteins: 2.9,
                fats: 7,
                carbohydrates: 15.2
            },
            caloricity: 136
        }
    ]
}

const CABBAGE_CASSEROLE: IDish = {
    id: '3.15',
    generalOutput: 100,
    variants: [
        {
            id: '3.15.1',
            name: 'Запеканка капустная',
            components: {
                breadWheat: 3.3,
                butter: 6.7,
                cereals: 13.3,
                eggs: 7,
                sourCream: 3.3,
                vegetables: 104
            },
            macronutrients: {
                proteins: 1.6,
                fats: 8.2,
                carbohydrates: 12.9
            },
            caloricity: 132
        },
        {
            id: '3.15.2',
            name: 'Запеканка капустная со сметаной',
            components: {
                breadWheat: 3.3,
                butter: 6.7,
                cereals: 13.3,
                eggs: 7,
                sourCream: 23.3,
                vegetables: 104
            },
            macronutrients: {
                proteins: 1.6,
                fats: 8.2,
                carbohydrates: 12.9
            },
            caloricity: 132
        }
    ]
}

const VEGETABLE_CASSEROLE: IDish = {
    id: '3.16',
    generalOutput: 100,
    variants: [
        {
            id: '3.16.1',
            name: 'Запеканка овощная',
            components: {
                breadWheat: 5,
                cereals: 5,
                oil: 5,
                potato: 52,
                sourCream: 2.5,
                vegetables: 68,
            },
            macronutrients: {
                proteins: 2.9,
                fats: 8.5,
                carbohydrates: 17.1
            },
            caloricity: 157
        }
    ]
}

const CARROT_CUTLETS: IDish = {
    id: '3.17',
    generalOutput: 100,
    variants: [
        {
            id: '3.17.1',
            name: 'Котлеты морковные (сухари пшеничные)',
            components: {
                breadWheat: 8,
                butter: 3.4,
                cereals: 12,
                oil: 8,
                vegetables: 107
            },
            macronutrients: {
                proteins: 4.5,
                fats: 10.2,
                carbohydrates: 19.5
            },
            caloricity: 188
        },
        {
            id: '3.17.2',
            name: 'Котлеты морковные (мука пшеничная)',
            components: {
                butter: 3.4,
                cereals: 12,
                flourWheat: 8,
                oil: 8,
                vegetables: 107
            },
            macronutrients: {
                proteins: 2.9,
                fats: 8.5,
                carbohydrates: 17.1
            },
            caloricity: 157
        }
    ]
}

const BEETROOT_CUTLETS: IDish = {
    id: '3.18',
    generalOutput: 100,
    variants: [
        {
            id: '3.18.1',
            name: 'Котлеты свекольные (сухари пшеничные)',
            components: {
                breadWheat: 8,
                butter: 6.7,
                cereals: 10,
                curd: 20,
                eggs: 2.7,
                oil: 7,
                vegetables: 92
            },
            macronutrients: {
                proteins: 6.6,
                fats: 11.5,
                carbohydrates: 21.4
            },
            caloricity: 215
        },
        {
            id: '3.18.2',
            name: 'Котлеты свекольные (мука пшеничная)',
            components: {
                butter: 6.7,
                cereals: 10,
                curd: 20,
                eggs: 2.7,
                flourWheat: 8,
                oil: 7,
                vegetables: 92
            },
            macronutrients: {
                proteins: 6.6,
                fats: 11.5,
                carbohydrates: 21.4
            },
            caloricity: 215
        }
    ]
}

const CABBAGE_CUTLETS: IDish = {
    id: '3.19',
    generalOutput: 100,
    variants: [
        {
            id: '3.19.1',
            name: 'Котлеты капустные (сухари пшеничные)',
            components: {
                breadWheat: 8,
                butter: 3.5,
                cereals: 10,
                eggs: 5.5,
                fruits: 25,
                oil: 7,
                vegetables: 87
            },
            macronutrients: {
                proteins: 3.9,
                fats: 8.7,
                carbohydrates: 17.2
            },
            caloricity: 163
        }
    ]
}

const CABBAGE_SCHNITZEL: IDish = {
    id: '3.20',
    generalOutput: 100,
    variants: [
        {
            id: '3.20.1',
            name: 'Шницель из капусты',
            components: {
                breadWheat: 10,
                eggs: 5.3,
                flourWheat: 3.3,
                oil: 7,
                vegetables: 120,
            },
            macronutrients: {
                proteins: 2.4,
                fats: 7.8,
                carbohydrates: 13.7
            },
            caloricity: 124
        }
    ]
}

const FRIED_ZUCCHINI: IDish = {
    id: '3.21',
    generalOutput: 100,
    variants: [
        {
            id: '3.21.1',
            name: 'Кабачки жареные',
            components: {
                flourWheat: 3.5,
                oil: 10,
                vegetables: 149
            },
            macronutrients: {
                proteins: 1.2,
                fats: 9.2,
                carbohydrates: 8.8
            },
            caloricity: 122
        }
    ]
}

const POTATO_PANCAKES: IDish = {
    id: '3.22',
    generalOutput: 100,
    variants: [
        {
            id: '3.22.1',
            name: 'Оладьи картофельные',
            components: {
                eggs: 10,
                flourWheat: 10,
                oil: 5,
                potato: 100,
                sourCream: 10,

            },
            macronutrients: {
                proteins: 4.2,
                fats: 7.1,
                carbohydrates: 21.5
            },
            caloricity: 166
        }
    ]
}

const DRANIKI: IDish = {
    id: '3.23',
    generalOutput: 120,
    variants: [
        {
            id: '3.23.1',
            name: 'Драники',
            components: {
                flourWheat: 2.5,
                oil: 5,
                potato: 150
            },
            macronutrients: {
                proteins: 2.6,
                fats: 3.5,
                carbohydrates: 19.8
            },
            caloricity: 122.5
        }
    ]
}

const BABKA_KARTOFELNAYA_W_FRIED_BACON_N_ONION: IDish = {
    id: '3.24',
    generalOutput: 150,
    variants: [
        {
            id: '3.24.1',
            name: 'Бабка картофельная с жареным шпиком и луком',
            components: {
                flourWheat: 3.5,
                meat: 15,
                potato: 147,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 3.4,
                fats: 15.6,
                carbohydrates: 24
            },
            caloricity: 250
        }
    ]
}

const VEGETABLES_GOLUBCY: IDish = {
    id: '3.25',
    generalOutput: 125,
    variants: [
        {
            id: '3.25.1',
            name: 'Голубцы овощные с соусом сметанным',
            components: {
                cereals: 5.5,
                flourWheat: 3.75,
                oil: 6,
                sourCream: 12.5,
                vegetables: 119
            },
            macronutrients: {
                proteins: 2.4,
                fats: 6.2,
                carbohydrates: 10.1
            },
            caloricity: 106
        },
        {
            id: '3.25.1',
            name: 'Голубцы овощные с соусом сметанным с томатом',
            components: {
                cereals: 5.5,
                flourWheat: 3.75,
                oil: 6,
                sourCream: 12.5,
                tomatoPuree: 5,
                vegetables: 119
            },
            macronutrients: {
                proteins: 2.4,
                fats: 6.2,
                carbohydrates: 10.1
            },
            caloricity: 106
        }
    ]
}

const ZUCCHINI_BAKED_W_SAUSE: IDish = {
    id: '3.26',
    generalOutput: 150,
    variants: [
        {
            id: '3.26.1',
            name: 'Кабачки, запеченные под соусом молочным',
            components: {
                butter: 7.7,
                cheese: 5,
                flourWheat: 12.7,
                milkAndFermentedMilkProducts: 35,
                oil: 10,
                vegetables: 149,
            },
            macronutrients: {
                proteins: 2.1,
                fats: 10,
                carbohydrates: 10.8
            },
            caloricity: 142
        },
        {
            id: '3.26.2',
            name: 'Кабачки, запеченные под соусом сметанным',
            components: {
                cheese: 5,
                flourWheat: 10.3,
                oil: 10,
                sourCream: 17.5,
                vegetables: 149
            },
            macronutrients: {
                proteins: 2.1,
                fats: 10,
                carbohydrates: 10.8
            },
            caloricity: 142
        },
    ]
}

const PEPPER_STUFFED_W_VEGETABLES: IDish = {
    id: '3.27',
    generalOutput: 150,
    variants: [
        {
            id: '3.27.1',
            name: 'Перец, фаршированный овощами',
            components: {
                oil: 10,
                tomatoPuree: 10,
                sugar: 5,
                vegetables: 226,
            },
            macronutrients: {
                proteins: 2.1,
                fats: 6.3,
                carbohydrates: 13
            },
            caloricity: 117
        }
    ]
}

const PEPPER_STUFFED_W_VEGETABLES_N_RICE: IDish = {
    id: '3.28',
    generalOutput: 110,
    variants: [
        {
            id: '3.28.1',
            name: 'Перец, фаршированный овощами (помидоры свежие) и рисом с соусом молочным',
            components: {
                butter: 4.13,
                cereals: 5.5,
                flourWheat: 4.13,
                milkAndFermentedMilkProducts: 18.8,
                oil: 5,
                vegetables: 101,
            },
            macronutrients: {
                proteins: 1.9,
                fats: 6.6,
                carbohydrates: 9.9
            },
            caloricity: 101
        },
        {
            id: '3.28.2',
            name: 'Перец, фаршированный овощами (помидоры свежие) и рисом с соусом сметанным',
            components: {
                cereals: 5.5,
                flourWheat: 2.8,
                oil: 5,
                sourCream: 9.4,
                vegetables: 101,
            },
            macronutrients: {
                proteins: 1.9,
                fats: 6.6,
                carbohydrates: 9.9
            },
            caloricity: 101
        },
        {
            id: '3.28.3',
            name: 'Перец, фаршированный овощами (помидоры свежие) и рисом с соусом сметанным с томатом',
            components: {
                cereals: 5.5,
                flourWheat: 2.8,
                oil: 5,
                sourCream: 9.4,
                tomatoPuree: 3.75,
                vegetables: 101,
            },
            macronutrients: {
                proteins: 1.9,
                fats: 6.6,
                carbohydrates: 9.9
            },
            caloricity: 101
        },
        {
            id: '3.28.4',
            name: 'Перец, фаршированный овощами (томатное пюре) и рисом с соусом молочным',
            components: {
                butter: 4.13,
                cereals: 5.5,
                flourWheat: 4.13,
                oil: 5,
                milkAndFermentedMilkProducts: 18.8,
                tomatoPuree: 7.5,
                vegetables: 85
            },
            macronutrients: {
                proteins: 1.9,
                fats: 6.6,
                carbohydrates: 9.9
            },
            caloricity: 101
        },
        {
            id: '3.28.5',
            name: 'Перец, фаршированный овощами (томатное пюре) и рисом с соусом сметанным',
            components: {
                cereals: 5.5,
                flourWheat: 2.8,
                oil: 5,
                sourCream: 9.4,
                tomatoPuree: 7.5,
                vegetables: 85
            },
            macronutrients: {
                proteins: 1.9,
                fats: 6.6,
                carbohydrates: 9.9
            },
            caloricity: 101
        },
        {
            id: '3.28.6',
            name: 'Перец, фаршированный овощами (томатное пюре) и рисом с соусом сметанным с томатом',
            components: {
                cereals: 5.5,
                flourWheat: 2.8,
                oil: 5,
                sourCream: 9.4,
                tomatoPuree: 11.25,
                vegetables: 85
            },
            macronutrients: {
                proteins: 1.9,
                fats: 6.6,
                carbohydrates: 9.9
            },
            caloricity: 101
        }
    ]
}

const VEGETABLES_IN_PORTIONS: IDish = {
    id: '3.29',
    generalOutput: 100,
    variants: [
        {
            id: '3.29.1',
            name: 'Помидоры (порциями)',
            components: {
                vegetables: 100,
            },
            macronutrients: {
                proteins: 1.1,
                fats: 0.2,
                carbohydrates: 3.8
            },
            caloricity: 21
        },
        {
            id: '3.29.2',
            name: 'Огурцы (порциями)',
            components: {
                vegetables: 100,
            },
            macronutrients: {
                proteins: 0.7,
                fats: 0.1,
                carbohydrates: 1.9
            },
            caloricity: 11
        }
    ]
}

export const POTATO_N_VEGETABLES_DISHES_ARRAY: IDish[] = [
    POTATO_IN_A_MILK,
    CARROTS_W_GREEN_PEAS_IN_MILK_SAUSE,
    PUMPKIN_PORRIDGE,
    STEAMED_VEGETABLES_IN_MILK_OR_SOUR_CREAM_SAUSE,
    STEWED_CABAGGE,
    BEETROOT_STEWED_IN_MILK_SAUSE_OR_SOUR_CREAM,
    BEETROOT_STEWED_W_APPLES,
    POTATO_N_VEGETABLES_STEWET_IN_TOMATO_SAUSE_OR_SOUR_CREAM_SAUSE,
    VEGETABLES_STEW,
    POTATO_PATTIES,
    POTATO_PATTIES_W_CURD,
    POTATO_PIES,
    POTATO_ZRAZI,
    POTATO_CASSEROLE_W_VEGETABLES,
    CABBAGE_CASSEROLE,
    VEGETABLE_CASSEROLE,
    CARROT_CUTLETS,
    BEETROOT_CUTLETS,
    CABBAGE_CUTLETS,
    CABBAGE_SCHNITZEL,
    FRIED_ZUCCHINI,
    POTATO_PANCAKES,
    DRANIKI,
    BABKA_KARTOFELNAYA_W_FRIED_BACON_N_ONION,
    VEGETABLES_GOLUBCY,
    ZUCCHINI_BAKED_W_SAUSE,
    PEPPER_STUFFED_W_VEGETABLES,
    PEPPER_STUFFED_W_VEGETABLES_N_RICE,
    VEGETABLES_IN_PORTIONS
]