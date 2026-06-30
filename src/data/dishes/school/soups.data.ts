import type { IDish } from "@/model/dish.model"

const BORSCH: IDish = {
    id: '2.1',
    generalOutput: 250,
    variants: [
        {
            id: '2.1.1',
            name: 'Борщ (масло сливочное)',
            components: {
                butter: 5,
                sugar: 2.5,
                tomatoPuree: 7.5,
                vegetables: 92.5,
            },
            macronutrients: {
                proteins: 0.8,
                fats: 2.4,
                carbohydrates: 3.7
            },
            caloricity: 40
        },
        {
            id: '2.1.2',
            name: 'Борщ (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                oil: 2.5,
                sugar: 2.5,
                tomatoPuree: 7.5,
                vegetables: 92.5,
            },
            macronutrients: {
                proteins: 0.8,
                fats: 2.4,
                carbohydrates: 3.7
            },
            caloricity: 40
        }
    ]
}

const BORSCH_W_CABBAGE_N_POTATO: IDish = {
    id: '2.2',
    generalOutput: 250,
    variants: [
        {
            id: '2.2.1',
            name: 'Борщ с капустой и картофелем (масло сливочное)',
            components: {
                butter: 5,
                sugar: 2.5,
                potato: 20,
                tomatoPuree: 7.5,
                vegetables: 82.5,
            },
            macronutrients: {
                proteins: 0.8,
                fats: 2.4,
                carbohydrates: 3.7
            },
            caloricity: 40
        },
        {
            id: '2.2.2',
            name: 'Борщ с капустой и картофелем (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                oil: 2.5,
                potato: 20,
                sugar: 2.5,
                tomatoPuree: 7.5,
                vegetables: 82.5,
            },
            macronutrients: {
                proteins: 0.8,
                fats: 2.3,
                carbohydrates: 4.7
            },
            caloricity: 43
        }
    ]
}

const BORSCH_W_POTATO: IDish = {
    id: '2.3',
    generalOutput: 250,
    variants: [
        {
            id: '2.3.1',
            name: 'Борщ с картофелем (масло сливочное)',
            components: {
                butter: 5,
                sugar: 1.5,
                potato: 50,
                tomatoPuree: 7.5,
                vegetables: 62.5,
            },
            macronutrients: {
                proteins: 0.8,
                fats: 2.4,
                carbohydrates: 3.7
            },
            caloricity: 40
        },
        {
            id: '2.3.2',
            name: 'Борщ с картофелем (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                oil: 2.5,
                potato: 50,
                sugar: 1.5,
                tomatoPuree: 7.5,
                vegetables: 62.5,
            },
            macronutrients: {
                proteins: 0.9,
                fats: 2.5,
                carbohydrates: 5.7
            },
            caloricity: 49
        }
    ]
}

const BORSCH_W_BEANS: IDish = {
    id: '2.4',
    generalOutput: 250,
    variants: [
        {
            id: '2.4.1',
            name: 'Борщ с фасолью (масло сливочное)',
            components: {
                butter: 5,
                legumes: 10,
                sugar: 1.5,
                tomatoPuree: 7.5,
                vegetables: 82.5,
            },
            macronutrients: {
                proteins: 1.4,
                fats: 2.5,
                carbohydrates: 4.8
            },
            caloricity: 47
        },
        {
            id: '2.4.2',
            name: 'Борщ  с фасолью (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                legumes: 10,
                oil: 2.5,
                sugar: 1.5,
                tomatoPuree: 7.5,
                vegetables: 82.5,
            },
            macronutrients: {
                proteins: 1.4,
                fats: 2.5,
                carbohydrates: 4.8
            },
            caloricity: 47
        }
    ]
}

const BORSCH_W_BEANS_N_POTATO: IDish = {
    id: '2.5',
    generalOutput: 250,
    variants: [
        {
            id: '2.5.1',
            name: 'Борщ с фасолью и картофелем (масло сливочное)',
            components: {
                butter: 5,
                legumes: 10,
                sugar: 1.5,
                potato: 25,
                tomatoPuree: 7.5,
                vegetables: 63.25
            },
            macronutrients: {
                proteins: 1.9,
                fats: 2.5,
                carbohydrates: 5.9
            },
            caloricity: 52
        },
        {
            id: '2.5.2',
            name: 'Борщ  с фасолью и картофелем (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                legumes: 10,
                oil: 2.5,
                sugar: 1.5,
                potato: 25,
                tomatoPuree: 7.5,
                vegetables: 63.25
            },
            macronutrients: {
                proteins: 1.9,
                fats: 2.5,
                carbohydrates: 5.9
            },
            caloricity: 52
        }
    ]
}

const BORSCH_PO_SLUCKI: IDish = {
    id: '2.6',
    generalOutput: 250,
    variants: [
        {
            id: '2.6.1',
            name: 'Борщ по-слуцки (масло сливочное)',
            components: {
                butter: 5,
                sugar: 1.75,
                potato: 25,
                tomatoPuree: 8.25,
                vegetables: 99.75
            },
            macronutrients: {
                proteins: 0.9,
                fats: 0.5,
                carbohydrates: 4.9
            },
            caloricity: 26
        },
        {
            id: '2.6.2',
            name: 'Борщ по-слуцки (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                oil: 2.5,
                legumes: 10,
                sugar: 1.75,
                potato: 25,
                tomatoPuree: 8.25,
                vegetables: 99.75
            },
            macronutrients: {
                proteins: 0.9,
                fats: 0.5,
                carbohydrates: 4.9
            },
            caloricity: 26
        }
    ]
}

