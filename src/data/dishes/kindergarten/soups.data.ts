import type { IDish } from "@/model/dish.model";

const CHICKEN_OR_MEAT_BROTH_W_CROUTONS: IDish = {
  id: 'kids-2.1',
  generalOutput: 210,
  variants: [
    {
      id: 'kids-2.1.1',
      name: 'Бульон куриный с гренками',
      components: {
        breadWheat: 12
      },
      macronutrients: {
        proteins: 0.82,
        fats: 0.13,
        carbohydrates: 2.47
      },
      caloricity: 14.86
    },
    {
      id: 'kids-2.1.2',
      name: 'Бульон мясной с гренками',
      components: {
        breadWheat: 12
      },
      macronutrients: {
        proteins: 0.91,
        fats: 0.22,
        carbohydrates: 2.47
      },
      caloricity: 15.72
    }
  ]
}

const BROTH_CHEBURASHKA: IDish = {
  id: 'kids-2.2',
  generalOutput: 215,
  variants: [
    {
      id: 'kids-2.1.1',
      name: 'Бульон "Чебурашка" (куриный)',
      components: {
        butter: 0.5,
        cereals: 2.5,
        eggs: 1.3,
        meat: 10,
        vegetables: 1,
      },
      macronutrients: {
        proteins: 1.36,
        fats: 0.47,
        carbohydrates: 0.79
      },
      caloricity: 13.18
    },
    {
      id: 'kids-2.1.2',
      name: 'Бульон "Чебурашка" (мясной)',
      components: {
        butter: 0.5,
        cereals: 2.5,
        eggs: 1.3,
        meat: 10,
        vegetables: 1,
      },
      macronutrients: {
        proteins: 1.45,
        fats: 0.55,
        carbohydrates: 0.79
      },
      caloricity: 14.01
    }
  ]
}

const BORSHT_W_FRESH_CABBAGE_N_POTATOES_V1: IDish = {
  id: 'kids-2.3',
  variants: [
    {
      id: 'kids-2.3.1',
      name: 'Борщ с капустой (свежей) и картофелем (вариант 1)',
      defaultOutput: 200,
      components: {
        butter: 2,
        oil: 2,
        potato: 16,
        sugar: 2,
        tomatoPuree: 2,
        vegetables: 66,

      },
      macronutrients: {
        proteins: 0.63,
        fats: 1.66,
        carbohydrates: 4.485
      },
      caloricity: 37.455
    },
    {
      id: 'kids-2.3.2',
      name: 'Борщ с капустой (свежей) и картофелем (вариант 1) со сметаной',
      defaultOutput: 204,
      components: {
        butter: 2,
        oil: 2,
        potato: 16,
        sugar: 2,
        sourCream: 4,
        tomatoPuree: 2,
        vegetables: 66,
      },
      macronutrients: {
        proteins: 0.67,
        fats: 1.97,
        carbohydrates: 4.46
      },
      caloricity: 40.35
    },
    {
      id: 'kids-2.3.3',
      name: 'Борщ с капустой (свежей) и картофелем (вариант 1) со сметаной и говядиной отварной протертой',
      defaultOutput: 219,
      components: {
        butter: 2,
        meat: 15,
        oil: 2,
        potato: 16,
        sugar: 2,
        sourCream: 4,
        tomatoPuree: 2,
        vegetables: 66,
      },
      macronutrients: {
        proteins: 2.65,
        fats: 2.17,
        carbohydrates: 4.46
      },
      caloricity: 48.9
    },
    {
      id: 'kids-2.3.4',
      name: 'Борщ с капустой (свежей) и картофелем (вариант 1) со сметаной и отварной птицей',
      defaultOutput: 219,
      components: {
        butter: 2,
        oil: 2,
        potato: 16,
        poultry: 15,
        sugar: 2,
        sourCream: 4,
        tomatoPuree: 2,
        vegetables: 66,
      },
      macronutrients: {
        proteins: 2.52,
        fats: 3.45,
        carbohydrates: 4.2
      },
      caloricity: 56.4
    }
  ]
}

