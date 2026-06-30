import type { IDish } from "@/model/dish.model"

const BOILED_MEAT: IDish = {
    id: '8.1',
    generalOutput: 50,
    variants: [
        {
            id: '8.1.1',
            name: 'Мясо отварное (говядина)',
            components: {
                meat: 81,
                vegetables: 4
            },
            macronutrients: {
                proteins: 28.4,
                fats: 4.4,
                carbohydrates: 0.7
            },
            caloricity: 156
        },
        {
            id: '8.1.2',
            name: 'Мясо отварное (говядина)',
            components: {
                meat: 83,
                vegetables: 4
            },
            macronutrients: {
                proteins: 22,
                fats: 36.6,
                carbohydrates: 0.7
            },
            caloricity: 420
        }
    ]
}

const BOILED_TONGUE: IDish = {
    id: '8.2',
    generalOutput: 50,
    variants: [
        {
            id: '8.2.1',
            name: 'Язык отварной (говяжий)',
            components: {
                meat: 84,
                vegetables: 4
            },
            macronutrients: {
                proteins: 24,
                fats: 15.2,
                carbohydrates: 0.7
            },
            caloricity: 236
        },
        {
            id: '8.2.2',
            name: 'Язык отварной (свиной)',
            components: {
                meat: 85,
                vegetables: 4
            },
            macronutrients: {
                proteins: 24,
                fats: 15.2,
                carbohydrates: 0.7
            },
            caloricity: 236
        }
    ]
}

const BOILED_SAUSAGES: IDish = {
    id: '8.3',
    generalOutput: 50,
    variants: [
        {
            id: '8.3.1',
            name: 'Сосиски отварные',
            components: {
                sausageProducts: 50
            },
            macronutrients: {
                proteins: 9.9,
                fats: 17.9,
                carbohydrates: 1.6
            },
            caloricity: 207
        },
        {
            id: '8.3.2',
            name: 'Сардельки говяжьи отварные',
            components: {
                sausageProducts: 50
            },
            macronutrients: {
                proteins: 10.3,
                fats: 13.7,
                carbohydrates: 1.5
            },
            caloricity: 171
        },
        {
            id: '8.3.3',
            name: 'Колбаса вареная',
            components: {
                sausageProducts: 50
            },
            macronutrients: {
                proteins: 11.5,
                fats: 16.7,
                carbohydrates: 1.5
            },
            caloricity: 202
        }
    ]
}

const BEEF_STROGANOFF: IDish = {
    id: '8.4',
    variants: [
        {
            id: '8.4.1',
            defaultOutput: 100,
            name: 'Бефстроганов (масло сливочное) выходом 50/50 (можно поставить 75/75)',
            components: {
                butter: 7,
                flourWheat: 4,
                meat: 79,
                sourCream: 23,
                vegetables: 24,
            },
            macronutrients: {
                proteins: 16.5,
                fats: 12,
                carbohydrates: 5.2
            },
            caloricity: 195
        },
        {
            id: '8.4.2',
            defaultOutput: 100,
            name: 'Бефстроганов (масло растительное) выходом 50/50 (можно поставить 75/75)',
            components: {
                flourWheat: 4,
                meat: 79,
                oil: 7,
                sourCream: 23,
                vegetables: 24,
            },
            macronutrients: {
                proteins: 16.5,
                fats: 12,
                carbohydrates: 5.2
            },
            caloricity: 195
        },
        {
            id: '8.4.3',
            defaultOutput: 1,
            name: 'Бефстроганов (масло сливочное) выходом 75/50',
            components: {
                butter: 7,
                flourWheat: 4,
                meat: 119,
                sourCream: 23,
                vegetables: 24,
            },
            macronutrients: {
                proteins: 17,
                fats: 10,
                carbohydrates: 4.2
            },
            caloricity: 175
        },
        {
            id: '8.4.4',
            defaultOutput: 1,
            name: 'Бефстроганов (масло растительное) выходом 75/50',
            components: {
                flourWheat: 4,
                meat: 119,
                oil: 7,
                sourCream: 23,
                vegetables: 24,
            },
            macronutrients: {
                proteins: 17,
                fats: 10,
                carbohydrates: 4.2
            },
            caloricity: 175
        },
        {
            id: '8.4.5',
            defaultOutput: 1,
            name: 'Бефстроганов (масло сливочное) выходом 100/75',
            components: {
                butter: 10.5,
                flourWheat: 6,
                meat: 158.7,
                sourCream: 34.5,
                vegetables: 36,
            },
            macronutrients: {
                proteins: 17,
                fats: 10,
                carbohydrates: 4.2
            },
            caloricity: 175
        },
        {
            id: '8.4.6',
            defaultOutput: 1,
            name: 'Бефстроганов (масло растительное) выходом 100/75',
            components: {
                flourWheat: 6,
                oil: 10.5,
                meat: 158.7,
                sourCream: 34.5,
                vegetables: 36,
            },
            macronutrients: {
                proteins: 17,
                fats: 10,
                carbohydrates: 4.2
            },
            caloricity: 175
        },
    ]
}

const T0ASTING_MEAT: IDish = {
    id: '8.5',
    variants: [
        {
            id: '8.5.1',
            name: 'Поджарка (1-й вариант) из говядины (масло сливочное)',
            defaultOutput: 65,
            components: {
                butter: 7,
                meat: 79,
                tomatoPuree: 10,
                vegetables: 20,
            },
            macronutrients: {
                proteins: 24.3,
                fats: 12.2,
                carbohydrates: 4.2
            },
            caloricity: 223
        },
        {
            id: '8.5.2',
            name: 'Поджарка (1-й вариант) из говядины (масло растительное)',
            defaultOutput: 65,
            components: {
                meat: 79,
                oil: 7,
                tomatoPuree: 10,
                vegetables: 20,
            },
            macronutrients: {
                proteins: 24.3,
                fats: 12.2,
                carbohydrates: 4.2
            },
            caloricity: 223
        },
        {
            id: '8.5.3',
            name: 'Поджарка (1-й вариант) из свинины (масло сливочное)',
            defaultOutput: 65,
            components: {
                butter: 7,
                meat: 74,
                tomatoPuree: 10,
                vegetables: 20,
            },
            macronutrients: {
                proteins: 16.9,
                fats: 36.8,
                carbohydrates: 4.2
            },
            caloricity: 415
        },
        {
            id: '8.5.4',
            name: 'Поджарка (1-й вариант) из свинины (масло растительное)',
            defaultOutput: 65,
            components: {
                meat: 74,
                oil: 7,
                tomatoPuree: 10,
                vegetables: 20,
            },
            macronutrients: {
                proteins: 16.9,
                fats: 36.8,
                carbohydrates: 4.2
            },
            caloricity: 415
        },
        {
            id: '8.5.5',
            name: 'Поджарка (1-й вариант) из телятины (масло сливочное)',
            defaultOutput: 65,
            components: {
                butter: 7,
                meat: 79,
                tomatoPuree: 10,
                vegetables: 20,
            },
            macronutrients: {
                proteins: 23.4,
                fats: 11.7,
                carbohydrates: 4.2
            },
            caloricity: 216
        },
        {
            id: '8.5.6',
            name: 'Поджарка (1-й вариант) из телятины (масло растительное)',
            defaultOutput: 65,
            components: {
                meat: 79,
                oil: 7,
                tomatoPuree: 10,
                vegetables: 20,
            },
            macronutrients: {
                proteins: 23.4,
                fats: 11.7,
                carbohydrates: 4.2
            },
            caloricity: 216
        },
        {
            id: '8.5.7',
            name: 'Поджарка (2-й вариант) из говядины (масло сливочное)',
            defaultOutput: 100,
            components: {
                butter: 10,
                meat: 119,
                tomatoPuree: 15,
                vegetables: 30,
            },
            macronutrients: {
                proteins: 21.4,
                fats: 7.5,
                carbohydrates: 4.1
            },
            caloricity: 170
        },
        {
            id: '8.5.8',
            name: 'Поджарка (2-й вариант) из говядины (масло растительное)',
            defaultOutput: 100,
            components: {
                meat: 119,
                oil: 10,
                tomatoPuree: 15,
                vegetables: 30,
            },
            macronutrients: {
                proteins: 21.4,
                fats: 7.5,
                carbohydrates: 4.1
            },
            caloricity: 170
        },
        {
            id: '8.5.9',
            name: 'Поджарка (2-й вариант) из свинины (масло сливочное)',
            defaultOutput: 100,
            components: {
                butter: 10,
                meat: 119,
                tomatoPuree: 15,
                vegetables: 30,
            },
            macronutrients: {
                proteins: 13.2,
                fats: 28.1,
                carbohydrates: 4.1
            },
            caloricity: 322
        },
        {
            id: '8.5.10',
            name: 'Поджарка (2-й вариант) из свинины (масло растительное)',
            defaultOutput: 100,
            components: {
                meat: 110,
                oil: 10,
                tomatoPuree: 15,
                vegetables: 30,
            },
            macronutrients: {
                proteins: 13.2,
                fats: 28.1,
                carbohydrates: 4.1
            },
            caloricity: 322
        },
        {
            id: '8.5.11',
            name: 'Поджарка (2-й вариант) из телятины (масло сливочное)',
            defaultOutput: 100,
            components: {
                butter: 10,
                meat: 119,
                tomatoPuree: 15,
                vegetables: 30,
            },
            macronutrients: {
                proteins: 23.1,
                fats: 9.3,
                carbohydrates: 4.1
            },
            caloricity: 192
        },
        {
            id: '8.5.12',
            name: 'Поджарка (2-й вариант) из телятины (масло растительное)',
            defaultOutput: 100,
            components: {
                meat: 119,
                oil: 10,
                tomatoPuree: 15,
                vegetables: 30,
            },
            macronutrients: {
                proteins: 23.1,
                fats: 9.3,
                carbohydrates: 4.1
            },
            caloricity: 192
        },
    ]
}

