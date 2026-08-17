import type { IDish } from "@/model/dish.model";

const BOILED_FISH: IDish = {
    id: 'kids-9.1',
    variants: [
        {
            id: 'kids-9.1.1',
            name: 'Рыба отварная',
            defaultOutput: 70,
            components: {
                fish: 87,
                vegetables: 4,
            },
            macronutrients: {
                proteins: 17.66,
                fats: 0.99,
                carbohydrates: 0.41
            },
            caloricity: 82.86
        },
        {
            id: 'kids-9.1.2',
            name: 'Рыба отварная с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                fish: 87,
                vegetables: 4,
            },
            macronutrients: {
                proteins: 16.51,
                fats: 5.76,
                carbohydrates: 0.44
            },
            caloricity: 122.21
        },
        {
            id: 'kids-9.1.3',
            name: 'Рыба отварная с соусом сметанным',
            defaultOutput: 120,
            components: {
                fish: 87,
                flourWheat: 3.75,
                sourCream: 12.5,
                vegetables: 4,
            },
            macronutrients: {
                proteins: 10.84,
                fats: 2.44,
                carbohydrates: 2.48
            },
            caloricity: 77.04
        }
    ]
}

const POACHED_FISH: IDish = {
    id: 'kids-9.2',
    variants: [
        {
            id: 'kids-9.2.1',
            name: 'Рыба припущенная (окунь)',
            defaultOutput: 70,
            components: {
                fish: 85.4,
                vegetables: 3,
            },
            macronutrients: {
                proteins: 19.81,
                fats: 3.54,
                carbohydrates: 0.36
            },
            caloricity: 114.86
        },
        {
            id: 'kids-9.2.2',
            name: 'Рыба припущенная (окунь) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                fish: 85.4,
                vegetables: 3,
            },
            macronutrients: {
                proteins: 18.52,
                fats: 8.15,
                carbohydrates: 0.37
            },
            caloricity: 152.08
        },
        {
            id: 'kids-9.2.3',
            name: 'Рыба припущенная (окунь) с соусом сметанным',
            defaultOutput: 120,
            components: {
                fish: 85.4,
                flourWheat: 3.75,
                sourCream: 12.5,
                vegetables: 3,
            },
            macronutrients: {
                proteins: 12.1,
                fats: 3.93,
                carbohydrates: 2.44
            },
            caloricity: 95.71
        },
        {
            id: 'kids-9.2.4',
            name: 'Рыба припущенная (треска)',
            defaultOutput: 70,
            components: {
                fish: 85.4,
                vegetables: 3,
            },
            macronutrients: {
                proteins: 17.43,
                fats: 0.65,
                carbohydrates: 0.36
            },
            caloricity: 114.86
        },
        {
            id: 'kids-9.2.5',
            name: 'Рыба припущенная (треска) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                fish: 85.4,
                vegetables: 3,
            },
            macronutrients: {
                proteins: 16.3,
                fats: 5.44,
                carbohydrates: 0.37
            },
            caloricity: 117.24
        },
        {
            id: 'kids-9.2.6',
            name: 'Рыба припущенная (треска) с соусом сметанным',
            defaultOutput: 120,
            components: {
                fish: 85.4,
                flourWheat: 3.75,
                sourCream: 12.5,
                vegetables: 3,
            },
            macronutrients: {
                proteins: 10.7,
                fats: 2.24,
                carbohydrates: 2.44
            },
            caloricity: 73.93
        },
        {
            id: 'kids-9.2.7',
            name: 'Рыба припущенная (хек)',
            defaultOutput: 70,
            components: {
                fish: 85.4,
                vegetables: 3,
            },
            macronutrients: {
                proteins: 18.07,
                fats: 2.36,
                carbohydrates: 0.36
            },
            caloricity: 96.19
        },
        {
            id: 'kids-9.2.8',
            name: 'Рыба припущенная (хек) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                fish: 85.4,
                vegetables: 3,
            },
            macronutrients: {
                proteins: 16.91,
                fats: 7.04,
                carbohydrates: 0.37
            },
            caloricity: 134.65
        },
        {
            id: 'kids-9.2.9',
            name: 'Рыба припущенная (хек) с соусом сметанным',
            defaultOutput: 120,
            components: {
                fish: 85.4,
                flourWheat: 3.75,
                sourCream: 12.5,
                vegetables: 3,
            },
            macronutrients: {
                proteins: 11.1,
                fats: 3.24,
                carbohydrates: 2.44
            },
            caloricity: 84.82
        }
    ]
}

const STEWED_FISH_IN_SOUR_CREAM: IDish = {
    id: 'kids-9.3',
    generalOutput: 70,
    variants: [
        {
            id: 'kids-9.3.1',
            name: 'Рыба, тушенная в сметане (минтай)',
            components: {
                fish: 74,
                oil: 4,
                sourCream: 12.5,
                vegetables: 12.5,
            },
            macronutrients: {
                proteins: 15.63,
                fats: 9,
                carbohydrates: 1.97
            },
            caloricity: 155.19
        },
        {
            id: 'kids-9.3.2',
            name: 'Рыба, тушенная в сметане (треска)',
            components: {
                fish: 73,
                oil: 4,
                sourCream: 12.5,
                vegetables: 12.5,
            },
            macronutrients: {
                proteins: 15.51,
                fats: 8.71,
                carbohydrates: 1.97
            },
            caloricity: 151.46
        },
        {
            id: 'kids-9.3.3',
            name: 'Рыба, тушенная в сметане (окунь морской)',
            components: {
                fish: 73,
                oil: 4,
                sourCream: 12.5,
                vegetables: 12.5,
            },
            macronutrients: {
                proteins: 17.56,
                fats: 11.2,
                carbohydrates: 1.97
            },
            caloricity: 183.36
        },
        {
            id: 'kids-9.3.4',
            name: 'Рыба, тушенная в сметане (хек)',
            components: {
                fish: 73,
                oil: 4,
                sourCream: 12.5,
                vegetables: 12.5,
            },
            macronutrients: {
                proteins: 16.07,
                fats: 10.19,
                carbohydrates: 1.97
            },
            caloricity: 167.4
        }
    ]
}

