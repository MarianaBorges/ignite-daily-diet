import { MealProps } from "@screens/NewMeal";

export function formattedDate(date: string){
    const newDate = new Date(date);
    const stringFormatted = newDate.toLocaleDateString();
    /* 
        const day = newDate.getDate() < 10 ? '0'+ newDate.getDate() : newDate.getDate();
        const month = newDate.getMonth() < 10 ? '0'+ (newDate.getMonth() + 1) : newDate.getMonth() + 1;
        const stringFormatted = day+'/'+month+'/'+ newDate.getFullYear(); 
    */
    return stringFormatted
}

export function formattedTime(time: string){
    const newTime = new Date(time);
    const time = newTime.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit' 
    })
    /* 
        const hours = newTime.getHours() < 10 ? '0' + newTime.getHours() : newTime.getHours();
        const minutes = newTime.getMinutes() < 10 ? '0' + newTime.getMinutes() : newTime.getMinutes();
    */
    return time 
}

export function getMealsOutOfDiet(meals: MealProps[] = []) {
    const data = meals.filter(item => item.isInDiet === false);
    return data.length
}

export function getMealsInOfDiet(meals: MealProps[] = []) {
    const data = meals.filter(item => item.isInDiet === true);
    return data.length
}

export function getPercentInDiet(meals: MealProps[] = []) {
    if (meals.length > 0) {
        const inDiet = getMealsInOfDiet(meals);
        const percentInDiet = (inDiet * 100)/meals.length
        return percentInDiet;
    }else{
        return 0;
    }
}

export function getBestSequence(meals: MealProps[]) {
    if (meals.length > 0) {
        let count = 0;
        let sequences: number[] = [];

        for(let i = 0; i < meals.length; i++){
            if(meals[i].isInDiet) count += 1;
            if(meals[i].isInDiet == false) {
                sequences.push(count);
                count = 0;
            }
            if(meals[meals.length - 1] === meals[i] && meals[i].isInDiet){
                sequences.push(count);
            }
        }
        return Math.max(...sequences);
    }else{
        return 0;
    }
}