const PECHEN_PO_STROGANOVSKI: IDish = {
    id: '8.7',
    variants: [
        {
            id: '8.7.1',
            name: 'Печень (говяжья) по-строгановски (масло растительное) с соусом сметанным (1-й вариант)',
            defaultOutput: 100,
            components: {
                byProducts: 74,
                flourWheat: 3.375,
                oil: 6,
                sourCream: 11.25,
            },
            macronutrients: {
                proteins: 13.3,
                fats: 10.3,
                carbohydrates: 3.9
            },
            caloricity: 162
        },
        {
            id: '8.7.2',
            name: 'Печень (говяжья) по-строгановски (масло сливочное) с соусом сметанным (1-й вариант)',
            defaultOutput: 100,
            components: {
                byProducts: 74,
                butter: 6,
                flourWheat: 3.375,
                sourCream: 11.25,
            },
            macronutrients: {
                proteins: 13.3,
                fats: 10.3,
                carbohydrates: 3.9
            },
            caloricity: 162
        },
        {
            id: '8.7.3',
            name: 'Печень (говяжья) по-строгановски (масло растительное) с соусом сметанным с луком (1-й вариант)',
            defaultOutput: 100,
            components: {
                byProducts: 74,
                butter: 1,
                oil: 6,
                tomatoPuree: 2.5,
                vegetables: 10,
            },
            macronutrients: {
                proteins: 13.3,
                fats: 10.3,
                carbohydrates: 3.9
            },
            caloricity: 162
        },
        {
            id: '8.7.4',
            name: 'Печень (говяжья) по-строгановски (масло сливочное) с соусом сметанным с луком (1-й вариант)',
            defaultOutput: 100,
            components: {
                byProducts: 74,
                butter: 7,
                sourCream: 11.25,
                tomatoPuree: 2.5,
                vegetables: 10,
            },
            macronutrients: {
                proteins: 13.3,
                fats: 10.3,
                carbohydrates: 3.9
            },
            caloricity: 162
        },
        {
            id: '8.7.5',
            name: 'Печень (свиная) по-строгановски (масло растительное) с соусом сметанным (1-й вариант)',
            defaultOutput: 100,
            components: {
                byProducts: 74,
                flourWheat: 3.375,
                oil: 6,
                sourCream: 11.25,
            },
            macronutrients: {
                proteins: 13.9,
                fats: 10.4,
                carbohydrates: 3.9
            },
            caloricity: 165
        },
        {
            id: '8.7.6',
            name: 'Печень (свиная) по-строгановски (масло сливочное) с соусом сметанным (1-й вариант)',
            defaultOutput: 100,
            components: {
                byProducts: 74,
                butter: 6,
                flourWheat: 3.375,
                sourCream: 11.25,
            },
            macronutrients: {
                proteins: 13.9,
                fats: 10.4,
                carbohydrates: 3.9
            },
            caloricity: 165
        },
        {
            id: '8.7.7',
            name: 'Печень (свиная) по-строгановски (масло растительное) с соусом сметанным с луком (1-й вариант)',
            defaultOutput: 100,
            components: {
                byProducts: 74,
                oil: 6,
                tomatoPuree: 2.5,
                vegetables: 10,
            },
            macronutrients: {
                proteins: 13.9,
                fats: 10.4,
                carbohydrates: 3.9
            },
            caloricity: 165
        },
        {
            id: '8.7.8',
            name: 'Печень (свиная) по-строгановски (масло сливочное) с соусом сметанным с луком (1-й вариант)',
            defaultOutput: 100,
            components: {
                byProducts: 74,
                butter: 7,
                sourCream: 11.25,
                tomatoPuree: 2.5,
                vegetables: 10,
            },
            macronutrients: {
                proteins: 13.9,
                fats: 10.4,
                carbohydrates: 3.9
            },
            caloricity: 165
        },
        {
            id: '8.7.9',
            name: 'Печень (говяжья) по-строгановски (масло растительное) с соусом сметанным (2-й вариант)',
            defaultOutput: 125,
            components: {
                byProducts: 110,
                butter: 1,
                flourWheat: 3.375,
                oil: 10,
                sourCream: 11.25,
            },
            macronutrients: {
                proteins: 14,
                fats: 8.9,
                carbohydrates: 3.1
            },
            caloricity: 148
        },
        {
            id: '8.7.10',
            name: 'Печень (говяжья) по-строгановски (масло сливочное) с соусом сметанным (2-й вариант)',
            defaultOutput: 125,
            components: {
                byProducts: 110,
                butter: 10,
                flourWheat: 3.375,
                sourCream: 11.25,
            },
            macronutrients: {
                proteins: 14,
                fats: 8.9,
                carbohydrates: 3.1
            },
            caloricity: 148
        },
        {
            id: '8.7.11',
            name: 'Печень (говяжья) по-строгановски (масло растительное) с соусом сметанным с луком (2-й вариант)',
            defaultOutput: 125,
            components: {
                byProducts: 110,
                butter: 1,
                oil: 6,
                tomatoPuree: 2.5,
                vegetables: 10,
            },
            macronutrients: {
                proteins: 14,
                fats: 8.9,
                carbohydrates: 3.1
            },
            caloricity: 148
        },
        {
            id: '8.7.12',
            name: 'Печень (говяжья) по-строгановски (масло сливочное) с соусом сметанным с луком (2-й вариант)',
            defaultOutput: 125,
            components: {
                byProducts: 110,
                butter: 7,
                tomatoPuree: 2.5,
                vegetables: 10,
            },
            macronutrients: {
                proteins: 14,
                fats: 8.9,
                carbohydrates: 3.1
            },
            caloricity: 148
        },
        {
            id: '8.7.13',
            name: 'Печень (свиная) по-строгановски (масло растительное) с соусом сметанным (2-й вариант)',
            defaultOutput: 125,
            components: {
                byProducts: 110,
                butter: 1,
                flourWheat: 3.375,
                oil: 10,
                sourCream: 11.25,
            },
            macronutrients: {
                proteins: 14.6,
                fats: 9,
                carbohydrates: 3.1
            },
            caloricity: 151
        },
        {
            id: '8.7.14',
            name: 'Печень (свиная) по-строгановски (масло сливочное) с соусом сметанным (2-й вариант)',
            defaultOutput: 125,
            components: {
                byProducts: 110,
                butter: 10,
                flourWheat: 3.375,
                sourCream: 11.25,
            },
            macronutrients: {
                proteins: 14.6,
                fats: 9,
                carbohydrates: 3.1
            },
            caloricity: 151
        },
        {
            id: '8.7.15',
            name: 'Печень (свиная) по-строгановски (масло растительное) с соусом сметанным с луком (2-й вариант)',
            defaultOutput: 125,
            components: {
                byProducts: 110,
                butter: 1,
                oil: 6,
                tomatoPuree: 2.5,
                vegetables: 10,
            },
            macronutrients: {
                proteins: 14.6,
                fats: 9,
                carbohydrates: 3.1
            },
            caloricity: 151
        },
        {
            id: '8.7.16',
            name: 'Печень (свиная) по-строгановски (масло сливочное) с соусом сметанным с луком (2-й вариант)',
            defaultOutput: 125,
            components: {
                byProducts: 110,
                butter: 7,
                tomatoPuree: 2.5,
                vegetables: 10,
            },
            macronutrients: {
                proteins: 14.6,
                fats: 9,
                carbohydrates: 3.1
            },
            caloricity: 151
        },
    ]
}

