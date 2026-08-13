import type { IDish } from "@/model/dish.model";

const VARENIKI_LENIVIE: IDish = {
    id: 'kids-8.1',
    variants: [
        {
            id: 'kids-8.1.1',
            name: 'Вареники ленивые',
            defaultOutput: 150,
            components: {
                curd: 117,
                eggs: 9,
                flourWheat: 17,
                sugar: 9
            },
            macronutrients: {
                proteins: 13.31,
                fats: 6.89,
                carbohydrates: 13.86
            },
            caloricity: 174.63
        },
        {
            id: 'kids-8.1.2',
            name: 'Вареники ленивые с маслом сливочным',
            defaultOutput: 155,
            components: {
                butter: 5,
                curd: 117,
                eggs: 9,
                flourWheat: 17,
                sugar: 9
            },
            macronutrients: {
                proteins: 12.9,
                fats: 9.01,
                carbohydrates: 13.43
            },
            caloricity: 190.72
        },
        {
            id: 'kids-8.1.3',
            name: 'Вареники ленивые со сметаной и сахаром',
            defaultOutput: 170,
            components: {
                curd: 117,
                eggs: 9,
                flourWheat: 17,
                sourCream: 15,
                sugar: 14
            },
            macronutrients: {
                proteins: 11.96,
                fats: 7.34,
                carbohydrates: 15.12
            },
            caloricity: 180.48
        },
        {
            id: 'kids-8.1.4',
            name: 'Вареники ленивые с соусом молочным сладким',
            defaultOutput: 200,
            components: {
                butter: 2,
                curd: 117,
                eggs: 9,
                flourWheat: 19,
                milkAndFermentedMilkProducts: 50,
                sugar: 15
            },
            macronutrients: {
                proteins: 10.71,
                fats: 6.46,
                carbohydrates: 14.78
            },
            caloricity: 162.65
        }
    ]
}

const SYRNIKI_IZ_TVOROGA: IDish = { //добавить компоненты фруктового соуса
    id: 'kids-8.2',
    variants: [
        {
            id: 'kids-8.2.1',
            name: 'Сырники из творога',
            defaultOutput: 150,
            components: {
                curd: 135,
                eggs: 5,
                flourWheat: 20,
                oil: 5,
                sugar: 15
            },
            macronutrients: {
                proteins: 14.97,
                fats: 10.53,
                carbohydrates: 18.89
            },
            caloricity: 234.66
        },
        {
            id: 'kids-8.2.2',
            name: 'Сырники из творога с маслом сливочным',
            defaultOutput: 155,
            components: {
                butter: 5,
                curd: 135,
                eggs: 5,
                flourWheat: 20,
                oil: 5,
                sugar: 15
            },
            macronutrients: {
                proteins: 14.51,
                fats: 12.53,
                carbohydrates: 18.32
            },
            caloricity: 248.81
        },
        {
            id: 'kids-8.2.3',
            name: 'Сырники из творога со сметаной',
            defaultOutput: 160,
            components: {
                curd: 135,
                eggs: 5,
                flourWheat: 20,
                oil: 5,
                sourCream: 10,
                sugar: 15
            },
            macronutrients: {
                proteins: 14.19,
                fats: 10.97,
                carbohydrates: 17.89
            },
            caloricity: 231.58
        },
        {
            id: 'kids-8.2.4',
            name: 'Сырники из творога с сахаром',
            defaultOutput: 155,
            components: {
                curd: 135,
                eggs: 5,
                flourWheat: 20,
                oil: 5,
                sugar: 20
            },
            macronutrients: {
                proteins: 14.49,
                fats: 10.19,
                carbohydrates: 21.18
            },
            caloricity: 238.1
        },
        {
            id: 'kids-8.2.5',
            name: 'Сырники из творога с соусом фруктовым (яблочным)',
            defaultOutput: 200,
            components: {
                curd: 135,
                eggs: 5,
                flourWheat: 20,
                oil: 5,
                sugar: 15
            },
            macronutrients: {
                proteins: 11.27,
                fats: 7.9,
                carbohydrates: 14.48
            },
            caloricity: 189.06
        },

    ]
}

