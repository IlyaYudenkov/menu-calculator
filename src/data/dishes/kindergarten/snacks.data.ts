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
      components: {
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
      components: {
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
      components: {
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
      components: {
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
      components: {
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
      components: {
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
      components: {
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
      components: {
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
      components: {
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
      components: {
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
      components: {
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
      components: {
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
      components: {
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
      components: {
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
      components: {
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
      components: {
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
      components: {
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
      components: {
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
      components: {
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

const SALAD_AGENCHIK_W_SOUR_CREAM: IDish = {
  id: 'kids-1.26',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.26.1',
      name: 'Салат "Агеньчык" (со сметаной)',
      components: {
        sourCream: 5,
        vegetables: 45.5,
      },
      macronutrients: {
        proteins: 2.06,
        fats: 2.12,
        carbohydrates: 6.84
      },
      caloricity: 54.7
    }
  ]
}

const SALAD_AGENCHIK_W_CANNED_CORN: IDish = {
  id: 'kids-1.27',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.27.1',
      name: 'Салат "Агеньчык" (с кукурузой консервированной)',
      components: {
        oil: 4.5,
        vegetables: 46,
      },
      macronutrients: {
        proteins: 1.5,
        fats: 9.16,
        carbohydrates: 8.1
      },
      caloricity: 121.04
    }
  ]
}

const SALAD_AGENCHIK_W_SOUR_CREAM_N_CANNED_CORN: IDish = {
  id: 'kids-1.28',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.28.1',
      name: 'Салат "Агеньчык" (со сметаной и кукурузой консервированной)',
      components: {
        sourCream: 5,
        vegetables: 45.5,
      },
      macronutrients: {
        proteins: 1.78,
        fats: 2.18,
        carbohydrates: 8.38
      },
      caloricity: 60.64
    }
  ]
}

const RADISH_W_OIL: IDish = {
  id: 'kids-1.29',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.29.1',
      name: 'Редис с маслом',
      components: {
        sourCream: 5,
        vegetables: 45.5,
      },
      macronutrients: {
        proteins: 1.1,
        fats: 10.08,
        carbohydrates: 3.46
      },
      caloricity: 109.02
    }
  ]
}

const SALAD_W_POTATO_N_PICKLED_CABBAGE_V1: IDish = {
  id: 'kids-1.30',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.30.1',
      name: 'Салат картофельный с квашеной капустой (вариант 1)',
      components: {
        potato: 25,
        oil: 3,
        vegetables: 22.5,
      },
      macronutrients: {
        proteins: 1.72,
        fats: 6.2,
        carbohydrates: 10.44
      },
      caloricity: 106.96
    }
  ]
}

const SALAD_W_POTATO_N_PICKLED_CABBAGE_V2: IDish = {
  id: 'kids-1.31',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.31.1',
      name: 'Салат картофельный с квашеной капустой (вариант 2)',
      components: {
        potato: 25,
        oil: 5,
        vegetables: 20.5,
      },
      macronutrients: {
        proteins: 1.64,
        fats: 10.2,
        carbohydrates: 10.2
      },
      caloricity: 141.62
    }
  ]
}

const SALAD_W_POTATO_N_PICKLES: IDish = {
  id: 'kids-1.32',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.32.1',
      name: 'Салат картофельный с огурцами солёными',
      components: {
        potato: 25,
        oil: 3,
        vegetables: 22.5,
      },
      macronutrients: {
        proteins: 1.48,
        fats: 6.22,
        carbohydrates: 10.3
      },
      caloricity: 105.58
    }
  ]
}

const SALAD_W_POTATO_N_GREEN_PEAS: IDish = {
  id: 'kids-1.33',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.33.1',
      name: 'Салат картофельный с зеленым горошком',
      components: {
        eggs: 5,
        potato: 28,
        oil: 4.5,
        vegetables: 13,
      },
      macronutrients: {
        proteins: 3.2,
        fats: 10.42,
        carbohydrates: 10.88
      },
      caloricity: 151.82
    }
  ]
}

const SALAD_W_POTATO_N_BEETROOT_V1: IDish = {
  id: 'kids-1.34',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.34.1',
      name: 'Салат картофельный со свеклой (вариант 1)',
      components: {
        eggs: 9.5,
        potato: 17,
        oil: 4,
        vegetables: 20,
      },
      macronutrients: {
        proteins: 3.5,
        fats: 13.9,
        carbohydrates: 8.76
      },
      caloricity: 175.04
    }
  ]
}

const SALAD_W_POTATO_N_BEETROOT_V2: IDish = {
  id: 'kids-1.35',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.35.1',
      name: 'Салат картофельный со свеклой (вариант 2)',
      components: {
        eggs: 7.5,
        potato: 17,
        oil: 6,
        vegetables: 20,
      },
      macronutrients: {
        proteins: 3.5,
        fats: 13.9,
        carbohydrates: 8.76
      },
      caloricity: 175.04
    }
  ]
}

const SALAD_W_POTATO_N_SOUR_CREAM: IDish = {
  id: 'kids-1.36',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.36.1',
      name: 'Салат картофельный со сметаной',
      components: {
        potato: 36,
        sourCream: 7.5,
        vegetables: 7,
      },
      macronutrients: {
        proteins: 2.02,
        fats: 3.08,
        carbohydrates: 13.46
      },
      caloricity: 92.84
    }
  ]
}

