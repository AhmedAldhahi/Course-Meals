import {MEALS, CATEGORIES} from '../data/dummy-data'
import {FlatList, StyleSheet, Text, View} from "react-native";
import MealItem from "../components/MealItem";
import category from "../models/category";
import {useEffect, useLayoutEffect} from "react";

function MealsOverviewScreen({route, navigation}){
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });



    const categoryTitle = CATEGORIES.find((category)=> category.id === catId).title;


    useLayoutEffect(()=>{


        navigation.setOptions({
            title: categoryTitle,
        });

    },[catId,navigation])

    function renderMealsItem(itemData){
        const item = itemData.item;
        function pressHandler(){
            navigation.navigate("MealsDetails",{
                title: categoryTitle,
                id: itemData.item.id,
            })
        }
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,

        }

        return <MealItem
            {...mealItemProps}
            onPress={pressHandler}
        />
    }

    return <View style={styles.container}>
        <FlatList data={displayedMeals}
                  keyExtractor={(item) => item.id}
                  renderItem={renderMealsItem}
        />
    </View>
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 16
    }
})