const SYRNIKI_IZ_TVOROGA_N_KARTOFELYA_V1: IDish = {
    id: 'kids-8.3',
    variants: [
        {
            id: 'kids-8.3.1',
            name: 'Сырники из творога и картофеля (вариант 1)',
            defaultOutput: 150,
            components: {
                butter: 5,
                curd: 90,
                eggs: 6,
                flourWheat: 19,
                potato: 64,
            },
            macronutrients: {
                proteins: 11.31,
                fats: 7.85,
                carbohydrates: 15.24
            },
            caloricity: 180.11
        },
        {
            id: 'kids-8.3.2',
            name: 'Сырники из творога и картофеля со сметаной (вариант 1)',
            defaultOutput: 165,
            components: {
                butter: 5,
                curd: 90,
                eggs: 6,
                flourWheat: 19,
                potato: 64,
                sourCream: 15,
            },
            macronutrients: {
                proteins: 10.52,
                fats: 9.4,
                carbohydrates: 14.11
            },
            caloricity: 186.74
        },
        {
            id: 'kids-8.3.3',
            name: 'Сырники из творога и картофеля с соусом молочным (вариант 1)',
            defaultOutput: 200,
            components: {
                butter: 7.5,
                curd: 90,
                eggs: 6,
                flourWheat: 21.5,
                milkAndFermentedMilkProducts: 50,
                potato: 64,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 9.23,
                fats: 7.4,
                carbohydrates: 13.51
            },
            caloricity: 159.81
        },
        {
            id: 'kids-8.3.4',
            name: 'Сырники из творога и картофеля с соусом сметанным (вариант 1)',
            defaultOutput: 200,
            components: {
                butter: 5,
                curd: 90,
                eggs: 6,
                flourWheat: 22.75,
                potato: 64,
                sourCream: 12.5
            },
            macronutrients: {
                proteins: 8.8,
                fats: 7.28,
                carbohydrates: 12.75
            },
            caloricity: 154.67
        }

    ]
}

const SYRNIKI_IZ_TVOROGA_N_KARTOFELYA_V2: IDish = {
    id: 'kids-8.4',
    variants: [
        {
            id: 'kids-8.4.1',
            name: 'Сырники из творога и картофеля (вариант 2)',
            defaultOutput: 150,
            components: {
                curd: 90,
                eggs: 6,
                flourWheat: 19,
                oil: 4,
                potato: 64,
            },
            macronutrients: {
                proteins: 11.29,
                fats: 7.77,
                carbohydrates: 15.22
            },
            caloricity: 179.25
        },
        {
            id: 'kids-8.4.2',
            name: 'Сырники из творога и картофеля со сметаной (вариант 2)',
            defaultOutput: 165,
            components: {
                curd: 90,
                eggs: 6,
                flourWheat: 19,
                oil: 4,
                potato: 64,
                sourCream: 15,
            },
            macronutrients: {
                proteins: 10.47,
                fats: 9.1,
                carbohydrates: 14.05
            },
            caloricity: 183.25
        },
        {
            id: 'kids-8.4.3',
            name: 'Сырники из творога и картофеля с соусом молочным (вариант 2)',
            defaultOutput: 200,
            components: {
                curd: 90,
                eggs: 6,
                flourWheat: 21.5,
                milkAndFermentedMilkProducts: 50,
                oil: 4,
                potato: 64,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 9.39,
                fats: 8.95,
                carbohydrates: 13.67
            },
            caloricity: 175.91
        }
    ]
}

const BAKED_SYRNIKI_IZ_TVOROGA_N_MORKOVYU: IDish = {
    id: 'kids-8.5',
    variants: [
        {
            id: 'kids-8.5.1',
            name: 'Сырники из творога с морковью (запеченные)',
            defaultOutput: 150,
            components: {
                butter: 4,
                cereals: 12,
                curd: 107,
                eggs: 9,
                flourWheat: 12,
                milkAndFermentedMilkProducts: 4,
                sourCream: 4,
                sugar: 12,
                vegetables: 26,
            },
            macronutrients: {
                proteins: 13.1,
                fats: 8.89,
                carbohydrates: 19.67
            },
            caloricity: 216.63
        },
        {
            id: 'kids-8.5.2',
            name: 'Сырники из творога с морковью (запеченные) со сметаной',
            defaultOutput: 165,
            components: {
                butter: 4,
                cereals: 12,
                curd: 107,
                eggs: 9,
                flourWheat: 12,
                milkAndFermentedMilkProducts: 4,
                sourCream: 19,
                sugar: 12,
                vegetables: 26,
            },
            macronutrients: {
                proteins: 12.13,
                fats: 9.7,
                carbohydrates: 18.15
            },
            caloricity: 213.8
        },
        {
            id: 'kids-8.5.3',
            name: 'Сырники из творога с морковью (запеченные) с соусом молочным',
            defaultOutput: 200,
            components: {
                butter: 6.5,
                cereals: 12,
                curd: 107,
                eggs: 9,
                flourWheat: 14.5,
                milkAndFermentedMilkProducts: 54,
                sourCream: 4,
                sugar: 12.5,
                vegetables: 26,
            },
            macronutrients: {
                proteins: 10.57,
                fats: 8.14,
                carbohydrates: 16.83
            },
            caloricity: 187.2
        },
        {
            id: 'kids-8.5.4',
            name: 'Сырники из творога с морковью (запеченные) с соусом сметанным',
            defaultOutput: 200,
            components: {
                butter: 4,
                cereals: 12,
                curd: 107,
                eggs: 9,
                flourWheat: 15.75,
                milkAndFermentedMilkProducts: 4,
                sourCream: 16.5,
                sugar: 12.5,
                vegetables: 26,
            },
            macronutrients: {
                proteins: 10.15,
                fats: 7.78,
                carbohydrates: 16.1
            },
            caloricity: 172.22
        }
    ]
}