const FRIED_FISH: IDish = {
    id: 'kids-9.4',
    variants: [
        {
            id: 'kids-9.4.1',
            name: 'Рыба жареная (минтай)',
            defaultOutput: 70,
            components: {
                fish: 79,
                flourWheat: 5,
                oil: 5
            },
            macronutrients: {
                proteins: 16.63,
                fats: 7.42,
                carbohydrates: 4.43
            },
            caloricity: 152.4
        },
        {
            id: 'kids-9.4.2',
            name: 'Рыба жареная (минтай) с соусом сметанным',
            defaultOutput: 120,
            components: {
                fish: 79,
                flourWheat: 8.75,
                oil: 5,
                sourCream: 12.5,
            },
            macronutrients: {
                proteins: 10.24,
                fats: 6.1,
                carbohydrates: 4.83
            },
            caloricity: 117.6
        },
        {
            id: 'kids-9.4.3',
            name: 'Рыба жареная (треска)',
            defaultOutput: 70,
            components: {
                fish: 83.3,
                flourWheat: 5,
                oil: 5
            },
            macronutrients: {
                proteins: 17.6,
                fats: 6.97,
                carbohydrates: 4.43
            },
            caloricity: 153.21
        },
        {
            id: 'kids-9.4.4',
            name: 'Рыба жареная (треска) с соусом сметанным',
            defaultOutput: 120,
            components: {
                fish: 83.3,
                flourWheat: 8.75,
                oil: 5,
                sourCream: 12.5,
            },
            macronutrients: {
                proteins: 10.82,
                fats: 5.93,
                carbohydrates: 4.83
            },
            caloricity: 118.05
        },
        {
            id: 'kids-9.4.5',
            name: 'Рыба жареная (окунь морской)',
            defaultOutput: 70,
            components: {
                fish: 83.3,
                flourWheat: 5,
                oil: 5
            },
            macronutrients: {
                proteins: 19.93,
                fats: 9.8,
                carbohydrates: 4.43
            },
            caloricity: 189.6
        },
        {
            id: 'kids-9.4.6',
            name: 'Рыба жареная (окунь морской) с соусом сметанным',
            defaultOutput: 120,
            components: {
                fish: 83.3,
                flourWheat: 8.75,
                oil: 5,
                sourCream: 12.5,
            },
            macronutrients: {
                proteins: 12.18,
                fats: 7.58,
                carbohydrates: 4.83
            },
            caloricity: 139.29
        },
        {
            id: 'kids-9.4.7',
            name: 'Рыба жареная (хек)',
            defaultOutput: 70,
            components: {
                fish: 83.3,
                flourWheat: 5,
                oil: 5
            },
            macronutrients: {
                proteins: 18.24,
                fats: 8.66,
                carbohydrates: 4.43
            },
            caloricity: 171.4
        },
        {
            id: 'kids-9.4.8',
            name: 'Рыба жареная (хек) с соусом сметанным',
            defaultOutput: 120,
            components: {
                fish: 83.3,
                flourWheat: 8.75,
                oil: 5,
                sourCream: 12.5,
            },
            macronutrients: {
                proteins: 11.18,
                fats: 6.9,
                carbohydrates: 4.83
            },
            caloricity: 128.68
        },
    ]
}

const FISH_FRYING: IDish = {
    id: 'kids-9.5',
    generalOutput: 70,
    variants: [
        {
            id: 'kids-9.5.1',
            name: 'Поджарка из рыбы (минтая)',
            components: {
                fish: 62,
                flourWheat: 4,
                oil: 8,
                vegetables: 30
            },
            macronutrients: {
                proteins: 13.59,
                fats: 10.8,
                carbohydrates: 7.1
            },
            caloricity: 184.67
        },
        {
            id: 'kids-9.5.2',
            name: 'Поджарка из рыбы (трески)',
            components: {
                fish: 65,
                flourWheat: 4,
                oil: 8,
                vegetables: 30
            },
            macronutrients: {
                proteins: 14.83,
                fats: 10.59,
                carbohydrates: 7.1
            },
            caloricity: 184.94
        },
        {
            id: 'kids-9.5.3',
            name: 'Поджарка из рыбы (окуня морского)',
            components: {
                fish: 65,
                flourWheat: 4,
                oil: 8,
                vegetables: 30
            },
            macronutrients: {
                proteins: 16.1,
                fats: 12.8,
                carbohydrates: 7.1
            },
            caloricity: 213.36
        },
        {
            id: 'kids-9.5.4',
            name: 'Поджарка из рыбы (хека)',
            components: {
                fish: 65,
                flourWheat: 4,
                oil: 8,
                vegetables: 30
            },
            macronutrients: {
                proteins: 14.77,
                fats: 11.9,
                carbohydrates: 7.1
            },
            caloricity: 199.16
        }
    ]
}

const BAKED_FISH_WITH_A_CREAMY_SAUSE_W_PASTA: IDish = {
    id: 'kids-9.6',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-9.6.1',
            name: 'Рыба (треска), запеченная под молочным соусом (с макаронами)',
            components: {
                butter: 10,
                cheese: 2,
                fish: 73,
                flourWheat: 6,
                milkAndFermentedMilkProducts: 30,
                pastaProducts: 36
            },
            macronutrients: {
                proteins: 7.74,
                fats: 4.69,
                carbohydrates: 13.83
            },
            caloricity: 131.1
        },
        {
            id: 'kids-9.6.2',
            name: 'Рыба (окунь морской), запеченная под молочным соусом (с макаронами)',
            components: {
                butter: 10,
                cheese: 2,
                fish: 73,
                flourWheat: 6,
                milkAndFermentedMilkProducts: 30,
                pastaProducts: 36
            },
            macronutrients: {
                proteins: 8.49,
                fats: 5.46,
                carbohydrates: 13.83
            },
            caloricity: 141.28
        },
        {
            id: 'kids-9.6.3',
            name: 'Рыба (хек), запеченная под молочным соусом (с макаронами)',
            components: {
                butter: 10,
                cheese: 2,
                fish: 73,
                flourWheat: 6,
                milkAndFermentedMilkProducts: 30,
                pastaProducts: 36
            },
            macronutrients: {
                proteins: 7.97,
                fats: 5.11,
                carbohydrates: 13.83
            },
            caloricity: 135.7
        },
        {
            id: 'kids-9.6.4',
            name: 'Рыба (минтай), запеченная под молочным соусом (с макаронами)',
            components: {
                butter: 10,
                cheese: 2,
                fish: 74,
                flourWheat: 6,
                milkAndFermentedMilkProducts: 30,
                pastaProducts: 36
            },
            macronutrients: {
                proteins: 7.81,
                fats: 4.69,
                carbohydrates: 13.83
            },
            caloricity: 131.42
        },
    ]
}

const BAKED_FISH_WITH_A_CREAMY_SAUSE_W_POTATO_PUREE: IDish = {
    id: 'kids-9.7',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-9.7.1',
            name: 'Рыба (треска), запеченная под молочным соусом (с пюре картофельным)',
            components: {
                butter: 13.5,
                cheese: 2,
                fish: 73,
                flourWheat: 6,
                milkAndFermentedMilkProducts: 45,
                potato: 85.5,
            },
            macronutrients: {
                proteins: 7.05,
                fats: 4.73,
                carbohydrates: 9.13
            },
            caloricity: 107.17
        },
        {
            id: 'kids-9.7.2',
            name: 'Рыба (окунь морской), запеченная под молочным соусом (с пюре картофельным)',
            components: {
                butter: 13.5,
                cheese: 2,
                fish: 73,
                flourWheat: 6,
                milkAndFermentedMilkProducts: 45,
                potato: 85.5,
            },
            macronutrients: {
                proteins: 7.77,
                fats: 5.6,
                carbohydrates: 9.13
            },
            caloricity: 118.34
        },
        {
            id: 'kids-9.7.3',
            name: 'Рыба (хек), запеченная под молочным соусом (с пюре картофельным)',
            components: {
                butter: 13.5,
                cheese: 2,
                fish: 73,
                flourWheat: 6,
                milkAndFermentedMilkProducts: 45,
                potato: 85.5,
            },
            macronutrients: {
                proteins: 7.25,
                fats: 5.25,
                carbohydrates: 9.13
            },
            caloricity: 112.75
        },
        {
            id: 'kids-9.7.4',
            name: 'Рыба (минтай), запеченная под молочным соусом (с пюре картофельным)',
            components: {
                butter: 13.5,
                cheese: 2,
                fish: 74,
                flourWheat: 6,
                milkAndFermentedMilkProducts: 45,
                potato: 85.5,
            },
            macronutrients: {
                proteins: 7.09,
                fats: 4.83,
                carbohydrates: 9.13
            },
            caloricity: 108.48
        },
    ]
}