const SALAD_SOLNECHNIY_V1: IDish = {
  id: 'kids-1.37',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.37.1',
      name: 'Салат "Солнечный" (вариант 1)',
      components: {
        cheese: 10,
        eggs: 5,
        fruits: 10,
        fruitsDried: 5,
        oil: 4,
        vegetables: 17,
      },
      macronutrients: {
        proteins: 8.56,
        fats: 21.06,
        carbohydrates: 4.7
      },
      caloricity: 246.64
    }
  ]
}

const SALAD_SOLNECHNIY_V2: IDish = {
  id: 'kids-1.38',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.38.1',
      name: 'Салат "Солнечный" (вариант 2)',
      components: {
        cheese: 11,
        eggs: 5,
        fruits: 11,
        oil: 4,
        vegetables: 20,
      },
      macronutrients: {
        proteins: 7.62,
        fats: 15.08,
        carbohydrates: 5.38
      },
      caloricity: 192.56
    }
  ]
}

const SALAD_BELOSNEZHKA_W_GREEN_ONION: IDish = {
  id: 'kids-1.39',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.39.1',
      name: 'Салат "Белоснежка" (с зеленым луком)',
      components: {
        eggs: 3,
        oil: 3,
        sugar: 0.5,
        vegetables: 59,
      },
      macronutrients: {
        proteins: 2.52,
        fats: 6.8,
        carbohydrates: 5.82
      },
      caloricity: 96.1
    }
  ]
}

const SALAD_BELOSNEZHKA_W_ONION: IDish = {
  id: 'kids-1.40',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.40.1',
      name: 'Салат "Белоснежка" (с репчатым луком)',
      components: {
        eggs: 3,
        oil: 3,
        sugar: 0.5,
        vegetables: 59,
      },
      macronutrients: {
        proteins: 2.54,
        fats: 6.8,
        carbohydrates: 6.04
      },
      caloricity: 97.18
    }
  ]
}

const SALAD_CVETNOY: IDish = {
  id: 'kids-1.41',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.41.1',
      name: 'Салат "Цветной"',
      components: {
        oil: 4,
        sugar: 1.5,
        vegetables: 44.5,
      },
      macronutrients: {
        proteins: 1.38,
        fats: 8.06,
        carbohydrates: 9.48
      },
      caloricity: 121.1
    }
  ]
}

const SAUERKRAUT_SALAD: IDish = {
  id: 'kids-1.42',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.42.1',
      name: 'Салат из квашеной капусты',
      components: {
        oil: 2.5,
        sugar: 2,
        vegetables: 46,
      },
      macronutrients: {
        proteins: 1.62,
        fats: 5,
        carbohydrates: 6.7
      },
      caloricity: 80.26
    }
  ]
}

const SAUERKRAUT_SALAD_W_BEETROOT: IDish = {
  id: 'kids-1.43',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.43.1',
      name: 'Салат из квашеной капусты со свёклой',
      components: {
        oil: 2.5,
        vegetables: 48,
      },
      macronutrients: {
        proteins: 1.62,
        fats: 5.02,
        carbohydrates: 4.46
      },
      caloricity: 71.16
    }
  ]
}

const SALAD_W_PICKLED_CUCUMBERS_W_GREEN_ONION: IDish = {
  id: 'kids-1.44',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.44.1',
      name: 'Салат из солёных огурцов (с зеленым луком)',
      components: {
        oil: 2.5,
        vegetables: 48,
      },
      macronutrients: {
        proteins: 0.82,
        fats: 5.08,
        carbohydrates: 1.76
      },
      caloricity: 58.16
    }
  ]
}

const SALAD_W_PICKLED_CUCUMBERS_W_ONION: IDish = {
  id: 'kids-1.45',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.45.1',
      name: 'Салат из солёных огурцов (с репчатым луком)',
      components: {
        oil: 2.5,
        vegetables: 48,
      },
      macronutrients: {
        proteins: 0.84,
        fats: 5.08,
        carbohydrates: 2.52
      },
      caloricity: 61.68
    }
  ]
}

const SALAD_W_VEGETABLES_N_SEA_CABBAGE_V1: IDish = {
  id: 'kids-1.46',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.46.1',
      name: 'Салат из овощей с морской капустой (вариант 1)',
      components: {
        oil: 3.5,
        potato: 17,
        vegetables: 30,
      },
      macronutrients: {
        proteins: 1.4,
        fats: 7.2,
        carbohydrates: 8.44
      },
      caloricity: 105.28
    }
  ]
}

const SALAD_W_VEGETABLES_N_SEA_CABBAGE_V2: IDish = {
  id: 'kids-1.47',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.47.1',
      name: 'Салат из овощей с морской капустой (вариант 2)',
      components: {
        oil: 5,
        potato: 16,
        vegetables: 29.5,
      },
      macronutrients: {
        proteins: 1.34,
        fats: 10.2,
        carbohydrates: 8.02
      },
      caloricity: 130.2
    }
  ]
}

const SALAD_W_SEA_N_WHITE_CABBAGE: IDish = {
  id: 'kids-1.48',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.48.1',
      name: 'Салат из морской и белокочанной капусты',
      components: {
        oil: 3.5,
        sugar: 2,
        vegetables: 61,
      },
      macronutrients: {
        proteins: 1.98,
        fats: 7.12,
        carbohydrates: 9.22
      },
      caloricity: 111.04
    }
  ]
}