const STEWED_MEAT: IDish = {
    id: '8.8',
    variants: [
        {
            id: '8.8.1',
            name: 'Мясо (говядина) тушеное (масло растительное) 1-й вариант',
            defaultOutput: 100,
            components: {
                flourWheat: 3,
                meat: 83,
                oil: 3,
                tomatoPuree: 8,
                vegetables: 7,
            },
            macronutrients: {
                proteins: 16.2,
                fats: 3.6,
                carbohydrates: 3.2
            },
            caloricity: 102
        },
        {
            id: '8.8.2',
            name: 'Мясо (говядина) тушеное (масло сливочное) 1-й вариант',
            defaultOutput: 100,
            components: {
                butter: 3,
                flourWheat: 3,
                meat: 83,
                tomatoPuree: 8,
                vegetables: 7,
            },
            macronutrients: {
                proteins: 16.2,
                fats: 3.6,
                carbohydrates: 3.2
            },
            caloricity: 102
        },
        {
            id: '8.8.3',
            name: 'Мясо (свинина) тушеное (масло растительное) 1-й вариант',
            defaultOutput: 100,
            components: {
                flourWheat: 3,
                meat: 74,
                oil: 3,
                tomatoPuree: 8,
                vegetables: 7,
            },
            macronutrients: {
                proteins: 11.1,
                fats: 19.6,
                carbohydrates: 3.2
            },
            caloricity: 233
        },
        {
            id: '8.8.4',
            name: 'Мясо (свинина) тушеное (масло сливочное) 1-й вариант',
            defaultOutput: 100,
            components: {
                butter: 3,
                flourWheat: 3,
                meat: 74,
                tomatoPuree: 8,
                vegetables: 7,
            },
            macronutrients: {
                proteins: 11.1,
                fats: 19.6,
                carbohydrates: 3.2
            },
            caloricity: 233
        },
        {
            id: '8.8.5',
            name: 'Мясо (говядина) тушеное (масло растительное) 2-й вариант',
            defaultOutput: 125,
            components: {
                flourWheat: 3,
                meat: 125,
                oil: 3,
                tomatoPuree: 8,
                vegetables: 7,
            },
            macronutrients: {
                proteins: 19.3,
                fats: 3.5,
                carbohydrates: 2.5
            },
            caloricity: 117
        },
        {
            id: '8.8.6',
            name: 'Мясо (говядина) тушеное (масло сливочное) 2-й вариант',
            defaultOutput: 125,
            components: {
                butter: 3,
                flourWheat: 3,
                meat: 125,
                tomatoPuree: 8,
                vegetables: 7,
            },
            macronutrients: {
                proteins: 19.3,
                fats: 3.5,
                carbohydrates: 2.5
            },
            caloricity: 117
        },
        {
            id: '8.8.7',
            name: 'Мясо (свинина) тушеное (масло растительное) 1-й вариант',
            defaultOutput: 125,
            components: {
                flourWheat: 3,
                meat: 110,
                oil: 3,
                tomatoPuree: 8,
                vegetables: 7,
            },
            macronutrients: {
                proteins: 13,
                fats: 22.5,
                carbohydrates: 2.5
            },
            caloricity: 264
        },
        {
            id: '8.8.8',
            name: 'Мясо (свинина) тушеное (масло сливочное) 1-й вариант',
            defaultOutput: 125,
            components: {
                butter: 3,
                flourWheat: 3,
                meat: 110,
                tomatoPuree: 8,
                vegetables: 7,
            },
            macronutrients: {
                proteins: 13,
                fats: 22.5,
                carbohydrates: 2.5
            },
            caloricity: 264
        },
    ]
}

const MYASO_SHPIGOVANNOE: IDish = {
    id: '8.9',
    variants: [
        {
            id: '8.9.1',
            name: 'Мясо (говядина) шпигованное (масло растительное) 1-й вариант',
            defaultOutput: 135,
            components: {
                flourWheat: 4,
                meat: 83,
                oil: 5,
                tomatoPuree: 12,
                vegetables: 27.8,
            },
            macronutrients: {
                proteins: 12.7,
                fats: 4.8,
                carbohydrates: 4.3
            },
            caloricity: 112
        },
        {
            id: '8.9.2',
            name: 'Мясо (говядина) шпигованное (масло сливочное) 1-й вариант',
            defaultOutput: 135,
            components: {
                butter: 5,
                flourWheat: 4,
                meat: 83,
                tomatoPuree: 12,
                vegetables: 27.8,
            },
            macronutrients: {
                proteins: 12.7,
                fats: 4.8,
                carbohydrates: 4.3
            },
            caloricity: 112
        },
        {
            id: '8.9.3',
            name: 'Мясо (свинина) шпигованное (масло растительное) 1-й вариант',
            defaultOutput: 135,
            components: {
                flourWheat: 4,
                meat: 74,
                oil: 5,
                tomatoPuree: 12,
                vegetables: 27.8,
            },
            macronutrients: {
                proteins: 8.4,
                fats: 17.5,
                carbohydrates: 4.3
            },
            caloricity: 208
        },
        {
            id: '8.9.4',
            name: 'Мясо (свинина) шпигованное (масло сливочное) 1-й вариант',
            defaultOutput: 135,
            components: {
                butter: 5,
                flourWheat: 4,
                meat: 74,
                tomatoPuree: 12,
                vegetables: 27.8,
            },
            macronutrients: {
                proteins: 8.4,
                fats: 17.5,
                carbohydrates: 4.3
            },
            caloricity: 208
        },
        {
            id: '8.9.5',
            name: 'Мясо (говядина) шпигованное (масло растительное) 2-й вариант',
            defaultOutput: 110,
            components: {
                flourWheat: 2.7,
                meat: 83,
                oil: 3.3,
                tomatoPuree: 8,
                vegetables: 27.5,
            },
            macronutrients: {
                proteins: 14.7,
                fats: 3.9,
                carbohydrates: 3.1
            },
            caloricity: 106
        },
        {
            id: '8.9.6',
            name: 'Мясо (говядина) шпигованное (масло сливочное) 2-й вариант',
            defaultOutput: 110,
            components: {
                butter: 3.3,
                flourWheat: 2.7,
                meat: 83,
                tomatoPuree: 8,
                vegetables: 27.5,
            },
            macronutrients: {
                proteins: 14.7,
                fats: 3.9,
                carbohydrates: 3.1
            },
            caloricity: 106
        },
        {
            id: '8.9.7',
            name: 'Мясо (свинина) шпигованное (масло растительное) 2-й вариант',
            defaultOutput: 110,
            components: {
                flourWheat: 2.7,
                meat: 74,
                oil: 3.3,
                tomatoPuree: 8,
                vegetables: 27.5,
            },
            macronutrients: {
                proteins: 9.5,
                fats: 19,
                carbohydrates: 3.1
            },
            caloricity: 221
        },
        {
            id: '8.9.8',
            name: 'Мясо (свинина) шпигованное (масло сливочное) 2-й вариант',
            defaultOutput: 110,
            components: {
                butter: 3.3,
                flourWheat: 2.7,
                meat: 74,
                tomatoPuree: 8,
                vegetables: 27.5,
            },
            macronutrients: {
                proteins: 9.5,
                fats: 19,
                carbohydrates: 3.1
            },
            caloricity: 221
        },
    ]
}

const MYASO_PO_BELORUSSKI: IDish = {
    id: '8.10',
    generalOutput: 100,
    variants: [
        {
            id: '8.10.1',
            name: 'Мясо по-белорусски',
            components: {
                breadRye: 4,
                meat: 83,
                sourCream: 25,
                vegetables: 17.5
            },
            macronutrients: {
                proteins: 16.3,
                fats: 7,
                carbohydrates: 3.7
            },
            caloricity: 143
        }
    ]
}

const HOMEMADE_ROAST: IDish = {
    id: '8.11',
    generalOutput: 175,
    variants: [
        {
            id: '8.11.1',
            name: 'Жаркое по-домашнему (говядина, масло сливочное)',
            components: {
                butter: 5,
                meat: 79,
                potato: 100,
                tomatoPuree: 6,
                vegetables: 10
            },
            macronutrients: {
                proteins: 10.2,
                fats: 4.2,
                carbohydrates: 10.7
            },
            caloricity: 122
        },
        {
            id: '8.11.2',
            name: 'Жаркое по-домашнему (говядина, масло растительное)',
            components: {
                meat: 79,
                oil: 5,
                potato: 100,
                tomatoPuree: 6,
                vegetables: 10
            },
            macronutrients: {
                proteins: 10.2,
                fats: 4.2,
                carbohydrates: 10.7
            },
            caloricity: 122
        },
        {
            id: '8.11.3',
            name: 'Жаркое по-домашнему (свинина, масло сливочное)',
            components: {
                butter: 5,
                meat: 74,
                potato: 100,
                tomatoPuree: 6,
                vegetables: 10
            },
            macronutrients: {
                proteins: 7.3,
                fats: 13.7,
                carbohydrates: 10.7
            },
            caloricity: 195
        },
        {
            id: '8.11.4',
            name: 'Жаркое по-домашнему (свинина, масло растительное)',
            components: {
                meat: 74,
                oil: 5,
                potato: 100,
                tomatoPuree: 6,
                vegetables: 10
            },
            macronutrients: {
                proteins: 7.3,
                fats: 13.7,
                carbohydrates: 10.7
            },
            caloricity: 195
        }
    ]
}