const BAKED_FISH_IN_SOUR_CREAM_W_CARROTS_V1: IDish = {
    id: 'kids-9.8',
    generalOutput: 80,
    variants: [
        {
            id: 'kids-9.8.1',
            name: 'Рыба (треска), запеченная в сметане с морковью (вариант 1)',
            components: {
                fish: 73,
                oil: 4,
                sourCream: 15,
                vegetables: 16.5,
            },
            macronutrients: {
                proteins: 13.7,
                fats: 8.2,
                carbohydrates: 1.88
            },
            caloricity: 140.63
        },
        {
            id: 'kids-9.8.2',
            name: 'Рыба (окунь морской), запеченная в сметане с морковью (вариант 1)',
            components: {
                fish: 73,
                oil: 4,
                sourCream: 15,
                vegetables: 16.5,
            },
            macronutrients: {
                proteins: 15.49,
                fats: 10.36,
                carbohydrates: 1.88
            },
            caloricity: 168.11
        },
        {
            id: 'kids-9.8.3',
            name: 'Рыба (хек), запеченная в сметане с морковью (вариант 1)',
            components: {
                fish: 73,
                oil: 4,
                sourCream: 15,
                vegetables: 16.5,
            },
            macronutrients: {
                proteins: 14.19,
                fats: 9.48,
                carbohydrates: 1.88
            },
            caloricity: 154.15
        },
        {
            id: 'kids-9.8.4',
            name: 'Рыба (минтай), запеченная в сметане с морковью (вариант 1)',
            components: {
                fish: 74,
                oil: 4,
                sourCream: 15,
                vegetables: 16.5,
            },
            macronutrients: {
                proteins: 13.8,
                fats: 8.45,
                carbohydrates: 1.88
            },
            caloricity: 143.46
        }
    ]
}

const BAKED_FISH_IN_SOUR_CREAM_W_CARROTS_V2: IDish = {
    id: 'kids-9.9',
    generalOutput: 80,
    variants: [
        {
            id: 'kids-9.9.1',
            name: 'Рыба (треска), запеченная в сметане с морковью (вариант 2)',
            components: {
                fish: 71,
                flourWheat: 4,
                oil: 8,
                sourCream: 15,
                vegetables: 22,
            },
            macronutrients: {
                proteins: 12.79,
                fats: 8.16,
                carbohydrates: 2.33
            },
            caloricity: 138.61
        },
        {
            id: 'kids-9.9.2',
            name: 'Рыба (окунь морской), запеченная в сметане с морковью (вариант 2)',
            components: {
                fish: 71,
                flourWheat: 4,
                oil: 8,
                sourCream: 15,
                vegetables: 22,
            },
            macronutrients: {
                proteins: 14.44,
                fats: 10.16,
                carbohydrates: 2.33
            },
            caloricity: 164.39
        },
        {
            id: 'kids-9.9.3',
            name: 'Рыба (хек), запеченная в сметане с морковью (вариант 2)',
            components: {
                fish: 71,
                flourWheat: 4,
                oil: 8,
                sourCream: 15,
                vegetables: 22,
            },
            macronutrients: {
                proteins: 13.24,
                fats: 9.35,
                carbohydrates: 2.33
            },
            caloricity: 151.5
        },
        {
            id: 'kids-9.9.4',
            name: 'Рыба (минтай), запеченная в сметане с морковью (вариант 2)',
            components: {
                fish: 67.4,
                flourWheat: 4,
                oil: 8,
                sourCream: 15,
                vegetables: 22,
            },
            macronutrients: {
                proteins: 13.35,
                fats: 8.43,
                carbohydrates: 2.33
            },
            caloricity: 143.8
        }
    ]
}

const FISH_CUTLETS: IDish = {
    id: 'kids-9.10',
    variants: [
        {
            id: 'kids-9.10.1',
            name: 'Котлеты (биточки) рыбные (треска)',
            defaultOutput: 70,
            components: {
                breadWheat: 19.5,
                fish: 45,
                milkAndFermentedMilkProducts: 18,
                oil: 5
            },
            macronutrients: {
                proteins: 12,
                fats: 7.47,
                carbohydrates: 14.93
            },
            caloricity: 178.2
        },
        {
            id: 'kids-9.10.2',
            name: 'Котлеты (биточки) рыбные (треска) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 19.5,
                butter: 2.5,
                fish: 45,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 68,
                oil: 5,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 8.23,
                fats: 6.8,
                carbohydrates: 12.17
            },
            caloricity: 154.16
        },
        {
            id: 'kids-9.10.3',
            name: 'Котлеты (биточки) рыбные (треска) с соусом сметанным',
            defaultOutput: 120,
            components: {
                breadWheat: 19.5,
                fish: 45,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 18,
                oil: 5,
                sourCream: 12.5
            },
            macronutrients: {
                proteins: 7.55,
                fats: 6.23,
                carbohydrates: 13.02
            },
            caloricity: 108.96
        },
        {
            id: 'kids-9.10.4',
            name: 'Котлеты (биточки) рыбные (окунь морской)',
            defaultOutput: 70,
            components: {
                breadWheat: 19.5,
                fish: 45,
                milkAndFermentedMilkProducts: 18,
                oil: 5
            },
            macronutrients: {
                proteins: 13.8,
                fats: 2.77,
                carbohydrates: 18.5
            },
            caloricity: 157.24
        },
        {
            id: 'kids-9.10.5',
            name: 'Котлеты (биточки) рыбные (окунь морской) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 19.5,
                butter: 2.5,
                fish: 45,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 68,
                oil: 5,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 8.9,
                fats: 7.7,
                carbohydrates: 12.1
            },
            caloricity: 156.34
        },
        {
            id: 'kids-9.10.6',
            name: 'Котлеты (биточки) рыбные (окунь морской) с соусом сметанным',
            defaultOutput: 120,
            components: {
                breadWheat: 19.5,
                fish: 45,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 18,
                oil: 5,
                sourCream: 12.5
            },
            macronutrients: {
                proteins: 7.74,
                fats: 5.25,
                carbohydrates: 8.71
            },
            caloricity: 115.43
        },
        {
            id: 'kids-9.10.7',
            name: 'Котлеты (биточки) рыбные (хек)',
            defaultOutput: 70,
            components: {
                breadWheat: 19.5,
                fish: 45,
                milkAndFermentedMilkProducts: 18,
                oil: 5
            },
            macronutrients: {
                proteins: 12.34,
                fats: 8.37,
                carbohydrates: 14.93
            },
            caloricity: 188.03
        },
        {
            id: 'kids-9.10.8',
            name: 'Котлеты (биточки) рыбные (хек) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 19.5,
                butter: 2.5,
                fish: 45,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 68,
                oil: 5,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 8.45,
                fats: 7.3,
                carbohydrates: 12.1
            },
            caloricity: 127.2
        },
        {
            id: 'kids-9.10.9',
            name: 'Котлеты (биточки) рыбные (хек) с соусом сметанным',
            defaultOutput: 120,
            components: {
                breadWheat: 19.5,
                fish: 45,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 18,
                oil: 5,
                sourCream: 12.5
            },
            macronutrients: {
                proteins: 7.75,
                fats: 6.75,
                carbohydrates: 10.95
            },
            caloricity: 138.4
        },
        {
            id: 'kids-9.10.10',
            name: 'Котлеты (биточки) рыбные (минтай)',
            defaultOutput: 70,
            components: {
                breadWheat: 19.5,
                fish: 45,
                milkAndFermentedMilkProducts: 18,
                oil: 5
            },
            macronutrients: {
                proteins: 11.95,
                fats: 7.64,
                carbohydrates: 14.93
            },
            caloricity: 179.93
        },
        {
            id: 'kids-9.10.11',
            name: 'Котлеты (биточки) рыбные (минтай) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 19.5,
                butter: 2.5,
                fish: 45,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 68,
                oil: 5,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 8.22,
                fats: 6.91,
                carbohydrates: 12.17
            },
            caloricity: 146.17
        },
        {
            id: 'kids-9.10.12',
            name: 'Котлеты (биточки) рыбные (минтай) с соусом сметанным',
            defaultOutput: 120,
            components: {
                breadWheat: 19.5,
                fish: 45,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 18,
                oil: 5,
                sourCream: 12.5
            },
            macronutrients: {
                proteins: 7.52,
                fats: 6.32,
                carbohydrates: 10.95
            },
            caloricity: 133.7
        }
    ]
}

