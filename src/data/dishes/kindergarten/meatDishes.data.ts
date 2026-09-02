import type { IDish } from "@/model/dish.model";

const BOILED_MEAT: IDish = {
    id: 'kids-10.1',
    variants: [
        {
            id: 'kids-10.1.1',
            name: 'Мясо отварное',
            defaultOutput: 60,
            components: {
                meat: 97,
                vegetables: 4
            },
            macronutrients: {
                proteins: 28,
                fats: 5.12,
                carbohydrates: 0.48
            },
            caloricity: 162.77
        },
        {
            id: 'kids-10.1.2',
            name: 'Мясо отварное с маслом сливочным',
            defaultOutput: 65,
            components: {
                butter: 5,
                meat: 97,
                vegetables: 4
            },
            macronutrients: {
                proteins: 26.3,
                fats: 10.35,
                carbohydrates: 3.37
            },
            caloricity: 215.91
        },
        {
            id: 'kids-10.1.3',
            name: 'Мясо отварное с соусом молочным',
            defaultOutput: 110,
            components: {
                butter: 2.5,
                flourWheat: 2.5,
                meat: 97,
                milkAndFermentedMilkProducts: 50,
                sugar: 0.5,
                vegetables: 4
            },
            macronutrients: {
                proteins: 16.67,
                fats: 5.8,
                carbohydrates: 3.9
            },
            caloricity: 136.61
        }
    ]
}

const BOILED_N_MASHED_MEAT: IDish = {
    id: 'kids-10.2',
    generalOutput: 15,
    variants: [
        {
            id: 'kids-10.2.1',
            name: 'Мясо отварное отварное (добавка в суп)',
            components: {
                meat: 25,
                vegetables: 1
            },
            macronutrients: {
                proteins: 16.8,
                fats: 3.07,
                carbohydrates: 0.29
            },
            caloricity: 97.66
        }
    ]
}

const BOILED_TONGUE: IDish = {
    id: 'kids-10.3',
    variants: [
        {
            id: 'kids-10.3.1',
            name: 'Язык отварной (говяжий)',
            defaultOutput: 70,
            components: {
                byProducts: 118,
                vegetables: 6
            },
            macronutrients: {
                proteins: 24.1,
                fats: 17.96,
                carbohydrates: 0.63
            },
            caloricity: 265.96
        },
        {
            id: 'kids-10.3.2',
            name: 'Язык отварной (говяжий) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                byProducts: 118,
                vegetables: 6
            },
            macronutrients: {
                proteins: 22.79,
                fats: 8.97,
                carbohydrates: 2.92
            },
            caloricity: 293.11
        },
        {
            id: 'kids-10.3.3',
            name: 'Язык отварной (говяжий) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 2.5,
                flourWheat: 2.5,
                byProducts: 118,
                milkAndFermentedMilkProducts: 50,
                sugar: 0.5,
                vegetables: 6
            },
            macronutrients: {
                proteins: 15.36,
                fats: 13.3,
                carbohydrates: 3.78
            },
            caloricity: 199.96
        },
        {
            id: 'kids-10.3.4',
            name: 'Язык отварной (свиной)',
            defaultOutput: 70,
            components: {
                byProducts: 119,
                vegetables: 6
            },
            macronutrients: {
                proteins: 24.16,
                fats: 23.94,
                carbohydrates: 0.63
            },
            caloricity: 321.73
        },
        {
            id: 'kids-10.3.5',
            name: 'Язык отварной (свиной) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                byProducts: 119,
                vegetables: 6
            },
            macronutrients: {
                proteins: 22.57,
                fats: 27.19,
                carbohydrates: 0.64
            },
            caloricity: 345.16
        },
        {
            id: 'kids-10.3.6',
            name: 'Язык отварной (свиной) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 2.5,
                flourWheat: 2.5,
                byProducts: 119,
                milkAndFermentedMilkProducts: 50,
                sugar: 0.5,
                vegetables: 6
            },
            macronutrients: {
                proteins: 15.4,
                fats: 16.8,
                carbohydrates: 3.8
            },
            caloricity: 232.5
        }
    ]
}

const BOILED_SAUSAGES: IDish = {
    id: 'kids-10.4',
    generalOutput: 50,
    variants: [
        {
            id: 'kids-10.4.1',
            name: 'Сосиски (сардельки) отварные',
            components: {
                sausageProducts: 50
            },
            macronutrients: {
                proteins: 9.8,
                fats: 21.04,
                carbohydrates: 1.44
            },
            caloricity: 293.4
        }
    ]
}

const BOILED_BEEF_BEEFSTROGANOFF: IDish = {
    id: 'kids-10.5',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-10.5.1',
            name: 'Бефстроганов из отварной говядины',
            components: {
                flourWheat: 2.5,
                meat: 81,
                sourCream: 25,
                vegetables: 5,
            },
            macronutrients: {
                proteins: 15.62,
                fats: 6.21,
                carbohydrates: 2.59
            },
            caloricity: 131.21
        }
    ]
}

