import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealProps } from "@screens/NewMeal";


export async function mealUpdate(newMeal: MealProps) {
    try {
        const storedMeals = await mealGetAll();

        const updatedMeals = storedMeals.map(oldMeal => {
            if (oldMeal.id === newMeal.id) {
                return newMeal;
            }
            return oldMeal;
        });

        const storage = JSON.stringify([...updatedMeals]);

        await AsyncStorage.setItem(MEAL_COLLECTION, storage)
    } catch (error) {
        throw error;
    }
}