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