const STEWED_MEAT: IDish = {
    id: 'kids-10.6',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-10.6.1',
            name: 'Мясо тушеное',
            components: {
                flourWheat: 3,
                meat: 83,
                oil: 3.5,
                tomatoPuree: 4,
                vegetables: 12,
            },
            macronutrients: {
                proteins: 14.88,
                fats: 5.74,
                carbohydrates: 3.11
            },
            caloricity: 126.71
        }
    ]
}

const MYASO_PO_OSENNEMU: IDish = {
    id: 'kids-10.7',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-10.7.1',
            name: 'Мясо по-осеннему',
            components: {
                fruits: 33,
                meat: 83,
                oil: 5,
                vegetables: 8,
            },
            macronutrients: {
                proteins: 14.54,
                fats: 7.14,
                carbohydrates: 3.5
            },
            caloricity: 139.25
        }
    ]
}

const MYASO_PO_BELORUSSKI: IDish = {
    id: 'kids-10.8',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-10.8.1',
            name: 'Мясо по-белорусски',
            components: {
                breadRye: 4,
                meat: 83,
                sourCream: 25,
                vegetables: 18,
            },
            macronutrients: {
                proteins: 15.35,
                fats: 8.65,
                carbohydrates: 3.77
            },
            caloricity: 158.01
        }
    ]
}

const HOMEMADE_ROAST: IDish = {
    id: 'kids-10.9',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-10.9.1',
            name: 'Жаркое по-домашнему',
            components: {
                meat: 79,
                oil: 6,
                potato: 125,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 8.37,
                fats: 3.73,
                carbohydrates: 9.74
            },
            caloricity: 105.27
        }
    ]
}

const GOULASH: IDish = {
    id: 'kids-10.10',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-10.10.1',
            name: 'Гуляш',
            components: {
                flourWheat: 2.5,
                meat: 79,
                oil: 3,
                tomatoPuree: 4,
                vegetables: 16
            },
            macronutrients: {
                proteins: 14.19,
                fats: 5.17,
                carbohydrates: 3.18
            },
            caloricity: 118.87
        }
    ]
}

const GOULASH_W_BOILED_MEAT: IDish = {
    id: 'kids-10.11',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-10.11.1',
            name: 'Гуляш из отварного мяса',
            components: {
                butter: 7,
                flourWheat: 3,
                meat: 79,
                tomatoPuree: 4,
                vegetables: 20,
            },
            macronutrients: {
                proteins: 14.31,
                fats: 7.62,
                carbohydrates: 3.79
            },
            caloricity: 144.83
        }
    ]
}

const LIVER_STEWED_IN_SAUSE_V1: IDish = {
    id: 'kids-10.12',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-10.12.1',
            name: 'Печень, тушенная в соусе (вариант 1)',
            components: {
                byProducts: 71,
                flourWheat: 5.5,
                oil: 5,
                sourCream: 25,
            },
            macronutrients: {
                proteins: 12.44,
                fats: 11.16,
                carbohydrates: 4.13
            },
            caloricity: 170.43
        }
    ]
}

const LIVER_STEWED_IN_SAUSE_V2: IDish = {
    id: 'kids-10.13',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-10.13.1',
            name: 'Печень, тушенная в соусе (вариант 2)',
            components: {
                butter: 5,
                byProducts: 71,
                flourWheat: 5.5,
                sourCream: 25,
            },
            macronutrients: {
                proteins: 12.46,
                fats: 10.4,
                carbohydrates: 4.17
            },
            caloricity: 163.64
        }
    ]
}

const BOILED_BEEF_PILAF: IDish = {
    id: 'kids-10.14',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-10.14.1',
            name: 'Плов из отварной говядины',
            components: {
                butter: 7.5,
                cereals: 51,
                meat: 81,
                vegetables: 26.5,
            },
            macronutrients: {
                proteins: 8.76,
                fats: 4.24,
                carbohydrates: 17.34
            },
            caloricity: 146.45
        }
    ]
}

const NATURAL_CHOPPED_SCHNITZEL: IDish = {
    id: 'kids-10.15',
    generalOutput: 70,
    variants: [
        {
            id: 'kids-10.15.1',
            name: 'Шницель натуральный рубленый (из говядины)',
            components: {
                breadWheat: 11,
                eggs: 4,
                meat: 75.5,
                oil: 5.5
            },
            macronutrients: {
                proteins: 18.33,
                fats: 10.66,
                carbohydrates: 9.86
            },
            caloricity: 212.51
        },
        {
            id: 'kids-10.15.2',
            name: 'Шницель натуральный рубленый (из свинины)',
            components: {
                breadWheat: 11,
                eggs: 4,
                meat: 75.5,
                oil: 5.5
            },
            macronutrients: {
                proteins: 16.29,
                fats: 35.6,
                carbohydrates: 9.86
            },
            caloricity: 435.36
        }
    ]
}

