import { MealProps } from "@screens/NewMeal";

export declare global{
    namespace ReactNavigation {
        interface RootParamList{
            Home: undefined;
            GeneralStatistics: undefined;
            Meal: {
                idMeal: number;
            };
            NewMeal: undefined;
            EditMeal: {
                idMeal: number;
            };
        }
    }
}