const STEAMED_FISH_CUTLETS: IDish = {
    id: 'kids-9.11',
    variants: [
        {
            id: 'kids-9.11.1',
            name: 'Котлеты (биточки) рыбные паровые (треска)',
            defaultOutput: 70,
            components: {
                breadWheat: 12.6,
                butter: 1.5,
                fish: 56,
                milkAndFermentedMilkProducts: 14,
            },
            macronutrients: {
                proteins: 13.2,
                fats: 2.57,
                carbohydrates: 8.66
            },
            caloricity: 112.19
        },
        {
            id: 'kids-9.11.2',
            name: 'Котлеты (биточки) рыбные паровые (треска) с маслом сливочным',
            defaultOutput: 75,
            components: {
                breadWheat: 12.6,
                butter: 6.5,
                fish: 56,
                milkAndFermentedMilkProducts: 14,
            },
            macronutrients: {
                proteins: 12.32,
                fats: 7.24,
                carbohydrates: 8.13
            },
            caloricity: 149.59
        },
        {
            id: 'kids-9.11.3',
            name: 'Котлеты (биточки) рыбные паровые (треска) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 12.6,
                butter: 4,
                fish: 56,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 64,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 8.93,
                fats: 3.95,
                carbohydrates: 8.51
            },
            caloricity: 106.65
        },
        {
            id: 'kids-9.11.4',
            name: 'Котлеты (биточки) рыбные паровые (треска) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 12.6,
                butter: 1.5,
                fish: 56,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 14,
                sourCream: 12.5
            },
            macronutrients: {
                proteins: 8.23,
                fats: 3.37,
                carbohydrates: 7.3
            },
            caloricity: 94.15
        },
        {
            id: 'kids-9.11.5',
            name: 'Котлеты (биточки) рыбные паровые (окунь морской)',
            defaultOutput: 70,
            components: {
                breadWheat: 12.6,
                butter: 1.5,
                fish: 56,
                milkAndFermentedMilkProducts: 14,
            },
            macronutrients: {
                proteins: 14.73,
                fats: 4.47,
                carbohydrates: 8.66
            },
            caloricity: 136.66
        },
        {
            id: 'kids-9.11.6',
            name: 'Котлеты (биточки) рыбные паровые (окунь морской) с маслом сливочным',
            defaultOutput: 75,
            components: {
                breadWheat: 12.6,
                butter: 6.5,
                fish: 56,
                milkAndFermentedMilkProducts: 14,
            },
            macronutrients: {
                proteins: 13.79,
                fats: 9.01,
                carbohydrates: 8.13
            },
            caloricity: 172.43
        },
        {
            id: 'kids-9.11.7',
            name: 'Котлеты (биточки) рыбные паровые (окунь морской) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 12.6,
                butter: 4,
                fish: 56,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 64,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 9.84,
                fats: 5.06,
                carbohydrates: 8.51
            },
            caloricity: 120.93
        },
        {
            id: 'kids-9.11.8',
            name: 'Котлеты (биточки) рыбные паровые (окунь морской) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 12.6,
                butter: 1.5,
                fish: 56,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 14,
                sourCream: 12.5
            },
            macronutrients: {
                proteins: 9.14,
                fats: 4.48,
                carbohydrates: 7.3
            },
            caloricity: 108.43
        },
        {
            id: 'kids-9.11.9',
            name: 'Котлеты (биточки) рыбные паровые (хек)',
            defaultOutput: 70,
            components: {
                breadWheat: 12.6,
                butter: 1.5,
                fish: 56,
                milkAndFermentedMilkProducts: 14,
            },
            macronutrients: {
                proteins: 13.6,
                fats: 3.7,
                carbohydrates: 8.66
            },
            caloricity: 124.43
        },
        {
            id: 'kids-9.11.10',
            name: 'Котлеты (биточки) рыбные паровые (хек) с маслом сливочным',
            defaultOutput: 75,
            components: {
                breadWheat: 12.6,
                butter: 6.5,
                fish: 56,
                milkAndFermentedMilkProducts: 14,
            },
            macronutrients: {
                proteins: 12.72,
                fats: 8.3,
                carbohydrates: 8.13
            },
            caloricity: 158.9
        },
        {
            id: 'kids-9.11.11',
            name: 'Котлеты (биточки) рыбные паровые (хек) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 12.6,
                butter: 4,
                fish: 56,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 64,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 9.18,
                fats: 4.61,
                carbohydrates: 8.51
            },
            caloricity: 112.4
        },
        {
            id: 'kids-9.11.12',
            name: 'Котлеты (биточки) рыбные паровые (хек) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 12.6,
                butter: 1.5,
                fish: 56,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 14,
                sourCream: 12.5
            },
            macronutrients: {
                proteins: 8.48,
                fats: 4.03,
                carbohydrates: 7.3
            },
            caloricity: 101.28
        }
    ]
}