const GOULASH: IDish = {
    id: '8.12',
    generalOutput: 100,
    variants: [
        {
            id: '8.12.1',
            name: 'Гуляш из говядины (масло сливочное)',
            components: {
                butter: 3.5,
                flourWheat: 2.5,
                meat: 79,
                tomatoPuree: 7.5,
                vegetables: 10,
            },
            macronutrients: {
                proteins: 16.6,
                fats: 4.9,
                carbohydrates: 5.1
            },
            caloricity: 130
        },
        {
            id: '8.12.2',
            name: 'Гуляш из говядины (масло растительное)',
            components: {
                flourWheat: 2.5,
                meat: 79,
                oil: 3.5,
                tomatoPuree: 7.5,
                vegetables: 10,
            },
            macronutrients: {
                proteins: 16.6,
                fats: 4.9,
                carbohydrates: 5.1
            },
            caloricity: 130
        },
        {
            id: '8.12.3',
            name: 'Гуляш из свинины (масло сливочное)',
            components: {
                butter: 3.5,
                flourWheat: 2.5,
                meat: 74,
                tomatoPuree: 7.5,
                vegetables: 10,
            },
            macronutrients: {
                proteins: 11.4,
                fats: 20.9,
                carbohydrates: 5.1
            },
            caloricity: 254
        },
        {
            id: '8.12.4',
            name: 'Гуляш из свинины (масло растительное)',
            components: {
                flourWheat: 2.5,
                meat: 74,
                oil: 3.5,
                tomatoPuree: 7.5,
                vegetables: 10,
            },
            macronutrients: {
                proteins: 11.4,
                fats: 20.9,
                carbohydrates: 5.1
            },
            caloricity: 254
        },
    ]
}

const LIVER_STEWED_IN_SAUSE: IDish = {
    id: '8.13',
    generalOutput: 100,
    variants: [
        {
            id: '8.13.1',
            name: 'Печень, тушенная в соусе (говяжья)',
            components: {
                byProducts: 71,
                flourWheat: 6.75,
                oil: 5,
                sourCream: 12.5
            },
            macronutrients: {
                proteins: 12.9,
                fats: 9,
                carbohydrates: 4.5
            },
            caloricity: 151
        },
        {
            id: '8.13.2',
            name: 'Печень, тушенная в соусе (свиная)',
            components: {
                flourWheat: 2.5,
                meat: 79,
                oil: 3.5,
                tomatoPuree: 7.5,
                vegetables: 10,
            },
            macronutrients: {
                proteins: 13.5,
                fats: 9,
                carbohydrates: 4.6
            },
            caloricity: 153
        },
    ]
}

const BEEF_STEWED_IN_PRUNES: IDish = {
    id: '8.14',
    generalOutput: 125,
    variants: [
        {
            id: '8.14.1',
            name: 'Говядина, тушенная с черносливом (масло растительное)',
            components: {
                fruitsDried: 10,
                meat: 83,
                oil: 2.5,
                tomatoPuree: 6,
                vegetables: 7.5,
            },
            macronutrients: {
                proteins: 13.2,
                fats: 5,
                carbohydrates: 5.3
            },
            caloricity: 119
        },
        {
            id: '8.14.2',
            name: 'Говядина, тушенная с черносливом (масло сливочное)',
            components: {
                butter: 2.5,
                fruitsDried: 10,
                meat: 83,
                tomatoPuree: 6,
                vegetables: 7.5,
            },
            macronutrients: {
                proteins: 13.2,
                fats: 5,
                carbohydrates: 5.3
            },
            caloricity: 119
        },
    ]
}

const PILAF: IDish = { //убрать возможность менять выход у блюда с выходом 25/120 //БЖУ этого выхода примерное
    id: '8.15',
    generalOutput: 170,
    variants: [
        {
            id: '8.15.1',
            name: 'Плов из говядины (масло сливочное) 1-й вариант',
            components: {
                butter: 6,
                cereals: 40.8,
                meat: 79,
                vegetables: 21
            },
            macronutrients: {
                proteins: 10.7,
                fats: 3.5,
                carbohydrates: 17
            },
            caloricity: 142
        },
        {
            id: '8.15.2',
            name: 'Плов из говядины (масло растительное) 1-й вариант',
            components: {
                cereals: 40.8,
                meat: 79,
                oil: 6,
                vegetables: 21
            },
            macronutrients: {
                proteins: 10.7,
                fats: 3.5,
                carbohydrates: 17
            },
            caloricity: 142
        },
        {
            id: '8.15.3',
            name: 'Плов из свинины (масло сливочное) 1-й вариант',
            components: {
                butter: 6,
                cereals: 40.8,
                meat: 74,
                vegetables: 21
            },
            macronutrients: {
                proteins: 7.8,
                fats: 13.7,
                carbohydrates: 17
            },
            caloricity: 223
        },
        {
            id: '8.15.4',
            name: 'Плов из свинины (масло растительное) 1-й вариант',
            components: {
                cereals: 40.8,
                meat: 74,
                oil: 6,
                vegetables: 21
            },
            macronutrients: {
                proteins: 7.8,
                fats: 13.7,
                carbohydrates: 17
            },
            caloricity: 223
        },
        {
            id: '8.15.5',
            name: 'Плов из говядины (масло сливочное) 2-й вариант',
            components: {
                butter: 6,
                cereals: 40.8,
                meat: 79,
                tomatoPuree: 9,
                vegetables: 15
            },
            macronutrients: {
                proteins: 10.9,
                fats: 3.5,
                carbohydrates: 17.3
            },
            caloricity: 144
        },
        {
            id: '8.15.6',
            name: 'Плов из говядины (масло растительное) 2-й вариант',
            components: {
                cereals: 40.8,
                meat: 79,
                oil: 6,
                tomatoPuree: 9,
                vegetables: 15
            },
            macronutrients: {
                proteins: 10.9,
                fats: 3.5,
                carbohydrates: 17.3
            },
            caloricity: 144
        },
        {
            id: '8.15.7',
            name: 'Плов из свинины (масло сливочное) 2-й вариант',
            components: {
                butter: 6,
                cereals: 40.8,
                meat: 74,
                tomatoPuree: 9,
                vegetables: 15
            },
            macronutrients: {
                proteins: 7.9,
                fats: 13.7,
                carbohydrates: 17.3
            },
            caloricity: 224
        },
        {
            id: '8.15.8',
            name: 'Плов из свинины (масло растительное) 2-й вариант',
            components: {
                cereals: 40.8,
                meat: 74,
                oil: 6,
                tomatoPuree: 9,
                vegetables: 15
            },
            macronutrients: {
                proteins: 7.9,
                fats: 13.7,
                carbohydrates: 17.3
            },
            caloricity: 224
        },
        {
            id: '8.15.9',
            name: 'Плов из говядины (масло сливочное) 2-й вариант выход 25/120',
            defaultOutput: 145,
            components: {
                butter: 6,
                cereals: 40.8,
                meat: 39.5,
                tomatoPuree: 9,
                vegetables: 15
            },
            macronutrients: {
                proteins: 5.45,
                fats: 1.75,
                carbohydrates: 8.65
            },
            caloricity: 72
        },
        {
            id: '8.15.10',
            name: 'Плов из говядины (масло растительное) 2-й вариант выход 25/120',
            defaultOutput: 145,
            components: {
                cereals: 40.8,
                meat: 39.5,
                oil: 6,
                tomatoPuree: 9,
                vegetables: 15
            },
            macronutrients: {
                proteins: 5.45,
                fats: 1.75,
                carbohydrates: 8.65
            },
            caloricity: 72
        },
        {
            id: '8.15.11',
            name: 'Плов из свинины (масло сливочное) 2-й вариант выход 25/120',
            defaultOutput: 145,
            components: {
                butter: 6,
                cereals: 40.8,
                meat: 37,
                tomatoPuree: 9,
                vegetables: 15
            },
            macronutrients: {
                proteins: 3.95,
                fats: 6.85,
                carbohydrates: 8.65
            },
            caloricity: 112
        },
        {
            id: '8.15.12',
            name: 'Плов из свинины (масло растительное) 2-й вариант выход 25/120',
            defaultOutput: 145,
            components: {
                cereals: 40.8,
                meat: 37,
                oil: 6,
                tomatoPuree: 9,
                vegetables: 15
            },
            macronutrients: {
                proteins: 3.95,
                fats: 6.85,
                carbohydrates: 8.65
            },
            caloricity: 112
        },
    ]
}

