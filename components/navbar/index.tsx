import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { LogOut } from "lucide-react-native";
import { Pressable, StyleSheet, View } from "react-native";

export default function Navbar(){
    const router = useRouter()
    return(
            <View style={styles.header}>
                <Image source={require('@/assets/images/soudobem.png')} style={styles.logo}/>
                <Pressable style={styles.logoutButton} onPress={()=>router.push('/')}>
                <LogOut strokeWidth={1}/>
                </Pressable>
            </View>
    )
}

const styles = StyleSheet.create({
    logo: {
    width: '20%',
    height: 60,
    resizeMode: 'contain'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '4%'
  },
   logoutButton: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 5,
   }
})