import type { IDish } from "@/model/dish.model"

const BOILED_FISH: IDish = {
    id: '7.1',
    generalOutput: 50,
    variants: [
        {
            id: '7.1.1',
            name: 'Рыба отварная (треска)',
            components: {
                fish: 61,
                vegetables: 3
            },
            macronutrients: {
                proteins: 17.6,
                fats: 0.7,
                carbohydrates: 0.5
            },
            caloricity: 79
        },
        {
            id: '7.1.2',
            name: 'Рыба отварная (хек)',
            components: {
                fish: 61,
                vegetables: 3
            },
            macronutrients: {
                proteins: 18.3,
                fats: 2.4,
                carbohydrates: 0.5
            },
            caloricity: 97
        },
        {
            id: '7.1.3',
            name: 'Рыба отварная (окунь)',
            components: {
                fish: 62.5,
                vegetables: 3
            },
            macronutrients: {
                proteins: 20.6,
                fats: 3.7,
                carbohydrates: 0.5
            },
            caloricity: 118
        }
    ]
}

const POACHED_FISH: IDish = {
    id: '7.2',
    generalOutput: 50,
    variants: [
        {
            id: '7.2.1',
            name: 'Рыба припущенная (треска)',
            components: {
                fish: 61,
                vegetables: 2
            },
            macronutrients: {
                proteins: 17.6,
                fats: 0.7,
                carbohydrates: 0.4
            },
            caloricity: 78
        },
        {
            id: '7.2.2',
            name: 'Рыба припущенная (хек)',
            components: {
                fish: 61,
                vegetables: 2
            },
            macronutrients: {
                proteins: 18.3,
                fats: 2.4,
                carbohydrates: 0.4
            },
            caloricity: 96
        },
        {
            id: '7.2.3',
            name: 'Рыба припущенная (окунь)',
            components: {
                fish: 62.5,
                vegetables: 2
            },
            macronutrients: {
                proteins: 20,
                fats: 3.6,
                carbohydrates: 0.4
            },
            caloricity: 114
        }
    ]
}

const FISH_STEWED_IN_TOMATOES_W_VEGETABLES: IDish = {
    id: '7.3',
    generalOutput: 100,
    variants: [
        {
            id: '7.3.1',
            name: 'Рыба (треска), тушенная в томате с овощами',
            components: {
                fish: 61,
                oil: 5,
                sugar: 2,
                tomatoPuree: 10,
                vegetables: 30
            },
            macronutrients: {
                proteins: 16.5,
                fats: 7.9,
                carbohydrates: 8.4
            },
            caloricity: 171
        },
        {
            id: '7.3.2',
            name: 'Рыба (хек), тушенная в томате с овощами',
            components: {
                fish: 61,
                oil: 5,
                sugar: 2,
                tomatoPuree: 10,
                vegetables: 30
            },
            macronutrients: {
                proteins: 17.1,
                fats: 9.3,
                carbohydrates: 8.4
            },
            caloricity: 185
        },
        {
            id: '7.3.3',
            name: 'Рыба (окунь), тушенная в томате с овощами',
            components: {
                fish: 61,
                oil: 5,
                sugar: 2,
                tomatoPuree: 10,
                vegetables: 30
            },
            macronutrients: {
                proteins: 18.6,
                fats: 10.3,
                carbohydrates: 8.4
            },
            caloricity: 200
        },
        {
            id: '7.3.4',
            name: 'Рыба (минтай), тушенная в томате с овощами',
            components: {
                fish: 61.5,
                oil: 5,
                sugar: 2,
                tomatoPuree: 10,
                vegetables: 30
            },
            macronutrients: {
                proteins: 16.5,
                fats: 8.2,
                carbohydrates: 8.4
            },
            caloricity: 173
        },
        {
            id: '7.3.5',
            name: 'Рыба (ставрида), тушенная в томате с овощами',
            components: {
                fish: 61,
                oil: 5,
                sugar: 2,
                tomatoPuree: 10,
                vegetables: 30
            },
            macronutrients: {
                proteins: 18.9,
                fats: 11.4,
                carbohydrates: 7.6
            },
            caloricity: 209
        },
    ]
}