const CUE_CARDS_PO_BELORUSSKI: IDish = {
    id: 'kids-10.16',
    generalOutput: 70,
    variants: [
        {
            id: 'kids-10.16.1',
            name: 'Биточки по-белорусски',
            components: {
                eggs: 8,
                meat: 72,
                milkAndFermentedMilkProducts: 11,
                oil: 5,
                vegetables: 9
            },
            macronutrients: {
                proteins: 19.6,
                fats: 11.04,
                carbohydrates: 1.8
            },
            caloricity: 188.41
        }
    ]
}

const STEAMED_BEEF_CUE_CARDS_V1: IDish = {
    id: 'kids-10.17',
    variants: [
        {
            id: 'kids-10.17.1',
            name: 'Биточки из говядины (паровые) (вариант 1)',
            defaultOutput: 70,
            components: {
                breadWheat: 13,
                butter: 3,
                meat: 52,
                milkAndFermentedMilkProducts: 15.5
            },
            macronutrients: {
                proteins: 14.7,
                fats: 6.11,
                carbohydrates: 9.01
            },
            caloricity: 180.96
        },
        {
            id: 'kids-10.17.2',
            name: 'Биточки из говядины (паровые) (вариант 1) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 13,
                butter: 5.5,
                flourWheat: 2.5,
                meat: 52,
                milkAndFermentedMilkProducts: 65.5,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 9.87,
                fats: 6.33,
                carbohydrates: 8.6
            },
            caloricity: 132.41
        }
    ]
}

const STEAMED_BEEF_CUE_CARDS_V2: IDish = {
    id: 'kids-10.18',
    variants: [
        {
            id: 'kids-10.18.1',
            name: 'Биточки из говядины (паровые) (вариант 2)',
            defaultOutput: 70,
            components: {
                breadWheat: 13,
                meat: 52,
                milkAndFermentedMilkProducts: 15.5,
                oil: 2.5
            },
            macronutrients: {
                proteins: 14.69,
                fats: 6.14,
                carbohydrates: 8.99
            },
            caloricity: 152.74
        },
        {
            id: 'kids-10.18.2',
            name: 'Биточки из говядины (паровые) (вариант 2) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 13,
                butter: 2.5,
                flourWheat: 2.5,
                meat: 52,
                milkAndFermentedMilkProducts: 65.5,
                oil: 2.5,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 9.85,
                fats: 6.34,
                carbohydrates: 8.58
            },
            caloricity: 132.95
        }
    ]
}

const CUE_CARDS_DETSKIYE: IDish = {
    id: 'kids-10.19',
    variants: [
        {
            id: 'kids-10.19.1',
            name: 'Биточки детские',
            defaultOutput: 70,
            components: {
                breadWheat: 3.5,
                cereals: 5.6,
                meat: 58.8,
                milkAndFermentedMilkProducts: 11.2,
                oil: 4,
                vegetables: 9.8
            },
            macronutrients: {
                proteins: 9.5,
                fats: 6.16,
                carbohydrates: 9.84
            },
            caloricity: 214.63
        },
        {
            id: 'kids-10.19.2',
            name: 'Биточки детские с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 3.5,
                butter: 2.5,
                cereals: 5.6,
                flourWheat: 2.5,
                meat: 58.8,
                milkAndFermentedMilkProducts: 61.2,
                oil: 4,
                sugar: 0.5,
                vegetables: 9.8
            },
            macronutrients: {
                proteins: 6.93,
                fats: 6.52,
                carbohydrates: 9.18
            },
            caloricity: 120.36
        }
    ]
}

const CUTLETS_CUE_CARDS_SCHNIZTELS: IDish = {
    id: 'kids-10.20',
    variants: [
        {
            id: 'kids-10.20.1',
            name: 'Котлеты, биточки, шницели',
            defaultOutput: 70,
            components: {
                breadWheat: 20,
                meat: 52,
                milkAndFermentedMilkProducts: 17,
                oil: 4,
            },
            macronutrients: {
                proteins: 14.4,
                fats: 7.61,
                carbohydrates: 3.59
            },
            caloricity: 197.8
        },
        {
            id: 'kids-10.20.2',
            name: 'Котлеты, биточки, шницели с соусом молочным',
            defaultOutput: 70,
            components: {
                breadWheat: 20,
                butter: 2.5,
                flourWheat: 2.5,
                meat: 52,
                milkAndFermentedMilkProducts: 67,
                oil: 4,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 10.8,
                fats: 6.82,
                carbohydrates: 12.02
            },
            caloricity: 155.15
        }
    ]
}

