import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { Calendar, Download, LogOut, Share2 } from "lucide-react-native";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter()
  const pagamentos = [
    { mes: "Janeiro", vencimento: "01/01/2025", status: "Pago" },
    { mes: "Dezembro", vencimento: "25/12/2024", status: "Pago" },
    { mes: "Novembro", vencimento: "25/11/2024", status: "Aguardando" },
    { mes: "Agosto", vencimento: "25/11/2024", status: "Aguardando" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image source={require('@/assets/images/soudobem.png')} style={styles.logo}/>
        <Pressable style={styles.logoutButton} onPress={()=>router.push('/')}>
          <LogOut strokeWidth={1}/>
        </Pressable>
      </View>
      {/* CARD PRINCIPAL */}
        <LinearGradient
            colors={['#28294E', '#5c5d96ff']}   
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.cardContainer}
        >
        <View>
          <Text style={styles.cardTitle}>Olá, Camila,</Text>
          <Text style={styles.cardSubTitle}>Aqui estão as informações do seu cartão</Text>
        </View>

        <Image source={require('@/assets/images/card.png')} style={styles.cardImg}/>

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
      {/* TÍTULO PAGAMENTOS */}
      <View style={styles.paymentsHeader}>
        <Text style={styles.paymentsText}>Seus Pagamentos</Text>
        <Text style={styles.seeAllText}>Ver Mais</Text>
      </View>

      {/* LISTA COM SCROLL */}
      <View style={styles.paymentsCard}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {pagamentos.map((item, index) => (
            <View key={index} style={styles.paymentItem}>
              <View style={styles.paymentIconContainer}>
                <Calendar style={styles.paymentIcon} />
              </View>
              <View style={styles.paymentInfo}>
                <Text style={styles.paymentMonth}>{item.mes}</Text>
                <Text style={styles.paymentDate}>Vencimento em {item.vencimento}</Text>
              </View>
              <View style={[styles.paymentStatus, 
                item.status === "Pago" ? styles.statusPaid : styles.statusPending
              ]}>
                <Text style={styles.paymentStatusText}>{item.status}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20
  },
  /* HEADER */
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

    // SOMBRA (iOS) — drop shadow suave
    shadowColor: "#3d3d3dff",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.10, 
    shadowRadius: 6,

    // SOMBRA (Android)
    elevation: 10, 
    },
  /* CARD SUPERIOR */
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28294eff',
    height: '48%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },
  cardTitle: {
    color: '#FFF',
    fontWeight: "600",
    fontSize: 20,
  },
  cardSubTitle: {
    color: '#FFFFFF90',
    fontWeight: "400",
    fontSize: 16,
  },
  cardImg: {
    width: '100%',
    resizeMode: 'contain',
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

  /* PAGAMENTOS */
  paymentsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "4%",
    alignItems: "center"
  },
  paymentsText: {
    color: '#343A73',
    fontWeight: "600",
    fontSize: 18
  },
  seeAllText: {
    color: '#8B8B8B'
  },

  paymentsCard: {
    backgroundColor: "#FFF",
    marginHorizontal: "4%",
    borderRadius: 12,
    padding: 15,
    height: 200,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2
  },

  paymentItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10
  },

  paymentIconContainer: {
    backgroundColor: "#FFAE58",
    padding: 12,
    borderRadius: 12,
    marginRight: 12
  },

  paymentIcon: {
    width: 22,
    height: 22,
    color: '#FFF'
  },

  paymentInfo: {
    flex: 1
  },
  paymentMonth: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333"
  },
  paymentDate: {
    fontSize: 13,
    color: "#8A8A8A"
  },

  paymentStatus: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12
  },
  statusPaid: {
    backgroundColor: "#C9F7D8"
  },
  statusPending: {
    backgroundColor: "#FFE3B4"
  },
  paymentStatusText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#919191ff"
  }
});
