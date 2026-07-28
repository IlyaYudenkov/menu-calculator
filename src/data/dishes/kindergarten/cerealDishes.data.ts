import type { IDish } from "@/model/dish.model";

const VISCOUS_MILK_BUCKWHEAT_PORRIDGE: IDish = {
    id: 'kids-4.1',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.1.1',
            name: 'Каша вязкая молочная гречневая',
            components: {
                butter: 5,
                cereals: 47.7,
                milkAndFermentedMilkProducts: 133.8,
                sugar: 5
            },
            macronutrients: {
                proteins: 3.71,
                fats: 3.77,
                carbohydrates: 14.46
            },
            caloricity: 127.29
        }
    ]
}

const VISCOUS_MILK_SEMOLINA_PORRIDGE: IDish = {
    id: 'kids-4.2',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.2.1',
            name: 'Каша вязкая молочная манная',
            components: {
                butter: 5,
                cereals: 42.4,
                milkAndFermentedMilkProducts: 157,
                sugar: 5
            },
            macronutrients: {
                proteins: 3.93,
                fats: 3.73,
                carbohydrates: 18.52
            },
            caloricity: 124.7
        }
    ]
}

const VISCOUS_MILK_OATMEAL_PORRIDGE: IDish = {
    id: 'kids-4.3',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.3.1',
            name: 'Каша вязкая молочная овсяная',
            components: {
                butter: 5,
                cereals: 47.7,
                milkAndFermentedMilkProducts: 133,
                sugar: 5
            },
            macronutrients: {
                proteins: 4.02,
                fats: 4.56,
                carbohydrates: 15.77
            },
            caloricity: 121.52
        }
    ]
}

const VISCOUS_MILK_PEARL_PORRIDGE: IDish = {
    id: 'kids-4.4',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.4.1',
            name: 'Каша вязкая молочная перловая',
            components: {
                butter: 5,
                cereals: 42.4,
                milkAndFermentedMilkProducts: 132,
                sugar: 5
            },
            macronutrients: {
                proteins: 3.42,
                fats: 3.47,
                carbohydrates: 17.76
            },
            caloricity: 117.3
        }
    ]
}

const VISCOUS_MILK_MILLET_PORRIDGE: IDish = {
    id: 'kids-4.5',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.5.1',
            name: 'Каша вязкая молочная пшенная',
            components: {
                butter: 5,
                cereals: 47.7,
                milkAndFermentedMilkProducts: 133,
                sugar: 5
            },
            macronutrients: {
                proteins: 4.12,
                fats: 3.97,
                carbohydrates: 19.37
            },
            caloricity: 131.18
        }
    ]
}

const VISCOUS_MILK_RICE_PORRIDGE: IDish = {
    id: 'kids-4.6',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.6.1',
            name: 'Каша вязкая молочная рисовая',
            components: {
                butter: 5,
                cereals: 42.4,
                milkAndFermentedMilkProducts: 133,
                sugar: 5
            },
            macronutrients: {
                proteins: 3,
                fats: 3.47,
                carbohydrates: 18.72
            },
            caloricity: 119.45
        }
    ]
}

const VISCOUS_MILK_RICE_PORRIDGE_W_PRUNES: IDish = {
    id: 'kids-4.7',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.7.1',
            name: 'Каша вязкая молочная рисовая с черносливом',
            components: {
                butter: 5,
                cereals: 36,
                fruitsDried: 35.4,
                milkAndFermentedMilkProducts: 100,
                sugar: 4
            },
            macronutrients: {
                proteins: 2.8,
                fats: 3.08,
                carbohydrates: 26.02
            },
            caloricity: 144.07
        }
    ]
}

const VISCOUS_SEMOLINA_PORRIDGE_W_CARROTS: IDish = {
    id: 'kids-4.8',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.8.1',
            name: 'Каша вязкая манная с морковью',
            components: {
                butter: 6,
                cereals: 39,
                milkAndFermentedMilkProducts: 104,
                sugar: 6,
                vegetables: 30
            },
            macronutrients: {
                proteins: 3.28,
                fats: 3.51,
                carbohydrates: 17.79
            },
            caloricity: 118.37
        }
    ]
}

const VISCOUS_SEMOLINA_PORRIDGE_W_APPLES: IDish = {
    id: 'kids-4.9',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.9.1',
            name: 'Каша вязкая манная с яблоками',
            components: {
                butter: 5,
                cereals: 38,
                fruits: 55,
                milkAndFermentedMilkProducts: 100,
                sugar: 6,
            },
            macronutrients: {
                proteins: 3.11,
                fats: 3.18,
                carbohydrates: 18.85
            },
            caloricity: 117.7
        }
    ]
}

