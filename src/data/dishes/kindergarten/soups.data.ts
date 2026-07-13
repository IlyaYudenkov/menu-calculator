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