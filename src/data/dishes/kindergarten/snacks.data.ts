import type { IDish } from "@/model/dish.model"

const BUTTER_SANDWICH: IDish = {
  id: 'kids-1.1',
  variants: [
    {
      id: 'kids-1.1.1',
      name: 'Бутерброд с маслом (30гр хлеба + 5гр масла)',
      defaultOutput: 35,
      components: {
        breadWheat: 30,
        butter: 5,
      },
      macronutrients: {
        proteins: 5.49,
        fats: 10.1,
        carbohydrates: 33.1
      },
      caloricity: 249.3
    },
    {
      id: 'kids-1.1.2',
      name: 'Бутерброд с маслом (20гр хлеба + 5гр масла)',
      defaultOutput: 25,
      components: {
        breadWheat: 20,
        butter: 5,
      },
      macronutrients: {
        proteins: 5.49,
        fats: 10.1,
        carbohydrates: 33.1
      },
      caloricity: 249.3
    },
    {
      id: 'kids-1.1.3',
      name: 'Бутерброд с маслом (20гр хлеба + 10гр масла)',
      defaultOutput: 30,
      components: {
        breadWheat: 20,
        butter: 10,
      },
      macronutrients: {
        proteins: 5.49,
        fats: 10.1,
        carbohydrates: 33.1
      },
      caloricity: 249.3
    },
    {
      id: 'kids-1.1.4',
      name: 'Бутерброд с маслом (30гр хлеба + 10гр масла)',
      defaultOutput: 40,
      components: {
        breadWheat: 30,
        butter: 10,
      },
      macronutrients: {
        proteins: 5.49,
        fats: 10.1,
        carbohydrates: 33.1
      },
      caloricity: 249.3
    },
    {
      id: 'kids-1.1.5',
      name: 'Бутерброд с маслом (40гр хлеба + 5гр масла)',
      defaultOutput: 45,
      components: {
        breadWheat: 40,
        butter: 5,
      },
      macronutrients: {
        proteins: 5.49,
        fats: 10.1,
        carbohydrates: 33.1
      },
      caloricity: 249.3
    },
    {
      id: 'kids-1.1.6',
      name: 'Бутерброд с маслом (25гр хлеба + 5гр масла)',
      defaultOutput: 30,
      components: {
        breadWheat: 25,
        butter: 5,
      },
      macronutrients: {
        proteins: 5.49,
        fats: 10.1,
        carbohydrates: 33.1
      },
      caloricity: 249.3
    },
    {
      id: 'kids-1.1.7',
      name: 'Бутерброд с маслом (25гр хлеба + 10гр масла)',
      defaultOutput: 35,
      components: {
        breadWheat: 25,
        butter: 10,
      },
      macronutrients: {
        proteins: 5.49,
        fats: 10.1,
        carbohydrates: 33.1
      },
      caloricity: 249.3
    }
  ]
}

const SANDWICH_W_BUTTER_N_GARLIC: IDish = {
  id: 'kids-1.2',
  generalOutput: 35,
  variants: [
    {
      id: 'kids-1.2.1',
      name: 'Бутерброд с маслом и чесноком',
      components: {
        breadWheat: 30,
        butter: 4,
        vegetables: 1,
      },
      macronutrients: {
        proteins: 7.1,
        fats: 10.3,
        carbohydrates: 41.46
      },
      caloricity: 291.7
    },
  ]
}

const SANDWICH_W_JAM: IDish = {
  id: 'kids-1.3',
  generalOutput: 40,
  variants: [
    {
      id: 'kids-1.3.1',
      name: 'Бутерброд с джемом',
      components: {
        butter: 4,
        breadWheat: 24,
        confectioneryProducts: 12,
      },
      macronutrients: {
        proteins: 4.98,
        fats: 8.85,
        carbohydrates: 49.4
      },
      caloricity: 297.7
    },
  ]
}

const SANDWICH_W_JAM_V_2: IDish = {
  id: 'kids-1.4',
  generalOutput: 40,
  variants: [
    {
      id: 'kids-1.4.1',
      name: 'Бутерброд с повидлом',
      components: {
        butter: 4,
        breadWheat: 24,
        confectioneryProducts: 12,
      },
      macronutrients: {
        proteins: 4.9,
        fats: 8.85,
        carbohydrates: 48.53
      },
      caloricity: 293.2
    },
  ]
}