const SYRNIKI_S_MORKOVYU: IDish = {
    id: 'kids-8.6',
    variants: [
        {
            id: 'kids-8.6.1',
            name: 'Сырники с морковью',
            defaultOutput: 150,
            components: {
                butter: 2,
                cereals: 4,
                curd: 105,
                eggs: 6,
                flourWheat: 19,
                oil: 7,
                sugar: 11,
                vegetables: 34,
            },
            macronutrients: {
                proteins: 12.53,
                fats: 11.19,
                carbohydrates: 18.83
            },
            caloricity: 216.63
        },
        {
            id: 'kids-8.6.2',
            name: 'Сырники с морковью со сметаной',
            defaultOutput: 165,
            components: {
                butter: 2,
                cereals: 4,
                curd: 105,
                eggs: 6,
                flourWheat: 19,
                oil: 7,
                sourCream: 15,
                sugar: 11,
                vegetables: 34,
            },
            macronutrients: {
                proteins: 11.62,
                fats: 11.77,
                carbohydrates: 17.38
            },
            caloricity: 228.35
        },
        {
            id: 'kids-8.6.3',
            name: 'Сырники с морковью с соусом сметанным',
            defaultOutput: 200,
            components: {
                butter: 2,
                cereals: 4,
                curd: 105,
                eggs: 6,
                flourWheat: 22.75,
                oil: 7,
                sourCream: 12.5,
                sugar: 11,
                vegetables: 34,
            },
            macronutrients: {
                proteins: 9.73,
                fats: 9.51,
                carbohydrates: 15.47
            },
            caloricity: 191.71
        },
        {
            id: 'kids-8.6.4',
            name: 'Сырники с морковью с соусом молочным сладким',
            defaultOutput: 200,
            components: {
                butter: 4,
                cereals: 4,
                curd: 105,
                eggs: 6,
                flourWheat: 21,
                milkAndFermentedMilkProducts: 50,
                oil: 7,
                sugar: 17,
                vegetables: 34,
            },
            macronutrients: {
                proteins: 10.12,
                fats: 9.77,
                carbohydrates: 18.51
            },
            caloricity: 206.16
        },
    ]
}

const BAKED_SYRNIKI_SO_SMETANOY: IDish = {
    id: 'kids-8.7',
    variants: [
        {
            id: 'kids-8.7.1',
            name: 'Сырники, запеченные со сметаной',
            defaultOutput: 150,
            components: {
                butter: 5,
                curd: 111,
                eggs: 10,
                flourWheat: 29,
                sourCream: 14.5,
                sugar: 14.5,
            },
            macronutrients: {
                proteins: 13.78,
                fats: 10.85,
                carbohydrates: 22.35
            },
            caloricity: 246.77
        },
        {
            id: 'kids-8.7.2',
            name: 'Сырники, запеченные со сметаной, со сметаной',
            defaultOutput: 165,
            components: {
                butter: 5,
                curd: 111,
                eggs: 10,
                flourWheat: 29,
                sourCream: 29.5,
                sugar: 14.5,
            },
            macronutrients: {
                proteins: 12.75,
                fats: 11.46,
                carbohydrates: 20.58
            },
            caloricity: 241.19
        }
    ]
}

