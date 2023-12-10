import {StyleSheet, View, Text} from "react-native";

function box(props){
    return <View style={styles.box}>
                <Text style={styles.boxT}>{props.itemData}</Text>
           </View>
}

export default box;

const styles = StyleSheet.create({
    box:{
        width: 150,
        height: 150,
        color: 'white',
        backgroundColor:'black',
        margin: 40,
        borderRadius: 10
    },
    boxT:{
        color:'white',
        textAlign: 'center',
        padding: 60,


    }
})