const FISH_STEWED_IN_SOUR_CREAM: IDish = {
    id: '7.4',
    generalOutput: 60,
    variants: [
        {
            id: '7.4.1',
            name: 'Рыба (треска), тушенная в сметане',
            components: {
                fish: 61,
                oil: 4,
                sourCream: 12.5,
                vegetables: 12.5
            },
            macronutrients: {
                proteins: 16.2,
                fats: 10,
                carbohydrates: 2.3
            },
            caloricity: 164
        },
        {
            id: '7.4.2',
            name: 'Рыба (хек), тушенная в сметане',
            components: {
                fish: 61,
                oil: 4,
                sourCream: 12.5,
                vegetables: 12.5
            },
            macronutrients: {
                proteins: 16.7,
                fats: 11.5,
                carbohydrates: 2.3
            },
            caloricity: 180
        },
        {
            id: '7.4.3',
            name: 'Рыба (окунь), тушенная в сметане',
            components: {
                fish: 61,
                oil: 4,
                sourCream: 12.5,
                vegetables: 12.5
            },
            macronutrients: {
                proteins: 18.2,
                fats: 12.5,
                carbohydrates: 2.3
            },
            caloricity: 195
        }
    ]
}

const FRIED_FISH: IDish = {
    id: '7.5',
    generalOutput: 50,
    variants: [
        {
            id: '7.5.1',
            name: 'Рыба жареная (треска)',
            components: {
                fish: 59.5,
                flourWheat: 3,
                oil: 3,
            },
            macronutrients: {
                proteins: 17.7,
                fats: 5.4,
                carbohydrates: 4.1
            },
            caloricity: 136
        },
        {
            id: '7.5.2',
            name: 'Рыба жареная (хек)',
            components: {
                fish: 59.5,
                flourWheat: 3,
                oil: 3,
            },
            macronutrients: {
                proteins: 18.3,
                fats: 7,
                carbohydrates: 4.1
            },
            caloricity: 153
        },
        {
            id: '7.5.3',
            name: 'Рыба жареная (окунь)',
            components: {
                fish: 59.5,
                flourWheat: 3,
                oil: 3
            },
            macronutrients: {
                proteins: 20.1,
                fats: 8,
                carbohydrates: 4.1
            },
            caloricity: 169
        }
    ]
}

const BAKED_FISH_W_MILK_SAUSE_W_MASHED_POTATOES: IDish = {
    id: '7.7',
    generalOutput: 175,
    variants: [
        {
            id: '7.7.1',
            name: 'Рыба (треска), запеченная под молочным соусом (с картофельным пюре)',
            components: {
                butter: 13,
                cheese: 2,
                fish: 49,
                flourWheat: 5.5,
                milkAndFermentedMilkProducts: 40,
                potato: 85.5,
                vegetables: 6
            },
            macronutrients: {
                proteins: 6.5,
                fats: 5.9,
                carbohydrates: 10.6
            },
            caloricity: 122
        },
        {
            id: '7.7.2',
            name: 'Рыба (окунь), запеченная под молочным соусом (с картофельным пюре)',
            components: {
                butter: 13,
                cheese: 2,
                fish: 49,
                flourWheat: 5.5,
                milkAndFermentedMilkProducts: 40,
                potato: 85.5,
                vegetables: 6
            },
            macronutrients: {
                proteins: 6.7,
                fats: 6.5,
                carbohydrates: 10.6
            },
            caloricity: 128
        }
    ]
}

const BAKED_FISH_IN_SOUR_CREAM_W_CARROTS: IDish = {
    id: '7.8',
    generalOutput: 62.5,
    variants: [
        {
            id: '7.8.1',
            name: 'Рыба (треска), запеченная в сметане с морковью',
            components: {
                fish: 59.5,
                flourWheat: 3,
                oil: 6,
                sourCream: 10,
                vegetables: 15
            },
            macronutrients: {
                proteins: 15.5,
                fats: 11.4,
                carbohydrates: 5
            },
            caloricity: 185
        },
        {
            id: '7.8.2',
            name: 'Рыба (окунь), запеченная в сметане с морковью',
            components: {
                fish: 59.5,
                flourWheat: 3,
                oil: 6,
                sourCream: 10,
                vegetables: 15
            },
            macronutrients: {
                proteins: 17.4,
                fats: 14.1,
                carbohydrates: 5
            },
            caloricity: 217
        }
    ]
}

