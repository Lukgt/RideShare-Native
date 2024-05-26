import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Principal from './Principal';
import Consulta from './Consulta';
import Explorar from './Explorar';
import Perfil from './Perfil';

const Tab=createBottomTabNavigator()

const screenOptions = {
    tabBarStyle: {
        backgroundColor: "#4F008E",
    },
    tabBarActiveTintColor: "#A0DFD0",
    tabBarInactiveTintColor: "#FFF"
}

const tabs = [
    {
        name: 'Home',
        component: Principal,
        icon: 'home'
    },
    {
        name: 'Mapa',
        component: Consulta,
        icon: 'map'
    },

    {
        name: 'Perfil',
        component: Perfil,
        icon: 'person'
    },
]

export default function Tabs(){
    return(
        <Tab.Navigator
            screenOptions={screenOptions}
        >
        {tabs.map((tab) => (
            <Tab.Screen
                key={tab.name}
                name={tab.name}
                component={tab.component}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                    <Ionicons name={tab.icon} color={color} size={size} />
                    )
                }}
            />
        ))}   
         
        </Tab.Navigator>
        
    )
}