const BORSCH_SO_SHCHAVELEM: IDish = {
    id: '2.7',
    generalOutput: 250,
    variants: [
        {
            id: '2.7.1',
            name: 'Борщ со щавелем (масло сливочное)',
            components: {
                butter: 5,
                eggs: 10,
                flourWheat: 1.5,
                sugar: 1.5,
                potato: 50,
                vegetables: 72
            },
            macronutrients: {
                proteins: 1.4,
                fats: 2.8,
                carbohydrates: 5.6
            },
            caloricity: 53
        },
        {
            id: '2.7.2',
            name: 'Борщ со щавелем (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                eggs: 10,
                flourWheat: 1.5,
                oil: 2.5,
                sugar: 1.5,
                potato: 50,
                vegetables: 72
            },
            macronutrients: {
                proteins: 1.4,
                fats: 2.8,
                carbohydrates: 5.6
            },
            caloricity: 53
        }
    ]
}

const SHCHI_IZ_SVEZHEY_KAPUSTI: IDish = {
    id: '2.8',
    generalOutput: 250,
    variants: [
        {
            id: '2.8.1',
            name: 'Щи из свежей капусты (масло сливочное)',
            components: {
                butter: 5,
                flourWheat: 2.5,
                tomatoPuree: 5,
                vegetables: 110
            },
            macronutrients: {
                proteins: 1.4,
                fats: 2.8,
                carbohydrates: 5.6
            },
            caloricity: 53
        },
        {
            id: '2.8.2',
            name: 'Щи из свежей капусты (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                flourWheat: 2.5,
                oil: 2.5,
                tomatoPuree: 5,
                vegetables: 110
            },
            macronutrients: {
                proteins: 0.9,
                fats: 2.3,
                carbohydrates: 2.8
            },
            caloricity: 36
        }
    ]
}

const SHCHI_IZ_SVEZHEY_KAPUSTI_W_KARTOFELEM: IDish = {
    id: '2.9',
    generalOutput: 250,
    variants: [
        {
            id: '2.9.1',
            name: 'Щи из свежей капусты с картофелем (масло сливочное)',
            components: {
                butter: 5,
                potato: 30,
                tomatoPuree: 5,
                vegetables: 90
            },
            macronutrients: {
                proteins: 0.9,
                fats: 2.4,
                carbohydrates: 3.6
            },
            caloricity: 40
        },
        {
            id: '2.9.2',
            name: 'Щи из свежей капусты с картофелем (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                oil: 2.5,
                potato: 30,
                tomatoPuree: 5,
                vegetables: 90
            },
            macronutrients: {
                proteins: 0.9,
                fats: 2.4,
                carbohydrates: 3.6
            },
            caloricity: 40
        }
    ]
}

const SHCHI_IZ_SVEZHEY_KAPUSTI_W_YABLOKAMI: IDish = {
    id: '2.10',
    generalOutput: 250,
    variants: [
        {
            id: '2.10.1',
            name: 'Щи из свежей капусты с яблоками (масло сливочное)',
            components: {
                butter: 5,
                fruits: 17.5,
                potato: 30,
                vegetables: 100
            },
            macronutrients: {
                proteins: 1.4,
                fats: 2.5,
                carbohydrates: 3.9
            },
            caloricity: 44
        },
        {
            id: '2.10.2',
            name: 'Щи из свежей капусты с яблоками (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                oil: 2.5,
                fruits: 17.5,
                potato: 30,
                vegetables: 100
            },
            macronutrients: {
                proteins: 1.4,
                fats: 2.5,
                carbohydrates: 3.9
            },
            caloricity: 44
        }
    ]
}

const SHCHI_IZ_KVASHENOY_KAPUSTI: IDish = {
    id: '2.11',
    generalOutput: 250,
    variants: [
        {
            id: '2.11.1',
            name: 'Щи из квашеной капусты (масло сливочное)',
            components: {
                butter: 5,
                flourWheat: 10,
                tomatoPuree: 10,
                vegetables: 85
            },
            macronutrients: {
                proteins: 0.8,
                fats: 2.3,
                carbohydrates: 2.3
            },
            caloricity: 34
        },
        {
            id: '2.11.2',
            name: 'Щи из квашеной капусты (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                flourWheat: 10,
                oil: 2.5,
                tomatoPuree: 10,
                vegetables: 85
            },
            macronutrients: {
                proteins: 0.8,
                fats: 2.3,
                carbohydrates: 2.3
            },
            caloricity: 34
        }
    ]
}

const SHCHI_IZ_KVASHENOY_KAPUSTI_W_KARTOFELEM: IDish = {
    id: '2.12',
    generalOutput: 250,
    variants: [
        {
            id: '2.12.1',
            name: 'Щи из квашеной капусты с картофелем (масло сливочное)',
            components: {
                butter: 5,
                potato: 25,
                tomatoPuree: 2.5,
                vegetables: 70
            },
            macronutrients: {
                proteins: 0.8,
                fats: 2.3,
                carbohydrates: 2.6
            },
            caloricity: 34
        },
        {
            id: '2.12.2',
            name: 'Щи из квашеной капусты с картофелем (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                oil: 2.5,
                potato: 25,
                tomatoPuree: 2.5,
                vegetables: 70
            },
            macronutrients: {
                proteins: 0.8,
                fats: 2.3,
                carbohydrates: 2.6
            },
            caloricity: 34
        }
    ]
}

