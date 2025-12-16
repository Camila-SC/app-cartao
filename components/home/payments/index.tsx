import { Calendar } from "lucide-react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function PaymentsList(){
      const pagamentos = [
    { mes: "Janeiro", vencimento: "01/01/2025", status: "Pago" },
    { mes: "Dezembro", vencimento: "25/12/2024", status: "Pago" },
    { mes: "Novembro", vencimento: "25/11/2024", status: "Aguardando" },
    { mes: "Agosto", vencimento: "25/11/2024", status: "Aguardando" },
  ];
    return(
        <View>
             <View style={styles.paymentsHeader}>
                <Text style={styles.paymentsText}>Seus Pagamentos</Text>
                <Text style={styles.seeAllText}>Ver Mais</Text>
              </View>
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
        </View>
         
    )
}

const styles = StyleSheet.create({
  paymentsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "4%",
    alignItems: "center",
  },
  paymentsText: {
    color: '#343A73',
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 12
  },
  seeAllText: {
    color: '#8B8B8B'
  },
  paymentsCard: {
    backgroundColor: "#FFF",
    marginHorizontal: "4%",
    borderRadius: 12,
    padding: 15,
    height: 250,
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
})