const BORSHT_W_FRESH_CABBAGE_N_POTATOES_V2: IDish = {
  id: 'kids-2.4',
  variants: [
    {
      id: 'kids-2.4.1',
      name: 'Борщ с капустой (свежей) и картофелем (вариант 2)',
      defaultOutput: 200,
      components: {
        butter: 4,
        potato: 16,
        sugar: 2,
        tomatoPuree: 2,
        vegetables: 66
      },
      macronutrients: {
        proteins: 0.635,
        fats: 1.505,
        carbohydrates: 4.495
      },
      caloricity: 36.095
    },
    {
      id: 'kids-2.4.2',
      name: 'Борщ с капустой (свежей) и картофелем (вариант 2) со сметаной',
      defaultOutput: 204,
      components: {
        butter: 4,
        potato: 16,
        sourCream: 4,
        sugar: 2,
        tomatoPuree: 2,
        vegetables: 66
      },
      macronutrients: {
        proteins: 0.67,
        fats: 1.82,
        carbohydrates: 4.46
      },
      caloricity: 39.02
    },
    {
      id: 'kids-2.4.3',
      name: 'Борщ с капустой (свежей) и картофелем (вариант 2) со сметаной и говядиной отварной протертой',
      defaultOutput: 219,
      components: {
        butter: 4,
        meat: 15,
        potato: 16,
        sourCream: 4,
        sugar: 2,
        tomatoPuree: 2,
        vegetables: 66
      },
      macronutrients: {
        proteins: 2.66,
        fats: 2.03,
        carbohydrates: 4.46
      },
      caloricity: 47.65
    },
    {
      id: 'kids-2.4.4',
      name: 'Борщ с капустой (свежей) и картофелем (вариант 2) со сметаной и отварной птицей',
      defaultOutput: 219,
      components: {
        butter: 4,
        potato: 16,
        poultry: 15,
        sourCream: 4,
        sugar: 2,
        tomatoPuree: 2,
        vegetables: 66
      },
      macronutrients: {
        proteins: 2.53,
        fats: 3.32,
        carbohydrates: 4.21
      },
      caloricity: 55.15
    }
  ]
}

const BORSHT_W_SAUERKRAUT_CABBAGE_N_POTATOES: IDish = {
  id: 'kids-2.5',
  variants: [
    {
      id: 'kids-2.5.1',
      name: 'Борщ с капустой (квашеной) и картофелем',
      defaultOutput: 200,
      components: {
        butter: 2,
        oil: 2,
        potato: 16,
        sugar: 2,
        tomatoPuree: 2,
        vegetables: 62
      },
      macronutrients: {
        proteins: 0.595,
        fats: 1.65,
        carbohydrates: 4.265
      },
      caloricity: 36.34
    },
    {
      id: 'kids-2.5.2',
      name: 'Борщ с капустой (квашеной) и картофелем со сметаной',
      defaultOutput: 204,
      components: {
        butter: 2,
        oil: 2,
        potato: 16,
        sourCream: 4,
        sugar: 2,
        tomatoPuree: 2,
        vegetables: 62
      },
      macronutrients: {
        proteins: 0.63,
        fats: 1.97,
        carbohydrates: 4.24
      },
      caloricity: 39.26
    },
    {
      id: 'kids-2.5.3',
      name: 'Борщ с капустой (квашеной) и картофелем со сметаной и говядиной отварной протертой',
      defaultOutput: 219,
      components: {
        butter: 2,
        meat: 15,
        oil: 2,
        potato: 16,
        sourCream: 4,
        sugar: 2,
        tomatoPuree: 2,
        vegetables: 62
      },
      macronutrients: {
        proteins: 2.62,
        fats: 2.16,
        carbohydrates: 4.24
      },
      caloricity: 47.87
    },
    {
      id: 'kids-2.5.4',
      name: 'Борщ с капустой (квашеной) и картофелем со сметаной и отварной птицей',
      defaultOutput: 219,
      components: {
        butter: 2,
        oil: 2,
        potato: 16,
        poultry: 15,
        sourCream: 4,
        sugar: 2,
        tomatoPuree: 2,
        vegetables: 62
      },
      macronutrients: {
        proteins: 2.49,
        fats: 3.45,
        carbohydrates: 4
      },
      caloricity: 55.4
    },
  ]
}

const BORSHT_W_POTATOES_V1: IDish = {
  id: 'kids-2.6',
  variants: [
    {
      id: 'kids-2.6.1',
      name: 'Борщ с картофелем (вариант 1)',
      defaultOutput: 200,
      components: {
        butter: 2,
        oil: 2,
        potato: 40,
        tomatoPuree: 4,
        sugar: 1,
        vegetables: 50,
      },
      macronutrients: {
        proteins: 0.745,
        fats: 1.695,
        carbohydrates: 5.565
      },
      caloricity: 40.57
    },
    {
      id: 'kids-2.6.2',
      name: 'Борщ с картофелем со сметаной (вариант 1)',
      defaultOutput: 204,
      components: {
        butter: 2,
        oil: 2,
        potato: 40,
        tomatoPuree: 4,
        sourCream: 4,
        sugar: 1,
        vegetables: 50,
      },
      macronutrients: {
        proteins: 0.78,
        fats: 2,
        carbohydrates: 5.51
      },
      caloricity: 43.41
    },
    {
      id: 'kids-2.6.3',
      name: 'Борщ с картофелем со сметаной и отварной птицей (вариант 1)',
      defaultOutput: 219,
      components: {
        butter: 2,
        meat: 15,
        oil: 2,
        potato: 40,
        tomatoPuree: 4,
        sourCream: 4,
        sugar: 1,
        vegetables: 50,
      },
      macronutrients: {
        proteins: 2.76,
        fats: 2.2,
        carbohydrates: 5.51
      },
      caloricity: 57.74
    },
    {
      id: 'kids-2.6.4',
      name: 'Борщ с картофелем со сметаной и говядиной отварной протертой (вариант 1)',
      defaultOutput: 219,
      components: {
        butter: 2,
        oil: 2,
        potato: 40,
        poultry: 15,
        tomatoPuree: 4,
        sourCream: 4,
        sugar: 1,
        vegetables: 50,
      },
      macronutrients: {
        proteins: 2.63,
        fats: 3.48,
        carbohydrates: 5.19
      },
      caloricity: 59.23
    }
  ]
}