const SHCHI_PO_URALSKI: IDish = {
    id: '2.13',
    generalOutput: 250,
    variants: [
        {
            id: '2.13.1',
            name: 'Щи по-уральски (масло сливочное)',
            components: {
                butter: 5,
                cereals: 5,
                tomatoPuree: 12.5,
                vegetables: 70
            },
            macronutrients: {
                proteins: 0.9,
                fats: 2.3,
                carbohydrates: 2.7
            },
            caloricity: 35
        },
        {
            id: '2.13.2',
            name: 'Щи по-уральски (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                cereals: 5,
                oil: 2.5,
                tomatoPuree: 12.5,
                vegetables: 70
            },
            macronutrients: {
                proteins: 0.9,
                fats: 2.3,
                carbohydrates: 2.7
            },
            caloricity: 35
        }
    ]
}

const RASSOLNIK: IDish = {
    id: '2.14',
    generalOutput: 250,
    variants: [
        {
            id: '2.14.1',
            name: 'Рассольник (масло растительное)',
            components: {
                oil: 5,
                potato: 75,
                vegetables: 25
            },
            macronutrients: {
                proteins: 0.5,
                fats: 1.7,
                carbohydrates: 4.4
            },
            caloricity: 35
        },
        {
            id: '2.14.2',
            name: 'Рассольник (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                oil: 2.5,
                potato: 75,
                vegetables: 25
            },
            macronutrients: {
                proteins: 0.5,
                fats: 1.7,
                carbohydrates: 4.4
            },
            caloricity: 35
        }
    ]
}

const RASSOLNIK_DOMASHNIY: IDish = {
    id: '2.15',
    generalOutput: 250,
    variants: [
        {
            id: '2.15.1',
            name: 'Рассольник домашний (масло растительное)',
            components: {
                oil: 5,
                potato: 75,
                vegetables: 55
            },
            macronutrients: {
                proteins: 0.7,
                fats: 1.6,
                carbohydrates: 5.2
            },
            caloricity: 38
        },
        {
            id: '2.15.2',
            name: 'Рассольник домашний (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                oil: 2.5,
                potato: 75,
                vegetables: 55
            },
            macronutrients: {
                proteins: 0.7,
                fats: 1.6,
                carbohydrates: 5.2
            },
            caloricity: 38
        }
    ]
}

const RASSOLNIK_LENINGRADSKIY: IDish = {
    id: '2.16',
    generalOutput: 250,
    variants: [
        {
            id: '2.16.1',
            name: 'Рассольник ленинградский (масло растительное)',
            components: {
                cereals: 5,
                oil: 5,
                potato: 75,
                vegetables: 30
            },
            macronutrients: {
                proteins: 0.7,
                fats: 1.6,
                carbohydrates: 5.9
            },
            caloricity: 40
        },
        {
            id: '2.16.2',
            name: 'Рассольник ленинградский (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                cereals: 5,
                oil: 2.5,
                potato: 75,
                vegetables: 30
            },
            macronutrients: {
                proteins: 0.7,
                fats: 1.6,
                carbohydrates: 5.9
            },
            caloricity: 40
        }
    ]
}

const SOUP_KARTOFELNIY: IDish = {
    id: '2.17',
    generalOutput: 250,
    variants: [
        {
            id: '2.17.1',
            name: 'Суп картофельный (масло сливочное)',
            components: {
                butter: 5,
                potato: 112.5,
                vegetables: 20
            },
            macronutrients: {
                proteins: 1,
                fats: 1.7,
                carbohydrates: 7.3
            },
            caloricity: 48
        },
        {
            id: '2.17.2',
            name: 'Суп картофельный (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                oil: 2.5,
                potato: 112.5,
                vegetables: 20
            },
            macronutrients: {
                proteins: 1,
                fats: 1.7,
                carbohydrates: 7.3
            },
            caloricity: 48
        }
    ]
}

const SOUP_LUBITELSKIY: IDish = {
    id: '2.18',
    generalOutput: 250,
    variants: [
        {
            id: '2.18.1',
            name: 'Суп любительский',
            components: {
                butter: 2.5,
                cereals: 25,
                potato: 62.5,
                vegetables: 25
            },
            macronutrients: {
                proteins: 1.8,
                fats: 1,
                carbohydrates: 10.1
            },
            caloricity: 57
        }
    ]
}

const SOUP_KRESTYANSKIY_W_CEREAL: IDish = {
    id: '2.19',
    generalOutput: 250,
    variants: [
        {
            id: '2.19.1',
            name: 'Суп крестьянский с крупой перловой, рисовой, овсяной, ячневой, пшеничной (масло сливочное)',
            components: {
                butter: 2.5,
                cereals: 10,
                potato: 25,
                vegetables: 50
            },
            macronutrients: {
                proteins: 0.9,
                fats: 1.2,
                carbohydrates: 4.4
            },
            caloricity: 32
        },
        {
            id: '2.19.2',
            name: 'Суп крестьянский с крупой перловой, рисовой, овсяной, ячневой, пшеничной (масло растительное)',
            components: {
                cereals: 10,
                oil: 2.5,
                potato: 25,
                vegetables: 50
            },
            macronutrients: {
                proteins: 0.9,
                fats: 1.2,
                carbohydrates: 4.4
            },
            caloricity: 32
        },
        {
            id: '2.19.3',
            name: 'Суп крестьянский с крупой: пшено, хлопья овсяные "Геркулес" (масло сливочное)',
            components: {
                butter: 2.5,
                cereals: 5,
                potato: 25,
                vegetables: 50
            },
            macronutrients: {
                proteins: 0.9,
                fats: 1.2,
                carbohydrates: 4.4
            },
            caloricity: 32
        },
        {
            id: '2.19.4',
            name: 'Суп крестьянский с крупой: пшено, хлопья овсяные "Геркулес" (масло растильное)',
            components: {
                cereals: 5,
                oil: 2.5,
                potato: 25,
                vegetables: 50
            },
            macronutrients: {
                proteins: 0.9,
                fats: 1.2,
                carbohydrates: 4.4
            },
            caloricity: 32
        },
    ]
}