const BAKED_FISH_W_CARROTS: IDish = {
    id: '7.9',
    generalOutput: 50,
    variants: [
        {
            id: '7.9.1',
            name: 'Рыба (горбуша), запеченная с морковью (сметанный соус добавлять отдельно)',
            components: {
                cheese: 5,
                fish: 61,
                oil: 5,
                vegetables: 15.5
            },
            macronutrients: {
                proteins: 13.5,
                fats: 9.35,
                carbohydrates: 1.2
            },
            caloricity: 143
        },
        {
            id: '7.9.2',
            name: 'Рыба (треска), запеченная с морковью (сметанный соус добавлять отдельно)',
            components: {
                cheese: 5,
                fish: 61,
                oil: 5,
                vegetables: 15.5
            },
            macronutrients: {
                proteins: 10.6,
                fats: 5.85,
                carbohydrates: 1.2
            },
            caloricity: 100
        },
        {
            id: '7.9.3',
            name: 'Рыба (хек), запеченная с морковью (сметанный соус добавлять отдельно)',
            components: {
                cheese: 5,
                fish: 61,
                oil: 5,
                vegetables: 15.5
            },
            macronutrients: {
                proteins: 10.9,
                fats: 6.75,
                carbohydrates: 1.2
            },
            caloricity: 109
        }
    ]
}

const FISH_CUTLETS: IDish = {
    id: '7.10',
    generalOutput: 50,
    variants: [
        {
            id: '7.10.1',
            name: 'Котлеты (биточки) рыбные (из трески на молоке)',
            components: {
                breadWheat: 14,
                fish: 32.5,
                milkAndFermentedMilkProducts: 12.5,
                oil: 4
            },
            macronutrients: {
                proteins: 12.2,
                fats: 7.6,
                carbohydrates: 14.2
            },
            caloricity: 174
        },
        {
            id: '7.10.2',
            name: 'Котлеты (биточки) рыбные (из трески на воде)',
            components: {
                breadWheat: 14,
                fish: 32.5,
                oil: 4
            },
            macronutrients: {
                proteins: 12.2,
                fats: 7.6,
                carbohydrates: 14.2
            },
            caloricity: 174
        },
        {
            id: '7.10.3',
            name: 'Котлеты (биточки) рыбные (из окуня на молоке)',
            components: {
                breadWheat: 14,
                fish: 32.5,
                milkAndFermentedMilkProducts: 12.5,
                oil: 4
            },
            macronutrients: {
                proteins: 13.4,
                fats: 9.2,
                carbohydrates: 14.2
            },
            caloricity: 194
        },
        {
            id: '7.10.4',
            name: 'Котлеты (биточки) рыбные (из окуня на воде)',
            components: {
                breadWheat: 14,
                fish: 32.5,
                oil: 4
            },
            macronutrients: {
                proteins: 13.4,
                fats: 9.2,
                carbohydrates: 14.2
            },
            caloricity: 194
        }
    ]
}

