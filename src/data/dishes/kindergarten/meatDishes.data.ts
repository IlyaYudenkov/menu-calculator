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