const SOUP_IZ_VEGETABLES: IDish = {
    id: '2.20',
    generalOutput: 250,
    variants: [
        {
            id: '2.20.1',
            name: 'Суп из овощей (масло сливочное)',
            components: {
                butter: 5,
                potato: 50,
                vegetables: 72.5
            },
            macronutrients: {
                proteins: 0.7,
                fats: 1.2,
                carbohydrates: 4.3
            },
            caloricity: 30
        },
        {
            id: '2.20.2',
            name: 'Суп из овощей (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                oil: 2.5,
                potato: 50,
                vegetables: 72.5
            },
            macronutrients: {
                proteins: 0.7,
                fats: 1.2,
                carbohydrates: 4.3
            },
            caloricity: 30
        }
    ]
}

const SOUP_KARTOFELNIY_W_SORREL: IDish = {
    id: '2.21',
    generalOutput: 250,
    variants: [
        {
            id: '2.21.1',
            name: 'Суп картофельный со щавелем (масло сливочное)',
            components: {
                butter: 5,
                potato: 62.5,
                vegetables: 45
            },
            macronutrients: {
                proteins: 0.8,
                fats: 2.1,
                carbohydrates: 4.4
            },
            caloricity: 40
        },
        {
            id: '2.21.2',
            name: 'Суп картофельный со щавелем (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                oil: 2.5,
                potato: 62.5,
                vegetables: 45
            },
            macronutrients: {
                proteins: 0.8,
                fats: 2.1,
                carbohydrates: 4.4
            },
            caloricity: 40
        }
    ]
}

const SOUP_KARTOFELNIY_W_CEREAL: IDish = {
    id: '2.22',
    generalOutput: 250,
    variants: [
        {
            id: '2.22.1',
            name: 'Суп картофельный с крупой перловой, овсяной, пшеничной (масло сливочное)',
            components: {
                butter: 5,
                cereals: 10,
                potato: 80,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 0.9,
                fats: 1.7,
                carbohydrates: 6.6
            },
            caloricity: 45
        },
        {
            id: '2.22.2',
            name: 'Суп картофельный с крупой перловой, овсяной, пшеничной (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                cereals: 10,
                oil: 2.5,
                potato: 80,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 0.9,
                fats: 1.7,
                carbohydrates: 6.6
            },
            caloricity: 45
        },
        {
            id: '2.22.3',
            name: 'Суп картофельный с крупой рисовой, пшенной, хлопьями "Геркулес" (масло сливочное)',
            components: {
                butter: 5,
                cereals: 5,
                potato: 80,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 0.9,
                fats: 1.7,
                carbohydrates: 6.6
            },
            caloricity: 45
        },
        {
            id: '2.22.4',
            name: 'Суп картофельный с крупой рисовой, пшенной, хлопьями "Геркулес" (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                cereals: 5,
                oil: 2.5,
                potato: 80,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 0.9,
                fats: 1.7,
                carbohydrates: 6.6
            },
            caloricity: 45
        }, {
            id: '2.22.5',
            name: 'Суп картофельный с крупой манной (масло сливочное)',
            components: {
                butter: 5,
                cereals: 7.5,
                potato: 80,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 0.9,
                fats: 1.7,
                carbohydrates: 6.6
            },
            caloricity: 45
        },
        {
            id: '2.22.6',
            name: 'Суп картофельный с крупой манной (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                cereals: 7.5,
                oil: 2.5,
                potato: 80,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 0.9,
                fats: 1.7,
                carbohydrates: 6.6
            },
            caloricity: 45
        },
    ]
}

const SOUP_KARTOFELNIY_W_LEGUMES: IDish = {
    id: '2.23',
    generalOutput: 250,
    variants: [
        {
            id: '2.23.1',
            name: 'Суп картофельный с бобовыми: фасоль, горох лущенный (масло сливочное)',
            components: {
                butter: 5,
                legumes: 20,
                potato: 62.5,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 2.3,
                fats: 1.8,
                carbohydrates: 8.1
            },
            caloricity: 58
        },
        {
            id: '2.23.2',
            name: 'Суп картофельный с бобовыми: фасоль, горох лущенный (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                legumes: 20,
                oil: 2.5,
                potato: 62.5,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 2.3,
                fats: 1.8,
                carbohydrates: 8.1
            },
            caloricity: 58
        },
        {
            id: '2.23.3',
            name: 'Суп картофельный с бобовыми: горошек зеленый консервированный (масло сливочное)',
            components: {
                butter: 5,
                legumes: 25,
                potato: 62.5,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 2.3,
                fats: 1.8,
                carbohydrates: 8.1
            },
            caloricity: 58
        },
        {
            id: '2.23.4',
            name: 'Суп картофельный с бобовыми: горошек зеленый консервированный (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                legumes: 25,
                oil: 2.5,
                potato: 62.5,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 2.3,
                fats: 1.8,
                carbohydrates: 8.1
            },
            caloricity: 58
        }
    ]
}

