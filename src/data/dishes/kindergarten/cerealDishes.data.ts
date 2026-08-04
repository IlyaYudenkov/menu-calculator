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

const LIQUID_MILK_HERCULES_PORRIDGE: IDish = {
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

const LIQUID_MILLET_PORRIDGE_W_APPLES: IDish = {
    id: 'kids-4.17',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.17.1',
            name: 'Каша жидкая пшенная с яблоками',
            components: {
                butter: 5,
                cereals: 36,
                fruits: 44,
                milkAndFermentedMilkProducts: 110,
                sugar: 6,
            },
            macronutrients: {
                proteins: 3.31,
                fats: 3.63,
                carbohydrates: 17.77
            },
            caloricity: 118.09
        }
    ]
}

const LIQUID_RICE_PORRIDGE_W_RAISINS: IDish = {
    id: 'kids-4.18',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.18.1',
            name: 'Каша жидкая рисовая с изюмом',
            components: {
                butter: 5,
                cereals: 28,
                fruitsDried: 15,
                milkAndFermentedMilkProducts: 110,
                sugar: 5,
            },
            macronutrients: {
                proteins: 2.46,
                fats: 2.63,
                carbohydrates: 13.36
            },
            caloricity: 110.37
        }
    ]
}

const LIQUID_RICE_PORRIDGE_W_CARROTS: IDish = {
    id: 'kids-4.19',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.19.1',
            name: 'Каша жидкая рисовая с морковью',
            components: {
                butter: 5,
                cereals: 28,
                milkAndFermentedMilkProducts: 120,
                sugar: 5,
                vegetables: 36
            },
            macronutrients: {
                proteins: 2.6,
                fats: 3.3,
                carbohydrates: 14.98
            },
            caloricity: 102.27
        }
    ]
}

const LIQUID_RICE_PORRIDGE_W_APPLES: IDish = {
    id: 'kids-4.20',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.20.1',
            name: 'Каша жидкая рисовая с яблоками',
            components: {
                butter: 5,
                cereals: 28,
                fruits: 41,
                milkAndFermentedMilkProducts: 110,
                sugar: 6,
            },
            macronutrients: {
                proteins: 2.34,
                fats: 3.22,
                carbohydrates: 15.86
            },
            caloricity: 102.69
        }
    ]
}

const LIQUID_MILLET_PORRIDGE: IDish = {
    id: 'kids-4.21',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.21.1',
            name: 'Каша жидкая пшенная',
            components: {
                butter: 5,
                cereals: 38.1,
                sugar: 5,
            },
            macronutrients: {
                proteins: 1.96,
                fats: 2.37,
                carbohydrates: 13.67
            },
            caloricity: 85.02
        }
    ]
}

const LIQUID_HERCULES_PORRIDGE: IDish = {
    id: 'kids-4.22',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.22.1',
            name: 'Каша жидкая "Геркулес"',
            components: {
                butter: 5,
                cereals: 29.3,
                sugar: 5,
            },
            macronutrients: {
                proteins: 1.45,
                fats: 2.62,
                carbohydrates: 8.87
            },
            caloricity: 65.57
        }
    ]
}

const LIQUID_SEMOLINA_PORRIDGE: IDish = {
    id: 'kids-4.23',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.23.1',
            name: 'Каша жидкая манная',
            components: {
                butter: 5,
                cereals: 29.3,
                sugar: 5,
            },
            macronutrients: {
                proteins: 2.46,
                fats: 2.63,
                carbohydrates: 13.36
            },
            caloricity: 88.9
        }
    ]
}

const LIQUID_OATMEAL_PORRIDGE: IDish = {
    id: 'kids-4.24',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.24.1',
            name: 'Каша жидкая овсяная',
            components: {
                butter: 5,
                cereals: 38.1,
                sugar: 5,
            },
            macronutrients: {
                proteins: 1.88,
                fats: 2.84,
                carbohydrates: 10.79
            },
            caloricity: 77.31
        }
    ]
}