const BORSHT_W_POTATOES_V2: IDish = {
  id: 'kids-2.7',
  variants: [
    {
      id: 'kids-2.7.1',
      name: 'Борщ с картофелем (вариант 2)',
      defaultOutput: 200,
      components: {
        oil: 4,
        potato: 40,
        tomatoPuree: 2,
        sugar: 1,
        vegetables: 50,
      },
      macronutrients: {
        proteins: 0.74,
        fats: 1.845,
        carbohydrates: 5.56
      },
      caloricity: 41.93
    },
    {
      id: 'kids-2.7.2',
      name: 'Борщ с картофелем со сметаной (вариант 2)',
      defaultOutput: 204,
      components: {
        oil: 4,
        potato: 40,
        tomatoPuree: 2,
        sourCream: 4,
        sugar: 1,
        vegetables: 50,
      },
      macronutrients: {
        proteins: 0.77,
        fats: 2.16,
        carbohydrates: 5.5
      },
      caloricity: 44.74
    },
    {
      id: 'kids-2.7.3',
      name: 'Борщ с картофелем со сметаной и говядиной отварной (вариант 2)',
      defaultOutput: 219,
      components: {
        meat: 15,
        oil: 4,
        potato: 40,
        tomatoPuree: 2,
        sourCream: 4,
        sugar: 1,
        vegetables: 50,
      },
      macronutrients: {
        proteins: 2.75,
        fats: 2.34,
        carbohydrates: 5.13
      },
      caloricity: 52.98
    },
    {
      id: 'kids-2.7.4',
      name: 'Борщ с картофелем со сметаной и птицей отварной (вариант 2)',
      defaultOutput: 219,
      components: {
        oil: 4,
        potato: 40,
        poultry: 15,
        tomatoPuree: 2,
        sourCream: 4,
        sugar: 1,
        vegetables: 50,
      },
      macronutrients: {
        proteins: 2.62,
        fats: 3.63,
        carbohydrates: 5.19
      },
      caloricity: 60.48
    }
  ]
}

const BORSHT_W_SORREL: IDish = {
  id: 'kids-2.8',
  variants: [
    {
      id: 'kids-2.8.1',
      name: 'Борщ со щавелем',
      defaultOutput: 200,
      components: {
        flourWheat: 1,
        oil: 4,
        potato: 40,
        sugar: 1,
        vegetables: 58.5,
      },
      macronutrients: {
        proteins: 0.78,
        fats: 1.85,
        carbohydrates: 5.455
      },
      caloricity: 41.735
    },
    {
      id: 'kids-2.8.2',
      name: 'Борщ со щавелем со щавелем',
      defaultOutput: 204,
      components: {
        flourWheat: 1,
        oil: 4,
        potato: 40,
        sourCream: 4,
        sugar: 1,
        vegetables: 58.5,
      },
      macronutrients: {
        proteins: 0.84,
        fats: 2.16,
        carbohydrates: 5.4
      },
      caloricity: 44.54
    }
  ]
}

const BORSHT_PO_SLUCKI_V1: IDish = {
  id: 'kids-2.9',
  variants: [
    {
      id: 'kids-2.9.1',
      name: 'Борщ по-слуцки (вариант 1)',
      defaultOutput: 200,
      components: {
        butter: 2,
        potato: 22,
        sugar: 1.4,
        tomatoPuree: 3,
        vegetables: 83.4
      },
      macronutrients: {
        proteins: 0.79,
        fats: 0.78,
        carbohydrates: 4.74
      },
      caloricity: 29.615
    },
    {
      id: 'kids-2.9.2',
      name: 'Борщ по-слуцки со сметаной (вариант 1)',
      defaultOutput: 204,
      components: {
        butter: 2,
        potato: 22,
        sourCream: 4,
        sugar: 1.4,
        tomatoPuree: 3,
        vegetables: 83.4
      },
      macronutrients: {
        proteins: 0.82,
        fats: 1.11,
        carbohydrates: 4.71
      },
      caloricity: 32.7
    },
    {
      id: 'kids-2.9.3',
      name: 'Борщ по-слуцки со сметаной и говядиной отварной протертой (вариант 1)',
      defaultOutput: 219,
      components: {
        butter: 2,
        meat: 15,
        potato: 22,
        sourCream: 4,
        sugar: 1.4,
        tomatoPuree: 3,
        vegetables: 83.4
      },
      macronutrients: {
        proteins: 2.8,
        fats: 1.37,
        carbohydrates: 4.38
      },
      caloricity: 41.74
    },
    {
      id: 'kids-2.9.4',
      name: 'Борщ по-слуцки со сметаной и птицей отварной (вариант 1)',
      defaultOutput: 219,
      components: {
        butter: 2,
        potato: 22,
        poultry: 15,
        sourCream: 4,
        sugar: 1.4,
        tomatoPuree: 3,
        vegetables: 83.4
      },
      macronutrients: {
        proteins: 2.67,
        fats: 2.65,
        carbohydrates: 4.43
      },
      caloricity: 49.23
    }
  ]
}