const FISH_MEATBALLS: IDish = {
    id: '7.11',
    generalOutput: 80,
    variants: [
        {
            id: '7.11.1',
            name: 'Тефтели рыбные (из трески на молоке) с соусом томатным',
            components: {
                breadWheat: 6.5,
                butter: 1.8,
                fish: 32.5,
                flourWheat: 5.35,
                milkAndFermentedMilkProducts: 10,
                oil: 4,
                tomatoPuree: 7.5,
                sugar: 0.3,
                vegetables: 9.4,
            },
            macronutrients: {
                proteins: 7.9,
                fats: 6.4,
                carbohydrates: 10
            },
            caloricity: 127
        },
        {
            id: '7.11.2',
            name: 'Тефтели рыбные (из трески на воде) с соусом томатным',
            components: {
                breadWheat: 6.5,
                butter: 1.8,
                fish: 32.5,
                flourWheat: 5.35,
                oil: 4,
                tomatoPuree: 7.5,
                sugar: 0.3,
                vegetables: 9.4,
            },
            macronutrients: {
                proteins: 7.9,
                fats: 6.4,
                carbohydrates: 10
            },
            caloricity: 127
        },
        {
            id: '7.11.3',
            name: 'Тефтели рыбные (из трески на молоке) с соусом сметанным с томатом',
            components: {
                breadWheat: 6.5,
                fish: 32.5,
                flourWheat: 6.25,
                oil: 4,
                milkAndFermentedMilkProducts: 10,
                sourCream: 7.5,
                tomatoPuree: 3,
                vegetables: 7,
            },
            macronutrients: {
                proteins: 7.9,
                fats: 6.4,
                carbohydrates: 10
            },
            caloricity: 127
        },
        {
            id: '7.11.4',
            name: 'Тефтели рыбные (из трески на воде) с соусом сметанным с томатом',
            components: {
                breadWheat: 6.5,
                fish: 32.5,
                flourWheat: 6.25,
                oil: 4,
                sourCream: 7.5,
                tomatoPuree: 3,
                vegetables: 7,
            },
            macronutrients: {
                proteins: 7.9,
                fats: 6.4,
                carbohydrates: 10
            },
            caloricity: 127
        },
        {
            id: '7.11.5',
            name: 'Тефтели рыбные (из окуня на молоке) с соусом томатным',
            components: {
                breadWheat: 6.5,
                butter: 1.8,
                fish: 32.5,
                flourWheat: 5.35,
                milkAndFermentedMilkProducts: 10,
                oil: 4,
                tomatoPuree: 7.5,
                sugar: 0.3,
                vegetables: 9.4,
            },
            macronutrients: {
                proteins: 8.6,
                fats: 7.3,
                carbohydrates: 10
            },
            caloricity: 140
        },
        {
            id: '7.11.6',
            name: 'Тефтели рыбные (из окуня на воде) с соусом томатным',
            components: {
                breadWheat: 6.5,
                butter: 1.8,
                fish: 32.5,
                flourWheat: 5.35,
                oil: 4,
                tomatoPuree: 7.5,
                sugar: 0.3,
                vegetables: 9.4,
            },
            macronutrients: {
                proteins: 8.6,
                fats: 7.3,
                carbohydrates: 10
            },
            caloricity: 140
        },
        {
            id: '7.11.7',
            name: 'Тефтели рыбные (из окуня на молоке) с соусом сметанным с томатом',
            components: {
                breadWheat: 6.5,
                fish: 32.5,
                flourWheat: 6.25,
                oil: 4,
                milkAndFermentedMilkProducts: 10,
                sourCream: 7.5,
                tomatoPuree: 3,
                vegetables: 7,
            },
            macronutrients: {
                proteins: 8.6,
                fats: 7.3,
                carbohydrates: 10
            },
            caloricity: 140
        },
        {
            id: '7.11.8',
            name: 'Тефтели рыбные (из окуня на воде) с соусом сметанным с томатом',
            components: {
                breadWheat: 6.5,
                fish: 32.5,
                flourWheat: 6.25,
                oil: 4,
                sourCream: 7.5,
                tomatoPuree: 3,
                vegetables: 7,
            },
            macronutrients: {
                proteins: 8.6,
                fats: 7.3,
                carbohydrates: 10
            },
            caloricity: 140
        },
    ]
}

const FISH_MEATBALLS_LYUBITELSKIYE: IDish = {
    id: '7.12',
    generalOutput: 100,
    variants: [
        {
            id: '7.12.1',
            name: 'Тефтели рыбные (треска) "Любительские"',
            components: {
                breadWheat: 4,
                eggs: 4,
                fish: 32.5,
                flourWheat: 7.75,
                oil: 5,
                sourCream: 12.5,
                tomatoPuree: 5,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 6.4,
                fats: 8.7,
                carbohydrates: 8.7
            },
            caloricity: 139
        },
        {
            id: '7.12.2',
            name: 'Тефтели рыбные (окунь) "Любительские"',
            components: {
                breadWheat: 4,
                eggs: 4,
                fish: 32.5,
                flourWheat: 7.75,
                oil: 5,
                sourCream: 12.5,
                tomatoPuree: 5,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 7.8,
                fats: 8.1,
                carbohydrates: 8.5
            },
            caloricity: 138
        }
    ]
}

const RYBNIK: IDish = {
    id: '7.14',
    generalOutput: 50,
    variants: [
        {
            id: '7.14.1',
            name: 'Рыбник (треска)',
            components: {
                breadWheat: 6.5,
                butter: 2,
                eggs: 5,
                fish: 35,
                milkAndFermentedMilkProducts: 7,
                vegetables: 7.5,
            },
            macronutrients: {
                proteins: 13.3,
                fats: 4.5,
                carbohydrates: 7.6
            },
            caloricity: 124
        },
        {
            id: '7.14.2',
            name: 'Рыбник (окунь)',
            components: {
                breadWheat: 6.5,
                butter: 2,
                eggs: 5,
                fish: 35,
                milkAndFermentedMilkProducts: 7,
                vegetables: 7.5,
            },
            macronutrients: {
                proteins: 14.7,
                fats: 6.4,
                carbohydrates: 7.6
            },
            caloricity: 147
        }
    ]
}