const LIQUID_RICE_PORRIDGE: IDish = {
    id: 'kids-4.25',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.25.1',
            name: 'Каша жидкая рисовая',
            components: {
                butter: 5,
                cereals: 29.3,
                sugar: 5,
            },
            macronutrients: {
                proteins: 0.93,
                fats: 1.95,
                carbohydrates: 11.68
            },
            caloricity: 68.9
        }
    ]
}

const SEMOLINA_CASSEROLE: IDish = {
    id: 'kids-4.26',
    variants: [
        {
            id: 'kids-4.26.1',
            name: 'Запеканка манная',
            defaultOutput: 200,
            components: {
                breadWheat: 3,
                butter: 3,
                cereals: 45,
                eggs: 10,
                fruitsDried: 10,
                milkAndFermentedMilkProducts: 100,
                sourCream: 3,
                sugar: 10,
            },
            macronutrients: {
                proteins: 4.15,
                fats: 3.18,
                carbohydrates: 24.32
            },
            caloricity: 143.22
        },
        {
            id: 'kids-4.26.2',
            name: 'Запеканка манная с маслом сливочным',
            defaultOutput: 205,
            components: {
                breadWheat: 8,
                butter: 3,
                cereals: 45,
                eggs: 10,
                fruitsDried: 10,
                milkAndFermentedMilkProducts: 100,
                sourCream: 3,
                sugar: 10,
            },
            macronutrients: {
                proteins: 4.06,
                fats: 4.87,
                carbohydrates: 23.75
            },
            caloricity: 156.14
        },
        {
            id: 'kids-4.26.3',
            name: 'Запеканка манная со сметаной',
            defaultOutput: 215,
            components: {
                breadWheat: 3,
                butter: 3,
                cereals: 45,
                eggs: 10,
                fruitsDried: 10,
                milkAndFermentedMilkProducts: 100,
                sourCream: 18,
                sugar: 10,
            },
            macronutrients: {
                proteins: 4.04,
                fats: 4.18,
                carbohydrates: 22.82
            },
            caloricity: 146.16
        },
        {
            id: 'kids-4.26.4',
            name: 'Запеканка манная с соусом молочным сладким',
            defaultOutput: 250,
            components: {
                breadWheat: 3,
                butter: 5,
                cereals: 45,
                eggs: 10,
                fruitsDried: 10,
                flourWheat: 5,
                milkAndFermentedMilkProducts: 150,
                sourCream: 3,
                sugar: 16,
            },
            macronutrients: {
                proteins: 3.92,
                fats: 3.72,
                carbohydrates: 23.09
            },
            caloricity: 141.9
        }
    ]
}

const SEMOLINA_CASSEROLE_W_CARROTS: IDish = {
    id: 'kids-4.27',
    variants: [
        {
            id: 'kids-4.27.1',
            name: 'Запеканка манная с морковью',
            defaultOutput: 200,
            components: {
                breadWheat: 5,
                butter: 5,
                cereals: 40,
                eggs: 4,
                milkAndFermentedMilkProducts: 40,
                sourCream: 5,
                sugar: 8,
                vegetables: 24,
            },
            macronutrients: {
                proteins: 3.02,
                fats: 3.12,
                carbohydrates: 19.07
            },
            caloricity: 118.84
        },
        {
            id: 'kids-4.27.2',
            name: 'Запеканка манная с морковью с маслом сливочным',
            defaultOutput: 205,
            components: {
                breadWheat: 5,
                butter: 10,
                cereals: 40,
                eggs: 4,
                milkAndFermentedMilkProducts: 40,
                sourCream: 5,
                sugar: 8,
                vegetables: 24,
            },
            macronutrients: {
                proteins: 2.95,
                fats: 4.81,
                carbohydrates: 18.62
            },
            caloricity: 132.4
        },
        {
            id: 'kids-4.27.3',
            name: 'Запеканка манная с морковью со сметаной',
            defaultOutput: 215,
            components: {
                breadWheat: 5,
                butter: 5,
                cereals: 40,
                eggs: 4,
                milkAndFermentedMilkProducts: 40,
                sourCream: 20,
                sugar: 8,
                vegetables: 24,
            },
            macronutrients: {
                proteins: 2.99,
                fats: 4.13,
                carbohydrates: 17.94
            },
            caloricity: 123.48
        },
        {
            id: 'kids-4.27.4',
            name: 'Запеканка манная с морковью с соусом молочным сладким',
            defaultOutput: 250,
            components: {
                breadWheat: 5,
                butter: 7,
                cereals: 40,
                eggs: 4,
                flourWheat: 2,
                milkAndFermentedMilkProducts: 90,
                sourCream: 5,
                sugar: 14,
                vegetables: 24,
            },
            macronutrients: {
                proteins: 3,
                fats: 3.7,
                carbohydrates: 18.9
            },
            caloricity: 122.4
        }
    ]
}