const BAKED_FISH_CUTLETS_W_CURD_V1: IDish = {
    id: 'kids-9.12',
    variants: [
        {
            id: 'kids-9.12.1',
            name: 'Биточки из рыбы (треска) с творогом запеченные (вариант 1)',
            defaultOutput: 70,
            components: {
                butter: 2,
                curd: 22,
                eggs: 6,
                fish: 53,
                sourCream: 2
            },
            macronutrients: {
                proteins: 16.5,
                fats: 6.33,
                carbohydrates: 0.73
            },
            caloricity: 128.64
        },
        {
            id: 'kids-9.12.2',
            name: 'Биточки из рыбы (треска) с творогом запеченные (вариант 1) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 7,
                curd: 22,
                eggs: 6,
                fish: 53,
                sourCream: 2
            },
            macronutrients: {
                proteins: 15.44,
                fats: 10.75,
                carbohydrates: 0.72
            },
            caloricity: 169.95
        },
        {
            id: 'kids-9.12.3',
            name: 'Биточки из рыбы (треска) с творогом запеченные (вариант 1) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 4.5,
                curd: 22,
                eggs: 6,
                fish: 53,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                sourCream: 2,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 10.88,
                fats: 5.84,
                carbohydrates: 3.88
            },
            caloricity: 113.44
        },
        {
            id: 'kids-9.12.4',
            name: 'Биточки из рыбы (окунь морской) с творогом запеченные (вариант 1)',
            defaultOutput: 70,
            components: {
                butter: 2,
                curd: 22,
                eggs: 6,
                fish: 53,
                sourCream: 2
            },
            macronutrients: {
                proteins: 17.99,
                fats: 8.13,
                carbohydrates: 0.73
            },
            caloricity: 151.8
        },
        {
            id: 'kids-9.12.5',
            name: 'Биточки из рыбы (окунь морской) с творогом запеченные (вариант 1) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 7,
                curd: 22,
                eggs: 6,
                fish: 53,
                sourCream: 2
            },
            macronutrients: {
                proteins: 16.81,
                fats: 12.43,
                carbohydrates: 0.72
            },
            caloricity: 186.56
        },
        {
            id: 'kids-9.12.6',
            name: 'Биточки из рыбы (окунь морской) с творогом запеченные (вариант 1) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 4.5,
                curd: 22,
                eggs: 6,
                fish: 53,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                sourCream: 2,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 11.73,
                fats: 6.9,
                carbohydrates: 3.88
            },
            caloricity: 126.96
        },
        {
            id: 'kids-9.12.7',
            name: 'Биточки из рыбы (хек) с творогом запеченные (вариант 1)',
            defaultOutput: 70,
            components: {
                butter: 2,
                curd: 22,
                eggs: 6,
                fish: 53,
                sourCream: 2
            },
            macronutrients: {
                proteins: 16.91,
                fats: 7.4,
                carbohydrates: 0.73
            },
            caloricity: 140.21
        },
        {
            id: 'kids-9.12.8',
            name: 'Биточки из рыбы (хек) с творогом запеченные (вариант 1) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 7,
                curd: 22,
                eggs: 6,
                fish: 53,
                sourCream: 2
            },
            macronutrients: {
                proteins: 15.81,
                fats: 11.75,
                carbohydrates: 0.72
            },
            caloricity: 175.75
        },
        {
            id: 'kids-9.12.9',
            name: 'Биточки из рыбы (хек) с творогом запеченные (вариант 1) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 4.5,
                curd: 22,
                eggs: 6,
                fish: 53,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                sourCream: 2,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 11.11,
                fats: 6.77,
                carbohydrates: 3.88
            },
            caloricity: 123
        },
        {
            id: 'kids-9.12.10',
            name: 'Биточки из рыбы (минтай) с творогом запеченные (вариант 1)',
            defaultOutput: 70,
            components: {
                butter: 2,
                curd: 22,
                eggs: 6,
                fish: 53,
                sourCream: 2
            },
            macronutrients: {
                proteins: 16.44,
                fats: 6.53,
                carbohydrates: 0.73
            },
            caloricity: 130.69
        },
        {
            id: 'kids-9.12.11',
            name: 'Биточки из рыбы (минтай) с творогом запеченные (вариант 1) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 7,
                curd: 22,
                eggs: 6,
                fish: 53,
                sourCream: 2
            },
            macronutrients: {
                proteins: 15.37,
                fats: 10.93,
                carbohydrates: 0.72
            },
            caloricity: 166.85
        },
        {
            id: 'kids-9.12.12',
            name: 'Биточки из рыбы (минтай) с творогом запеченные (вариант 1) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 4.5,
                curd: 22,
                eggs: 6,
                fish: 53,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                sourCream: 2,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 10.83,
                fats: 6.26,
                carbohydrates: 3.88
            },
            caloricity: 117.44
        }
    ]
}

const BAKED_FISH_CUTLETS_W_CURD_V2: IDish = {
    id: 'kids-9.13',
    variants: [
        {
            id: 'kids-9.13.1',
            name: 'Биточки из рыбы (треска) с творогом запеченные (вариант 2)',
            defaultOutput: 70,
            components: {
                curd: 22,
                eggs: 6,
                fish: 53,
                oil: 2,
                sourCream: 2
            },
            macronutrients: {
                proteins: 16.5,
                fats: 6.77,
                carbohydrates: 0.7
            },
            caloricity: 132.5
        },
        {
            id: 'kids-9.13.2',
            name: 'Биточки из рыбы (треска) с творогом запеченные (вариант 2) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                curd: 22,
                eggs: 6,
                fish: 53,
                oil: 2,
                sourCream: 2
            },
            macronutrients: {
                proteins: 15.43,
                fats: 11.16,
                carbohydrates: 0.71
            },
            caloricity: 168.56
        },
        {
            id: 'kids-9.13.3',
            name: 'Биточки из рыбы (треска) с творогом запеченные (вариант 2) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 2.5,
                curd: 22,
                eggs: 6,
                fish: 53,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                oil: 2,
                sourCream: 2,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 10.87,
                fats: 6.4,
                carbohydrates: 3.87
            },
            caloricity: 118.5
        },
        {
            id: 'kids-9.13.4',
            name: 'Биточки из рыбы (окунь морской) с творогом запеченные (вариант 2)',
            defaultOutput: 70,
            components: {
                curd: 22,
                eggs: 6,
                fish: 53,
                oil: 2,
                sourCream: 2
            },
            macronutrients: {
                proteins: 17.97,
                fats: 8.57,
                carbohydrates: 0.7
            },
            caloricity: 155.69
        },
        {
            id: 'kids-9.13.5',
            name: 'Биточки из рыбы (окунь морской) с творогом запеченные (вариант 2) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                curd: 22,
                eggs: 6,
                fish: 53,
                oil: 2,
                sourCream: 2
            },
            macronutrients: {
                proteins: 16.81,
                fats: 12.84,
                carbohydrates: 0.71
            },
            caloricity: 190.19
        },
        {
            id: 'kids-9.13.6',
            name: 'Биточки из рыбы (окунь морской) с творогом запеченные (вариант 2) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 2.5,
                curd: 22,
                eggs: 6,
                fish: 53,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                oil: 2,
                sourCream: 2,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 11.73,
                fats: 7.45,
                carbohydrates: 3.87
            },
            caloricity: 132.03
        },
        {
            id: 'kids-9.13.7',
            name: 'Биточки из рыбы (хек) с творогом запеченные (вариант 2)',
            defaultOutput: 70,
            components: {
                curd: 22,
                eggs: 6,
                fish: 53,
                oil: 2,
                sourCream: 2
            },
            macronutrients: {
                proteins: 16.9,
                fats: 7.84,
                carbohydrates: 0.7
            },
            caloricity: 144.1
        },
        {
            id: 'kids-9.13.8',
            name: 'Биточки из рыбы (хек) с творогом запеченные (вариант 2) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                curd: 22,
                eggs: 6,
                fish: 53,
                oil: 2,
                sourCream: 2
            },
            macronutrients: {
                proteins: 15.8,
                fats: 12.16,
                carbohydrates: 0.71
            },
            caloricity: 179.37
        },
        {
            id: 'kids-9.13.9',
            name: 'Биточки из рыбы (хек) с творогом запеченные (вариант 2) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 2.5,
                curd: 22,
                eggs: 6,
                fish: 53,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                oil: 2,
                sourCream: 2,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 11.1,
                fats: 7.03,
                carbohydrates: 3.87
            },
            caloricity: 125.27
        },
        {
            id: 'kids-9.13.10',
            name: 'Биточки из рыбы (минтай) с творогом запеченные (вариант 2)',
            defaultOutput: 70,
            components: {
                curd: 22,
                eggs: 6,
                fish: 53,
                oil: 2,
                sourCream: 2
            },
            macronutrients: {
                proteins: 16.43,
                fats: 6.97,
                carbohydrates: 0.7
            },
            caloricity: 134.56
        },
        {
            id: 'kids-9.13.11',
            name: 'Биточки из рыбы (минтай) с творогом запеченные (вариант 2) с маслом сливочным',
            defaultOutput: 75,
            components: {
                butter: 5,
                curd: 22,
                eggs: 6,
                fish: 53,
                oil: 2,
                sourCream: 2
            },
            macronutrients: {
                proteins: 15.36,
                fats: 11.35,
                carbohydrates: 0.71
            },
            caloricity: 170.47
        },
        {
            id: 'kids-9.13.12',
            name: 'Биточки из рыбы (минтай) с творогом запеченные (вариант 2) с соусом молочным',
            defaultOutput: 120,
            components: {
                butter: 2.5,
                curd: 22,
                eggs: 6,
                fish: 53,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 50,
                oil: 2,
                sourCream: 2,
                sugar: 0.5
            },
            macronutrients: {
                proteins: 10.83,
                fats: 6.52,
                carbohydrates: 3.87
            },
            caloricity: 119.7
        }
    ]
}

