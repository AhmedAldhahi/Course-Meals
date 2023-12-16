import {Button, Text} from "react-native";
import {MEALS} from "../data/dummy-data";
import SuperDetailed from "../components/SuperDetailed";
import {useLayoutEffect} from "react";
import IconButton from "../components/IconButton";


function MealsDetails({route, navigation}){

    const mealId = route.params.id;

    const selectedMeal = MEALS.find((meal)=> meal.id == mealId);

    function headerButtonPressHandler(){
        // console.log("Fuck");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ()=>{
                return <IconButton onPress = {headerButtonPressHandler}
                icon={"star"}
                color={"white"}/>
            },
        })
    }, [navigation, headerButtonPressHandler]);

    return <SuperDetailed
        selectedMeal = {selectedMeal}
    />
}

export default MealsDetails;