const SALAD_W_SEA_CABBAGE_N_OIL: IDish = {
  id: 'kids-1.49',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.49.1',
      name: 'Салат из морской капусты с маслом растительным',
      components: {
        oil: 2.5,
        vegetables: 48,
      },
      macronutrients: {
        proteins: 0.44,
        fats: 5.1,
        carbohydrates: 0
      },
      caloricity: 47.36
    }
  ]
}

const SALAD_VITAMINNIY_V1: IDish = {
  id: 'kids-1.50',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.50.1',
      name: 'Салат витаминный (вариант 1)',
      components: {
        fruits: 12,
        sourCream: 8,
        sugar: 0.5,
        vegetables: 31.5,
      },
      macronutrients: {
        proteins: 1.22,
        fats: 3.38,
        carbohydrates: 6.18
      },
      caloricity: 61.94
    }
  ]
}

const SALAD_VITAMINNIY_V2_W_GREEN_PEA: IDish = {
  id: 'kids-1.51',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.51.1',
      name: 'Салат витаминный (вариант 2 с зеленым горошком)',
      components: {
        fruits: 2,
        sourCream: 8,
        sugar: 2,
        vegetables: 40,
      },
      macronutrients: {
        proteins: 1.94,
        fats: 3.28,
        carbohydrates: 8.74
      },
      caloricity: 74
    }
  ]
}

const SALAD_VITAMINNIY_V3_W_CORN: IDish = {
  id: 'kids-1.52',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.52.1',
      name: 'Салат витаминный (вариант 3 с кукурузой)',
      components: {
        fruits: 2,
        sourCream: 8,
        sugar: 2,
        vegetables: 40,
      },
      macronutrients: {
        proteins: 1.8,
        fats: 3.32,
        carbohydrates: 9.84
      },
      caloricity: 78.38
    }
  ]
}

const SALAD_VITAMINNIY_W_OIL: IDish = {
  id: 'kids-1.53',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.53.1',
      name: 'Салат витаминный (с маслом растительным)',
      components: {
        fruits: 12,
        oil: 4,
        sugar: 0.5,
        vegetables: 35.5
      },
      macronutrients: {
        proteins: 0.76,
        fats: 8.1,
        carbohydrates: 4.04
      },
      caloricity: 93.32
    }
  ]
}

const SALAD_W_BEETROOT_N_CHEESE_N_GARLIC: IDish = {
  id: 'kids-1.54',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.54.1',
      name: 'Салат из свеклы с сыром и чесноком',
      components: {
        cheese: 8,
        oil: 4,
        vegetables: 38.6,
      },
      macronutrients: {
        proteins: 5.32,
        fats: 12.3,
        carbohydrates: 7.02
      },
      caloricity: 160.36
    }
  ]
}

const SALAD_W_BEETROOT_N_PRUNES_N_OIL: IDish = {
  id: 'kids-1.55',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.55.1',
      name: 'Салат из свеклы с черносливом (с растительным маслом)',
      components: {
        fruitsDried: 9,
        oil: 3.5,
        sugar: 1,
        vegetables: 36,
      },
      macronutrients: {
        proteins: 1.54,
        fats: 7.06,
        carbohydrates: 20.22
      },
      caloricity: 149.16
    }
  ]
}

const SALAD_W_BEETROOT_N_PRUNES_N_SOUR_CREAM: IDish = {
  id: 'kids-1.56',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.56.1',
      name: 'Салат из свеклы с черносливом (со сметаной)',
      components: {
        fruitsDried: 9,
        sourCream: 5,
        sugar: 0.5,
        vegetables: 35,
      },
      macronutrients: {
        proteins: 1.8,
        fats: 2.08,
        carbohydrates: 19.36
      },
      caloricity: 102.2
    }
  ]
}

const SALAD_W_BEETROOT_N_PRUNES_N_NUTS_N_GARLIC: IDish = {
  id: 'kids-1.57',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.57.1',
      name: 'Салат из свеклы с черносливом, орехами и чесноком',
      components: {
        fruitsDried: 8.6,
        oil: 1,
        vegetables: 38,
      },
      macronutrients: {
        proteins: 2.98,
        fats: 13.58,
        carbohydrates: 11.52
      },
      caloricity: 178.98
    }
  ]
}

const SALAD_W_BEETROOT_N_APPLES_V1_W_OIL: IDish = {
  id: 'kids-1.58',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.58.1',
      name: 'Салат из свеклы с яблоками (вариант 1 с растительным маслом)',
      components: {
        fruits: 17.5,
        oil: 4,
        vegetables: 29,
      },
      macronutrients: {
        proteins: 1.02,
        fats: 8.2,
        carbohydrates: 8.7
      },
      caloricity: 112.04
    }
  ]
}

const SALAD_W_BEETROOT_N_APPLES_V2_W_OIL: IDish = {
  id: 'kids-1.59',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.59.1',
      name: 'Салат из свеклы с яблоками (вариант 2 с растительным маслом)',
      components: {
        fruits: 17,
        oil: 6,
        vegetables: 27.5,
      },
      macronutrients: {
        proteins: 0.96,
        fats: 12.18,
        carbohydrates: 8.34
      },
      caloricity: 146.28
    }
  ]
}

