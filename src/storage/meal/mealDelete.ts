import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealProps } from "@screens/NewMeal";


export async function mealDelete(id: number) {
    try {
        const storedMeals = await mealGetAll();

        const newMeals = storedMeals.filter(oldMeal => oldMeal.id !== id);

        const storage = JSON.stringify([...newMeals]);

        await AsyncStorage.setItem(MEAL_COLLECTION, storage)
    } catch (error) {
        throw error;
    }
}