import { router, useRouter } from "expo-router";
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
    const router = useRouter();
  return (
    <View
      style={styles.container}
    >
        <Image 
          source={require('../assets/images/Illustration.png')}
          style={styles.bottomLeftImage}
        />
         <Image 
          source={require('../assets/images/Illustration-top.png')}
          style={styles.topRightImage}
        />
       <Image source={require('../assets/images/soudobem.png')} style={styles.headerImg}/>
      <Text style={styles.loginHeader}>BEM VINDO!</Text>
       <Text style={styles.loginSubTitle}>Por favor, insira seus dados</Text>
     
          <View>
            <Text>Email</Text>
            <View style={styles.emailInput}>
              <TextInput style={styles.placeholder}>Insira seu email</TextInput>
            </View>
          </View>
           <View>
            <Text>Senha</Text>
            <View style={styles.emailInput}>
              <TextInput style={styles.placeholder}>Insira sua senha</TextInput>
            </View>
                
          </View>
             <View style={styles.rememberMe} >
              <Text style={styles.rememberMeText}>Lembre de mim</Text>
                <Text style={styles.rememberMeText}>Esqueci a senha</Text>
            </View>
              <Pressable style={styles.loginButton} onPress={() => router.push('./home')}>
                <Text style={styles.loginButtonText}>Entrar</Text>
              </Pressable>
           <Image source={require('../assets/images/santacasa.png')} />
    </View>
  );
}



const styles = StyleSheet.create({

container:{
  flex:1,
  backgroundColor: '#F8F8F8',
  justifyContent: "center",
  alignItems: "center",
  gap: 28,
},
loginHeader:{
  fontWeight: 500,
  fontSize: 28,
  color: '#2F2C62',
  letterSpacing: 4
},
headerImg:{
  width: '30%', 
  height: 80, 
  resizeMode: 'contain'
},
loginSubTitle:{
 fontSize: 18,
  color: '#595959' 
},
emailInput:{
   width: 300,
  backgroundColor: '#FFF',
  borderRadius: 3,

  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,
  elevation: 4,
},
placeholder:{
  textAlign:'left',
  paddingHorizontal: 10,
  color: '#595959',
},
rememberMe:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: 300,
  color: '##2F2C62'
},
rememberMeText:{
  color: '#211f52ff'
},
loginButton:{
   width: 300,
  backgroundColor: '#1E5A9C',
  borderRadius: 3,
  padding:12
},
loginButtonText:{
  textAlign:'center',
  paddingHorizontal: 10,
  color: '#FFF',
},
bottomLeftImage: {
  position: 'absolute',
  bottom: -120,
  left: -150,
  width: 320,
  height: 320,
  resizeMode: 'contain',
},
topRightImage: {
  position: 'absolute',
  top: -120,
  right: -150,
  width: 320,
  height: 320,
  resizeMode: 'contain',
},

})