const SOUP_KARTOFELNIY_W_PASTA_PRODUCTS: IDish = {
    id: '2.24',
    generalOutput: 250,
    variants: [
        {
            id: '2.24.1',
            name: 'Суп картофельный с макаронными изделиями (масло сливочное)',
            components: {
                butter: 5,
                pastaProducts: 10,
                potato: 75,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 1.1,
                fats: 1.7,
                carbohydrates: 7.7
            },
            caloricity: 50
        },
        {
            id: '2.24.2',
            name: 'Суп картофельный с макаронными изделиями (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                pastaProducts: 10,
                oil: 2.5,
                potato: 75,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 1.1,
                fats: 1.7,
                carbohydrates: 7.7
            },
            caloricity: 50
        }
    ]
}

const SOUP_KARTOFELNIY_W_MEAT_OR_FISH_MEATBALLS: IDish = {
    id: '2.25',
    generalOutput: 250,
    variants: [
        {
            id: '2.25.1',
            name: 'Суп картофельный с мясными или рыбными фрикадельками: фрикадельки добавлять отдельно (масло сливочное)',
            components: {
                butter: 2.5,
                potato: 75,
                tomatoPuree: 2.5,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 0.7,
                fats: 0.8,
                carbohydrates: 5.7
            },
            caloricity: 32
        },
        {
            id: '2.25.2',
            name: 'Суп картофельный с мясными или рыбными фрикадельками: фрикадельки добавлять отдельно (масло растительное)',
            components: {
                oil: 2.5,
                potato: 75,
                tomatoPuree: 2.5,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 0.7,
                fats: 0.8,
                carbohydrates: 5.7
            },
            caloricity: 32
        }
    ]
}

const SOUP_KARTOFELNIY_W_FISH: IDish = {
    id: '2.26',
    generalOutput: 250,
    variants: [
        {
            id: '2.26.1',
            name: 'Суп картофельный с рыбой: филе хека (масло сливочное)',
            components: {
                butter: 5,
                fish: 30.5,
                potato: 112.5,
                vegetables: 20
            },
            macronutrients: {
                proteins: 2.8,
                fats: 1.5,
                carbohydrates: 7.3
            },
            caloricity: 54
        },
        {
            id: '2.26.2',
            name: 'Суп картофельный с рыбой: филе хека (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                oil: 2.5,
                fish: 30.5,
                potato: 112.5,
                vegetables: 20
            },
            macronutrients: {
                proteins: 2.8,
                fats: 1.5,
                carbohydrates: 7.3
            },
            caloricity: 54
        },
        {
            id: '2.26.3',
            name: 'Суп картофельный с рыбой: треска (масло сливочное)',
            components: {
                butter: 5,
                fish: 33,
                potato: 112.5,
                vegetables: 20
            },
            macronutrients: {
                proteins: 2.8,
                fats: 1.5,
                carbohydrates: 7.3
            },
            caloricity: 54
        },
        {
            id: '2.26.4',
            name: 'Суп картофельный с рыбой: треска (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                oil: 2.5,
                fish: 33,
                potato: 112.5,
                vegetables: 20
            },
            macronutrients: {
                proteins: 2.8,
                fats: 1.5,
                carbohydrates: 7.3
            },
            caloricity: 54
        },
    ]
}

const SOUP_KARTOFELNIY_W_DUMPLINGS: IDish = {
    id: '2.27',
    generalOutput: 250,
    variants: [
        {
            id: '2.27.1',
            name: 'Суп картофельный с клецками (масло сливочное, клецки - вода)',
            components: {
                butter: 4.75,
                eggs: 5.75,
                flourWheat: 25,
                potato: 75,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 1.8,
                fats: 1.8,
                carbohydrates: 10.2
            },
            caloricity: 64
        },
        {
            id: '2.27.2',
            name: 'Суп картофельный с клецками (масло растительное, клецки - вода)',
            components: {
                butter: 2.25,
                flourWheat: 25,
                oil: 2.5,
                potato: 75,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 1.8,
                fats: 1.8,
                carbohydrates: 10.2
            },
            caloricity: 64
        },
        {
            id: '2.27.3',
            name: 'Суп картофельный с клецками: клецки добавлять отдельно (масло сливочное, клецки - молоко)',
            components: {
                butter: 4.75,
                eggs: 5.75,
                flourWheat: 25,
                milkAndFermentedMilkProducts: 31.5,
                potato: 75,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 1.8,
                fats: 1.8,
                carbohydrates: 10.2
            },
            caloricity: 64
        },
        {
            id: '2.27.4',
            name: 'Суп картофельный с клецками: клецки добавлять отдельно (масло растительное, клецки - молоко)',
            components: {
                butter: 2.25,
                flourWheat: 25,
                milkAndFermentedMilkProducts: 31.5,
                oil: 2.5,
                potato: 75,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 1.8,
                fats: 1.8,
                carbohydrates: 10.2
            },
            caloricity: 64
        },

    ]
}

const NOODLE_SOUP_W_CHICKEN_BROTH: IDish = {
    id: '2.28',
    generalOutput: 250,
    variants: [
        {
            id: '2.28.1',
            name: 'Суп-лапша на курином бульоне (масло сливочное)',
            components: {
                butter: 5,
                pastaProducts: 20,
                tomatoPuree: 1.5,
                vegetables: 20
            },
            macronutrients: {
                proteins: 0.9,
                fats: 1.7,
                carbohydrates: 6.3
            },
            caloricity: 45
        },
        {
            id: '2.28.2',
            name: 'Суп-лапша на курином бульоне (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                oil: 2.5,
                pastaProducts: 20,
                tomatoPuree: 1.5,
                vegetables: 20
            },
            macronutrients: {
                proteins: 0.9,
                fats: 1.7,
                carbohydrates: 6.3
            },
            caloricity: 45
        }
    ]
}

