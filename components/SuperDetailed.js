import {Image, Text, View, StyleSheet, ScrollView} from "react-native";
import MealItem from "./MealItem";
import ThreeDetails from "./ThreeDetails";
import mealItem from "./MealItem";
import Step from "./Step";
import SubTitle from "./SubTitle";

function SuperDetailed({selectedMeal}){
    return (
        <><ScrollView style={styles.screen}>
                <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>


                <Text style={styles.titleText}>{selectedMeal.title}</Text>

                <ThreeDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
                />
                <View style={styles.outerContainer}>
                    <View style={styles.innerContainer}>
                        <SubTitle>Ingredients</SubTitle>
                        <Step data={selectedMeal.ingredients}/>
                        <SubTitle>Steps</SubTitle>
                        <Step data={selectedMeal.steps}/>
                    </View>
                </View>
        </ScrollView>
        </>
)}

export default SuperDetailed;

const styles = StyleSheet.create({
    line:{
        width: '80%',
        height: 2,
        backgroundColor: 'white',
        marginBottom: 10,


    },
    screen:{
      marginBottom: 32,
    },
    image:{
        width: '100%',
        height: 350
    },
    titleText:{
        textAlign: 'center',
        fontSize: 24,
        // padding: 8,
        margin: 8,
        color: 'white',
        fontWeight: 'bold'

    },

    detailText:{
        color: 'white'
    },

    outerContainer:{
        alignItems: 'center',
    },
    innerContainer:{
        width: '80%',
    }

})