import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Clinicas from "@/app/(tabs)/clinicas";
import Home from "@/app/(tabs)/home";
import BottomTabs from "@/components/bottom-nav";
import { BottomTabParamList } from "@/types/navigation";
const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <BottomTabs {...props} />}>
        <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: "Início" }} />
        <Tab.Screen name="Clinicas" component={Clinicas} options={{ tabBarLabel: "Clínicas" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
