import React, { useCallback, useRef, useMemo } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {SAMPLE_DATA } from './assets/data/sampleData';

export default function App() {
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  const openModal = () => {
    bottomSheetModalRef.current.present();
  }

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.largeTitle}>Markets</Text>
        </View>
        <View style={styles.divider} />

        <FlatList
          keyExtractor={(item) => item.id}
          data={SAMPLE_DATA}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChange={item.price_change_percentage_7d_in_currency}
              logoUrl={item.image}
              onPress={ () => openModal()}
            />
          )}
        />
      </View>
      <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
        >
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleWrapper: {
    marginTop: 80,
    paddingHorizontal: 16
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16
  }
});