const SALAD_W_BEETROOT_N_APPLES_W_SOUR_CREAM: IDish = {
  id: 'kids-1.60',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.60.1',
      name: 'Салат из свеклы с яблоками со сметаной',
      components: {
        fruits: 16.5,
        sourCream: 5,
        vegetables: 29,
      },
      macronutrients: {
        proteins: 1.28,
        fats: 2.2,
        carbohydrates: 8.84
      },
      caloricity: 59.82
    }
  ]
}

const SALAD_W_BEETROOT_N_OIL: IDish = {
  id: 'kids-1.61',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.61.1',
      name: 'Салат из свеклы с маслом растительным',
      components: {
        oil: 2.5,
        vegetables: 48,
      },
      macronutrients: {
        proteins: 1.44,
        fats: 5.1,
        carbohydrates: 8.74
      },
      caloricity: 85.28
    }
  ]
}

const SALAD_OSENNIY_V1: IDish = {
  id: 'kids-1.62',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.62.1',
      name: 'Салат "Осенний" (вариант 1)',
      components: {
        fruits: 10,
        oil: 5,
        vegetables: 37.5,
      },
      macronutrients: {
        proteins: 1.58,
        fats: 6.16,
        carbohydrates: 7.14
      },
      caloricity: 90.88
    }
  ]
}

const SALAD_OSENNIY_V2: IDish = {
  id: 'kids-1.63',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.63.1',
      name: 'Салат "Осенний" (вариант 2)',
      components: {
        fruits: 10,
        oil: 5,
        vegetables: 35.5,
      },
      macronutrients: {
        proteins: 1.58,
        fats: 10.16,
        carbohydrates: 6.9
      },
      caloricity: 125.34
    }
  ]
}

const SALAD_ROZOVIY_V1: IDish = {
  id: 'kids-1.64',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.64.1',
      name: 'Салат "Розовый" (вариант 1)',
      components: {
        eggs: 10,
        oil: 3.5,
        vegetables: 37,
      },
      macronutrients: {
        proteins: 3.6,
        fats: 9.36,
        carbohydrates: 6.5
      },
      caloricity: 124.34
    }
  ]
}

const SALAD_ROZOVIY_V2: IDish = {
  id: 'kids-1.65',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.65.1',
      name: 'Салат "Розовый" (вариант 2)',
      components: {
        eggs: 7.5,
        oil: 5,
        vegetables: 38,
      },
      macronutrients: {
        proteins: 3,
        fats: 11.78,
        carbohydrates: 6.64
      },
      caloricity: 144.3
    }
  ]
}

const SALAD_ZARYA_V1_W_OIL: IDish = {
  id: 'kids-1.66',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.66.1',
      name: 'Салат "Заря" (вариант 1 с маслом растительным)',
      components: {
        eggs: 5,
        oil: 4,
        vegetables: 41.5,
      },
      macronutrients: {
        proteins: 1.28,
        fats: 1.16,
        carbohydrates: 7.32
      },
      caloricity: 122.64
    }
  ]
}

const SALAD_ZARYA_V2_W_OIL: IDish = {
  id: 'kids-1.67',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.67.1',
      name: 'Салат "Заря" (вариант 2 с маслом растительным)',
      components: {
        eggs: 5,
        oil: 5.5,
        vegetables: 40,
      },
      macronutrients: {
        proteins: 2.66,
        fats: 11.22,
        carbohydrates: 7.04
      },
      caloricity: 139.34
    }
  ]
}

const SALAD_ZARYA_W_SOUR_CREAM: IDish = {
  id: 'kids-1.68',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.68.1',
      name: 'Салат "Заря" (со сметаной)',
      components: {
        eggs: 5,
        sourCream: 5.5,
        vegetables: 40,
      },
      macronutrients: {
        proteins: 2.92,
        fats: 3.44,
        carbohydrates: 7.44
      },
      caloricity: 72.14
    }
  ]
}

const SALAD_SVEKOLKA: IDish = {
  id: 'kids-1.69',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.69.1',
      name: 'Салат "Свеколка"',
      components: {
        fruitsDried: 8,
        oil: 5,
        vegetables: 37.5,
      },
      macronutrients: {
        proteins: 1.54,
        fats: 8.86,
        carbohydrates: 16.04
      },
      caloricity: 145.68
    }
  ]
}

const SALAD_BURYACHOK: IDish = {
  id: 'kids-1.70',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.70.1',
      name: 'Салат "Бурячок"',
      components: {
        fruits: 8.5,
        oil: 4.5,
        vegetables: 37.5,
      },
      macronutrients: {
        proteins: 1.58,
        fats: 9.16,
        carbohydrates: 7.84
      },
      caloricity: 119.74
    }
  ]
}