const MILLET_CASSEROLE: IDish = {
    id: 'kids-4.28',
    variants: [
        {
            id: 'kids-4.28.1',
            name: 'Запеканка пшенная',
            defaultOutput: 200,
            components: {
                breadWheat: 3,
                butter: 3,
                cereals: 50,
                eggs: 10,
                fruitsDried: 10,
                milkAndFermentedMilkProducts: 100,
                sourCream: 3,
                sugar: 10,
            },
            macronutrients: {
                proteins: 4.65,
                fats: 3.71,
                carbohydrates: 25.58
            },
            caloricity: 155.1
        },
        {
            id: 'kids-4.28.2',
            name: 'Запеканка пшенная с маслом сливочным',
            defaultOutput: 205,
            components: {
                breadWheat: 3,
                butter: 8,
                cereals: 50,
                eggs: 10,
                fruitsDried: 10,
                milkAndFermentedMilkProducts: 100,
                sourCream: 3,
                sugar: 10,
            },
            macronutrients: {
                proteins: 4.55,
                fats: 5.4,
                carbohydrates: 24.97
            },
            caloricity: 167.73
        },
        {
            id: 'kids-4.28.3',
            name: 'Запеканка пшенная со сметаной',
            defaultOutput: 215,
            components: {
                breadWheat: 3,
                butter: 3,
                cereals: 50,
                eggs: 10,
                fruitsDried: 10,
                milkAndFermentedMilkProducts: 100,
                sourCream: 18,
                sugar: 10,
            },
            macronutrients: {
                proteins: 4.5,
                fats: 4.67,
                carbohydrates: 24
            },
            caloricity: 157.2
        },
        {
            id: 'kids-4.28.4',
            name: 'Запеканка пшенная с соусом молочным сладким',
            defaultOutput: 250,
            components: {
                breadWheat: 3,
                butter: 5,
                cereals: 50,
                eggs: 10,
                flourWheat: 2,
                fruitsDried: 10,
                milkAndFermentedMilkProducts: 150,
                sourCream: 3,
                sugar: 16,
            },
            macronutrients: {
                proteins: 4.32,
                fats: 4.72,
                carbohydrates: 24.1
            },
            caloricity: 156.74
        }
    ]
}

