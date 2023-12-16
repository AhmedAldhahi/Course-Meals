import {Image, Pressable, StyleSheet, Text, View, Platform} from "react-native";
import ThreeDetails from "./ThreeDetails";


function MealItem({title, imageUrl,duration,complexity,affordability, onPress}){


    return <View style={styles.container}>
        <Pressable style={styles.innerContainer}
                   android_ripple={{color: '#ccc'}}
                   onPress={onPress}
        >
            <View style={styles.screen}>
                <Image
                    style={styles.image}
                    source={{uri: imageUrl}} />
                <Text style={styles.title}>{title}</Text>
                <ThreeDetails
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability}
                />

            </View>
        </Pressable>
    </View>
}

export default MealItem;

const styles = StyleSheet.create({
    screen:{
        flex: 1 ,
    },
    container: {
        Flex: 1,
        margin: 16,
        height: 280,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 4,
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 16,
        shadowColor: 'black',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',


    },
    innerContainer:{
        flex: 1,
    },
    title:{
        fontSize: 18,
        fontWeight:'bold',
        textAlign: 'center',
        margin: 8,
    },
    image:{
        width: "100%",
        height: 200,
    },



})