const SANDWICH_W_HONEY: IDish = {
  id: 'kids-1.5',
  generalOutput: 40,
  variants: [
    {
      id: 'kids-1.5.1',
      name: 'Бутерброд с медом',
      components: {
        butter: 4,
        breadWheat: 24,
        confectioneryProducts: 12,
      },
      macronutrients: {
        proteins: 5.03,
        fats: 8.85,
        carbohydrates: 53.03
      },
      caloricity: 312.4
    },
  ]
}

const SANDWICH_W_CHEESE: IDish = {
  id: 'kids-1.6',
  generalOutput: 40,
  variants: [
    {
      id: 'kids-1.6.1',
      name: 'Бутерброд с сыром (пошехонским)',
      components: {
        butter: 4,
        breadWheat: 24,
        cheese: 12,
      },
      macronutrients: {
        proteins: 12.6,
        fats: 16.8,
        carbohydrates: 28.95
      },
      caloricity: 323.2
    },
    {
      id: 'kids-1.6.2',
      name: 'Бутерброд с сыром (российским)',
      components: {
        butter: 4,
        breadWheat: 24,
        cheese: 12,
      },
      macronutrients: {
        proteins: 11.7,
        fats: 17.55,
        carbohydrates: 28.95
      },
      caloricity: 326.2
    },
    {
      id: 'kids-1.6.3',
      name: 'Бутерброд с сыром (голландским)',
      components: {
        butter: 4,
        breadWheat: 24,
        cheese: 12,
      },
      macronutrients: {
        proteins: 12.6,
        fats: 16.9,
        carbohydrates: 28.95
      },
      caloricity: 323.8
    },
  ]
}

const SANDWICH_W_CHEESE_WO_BUTTER: IDish = {
  id: 'kids-1.6-wo',
  generalOutput: 36,
  variants: [
    {
      id: 'kids-1.6.1-wo',
      name: 'Бутерброд с сыром (пошехонским) без масла',
      components: {
        breadWheat: 24,
        cheese: 12,
      },
      macronutrients: {
        proteins: 12.57,
        fats: 13.9,
        carbohydrates: 28.89
      },
      caloricity: 290.94
    },
    {
      id: 'kids-1.6.2-wo',
      name: 'Бутерброд с сыром (российским) без масла',
      components: {
        breadWheat: 24,
        cheese: 12,
      },
      macronutrients: {
        proteins: 11.67,
        fats: 14.65,
        carbohydrates: 28.89
      },
      caloricity: 294.09
    },
    {
      id: 'kids-1.6.3-wo',
      name: 'Бутерброд с сыром (голландским) без масла',
      components: {
        breadWheat: 24,
        cheese: 12,
      },
      macronutrients: {
        proteins: 12.57,
        fats: 14,
        carbohydrates: 28.89
      },
      caloricity: 291.84
    },
  ]
}

const CHEESE: IDish = {
  id: 'kids-1.7',
  generalOutput: 10,
  variants: [
    {
      id: 'kids-1.7.1',
      name: 'Сыр российский (порциями)',
      components: {
        cheese: 10
      },
      macronutrients: {
        proteins: 23,
        fats: 29,
        carbohydrates: 0
      },
      caloricity: 360
    },
    {
      id: 'kids-1.7.2',
      name: 'Сыр голландский (порциями)',
      components: {
        cheese: 10
      },
      macronutrients: {
        proteins: 26,
        fats: 26.8,
        carbohydrates: 0
      },
      caloricity: 352
    },
    {
      id: 'kids-1.7.3',
      name: 'Сыр пошехонский (порциями)',
      components: {
        cheese: 10
      },
      macronutrients: {
        proteins: 26,
        fats: 26.5,
        carbohydrates: 0
      },
      caloricity: 350
    }
  ]
}