const CHOPPED_STEAK: IDish = {
    id: '8.16',
    generalOutput: 50,
    variants: [
        {
            id: '8.16.1',
            name: 'Бифштекс рубленый (на молоке)',
            components: {
                meat: 66,
                milkAndFermentedMilkProducts: 5,
                oil: 5,
            },
            macronutrients: {
                proteins: 22.8,
                fats: 22.8,
                carbohydrates: 0
            },
            caloricity: 296
        },
        {
            id: '8.16.2',
            name: 'Бифштекс рубленый (на воде)',
            components: {
                meat: 66,
                oil: 5,
            },
            macronutrients: {
                proteins: 22.8,
                fats: 22.8,
                carbohydrates: 0
            },
            caloricity: 296
        }
    ]
}

const NATURAL_CHOPPED_SCHNITZEL: IDish = {
    id: '8.17',
    generalOutput: 75,
    variants: [
        {
            id: '8.17.1',
            name: 'Шницель натуральный рубленный',
            components: {
                breadWheat: 12,
                eggs: 4,
                meat: 81,
                oil: 6
            },
            macronutrients: {
                proteins: 19.3,
                fats: 23.2,
                carbohydrates: 6.8
            },
            caloricity: 313
        }
    ]
}

const CUTLETS_OR_CUE_BALLS_OR_SCHNITZELS: IDish = {
    id: '8.18',
    generalOutput: 50,
    variants: [
        {
            id: '8.18.1',
            name: 'Котлеты, биточки, шницели',
            components: {
                breadWheat: 14,
                oil: 3,
                meat: 37,
            },
            macronutrients: {
                proteins: 15.8,
                fats: 8.2,
                carbohydrates: 14
            },
            caloricity: 194
        }
    ]
}

const CUTLETS: IDish = {
    id: '8.19',
    variants: [
        {
            id: '8.19.1',
            name: 'Котлеты "Особые"',
            defaultOutput: 50,
            components: {
                breadWheat: 12.5,
                oil: 2.5,
                meat: 40,
            },
            macronutrients: {
                proteins: 14.4,
                fats: 13,
                carbohydrates: 6.2
            },
            caloricity: 199
        },
        {
            id: '8.19.2',
            name: 'Котлеты "Московские"',
            defaultOutput: 40,
            components: {
                breadWheat: 9,
                meat: 30,
                oil: 3,
                vegetables: 0.5,
            },
            macronutrients: {
                proteins: 11.5,
                fats: 16.8,
                carbohydrates: 3.3
            },
            caloricity: 210
        },
        {
            id: '8.19.3',
            name: 'Котлеты "Домашние"',
            defaultOutput: 40,
            components: {
                breadWheat: 8,
                eggs: 0.5,
                oil: 2,
                meat: 29,
                vegetables: 1,
            },
            macronutrients: {
                proteins: 12.8,
                fats: 13.3,
                carbohydrates: 3.5
            },
            caloricity: 185
        },
        {
            id: '8.19.4',
            name: 'Котлеты "Полтавские"',
            defaultOutput: 50,
            components: {
                breadWheat: 6,
                meat: 57,
                oil: 4.5,
                vegetables: 0.5,
            },
            macronutrients: {
                proteins: 20.4,
                fats: 20,
                carbohydrates: 7.4
            },
            caloricity: 291
        }
    ]
}

const KOLBASKI_PO_SLUCKI: IDish = {
    id: '8.20',
    generalOutput: 65,
    variants: [
        {
            id: '8.20.1',
            name: 'Колбаски по-слуцки',
            components: {
                eggs: 5,
                meat: 45,
                oil: 2.5,
                potatoStarch: 2.5,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 11.1,
                fats: 22.2,
                carbohydrates: 5.2
            },
            caloricity: 265
        }
    ]
}

const KOLBASKI_PO_MOGILEVSKI: IDish = {
    id: '8.21',
    generalOutput: 50,
    variants: [
        {
            id: '8.21.1',
            name: 'Колбаски по-могилевски',
            components: {
                flourWheat: 2.5,
                oil: 3,
                meat: 60,
                vegetables: 5,
            },
            macronutrients: {
                proteins: 21.4,
                fats: 17.4,
                carbohydrates: 3.2
            },
            caloricity: 255
        }
    ]
}

const CHOPPED_ZRAZY: IDish = {
    id: '8.22',
    generalOutput: 70,
    variants: [
        {
            id: '8.22.1',
            name: 'Зразы рубленные (масло сливочное)',
            components: {
                breadWheat: 14,
                butter: 4,
                eggs: 5,
                oil: 4,
                meat: 38,
                vegetables: 30,
            },
            macronutrients: {
                proteins: 11,
                fats: 26.3,
                carbohydrates: 14.7
            },
            caloricity: 340
        },
        {
            id: '8.22.1',
            name: 'Зразы рубленные (масло растительное)',
            components: {
                breadWheat: 14,
                eggs: 5,
                oil: 8,
                meat: 38,
                vegetables: 30,
            },
            macronutrients: {
                proteins: 11,
                fats: 26.3,
                carbohydrates: 14.7
            },
            caloricity: 340
        }
    ]
}

const ONION_N_EGG_ROLL: IDish = {
    id: '8.23',
    generalOutput: 70,
    variants: [
        {
            id: '8.23.1',
            name: 'Рулет с луком и яйцом (масло сливочное)',
            components: {
                breadWheat: 9.5,
                butter: 2.5,
                eggs: 11,
                oil: 0.5,
                meat: 38,
                vegetables: 24,
            },
            macronutrients: {
                proteins: 13.9,
                fats: 6.7,
                carbohydrates: 9.4
            },
            caloricity: 154
        },
        {
            id: '8.23.2',
            name: 'Рулет с луком и яйцом (масло растительное)',
            components: {
                breadWheat: 9.5,
                eggs: 11,
                oil: 3,
                meat: 38,
                vegetables: 24,
            },
            macronutrients: {
                proteins: 13.9,
                fats: 6.7,
                carbohydrates: 9.4
            },
            caloricity: 154
        }
    ]
}

const MEATBALLS: IDish = {
    id: '8.24',
    variants: [
        {
            id: '8.24.1',
            name: 'Тефтели (на молоке) с соусом сметанным с томатом 1-й вариант (выход 60-50)',
            defaultOutput: 110,
            components: {
                breadWheat: 8,
                flourWheat: 7.75,
                meat: 38,
                milkAndFermentedMilkProducts: 12,
                oil: 6,
                sourCream: 12.5,
                tomatoPuree: 5,
                vegetables: 20,
            },
            macronutrients: {
                proteins: 6.6,
                fats: 15.8,
                carbohydrates: 9.9
            },
            caloricity: 208
        },
        {
            id: '8.24.2',
            name: 'Тефтели (на воде) с соусом сметанным с томатом 1-й вариант (выход 60-50)',
            defaultOutput: 110,
            components: {
                breadWheat: 8,
                flourWheat: 7.75,
                meat: 38,
                oil: 6,
                sourCream: 12.5,
                tomatoPuree: 5,
                vegetables: 20,
            },
            macronutrients: {
                proteins: 6.6,
                fats: 15.8,
                carbohydrates: 9.9
            },
            caloricity: 208
        },
        {
            id: '8.24.3',
            name: 'Тефтели (на молоке) с соусом красным основным 1-й вариант (выход 60-50)',
            defaultOutput: 110,
            components: {
                breadWheat: 8,
                butter: 1.2,
                flourWheat: 6.5,
                meat: 38,
                milkAndFermentedMilkProducts: 12,
                oil: 6,
                sugar: 0.75,
                tomatoPuree: 5,
                vegetables: 25,
            },
            macronutrients: {
                proteins: 6.6,
                fats: 15.8,
                carbohydrates: 9.9
            },
            caloricity: 208
        },
        {
            id: '8.24.4',
            name: 'Тефтели (на воде) с соусом красным основным 1-й вариант (выход 60-50)',
            defaultOutput: 110,
            components: {
                breadWheat: 8,
                butter: 1.2,
                flourWheat: 6.5,
                meat: 38,
                oil: 6,
                sugar: 0.75,
                tomatoPuree: 5,
                vegetables: 25,
            },
            macronutrients: {
                proteins: 6.6,
                fats: 15.8,
                carbohydrates: 9.9
            },
            caloricity: 208
        },
        {
            id: '8.24.5',
            name: 'Тефтели (на молоке) с соусом сметанным с томатом 2-й вариант (выход 80/40, можно кратно менять)',
            defaultOutput: 120,
            components: {
                breadWheat: 10.7,
                flourWheat: 8.3,
                meat: 50.7,
                milkAndFermentedMilkProducts: 16,
                oil: 8,
                sourCream: 10,
                tomatoPuree: 4,
                vegetables: 26.7,
            },
            macronutrients: {
                proteins: 7.8,
                fats: 18.3,
                carbohydrates: 10.7
            },
            caloricity: 238
        },
        {
            id: '8.24.6',
            name: 'Тефтели (на воде) с соусом сметанным с томатом 1-й вариант (выход 80/40, можно кратно менять)',
            defaultOutput: 120,
            components: {
                breadWheat: 10.7,
                flourWheat: 8.3,
                meat: 50.7,
                oil: 8,
                sourCream: 10,
                tomatoPuree: 4,
                vegetables: 26.7,
            },
            macronutrients: {
                proteins: 7.8,
                fats: 18.3,
                carbohydrates: 10.7
            },
            caloricity: 238
        },
        {
            id: '8.24.7',
            name: 'Тефтели (на молоке) с соусом красным основным 1-й вариант (выход 80/40, можно кратно менять)',
            defaultOutput: 120,
            components: {
                butter: 0.96,
                breadWheat: 10.7,
                flourWheat: 7.3,
                meat: 50.7,
                milkAndFermentedMilkProducts: 16,
                oil: 8,
                sugar: 0.6,
                tomatoPuree: 4,
                vegetables: 30.7,
            },
            macronutrients: {
                proteins: 7.8,
                fats: 18.3,
                carbohydrates: 10.7
            },
            caloricity: 238
        },
        {
            id: '8.24.8',
            name: 'Тефтели (на воде) с соусом красным основным 1-й вариант (выход 80/40, можно кратно менять)',
            defaultOutput: 120,
            components: {
                butter: 0.96,
                breadWheat: 10.7,
                flourWheat: 7.3,
                meat: 50.7,
                oil: 8,
                sugar: 0.6,
                tomatoPuree: 4,
                vegetables: 30.7,
            },
            macronutrients: {
                proteins: 7.8,
                fats: 18.3,
                carbohydrates: 10.7
            },
            caloricity: 238
        },
    ]
}

