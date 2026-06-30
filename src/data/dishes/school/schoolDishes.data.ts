import type { IDish } from "@/model/dish.model";
import { SNACKS_ARRAY } from "./snacks.data";
import { SOUPS_ARRAY } from "./soups.data";
import { POTATO_N_VEGETABLES_DISHES_ARRAY } from "./potatoNVegetablesDishes.data";
import { EGGS_DISHES_ARRAY } from "./eggsDishes.data";
import { CURD_DISHES_ARRAY } from "./curdDishes.data";
import { SIDE_DISHES_ARRAY } from "./sideDishes.data";
import { SAUSES_ARRAY } from "./sauses.data";

export const SCHOOL_DISHES_ARRAY: IDish[] = [
    ...SNACKS_ARRAY,
    ...SOUPS_ARRAY,
    ...POTATO_N_VEGETABLES_DISHES_ARRAY,
    ...EGGS_DISHES_ARRAY,
    ...CURD_DISHES_ARRAY,
    ...SIDE_DISHES_ARRAY,
    ...SAUSES_ARRAY
]