const SALAD_W_WHITE_CABBAGE_N_APPLES: IDish = {
  id: 'kids-1.8',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.8.1',
      name: 'Салат из белокочанной капусты с яблоками (вариант 1)',
      components:{
        fruits: 14.5,
        oil: 4,
        vegetables: 47
      },
      macronutrients: {
        proteins: 1.74,
        fats: 8.2,
        carbohydrates: 7.62
      },
      caloricity: 115.04
    },
    {
      id: 'kids-1.8.2',
      name: 'Салат из белокочанной капусты с яблоками (вариант 2)',
      components:{
        fruits: 13.5,
        oil: 5,
        vegetables: 47
      },
      macronutrients: {
        proteins: 1.74,
        fats: 10.2,
        carbohydrates: 7.42
      },
      caloricity: 132.12
    }
  ]
}

const SALAD_W_WHITE_CABBAGE_N_CARROTS: IDish = {
  id: 'kids-1.9',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.9.1',
      name: 'Салат из белокочанной капусты с морковью',
      components:{
        oil: 2.5,
        sugar: 2,
        vegetables: 46,
      },
      macronutrients: {
        proteins: 1.6,
        fats: 5.08,
        carbohydrates: 8.62
      },
      caloricity: 89.28
    }
  ]
}

const SALAD_W_WHITE_CABBAGE_N_GREEN_ONION: IDish = {
  id: 'kids-1.10',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.10.1',
      name: 'Салат из белокочанной капусты (с зеленым луком)',
      components:{
        oil: 2.5,
        sugar: 2,
        vegetables: 46,
      },
      macronutrients: {
        proteins: 1.6,
        fats: 5.08,
        carbohydrates: 8.18
      },
      caloricity: 86.2
    }
  ]
}

const SALAD_W_WHITE_CABBAGE_N_ONION: IDish = {
  id: 'kids-1.11',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.11.1',
      name: 'Салат из белокочанной капусты (с репчатым луком)',
      components:{
        oil: 2.5,
        sugar: 2,
        vegetables: 46,
      },
      macronutrients: {
        proteins: 1.44,
        fats: 4.46,
        carbohydrates: 7.96
      },
      caloricity: 80.46
    }
  ]
}

const SALAD_W_WHITE_CABBAGE_N_CUCUMBERS: IDish = {
  id: 'kids-1.12',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.12.1',
      name: 'Салат из белокочанной капусты с огурцами',
      components:{
        oil: 2.5,
        sugar: 2.5,
        vegetables: 45.5,
      },
      macronutrients: {
        proteins: 1.42,
        fats: 5.08,
        carbohydrates: 8.82
      },
      caloricity: 87.44
    }
  ]
}

const SALAD_W_WHITE_CABBAGE_N_CUCUMBERS_N_SWEET_PEPPERS: IDish = {
  id: 'kids-1.13',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.13.1',
      name: 'Салат из белокочанной капусты с огурцами и сладким перцем',
      components:{
        oil: 2.5,
        vegetables: 48.1,
      },
      macronutrients: {
        proteins: 1.38,
        fats: 5.06,
        carbohydrates: 4.16
      },
      caloricity: 68.98
    }
  ]
}

const SALAD_W_WHITE_CABBAGE_N_CUCUMBERS_N_CARROTS: IDish = {
  id: 'kids-1.14',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.14.1',
      name: 'Салат из белокочанной капусты с огурцами и морковью',
      components:{
        oil: 4.5,
        sugar: 4.5,
        vegetables: 41.5,
      },
      macronutrients: {
        proteins: 1.06,
        fats: 9.08,
        carbohydrates: 12.52
      },
      caloricity: 136.34
    }
  ]
}

const SALAD_W_FRESH_CUCUMBERS_N_GREEN_ONION: IDish = {
  id: 'kids-1.15',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.15.1',
      name: 'Салат из свежих огурцов (с зеленым луком)',
      components:{
        oil: 2.5,
        vegetables: 48,
      },
      macronutrients: {
        proteins: 0.84,
        fats: 5.08,
        carbohydrates: 2.62
      },
      caloricity: 58.2
    }
  ]
}