const BORSHT_LETNIY_W_TOMATOES: IDish = {
  id: 'kids-2.10',
  variants: [
    {
      id: 'kids-2.10.1',
      name: 'Борщ летний (с помидорами)',
      defaultOutput: 200,
      components: {
        oil: 4,
        potato: 40,
        vegetables: 72,
      },
      macronutrients: {
        proteins: 0.795,
        fats: 1.865,
        carbohydrates: 5.43
      },
      caloricity: 43.465
    },
    {
      id: 'kids-2.10.2',
      name: 'Борщ летний со сметаной (с помидорами)',
      defaultOutput: 204,
      components: {
        oil: 4,
        potato: 40,
        sourCream: 4,
        vegetables: 72,
      },
      macronutrients: {
        proteins: 0.83,
        fats: 2.17,
        carbohydrates: 5.38
      },
      caloricity: 46.25
    },
  ]
}

const BORSHT_LETNIY_W_TOMATO_PUREE: IDish = {
  id: 'kids-2.11',
  variants: [
    {
      id: 'kids-2.11.1',
      name: 'Борщ летний (с томатным пюре)',
      defaultOutput: 200,
      components: {
        oil: 4,
        potato: 40,
        tomatoPuree: 3,
        vegetables: 56,
      },
      macronutrients: {
        proteins: 0.765,
        fats: 1.85,
        carbohydrates: 5.32
      },
      caloricity: 42.94
    },
    {
      id: 'kids-2.11.2',
      name: 'Борщ летний со сметаной (с томатным пюре)',
      defaultOutput: 204,
      components: {
        oil: 4,
        potato: 40,
        sourCream: 4,
        tomatoPuree: 3,
        vegetables: 56,
      },
      macronutrients: {
        proteins: 0.8,
        fats: 2.16,
        carbohydrates: 5.27
      },
      caloricity: 45.74
    }
  ]
}

const SHCHI_W_FRESH_CABBAGE: IDish = {
  id: 'kids-2.12',
  variants: [
    {
      id: 'kids-2.12.1',
      name: 'Щи из свежей капусты',
      defaultOutput: 200,
      components: {
        butter: 2,
        vegetables: 90,
      },
      macronutrients: {
        proteins: 0.67,
        fats: 0.76,
        carbohydrates: 2.79
      },
      caloricity: 20.58
    },
    {
      id: 'kids-2.12.2',
      name: 'Щи из свежей капусты со сметаной',
      defaultOutput: 204,
      components: {
        butter: 2,
        sourCream: 4,
        vegetables: 90,
      },
      macronutrients: {
        proteins: 0.71,
        fats: 1.1,
        carbohydrates: 2.3
      },
      caloricity: 23.8
    },
    {
      id: 'kids-2.12.3',
      name: 'Щи из свежей капусты со сметаной и говядиной отварной протертой',
      defaultOutput: 219,
      components: {
        butter: 2,
        meat: 15,
        sourCream: 4,
        vegetables: 90,
      },
      macronutrients: {
        proteins: 2.69,
        fats: 1.35,
        carbohydrates: 2.14
      },
      caloricity: 33.47
    },
    {
      id: 'kids-2.12.4',
      name: 'Щи из свежей капусты со сметаной и отварной птицей',
      defaultOutput: 219,
      components: {
        butter: 2,
        poultry: 15,
        sourCream: 4,
        vegetables: 90,
      },
      macronutrients: {
        proteins: 2.56,
        fats: 2.63,
        carbohydrates: 2.19
      },
      caloricity: 40.98
    }
  ]
}

