import ClinicsScreen from '@/components/clinicas';
import Navbar from '@/components/navbar';
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <Navbar/>
      <ClinicsScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20
  },
});