const SALAD_W_FRESH_CUCUMBERS_N_ONION: IDish = {
  id: 'kids-1.16',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.16.1',
      name: 'Салат из свежих огурцов (с репчатым луком)',
      components:{
        oil: 2.5,
        vegetables: 48,
      },
      macronutrients: {
        proteins: 0.86,
        fats: 5.08,
        carbohydrates: 3.4
      },
      caloricity: 61.94
    }
  ]
}

const SALAD_W_FRESH_TOMATOES_N_GREEN_ONION: IDish = {
  id: 'kids-1.17',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.17.1',
      name: 'Салат из свежих помидоров (с зеленым луком)',
      components:{
        oil: 2.5,
        vegetables: 48,
      },
      macronutrients: {
        proteins: 1.1,
        fats: 5.14,
        carbohydrates: 3.58
      },
      caloricity: 63.54
    }
  ]
}

const SALAD_W_FRESH_TOMATOES_N_ONION: IDish = {
  id: 'kids-1.18',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.18.1',
      name: 'Салат из свежих помидоров (с репчатым луком)',
      components:{
        oil: 2.5,
        vegetables: 48,
      },
      macronutrients: {
        proteins: 1.12,
        fats: 5.14,
        carbohydrates: 4.7
      },
      caloricity: 68.88
    }
  ]
}

const SALAD_W_FRESH_TOMATOES_N_CUCUMBERS_N_GREEN_ONION: IDish = {
  id: 'kids-1.19',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.19.1',
      name: 'Салат из свежих помидоров и огурцов (с зеленым луком)',
      components:{
        oil: 2.5,
        vegetables: 48,
      },
      macronutrients: {
        proteins: 1,
        fats: 5.14,
        carbohydrates: 3.24
      },
      caloricity: 61.62
    }
  ]
}

const SALAD_W_FRESH_TOMATOES_N_CUCUMBERS_N_ONION: IDish = {
  id: 'kids-1.20',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.20.1',
      name: 'Салат из свежих помидоров и огурцов (с репчатым луком)',
      components:{
        oil: 2.5,
        vegetables: 48,
      },
      macronutrients: {
        proteins: 1,
        fats: 5.14,
        carbohydrates: 3.98
      },
      caloricity: 65.08
    }
  ]
}

const SALAD_W_FRESH_TOMATOES_N_CUCUMBERS_N_SOUR_CREAM: IDish = {
  id: 'kids-1.21',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.21.1',
      name: 'Салат из свежих помидоров и огурцов (со сметаной)',
      components:{
        sourCream: 5,
        vegetables: 45.5,
      },
      macronutrients: {
        proteins: 1.2,
        fats: 2.14,
        carbohydrates: 3.9
      },
      caloricity: 38.26
    }
  ]
}

const SALAD_W_FRESH_TOMATOES_N_SWEET_PEPPER: IDish = {
  id: 'kids-1.22',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.22.1',
      name: 'Салат из свежих помидоров со сладким перцем',
      components:{
        oil: 5,
        vegetables: 45.5,
      },
      macronutrients: {
        proteins: 1.08,
        fats: 10.12,
        carbohydrates: 4.24
      },
      caloricity: 111.74
    }
  ]
}

const SALAD_SLUCH: IDish = {
  id: 'kids-1.23',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.23.1',
      name: 'Салат "Случь"',
      components:{
        oil: 4,
        vegetables: 46.5,
      },
      macronutrients: {
        proteins: 1.3,
        fats: 8.16,
        carbohydrates: 3.66
      },
      caloricity: 91.66
    }
  ]
}

const SALAD_AGENCHIK_V1: IDish = {
  id: 'kids-1.24',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.24.1',
      name: 'Салат "Агеньчык" (вариант 1)',
      components:{
        oil: 3.5,
        vegetables: 47,
      },
      macronutrients: {
        proteins: 1.84,
        fats: 7.12,
        carbohydrates: 6.72
      },
      caloricity: 98.1
    }
  ]
}

const SALAD_AGENCHIK_V2: IDish = {
  id: 'kids-1.25',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.25.1',
      name: 'Салат "Агеньчык" (вариант 2)',
      components:{
        oil: 4.5,
        vegetables: 46,
      },
      macronutrients: {
        proteins: 1.8,
        fats: 9.1,
        carbohydrates: 6.66
      },
      caloricity: 115.62
    }
  ]
}