const CUTLETS_CUE_CARDS_SPECIAL: IDish = {
    id: 'kids-10.21',
    variants: [
        {
            id: 'kids-10.21.1',
            name: 'Котлеты (биточки) особые',
            defaultOutput: 70,
            components: {
                breadWheat: 17.5,
                meat: 56,
                milkAndFermentedMilkProducts: 14,
                oil: 3.5
            },
            macronutrients: {
                proteins: 15.86,
                fats: 12.93,
                carbohydrates: 13.59
            },
            caloricity: 238.66
        },
        {
            id: 'kids-10.21.2',
            name: 'Котлеты (биточки) особые с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 17.5,
                butter: 2.5,
                flourWheat: 2.5,
                meat: 56,
                milkAndFermentedMilkProducts: 64,
                oil: 3.5,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 10.5,
                fats: 9.98,
                carbohydrates: 11.38
            },
            caloricity: 180.43
        },
    ]
}

const HOMEMADE_CUTLETS: IDish = {
    id: 'kids-10.22',
    variants: [
        {
            id: 'kids-10.22.1',
            name: 'Котлеты домашние',
            defaultOutput: 70,
            components: {
                breadWheat: 14,
                eggs: 1,
                meat: 50.7,
                oil: 3.5,
                vegetables: 1.8
            },
            macronutrients: {
                proteins: 9.5,
                fats: 6.16,
                carbohydrates: 9.84
            },
            caloricity: 135.69
        },
        {
            id: 'kids-10.22.2',
            name: 'Котлеты домашние с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 14,
                butter: 2.5,
                eggs: 1,
                flourWheat: 2.5,
                meat: 50.7,
                milkAndFermentedMilkProducts: 50,
                oil: 3.5,
                sugar: 0.5,
                vegetables: 1.8
            },
            macronutrients: {
                proteins: 6.8,
                fats: 6.04,
                carbohydrates: 9.2
            },
            caloricity: 120.36
        }
    ]
}

const CUTLETS_ZDOROVYE: IDish = {
    id: 'kids-10.23',
    variants: [
        {
            id: 'kids-10.23.1',
            name: 'Котлеты "Здоровье" (масло растительное)',
            defaultOutput: 70,
            components: {
                breadWheat: 7,
                eggs: 5.6,
                meat: 51.8,
                milkAndFermentedMilkProducts: 9.8,
                oil: 4,
                vegetables: 12.6
            },
            macronutrients: {
                proteins: 15.07,
                fats: 8.61,
                carbohydrates: 7.39
            },
            caloricity: 170.51
        },
        {
            id: 'kids-10.23.2',
            name: 'Котлеты "Здоровье" с соусом молочным (масло растительное)',
            defaultOutput: 120,
            components: {
                breadWheat: 7,
                butter: 2.5,
                eggs: 5.6,
                flourWheat: 2.5,
                meat: 51.8,
                milkAndFermentedMilkProducts: 59.8,
                oil: 4,
                sugar: 0.5,
                vegetables: 12.6
            },
            macronutrients: {
                proteins: 10.04,
                fats: 7.48,
                carbohydrates: 7.76
            },
            caloricity: 140.68
        },
        {
            id: 'kids-10.23.3',
            name: 'Котлеты "Здоровье" с соусом сметанным (масло растительное)',
            defaultOutput: 120,
            components: {
                breadWheat: 7,
                eggs: 5.6,
                flourWheat: 3.75,
                meat: 51.8,
                milkAndFermentedMilkProducts: 9.8,
                oil: 4,
                sourCream: 12.5,
                vegetables: 12.6
            },
            macronutrients: {
                proteins: 9.34,
                fats: 6.9,
                carbohydrates: 6.54
            },
            caloricity: 128.17
        },
        {
            id: 'kids-10.23.4',
            name: 'Котлеты "Здоровье" (масло сливочное)',
            defaultOutput: 70,
            components: {
                breadWheat: 7,
                butter: 4,
                eggs: 5.6,
                meat: 51.8,
                milkAndFermentedMilkProducts: 9.8,
                vegetables: 12.6
            },
            macronutrients: {
                proteins: 15.07,
                fats: 8.61,
                carbohydrates: 7.39
            },
            caloricity: 170.51
        },
        {
            id: 'kids-10.23.5',
            name: 'Котлеты "Здоровье" с соусом молочным (масло сливочное)',
            defaultOutput: 120,
            components: {
                breadWheat: 7,
                butter: 6.5,
                eggs: 5.6,
                flourWheat: 2.5,
                meat: 51.8,
                milkAndFermentedMilkProducts: 59.8,
                sugar: 0.5,
                vegetables: 12.6
            },
            macronutrients: {
                proteins: 10.04,
                fats: 7.48,
                carbohydrates: 7.76
            },
            caloricity: 140.68
        },
        {
            id: 'kids-10.23.6',
            name: 'Котлеты "Здоровье" с соусом сметанным (масло сливочное)',
            defaultOutput: 120,
            components: {
                breadWheat: 7,
                butter: 4,
                eggs: 5.6,
                flourWheat: 3.75,
                meat: 51.8,
                milkAndFermentedMilkProducts: 9.8,
                sourCream: 12.5,
                vegetables: 12.6
            },
            macronutrients: {
                proteins: 9.34,
                fats: 6.9,
                carbohydrates: 6.54
            },
            caloricity: 128.17
        }
    ]
}

