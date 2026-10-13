import type { IDish } from "@/model/dish.model";
import { SNACKS_KINDERGARTEN_ARRAY } from "./snacks.data";
import { BEANS_N_CORN_DISHES_ARRAY } from "./beansNCornDishes.data";
import { CEREAL_DISHES_KINDERGARTEN_ARRAY } from "./cerealDishes.data";
import { CURD_DISHES_KINDERGARTEN_ARRAY } from "./curdDishes.data";
import { DRINKS_KINDERGARTEN_ARRAY } from "./drinks.data";

export const KINDERGARTEN_DISHES_ARRAY: IDish[] = [
    ...SNACKS_KINDERGARTEN_ARRAY,
    ...BEANS_N_CORN_DISHES_ARRAY,
    ...CEREAL_DISHES_KINDERGARTEN_ARRAY,
    ...CURD_DISHES_KINDERGARTEN_ARRAY,
    ...DRINKS_KINDERGARTEN_ARRAY
]