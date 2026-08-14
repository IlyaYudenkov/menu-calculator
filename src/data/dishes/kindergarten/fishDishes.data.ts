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