const KOLBASKI_PO_MOGILEVSKI: IDish = {
    id: 'kids-10.24',
    variants: [
        {
            id: 'kids-10.24.1',
            name: 'Колбаски по-могилевски',
            defaultOutput: 70,
            components: {
                flourWheat: 4,
                meat: 84,
                oil: 4,
                vegetables: 0.7
            },
            macronutrients: {
                proteins: 19.63,
                fats: 17.96,
                carbohydrates: 3.59
            },
            caloricity: 260.03
        },
    ]
}

const KOLBASKI_PO_SLUCKI: IDish = {
    id: 'kids-10.25',
    variants: [
        {
            id: 'kids-10.25.1',
            name: 'Колбаски по-слуцки',
            defaultOutput: 70,
            components: {
                eggs: 6,
                meat: 49,
                potatoStarch: 3,
                oil: 3,
                vegetables: 24.5,
            },
            macronutrients: {
                proteins: 10.54,
                fats: 22.63,
                carbohydrates: 5.44
            },
            caloricity: 276.33
        },
    ]
}

const CHOPPED_ZRAZY: IDish = {
    id: 'kids-10.26',
    variants: [
        {
            id: 'kids-10.26.1',
            name: 'Зразы рубленные',
            defaultOutput: 70,
            components: {
                breadWheat: 14,
                eggs: 5,
                meat: 38,
                milkAndFermentedMilkProducts: 11,
                oil: 8,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 12.77,
                fats: 13.06,
                carbohydrates: 14.26
            },
            caloricity: 231.09
        },
        {
            id: 'kids-10.26.2',
            name: 'Зразы рубленные с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 14,
                butter: 2.5,
                eggs: 5,
                flourWheat: 2.5,
                meat: 38,
                milkAndFermentedMilkProducts: 61,
                oil: 8,
                sugar: 0.5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 8.7,
                fats: 10.07,
                carbohydrates: 11.4
            },
            caloricity: 174.6
        },
    ]
}

const PASTA_ROLL: IDish = {
    id: 'kids-10.27',
    variants: [
        {
            id: 'kids-10.27.1',
            name: 'Рулет с макаронами',
            defaultOutput: 70,
            components: {
                breadWheat: 8,
                butter: 1,
                eggs: 3,
                meat: 30.5,
                milkAndFermentedMilkProducts: 9,
                oil: 1.5,
                pastaProducts: 10.5
            },
            macronutrients: {
                proteins: 10.99,
                fats: 4.86,
                carbohydrates: 15.49
            },
            caloricity: 152.51
        },
        {
            id: 'kids-10.27.2',
            name: 'Рулет с макаронами с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 8,
                butter: 3.5,
                eggs: 3,
                flourWheat: 2.5,
                meat: 30.5,
                milkAndFermentedMilkProducts: 59,
                oil: 1.5,
                pastaProducts: 10.5,
                sugar: 0.5,
            },
            macronutrients: {
                proteins: 7.66,
                fats: 4.98,
                carbohydrates: 12.12
            },
            caloricity: 125.95
        }
    ]
}

const ROLL_W_ONION_N_ROLL: IDish = {
    id: 'kids-10.28',
    generalOutput: 70,
    variants: [
        {
            id: 'kids-10.28.1',
            name: 'Рулет с луком и яйцом',
            components: {
                breadWheat: 9.5,
                eggs: 7,
                meat: 39,
                milkAndFermentedMilkProducts: 11.5,
                oil: 3.5,
                vegetables: 30,
            },
            macronutrients: {
                proteins: 13.23,
                fats: 7.13,
                carbohydrates: 10.7
            },
            caloricity: 163.87
        }
    ]
}

const BAKED_BEEF_ROLL: IDish = {
    id: 'kids-10.29',
    variants: [
        {
            id: 'kids-10.29.1',
            name: 'Рулет из говядины запеченный',
            defaultOutput: 70,
            components: {
                breadWheat: 19,
                butter: 2,
                eggs: 7,
                meat: 49,
                milkAndFermentedMilkProducts: 16,
            },
            macronutrients: {
                proteins: 14.81,
                fats: 5.93,
                carbohydrates: 7.24
            },
            caloricity: 144.09
        },
        {
            id: 'kids-10.29.2',
            name: 'Рулет из говядины запеченный с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 19,
                butter: 4.5,
                flourWheat: 2.5,
                eggs: 7,
                meat: 49,
                milkAndFermentedMilkProducts: 66,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 9.88,
                fats: 5.91,
                carbohydrates: 7.6
            },
            caloricity: 124.98
        }
    ]
}