const MEATBALLS_SECOND_VARIANT: IDish = { //выход 60/50 нельзя менять
    id: '8.25',
    variants: [
        {
            id: '8.25.1',
            name: 'Тефтели (2-й вариант) (на молоке) с соусом сметанным с томатом 1-й вариант (выход 60/50)',
            defaultOutput: 110,
            components: {
                breadWheat: 8,
                cereals: 5,
                flourWheat: 7.75,
                meat: 38,
                milkAndFermentedMilkProducts: 6,
                oil: 8,
                sourCream: 12.5,
                tomatoPuree: 5,
                vegetables: 18
            },
            macronutrients: {
                proteins: 6.9,
                fats: 17.1,
                carbohydrates: 12.7
            },
            caloricity: 233
        },
        {
            id: '8.25.2',
            name: 'Тефтели (2-й вариант) (на воде) с соусом сметанным с томатом 1-й вариант (выход 60/50)',
            defaultOutput: 110,
            components: {
                breadWheat: 8,
                cereals: 5,
                flourWheat: 7.75,
                meat: 38,
                oil: 8,
                tomatoPuree: 5,
                vegetables: 18
            },
            macronutrients: {
                proteins: 6.9,
                fats: 17.1,
                carbohydrates: 12.7
            },
            caloricity: 233
        },
        {
            id: '8.25.3',
            name: 'Тефтели (2-й вариант) (на молоке) с соусом красным основным 1-й вариант (выход 60/50)',
            defaultOutput: 110,
            components: {
                breadWheat: 8,
                butter: 1.2,
                cereals: 5,
                flourWheat: 6.7,
                meat: 38,
                milkAndFermentedMilkProducts: 6,
                oil: 8,
                sugar: 0.75,
                tomatoPuree: 5,
                vegetables: 23
            },
            macronutrients: {
                proteins: 6.6,
                fats: 15.8,
                carbohydrates: 9.9
            },
            caloricity: 208
        },
        {
            id: '8.25.4',
            name: 'Тефтели (2-й вариант) (на воде) с соусом красным основным 1-й вариант (выход 60/50)',
            defaultOutput: 110,
            components: {
                breadWheat: 8,
                butter: 1.2,
                cereals: 5,
                flourWheat: 6.7,
                meat: 38,
                oil: 8,
                sugar: 0.75,
                tomatoPuree: 5,
                vegetables: 23
            },
            macronutrients: {
                proteins: 6.6,
                fats: 15.8,
                carbohydrates: 9.9
            },
            caloricity: 208
        },
        {
            id: '8.25.5',
            name: 'Тефтели (2-й вариант) (на молоке) с соусом сметанным с томатом 2-й вариант (выход 60/30 выход можно кратно менять)',
            defaultOutput: 90,
            components: {
                breadWheat: 9,
                cereals: 5,
                flourWheat: 6.25,
                meat: 38,
                milkAndFermentedMilkProducts: 6,
                oil: 8,
                sourCream: 7.5,
                tomatoPuree: 3,
                vegetables: 18,
            },
            macronutrients: {
                proteins: 8.1,
                fats: 19.9,
                carbohydrates: 14.1
            },
            caloricity: 267
        },
        {
            id: '8.25.6',
            name: 'Тефтели (2-й вариант) (на воде) с соусом сметанным с томатом 2-й вариант (выход 60/30 выход можно кратно менять)',
            defaultOutput: 90,
            components: {
                breadWheat: 9,
                cereals: 5,
                flourWheat: 6.25,
                meat: 38,
                oil: 8,
                sourCream: 7.5,
                tomatoPuree: 3,
                vegetables: 18,
            },
            macronutrients: {
                proteins: 8.1,
                fats: 19.9,
                carbohydrates: 14.1
            },
            caloricity: 267
        },
        {
            id: '8.25.7',
            name: 'Тефтели (2-й вариант) (на молоке) с соусом красным основным 2-й вариант (выход 60/30 выход можно кратно менять)',
            defaultOutput: 90,
            components: {
                breadWheat: 9,
                butter: 0.72,
                cereals: 5,
                flourWheat: 5.5,
                meat: 38,
                milkAndFermentedMilkProducts: 6,
                oil: 8,
                sugar: 0.45,
                tomatoPuree: 3,
                vegetables: 21,
            },
            macronutrients: {
                proteins: 8.1,
                fats: 19.9,
                carbohydrates: 14.1
            },
            caloricity: 267
        },
        {
            id: '8.25.8',
            name: 'Тефтели (2-й вариант) (на воде) с соусом красным основным 2-й вариант (выход 60/30 выход можно кратно менять)',
            defaultOutput: 90,
            components: {
                breadWheat: 9,
                butter: 0.72,
                cereals: 5,
                flourWheat: 5.5,
                meat: 38,
                oil: 8,
                sugar: 0.45,
                tomatoPuree: 3,
                vegetables: 21,
            },
            macronutrients: {
                proteins: 8.1,
                fats: 19.9,
                carbohydrates: 14.1
            },
            caloricity: 267
        },
    ]
}

const MEATBALLS_YOZHIKI: IDish = { //выход 60/50 нельзя менять
    id: '8.26',
    variants: [
        {
            id: '8.26.1',
            name: 'Тефтели "Ёжики" (масло растительное) 1-й вариант (выход 60/50)',
            defaultOutput: 110,
            components: {
                butter: 1,
                cereals: 10,
                flourWheat: 3.375,
                meat: 38,
                oil: 7,
                sourCream: 11.25,
                tomatoPuree: 5,
                vegetables: 22,
            },
            macronutrients: {
                proteins: 7.1,
                fats: 13.1,
                carbohydrates: 10.3
            },
            caloricity: 187
        },
        {
            id: '8.26.2',
            name: 'Тефтели "Ёжики" (масло сливочное) 1-й вариант (выход 60/50)',
            defaultOutput: 110,
            components: {
                butter: 6,
                cereals: 10,
                flourWheat: 3.375,
                meat: 38,
                oil: 2,
                sourCream: 11.25,
                tomatoPuree: 5,
                vegetables: 22,
            },
            macronutrients: {
                proteins: 7.1,
                fats: 13.1,
                carbohydrates: 10.3
            },
            caloricity: 187
        },
        {
            id: '8.26.3',
            name: 'Тефтели "Ёжики" (масло растительное) 2-й вариант (выход 60/30 можно кратно менять)',
            defaultOutput: 90,
            components: {
                butter: 0.6,
                cereals: 10,
                flourWheat: 2.025,
                meat: 38,
                oil: 7,
                sourCream: 6.75,
                tomatoPuree: 3,
                vegetables: 18,
            },
            macronutrients: {
                proteins: 8.3,
                fats: 14.8,
                carbohydrates: 11.1
            },
            caloricity: 210
        },
        {
            id: '8.26.4',
            name: 'Тефтели "Ёжики" (масло сливочное) 2-й вариант (выход 60/30 можно кратно менять)',
            defaultOutput: 90,
            components: {
                butter: 5.6,
                cereals: 10,
                flourWheat: 2.025,
                meat: 38,
                oil: 2,
                sourCream: 6.75,
                tomatoPuree: 3,
                vegetables: 18,
            },
            macronutrients: {
                proteins: 8.3,
                fats: 14.8,
                carbohydrates: 11.1
            },
            caloricity: 210
        },
    ]
}