const RICE_CASSEROLE: IDish = {
    id: 'kids-4.29',
    variants: [
        {
            id: 'kids-4.29.1',
            name: 'Запеканка рисовая',
            defaultOutput: 200,
            components: {
                breadWheat: 3,
                butter: 3,
                cereals: 45,
                eggs: 10,
                fruitsDried: 10,
                milkAndFermentedMilkProducts: 100,
                sourCream: 3,
                sugar: 10,
            },
            macronutrients: {
                proteins: 3.49,
                fats: 3.18,
                carbohydrates: 25.07
            },
            caloricity: 143.62
        },
        {
            id: 'kids-4.29.2',
            name: 'Запеканка рисовая с маслом сливочным',
            defaultOutput: 205,
            components: {
                breadWheat: 3,
                butter: 8,
                cereals: 45,
                eggs: 10,
                fruitsDried: 10,
                milkAndFermentedMilkProducts: 100,
                sourCream: 3,
                sugar: 10,
            },
            macronutrients: {
                proteins: 3.42,
                fats: 4.87,
                carbohydrates: 24.45
            },
            caloricity: 156.5
        },
        {
            id: 'kids-4.29.3',
            name: 'Запеканка рисовая со сметаной',
            defaultOutput: 215,
            components: {
                breadWheat: 3,
                butter: 3,
                cereals: 45,
                eggs: 10,
                fruitsDried: 10,
                milkAndFermentedMilkProducts: 100,
                sourCream: 18,
                sugar: 10,
            },
            macronutrients: {
                proteins: 3.42,
                fats: 4.18,
                carbohydrates: 23.52
            },
            caloricity: 146.53
        },
        {
            id: 'kids-4.29.4',
            name: 'Запеканка рисовая с соусом молочным сладким',
            defaultOutput: 250,
            components: {
                breadWheat: 3,
                butter: 5,
                cereals: 45,
                eggs: 10,
                flourWheat: 2,
                fruitsDried: 10,
                milkAndFermentedMilkProducts: 150,
                sourCream: 3,
                sugar: 16,
            },
            macronutrients: {
                proteins: 3.39,
                fats: 3.72,
                carbohydrates: 23.7
            },
            caloricity: 142.18
        }
    ]
}

const RICE_CASSEROLE_W_CURD: IDish = {
    id: 'kids-4.30',
    variants: [
        {
            id: 'kids-4.30.1',
            name: 'Запеканка рисовая с творогом',
            defaultOutput: 200,
            components: {
                breadWheat: 5,
                butter: 5,
                cereals: 48,
                curd: 40,
                eggs: 10,
                fruitsDried: 20,
                sourCream: 5,
                sugar: 15,
            },
            macronutrients: {
                proteins: 5.51,
                fats: 4.59,
                carbohydrates: 30.14
            },
            caloricity: 185.27
        },
        {
            id: 'kids-4.30.2',
            name: 'Запеканка рисовая с творогом с маслом сливочным',
            defaultOutput: 205,
            components: {
                breadWheat: 5,
                butter: 10,
                cereals: 48,
                curd: 40,
                eggs: 10,
                fruitsDried: 20,
                sourCream: 5,
                sugar: 15,
            },
            macronutrients: {
                proteins: 5.4,
                fats: 6.25,
                carbohydrates: 29.42
            },
            caloricity: 197.17
        },
        {
            id: 'kids-4.30.3',
            name: 'Запеканка рисовая с творогом со сметаной',
            defaultOutput: 215,
            components: {
                breadWheat: 5,
                butter: 5,
                cereals: 48,
                curd: 40,
                eggs: 10,
                fruitsDried: 20,
                sourCream: 20,
                sugar: 15,
            },
            macronutrients: {
                proteins: 5.3,
                fats: 5.5,
                carbohydrates: 28.24
            },
            caloricity: 185.3
        },
        {
            id: 'kids-4.30.4',
            name: 'Запеканка рисовая с творогом с соусом молочным сладким',
            defaultOutput: 250,
            components: {
                breadWheat: 5,
                butter: 7,
                cereals: 48,
                curd: 40,
                eggs: 10,
                flourWheat: 2,
                fruitsDried: 20,
                milkAndFermentedMilkProducts: 50,
                sourCream: 5,
                sugar: 21,
            },
            macronutrients: {
                proteins: 5,
                fats: 4.85,
                carbohydrates: 27.75
            },
            caloricity: 175.5
        }
    ]
}