const SQUID_IN_SOUR_CREAM_SAUSE: IDish = {
    id: '7.15',
    generalOutput: 100,
    variants: [
        {
            id: '7.15.1',
            name: 'Кальмары (филе) в сметанном соусе',
            components: {
                fish: 92.5,
                flourWheat: 3.75,
                sourCream: 12.5,
            },
            macronutrients: {
                proteins: 16.4,
                fats: 5.7,
                carbohydrates: 2.7
            },
            caloricity: 128
        },
        {
            id: '7.15.2',
            name: 'Кальмары (тушка) в сметанном соусе',
            components: {
                fish: 102,
                flourWheat: 3.75,
                sourCream: 12.5,
            },
            macronutrients: {
                proteins: 16.4,
                fats: 5.7,
                carbohydrates: 2.7
            },
            caloricity: 128
        }
    ]
}

const FISH_SOUFFLE: IDish = {
    id: '7.16',
    generalOutput: 70,
    variants: [
        {
            id: '7.16.1',
            name: 'Суфле рыбное',
            components: {
                butter: 5,
                eggs: 9,
                fish: 61,
                flourWheat: 3,
                milkAndFermentedMilkProducts: 21
            },
            macronutrients: {
                proteins: 15.9,
                fats: 7.4,
                carbohydrates: 4.1
            },
            caloricity: 147
        }
    ]
}

const FISH_CUTLET_FANTAZIA: IDish = {
    id: '7.17',
    generalOutput: 100,
    variants: [
        {
            id: '7.17.1',
            name: 'Котлета рыбная (треска) "Фантазия" (на молоке)',
            components: {
                breadWheat: 8,
                eggs: 4,
                fish: 89,
                meat: 10,
                milkAndFermentedMilkProducts: 8,
                oil: 10,
                vegetables: 8,
            },
            macronutrients: {
                proteins: 16.2,
                fats: 12.3,
                carbohydrates: 7.4
            },
            caloricity: 205
        },
        {
            id: '7.17.2',
            name: 'Котлета рыбная (треска) "Фантазия" (на воде)',
            components: {
                breadWheat: 8,
                eggs: 4,
                fish: 89,
                meat: 10,
                oil: 10,
                vegetables: 8,
            },
            macronutrients: {
                proteins: 16.2,
                fats: 12.3,
                carbohydrates: 7.4
            },
            caloricity: 205
        },
        {
            id: '7.17.3',
            name: 'Котлета рыбная (минтай) "Фантазия" (на молоке)',
            components: {
                breadWheat: 8,
                eggs: 4,
                fish: 89,
                meat: 10,
                milkAndFermentedMilkProducts: 8,
                oil: 10,
                vegetables: 8,
            },
            macronutrients: {
                proteins: 16.1,
                fats: 12.6,
                carbohydrates: 7.5
            },
            caloricity: 207
        },
        {
            id: '7.17.4',
            name: 'Котлета рыбная (минтай) "Фантазия" (на воде)',
            components: {
                breadWheat: 8,
                eggs: 4,
                fish: 89,
                meat: 10,
                oil: 10,
                vegetables: 8,
            },
            macronutrients: {
                proteins: 16.1,
                fats: 12.6,
                carbohydrates: 7.5
            },
            caloricity: 207
        },
        {
            id: '7.17.5',
            name: 'Котлета рыбная (окунь) "Фантазия" (на молоке)',
            components: {
                breadWheat: 8,
                eggs: 4,
                fish: 89,
                meat: 10,
                milkAndFermentedMilkProducts: 8,
                oil: 10,
                vegetables: 8,
            },
            macronutrients: {
                proteins: 18,
                fats: 14.5,
                carbohydrates: 7.4
            },
            caloricity: 232
        },
        {
            id: '7.17.6',
            name: 'Котлета рыбная (окунь) "Фантазия" (на воде)',
            components: {
                breadWheat: 8,
                eggs: 4,
                fish: 89,
                meat: 10,
                oil: 10,
                vegetables: 8,
            },
            macronutrients: {
                proteins: 18,
                fats: 14.5,
                carbohydrates: 7.4
            },
            caloricity: 232
        },
        {
            id: '7.17.7',
            name: 'Котлета рыбная (хек) "Фантазия" (на молоке)',
            components: {
                breadWheat: 8,
                eggs: 4,
                fish: 89,
                meat: 10,
                milkAndFermentedMilkProducts: 8,
                oil: 10,
                vegetables: 8,
            },
            macronutrients: {
                proteins: 16.7,
                fats: 13.6,
                carbohydrates: 7.4
            },
            caloricity: 218
        },
        {
            id: '7.17.8',
            name: 'Котлета рыбная (хек) "Фантазия" (на воде)',
            components: {
                breadWheat: 8,
                eggs: 4,
                fish: 89,
                meat: 10,
                oil: 10,
                vegetables: 8,
            },
            macronutrients: {
                proteins: 15.9,
                fats: 7.4,
                carbohydrates: 4.1
            },
            caloricity: 147
        }
    ]
}