const SOUP_W_CEREAL_N_TOMATO: IDish = {
    id: '2.29',
    generalOutput: 250,
    variants: [
        {
            id: '2.29.1',
            name: 'Суп с крупой (рисовой, перловой, манной) и томатом (масло сливочное)',
            components: {
                butter: 5,
                cereals: 20,
                vegetables: 31.25
            },
            macronutrients: {
                proteins: 0.7,
                fats: 1.6,
                carbohydrates: 6
            },
            caloricity: 41
        },
        {
            id: '2.29.2',
            name: 'Суп с крупой (рисовой, перловой, манной) и томатом (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                cereals: 20,
                oil: 2.5,
                vegetables: 31.25
            },
            macronutrients: {
                proteins: 0.7,
                fats: 1.6,
                carbohydrates: 6
            },
            caloricity: 41
        },
        {
            id: '2.29.3',
            name: 'Суп с крупой (рисовой, перловой, манной) и томат-пюре (масло сливочное)',
            components: {
                butter: 5,
                cereals: 20,
                tomatoPuree: 7.5,
                vegetables: 17.5
            },
            macronutrients: {
                proteins: 0.7,
                fats: 1.6,
                carbohydrates: 6
            },
            caloricity: 41
        },
        {
            id: '2.29.4',
            name: 'Суп с крупой (рисовой, перловой, манной) и томат-пюре (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                cereals: 20,
                oil: 2.5,
                tomatoPuree: 7.5,
                vegetables: 17.5
            },
            macronutrients: {
                proteins: 0.7,
                fats: 1.6,
                carbohydrates: 6
            },
            caloricity: 41
        },
        {
            id: '2.29.5',
            name: 'Суп с крупой (овсяной, ячневой, пшенной) и томатом (масло сливочное)',
            components: {
                butter: 5,
                cereals: 25,
                vegetables: 31.25
            },
            macronutrients: {
                proteins: 0.7,
                fats: 1.6,
                carbohydrates: 6
            },
            caloricity: 41
        },
        {
            id: '2.29.6',
            name: 'Суп с крупой (овсяной, ячневой, пшенной) и томатом (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                cereals: 25,
                oil: 2.5,
                vegetables: 31.25
            },
            macronutrients: {
                proteins: 0.7,
                fats: 1.6,
                carbohydrates: 6
            },
            caloricity: 41
        },
        {
            id: '2.29.7',
            name: 'Суп с крупой (овсяной, ячневой, пшенной) и томат-пюре (масло сливочное)',
            components: {
                butter: 5,
                cereals: 25,
                tomatoPuree: 7.5,
                vegetables: 17.5
            },
            macronutrients: {
                proteins: 0.7,
                fats: 1.6,
                carbohydrates: 6
            },
            caloricity: 41
        },
        {
            id: '2.29.8',
            name: 'Суп с крупой (овсяной, ячневой, пшенной) и томат-пюре (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                cereals: 25,
                oil: 2.5,
                tomatoPuree: 7.5,
                vegetables: 17.5
            },
            macronutrients: {
                proteins: 0.7,
                fats: 1.6,
                carbohydrates: 6
            },
            caloricity: 41
        }
    ]
}

const SOUP_W_CEREAL_N_MEAT_MEATBALLS: IDish = {
    id: '2.30',
    generalOutput: 250,
    variants: [
        {
            id: '2.30.1',
            name: 'Суп с крупой (манной) и мясными фрикадельками: фрикадельки добавлять отдельно',
            components: {
                butter: 2.5,
                cereals: 15,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 0.8,
                fats: 0.7,
                carbohydrates: 5.5
            },
            caloricity: 32
        },
        {
            id: '2.30.2',
            name: 'Суп с крупой (рисовой, перловой, пшеничной, овсяной) и мясными фрикадельками: фрикадельки добавлять отдельно)',
            components: {
                butter: 2.5,
                cereals: 20,
                vegetables: 22.5
            },
            macronutrients: {
                proteins: 0.8,
                fats: 0.7,
                carbohydrates: 5.5
            },
            caloricity: 32
        }
    ]
}

const SOUP_W_LEGUMES: IDish = { //Взял БЖУ супа с фасолью
    id: '2.31',
    generalOutput: 250,
    variants: [
        {
            id: '2.31.1',
            name: 'Суп с бобовыми (масло сливочное)',
            components: {
                butter: 5,
                legumes: 35,
                vegetables: 27.5
            },
            macronutrients: {
                proteins: 2.9,
                fats: 1.8,
                carbohydrates: 6.8
            },
            caloricity: 55
        },
        {
            id: '2.31.2',
            name: 'Суп с бобовыми (масло растительное и масло сливочное)',
            components: {
                butter: 2.5,
                legumes: 35,
                oil: 2.5,
                vegetables: 27.5
            },
            macronutrients: {
                proteins: 2.9,
                fats: 1.8,
                carbohydrates: 6.8
            },
            caloricity: 55
        }
    ]
}

const MILK_SOUP_W_PASTA_PRODUCTS: IDish = {
    id: '2.32',
    generalOutput: 250,
    variants: [
        {
            id: '2.32.1',
            name: 'Суп молочный с макаронными изделиями',
            components: {
                butter: 3,
                milkAndFermentedMilkProducts: 200,
                pastaProducts: 20,
                sugar: 2.5,
            },
            macronutrients: {
                proteins: 2.9,
                fats: 2.5,
                carbohydrates: 9.6
            },
            caloricity: 73
        }
    ]
}