const VISCOUS_RICE_PORRIDGE_W_APPLES: IDish = {
    id: 'kids-4.10',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.10.1',
            name: 'Каша вязкая рисовая с яблоками',
            components: {
                butter: 5,
                cereals: 38,
                fruits: 55,
                milkAndFermentedMilkProducts: 100,
                sugar: 6,
            },
            macronutrients: {
                proteins: 3.11,
                fats: 3.18,
                carbohydrates: 18.85
            },
            caloricity: 117.7
        }
    ]
}

const SEMOLINA_DUMPLINGS_W_CHEESE: IDish = {
    id: 'kids-4.11',
    variants: [
        {
            id: 'kids-4.11.1',
            name: 'Клецки манные с сыром',
            defaultOutput: 200,
            components: {
                butter: 4,
                cereals: 64,
                eggs: 8,
                milkAndFermentedMilkProducts: 80,
            },
            macronutrients: {
                proteins: 4.4,
                fats: 3.02,
                carbohydrates: 23.94
            },
            caloricity: 142.54
        },
        {
            id: 'kids-4.11.2',
            name: 'Клецки манные с сыром со сметаной',
            defaultOutput: 215,
            components: {
                butter: 4,
                cereals: 64,
                eggs: 8,
                milkAndFermentedMilkProducts: 80,
                sourCream: 15,
            },
            macronutrients: {
                proteins: 4.27,
                fats: 4.04,
                carbohydrates: 22.5
            },
            caloricity: 145.52
        },
        {
            id: 'kids-4.11.3',
            name: 'Клецки манные c маслом сливочным и тертым сыром',
            defaultOutput: 210,
            components: {
                butter: 9,
                cereals: 64,
                cheese: 5,
                eggs: 8,
                milkAndFermentedMilkProducts: 80,
            },
            macronutrients: {
                proteins: 4.75,
                fats: 5.16,
                carbohydrates: 22.81
            },
            caloricity: 159.3
        }
    ]
}

const LIQUID_MILK_PORRIDGE_HERCULES: IDish = {
    id: 'kids-4.12',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.12.1',
            name: 'Каша жидкая молочная "Геркулес"',
            components: {
                butter: 5,
                cereals: 29.3,
                milkAndFermentedMilkProducts: 137,
                sugar: 5,
            },
            macronutrients: {
                proteins: 3.17,
                fats: 4.12,
                carbohydrates: 11.79
            },
            caloricity: 97.63
        }
    ]
}

const LIQUID_MILK_SEMOLINA_PORRIDGE: IDish = {
    id: 'kids-4.13',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.13.1',
            name: 'Каша жидкая молочная манная',
            components: {
                butter: 5,
                cereals: 29.3,
                milkAndFermentedMilkProducts: 137,
                sugar: 5,
            },
            macronutrients: {
                proteins: 3.08,
                fats: 3.45,
                carbohydrates: 14.11
            },
            caloricity: 100.66
        }
    ]
}

const LIQUID_MILK_OATMEAL_PORRIDGE: IDish = {
    id: 'kids-4.14',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.14.1',
            name: 'Каша жидкая молочная овсяная',
            components: {
                butter: 5,
                cereals: 38.1,
                milkAndFermentedMilkProducts: 130,
                sugar: 5,
            },
            macronutrients: {
                proteins: 3.51,
                fats: 4.27,
                carbohydrates: 13.55
            },
            caloricity: 107.73
        }
    ]
}

const LIQUID_MILK_MILLET_PORRIDGE: IDish = {
    id: 'kids-4.15',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.15.1',
            name: 'Каша жидкая молочная пшенная',
            components: {
                butter: 5,
                cereals: 38.1,
                milkAndFermentedMilkProducts: 130,
                sugar: 5,
            },
            macronutrients: {
                proteins: 3.59,
                fats: 3.8,
                carbohydrates: 16.43
            },
            caloricity: 115.44
        }
    ]
}

const LIQUID_MILK_RICE_PORRIDGE: IDish = {
    id: 'kids-4.16',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.16.1',
            name: 'Каша жидкая молочная рисовая',
            components: {
                butter: 5,
                cereals: 39.3,
                milkAndFermentedMilkProducts: 137,
                sugar: 5,
            },
            macronutrients: {
                proteins: 2.65,
                fats: 3.45,
                carbohydrates: 14.6
            },
            caloricity: 100.93
        }
    ]
}