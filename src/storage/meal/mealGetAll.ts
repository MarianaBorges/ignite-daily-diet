import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealProps } from "@screens/NewMeal";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealGetAll() {
    try {
       const storage =  await AsyncStorage.getItem(MEAL_COLLECTION);

       const meals: MealProps[] = storage ? JSON.parse(storage) : [];

       return meals;
    } catch (error) {
        throw error;
    }
}