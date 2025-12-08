import LoginForm from "@/components/login/form";
import { Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";

export default function Index() {
  const { width } = useWindowDimensions();
  const isTablet = width > 768;

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/Illustration.png')}
        style={[styles.bottomLeftImage, { width: width * 0.4, height: width * 0.4, maxWidth: 300, maxHeight: 300 }]}
      />
      <Image 
        source={require('../assets/images/Illustration-top.png')}
        style={[styles.topRightImage, { width: width * 0.4, height: width * 0.4, maxWidth: 300, maxHeight: 300 }]}
      />

      <Image 
        source={require('../assets/images/soudobem.png')} 
        style={[styles.headerImg, { height: isTablet ? 120 : 80 }]} 
      />
      
      <Text style={[styles.loginHeader, isTablet && styles.loginHeaderTablet]}>BEM VINDO!</Text>
      <Text style={[styles.loginSubTitle, isTablet && styles.loginSubTitleTablet]}>Por favor, insira seus dados</Text>
   
      <LoginForm/>

      <Image 
        source={require('../assets/images/santacasa.png')} 
        style={{ marginTop: 20, resizeMode: 'contain', height: isTablet ? 60 : 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    justifyContent: "center",
    alignItems: "center",
    gap: 20, 
  },
  loginHeader: {
    fontWeight: '500',
    fontSize: 28,
    color: '#2F2C62',
    letterSpacing: 4,
    textAlign: 'center',
  },
  loginHeaderTablet: {
    fontSize: 42,
    marginBottom: 10,
  },
  headerImg: {
    width: '50%', 
    resizeMode: 'contain',
    maxWidth: 400,
  },
  loginSubTitle: {
    fontSize: 18,
    color: '#595959',
    marginBottom: 10,
  },
  loginSubTitleTablet: {
    fontSize: 24,
  },
  bottomLeftImage: {
    position: 'absolute',
    bottom: -75, 
    left: -75,
    resizeMode: 'contain',
    opacity: 0.8, 
  },
  topRightImage: {
    position: 'absolute',
    top: -75,
    right: -75,
    resizeMode: 'contain',
    opacity: 0.8,
  },
});