import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  // state đếm số
  const [count, setCount] = useState(0);

  // state background
  const [bgColor, setBgColor] = useState('green');

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      
      {/* Hiển thị số */}
      <Text style={styles.countText}>{count}</Text>

      {/* Button tăng giảm */}
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.btnText}>Increase</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.btnText}>Decrease</Text>
        </TouchableOpacity>
      </View>

      {/* Các button đổi màu background */}
      <TouchableOpacity
        style={[styles.colorBtn, { backgroundColor: 'blue' }]}
        onPress={() => setBgColor('blue')}
      >
        <Text style={styles.colorText}>BLUE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.colorBtn, { backgroundColor: 'brown' }]}
        onPress={() => setBgColor('brown')}
      >
        <Text style={styles.colorText}>BROWN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.colorBtn, { backgroundColor: 'yellow' }]}
        onPress={() => setBgColor('yellow')}
      >
        <Text style={[styles.colorText, { color: '#000' }]}>YELLOW</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.colorBtn, { backgroundColor: 'red' }]}
        onPress={() => setBgColor('red')}
      >
        <Text style={styles.colorText}>RED</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.colorBtn, { backgroundColor: 'black' }]}
        onPress={() => setBgColor('black')}
      >
        <Text style={styles.colorText}>BLACK</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
  },
  countText: {
    fontSize: 40,
    color: '#fff',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  btn: {
    backgroundColor: '#333',
    padding: 12,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  colorBtn: {
    width: '80%',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
  colorText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