const FISH_NATURAL_SCHNITZEL: IDish = {
    id: 'kids-9.14',
    variants: [
        {
            id: 'kids-9.14.1',
            name: 'Шницель натуральный рыбный (треска)',
            defaultOutput: 70,
            components: {
                breadWheat: 8,
                eggs: 3,
                fish: 60,
                milkAndFermentedMilkProducts: 6,
                oil: 7,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 14.33,
                fats: 10.51,
                carbohydrates: 9.26
            },
            caloricity: 192.8
        },
        {
            id: 'kids-9.14.2',
            name: 'Шницель натуральный рыбный (треска) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 8,
                butter: 2.5,
                eggs: 3,
                fish: 60,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 56,
                oil: 7,
                sugar: 0.5,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 9.61,
                fats: 8.58,
                carbohydrates: 8.85
            },
            caloricity: 153.68
        },
        {
            id: 'kids-9.14.3',
            name: 'Шницель натуральный рыбный (треска) с соусом сметанным',
            defaultOutput: 120,
            components: {
                breadWheat: 8,
                eggs: 3,
                fish: 60,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 6,
                oil: 7,
                sourCream: 12.5,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 8.91,
                fats: 8,
                carbohydrates: 7.63
            },
            caloricity: 141.18
        },
        {
            id: 'kids-9.14.4',
            name: 'Шницель натуральный рыбный (окунь морской)',
            defaultOutput: 70,
            components: {
                breadWheat: 8,
                eggs: 3,
                fish: 60,
                milkAndFermentedMilkProducts: 6,
                oil: 7,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 16.01,
                fats: 12.56,
                carbohydrates: 9.26
            },
            caloricity: 219.03
        },
        {
            id: 'kids-9.14.5',
            name: 'Шницель натуральный рыбный (окунь морской) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 8,
                butter: 2.5,
                eggs: 3,
                fish: 60,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 56,
                oil: 7,
                sugar: 0.5,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 18.14,
                fats: 9.78,
                carbohydrates: 8.85
            },
            caloricity: 168.98
        },
        {
            id: 'kids-9.14.6',
            name: 'Шницель натуральный рыбный (окунь морской) с соусом сметанным',
            defaultOutput: 120,
            components: {
                breadWheat: 8,
                eggs: 3,
                fish: 60,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 6,
                oil: 7,
                sourCream: 12.5,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 9.88,
                fats: 9.2,
                carbohydrates: 7.63
            },
            caloricity: 156.48
        },
        {
            id: 'kids-9.14.7',
            name: 'Шницель натуральный рыбный (хек)',
            defaultOutput: 70,
            components: {
                breadWheat: 8,
                eggs: 3,
                fish: 60,
                milkAndFermentedMilkProducts: 6,
                oil: 7,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 14.79,
                fats: 11.73,
                carbohydrates: 9.26
            },
            caloricity: 205.91
        },
        {
            id: 'kids-9.14.8',
            name: 'Шницель натуральный рыбный (хек) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 8,
                butter: 2.5,
                eggs: 3,
                fish: 60,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 56,
                oil: 7,
                sugar: 0.5,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 9.88,
                fats: 9.3,
                carbohydrates: 8.85
            },
            caloricity: 161.33
        },
        {
            id: 'kids-9.14.9',
            name: 'Шницель натуральный рыбный (хек) с соусом сметанным',
            defaultOutput: 120,
            components: {
                breadWheat: 8,
                eggs: 3,
                fish: 60,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 6,
                oil: 7,
                sourCream: 12.5,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 9.18,
                fats: 8.7,
                carbohydrates: 7.63
            },
            caloricity: 148.83
        },
        {
            id: 'kids-9.14.10',
            name: 'Шницель натуральный рыбный (минтай)',
            defaultOutput: 70,
            components: {
                breadWheat: 8,
                eggs: 3,
                fish: 60,
                milkAndFermentedMilkProducts: 6,
                oil: 7,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 14.26,
                fats: 10.74,
                carbohydrates: 9.26
            },
            caloricity: 195.11
        },
        {
            id: 'kids-9.14.11',
            name: 'Шницель натуральный рыбный (минтай) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 8,
                butter: 2.5,
                eggs: 3,
                fish: 60,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 56,
                oil: 7,
                sugar: 0.5,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 9.6,
                fats: 8.72,
                carbohydrates: 8.85
            },
            caloricity: 155.03
        },
        {
            id: 'kids-9.14.12',
            name: 'Шницель натуральный рыбный (минтай) с соусом сметанным',
            defaultOutput: 120,
            components: {
                breadWheat: 8,
                eggs: 3,
                fish: 60,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 6,
                oil: 7,
                sourCream: 12.5,
                vegetables: 14,
            },
            macronutrients: {
                proteins: 8.87,
                fats: 8.13,
                carbohydrates: 7.63
            },
            caloricity: 142.53
        }
    ]
}

