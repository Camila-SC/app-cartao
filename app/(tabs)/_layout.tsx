import { Tabs } from "expo-router";
import BottomTabs from "@/components/bottom-nav"; // Ajuste o import conforme seu caminho

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomTabs {...props} />}
    >
     
      <Tabs.Screen
        name="home/index" 
        options={{ tabBarLabel: "Início" }}
      />
      <Tabs.Screen
        name="clinicas/index"
        options={{ tabBarLabel: "Clínicas" }}
      />
    </Tabs>
  );
}