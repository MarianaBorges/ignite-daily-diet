import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { GeneralStatistics } from "@screens/GeneralStatistics";
import { Meal } from "@screens/Meal";
import { NewMeal } from "@screens/NewMeal";
import { EditMeal } from "@screens/EditMeal";

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
    return (
        <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Screen 
                name="Home" 
                component={Home} 
            />
            <Screen 
                name="GeneralStatistics" 
                component={GeneralStatistics} 
            />
            <Screen 
                name="Meal" 
                component={Meal} 
            />
            <Screen 
                name="NewMeal" 
                component={NewMeal} 
            />
            <Screen 
                name="EditMeal" 
                component={EditMeal} 
            />
        </Navigator>
    )
}

export { AppRoutes }