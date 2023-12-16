import {Text, View, StyleSheet} from "react-native";

function Step({data}){
    return(


        data.map((item)=>{

            return (<View key={item} style={styles.screen}>
                <Text  style={styles.Text}>
                    {item}
                </Text>
            </View>
            )})
    //     <Step
    // item={item}
    // />
    )
}

export default Step;

const styles = StyleSheet.create({
    Text:{
        textAlign: 'center',
        color: '#231201',
    },
    screen:{

        paddingVertical: 4,
        paddingHorizontal: 8,
        borderWidth: 2,
        borderRadius: 8,
        marginVertical: 4,
        marginHorizontal: 12,
        borderColor: 'orange',
        backgroundColor:'#d7a37b',
    },

})