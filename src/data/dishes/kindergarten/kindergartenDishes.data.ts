import type { IDish } from "@/model/dish.model";
import { SNACKS_KINDERGARTEN_ARRAY } from "./snacks.data";
import { BEANS_N_CORN_KINDERGARTEN_DISHES_ARRAY } from "./beansNCornDishes.data";
import { CEREAL_DISHES_KINDERGARTEN_ARRAY } from "./cerealDishes.data";
import { CURD_DISHES_KINDERGARTEN_ARRAY } from "./curdDishes.data";
import { DRINKS_KINDERGARTEN_ARRAY } from "./drinks.data";
import { EGGS_DISHES_KINDERGARTEN_ARRAY } from "./eggsDishes.data";
import { MEAT_DISHES_KINDERGARTEN_ARRAY } from "./meatDishes.data";
import { PASTA_PRODUCTS_KINDERGARTEN_DISHES_ARRAY } from "./pastaProductsDishes.data";

export const KINDERGARTEN_DISHES_ARRAY: IDish[] = [
    ...SNACKS_KINDERGARTEN_ARRAY,
    ...BEANS_N_CORN_KINDERGARTEN_DISHES_ARRAY,
    ...CEREAL_DISHES_KINDERGARTEN_ARRAY,
    ...CURD_DISHES_KINDERGARTEN_ARRAY,
    ...DRINKS_KINDERGARTEN_ARRAY,
    ...EGGS_DISHES_KINDERGARTEN_ARRAY,
    ...MEAT_DISHES_KINDERGARTEN_ARRAY,
    ...PASTA_PRODUCTS_KINDERGARTEN_DISHES_ARRAY
]