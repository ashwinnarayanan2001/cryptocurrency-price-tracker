import React from 'react'
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';

const ListItem = ({name, symbol, currentPrice, priceChange, logoUrl, onPress}) => {
  const priceChangeColor = priceChange > 0 ? '#34C759' : '#FF3B30';

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemWrapper}>
        {/* Left side of the list item */}
        <View style={styles.leftWrapper}>
          <Image
            source={{uri: logoUrl}}
            style={styles.image}>
          </Image>
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>

        {/* Right side of the list item */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>${currentPrice.toLocaleString('en-US', {currency: 'USD'})}</Text>
          <Text style={styles.subtitle, { color: priceChangeColor }}>{priceChange.toFixed(2)}%</Text>
        </View>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 48,
    width: 48
  },
  titlesWrapper: {
    marginLeft: 8
  },
  rightWrapper: {
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
    color: '#a9abb1'
  },
});

export default ListItem;