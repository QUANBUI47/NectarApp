// ProductDetailScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params; // Nhận dữ liệu sản phẩm từ HomeScreen
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState('Product Detail'); // Theo dõi tab nào đang mở

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="upload" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Product Image */}
      <Image source={product.image} style={styles.productImage} />

      {/* Product Info */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.productInfo}>
          <View style={styles.productHeader}>
            <Text style={styles.productName}>{product.name.toUpperCase()}</Text>
            <TouchableOpacity>
              <Feather name="heart" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={styles.productWeight}>1kg, Price</Text>
          <View style={styles.quantityPriceRow}>
            <View style={styles.quantitySelector}>
              <TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
                <Feather name="minus" size={20} color="#000" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Feather name="plus" size={20} color="#000" />
              </TouchableOpacity>
            </View>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        </View>

        {/* Accordion Sections */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionHeader} onPress={() => toggleSection('Product Detail')}>
            <Text style={styles.sectionTitle}>Product Detail</Text>
            <Feather
              name={expandedSection === 'Product Detail' ? 'chevron-down' : 'chevron-right'}
              size={24}
              color="#000"
            />
          </TouchableOpacity>
          {expandedSection === 'Product Detail' && (
            <Text style={styles.sectionContent}>
              Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart. As Part Of A Healthful And Varied Diet.
            </Text>
          )}
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionHeader} onPress={() => toggleSection('Nutrition')}>
            <Text style={styles.sectionTitle}>Nutrition</Text>
            <Feather
              name={expandedSection === 'Nutrition' ? 'chevron-down' : 'chevron-right'}
              size={24}
              color="#000"
            />
          </TouchableOpacity>
          {expandedSection === 'Nutrition' && (
            <Text style={styles.sectionContent}>100g</Text>
          )}
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionHeader} onPress={() => toggleSection('Review')}>
            <View style={styles.reviewHeader}>
              <Text style={styles.sectionTitle}>Review</Text>
              <View style={styles.rating}>
                {[...Array(5)].map((_, index) => (
                  <Feather key={index} name="star" size={16} color="#ff9800" />
                ))}
              </View>
            </View>
            <Feather
              name={expandedSection === 'Review' ? 'chevron-down' : 'chevron-right'}
              size={24}
              color="#000"
            />
          </TouchableOpacity>
          {expandedSection === 'Review' && (
            <Text style={styles.sectionContent}>No reviews yet.</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 40, // Để tránh thanh trạng thái
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  productInfo: {
    padding: 16,
    backgroundColor: '#fff',
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productWeight: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  quantityPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 16,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 14,
    color: '#666',
    padding: 16,
    paddingTop: 0,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    marginLeft: 8,
  },
});

export default ProductDetailScreen;