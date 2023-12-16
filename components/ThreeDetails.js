import {Text, View, StyleSheet} from "react-native";

function ThreeDetails({duration, complexity, affordability, style, textStyle}){
    return <View style={[styles.detailsContainer, style]}>
        <Text style={[styles.detailsText, textStyle]}>{duration}</Text>
        <Text style={[styles.detailsText, textStyle]}>{complexity}</Text>
        <Text style={[styles.detailsText, textStyle]}>{affordability}</Text>
    </View>
}

export default ThreeDetails;

const styles = StyleSheet.create({
    detailsContainer:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        fontSize: '12',


    },
    detailsText:{
        textTransform:'uppercase',
        marginHorizontal: 4,
    },
})