const FISH_SAUSAGES: IDish = {
    id: '7.18',
    generalOutput: 50,
    variants: [
        {
            id: '7.18.1',
            name: 'Колбаски рыбные (минтай) на молоке',
            components: {
                breadWheat: 3,
                fish: 42,
                meat: 9,
                milkAndFermentedMilkProducts: 4,
                oil: 6,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 16,
                fats: 16,
                carbohydrates: 5.4
            },
            caloricity: 230
        },
        {
            id: '7.18.2',
            name: 'Колбаски рыбные (минтай) на воде',
            components: {
                breadWheat: 3,
                fish: 42,
                meat: 9,
                oil: 6,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 16,
                fats: 16,
                carbohydrates: 5.4
            },
            caloricity: 230
        },
        {
            id: '7.18.3',
            name: 'Колбаски рыбные (треска) на молоке',
            components: {
                breadWheat: 3,
                fish: 42,
                meat: 9,
                milkAndFermentedMilkProducts: 4,
                oil: 6,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 16,
                fats: 15.8,
                carbohydrates: 5.4
            },
            caloricity: 228
        },
        {
            id: '7.18.4',
            name: 'Колбаски рыбные (треска) на воде',
            components: {
                breadWheat: 3,
                fish: 42,
                meat: 9,
                oil: 6,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 16,
                fats: 15.8,
                carbohydrates: 5.4
            },
            caloricity: 228
        },
        {
            id: '7.18.5',
            name: 'Колбаски рыбные (окунь) на молоке',
            components: {
                breadWheat: 3,
                fish: 42,
                meat: 9,
                milkAndFermentedMilkProducts: 4,
                oil: 6,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 17.8,
                fats: 17.8,
                carbohydrates: 5.4
            },
            caloricity: 252
        },
        {
            id: '7.18.6',
            name: 'Колбаски рыбные (окунь) на воде',
            components: {
                breadWheat: 3,
                fish: 42,
                meat: 9,
                oil: 6,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 17.8,
                fats: 17.8,
                carbohydrates: 5.4
            },
            caloricity: 252
        },
        {
            id: '7.18.7',
            name: 'Колбаски рыбные (хек) на молоке',
            components: {
                breadWheat: 3,
                fish: 42,
                meat: 9,
                milkAndFermentedMilkProducts: 4,
                oil: 6,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 16.6,
                fats: 17,
                carbohydrates: 5.4
            },
            caloricity: 240
        },
        {
            id: '7.18.8',
            name: 'Колбаски рыбные (хек) на воде',
            components: {
                breadWheat: 3,
                fish: 42,
                meat: 9,
                oil: 6,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 16.6,
                fats: 17,
                carbohydrates: 5.4
            },
            caloricity: 240
        },
    ]
}

export const FISH_DISHES_ARRAY: IDish[] = [
    BOILED_FISH,
    POACHED_FISH,
    FISH_STEWED_IN_TOMATOES_W_VEGETABLES,
    FISH_STEWED_IN_SOUR_CREAM,
    FRIED_FISH,
    BAKED_FISH_W_MILK_SAUSE_W_MASHED_POTATOES,
    BAKED_FISH_IN_SOUR_CREAM_W_CARROTS,
    BAKED_FISH_W_CARROTS,
    FISH_CUTLETS,
    FISH_MEATBALLS,
    FISH_MEATBALLS_LYUBITELSKIYE,
    RYBNIK,
    SQUID_IN_SOUR_CREAM_SAUSE,
    FISH_SOUFFLE,
    FISH_CUTLET_FANTAZIA,
    FISH_SAUSAGES
]