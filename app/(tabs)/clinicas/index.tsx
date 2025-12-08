import CardContainer from '@/components/home/card-soudobem';
import PaymentsList from '@/components/home/payments';
import Navbar from '@/components/navbar';
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <Navbar/>
      <CardContainer/>
      <PaymentsList/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20
  },
});
