import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const products = [
  { id: '1', name: 'Organic Bananas', price: '$4.99', image: require('../assets/banana.png') },
  { id: '2', name: 'Red Apple', price: '$4.99', image: require('../assets/apple.png') },
  { id: '3', name: 'Chile', price: '$4.99', image: require('../assets/chile.png') },
  { id: '4', name: 'Ginger', price: '$4.99', image: require('../assets/ginger.png') },
  { id: '5', name: 'Beef Bone', price: '$4.99', image: require('../assets/beef.png') },
  { id: '6', name: 'Broiler Chicken', price: '$4.99', image: require('../assets/chicken.png') },
];

export default function HomeScreen({ navigation }) {
  const renderProduct = (item) => (
    <View key={item.id} style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('ProductDetail', { product: item })} // Điều hướng đến màn hình chi tiết
      >
        <Feather name="plus" color="#fff" size={20} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Header with centered address and logo */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>🥕</Text> {/* Logo 🥕 */}
          </View>
          <Text style={styles.location}>📍 Dhaka, Banassre</Text> {/* Address */}
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Store"
            placeholderTextColor="#888"
          />
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Image
            source={require('../assets/veggies.png')} // Banner image
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Fresh Vegetables</Text>
            <Text style={styles.bannerSubTitle}>Get Up To 40% OFF</Text>
          </View>
        </View>

        {/* Exclusive Offer */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.slice(0, 2).map(renderProduct)}  {/* Showing Organic Bananas and Red Apple */}
        </ScrollView>

        {/* Best Selling */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.slice(2, 4).map(renderProduct)}  {/* Showing Chile and Ginger */}
        </ScrollView>

        {/* Groceries */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Groceries</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.slice(4, 6).map(renderProduct)}  {/* Showing Beef Bone and Broiler Chicken */}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    paddingTop: 40,
    paddingBottom: 10,
  },
  logoContainer: {
    marginBottom: 10, // Space between logo and address
  },
  logo: {
    fontSize: 36, // Adjust the size of the logo 🥕
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16, paddingVertical: 8 },
  banner: { backgroundColor: '#e0f7fa', marginHorizontal: 20, borderRadius: 15, overflow: 'hidden', marginBottom: 20 },
  bannerImage: { width: '100%', height: 150 },
  bannerTextContainer: { position: 'absolute', top: 20, left: 20 },
  bannerTitle: { fontSize: 22, fontWeight: 'bold', color: '#000' },
  bannerSubTitle: { fontSize: 16, color: '#444' },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  seeAll: { color: '#28a745', fontWeight: 'bold' },
  productCard: {
    width: 140,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  productImage: { width: 80, height: 80, marginBottom: 8 },
  productName: { fontSize: 14, fontWeight: 'bold', textAlign: 'center' },
  productPrice: { fontSize: 13, color: '#777', marginBottom: 8 },
  addButton: { backgroundColor: '#28a745', padding: 6, borderRadius: 20 },
});
