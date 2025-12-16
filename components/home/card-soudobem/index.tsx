import { Image } from "expo-image";
import { Download, Share2 } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";


export default function CardContainer(){
    return(
             <View style={styles.cardContainer}>

      {/* IMAGENS DECORATIVAS (BG) */}
      <Image
        source={require("@/assets/images/Illustration.png")}
        style={styles.bgTopRight}
        contentFit="contain"
      />

      <Image
        source={require("@/assets/images/Illustration.png")}
        style={styles.bgBottomLeft}
        contentFit="contain"
      />

      {/* TEXTO */}
      <View style={{ width: '100%', zIndex: 2 }}>
        <Text style={styles.cardTitle}>Olá, Camila,</Text>
        <Text style={styles.cardSubTitle}>
          Aqui estão as informações do seu cartão
        </Text>
      </View>

      {/* CARTÃO */}
      <View style={styles.cardImgWrapper}>
        <Image
          source={require('@/assets/images/card.png')}
          style={styles.cardImg}
          contentFit="contain"
        />
      </View>

      {/* AÇÕES */}
      <View style={styles.actions}>
        <Pressable style={styles.actionButton}>
          <Download strokeWidth={1} />
          <Text>Baixar Cartão</Text>
        </Pressable>

        <Pressable style={styles.actionButton}>
          <Share2 strokeWidth={1} />
          <Text>Compartilhar</Text>
        </Pressable>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  cardContainer: {
  position: 'relative', 
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#28294eff',
  height: '50%',
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  paddingHorizontal: 20,
  overflow: 'hidden', 
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
bgTopRight: {
  position: 'absolute',
  top: -70,
  right: -50,
  width: 180,
  height: 180,
  opacity: 0.8,
  zIndex: 0, 
},

bgBottomLeft: {
  position: 'absolute',
  bottom: -80,
  left: -80,
  width: 180,
  height: 180,
  opacity: 0.8,
  zIndex: 0, 
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
   actionButtonText: {
   color: '#28294eff'
  },
})