const STEAMED_MINCED_FISH_ZRAZY: IDish = {
    id: 'kids-9.15',
    variants: [
        {
            id: 'kids-9.15.1',
            name: 'Зразы рыбные рубленые паровые (треска)',
            defaultOutput: 70,
            components: {
                breadWheat: 11,
                butter: 1,
                eggs: 9,
                fish: 43,
                milkAndFermentedMilkProducts: 17,
                vegetables: 9
            },
            macronutrients: {
                proteins: 12.07,
                fats: 3.34,
                carbohydrates: 8.76
            },
            caloricity: 116.3
        },
        {
            id: 'kids-9.15.2',
            name: 'Зразы рыбные рубленые паровые (треска) с маслом сливочным',
            defaultOutput: 75,
            components: {
                breadWheat: 11,
                butter: 6,
                eggs: 9,
                fish: 43,
                milkAndFermentedMilkProducts: 17,
                vegetables: 9
            },
            macronutrients: {
                proteins: 11.3,
                fats: 7.96,
                carbohydrates: 8.23
            },
            caloricity: 153.4
        },
        {
            id: 'kids-9.15.3',
            name: 'Зразы рыбные рубленые паровые (треска) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 11,
                butter: 3.5,
                eggs: 9,
                fish: 43,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 67,
                sugar: 0.5,
                vegetables: 9
            },
            macronutrients: {
                proteins: 18.3,
                fats: 4.4,
                carbohydrates: 8.6
            },
            caloricity: 109.03
        },
        {
            id: 'kids-9.15.4',
            name: 'Зразы рыбные рубленые паровые (треска) с соусом сметанным',
            defaultOutput: 120,
            components: {
                breadWheat: 11,
                butter: 1,
                eggs: 9,
                fish: 43,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 17,
                sourCream: 12.5,
                vegetables: 9
            },
            macronutrients: {
                proteins: 7.6,
                fats: 3.82,
                carbohydrates: 7.35
            },
            caloricity: 96.53
        },
        {
            id: 'kids-9.15.5',
            name: 'Зразы рыбные рубленые паровые (окунь морской)',
            defaultOutput: 70,
            components: {
                breadWheat: 11,
                butter: 1,
                eggs: 9,
                fish: 43,
                milkAndFermentedMilkProducts: 17,
                vegetables: 9
            },
            macronutrients: {
                proteins: 13.27,
                fats: 4.8,
                carbohydrates: 8.76
            },
            caloricity: 135.1
        },
        {
            id: 'kids-9.15.6',
            name: 'Зразы рыбные рубленые паровые (окунь морской) с маслом сливочным',
            defaultOutput: 75,
            components: {
                breadWheat: 11,
                butter: 6,
                eggs: 9,
                fish: 43,
                milkAndFermentedMilkProducts: 17,
                vegetables: 9
            },
            macronutrients: {
                proteins: 12.41,
                fats: 9.32,
                carbohydrates: 8.23
            },
            caloricity: 170.95
        },
        {
            id: 'kids-9.15.7',
            name: 'Зразы рыбные рубленые паровые (окунь морской) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 11,
                butter: 3.5,
                eggs: 9,
                fish: 43,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 67,
                sugar: 0.5,
                vegetables: 9
            },
            macronutrients: {
                proteins: 8.99,
                fats: 5.25,
                carbohydrates: 8.6
            },
            caloricity: 120
        },
        {
            id: 'kids-9.15.8',
            name: 'Зразы рыбные рубленые паровые (окунь морской) с соусом сметанным',
            defaultOutput: 120,
            components: {
                breadWheat: 11,
                butter: 1,
                eggs: 9,
                fish: 43,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 17,
                sourCream: 12.5,
                vegetables: 9
            },
            macronutrients: {
                proteins: 8.3,
                fats: 4.7,
                carbohydrates: 7.35
            },
            caloricity: 107.5
        },
        {
            id: 'kids-9.15.9',
            name: 'Зразы рыбные рубленые паровые (хек)',
            defaultOutput: 70,
            components: {
                breadWheat: 11,
                butter: 1,
                eggs: 9,
                fish: 43,
                milkAndFermentedMilkProducts: 17,
                vegetables: 9
            },
            macronutrients: {
                proteins: 12.4,
                fats: 4.21,
                carbohydrates: 8.76
            },
            caloricity: 125.67
        },
        {
            id: 'kids-9.15.10',
            name: 'Зразы рыбные рубленые паровые (хек) с маслом сливочным',
            defaultOutput: 75,
            components: {
                breadWheat: 11,
                butter: 6,
                eggs: 9,
                fish: 43,
                milkAndFermentedMilkProducts: 17,
                vegetables: 9
            },
            macronutrients: {
                proteins: 11.6,
                fats: 8.77,
                carbohydrates: 8.23
            },
            caloricity: 162.17
        },
        {
            id: 'kids-9.15.11',
            name: 'Зразы рыбные рубленые паровые (хек) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 11,
                butter: 3.5,
                eggs: 9,
                fish: 43,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 67,
                sugar: 0.5,
                vegetables: 9
            },
            macronutrients: {
                proteins: 8.48,
                fats: 4.91,
                carbohydrates: 8.6
            },
            caloricity: 114.52
        },
        {
            id: 'kids-9.15.12',
            name: 'Зразы рыбные рубленые паровые (хек) с соусом сметанным',
            defaultOutput: 120,
            components: {
                breadWheat: 11,
                butter: 1,
                eggs: 9,
                fish: 43,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 17,
                sourCream: 12.5,
                vegetables: 9
            },
            macronutrients: {
                proteins: 7.78,
                fats: 4.32,
                carbohydrates: 7.35
            },
            caloricity: 102.02
        },
        {
            id: 'kids-9.15.13',
            name: 'Зразы рыбные рубленые паровые (минтай)',
            defaultOutput: 70,
            components: {
                breadWheat: 11,
                butter: 1,
                eggs: 9,
                fish: 43,
                milkAndFermentedMilkProducts: 17,
                vegetables: 9
            },
            macronutrients: {
                proteins: 12.01,
                fats: 3.51,
                carbohydrates: 8.76
            },
            caloricity: 117.93
        },
        {
            id: 'kids-9.15.14',
            name: 'Зразы рыбные рубленые паровые (минтай) с маслом сливочным',
            defaultOutput: 75,
            components: {
                breadWheat: 11,
                butter: 6,
                eggs: 9,
                fish: 43,
                milkAndFermentedMilkProducts: 17,
                vegetables: 9
            },
            macronutrients: {
                proteins: 11.24,
                fats: 8.12,
                carbohydrates: 8.23
            },
            caloricity: 154.95
        },
        {
            id: 'kids-9.15.15',
            name: 'Зразы рыбные рубленые паровые (минтай) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 11,
                butter: 3.5,
                eggs: 9,
                fish: 43,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 67,
                sugar: 0.5,
                vegetables: 9
            },
            macronutrients: {
                proteins: 8.26,
                fats: 4.5,
                carbohydrates: 8.6
            },
            caloricity: 110
        },
        {
            id: 'kids-9.15.16',
            name: 'Зразы рыбные рубленые паровые (минтай) с соусом сметанным',
            defaultOutput: 120,
            components: {
                breadWheat: 11,
                butter: 1,
                eggs: 9,
                fish: 43,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 17,
                sourCream: 12.5,
                vegetables: 9
            },
            macronutrients: {
                proteins: 7.56,
                fats: 3.91,
                carbohydrates: 7.35
            },
            caloricity: 97.5
        }
    ]
}