const RICE_CASSEROLE_W_APPLES: IDish = {
    id: 'kids-4.31',
    variants: [
        {
            id: 'kids-4.31.1',
            name: 'Запеканка рисовая с яблоками',
            defaultOutput: 200,
            components: {
                breadWheat: 3,
                butter: 4,
                cereals: 40,
                eggs: 4.5,
                fruits: 32,
                milkAndFermentedMilkProducts: 80,
                sourCream: 2,
                sugar: 8,
            },
            macronutrients: {
                proteins: 2.74,
                fats: 2.99,
                carbohydrates: 20.56
            },
            caloricity: 121.35
        },
        {
            id: 'kids-4.31.2',
            name: 'Запеканка рисовая с яблоками с соусом молочным сладким',
            defaultOutput: 250,
            components: {
                breadWheat: 3,
                butter: 6,
                cereals: 40,
                eggs: 4.5,
                flourWheat: 2,
                fruits: 32,
                milkAndFermentedMilkProducts: 130,
                sourCream: 2,
                sugar: 14,
            },
            macronutrients: {
                proteins: 2.79,
                fats: 3.56,
                carbohydrates: 20.08
            },
            caloricity: 124.36
        },
    ]
}

const SEMOLINA_CASSEROLE_W_APPLES: IDish = {
    id: 'kids-4.32',
    variants: [
        {
            id: 'kids-4.32.1',
            name: 'Запеканка манная с яблоками',
            defaultOutput: 200,
            components: {
                breadWheat: 3,
                butter: 4,
                cereals: 40,
                eggs: 6,
                fruits: 32,
                milkAndFermentedMilkProducts: 80,
                sourCream: 2,
                sugar: 8,
            },
            macronutrients: {
                proteins: 3.42,
                fats: 3.43,
                carbohydrates: 19.9
            },
            caloricity: 125.41
        },
        {
            id: 'kids-4.32.2',
            name: 'Запеканка манная с яблоками с соусом молочным сладким',
            defaultOutput: 250,
            components: {
                breadWheat: 3,
                butter: 6,
                cereals: 40,
                eggs: 6,
                flourWheat: 2,
                fruits: 32,
                milkAndFermentedMilkProducts: 130,
                sourCream: 2,
                sugar: 14,
            },
            macronutrients: {
                proteins: 3.33,
                fats: 3.92,
                carbohydrates: 17.4
            },
            caloricity: 119.43
        },
    ]
}

const PILAF_W_RAISINS: IDish = {
    id: 'kids-4.33',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.33.1',
            name: 'Плов с изюмом',
            components: {
                cereals: 53,
                fruitsDried: 20,
                oil: 19,
                vegetables: 64,
            },
            macronutrients: {
                proteins: 2.16,
                fats: 8.6,
                carbohydrates: 24.92
            },
            caloricity: 190.66
        },        
    ]
}

const PILAF_W_DRIED_APRICOTS_N_RAISINS: IDish = {
    id: 'kids-4.34',
    generalOutput: 200,
    variants: [
        {
            id: 'kids-4.34.1',
            name: 'Плов с курагой и изюмом',
            components: {
                butter: 13,
                cereals: 45.5,
                fruitsDried: 32,
                sugar: 4,
                vegetables: 18,
            },
            macronutrients: {
                proteins: 2,
                fats: 4.93,
                carbohydrates: 25.75
            },
            caloricity: 157.12
        },        
    ]
}

