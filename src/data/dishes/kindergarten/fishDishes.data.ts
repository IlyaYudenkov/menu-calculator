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