const BAKED_PUDDING_IZ_TVOROGA: IDish = {
    id: 'kids-8.8',
    variants: [
        {
            id: 'kids-8.8.1',
            name: 'Пудинг из творога (запеченный)',
            defaultOutput: 150,
            components: {
                breadWheat: 4,
                butter: 4,
                cereals: 11,
                curd: 112.5,
                eggs: 7.5,
                fruitsDried: 15,
                sourCream: 4,
                sugar: 11,
            },
            macronutrients: {
                proteins: 12.88,
                fats: 8.95,
                carbohydrates: 20.14
            },
            caloricity: 215.71
        },
        {
            id: 'kids-8.8.2',
            name: 'Пудинг из творога (запеченный) со сметаной',
            defaultOutput: 165,
            components: {
                breadWheat: 4,
                butter: 4,
                cereals: 11,
                curd: 112.5,
                eggs: 7.5,
                fruitsDried: 15,
                sourCream: 19,
                sugar: 11,
            },
            macronutrients: {
                proteins: 11.4,
                fats: 9.74,
                carbohydrates: 18.57
            },
            caloricity: 212.96
        },
        {
            id: 'kids-8.8.3',
            name: 'Пудинг из творога (запеченный) с соусом молочным сладким',
            defaultOutput: 200,
            components: {
                breadWheat: 4,
                butter: 6,
                cereals: 11,
                curd: 112.5,
                eggs: 7.5,
                flourWheat: 2,
                fruitsDried: 15,
                milkAndFermentedMilkProducts: 50,
                sourCream: 4,
                sugar: 17,
            },
            macronutrients: {
                proteins: 10.4,
                fats: 8,
                carbohydrates: 19.49
            },
            caloricity: 193.46
        },
    ]
}

const ZAPEKANKA_IZ_TVOROGA_S_MANNOY_KRUPOY_V1: IDish = {
    id: 'kids-8.9',
    variants: [
        {
            id: 'kids-8.9.1',
            name: 'Запеканка из творога (с манной крупой) (вариант 1)',
            defaultOutput: 150,
            components: {
                breadWheat: 5,
                cereals: 10,
                curd: 140,
                eggs: 4,
                oil: 5,
                sourCream: 5,
                sugar: 10,
            },
            macronutrients: {
                proteins: 15.19,
                fats: 11.28,
                carbohydrates: 13.93
            },
            caloricity: 223.13
        },
        {
            id: 'kids-8.9.2',
            name: 'Запеканка из творога (с манной крупой) (вариант 1) со сметаной',
            defaultOutput: 165,
            components: {
                breadWheat: 5,
                cereals: 10,
                curd: 140,
                eggs: 4,
                oil: 5,
                sourCream: 20,
                sugar: 10,
            },
            macronutrients: {
                proteins: 14.03,
                fats: 11.85,
                carbohydrates: 12.92
            },
            caloricity: 219.7
        },
        {
            id: 'kids-8.9.3',
            name: 'Запеканка из творога (с манной крупой) (вариант 1) с соусом молочным сладким',
            defaultOutput: 200,
            components: {
                breadWheat: 5,
                butter: 2,
                cereals: 10,
                curd: 140,
                eggs: 4,
                flourWheat: 2,
                milkAndFermentedMilkProducts: 50,
                oil: 5,
                sourCream: 5,
                sugar: 16,
            },
            macronutrients: {
                proteins: 12.12,
                fats: 9.75,
                carbohydrates: 14.83
            },
            caloricity: 199.02
        }
    ]
}

const ZAPEKANKA_IZ_TVOROGA_S_MANNOY_KRUPOY_V2: IDish = {
    id: 'kids-8.10',
    variants: [
        {
            id: 'kids-8.10.1',
            name: 'Запеканка из творога (с манной крупой) (вариант 2)',
            defaultOutput: 150,
            components: {
                breadWheat: 5,
                butter: 5,
                cereals: 10,
                curd: 140,
                eggs: 4,
                sourCream: 5,
                sugar: 10,
            },
            macronutrients: {
                proteins: 15.21,
                fats: 10.77,
                carbohydrates: 13.95
            },
            caloricity: 218.6
        },
        {
            id: 'kids-8.10.2',
            name: 'Запеканка из творога (с манной крупой) (вариант 2) со сметаной',
            defaultOutput: 165,
            components: {
                breadWheat: 5,
                butter: 5,
                cereals: 10,
                curd: 140,
                eggs: 4,
                sourCream: 20,
                sugar: 10,
            },
            macronutrients: {
                proteins: 14.05,
                fats: 11.4,
                carbohydrates: 12.95
            },
            caloricity: 215.58
        },
        {
            id: 'kids-8.10.3',
            name: 'Запеканка из творога (с манной крупой) (вариант 2) с соусом молочным сладким',
            defaultOutput: 200,
            components: {
                breadWheat: 5,
                butter: 7,
                cereals: 10,
                curd: 140,
                eggs: 4,
                flourWheat: 2,
                milkAndFermentedMilkProducts: 50,
                sourCream: 20,
                sugar: 16,
            },
            macronutrients: {
                proteins: 12.13,
                fats: 9.37,
                carbohydrates: 14.85
            },
            caloricity: 195.62
        }
    ]
}

