import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealProps } from "@screens/NewMeal";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function mealGetById(id: number) {
    try {
       const allMeals =  await mealGetAll();

       const meal = allMeals.filter(item => item.id === id)

       return meal[0];
    } catch (error) {
        throw error;
    }
}