const MANNIK: IDish = {
    id: 'kids-4.35',
    variants: [
        {
            id: 'kids-4.35.1',
            name: 'Манник',
            defaultOutput: 200,
            components: {
                butter: 4,
                cereals: 53.3,
                eggs: 13.3,
                milkAndFermentedMilkProducts: 160,
                sugar: 13.3
            },
            macronutrients: {
                proteins: 5.34,
                fats: 2.4,
                carbohydrates: 25.01
            },
            caloricity: 145.82
        },   
        {
            id: 'kids-4.35.2',
            name: 'Манник с повидлом',
            defaultOutput: 215,
            components: {
                butter: 4,
                cereals: 53.3,
                confectioneryProducts: 15,
                eggs: 13.3,
                milkAndFermentedMilkProducts: 160,
                sugar: 13.3
            },
            macronutrients: {
                proteins: 5,
                fats: 2.23,
                carbohydrates: 27.36
            },
            caloricity: 151.3
        },
        {
            id: 'kids-4.35.3',
            name: 'Манник со сметаной',
            defaultOutput: 215,
            components: {
                butter: 4,
                cereals: 53.3,
                eggs: 13.3,
                milkAndFermentedMilkProducts: 160,
                sourCream: 15,
                sugar: 13.3
            },
            macronutrients: {
                proteins: 5.14,
                fats: 3.46,
                carbohydrates: 23.46
            },
            caloricity: 148.6
        },
        {
            id: 'kids-4.35.4',
            name: 'Манник с соусом молочным сладким',
            defaultOutput: 250,
            components: {
                butter: 6,
                cereals: 53.3,
                eggs: 13.3,
                flourWheat: 2,
                milkAndFermentedMilkProducts: 210,
                sugar: 19.3
            },
            macronutrients: {
                proteins: 4.9,
                fats: 3.09,
                carbohydrates: 23.64
            },
            caloricity: 143.94
        },
        {
            id: 'kids-4.35.5',
            name: 'Манник с соусом сметанным',
            defaultOutput: 250,
            components: {
                butter: 4,
                cereals: 53.3,
                eggs: 13.3,
                flourWheat: 3.27,
                milkAndFermentedMilkProducts: 160,
                sourCream: 12.5,
                sugar: 13.3
            },
            macronutrients: {
                proteins: 4.51,
                fats: 2.98,
                carbohydrates: 22.95
            },
            caloricity: 138.97
        },
    ]
}

export const CEREAL_DISHES_KINDERGARTEN_ARRAY: IDish[] = [
    VISCOUS_MILK_BUCKWHEAT_PORRIDGE,
    VISCOUS_MILK_SEMOLINA_PORRIDGE,
    VISCOUS_MILK_OATMEAL_PORRIDGE,
    VISCOUS_MILK_PEARL_PORRIDGE,
    VISCOUS_MILK_MILLET_PORRIDGE,
    VISCOUS_MILK_RICE_PORRIDGE,
    VISCOUS_MILK_RICE_PORRIDGE_W_PRUNES,
    VISCOUS_SEMOLINA_PORRIDGE_W_CARROTS,
    VISCOUS_SEMOLINA_PORRIDGE_W_APPLES,
    VISCOUS_RICE_PORRIDGE_W_APPLES,
    SEMOLINA_DUMPLINGS_W_CHEESE,
    LIQUID_MILK_HERCULES_PORRIDGE,
    LIQUID_MILK_SEMOLINA_PORRIDGE,
    LIQUID_MILK_OATMEAL_PORRIDGE,
    LIQUID_MILK_MILLET_PORRIDGE,
    LIQUID_MILK_RICE_PORRIDGE,
    LIQUID_MILLET_PORRIDGE_W_APPLES,
    LIQUID_RICE_PORRIDGE_W_RAISINS,
    LIQUID_RICE_PORRIDGE_W_CARROTS,
    LIQUID_RICE_PORRIDGE_W_APPLES,
    LIQUID_MILLET_PORRIDGE,
    LIQUID_HERCULES_PORRIDGE,
    LIQUID_SEMOLINA_PORRIDGE,
    LIQUID_OATMEAL_PORRIDGE,
    LIQUID_RICE_PORRIDGE,
    SEMOLINA_CASSEROLE,
    SEMOLINA_CASSEROLE_W_CARROTS,
    MILLET_CASSEROLE,
    RICE_CASSEROLE,
    RICE_CASSEROLE_W_CURD,
    RICE_CASSEROLE_W_APPLES,
    SEMOLINA_CASSEROLE_W_APPLES,
    PILAF_W_RAISINS,
    PILAF_W_DRIED_APRICOTS_N_RAISINS,
    MANNIK
]