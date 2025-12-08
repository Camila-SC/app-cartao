import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Building2, Home, CircleHelp } from "lucide-react-native"; 
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BottomTabs({ state, descriptors, navigation }: BottomTabBarProps) {
  
  return (
    <SafeAreaView style={styles.container}>
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
                size={22}
                color={isFocused ? "#FFF" : "#5E5E5E"} 
                strokeWidth={2} // Opcional: deixa o ícone mais nítido
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
    paddingVertical: 10,
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
    flex: 1, // Garante área de toque melhor
  },

  iconWrapper: {
    padding: 10,
    borderRadius: 50,
    // Adicione isso para garantir que o ícone fique centralizado visualmente
    justifyContent: 'center', 
    alignItems: 'center',
  },

  activeIcon: {
    backgroundColor: "#323361",
     borderRadius: 50,
  },

  label: {
    fontSize: 12,
    color: "#5E5E5E",
    marginTop: 4,
  },

  labelActive: {
    color: "#323361",
    fontWeight: "600",
  },
});