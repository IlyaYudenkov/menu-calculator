import type { IDish } from "@/model/dish.model";
import { SNACKS_ARRAY } from "./snacks.data";
import { SOUPS_ARRAY } from "./soups.data";
import { POTATO_N_VEGETABLES_DISHES_ARRAY } from "./potatoNVegetablesDishes.data";
import { EGGS_DISHES_ARRAY } from "./eggsDishes.data";
import { CURD_DISHES_ARRAY } from "./curdDishes.data";
import { SIDE_DISHES_ARRAY } from "./sideDishes.data";
import { SAUSES_ARRAY } from "./sauses.data";
import { CEREALS_N_LEGUMES_N_PASTA_PRODUCTS_DISHES_ARRAY } from "./cerealsNLegumesNPastaProductsDishes.data";
import { FISH_DISHES_ARRAY } from "./fishDishes.data";
import { MEAT_DISHES_ARRAY } from "./meatDishes.data";
import { POULTRY_DISHES_ARRAY } from "./poultryDishes.data";
import { SWEET_DISHES_ARRAY } from "./sweetDishes.data";
import { DRINKS_ARRAY } from "./drinks.data";
import { FLOUR_DISHES_ARRAY } from "./flourDishes.data";

export const SCHOOL_DISHES_ARRAY: IDish[] = [
    ...SNACKS_ARRAY,
    ...SOUPS_ARRAY,
    ...POTATO_N_VEGETABLES_DISHES_ARRAY,
    ...CEREALS_N_LEGUMES_N_PASTA_PRODUCTS_DISHES_ARRAY,
    ...EGGS_DISHES_ARRAY,
    ...CURD_DISHES_ARRAY,
    ...FISH_DISHES_ARRAY,
    ...MEAT_DISHES_ARRAY,
    ...POULTRY_DISHES_ARRAY,
    ...SIDE_DISHES_ARRAY,
    ...SAUSES_ARRAY,
    ...SWEET_DISHES_ARRAY,
    ...DRINKS_ARRAY,
    ...FLOUR_DISHES_ARRAY
]