const MILK_SOUP_W_CEREAL: IDish = {
    id: '2.33',
    generalOutput: 250,
    variants: [
        {
            id: '2.33.1',
            name: 'Суп молочный с крупой (рисовой)',
            components: {
                butter: 3,
                cereals: 17.5,
                milkAndFermentedMilkProducts: 200,
                sugar: 2.5
            },
            macronutrients: {
                proteins: 2.6,
                fats: 2.5,
                carbohydrates: 8.9
            },
            caloricity: 69
        },
        {
            id: '2.33.2',
            name: 'Суп молочный с крупой (манной, кукурузной, хлопьями овсяными "Геркулес")',
            components: {
                butter: 3,
                cereals: 15,
                milkAndFermentedMilkProducts: 200,
                sugar: 2.5
            },
            macronutrients: {
                proteins: 2.7,
                fats: 2.7,
                carbohydrates: 7.1
            },
            caloricity: 64
        },
        {
            id: '2.33.3',
            name: 'Суп молочный с крупой (ячневой, гречневой, перловой, пшенной)',
            components: {
                butter: 3,
                cereals: 20,
                milkAndFermentedMilkProducts: 200,
                sugar: 2.5
            },
            macronutrients: {
                proteins: 3.1,
                fats: 2.5,
                carbohydrates: 8.9
            },
            caloricity: 71
        }
    ]
}

const MILK_SOUP_W_VEGETABLES: IDish = {
    id: '2.34',
    generalOutput: 250,
    variants: [
        {
            id: '2.34.1',
            name: 'Суп молочный с овощами',
            components: {
                butter: 2.5,
                milkAndFermentedMilkProducts: 125,
                potato: 50,
                vegetables: 55
            },
            macronutrients: {
                proteins: 2.2,
                fats: 1.8,
                carbohydrates: 6.4
            },
            caloricity: 51
        }
    ]
}

const ZATIRKA_W_MILK: IDish = {
    id: '2.35',
    generalOutput: 250,
    variants: [
        {
            id: '2.35.1',
            name: 'Затирка с молоком',
            components: {
                butter: 2.5,
                eggs: 5,
                flourWheat: 25,
                milkAndFermentedMilkProducts: 175,
                sugar: 2.5
            },
            macronutrients: {
                proteins: 3.1,
                fats: 4.5,
                carbohydrates: 10.3
            },
            caloricity: 94
        }
    ]
}

const MILK_SOUP_W_CARROT_N_CEREAL: IDish = {
    id: '2.36',
    generalOutput: 250,
    variants: [
        {
            id: '2.36.1',
            name: 'Суп молочный с морковью и крупой',
            components: {
                butter: 2.5,
                cereals: 5,
                milkAndFermentedMilkProducts: 150,
                vegetables: 79,
                sugar: 2.5

            },
            macronutrients: {
                proteins: 2.2,
                fats: 2.1,
                carbohydrates: 6.8
            },
            caloricity: 55
        }
    ]
}

const MILK_SOUP_PO_MOGILEVSKI: IDish = {
    id: '2.37',
    generalOutput: 250,
    variants: [
        {
            id: '2.37.1',
            name: 'Суп молочный по-могилевски',
            components: {
                butter: 3.5,
                eggs: 5,
                milkAndFermentedMilkProducts: 175,
                potatoStarch: 30,
                sugar: 2.5
            },
            macronutrients: {
                proteins: 2.1,
                fats: 2,
                carbohydrates: 11.7
            },
            caloricity: 73
        }
    ]
}

const MILK_SOUP_PO_SELYANSKI: IDish = {
    id: '2.38',
    generalOutput: 250,
    variants: [
        {
            id: '2.38.1',
            name: 'Суп молочный по-селянски',
            components: {
                butter: 2.5,
                flourWheat: 11.25,
                milkAndFermentedMilkProducts: 175,
                potato: 11.25,
                sugar: 2.5
            },
            macronutrients: {
                proteins: 2.4,
                fats: 2.2,
                carbohydrates: 7.4
            },
            caloricity: 59
        }
    ]
}

const MILK_SOUP_W_POTATO_N_CARROT: IDish = {
    id: '2.39',
    generalOutput: 250,
    variants: [
        {
            id: '2.39.1',
            name: 'Суп молочный с картофелем и морковью',
            components: {
                butter: 5,
                milkAndFermentedMilkProducts: 125,
                potato: 67.5,
                vegetables: 30,
                sugar: 2.5
            },
            macronutrients: {
                proteins: 2,
                fats: 2.5,
                carbohydrates: 7.9
            },
            caloricity: 62
        }
    ]
}

const MILK_SOUP_W_POTATO_DUMPLINGS: IDish = {
    id: '2.40',
    generalOutput: 250,
    variants: [
        {
            id: '2.40.1',
            name: 'Суп молочный с картофельными клецками',
            components: {
                butter: 5,
                eggs: 5,
                milkAndFermentedMilkProducts: 125,
                potato: 111.75
            },
            macronutrients: {
                proteins: 2.4,
                fats: 2.9,
                carbohydrates: 8.8
            },
            caloricity: 71
        }
    ]
}