const MEATBALLS_V1: IDish = {
    id: 'kids-10.30',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-10.30.1',
            name: 'Тефтели (вариант 1)',
            components: {
                breadWheat: 7,
                flourWheat: 5.5,
                meat: 32,
                milkAndFermentedMilkProducts: 10,
                oil: 5,
                sourCream: 25,
                vegetables: 16,
            },
            macronutrients: {
                proteins: 7.88,
                fats: 9.83,
                carbohydrates: 8.9
            },
            caloricity: 159.61
        }
    ]
}

const MEATBALLS_V2: IDish = {
    id: 'kids-10.31',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-10.31.1',
            name: 'Тефтели (вариант 2)',
            components: {
                breadWheat: 7,
                butter: 2.5,
                flourWheat: 5.5,
                meat: 32,
                milkAndFermentedMilkProducts: 60,
                oil: 5,
                sugar: 0.5,
                vegetables: 16,
            },
            macronutrients: {
                proteins: 6.62,
                fats: 19.66,
                carbohydrates: 9.67
            },
            caloricity: 246.74
        }
    ]
}

const MEATBALLS_V3: IDish = {
    id: 'kids-10.32',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-10.32.1',
            name: 'Тефтели (вариант 3) из говядины',
            components: {
                cereals: 5,
                flourWheat: 7.1,
                meat: 38,
                oil: 5.5,
                sourCream: 10.2,
                tomatoPuree: 2.4,
                vegetables: 18
            },
            macronutrients: {
                proteins: 8.08,
                fats: 7.95,
                carbohydrates: 9.64
            },
            caloricity: 146.03
        },
        {
            id: 'kids-10.32.2',
            name: 'Тефтели (вариант 3) из свинины',
            components: {
                cereals: 5,
                flourWheat: 7.1,
                meat: 38,
                oil: 5.5,
                sourCream: 10.2,
                tomatoPuree: 2.4,
                vegetables: 18
            },
            macronutrients: {
                proteins: 6.35,
                fats: 17.88,
                carbohydrates: 9.64
            },
            caloricity: 230.51
        }
    ]
}

const MEATBALLS_YOZHIKI: IDish = {
    id: 'kids-10.33',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-10.33.1',
            name: 'Тефтели "Ёжики"',
            components: {
                butter: 0.8,
                cereals: 10,
                flourWheat: 2.7,
                meat: 38,
                oil: 7,
                sourCream: 9,
                tomatoPuree: 4,
                vegetables: 20,
            },
            macronutrients: {
                proteins: 7.17,
                fats: 14.6,
                carbohydrates: 10.43
            },
            caloricity: 206.95
        }
    ]
}

const MEATBALLS_PO_DEREVENSKI: IDish = {
    id: 'kids-10.34',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-10.34.1',
            name: 'Тефтели по-деревенски',
            components: {
                cereals: 5.7,
                eggs: 5,
                flourWheat: 4,
                meat: 40,
                oil: 10,
                sugar: 1,
                tomatoPuree: 5,
                vegetables: 44,
            },
            macronutrients: {
                proteins: 8.28,
                fats: 14.63,
                carbohydrates: 10.8
            },
            caloricity: 214.78
        }
    ]
}

const MEATBALLS_IN_SAUSE: IDish = {
    id: 'kids-10.35',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-10.35.1',
            name: 'Фрикадельки в соусе',
            components: {
                breadWheat: 10,
                butter: 3,
                flourWheat: 9,
                meat: 49,
                milkAndFermentedMilkProducts: 44,
                oil: 4,
                vegetables: 4,
            },
            macronutrients: {
                proteins: 10.8,
                fats: 8.08,
                carbohydrates: 11.54
            },
            caloricity: 165.32
        }
    ]
}

const BEEF_STEAMED_MEATBALLS_STEWED_IN_SAUSE: IDish = {
    id: 'kids-10.36',
    generalOutput: 100,
    variants: [
        {
            id: 'kids-10.36.1',
            name: 'Фрикадельки из говядины (паровые), тушенные в соусе',
            components: {
                breadWheat: 11,
                butter: 3.5,
                flourWheat: 1.5,
                meat: 53,
                milkAndFermentedMilkProducts: 48,
            },
            macronutrients: {
                proteins: 11.28,
                fats: 5.39,
                carbohydrates: 7.76
            },
            caloricity: 126.67
        }
    ]
}

const LIVER_FRITTERS: IDish = {
    id: 'kids-10.37',
    generalOutput: 70,
    variants: [
        {
            id: 'kids-10.37.1',
            name: 'Оладьи из печени',
            components: {
                breadWheat: 10,
                butter: 2,
                byProducts: 70,
                oil: 8,
            },
            macronutrients: {
                proteins: 16.94,
                fats: 15.5,
                carbohydrates: 6.2
            },
            caloricity: 236.93
        }
    ]
}