const MEATBALLS_IN_SAUSE: IDish = {
    id: '8.27',
    generalOutput: 105,
    variants: [
        {
            id: '8.27.1',
            name: 'Фрикадельки (говядина) в соусе',
            components: {
                breadWheat: 8,
                flourWheat: 8.75,
                oil: 5,
                meat: 38,
                sourCream: 12.5,
                vegetables: 4
            },
            macronutrients: {
                proteins: 8.4,
                fats: 7.5,
                carbohydrates: 9.1
            },
            caloricity: 138
        },
        {
            id: '8.27.2',
            name: 'Фрикадельки (свинина) в соусе',
            components: {
                breadWheat: 8,
                flourWheat: 8.75,
                oil: 5,
                meat: 38,
                sourCream: 12.5,
                vegetables: 4
            },
            macronutrients: {
                proteins: 6.7,
                fats: 15.7,
                carbohydrates: 9.1
            },
            caloricity: 204
        }
    ]
}

const STEAM_CUTLETS: IDish = {
    id: '8.28',
    generalOutput: 50,
    variants: [
        {
            id: '8.28.1',
            name: 'Биточки паровые (говядина)',
            components: {
                breadWheat: 9,
                butter: 2,
                meat: 37,
            },
            macronutrients: {
                proteins: 14.8,
                fats: 14,
                carbohydrates: 8
            },
            caloricity: 218
        },
        {
            id: '8.28.2',
            name: 'Биточки паровые (телятина)',
            components: {
                breadWheat: 9,
                butter: 2,
                meat: 37,
            },
            macronutrients: {
                proteins: 15,
                fats: 12.8,
                carbohydrates: 8
            },
            caloricity: 207
        }
    ]
}

const BEEF_DUMPLINGS: IDish = {
    id: '8.29',
    generalOutput: 50,
    variants: [
        {
            id: '8.29.1',
            name: 'Кнели из говядины',
            components: {
                breadWheat: 4,
                eggs: 3,
                meat: 40,
                milkAndFermentedMilkProducts: 21,
            },
            macronutrients: {
                proteins: 16.8,
                fats: 6.8,
                carbohydrates: 5.2
            },
            caloricity: 154
        }
    ]
}

const BEEF_PUDDING: IDish = {
    id: '8.30',
    generalOutput: 70,
    variants: [
        {
            id: '8.30.1',
            name: 'Пудинг из говядины',
            components: {
                butter: 5,
                eggs: 10,
                meat: 81,
                milkAndFermentedMilkProducts: 15,
            },
            macronutrients: {
                proteins: 24.6,
                fats: 9.7,
                carbohydrates: 1
            },
            caloricity: 190
        }
    ]
}

const LIVER_FRITTERS: IDish = {
    id: '8.31',
    generalOutput: 50,
    variants: [
        {
            id: '8.31.1',
            name: 'Оладьи из печени (говяжьей)',
            components: {
                breadWheat: 7,
                butter: 1.5,
                byProducts: 50,
                oil: 5.5,
            },
            macronutrients: {
                proteins: 17.8,
                fats: 15,
                carbohydrates: 6.2
            },
            caloricity: 232
        },
        {
            id: '8.31.2',
            name: 'Оладьи из печени (свиной)',
            components: {
                breadWheat: 7,
                butter: 1.5,
                byProducts: 50,
                oil: 5.5,
            },
            macronutrients: {
                proteins: 18.8,
                fats: 15.2,
                carbohydrates: 6.2
            },
            caloricity: 236
        }
    ]
}

const ZUCCHINI_OR_PEPPERS_STUFFED_W_MEAT_N_RICE: IDish = {
    id: '8.32',
    variants: [
        {
            id: '8.32.1',
            name: 'Кабачки, перец, фаршированные мясом и рисом (масло растительное)',
            defaultOutput: 100,
            components: {
                breadWheat: 1.5,
                cereals: 4.7,
                meat: 40.5,
                oil: 3,
                vegetables: 75.5,
            },
            macronutrients: {
                proteins: 9,
                fats: 3.7,
                carbohydrates: 8
            },
            caloricity: 101
        },
        {
            id: '8.32.2',
            name: 'Кабачки, перец, фаршированные мясом и рисом (масло сливочное)',
            defaultOutput: 100,
            components: {
                breadWheat: 1.5,
                butter: 3,
                cereals: 4.7,
                meat: 40.5,
                vegetables: 75.5,
            },
            macronutrients: {
                proteins: 9,
                fats: 3.7,
                carbohydrates: 8
            },
            caloricity: 101
        },
        {
            id: '8.32.3',
            name: 'Кабачки, перец, фаршированные мясом и рисом с соусом сметанным (масло растительное)',
            defaultOutput: 150,
            components: {
                breadWheat: 1.5,
                cereals: 4.7,
                flourWheat: 3.75,
                meat: 40.5,
                oil: 3,
                sourCream: 12.5,
                vegetables: 75.5,
            },
            macronutrients: {
                proteins: 6.5,
                fats: 3.9,
                carbohydrates: 7.1
            },
            caloricity: 90
        },
        {
            id: '8.32.4',
            name: 'Кабачки, перец, фаршированные мясом и рисом с соусом сметанным (масло сливочное)',
            defaultOutput: 150,
            components: {
                breadWheat: 1.5,
                butter: 3,
                cereals: 4.7,
                flourWheat: 3.75,
                meat: 40.5,
                sourCream: 12.5,
                vegetables: 75.5,
            },
            macronutrients: {
                proteins: 6.5,
                fats: 3.9,
                carbohydrates: 7.1
            },
            caloricity: 90
        },
    ]
}

const CABBAGE_ROLLS_W_MEAT_N_RICE: IDish = {
    id: '8.33',
    generalOutput: 158,
    variants: [
        {
            id: '8.33.1',
            name: 'Голубцы с мясом и рисом (масло растительное)',
            components: {
                cereals: 5.5,
                flourWheat: 3.75,
                meat: 40.5,
                oil: 2.5,
                sourCream: 12.5,
                vegetables: 65,
            },
            macronutrients: {
                proteins: 11.3,
                fats: 4,
                carbohydrates: 6.2
            },
            caloricity: 106
        },
        {
            id: '8.33.2',
            name: 'Голубцы с мясом и рисом (масло сливочное)',
            components: {
                butter: 2.5,
                cereals: 5.5,
                flourWheat: 3.75,
                meat: 40.5,
                sourCream: 12.5,
                vegetables: 65,
            },
            macronutrients: {
                proteins: 11.3,
                fats: 4,
                carbohydrates: 6.2
            },
            caloricity: 106
        },
    ]
}

const CABBAGE_ROLLS_LYUBITELSKIE: IDish = {
    id: '8.34',
    generalOutput: 165,
    variants: [
        {
            id: '8.34.1',
            name: 'Голубцы "Любительские" из говядины (масло растительное)',
            components: {
                breadWheat: 8,
                cereals: 5.5,
                flourWheat: 3.75,
                meat: 40.5,
                oil: 6,
                sourCream: 12.5,
                vegetables: 74,
            },
            macronutrients: {
                proteins: 6.3,
                fats: 6.1,
                carbohydrates: 8.9
            },
            caloricity: 115
        },
        {
            id: '8.34.2',
            name: 'Голубцы "Любительские" из говядины (масло сливочное)',
            components: {
                breadWheat: 8,
                butter: 2.5,
                cereals: 5.5,
                flourWheat: 3.75,
                meat: 40.5,
                oil: 3.5,
                sourCream: 12.5,
                vegetables: 74,
            },
            macronutrients: {
                proteins: 6.3,
                fats: 6.1,
                carbohydrates: 8.9
            },
            caloricity: 115
        },
        {
            id: '8.34.3',
            name: 'Голубцы "Любительские" из свинины (масло растительное)',
            components: {
                breadWheat: 8,
                cereals: 5.5,
                flourWheat: 3.75,
                meat: 40.5,
                oil: 6,
                sourCream: 12.5,
                vegetables: 74,
            },
            macronutrients: {
                proteins: 5.2,
                fats: 11.2,
                carbohydrates: 9
            },
            caloricity: 157
        },
        {
            id: '8.34.4',
            name: 'Голубцы "Любительские" из свинины (масло сливочное)',
            components: {
                breadWheat: 8,
                butter: 2.5,
                cereals: 5.5,
                flourWheat: 3.75,
                meat: 40.5,
                oil: 3.5,
                sourCream: 12.5,
                vegetables: 74,
            },
            macronutrients: {
                proteins: 5.2,
                fats: 11.2,
                carbohydrates: 9
            },
            caloricity: 157
        },
    ]
}

