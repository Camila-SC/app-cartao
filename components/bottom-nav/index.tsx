import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Building2, Home, CircleHelp } from "lucide-react-native"; 
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BottomTabs({ state, descriptors, navigation }: BottomTabBarProps) {
  
  return (
    <SafeAreaView 
      style={styles.container}
      // Importante: Define que a área segura só deve ser aplicada embaixo e nas laterais,
      // evitando espaço extra no topo da barra.
      edges={['bottom', 'left', 'right']} 
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        let IconComponent;

        if (route.name === "home/index" || route.name === "index") {
            IconComponent = Home;
        } else if (route.name === "clinicas/index") {
            IconComponent = Building2;
        } else {
            IconComponent = CircleHelp; 
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}
            activeOpacity={0.7}
          >
            <View style={[styles.iconWrapper, isFocused && styles.activeIcon]}>
               <IconComponent
                size={20} // Reduzi levemente o ícone de 22 para 20
                color={isFocused ? "#FFF" : "#5E5E5E"} 
                strokeWidth={2} 
              />
            </View>
            <Text style={[styles.label, isFocused && styles.labelActive]}>
              {label as string}
            </Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    // Reduzido de 10 para 6. O SafeAreaView já cuida do espaço extra no iPhone X+
    paddingTop: 6, 
    paddingBottom: 2, 
    backgroundColor: "#FFF",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  tabItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1, 
  },

  iconWrapper: {
    // Reduzido de 10 para 6. Isso diminui muito a altura total
    padding: 6,
    borderRadius: 50,
    justifyContent: 'center', 
    alignItems: 'center',
  },

  activeIcon: {
    backgroundColor: "#323361",
     borderRadius: 50,
  },

  label: {
    fontSize: 11, // Reduzi levemente a fonte de 12 para 11
    color: "#5E5E5E",
    marginTop: 2, // Reduzido de 4 para 2
  },

  labelActive: {
    color: "#323361",
    fontWeight: "600",
  },
});