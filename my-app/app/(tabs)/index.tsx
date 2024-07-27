import React, { useEffect, useState } from 'react';
import { Modal, View, Text, StyleSheet, FlatList, Dimensions, StatusBar, Platform, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import AstrologerCard from '../../components/AstrologerCard';
import { Picker } from '@react-native-picker/picker';
import Config from '@/config/config';


const { width } = Dimensions.get('window');

interface Astrologer {
  id: number;
  experience: number;
  domain: Array<string>;
  languages: Array<string>;
  image_url?: string;
  total_orders: number;
  rating: number;
  name: string;
  charges: number;
  is_verified: boolean;
}

interface ApiResponse {
  data: Astrologer[];
}

export default function HomeScreen() {
  const router = useRouter();
  const [astrologers, setAstrologers] = useState<Astrologer[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [filterData, setFilterData] = useState(false)
  const [allDataLoaded, setAllDataLoaded] = useState(false);




  const domains = ['Vedic', 'Numerology', 'Tarot', 'Palmistry'];
  const languages = ['English', 'Hindi', 'Tamil', 'Telugu', 'Marathi'];

  const fetchData = async (query = '', reset = false) => {
    setLoading(true);
    try {
      const baseUrl = Platform.OS === 'android' ? Config.MOBILE_BASE_URL : Config.WEB_BASE_URL;
      const url = `${baseUrl}/api/get-astros?page=${reset ? 1 : page}${query ? `&search=${query}` : ''}`;
      const result = await axios.get<ApiResponse>(url);
      if (result && result.data && Array.isArray(result.data.data)) {
        setAstrologers(prevAstrologers => reset ? result.data.data : [...prevAstrologers, ...result.data.data]);
      } else {
        console.error('Unexpected data structure:', result);
      }
    } catch (error) {
      console.error('Error fetching astrologer data:', error);
    } finally {
      setLoading(false);
    }
  };


  const applyFilter = async () => {
    setLoading(true);
    try {
      const baseUrl = Platform.OS === 'android' ? Config.MOBILE_BASE_URL : Config.WEB_BASE_URL;
      const apiResponse = await axios.get(`${baseUrl}/api/get-filter?language=${selectedLanguage}&domain=${selectedDomain}`);
      if (apiResponse.data && apiResponse.data.data) {
        setAstrologers(apiResponse.data.data);
      }
    } catch (error) {
      console.error('Error applying filter:', error);
    } finally {
      setLoading(false);
      setFilterData(true);
      setShowModal(false);
      setAllDataLoaded(true)
    }
  };

  const toggleFilter = () => {

    if (showModal)
      setShowModal(false)
    else
      setShowModal(true)

  }

  const cancleDataHandle = async () => {
    if (!showSearch) {
      const baseUrl = Platform.OS === 'android' ? Config.MOBILE_BASE_URL : Config.WEB_BASE_URL
      const response = await axios.get(`${baseUrl}/api/get-astros?page=${page}`);
      if (response.data && response.data.data) {
        setAstrologers(response.data.data)
      }
    }
  }

  const cancelHandler = async () => {
    setSelectedDomain('');
    setSelectedLanguage('');
    setFilterData(false);
    setPage(1);
    setAstrologers([])
    await cancleDataHandle()
    toggleFilter()
  };


  const handleSearch = () => {
    setPage(1);
    fetchData(searchQuery, true);
  };

  const handleClearSearch = async () => {
    setSearchQuery('');
    setPage(1);
    setAstrologers([])
    await cancleDataHandle()
  };

  const toggleSearch = async () => {
    if (showSearch) {
      setSearchQuery('')
      setShowSearch(false);
      await handleClearSearch();
      
    } else {
      setShowSearch(true);
    }
  };


  const handleAstrologerPress = (astrologer: Astrologer) => {
    router.push(`/description?id=${astrologer.id}`);
  };

  const loadMoreData = async () => {
    if (!loading && !searchQuery) {
      setPage(prevPage => {
        const newPage = prevPage + 1;
        setPage(newPage)
        fetchData('', false);
        return newPage;
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <SimpleLineIcons name="menu" size={18} color="black" style={styles.menuIcon} />
          <Text style={styles.headerTitle}>Chat with Astrologer</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceSymbol}>₹</Text>
            <Text style={styles.balanceText}>117</Text>
          </View>
          <TouchableOpacity onPress={toggleSearch}>
            <Ionicons name={showSearch ? "close" : "search"} size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.filterIconContainer}>
            <AntDesign name="filter" size={24} onPress={toggleFilter} color="black" style={styles.icon} />
            <View style={styles.filterNotification} />
          </View>
        </View>
      </View>

      {showSearch && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search astrologers..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
            <Text>Search</Text>
          </TouchableOpacity>
          {searchQuery !== '' && (
            <TouchableOpacity onPress={handleClearSearch} style={styles.clearButton}>
              <Text>Clear</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      <FlatList
        data={astrologers}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleAstrologerPress(item)}>
            <AstrologerCard astrologer={item} onChatPress={() => { }} pageSight={false} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          loading ? (
            <View style={styles.loading}><Text>Loading...</Text></View>
          ) : !allDataLoaded ? (
            <View style={styles.loading}><Text>Load More</Text></View>
          ) : null
        }
      />

      <Modal
        animationType='slide'
        transparent={true}
        visible={showModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter Astrologers</Text>

            <Text style={styles.label}>Domain:</Text>
            <Picker
              selectedValue={selectedDomain}
              onValueChange={(itemValue) => setSelectedDomain(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="All Domains" value="" />
              {domains.map((domain) => (
                <Picker.Item key={domain} label={domain} value={domain} />
              ))}
            </Picker>
            <Text>Language:</Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label='All Languages' value={''} />
              {
                languages.map(item =>
                  (<Picker.Item key={item} label={item} value={item} />)
                )
              }

            </Picker>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={applyFilter} style={styles.applyButton}>
                <Text style={styles.buttonText}>Apply</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={cancelHandler} style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

      </Modal >

    </View >
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  applyButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  cancelButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  picker: {
    height: 50,
    marginBottom: 10,
  },

  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 18,
    backgroundColor: '#FAFA33',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 17,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FAFA33',
  },
  clearButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  searchButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.9,
    borderColor: 'black',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  balanceSymbol: {
    fontSize: 13,
    marginRight: 2,
    fontWeight: 'bold',
  },
  balanceText: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  icon: {
    marginLeft: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  loading: {
    display: 'flex',
    alignItems: 'center'
  },
  filterIconContainer: {
    position: 'relative',
  },
  filterNotification: {
    position: 'absolute',
    top: -1,
    right: -1,
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    width: 100,
    height: 100
  }
});