const SHCHI_W_FRESH_CABBAGE_N_POTATOES_V1: IDish = {
  id: 'kids-2.13',
  variants: [
    {
      id: 'kids-2.13.1',
      name: 'Щи из свежей капусты с картофелем (вариант 1)',
      defaultOutput: 200,
      components: {
        butter: 2,
        oil: 2,
        potato: 30,
        vegetables: 66,
      },
      macronutrients: {
        proteins: 0.765,
        fats: 1.685,
        carbohydrates: 3.875
      },
      caloricity: 34.785
    },
    {
      id: 'kids-2.13.2',
      name: 'Щи из свежей капусты с картофелем со сметаной (вариант 1)',
      defaultOutput: 204,
      components: {
        butter: 2,
        oil: 2,
        potato: 30,
        sourCream: 4,
        vegetables: 66,
      },
      macronutrients: {
        proteins: 0.8,
        fats: 2,
        carbohydrates: 3.85
      },
      caloricity: 37.73
    },
    {
      id: 'kids-2.13.3',
      name: 'Щи из свежей капусты с картофелем со сметаной и говядиной отварной протертой (вариант 1)',
      defaultOutput: 219,
      components: {
        butter: 2,
        meat: 15,
        oil: 2,
        potato: 30,
        sourCream: 4,
        vegetables: 66,
      },
      macronutrients: {
        proteins: 2.78,
        fats: 2.2,
        carbohydrates: 3.59
      },
      caloricity: 46.45
    },
    {
      id: 'kids-2.13.4',
      name: 'Щи из свежей капусты с картофелем со сметаной и отварной птицей (вариант 1)',
      defaultOutput: 219,
      components: {
        butter: 2,
        oil: 2,
        potato: 30,
        poultry: 15,
        sourCream: 4,
        vegetables: 66,
      },
      macronutrients: {
        proteins: 2.64,
        fats: 3.47,
        carbohydrates: 3.64
      },
      caloricity: 53.95
    }
  ]
}

const SHCHI_W_FRESH_CABBAGE_N_POTATOES_V2: IDish = {
  id: 'kids-2.14',
  variants: [
    {
      id: 'kids-2.14.1',
      name: 'Щи из свежей капусты с картофелем (вариант 2)',
      defaultOutput: 200,
      components: {
        oil: 4,
        potato: 30,
        vegetables: 66,
      },
      macronutrients: {
        proteins: 0.76,
        fats: 1.835,
        carbohydrates: 3.865
      },
      caloricity: 36.14
    },
    {
      id: 'kids-2.14.2',
      name: 'Щи из свежей капусты с картофелем со сметаной (вариант 2)',
      defaultOutput: 204,
      components: {
        oil: 4,
        potato: 30,
        sourCream: 4,
        vegetables: 66,
      },
      macronutrients: {
        proteins: 0.8,
        fats: 2.15,
        carbohydrates: 3.85
      },
      caloricity: 39.07
    },
    {
      id: 'kids-2.14.3',
      name: 'Щи из свежей капусты с картофелем со сметаной и говядиной отварной протертой (вариант 2)',
      defaultOutput: 219,
      components: {
        meat: 15,
        oil: 4,
        potato: 30,
        sourCream: 4,
        vegetables: 66,
      },
      macronutrients: {
        proteins: 2.77,
        fats: 2.33,
        carbohydrates: 3.58
      },
      caloricity: 47.7
    },
    {
      id: 'kids-2.14.4',
      name: 'Щи из свежей капусты с картофелем со сметаной и отварной птицей (вариант 2)',
      defaultOutput: 219,
      components: {
        oil: 4,
        potato: 30,
        poultry: 15,
        sourCream: 4,
        vegetables: 66,
      },
      macronutrients: {
        proteins: 2.64,
        fats: 3.62,
        carbohydrates: 3.63
      },
      caloricity: 55.2
    }
  ]
}

const SHCHI_W_SAUERKRAUT_N_POTATOES: IDish = {
  id: 'kids-2.15',
  variants: [
    {
      id: 'kids-2.15.1',
      name: 'Щи из квашеной капусты с картофелем',
      defaultOutput: 200,
      components: {
        oil: 2,
        potato: 20,
        vegetables: 58,
      },
      macronutrients: {
        proteins: 0.61,
        fats: 0.92,
        carbohydrates: 2.515
      },
      caloricity: 21.76
    },
    {
      id: 'kids-2.15.2',
      name: 'Щи из квашеной капусты с картофелем со сметаной',
      defaultOutput: 204,
      components: {
        oil: 2,
        potato: 20,
        sourCream: 4,
        vegetables: 58,
      },
      macronutrients: {
        proteins: 0.64,
        fats: 1.25,
        carbohydrates: 2.52
      },
      caloricity: 24.96
    },
    {
      id: 'kids-2.15.3',
      name: 'Щи из квашеной капусты с картофелем и говядиной отварной протертой',
      defaultOutput: 219,
      components: {
        meat: 15,
        oil: 2,
        potato: 20,
        sourCream: 4,
        vegetables: 58,
      },
      macronutrients: {
        proteins: 2.63,
        fats: 1.49,
        carbohydrates: 2.35
      },
      caloricity: 34.55
    },
  ]
}

