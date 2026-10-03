import { ALL_DISHES_BY_SELECTED_AGE_CATEGORY } from "@/data/dishes/dishes.data";
import { createContext } from "react";

export const DishesByAgeCategoryArrayContext = createContext(ALL_DISHES_BY_SELECTED_AGE_CATEGORY[1])