const SALAD_W_CORN_N_PRUNES: IDish = {
  id: 'kids-1.71',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.71.1',
      name: 'Салат из кукурузы с черносливом (с сыром пошехонским)',
      components: {
        cheese: 7,
        fruitsDried: 6.8,
        oil: 6.5,
        vegetables: 37.1,
      },
      macronutrients: {
        proteins: 5.4,
        fats: 16.54,
        carbohydrates: 16.34
      },
      caloricity: 238.44
    },
    {
      id: 'kids-1.71.2',
      name: 'Салат из кукурузы с черносливом (с сыром российским)',
      components: {
        cheese: 7,
        fruitsDried: 6.8,
        oil: 6.5,
        vegetables: 37.1,
      },
      macronutrients: {
        proteins: 4.98,
        fats: 16.88,
        carbohydrates: 16.34
      },
      caloricity: 239.84
    },
    {
      id: 'kids-1.71.3',
      name: 'Салат из кукурузы с черносливом (с сыром голландским)',
      components: {
        cheese: 7,
        fruitsDried: 6.8,
        oil: 6.5,
        vegetables: 37.1,
      },
      macronutrients: {
        proteins: 5.4,
        fats: 16.58,
        carbohydrates: 16.34
      },
      caloricity: 238.72
    }
  ]
}

const SALAD_W_CARROTS_N_RAISIN: IDish = {
  id: 'kids-1.72',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.72.1',
      name: 'Салат из моркови с изюмом',
      components: {
        fruitsDried: 7.5,
        oil: 2,
        vegetables: 41,
      },
      macronutrients: {
        proteins: 1.34,
        fats: 4.08,
        carbohydrates: 15.8
      },
      caloricity: 111.96
    }
  ]
}

const SALAD_W_CARROTS_N_APPLES_V1: IDish = {
  id: 'kids-1.73',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.73.1',
      name: 'Салат из моркови с яблоками (вариант 1)',
      components: {
        fruits: 20.5,
        sugar: 4,
        vegetables: 26,
      },
      macronutrients: {
        proteins: 0.84,
        fats: 0.22,
        carbohydrates: 15.74
      },
      caloricity: 72.04
    }
  ]
}

const SALAD_W_CARROTS_N_APPLES_V2: IDish = {
  id: 'kids-1.74',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.74.1',
      name: 'Салат из моркови с яблоками (вариант 2)',
      components: {
        fruits: 10,
        sourCream: 7.5,
        sugar: 1,
        vegetables: 32.5,
      },
      macronutrients: {
        proteins: 1.34,
        fats: 3.14,
        carbohydrates: 9.12
      },
      caloricity: 76.56
    }
  ]
}

const SALAD_W_CARROTS_N_APPLES_N_NUTS: IDish = {
  id: 'kids-1.75',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.75.1',
      name: 'Салат из моркови и яблок с орехами',
      components: {
        fruits: 20.5,
        fruitsDried: 6.5,
        oil: 4,
        vegetables: 19.5,
      },
      macronutrients: {
        proteins: 1.92,
        fats: 11.74,
        carbohydrates: 4.92
      },
      caloricity: 138.18
    }
  ]
}

const SALAD_W_CARROTS_N_CUCUMBERS_N_GREEN_PEA: IDish = {
  id: 'kids-1.76',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.76.1',
      name: 'Салат из моркови с огурцами и зеленым горошком',
      components: {
        oil: 4,
        vegetables: 46.5,
      },
      macronutrients: {
        proteins: 1.34,
        fats: 8.1,
        carbohydrates: 5.02
      },
      caloricity: 97.4
    }
  ]
}

const SALAD_W_VEGETABLES_N_EGG: IDish = {
  id: 'kids-1.77',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.77.1',
      name: 'Салат овощной с яйцом',
      components: {
        eggs: 8,
        oil: 4.5,
        potato: 18.5,
        vegetables: 19.5,
      },
      macronutrients: {
        proteins: 3.22,
        fats: 9.72,
        carbohydrates: 7.94
      },
      caloricity: 135.02
    }
  ]
}

const SALAD_ZDOROVYE: IDish = {
  id: 'kids-1.78',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.78.1',
      name: 'Салат "Здоровье"',
      components: {
        oil: 5,
        vegetables: 45.5,
      },
      macronutrients: {
        proteins: 1.62,
        fats: 10.1,
        carbohydrates: 7.1
      },
      caloricity: 124.92
    }
  ]
}

const SALAD_ASSORTI_V1: IDish = {
  id: 'kids-1.79',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.79.1',
      name: 'Салат "Ассорти" (вариант 1)',
      components: {
        oil: 2.5,
        vegetables: 48,
      },
      macronutrients: {
        proteins: 1.18,
        fats: 5.12,
        carbohydrates: 3.52
      },
      caloricity: 64.72
    }
  ]
}

const SALAD_ASSORTI_V2: IDish = {
  id: 'kids-1.80',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.80.1',
      name: 'Салат "Ассорти" (вариант 2)',
      components: {
        oil: 4,
        vegetables: 46.5,
      },
      macronutrients: {
        proteins: 1.42,
        fats: 8.1,
        carbohydrates: 6.7
      },
      caloricity: 105.1
    }
  ]
}

const SALAD_W_SQUID_N_APPLES_V1_W_OIL: IDish = {
  id: 'kids-1.81',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.81.1',
      name: 'Салат из кальмаров с яблоками (вариант 1 с растительным маслом)',
      components: {
        eggs: 6,
        fish: 24,
        fruits: 15,
        oil: 4,
        vegetables: 12,
      },
      macronutrients: {
        proteins: 9.9,
        fats: 12.14,
        carbohydrates: 4.58
      },
      caloricity: 168.48
    }
  ]
}

