import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetails from "./screens/MealsDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import {Ionicons} from "@expo/vector-icons";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
    return <Drawer.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#231201'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3b1515'},
        //sceneContainerStyle same as content style
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
    }}>
        <Drawer.Screen name={"Categories"} component={CategoriesScreen} options={{
            title: "All Categories",
            drawerIcon: ({color, size}) => <Ionicons name={"list"} color={color} size={size}/>
        }}/>
        <Drawer.Screen name={"Favorites"} component={FavoritesScreen} options={{
            drawerIcon: ({color, size}) => <Ionicons name={"star"} color={color} size={size}/>
        }}/>
    </Drawer.Navigator>
}

export default function App() {


  return (
      <>
        <StatusBar style={'light'}/>
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerStyle: {backgroundColor: '#231201'},
                headerTintColor: 'white',
                contentStyle: {backgroundColor: '#3b1515'},
            }}>
                <Stack.Screen name="Drawer"
                              component={DrawerNavigator}
                              options={{
                                  headerShown: false,
                }}
                    />
                <Stack.Screen name={"MealsOverview"}
                              component={MealsOverviewScreen}
                              // options={({route,navigation})=>{
                              //     const name = route.params.title;
                              //     return {
                              //         title: name,
                              //     };
                              // }}

                />
                <Stack.Screen name={"MealsDetails"}
                              component={MealsDetails}
                              options={{
                                  title: "About The Meal"
                              }}
                />
            </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({

});