const SHCHI_W_FRESH_CABBAGE_N_APPLES_V1: IDish = {
  id: 'kids-2.16',
  variants: [
    {
      id: 'kids-2.16.1',
      name: 'Щи из свежей капусты с яблоками (вариант 1)',
      defaultOutput: 200,
      components: {
        fruits: 14,
        oil: 4,
        potato: 24,
        vegetables: 80,
      },
      macronutrients: {
        proteins: 0.81,
        fats: 1.855,
        carbohydrates: 4.5
      },
      caloricity: 39.82
    },
    {
      id: 'kids-2.16.2',
      name: 'Щи из свежей капусты с яблоками со сметаной (вариант 1)',
      defaultOutput: 204,
      components: {
        fruits: 14,
        oil: 4,
        potato: 24,
        sourCream: 4,
        vegetables: 80,
      },
      macronutrients: {
        proteins: 0.84,
        fats: 2.17,
        carbohydrates: 4.47
      },
      caloricity: 42.68
    },
    {
      id: 'kids-2.16.3',
      name: 'Щи из свежей капусты с яблоками со сметаной и говядиной отварной протертой (вариант 1)',
      defaultOutput: 219,
      components: {
        fruits: 14,
        meat: 15,
        oil: 4,
        potato: 24,
        sourCream: 4,
        vegetables: 80,
      },
      macronutrients: {
        proteins: 2.82,
        fats: 2.35,
        carbohydrates: 4.16
      },
      caloricity: 51.05
    },
  ]
}

const SHCHI_W_FRESH_CABBAGE_N_APPLES_V2: IDish = {
  id: 'kids-2.17',
  variants: [
    {
      id: 'kids-2.17.1',
      name: 'Щи из свежей капусты с яблоками (вариант 2)',
      defaultOutput: 200,
      components: {
        butter: 2,
        fruits: 14,
        oil: 2,
        potato: 24,
        vegetables: 80,
      },
      macronutrients: {
        proteins: 0.815,
        fats: 1.705,
        carbohydrates: 4.505
      },
      caloricity: 38.46
    },
    {
      id: 'kids-2.17.2',
      name: 'Щи из свежей капусты с яблоками со сметаной (вариант 2)',
      defaultOutput: 204,
      components: {
        butter: 2,
        fruits: 14,
        oil: 2,
        potato: 24,
        sourCream: 4,
        vegetables: 80,
      },
      macronutrients: {
        proteins: 0.85,
        fats: 2.01,
        carbohydrates: 4.48
      },
      caloricity: 37.7
    },
    {
      id: 'kids-2.17.3',
      name: 'Щи из свежей капусты с яблоками со сметаной и говядиной отварной протертой (вариант 2)',
      defaultOutput: 219,
      components: {
        butter: 2,
        fruits: 14,
        meat: 15,
        oil: 2,
        potato: 24,
        sourCream: 4,
        vegetables: 80,
      },
      macronutrients: {
        proteins: 2.82,
        fats: 2.21,
        carbohydrates: 4.17
      },
      caloricity: 49.81
    }
  ]
}

const RASSOLNIK_DOMASHNIY_V1: IDish = {
  id: 'kids-2.18',
  variants: [
    {
      id: 'kids-2.18.1',
      name: 'Рассольник домашний (вариант 1)',
      defaultOutput: 200,
      components: {
        oil: 4,
        potato: 60,
        vegetables: 44,
      },
      macronutrients: {
        proteins: 0.8,
        fats: 1.88,
        carbohydrates: 5.415
      },
      caloricity: 42.03
    },
    {
      id: 'kids-2.18.2',
      name: 'Рассольник домашний со сметаной (вариант 1)',
      defaultOutput: 204,
      components: {
        oil: 4,
        potato: 60,
        sourCream: 4,
        vegetables: 44,
      },
      macronutrients: {
        proteins: 0.83,
        fats: 2.18,
        carbohydrates: 5.36
      },
      caloricity: 44.84
    },
    {
      id: 'kids-2.18.3',
      name: 'Рассольник домашний со сметаной и говядиной отварной протертой (вариант 1)',
      defaultOutput: 219,
      components: {
        meat: 15,
        oil: 4,
        potato: 60,
        sourCream: 4,
        vegetables: 44,
      },
      macronutrients: {
        proteins: 2.81,
        fats: 2.37,
        carbohydrates: 5
      },
      caloricity: 53.07
    },
  ]
}