const BEEF_DUMPLINGS: IDish = {
    id: 'kids-10.38',
    variants: [
        {
            id: 'kids-10.38.1',
            name: 'Кнели из говядины',
            defaultOutput: 70,
            components: {
                breadWheat: 6,
                butter: 2,
                eggs: 4,
                meat: 56,
                milkAndFermentedMilkProducts: 29,
            },
            macronutrients: {
                proteins: 16.83,
                fats: 5.4,
                carbohydrates: 5.53
            },
            caloricity: 140.01
        },
        {
            id: 'kids-10.38.2',
            name: 'Кнели из говядины с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 6,
                butter: 4.5,
                flourWheat: 2.5,
                eggs: 4,
                meat: 56,
                milkAndFermentedMilkProducts: 79,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 11.06,
                fats: 5.6,
                carbohydrates: 6.31
            },
            caloricity: 121.47
        }
    ]
}

const BEEF_PUDDING_V1: IDish = {
    id: 'kids-10.39',
    variants: [
        {
            id: 'kids-10.39.1',
            name: 'Пудинг из говядины (вариант 1)',
            defaultOutput: 70,
            components: {
                butter: 3,
                eggs: 10,
                meat: 81,
                milkAndFermentedMilkProducts: 15,
                oil: 2
            },
            macronutrients: {
                proteins: 23.19,
                fats: 10.09,
                carbohydrates: 1.03
            },
            caloricity: 190.49
        },
        {
            id: 'kids-10.39.2',
            name: 'Пудинг из говядины с маслом сливочным (вариант 1)',
            defaultOutput: 75,
            components: {
                butter: 8,
                eggs: 10,
                meat: 81,
                milkAndFermentedMilkProducts: 15,
                oil: 2
            },
            macronutrients: {
                proteins: 21.7,
                fats: 14.25,
                carbohydrates: 1.01
            },
            caloricity: 222.67
        },
        {
            id: 'kids-10.39.3',
            name: 'Пудинг из говядины с соусом молочным (вариант 1)',
            defaultOutput: 120,
            components: {
                butter: 5.5,
                eggs: 10,
                flourWheat: 2.5,
                meat: 81,
                milkAndFermentedMilkProducts: 65,
                oil: 2,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 14.78,
                fats: 9.54,
                carbohydrates: 3.7
            },
            caloricity: 162.13
        }
    ]
}

const BEEF_PUDDING_V2: IDish = {
    id: 'kids-10.40',
    variants: [
        {
            id: 'kids-10.40.1',
            name: 'Пудинг из говядины (вариант 2)',
            defaultOutput: 70,
            components: {
                eggs: 10,
                meat: 81,
                milkAndFermentedMilkProducts: 15,
                oil: 5
            },
            macronutrients: {
                proteins: 23.16,
                fats: 10.74,
                carbohydrates: 1
            },
            caloricity: 196.31
        },
        {
            id: 'kids-10.40.2',
            name: 'Пудинг из говядины с маслом сливочным (вариант 2)',
            defaultOutput: 75,
            components: {
                butter: 5,
                eggs: 10,
                meat: 81,
                milkAndFermentedMilkProducts: 15,
                oil: 5
            },
            macronutrients: {
                proteins: 21.65,
                fats: 14.87,
                carbohydrates: 0.99
            },
            caloricity: 228.11
        },
        {
            id: 'kids-10.40.3',
            name: 'Пудинг из говядины с соусом молочным (вариант 2)',
            defaultOutput: 120,
            components: {
                butter: 2.5,
                eggs: 10,
                flourWheat: 2.5,
                meat: 81,
                milkAndFermentedMilkProducts: 65,
                oil: 5,
                sugar: 0.5,
            },
            macronutrients: {
                proteins: 14.76,
                fats: 8.72,
                carbohydrates: 3.7
            },
            caloricity: 154.31
        }
    ]
}

const BEEF_SOUFFLE_W_RICE_V1: IDish = {
    id: 'kids-10.41',
    variants: [
        {
            id: 'kids-10.41.1',
            name: 'Суфле из говядины с рисом (вариант 1)',
            defaultOutput: 70,
            components: {
                butter: 3,
                cereals: 4.5,
                eggs: 8,
                meat: 77,
            },
            macronutrients: {
                proteins: 20.7,
                fats: 7.81,
                carbohydrates: 4.23
            },
            caloricity: 173
        },
        {
            id: 'kids-10.41.2',
            name: 'Суфле из говядины с рисом (вариант 1) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 8,
                cereals: 4.5,
                eggs: 8,
                meat: 77,
            },
            macronutrients: {
                proteins: 19.36,
                fats: 12.13,
                carbohydrates: 4
            },
            caloricity: 206.35
        },
        {
            id: 'kids-10.41.3',
            name: 'Суфле из говядины с рисом (вариант 1) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 5.5,
                cereals: 4.5,
                eggs: 8,
                flourWheat: 2.5,
                meat: 77,
                milkAndFermentedMilkProducts: 50,
                sugar: 0.5,
            },
            macronutrients: {
                proteins: 13.33,
                fats: 8.22,
                carbohydrates: 5.56
            },
            caloricity: 151.92
        }
    ]
}

