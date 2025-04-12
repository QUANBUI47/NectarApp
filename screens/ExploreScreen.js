// ExploreScreen.js
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const categories = [
  { id: '1', name: 'Fresh Fruits & Vegetable', image: require('../assets/fruits.png') },
  { id: '2', name: 'Cooking Oil & Ghee', image: require('../assets/oil.png') },
  { id: '3', name: 'Meat & Fish', image: require('../assets/meat.png') },
  { id: '4', name: 'Bakery & Snacks', image: require('../assets/bakery.png') },
  { id: '5', name: 'Dairy & Eggs', image: require('../assets/dairy.png') },
  { id: '6', name: 'Beverages', image: require('../assets/beverages.png') },
];

const ExploreScreen = ({ navigation }) => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => {
        // Nếu danh mục là "Beverages", chuyển sang BeveragesScreen
        if (item.name === 'Beverages') {
          navigation.navigate('Beverages');
        }
      }}
    >
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Find Products</Text>
      </View>

      {/* Thanh tìm kiếm */}
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Store"
          placeholderTextColor="#888"
        />
      </View>

      {/* Categories */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  headerText: { fontSize: 20, fontWeight: 'bold' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 10, marginBottom: 16 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16, paddingVertical: 8 },
  categoryCard: { flex: 1, backgroundColor: '#fff', borderRadius: 10, padding: 16, margin: 8, alignItems: 'center' },
  categoryImage: { width: 80, height: 80, marginBottom: 8 },
  categoryName: { fontSize: 14, textAlign: 'center' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', padding: 16, backgroundColor: '#fff', borderTopWidth: 1, borderColor: '#ddd' },
});

export default ExploreScreen;