const ZAPEKANKA_IZ_TVOROGA_S_MUKOY_PSHENICHNOY: IDish = {
    id: 'kids-8.11',
    variants: [
        {
            id: 'kids-8.11.1',
            name: 'Запеканка из творога (с мукой пшеничной)',
            defaultOutput: 150,
            components: {
                breadWheat: 5,
                curd: 140,
                eggs: 4,
                flourWheat: 12,
                oil: 5,
                sourCream: 5,
                sugar: 10,
            },
            macronutrients: {
                proteins: 15.31,
                fats: 11.3,
                carbohydrates: 14.83
            },
            caloricity: 227.49
        },
        {
            id: 'kids-8.11.2',
            name: 'Запеканка из творога (с мукой пшеничной) со сметаной',
            defaultOutput: 165,
            components: {
                breadWheat: 5,
                curd: 140,
                eggs: 4,
                flourWheat: 12,
                oil: 5,
                sourCream: 20,
                sugar: 10,
            },
            macronutrients: {
                proteins: 14.15,
                fats: 11.87,
                carbohydrates: 13.74
            },
            caloricity: 223.7
        },
        {
            id: 'kids-8.11.3',
            name: 'Запеканка из творога (с мукой пшеничной) с соусом молочным сладким',
            defaultOutput: 200,
            components: {
                breadWheat: 5,
                butter: 2,
                curd: 140,
                eggs: 4,
                flourWheat: 14,
                milkAndFermentedMilkProducts: 50,
                oil: 5,
                sourCream: 5,
                sugar: 16,
            },
            macronutrients: {
                proteins: 12.4,
                fats: 10.94,
                carbohydrates: 15.72
            },
            caloricity: 214.85
        }
    ]
}

const ZAPEKANKA_IZ_TVOROGA_S_MORKOVYU_V1: IDish = {
    id: 'kids-8.12',
    variants: [
        {
            id: 'kids-8.12.1',
            name: 'Запеканка из творога с морковью (вариант 1)',
            defaultOutput: 150,
            components: {
                butter: 5,
                cereals: 10,
                curd: 96,
                eggs: 6,
                milkAndFermentedMilkProducts: 30,
                sugar: 10,
                vegetables: 33,
            },
            macronutrients: {
                proteins: 11.35,
                fats: 8.41,
                carbohydrates: 13.53
            },
            caloricity: 180.31
        },
        {
            id: 'kids-8.12.2',
            name: 'Запеканка из творога с морковью со сметаной (вариант 1)',
            defaultOutput: 165,
            components: {
                butter: 5,
                cereals: 10,
                curd: 96,
                eggs: 6,
                milkAndFermentedMilkProducts: 30,
                sourCream: 15,
                sugar: 10,
                vegetables: 33,
            },
            macronutrients: {
                proteins: 10.54,
                fats: 9.25,
                carbohydrates: 12.56
            },
            caloricity: 180.78
        },
        {
            id: 'kids-8.12.3',
            name: 'Запеканка из творога с морковью с соусом сметанным (вариант 1)',
            defaultOutput: 200,
            components: {
                butter: 5,
                cereals: 10,
                curd: 96,
                eggs: 6,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 30,
                sourCream: 12.5,
                sugar: 10,
                vegetables: 33,
            },
            macronutrients: {
                proteins: 8.84,
                fats: 7.43,
                carbohydrates: 11.49
            },
            caloricity: 152.46
        },
        {
            id: 'kids-8.12.4',
            name: 'Запеканка из творога с морковью с соусом молочным (вариант 1)',
            defaultOutput: 200,
            components: {
                butter: 7.5,
                cereals: 10,
                curd: 96,
                eggs: 6,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 80,
                sugar: 10.5,
                vegetables: 33,
            },
            macronutrients: {
                proteins: 9.26,
                fats: 7.78,
                carbohydrates: 12
            },
            caloricity: 159.11
        }
    ]
}