const BEEF_SOUFFLE_W_RICE_V2: IDish = {
    id: 'kids-10.42',
    variants: [
        {
            id: 'kids-10.42.1',
            name: 'Суфле из говядины с рисом (вариант 2)',
            defaultOutput: 70,
            components: {
                cereals: 4.5,
                eggs: 8,
                meat: 77,
                oil: 3,
            },
            macronutrients: {
                proteins: 20.69,
                fats: 8.47,
                carbohydrates: 4.2
            },
            caloricity: 178.81
        },
        {
            id: 'kids-10.42.2',
            name: 'Суфле из говядины с рисом (вариант 2) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                cereals: 4.5,
                eggs: 8,
                meat: 77,
                oil: 3,
            },
            macronutrients: {
                proteins: 19.3,
                fats: 12.75,
                carbohydrates: 3.97
            },
            caloricity: 211.77
        },
        {
            id: 'kids-10.42.3',
            name: 'Суфле из говядины с рисом (вариант 2) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 2.5,
                cereals: 4.5,
                eggs: 8,
                flourWheat: 2.5,
                meat: 77,
                milkAndFermentedMilkProducts: 50,
                oil: 3,
                sugar: 0.5,
            },
            macronutrients: {
                proteins: 13.31,
                fats: 7.4,
                carbohydrates: 5.53
            },
            caloricity: 144.1
        }
    ]
}

const POTATO_CASSEROLE_W_MEAT_V1: IDish = {
    id: 'kids-10.43',
    variants: [
        {
            id: 'kids-10.43.1',
            name: 'Запеканка картофельная с мясом (вариант 1)',
            defaultOutput: 200,
            components: {
                breadWheat: 4,
                meat: 63.5,
                oil: 8,
                potato: 192,
                vegetables: 16,
            },
            macronutrients: {
                proteins: 7.7,
                fats: 6.02,
                carbohydrates: 15.27
            },
            caloricity: 150.5
        },
        {
            id: 'kids-10.43.2',
            name: 'Запеканка картофельная с мясом (вариант 1) с маслом сливочным',
            defaultOutput: 205,
            components: {
                breadWheat: 4,
                butter: 5,
                meat: 63.5,
                oil: 8,
                potato: 192,
                vegetables: 16,
            },
            macronutrients: {
                proteins: 7.7,
                fats: 6.02,
                carbohydrates: 15.27
            },
            caloricity: 150.5
        },
        {
            id: 'kids-10.43.3',
            name: 'Запеканка картофельная с мясом (вариант 1) со сметаной',
            defaultOutput: 215,
            components: {
                breadWheat: 4,
                meat: 63.5,
                oil: 8,
                potato: 192,
                sourCream: 15,
                vegetables: 16,
            },
            macronutrients: {
                proteins: 7.33,
                fats: 6.82,
                carbohydrates: 14.4
            },
            caloricity: 152.93
        },
        {
            id: 'kids-10.43.4',
            name: 'Запеканка картофельная с мясом (вариант 1) с соусом молочным',
            defaultOutput: 250,
            components: {
                breadWheat: 4,
                butter: 2.5,
                flourWheat: 2.5,
                meat: 63.5,
                milkAndFermentedMilkProducts: 50,
                oil: 8,
                potato: 192,
                sugar: 0.5,
                vegetables: 16,
            },
            macronutrients: {
                proteins: 6.75,
                fats: 5.99,
                carbohydrates: 15.92
            },
            caloricity: 162.2
        }
    ]
}

const POTATO_CASSEROLE_W_MEAT_V2: IDish = {
    id: 'kids-10.44',
    variants: [
        {
            id: 'kids-10.44.1',
            name: 'Запеканка картофельная с мясом (вариант 2)',
            defaultOutput: 200,
            components: {
                breadWheat: 5,
                butter: 11,
                eggs: 3,
                meat: 90,
                potato: 173,
            },
            macronutrients: {
                proteins: 10.07,
                fats: 5.46,
                carbohydrates: 13.64
            },
            caloricity: 147.98
        },
        {
            id: 'kids-10.44.2',
            name: 'Запеканка картофельная с мясом (вариант 2) с маслом сливочным',
            defaultOutput: 205,
            components: {
                breadWheat: 5,
                butter: 16,
                eggs: 3,
                meat: 90,
                potato: 173,
            },
            macronutrients: {
                proteins: 10,
                fats: 6.61,
                carbohydrates: 13.52
            },
            caloricity: 157.94
        },
        {
            id: 'kids-10.44.3',
            name: 'Запеканка картофельная с мясом (вариант 2) с соусом молочным',
            defaultOutput: 250,
            components: {
                breadWheat: 5,
                butter: 13.5,
                eggs: 3,
                flourWheat: 2.5,
                meat: 90,
                milkAndFermentedMilkProducts: 50,
                potato: 173,
                sugar: 0.5,
            },
            macronutrients: {
                proteins: 8.65,
                fats: 5.54,
                carbohydrates: 12.39
            },
            caloricity: 137.48
        }
    ]
}