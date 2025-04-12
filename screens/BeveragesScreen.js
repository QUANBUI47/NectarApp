// BeveragesScreen.js
import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const beverages = [
  { id: '1', name: 'Diet Coke', price: '$1.99', image: require('../assets/diet-coke.png') },
  { id: '2', name: 'Sprite Can', price: '$1.50', image: require('../assets/sprite.png') },
  { id: '3', name: 'Apple & Grape Juice', price: '$15.99', image: require('../assets/apple-juice.png') },
  { id: '4', name: 'Orange Juice', price: '$15.99', image: require('../assets/orange-juice.png') },
  { id: '5', name: 'Coca Cola Can', price: '$4.99', image: require('../assets/coca-cola.png') },
  { id: '6', name: 'Pepsi Can', price: '$4.99', image: require('../assets/pepsi.png') },
];

const BeveragesScreen = ({ navigation }) => {
  const renderBeverage = ({ item }) => (
    <View style={styles.beverageCard}>
      <Image source={item.image} style={styles.beverageImage} />
      <Text style={styles.beverageName}>{item.name}</Text>
      <Text style={styles.beveragePrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Icon name="plus" type="feather" color="#fff" size={20} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" type="feather" size={24} />
        </TouchableOpacity>
      </View>

      {/* Beverages List */}
      <FlatList
        data={beverages}
        renderItem={renderBeverage}
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
  beverageCard: { flex: 1, backgroundColor: '#fff', borderRadius: 10, padding: 16, margin: 8, alignItems: 'center' },
  beverageImage: { width: 80, height: 80, marginBottom: 8 },
  beverageName: { fontSize: 14, fontWeight: 'bold', textAlign: 'center' },
  beveragePrice: { fontSize: 12, color: '#888', marginBottom: 8 },
  addButton: { backgroundColor: '#00c853', borderRadius: 20, padding: 8 },
});

export default BeveragesScreen;