const ZAPEKANKA_IZ_TVOROGA_S_MORKOVYU_V2: IDish = {
    id: 'kids-8.13',
    variants: [
        {
            id: 'kids-8.13.1',
            name: 'Запеканка из творога с морковью (вариант 2)',
            defaultOutput: 150,
            components: {
                cereals: 10,
                curd: 96,
                eggs: 6,
                milkAndFermentedMilkProducts: 30,
                oil: 5,
                sugar: 10,
                vegetables: 33,
            },
            macronutrients: {
                proteins: 11.33,
                fats: 8.92,
                carbohydrates: 13.51
            },
            caloricity: 184.85
        },
        {
            id: 'kids-8.13.2',
            name: 'Запеканка из творога с морковью со сметаной (вариант 2)',
            defaultOutput: 165,
            components: {
                cereals: 10,
                curd: 96,
                eggs: 6,
                milkAndFermentedMilkProducts: 30,
                oil: 5,
                sourCream: 15,
                sugar: 10,
                vegetables: 33,
            },
            macronutrients: {
                proteins: 10.53,
                fats: 9.71,
                carbohydrates: 12.54
            },
            caloricity: 184.9
        },
        {
            id: 'kids-8.13.3',
            name: 'Запеканка из творога с морковью с соусом сметанным (вариант 2)',
            defaultOutput: 200,
            components: {
                cereals: 10,
                curd: 96,
                eggs: 6,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 30,
                oil: 5,
                sourCream: 12.5,
                sugar: 10,
                vegetables: 33,
            },
            macronutrients: {
                proteins: 8.83,
                fats: 7.81,
                carbohydrates: 11.47
            },
            caloricity: 155.86
        },
        {
            id: 'kids-8.13.4',
            name: 'Запеканка из творога с морковью с соусом молочным (вариант 2)',
            defaultOutput: 200,
            components: {
                butter: 2.5,
                cereals: 10,
                curd: 96,
                eggs: 6,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 80,
                oil: 5,
                sugar: 10.5,
                vegetables: 33,
            },
            macronutrients: {
                proteins: 9.25,
                fats: 8.16,
                carbohydrates: 11.98
            },
            caloricity: 162.51
        }
    ]
}

const SOUFFLE_TVOROJNOE: IDish = {//добавить фруктовый соус
    id: 'kids-8.14',
    variants: [
        {
            id: 'kids-8.14.1',
            name: 'Суфле творожное',
            defaultOutput: 150,
            components: {
                butter: 1.5,
                curd: 107,
                eggs: 7,
                flourWheat: 11,
                milkAndFermentedMilkProducts: 22,
                sourCream: 14,
                sugar: 10,
            },
            macronutrients: {
                proteins: 12.41,
                fats: 8.89,
                carbohydrates: 12.75
            },
            caloricity: 184.35
        },
        {
            id: 'kids-8.14.2',
            name: 'Суфле творожное со сметаной',
            defaultOutput: 165,
            components: {
                butter: 1.5,
                curd: 107,
                eggs: 7,
                flourWheat: 11,
                milkAndFermentedMilkProducts: 22,
                sourCream: 29,
                sugar: 10,
            },
            macronutrients: {
                proteins: 11.5,
                fats: 9.7,
                carbohydrates: 11.85
            },
            caloricity: 184.45
        },
        {
            id: 'kids-8.14.3',
            name: 'Суфле творожное с соусом молочным сладким',
            defaultOutput: 200,
            components: {
                butter: 3.5,
                curd: 107,
                eggs: 7,
                flourWheat: 13,
                milkAndFermentedMilkProducts: 72,
                sourCream: 14,
                sugar: 16,
            },
            macronutrients: {
                proteins: 10.03,
                fats: 7.95,
                carbohydrates: 13.95
            },
            caloricity: 169.84
        },
        {
            id: 'kids-8.14.4',
            name: 'Суфле творожное с соусом фруктовым (яблочным)',
            defaultOutput: 200,
            components: {
                butter: 1.5,
                curd: 107,
                eggs: 7,
                flourWheat: 11,
                milkAndFermentedMilkProducts: 72,
                sourCream: 14,
                sugar: 10,
            },
            macronutrients: {
                proteins: 9.34,
                fats: 6.7,
                carbohydrates: 12.87
            },
            caloricity: 151.34
        }
    ]
}