import {StyleSheet, Text, View} from "react-native";

function SubTitle({children}){
    return <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{children}</Text>
    </View>
}

export default SubTitle;

const styles = StyleSheet.create({
    subTitle:{
        textAlign: 'center',
        color: '#e2b497',
        marginTop: 25,
        fontSize: 18,
        fontWeight: 'bold',


    },
    subTitleContainer:{
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 12,
    },
})