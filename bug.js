```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = [{"id": '1', "title": 'Item 1'}, {"id": '2', "title": 'Item 2'}, {"id": '3', "title": 'Item 3'}];

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(DATA);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>      
      <Text>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList data={items} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App; 
```