const RASSOLNIK_DOMASHNIY_V2: IDish = {
  id: 'kids-2.19',
  variants: [
    {
      id: 'kids-2.19.1',
      name: 'Рассольник домашний (вариант 2)',
      defaultOutput: 200,
      components: {
        butter: 2,
        oil: 2,
        potato: 60,
        vegetables: 44,
      },
      macronutrients: {
        proteins: 0.805,
        fats: 1.725,
        carbohydrates: 5.42
      },
      caloricity: 40.67
    },
    {
      id: 'kids-2.19.2',
      name: 'Рассольник домашний со сметаной (вариант 2)',
      defaultOutput: 204,
      components: {
        butter: 2,
        oil: 2,
        potato: 60,
        sourCream: 4,
        vegetables: 44,
      },
      macronutrients: {
        proteins: 0.84,
        fats: 2.04,
        carbohydrates: 5.37
      },
      caloricity: 43.5
    },
    {
      id: 'kids-2.19.3',
      name: 'Рассольник домашний со сметаной (вариант 2)',
      defaultOutput: 219,
      components: {
        butter: 2,
        meat: 15,
        oil: 2,
        potato: 60,
        sourCream: 4,
        vegetables: 44,
      },
      macronutrients: {
        proteins: 2.81,
        fats: 2.23,
        carbohydrates: 5
      },
      caloricity: 51.83
    }
  ]
}

const RASSOLNIK_LENINGRADSKIY_W_OATMEAL: IDish = {
  id: 'kids-2.20',
  variants: [
    {
      id: 'kids-2.20.1',
      name: 'Рассольник ленинградский (с овсяной крупой)',
      defaultOutput: 200,
      components: {
        butter: 2,
        cereals: 4,
        oil: 2,
        potato: 60,
        vegetables: 24,
      },
      macronutrients: {
        proteins: 0.85,
        fats: 1.825,
        carbohydrates: 5.81
      },
      caloricity: 43.16
    },
    {
      id: 'kids-2.20.2',
      name: 'Рассольник ленинградский (с овсяной крупой) со сметаной',
      defaultOutput: 204,
      components: {
        butter: 2,
        cereals: 4,
        oil: 2,
        potato: 60,
        sourCream: 4,
        vegetables: 24,
      },
      macronutrients: {
        proteins: 0.88,
        fats: 2.14,
        carbohydrates: 5.75
      },
      caloricity: 45.95
    },
    {
      id: 'kids-2.20.3',
      name: 'Рассольник ленинградский (с овсяной крупой) со сметаной и говядиной отварной протертой',
      defaultOutput: 219,
      components: {
        butter: 2,
        cereals: 4,
        meat: 15,
        oil: 2,
        potato: 60,
        sourCream: 4,
        vegetables: 24,
      },
      macronutrients: {
        proteins: 2.85,
        fats: 2.32,
        carbohydrates: 5.36
      },
      caloricity: 54.11
    }
  ]
}

const RASSOLNIK_LENINGRADSKIY_W_PEARL_BARLEY: IDish = {
  id: 'kids-2.21',
  variants: [
    {
      id: 'kids-2.21.1',
      name: 'Рассольник ленинградский (с перловой крупой)',
      defaultOutput: 200,
      components: {
        butter: 2,
        cereals: 4,
        oil: 2,
        potato: 60,
        vegetables: 24,
      },
      macronutrients: {
        proteins: 0.82,
        fats: 1.74,
        carbohydrates: 6.115
      },
      caloricity: 43.465
    },
    {
      id: 'kids-2.21.2',
      name: 'Рассольник ленинградский (с перловой крупой) со сметаной',
      defaultOutput: 204,
      components: {
        butter: 2,
        cereals: 4,
        oil: 2,
        potato: 60,
        vegetables: 24,
      },
      macronutrients: {
        proteins: 0.85,
        fats: 2.05,
        carbohydrates: 6.05
      },
      caloricity: 46.25
    },
    {
      id: 'kids-2.21.3',
      name: 'Рассольник ленинградский (с перловой крупой) со сметаной и говядиной отварной протертой',
      defaultOutput: 219,
      components: {
        butter: 2,
        cereals: 4,
        oil: 2,
        potato: 60,
        vegetables: 24,
      },
      macronutrients: {
        proteins: 2.83,
        fats: 2.24,
        carbohydrates: 5.63
      },
      caloricity: 54.4
    }
  ]
}

const RASSOLNIK_LENINGRADSKIY_W_RICE_GROATS_V1: IDish = {
  id: 'kids-2.22',
  variants: [
    {
      id: 'kids-2.22.1',
      name: 'Рассольник ленинградский (с рисовой крупой) (вариант 1)',
      defaultOutput: 200,
      components: {
        butter: 2,
        cereals: 4,
        oil: 2,
        potato: 60,
        vegetables: 24,
      },
      macronutrients: {
        proteins: 0.775,
        fats: 1.735,
        carbohydrates: 6.205
      },
      caloricity: 43.465
    },
    {
      id: 'kids-2.22.2',
      name: 'Рассольник ленинградский (с рисовой крупой) со сметаной (вариант 1)',
      defaultOutput: 204,
      components: {
        butter: 2,
        cereals: 4,
        oil: 2,
        sourCream: 4,
        potato: 60,
        vegetables: 24,
      },
      macronutrients: {
        proteins: 0.81,
        fats: 2.05,
        carbohydrates: 6.14
      },
      caloricity: 46.42
    },
    {
      id: 'kids-2.22.3',
      name: 'Рассольник ленинградский (с рисовой крупой) со сметаной и говядиной отварной протертой (вариант 1)',
      defaultOutput: 219,
      components: {
        butter: 2,
        cereals: 4,
        meat: 15,
        oil: 2,
        sourCream: 4,
        potato: 60,
        vegetables: 24,
      },
      macronutrients: {
        proteins: 2.79,
        fats: 2.24,
        carbohydrates: 5.72
      },
      caloricity: 54.55
    }
  ]
}