const SALAD_W_SQUID_N_APPLES_V2_W_OIL: IDish = {
  id: 'kids-1.82',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.82.1',
      name: 'Салат из кальмаров с яблоками (вариант 2 с растительным маслом)',
      components: {
        eggs: 6,
        fish: 24,
        fruits: 14,
        oil: 6,
        vegetables: 11.5,
      },
      macronutrients: {
        proteins: 9.88,
        fats: 15.14,
        carbohydrates: 4.32
      },
      caloricity: 194.16
    }
  ]
}

const SALAD_W_SQUID_N_APPLES_W_SOUR_CREAM: IDish = {
  id: 'kids-1.83',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.83.1',
      name: 'Салат из кальмаров с яблоками (со сметаной)',
      components: {
        eggs: 6,
        fish: 24,
        fruits: 14,
        sourCream: 6,
        vegetables: 11.5,
      },
      macronutrients: {
        proteins: 11.32,
        fats: 5.96,
        carbohydrates: 4.7
      },
      caloricity: 118.16
    }
  ]
}

const SALAD_W_SQUID_N_WHITE_CABBAGE: IDish = {
  id: 'kids-1.84',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.84.1',
      name: 'Салат из кальмаров с белокочанной капустой',
      components: {
        fish: 24,
        oil: 4,
        vegetables: 43.5,
      },
      macronutrients: {
        proteins: 10.26,
        fats: 10.1,
        carbohydrates: 5
      },
      caloricity: 155.06
    }
  ]
}

const SALAD_OCEAN_W_OIL: IDish = {
  id: 'kids-1.85',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.85.1',
      name: 'Салат "Океан" (с растительным маслом)',
      components: {
        cheese: 10,
        eggs: 10,
        fish: 29.5,
        oil: 5,
        vegetables: 9.5,
      },
      macronutrients: {
        proteins: 17.18,
        fats: 19.5,
        carbohydrates: 1.86
      },
      caloricity: 255.26
    }
  ]
}

const SALAD_OCEAN_W_SOUR_CREAM: IDish = {
  id: 'kids-1.86',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.86.1',
      name: 'Салат "Океан" (со сметаной)',
      components: {
        cheese: 9.5,
        eggs: 9.5,
        fish: 29.5,
        sourCream: 6,
        vegetables: 9.5,
      },
      macronutrients: {
        proteins: 17.26,
        fats: 11.64,
        carbohydrates: 2.24
      },
      caloricity: 186.58
    }
  ]
}

const SALAD_ZAGADKA_V1_W_CODFISH_N_OIL: IDish = {
  id: 'kids-1.87',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.87.1',
      name: 'Салат "Загадка" (вариант 1 с треской и растительным маслом)',
      components: {
        cereals: 3.9,
        eggs: 5,
        fish: 22,
        fruits: 12.5,
        oil: 4
      },
      macronutrients: {
        proteins: 7.98,
        fats: 5.4,
        carbohydrates: 7.52
      },
      caloricity: 147.8
    }
  ]
}

const SALAD_ZAGADKA_V2_W_CODFISH_N_OIL: IDish = {
  id: 'kids-1.88',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.88.1',
      name: 'Салат "Загадка" (вариант 2 с треской и растительным маслом)',
      components: {
        cereals: 3.9,
        eggs: 5,
        fish: 22,
        fruits: 10.5,
        oil: 6
      },
      macronutrients: {
        proteins: 7.94,
        fats: 13.38,
        carbohydrates: 6.86
      },
      caloricity: 180.7
    }
  ]
}

const SALAD_ZAGADKA_W_HAKE_N_OIL: IDish = {
  id: 'kids-1.89',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.89.1',
      name: 'Салат "Загадка" (с хеком и растительным маслом)',
      components: {
        cereals: 3.9,
        eggs: 5,
        fish: 22,
        fruits: 12.5,
        oil: 4
      },
      macronutrients: {
        proteins: 8.22,
        fats: 10.02,
        carbohydrates: 7.52
      },
      caloricity: 137.88
    }
  ]
}

const SALAD_ZAGADKA_W_CODFISH_N_SOUR_CREAM: IDish = {
  id: 'kids-1.90',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.90.1',
      name: 'Салат "Загадка" (с треской и сметаной)',
      components: {
        cereals: 3.9,
        eggs: 5,
        fish: 22,
        fruits: 10.5,
        sourCream: 6
      },
      macronutrients: {
        proteins: 8.3,
        fats: 3.8,
        carbohydrates: 7.52
      },
      caloricity: 98.8
    }
  ]
}

const SALAD_ZAGADKA_W_HAKE_N_SOUR_CREAM: IDish = {
  id: 'kids-1.91',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.91.1',
      name: 'Салат "Загадка" (с хеком со сметаной)',
      components: {
        cereals: 3.9,
        eggs: 5,
        fish: 22,
        fruits: 10.5,
        sourCream: 6
      },
      macronutrients: {
        proteins: 8.54,
        fats: 4.42,
        carbohydrates: 7.52
      },
      caloricity: 105.52
    }
  ]
}

