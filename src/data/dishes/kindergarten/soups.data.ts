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