const RASSOLNIK_LENINGRADSKIY_W_RICE_GROATS_V2: IDish = {
  id: 'kids-2.23',
  variants: [
    {
      id: 'kids-2.23.1',
      name: 'Рассольник ленинградский (с рисовой крупой) (вариант 2)',
      defaultOutput: 200,
      components: {
        cereals: 4,
        oil: 4,
        potato: 60,
        vegetables: 24,
      },
      macronutrients: {
        proteins: 0.775,
        fats: 1.89,
        carbohydrates: 6.195
      },
      caloricity: 45.005
    },
    {
      id: 'kids-2.23.2',
      name: 'Рассольник ленинградский (с рисовой крупой) со сметаной (вариант 2)',
      defaultOutput: 204,
      components: {
        cereals: 4,
        oil: 4,
        sourCream: 4,
        potato: 60,
        vegetables: 24,
      },
      macronutrients: {
        proteins: 0.8,
        fats: 2.2,
        carbohydrates: 6.13
      },
      caloricity: 47.76
    },
    {
      id: 'kids-2.23.3',
      name: 'Рассольник ленинградский (с рисовой крупой) со сметаной и говядиной отварной протертой (вариант 2)',
      defaultOutput: 219,
      components: {
        cereals: 4,
        meat: 15,
        oil: 4,
        sourCream: 4,
        potato: 60,
        vegetables: 24,
      },
      macronutrients: {
        proteins: 2.78,
        fats: 2.38,
        carbohydrates: 5.71
      },
      caloricity: 55.79
    }
  ]
}

const SOUP_W_POTATOES_V1: IDish = {
  id: 'kids-2.24',
  variants: [
    {
      id: 'kids-2.24.1',
      name: 'Суп картофельный (вариант 1)',
      defaultOutput: 200,
      components: {
        butter: 2,
        potato: 90,
        vegetables: 16
      },
      macronutrients: {
        proteins: 0.9,
        fats: 0.89,
        carbohydrates: 7.195
      },
      caloricity: 39.61
    },
    {
      id: 'kids-2.24.2',
      name: 'Суп картофельный (вариант 1) с говядиной отварной протертой',
      defaultOutput: 215,
      components: {
        butter: 2,
        meat: 15,
        potato: 90,
        vegetables: 16
      },
      macronutrients: {
        proteins: 2.91,
        fats: 1.16,
        carbohydrates: 6.7
      },
      caloricity: 48.36
    }
  ]
}

const SOUP_W_POTATOES_V2: IDish = {
  id: 'kids-2.25',
  variants: [
    {
      id: 'kids-2.25.1',
      name: 'Суп картофельный (вариант 2)',
      defaultOutput: 200,
      components: {
        oil: 2,
        potato: 90,
        vegetables: 16
      },
      macronutrients: {
        proteins: 0.895,
        fats: 1.04,
        carbohydrates: 7.19
      },
      caloricity: 40.97
    },
    {
      id: 'kids-2.25.2',
      name: 'Суп картофельный (вариант 2) с говядиной отварной протертой',
      defaultOutput: 215,
      components: {
        meat: 15,
        oil: 2,
        potato: 90,
        vegetables: 16
      },
      macronutrients: {
        proteins: 2.9,
        fats: 1.31,
        carbohydrates: 6.69
      },
      caloricity: 49.62
    }
  ]
}

const SOUP_LUBITELSKIY: IDish = {
  id: 'kids-2.26',
  variants: [
    {
      id: 'kids-2.26.1',
      name: 'Суп любительский',
      defaultOutput: 200,
      components: {
        butter: 2,
        cereals: 20,
        potato: 50,
        vegetables: 20,
      },
      macronutrients: {
        proteins: 1.69,
        fats: 1.11,
        carbohydrates: 9.995
      },
      caloricity: 57.41
    },
    {
      id: 'kids-2.26.2',
      name: 'Суп любительский с говядиной отварной протертой',
      defaultOutput: 215,
      components: {
        butter: 2,
        cereals: 20,
        meat: 15,
        potato: 50,
        vegetables: 20,
      },
      macronutrients: {
        proteins: 3.64,
        fats: 1.37,
        carbohydrates: 9.3
      },
      caloricity: 64.92
    }
  ]
}