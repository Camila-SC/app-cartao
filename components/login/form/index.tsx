import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, useWindowDimensions, View } from "react-native";

export default function LoginForm(){
    const router = useRouter()
    const { width } = useWindowDimensions();
    
    const isTablet = width > 768;
    const contentWidth = isTablet ? 500 : width * 0.85;

    return(
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
    )
}

const styles = StyleSheet.create({
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
})