import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from "react-native";

export default function Index() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const isTablet = width > 768;
  const contentWidth = isTablet ? 500 : width * 0.85;

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
   
      <View style={{ width: contentWidth, gap: 20 }}>
        <View>
          <Text style={[styles.label, isTablet && styles.labelTablet]}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={[styles.input, isTablet && styles.inputTablet]} 
              placeholder="Insira seu email"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        <View>
          <Text style={[styles.label, isTablet && styles.labelTablet]}>Senha</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={[styles.input, isTablet && styles.inputTablet]} 
              placeholder="Insira sua senha"
              placeholderTextColor="#999"
              secureTextEntry
            />
          </View>
        </View>

        <View style={styles.rememberMe}>
          <Text style={[styles.rememberMeText, isTablet && styles.rememberMeTextTablet]}>Lembre de mim</Text>
          <Text style={[styles.rememberMeText, isTablet && styles.rememberMeTextTablet]}>Esqueci a senha</Text>
        </View>

        <Pressable style={styles.loginButton} onPress={() => router.push('./home')}>
          <Text style={[styles.loginButtonText, isTablet && styles.loginButtonTextTablet]}>Entrar</Text>
        </Pressable>
      </View>

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
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  labelTablet: {
    fontSize: 18,
  },
  inputContainer: {
    width: '100%', 
    backgroundColor: '#FFF',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  input: {
    textAlign: 'left',
    paddingHorizontal: 15,
    paddingVertical: 12, 
    color: '#595959',
    fontSize: 16,
  },
  inputTablet: {
    fontSize: 20,
    paddingVertical: 18,
  },
  rememberMe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  rememberMeText: {
    color: '#211f52ff',
    fontSize: 14,
  },
  rememberMeTextTablet: {
    fontSize: 18,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#1E5A9C',
    borderRadius: 3,
    paddingVertical: 12,
    marginTop: 10,
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButtonTextTablet: {
    fontSize: 22,
    paddingVertical: 5,
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