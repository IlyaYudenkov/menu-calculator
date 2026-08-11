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