const CUE_CARDS_PO_BELORUSSKI: IDish = {
    id: '8.35',
    generalOutput: 75,
    variants: [
        {
            id: '8.35.1',
            name: 'Биточки по-белорусски (на молоке)',
            components: {
                eggs: 8,
                meat: 77,
                milkAndFermentedMilkProducts: 12,
                oil: 5,
                vegetables: 10
            },
            macronutrients: {
                proteins: 20.1,
                fats: 10.3,
                carbohydrates: 1.2
            },
            caloricity: 178
        },
        {
            id: '8.35.2',
            name: 'Биточки по-белорусски (на воде)',
            components: {
                eggs: 8,
                meat: 77,
                oil: 5,
                vegetables: 10
            },
            macronutrients: {
                proteins: 20.1,
                fats: 10.3,
                carbohydrates: 1.2
            },
            caloricity: 178
        },
    ]
}

const POTATO_PANCAKES_STUFFED_W_MEAT: IDish = {
    id: '8.36',
    variants: [
        {
            id: '8.36.1',
            name: 'Оладьи картофельные, фаршированные мясом',
            defaultOutput: 130,
            components: {
                eggs: 4,
                flourWheat: 5,
                meat: 40,
                oil: 5,
                potato: 112.5,
                vegetables: 4,
            },
            macronutrients: {
                proteins: 7.9,
                fats: 9.2,
                carbohydrates: 15.9
            },
            caloricity: 178
        },
        {
            id: '8.36.2',
            name: 'Оладьи картофельные, фаршированные мясом со сметаной',
            defaultOutput: 145,
            components: {
                eggs: 4,
                flourWheat: 5,
                meat: 40,
                oil: 5,
                potato: 112.5,
                sourCream: 15,
                vegetables: 4,
            },
            macronutrients: {
                proteins: 7.4,
                fats: 10.3,
                carbohydrates: 14.6
            },
            caloricity: 181
        },
    ]
}

const POTATO_PIES_W_MEAT: IDish = {
    id: '8.37',
    variants: [
        {
            id: '8.37.1',
            name: 'Пирожки картофельные с мясом (говядина)',
            defaultOutput: 100,
            components: {
                eggs: 6.5,
                flourWheat: 2.7,
                meat: 25,
                oil: 1.8,
                potato: 90,
                vegetables: 3
            },
            macronutrients: {
                proteins: 7.3,
                fats: 3.3,
                carbohydrates: 15.4
            },
            caloricity: 120
        },
        {
            id: '8.37.2',
            name: 'Пирожки картофельные с мясом (свинина)',
            defaultOutput: 100,
            components: {
                eggs: 6.5,
                flourWheat: 2.7,
                meat: 25,
                oil: 1.8,
                potato: 90,
                vegetables: 3
            },
            macronutrients: {
                proteins: 7.3,
                fats: 3.3,
                carbohydrates: 15.4
            },
            caloricity: 120
        },
        {
            id: '8.37.3',
            name: 'Пирожки картофельные с мясом (говядина) со сметаной',
            defaultOutput: 110,
            components: {
                eggs: 6.5,
                flourWheat: 2.7,
                meat: 25,
                oil: 1.8,
                potato: 90,
                sourCream: 10,
                vegetables: 3
            },
            macronutrients: {
                proteins: 6.9,
                fats: 4.8,
                carbohydrates: 14.3
            },
            caloricity: 128
        },
        {
            id: '8.37.4',
            name: 'Пирожки картофельные с мясом (свинина) со сметаной',
            defaultOutput: 110,
            components: {
                eggs: 6.5,
                flourWheat: 2.7,
                meat: 25,
                oil: 1.8,
                potato: 90,
                sourCream: 10,
                vegetables: 3
            },
            macronutrients: {
                proteins: 6.9,
                fats: 4.8,
                carbohydrates: 14.3
            },
            caloricity: 128
        },
    ]
}

const POTATO_CASSEROLE_W_MEAT: IDish = {
    id: '8.38',
    generalOutput: 200,
    variants: [
        {
            id: '8.38.1',
            name: 'Запеканка картофельная с мясом (масло растительное)',
            components: {
                breadWheat: 4,
                meat: 63.5,
                oil: 8,
                potato: 192,
                vegetables: 16,
            },
            macronutrients: {
                proteins: 7.9,
                fats: 5,
                carbohydrates: 16.2
            },
            caloricity: 141
        },
        {
            id: '8.38.2',
            name: 'Запеканка картофельная с мясом (масло сливочное)',
            components: {
                breadWheat: 4,
                butter: 2.5,
                meat: 63.5,
                oil: 5.5,
                potato: 192,
                vegetables: 16,
            },
            macronutrients: {
                proteins: 7.9,
                fats: 5,
                carbohydrates: 16.2
            },
            caloricity: 141
        },
    ]
}

const ZRAZI_VYDUMKA: IDish = {
    id: '8.39',
    generalOutput: 80,
    variants: [
        {
            id: '8.39.1',
            name: 'Зразы "Выдумка" (на молоке, масло растительное)',
            components: {
                breadWheat: 5,
                cheese: 5,
                eggs: 2,
                meat: 60,
                milkAndFermentedMilkProducts: 8,
                oil: 7.5,
                vegetables: 22.5,
            },
            macronutrients: {
                proteins: 9.5,
                fats: 11.5,
                carbohydrates: 11
            },
            caloricity: 178
        },
        {
            id: '8.39.2',
            name: 'Зразы "Выдумка" (на молоке, масло сливочное)',
            components: {
                breadWheat: 5,
                butter: 2.5,
                cheese: 5,
                eggs: 2,
                meat: 60,
                milkAndFermentedMilkProducts: 8,
                oil: 5,
                vegetables: 22.5,
            },
            macronutrients: {
                proteins: 9.5,
                fats: 11.5,
                carbohydrates: 11
            },
            caloricity: 178
        },
        {
            id: '8.39.3',
            name: 'Зразы "Выдумка" (на воде, масло растительное)',
            components: {
                breadWheat: 5,
                cheese: 5,
                eggs: 2,
                meat: 60,
                oil: 7.5,
                vegetables: 22.5,
            },
            macronutrients: {
                proteins: 9.5,
                fats: 11.5,
                carbohydrates: 11
            },
            caloricity: 178
        },
        {
            id: '8.39.4',
            name: 'Зразы "Выдумка" (на воде, масло сливочное)',
            components: {
                breadWheat: 5,
                butter: 2.5,
                cheese: 5,
                eggs: 2,
                meat: 60,
                oil: 5,
                vegetables: 22.5,
            },
            macronutrients: {
                proteins: 9.5,
                fats: 11.5,
                carbohydrates: 11
            },
            caloricity: 178
        },
    ]
}

const CUE_CARDS_SHKOLNIK: IDish = {
    id: '8.40',
    generalOutput: 50,
    variants: [
        {
            id: '8.40.1',
            name: 'Биточки "Школьник" (на молоке, мука пшеничная)',
            components: {
                cereals: 4,
                flourWheat: 2.5,
                meat: 42,
                milkAndFermentedMilkProducts: 8,
                oil: 3,
                vegetables: 7,
            },
            macronutrients: {
                proteins: 18.8,
                fats: 18,
                carbohydrates: 9.2
            },
            caloricity: 258
        },
        {
            id: '8.40.2',
            name: 'Биточки "Школьник" (на молоке, сухари)',
            components: {
                breadWheat: 2.5,
                cereals: 4,
                meat: 42,
                milkAndFermentedMilkProducts: 8,
                oil: 3,
                vegetables: 7,
            },
            macronutrients: {
                proteins: 18.8,
                fats: 18,
                carbohydrates: 9.2
            },
            caloricity: 258
        },
        {
            id: '8.40.3',
            name: 'Биточки "Школьник" (на воде, мука пшеничная)',
            components: {
                cereals: 4,
                flourWheat: 2.5,
                meat: 42,
                oil: 3,
                vegetables: 7,
            },
            macronutrients: {
                proteins: 18.8,
                fats: 18,
                carbohydrates: 9.2
            },
            caloricity: 258
        },
        {
            id: '8.40.4',
            name: 'Биточки "Школьник" (на воде, сухари)',
            components: {
                breadWheat: 2.5,
                cereals: 4,
                meat: 42,
                oil: 3,
                vegetables: 7,
            },
            macronutrients: {
                proteins: 18.8,
                fats: 18,
                carbohydrates: 9.2
            },
            caloricity: 258
        },
    ]
}