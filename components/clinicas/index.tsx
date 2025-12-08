import type { Clinic } from '@/types/clinics';
import { Building2, Search } from 'lucide-react-native';
import React from 'react';
import {
    FlatList,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ListRenderItem
} from 'react-native';



const DATA: Clinic[] = [
  {
    id: '1',
    name: 'Clínica BemEstar',
    address: 'Rua das Flores, 123',
    status: 'Ativo',
    iconColor: '#FFB067', 
    iconType: 'orange'
  },
  {
    id: '2',
    name: 'Clínica SempreViva',
    address: 'Av. Central, 456',
    status: 'Inativo',
    iconColor: '#1A6F43', 
    iconType: 'green'
  },
  {
    id: '3',
    name: 'Clínica Nova Saúde',
    address: 'Rua da Praia, 789',
    status: 'Ativo',
    iconColor: '#FFCC80', 
    iconType: 'light-orange'
  },
  {
    id: '4',
    name: 'Clínica Vida Plena',
    address: 'Av. Paulista, 1000',
    status: 'Ativo',
    iconColor: '#1A6F43',
    iconType: 'green'
  },
  {
    id: '5',
    name: 'Clínica Sol Nascente',
    address: 'Rua Augusta, 2000',
    status: 'Inativo',
    iconColor: '#1A6F43',
    iconType: 'green'
  },
];

const categories = ['Todas', 'Clínica Geral', 'Cardiologia', 'Pediatria'];

export default function ClinicsScreen() {
  const renderItem: ListRenderItem<Clinic> = ({ item }) => {
    
    const isActive = item.status === 'Ativo';
    const badgeBackgroundColor = isActive ? '#E8F5E9' : '#FFEBEE'; 
    const badgeTextColor = isActive ? '#4CAF50' : '#F44336'; 
    return (
      <View style={styles.cardItem}>
        <View style={[
          styles.iconContainer, 
          { backgroundColor: item.iconColor }
        ]}>
          <Building2 color="#FFF" size={24} />
        </View>

        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardAddress}>{item.address}</Text>
        </View>

        <View style={[styles.statusBadge, { backgroundColor: badgeBackgroundColor }]}>
          <Text style={[styles.statusText, { color: badgeTextColor }]}>
            {item.status}
          </Text>
        </View>
      </View>
    );
  };


  const ListHeader = () => (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <View style={styles.titleRow}>
            <Building2 color="#FFF" size={28} />
            <Text style={styles.headerTitle}>Clínicas Parceiras</Text>
          </View>
          <Text style={styles.headerSubtitle}>Rede credenciada Santa Casa, onde você pode utilizar o seu cartão</Text>

          <View style={styles.searchContainer}>
            <Search color="#999" size={20} style={{ marginRight: 10 }} />
            <TextInput 
              placeholder="Buscar clínica ou especialidade..." 
              placeholderTextColor="#999"
              style={styles.searchInput}
            />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersScroll}>
            {categories.map((cat, index) => (
              <TouchableOpacity 
                key={index} 
                style={[styles.filterChip, index === 0 && styles.filterChipActive]}
              >
                <Text style={[styles.filterText, index === 0 && styles.filterTextActive]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={[styles.statNumber, { color: '#1E5A9C' }]}>{DATA.length}</Text>
          <Text style={styles.statLabel}>Clínicas</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={[styles.statNumber, { color: '#4CAF50' }]}>6</Text>
          <Text style={styles.statLabel}>Disponíveis</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={[styles.statNumber, { color: '#FFB067' }]}>4.8</Text>
          <Text style={styles.statLabel}>Avaliação</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Parceiros</Text>
    </>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#232155" />
      
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  headerContainer: {
    backgroundColor: '#232155',
    paddingTop: Platform.OS === 'android' ? 40 : 60,
    paddingBottom: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    paddingHorizontal: 20,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#D1D1D1',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    color: '#333',
  },
  filtersScroll: {
    flexDirection: 'row',
  },
  filterChip: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  filterChipActive: {
    backgroundColor: '#1E5A9C',
  },
  filterText: {
    color: '#5E5E5E',
    fontWeight: '500',
  },
  filterTextActive: {
    color: '#FFF',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: -40,
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: '#FFF',
    width: '30%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#999',
    marginLeft: 20,
    marginBottom: 15,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginBottom: 10, 
    padding: 12,
    borderRadius: 16,
   
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#232155',
    marginBottom: 2,
  },
  cardAddress: {
    fontSize: 12,
    color: '#999',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
});