const SALAD_CHAIKA_W_OIL: IDish = {
  id: 'kids-1.92',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.92.1',
      name: 'Салат "Чайка" (с растительным маслом, с сыром пошехонским)',
      components: {
        cheese: 18,
        eggs: 10,
        oil: 6,
        vegetables: 16.5
      },
      macronutrients: {
        proteins: 12.7,
        fats: 23.86,
        carbohydrates: 2.62
      },
      caloricity: 279.22
    },
    {
      id: 'kids-1.92.2',
      name: 'Салат "Чайка" (с растительным маслом, с сыром российским)',
      components: {
        cheese: 18,
        eggs: 10,
        oil: 6,
        vegetables: 16.5
      },
      macronutrients: {
        proteins: 11.62,
        fats: 24.76,
        carbohydrates: 2.62
      },
      caloricity: 282.82
    },
    {
      id: 'kids-1.92.3',
      name: 'Салат "Чайка" (с растительным маслом, с сыром голландским)',
      components: {
        cheese: 18,
        eggs: 10,
        oil: 6,
        vegetables: 16.5
      },
      macronutrients: {
        proteins: 12.7,
        fats: 23.98,
        carbohydrates: 2.62
      },
      caloricity: 279.94
    }
  ]
}

const SALAD_CHAIKA_W_SOUR_CREAM: IDish = {
  id: 'kids-1.93',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.93.1',
      name: 'Салат "Чайка" (со сметаной, с сыром пошехонским)',
      components: {
        cheese: 18,
        eggs: 10,
        sourCream: 6,
        vegetables: 16.5
      },
      macronutrients: {
        proteins: 13.04,
        fats: 14.28,
        carbohydrates: 3
      },
      caloricity: 196.06
    },
    {
      id: 'kids-1.93.2',
      name: 'Салат "Чайка" (со сметаной, с сыром российским)',
      components: {
        cheese: 18,
        eggs: 10,
        sourCream: 6,
        vegetables: 16.5
      },
      macronutrients: {
        proteins: 11.96,
        fats: 15.18,
        carbohydrates: 3
      },
      caloricity: 199.66
    },
    {
      id: 'kids-1.93.3',
      name: 'Салат "Чайка" (со сметаной, с сыром голландским)',
      components: {
        cheese: 18,
        eggs: 10,
        sourCream: 6,
        vegetables: 16.5
      },
      macronutrients: {
        proteins: 13.04,
        fats: 14.38,
        carbohydrates: 3
      },
      caloricity: 196.78
    },
  ]
}

const SALAD_W_CHEESE_N_CARROTS: IDish = {
  id: 'kids-1.94',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.94.1',
      name: 'Салат из сыра и моркови (с сыром пошехонским)',
      components: {
        cheese: 10,
        oil: 4,
        vegetables: 36.5
      },
      macronutrients: {
        proteins: 5.9,
        fats: 13.36,
        carbohydrates: 3
      },
      caloricity: 158.98
    },
    {
      id: 'kids-1.94.2',
      name: 'Салат из сыра и моркови (с сыром российским)',
      components: {
        cheese: 10,
        oil: 4,
        vegetables: 36.5
      },
      macronutrients: {
        proteins: 5.3,
        fats: 13.86,
        carbohydrates: 3
      },
      caloricity: 160.98
    },
    {
      id: 'kids-1.94.3',
      name: 'Салат из сыра и моркови (с сыром голландским)',
      components: {
        cheese: 10,
        oil: 4,
        vegetables: 36.5
      },
      macronutrients: {
        proteins: 5.9,
        fats: 13.42,
        carbohydrates: 3
      },
      caloricity: 159.38
    }
  ]
}

const SALAD_W_FRUITS: IDish = {
  id: 'kids-1.95',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.95.1',
      name: 'Салат фруктовый',
      components: {
        fruits: 45.2,
        sourCream: 5.6
      },
      macronutrients: {
        proteins: 0.84,
        fats: 2.48,
        carbohydrates: 9.94
      },
      caloricity: 66.46
    }
  ]
}

const CUCUMBER_FRESH: IDish = {
  id: 'kids-1.96',
  generalOutput: 40,
  variants: [
    {
      id: 'kids-1.96.1',
      name: 'Огурец свежий (порциями)',
      components: {
        vegetables: 40
      },
      macronutrients: {
        proteins: 0.32,
        fats: 0.08,
        carbohydrates: 2.08
      },
      caloricity: 10.34
    }
  ]
}

const CUCUMBER_PICKLED: IDish = {
  id: 'kids-1.97',
  generalOutput: 40,
  variants: [
    {
      id: 'kids-1.97.1',
      name: 'Огурец солёный (порциями)',
      components: {
        vegetables: 40
      },
      macronutrients: {
        proteins: 0.64,
        fats: 0.08,
        carbohydrates: 1.28
      },
      caloricity: 10.4
    }
  ]
}

const CUCUMBER_CANNED: IDish = {
  id: 'kids-1.98',
  generalOutput: 40,
  variants: [
    {
      id: 'kids-1.98.1',
      name: 'Огурец консервированный (порциями)',
      components: {
        vegetables: 40
      },
      macronutrients: {
        proteins: 0.64,
        fats: 0.08,
        carbohydrates: 1.28
      },
      caloricity: 10.4
    }
  ]
}

const TOMATOES_FRESH: IDish = {
  id: 'kids-1.99',
  generalOutput: 40,
  variants: [
    {
      id: 'kids-1.99.1',
      name: 'Помидоры свежие (порциями)',
      components: {
        vegetables: 40
      },
      macronutrients: {
        proteins: 0.88,
        fats: 0.16,
        carbohydrates: 3.04
      },
      caloricity: 15.58
    }
  ]
}