const FISH_ROLL: IDish = {
    id: 'kids-9.16',
    variants: [
        {
            id: 'kids-9.16.1',
            name: 'Рулет из рыбы (треска)',
            defaultOutput: 70,
            components: {
                breadWheat: 15,
                eggs: 4,
                fish: 42,
                milkAndFermentedMilkProducts: 17,
                oil: 5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 11.9,
                fats: 9.99,
                carbohydrates: 14.19
            },
            caloricity: 198.9
        },
        {
            id: 'kids-9.16.2',
            name: 'Рулет из рыбы (треска) с маслом сливочным',
            defaultOutput: 75,
            components: {
                breadWheat: 15,
                butter: 5,
                eggs: 4,
                fish: 42,
                milkAndFermentedMilkProducts: 17,
                oil: 5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 11.13,
                fats: 14.16,
                carbohydrates: 13.3
            },
            caloricity: 230.52
        },
        {
            id: 'kids-9.16.3',
            name: 'Рулет из рыбы (треска) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 15,
                butter: 2.5,
                eggs: 4,
                fish: 42,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 67,
                oil: 5,
                sugar: 0.5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 8.18,
                fats: 7.1,
                carbohydrates: 11.72
            },
            caloricity: 146.02
        },
        {
            id: 'kids-9.16.4',
            name: 'Рулет из рыбы (треска) с соусом сметанным',
            defaultOutput: 120,
            components: {
                breadWheat: 15,
                eggs: 4,
                fish: 42,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 17,
                oil: 5,
                sourCream: 12.5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 7.48,
                fats: 6.48,
                carbohydrates: 10.5
            },
            caloricity: 133.51
        },
        {
            id: 'kids-9.16.5',
            name: 'Рулет из рыбы (окунь морской)',
            defaultOutput: 70,
            components: {
                breadWheat: 15,
                eggs: 4,
                fish: 42,
                milkAndFermentedMilkProducts: 17,
                oil: 5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 13.1,
                fats: 9.33,
                carbohydrates: 14.19
            },
            caloricity: 198.03
        },
        {
            id: 'kids-9.16.6',
            name: 'Рулет из рыбы (окунь морской) с маслом сливочным',
            defaultOutput: 75,
            components: {
                breadWheat: 15,
                butter: 5,
                eggs: 4,
                fish: 42,
                milkAndFermentedMilkProducts: 17,
                oil: 5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 12.21,
                fats: 13.55,
                carbohydrates: 13.3
            },
            caloricity: 229.67
        },
        {
            id: 'kids-9.16.7',
            name: 'Рулет из рыбы (окунь морской) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 15,
                butter: 2.5,
                eggs: 4,
                fish: 42,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 67,
                oil: 5,
                sugar: 0.5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 8.86,
                fats: 7.9,
                carbohydrates: 11.72
            },
            caloricity: 156.73
        },
        {
            id: 'kids-9.16.8',
            name: 'Рулет из рыбы (окунь морской) с соусом сметанным',
            defaultOutput: 120,
            components: {
                breadWheat: 15,
                eggs: 4,
                fish: 42,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 17,
                oil: 5,
                sourCream: 12.5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 8.16,
                fats: 7.31,
                carbohydrates: 10.5
            },
            caloricity: 144.23
        },
        {
            id: 'kids-9.16.9',
            name: 'Рулет из рыбы (хек)',
            defaultOutput: 70,
            components: {
                breadWheat: 15,
                eggs: 4,
                fish: 42,
                milkAndFermentedMilkProducts: 17,
                oil: 5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 12.2,
                fats: 8.76,
                carbohydrates: 14.19
            },
            caloricity: 188.84
        },
        {
            id: 'kids-9.16.10',
            name: 'Рулет из рыбы (хек) с маслом сливочным',
            defaultOutput: 75,
            components: {
                breadWheat: 15,
                butter: 5,
                eggs: 4,
                fish: 42,
                milkAndFermentedMilkProducts: 17,
                oil: 5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 11.41,
                fats: 13.01,
                carbohydrates: 13.3
            },
            caloricity: 221.13
        },
        {
            id: 'kids-9.16.11',
            name: 'Рулет из рыбы (хек) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 15,
                butter: 2.5,
                eggs: 4,
                fish: 42,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 67,
                oil: 5,
                sugar: 0.5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 8.37,
                fats: 7.56,
                carbohydrates: 11.72
            },
            caloricity: 151.37
        },
        {
            id: 'kids-9.16.12',
            name: 'Рулет из рыбы (хек) с соусом сметанным',
            defaultOutput: 120,
            components: {
                breadWheat: 15,
                eggs: 4,
                fish: 42,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 17,
                oil: 5,
                sourCream: 12.5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 7.7,
                fats: 6.97,
                carbohydrates: 10.5
            },
            caloricity: 138.87
        },
        {
            id: 'kids-9.16.13',
            name: 'Рулет из рыбы (минтай)',
            defaultOutput: 70,
            components: {
                breadWheat: 15,
                eggs: 4,
                fish: 42,
                milkAndFermentedMilkProducts: 17,
                oil: 5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 11.83,
                fats: 8.07,
                carbohydrates: 14.19
            },
            caloricity: 181.3
        },
        {
            id: 'kids-9.16.14',
            name: 'Рулет из рыбы (минтай) с маслом сливочным',
            defaultOutput: 75,
            components: {
                breadWheat: 15,
                butter: 5,
                eggs: 4,
                fish: 42,
                milkAndFermentedMilkProducts: 17,
                oil: 5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 11.1,
                fats: 12.37,
                carbohydrates: 13.3
            },
            caloricity: 214.08
        },
        {
            id: 'kids-9.16.15',
            name: 'Рулет из рыбы (минтай) с соусом молочным',
            defaultOutput: 120,
            components: {
                breadWheat: 15,
                butter: 2.5,
                eggs: 4,
                fish: 42,
                flourWheat: 2.5,
                milkAndFermentedMilkProducts: 67,
                oil: 5,
                sugar: 0.5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 8.14,
                fats: 7.16,
                carbohydrates: 11.72
            },
            caloricity: 146.96
        },
        {
            id: 'kids-9.16.16',
            name: 'Рулет из рыбы (минтай) с соусом сметанным',
            defaultOutput: 120,
            components: {
                breadWheat: 15,
                eggs: 4,
                fish: 42,
                flourWheat: 3.75,
                milkAndFermentedMilkProducts: 17,
                oil: 5,
                sourCream: 12.5,
                vegetables: 28,
            },
            macronutrients: {
                proteins: 7.44,
                fats: 6.57,
                carbohydrates: 10.5
            },
            caloricity: 134.46
        },
    ]
}