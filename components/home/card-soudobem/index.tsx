import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Download, Share2 } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";


export default function CardContainer(){
    return(
            <LinearGradient
               colors={['#9BA7CF', '#D2C9DE','#dadadaff']}   
               start={{ x: 0, y: 0 }}
               end={{ x: 0, y: 1 }}
               style={styles.cardContainer}
            >
             <View>
             <Text style={styles.cardTitle}>Olá, Camila,</Text>
             <Text style={styles.cardSubTitle}>Aqui estão as informações do seu cartão</Text>
             </View>
                <View style={styles.cardImgWrapper}>
                    <Image
                        source={require('@/assets/images/card.png')}
                        style={styles.cardImg}
                        contentFit="contain"
                    />
                </View>
                    <View style={styles.actions}>
                        <Pressable style={styles.actionButton}>
                            <Download strokeWidth={1}/>
                            <Text>Baixar Cartão</Text>
                        </Pressable>
                        <Pressable style={styles.actionButton}>
                            <Share2 strokeWidth={1}/>
                            <Text>Compartilhar</Text>
                        </Pressable>
                    </View>
            </LinearGradient>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28294eff',
    height: '50%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },
  cardTitle: {
    color: '#FFF',
    fontWeight: "600",
    fontSize: 20,
    marginTop: 10
  },
  cardSubTitle: {
    color: '#FFFFFF90',
    fontWeight: "400",
    fontSize: 16,
  },
cardImgWrapper: {
  width: '100%',
  marginVertical: 12,
},

cardImg: {
  width: '100%',
  height: 200,
  borderRadius: 12,
},
  actions: {
    flexDirection: 'row',
    gap: 17,
    marginVertical: 10
  },
  actionButton: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 3,
  },
})
      