const CHOPPED_EGGS_W_BUTTER: IDish = {
  id: 'kids-1.100',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.100.1',
      name: 'Яйца рубленные с маслом',
      components: {
        butter: 10.5,
        eggs: 40,
      },
      macronutrients: {
        proteins: 9.14,
        fats: 25.42,
        carbohydrates: 0.68
      },
      caloricity: 150.74
    }
  ]
}

const VINAIGRETTE_W_VEGETABLES_W_GREEN_ONION: IDish = {
  id: 'kids-1.101',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.101.1',
      name: 'Винегрет овощной (с зеленым луком)',
      components: {
        potato: 13,
        oil: 2.5,
        vegetables: 35,
      },
      macronutrients: {
        proteins: 1.46,
        fats: 5.14,
        carbohydrates: 7.5
      },
      caloricity: 83.4
    }
  ]
}

const VINAIGRETTE_W_VEGETABLES_V1_W_ONION: IDish = {
  id: 'kids-1.102',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.102.1',
      name: 'Винегрет овощной (вариант 1 с репчатым луком)',
      components: {
        potato: 13,
        oil: 2.5,
        vegetables: 35,
      },
      macronutrients: {
        proteins: 1.46,
        fats: 5.14,
        carbohydrates: 8.34
      },
      caloricity: 87.4
    }
  ]
}

const VINAIGRETTE_W_VEGETABLES_V2_W_ONION: IDish = {
  id: 'kids-1.103',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.103.1',
      name: 'Винегрет овощной (вариант 2 с репчатым луком)',
      components: {
        potato: 12,
        oil: 5,
        vegetables: 33.5,
      },
      macronutrients: {
        proteins: 1.26,
        fats: 4.14,
        carbohydrates: 7.72
      },
      caloricity: 74.9
    }
  ]
}

const SEA_VINAIGRETTE: IDish = {
  id: 'kids-1.104',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.104.1',
      name: 'Винегрет морской',
      components: {
        oil: 4,
        potato: 6,
        sugar: 2,
        vegetables: 38.5,
      },
      macronutrients: {
        proteins: 1.2,
        fats: 8.12,
        carbohydrates: 9.64
      },
      caloricity: 116.34
    }
  ]
}

const BEETROOT_CAVIAR: IDish = {
  id: 'kids-1.105',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.105.1',
      name: 'Икра свекольная',
      components: {
        oil: 4.1,
        sugar: 0.9,
        tomatoPuree: 3.4,
        vegetables: 56.3
      },
      macronutrients: {
        proteins: 1.7,
        fats: 7.3,
        carbohydrates: 11.56
      },
      caloricity: 128.48
    }
  ]
}

const CARROTS_CAVIAR: IDish = {
  id: 'kids-1.106',
  generalOutput: 50,
  variants: [
    {
      id: 'kids-1.106.1',
      name: 'Икра морковная',
      components: {
        oil: 4.1,
        sugar: 0.9,
        tomatoPuree: 3.4,
        vegetables: 56.3
      },
      macronutrients: {
        proteins: 1.72,
        fats: 8.28,
        carbohydrates: 11.08
      },
      caloricity: 135.54
    }
  ]
}

const HERRING_W_GREEN_ONION: IDish = {//неправильный БЖУ в сборнике (исправил на БЖУ HERRING_W_ONION)
  id: 'kids-1.107',
  generalOutput: 40,
  variants: [
    {
      id: 'kids-1.107.1',
      name: 'Сельдь с луком (зеленым)',
      components: {
        fish: 20,
        oil: 4,
        vegetables: 16
      },
      macronutrients: {
        proteins: 8.08,
        fats: 15.04,
        carbohydrates: 2.92
      },
      caloricity: 180.54
    }
  ]
}

const HERRING_W_ONION: IDish = {
  id: 'kids-1.108',
  generalOutput: 40,
  variants: [
    {
      id: 'kids-1.108.1',
      name: 'Сельдь с луком (репчатым)',
      components: {
        fish: 20,
        oil: 4,
        vegetables: 16
      },
      macronutrients: {
        proteins: 8.08,
        fats: 15.04,
        carbohydrates: 2.92
      },
      caloricity: 180.54
    }
  ]
}

const FRIED_FISH_W_MARINADE: IDish = {
  id: 'kids-1.109',
  generalOutput: 60,
  variants: [
    {
      id: 'kids-1.109.1',
      name: 'Рыба жареная под маринадом',
      components: {
        fish: 36,
        flourWheat: 2,
        oil: 5.5,
        sugar: 1,
        tomatoPuree: 2.5,
        vegetables: 25.5,
      },
      macronutrients: {
        proteins: 11.38,
        fats: 10.12,
        carbohydrates: 8.26
      },
      caloricity: 176.1
    }
  ]
}

const FRIED_FISH_W_MARINADE_WO_TOMATO_PUREE: IDish = {
  id: 'kids-1.110',
  generalOutput: 60,
  variants: [
    {
      id: 'kids-1.110.1',
      name: 'Рыба жареная под маринадом (без томатного пюре)',
      components: {
        fish: 36,
        flourWheat: 3,
        oil: 5.5,
        sugar: 1,
        vegetables: 28.5,
      },
      macronutrients: {
        proteins: 11.1,
        fats: 10.12,
        carbohydrates: 6.88
      },
      caloricity: 169.58
    }
  ]
}