const MILK_SOUP_PO_LIDSKI: IDish = {
    id: '2.41',
    generalOutput: 250,
    variants: [
        {
            id: '2.41.1',
            name: 'Суп молочный по-лидски',
            components: {
                butter: 5,
                milkAndFermentedMilkProducts: 175,
                potato: 50,
                sugar: 2.5
            },
            macronutrients: {
                proteins: 2.2,
                fats: 2.9,
                carbohydrates: 6.9
            },
            caloricity: 63
        }
    ]
}

const MASHED_POTATO_SOUP: IDish = {
    id: '2.42',
    generalOutput: 250,
    variants: [
        {
            id: '2.42.1',
            name: 'Суп-пюре из картофеля',
            components: {
                butter: 5,
                eggs: 2.5,
                flourWheat: 5,
                milkAndFermentedMilkProducts: 37.5,
                potato: 90,
                vegetables: 17.5
            },
            macronutrients: {
                proteins: 1.5,
                fats: 1.9,
                carbohydrates: 7.8
            },
            caloricity: 54
        }
    ]
}

const COLD_BORSCH: IDish = {
    id: '2.43',
    generalOutput: 250,
    variants: [
        {
            id: '2.43.1',
            name: 'Борщ холодный',
            components: {
                eggs: 10,
                vegetables: 57.5,
                sugar: 2.5
            },
            macronutrients: {
                proteins: 0.75,
                fats: 0.4,
                carbohydrates: 2.3
            },
            caloricity: 15
        }
    ]
}

const GREEN_SHCHI_W_EGG: IDish = { // не закончена ТК
    id: '2.44',
    generalOutput: 250,
    variants: [
        {
            id: '2.44.1',
            name: 'Щи зеленые с яйцом',
            components: {
                potato: 37.5,
                vegetables: 77.5,
            },
            macronutrients: {
                proteins: 0.75,
                fats: 0.4,
                carbohydrates: 2.3
            },
            caloricity: 15
        }
    ]
}

const MEAT_MEATBALLS: IDish = {
    id: '2.50.1',  //ЗАМЕНИТЬ НОМЕР (50) ID КОГДА НАПИШУ ВСЕ СУПЫ
    generalOutput: 30,
    variants: [
        {
            id: '2.50.1',
            name: 'Фрикадельки мясные',
            components: {
                eggs: 2.4,
                meat: 34.2,
                vegetables: 3
            },
            macronutrients: {
                proteins: 22.5,
                fats: 3,
                carbohydrates: 1
            },
            caloricity: 121
        }
    ]
}

const FISH_MEATBALLS: IDish = {
    id: '2.51.1',  //ЗАМЕНИТЬ НОМЕР (50) ID КОГДА НАПИШУ ВСЕ СУПЫ
    generalOutput: 30,
    variants: [
        {
            id: '2.51.1',
            name: 'Фрикадельки рыбные',
            components: {
                eggs: 1.5,
                fish: 28.2,
                vegetables: 6
            },
            macronutrients: {
                proteins: 14.7,
                fats: 0.9,
                carbohydrates: 1.9
            },
            caloricity: 74
        }
    ]
}

export const SOUPS_ARRAY: IDish[] = [
    BORSCH,
    BORSCH_W_CABBAGE_N_POTATO,
    BORSCH_W_POTATO,
    BORSCH_W_BEANS,
    BORSCH_W_BEANS_N_POTATO,
    BORSCH_PO_SLUCKI,
    BORSCH_SO_SHCHAVELEM,
    SHCHI_IZ_SVEZHEY_KAPUSTI,
    SHCHI_IZ_SVEZHEY_KAPUSTI_W_KARTOFELEM,
    SHCHI_IZ_SVEZHEY_KAPUSTI_W_YABLOKAMI,
    SHCHI_IZ_KVASHENOY_KAPUSTI,
    SHCHI_IZ_KVASHENOY_KAPUSTI_W_KARTOFELEM,
    SHCHI_PO_URALSKI,
    RASSOLNIK,
    RASSOLNIK_DOMASHNIY,
    RASSOLNIK_LENINGRADSKIY,
    SOUP_KARTOFELNIY,
    SOUP_LUBITELSKIY,
    SOUP_KRESTYANSKIY_W_CEREAL,
    SOUP_IZ_VEGETABLES,
    SOUP_KARTOFELNIY_W_SORREL,
    SOUP_KARTOFELNIY_W_CEREAL,
    SOUP_KARTOFELNIY_W_LEGUMES,
    SOUP_KARTOFELNIY_W_PASTA_PRODUCTS,
    SOUP_KARTOFELNIY_W_MEAT_OR_FISH_MEATBALLS,
    SOUP_KARTOFELNIY_W_FISH,
    SOUP_KARTOFELNIY_W_DUMPLINGS,
    NOODLE_SOUP_W_CHICKEN_BROTH,
    SOUP_W_CEREAL_N_TOMATO,
    SOUP_W_CEREAL_N_MEAT_MEATBALLS,
    SOUP_W_LEGUMES,
    MILK_SOUP_W_PASTA_PRODUCTS,
    MILK_SOUP_W_CEREAL,
    MILK_SOUP_W_VEGETABLES,
    ZATIRKA_W_MILK,
    MILK_SOUP_W_CARROT_N_CEREAL,
    MILK_SOUP_PO_MOGILEVSKI,
    MILK_SOUP_PO_SELYANSKI,
    MILK_SOUP_W_POTATO_N_CARROT,
    MILK_SOUP_W_POTATO_DUMPLINGS,
    MILK_SOUP_PO_LIDSKI,
    MASHED_POTATO_SOUP,
    COLD_BORSCH,
    GREEN_SHCHI_W_EGG,
    MEAT_MEATBALLS,
    FISH_MEATBALLS,
]