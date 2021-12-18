import React from 'react'
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';

const ListItem = () => {
  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        {/* Left side of the list item */}
        <View style={styles.leftWrapper}>
          <Image
            source={require('../assets/ethereum.png')}
            style={styles.image}>
          </Image>
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>Ethereum</Text>
            <Text style={styles.subtitle}>ETH</Text>
          </View>
        </View>

        {/* Right side of the list item */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>Price</Text>
          <Text style={styles.subtitle, {color: 'red'}}>Value</Text>
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