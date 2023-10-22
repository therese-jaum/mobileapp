import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  SectionList,
  ActivityIndicator,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  Switch,
  Picker,
  StatusBar,
  Alert,
  Button as RNButton,
  StyleSheet,
} from 'react-native';

const MyComponent = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [selectedPickerValue, setSelectedPickerValue] = useState('Option 1');
  const [showText, setShowText] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);
  const [showScrollView, setShowScrollView] = useState(false);
  const [showFlatList, setShowFlatList] = useState(false);
  const [showSectionList, setShowSectionList] = useState(false);
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  const [showTouchableHighlight, setShowTouchableHighlight] = useState(false);
  const [showTouchableOpacity, setShowTouchableOpacity] = useState(false);
  const [showSwitch, setShowSwitch] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [showStatusBar, setShowStatusBar] = useState(false);
  const [showComponent9, setShowComponent9] = useState(false);
  const [showComponent10, setShowComponent10] = useState(false);
  const [showComponent11, setShowComponent11] = useState(false);
  const [showComponent12, setShowComponent12] = useState(false);
  const [showComponent13, setShowComponent13] = useState(false);
  const [showComponent14, setShowComponent14] = useState(false);
  const [showComponent15, setShowComponent15] = useState(false);
  const [showComponent16, setShowComponent16] = useState(false);

  const sections = [
    {
      title: 'MARVEL',
      data: ['Spiderman', 'Endgame'],
    },
    {
      title: 'DC',
      data: ['The Flash', 'Superman vs. Batman'],
    },
  ];

  const showAlert = (componentName) => {
    Alert.alert(`Alert from ${componentName}`, 'This is an alert message.');
  };

  return (
    <View style={styles.container}>
      <RNButton title="Alert" color="#21675e" onPress={() => setShowText(!showText)} style={styles.button} />
      {showText && (
        <TouchableHighlight onPress={() => showAlert('Text')} style={styles.touchable}>
          <Text style={styles.text}>Hello, World!</Text>
        </TouchableHighlight>
      )}

      

      <RNButton title="TextInput" color="#21675e" onPress={() => setShowTextInput(!showTextInput)} style={styles.button} />
      {showTextInput && (
        <View style={styles.touchable}>
          <TextInput
            placeholder="ENTER TEXT"
            value={textInputValue}
            onChangeText={(text) => setTextInputValue(text)}
          />
        </View>
      )}

      <RNButton
        title="ScrollView"
        color="#21675e"
        onPress={() => setShowScrollView(!showScrollView)}
        style={styles.button} 
      />
      {showScrollView && (
        <ScrollView style={styles.touchable}>
          <Text>Scrollable content goes here</Text>
        </ScrollView>
      )}

      <RNButton
        title="FlatList"
        color="#21675e"
        onPress={() => setShowFlatList(!showFlatList)}
        style={styles.button} 
      />
      {showFlatList && (
        <FlatList
          data={[
            { key: 'MARVEL' },
            { key: 'DC' },
          ]}
          renderItem={({ item }) => (
            <TouchableHighlight onPress={() => showAlert('FlatList')} style={styles.touchable}>
              <Text style={styles.text}>{item.key}</Text>
            </TouchableHighlight>
          )}
        />
      )}

      <RNButton
        title="SectionList"
        color="#21675e"
        onPress={() => setShowSectionList(!showSectionList)}
        style={styles.button}
      />
      {showSectionList && (
        <SectionList
          sections={sections}
          renderItem={({ item }) => (
            <TouchableHighlight onPress={() => showAlert('SectionList')}>
              <Text>{item}</Text>
            </TouchableHighlight>
          )}
          renderSectionHeader={({ section }) => (
            <TouchableHighlight onPress={() => showAlert('SectionList Header')}>
              <Text>{section.title}</Text>
            </TouchableHighlight>
          )}
        />
      )}

      <RNButton
        title="ActivityIndicator"
        color="#21675e"
        onPress={() => setShowActivityIndicator(!showActivityIndicator)}
        style={styles.button} 
      />
      {showActivityIndicator && (
        <ActivityIndicator size="large" color="#0000ff" style={styles.touchable} />
      )}

      <RNButton
        title="TouchableHighlight"
        color="#21675e"
        onPress={() => setShowTouchableHighlight(!showTouchableHighlight)}
        style={styles.button} 
      />
      {showTouchableHighlight && (
        <TouchableHighlight onPress={() => showAlert('TouchableHighlight')} style={styles.touchable}>
          <Text>Touchable Highlight</Text>
        </TouchableHighlight>
      )}

      <RNButton
        title="TouchableOpacity"
        color="#21675e"
        onPress={() => setShowTouchableOpacity(!showTouchableOpacity)}
        style={styles.button} 
      />
      {showTouchableOpacity && (
        <TouchableOpacity onPress={() => showAlert('TouchableOpacity')} style={styles.touchable}>
          <Text>Touchable Opacity</Text>
        </TouchableOpacity>
      )}

      <RNButton title="Modal" color="#21675e" onPress={() => setModalVisible(!modalVisible)} style={styles.button} />
      {modalVisible && (
        <Modal visible={modalVisible}>
          <TouchableHighlight onPress={() => showAlert('Modal')} style={styles.touchable}>
            <Text>PINDOTA NG CLOSE</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => setModalVisible(false)} style={styles.touchable}>
            <Text>Close Modal</Text>
          </TouchableHighlight>
        </Modal>
      )}

      <RNButton title="Switch" color="#21675e" onPress={() => setShowSwitch(!showSwitch)} style={styles.button} />
      {showSwitch && (
        <TouchableHighlight onPress={() => showAlert('Switch')} style={styles.touchable}>
          <Switch value={switchValue} onValueChange={(value) => setSwitchValue(value)} />
        </TouchableHighlight>
      )}

      <RNButton title="Picker" color="#21675e" onPress={() => setShowPicker(!showPicker)} style={styles.button} />
      {showPicker && (
        <TouchableHighlight onPress={() => showAlert('Picker')} style={styles.touchable}>
          <Picker selectedValue={selectedPickerValue} onValueChange={(itemValue) => setSelectedPickerValue(itemValue)}>
            <Picker.Item label="Don't let yesterday take up too much today" value="Don't let yesterday take up too much today" />
            <Picker.Item label="Life happens when you're busy making other plans" value="Life happens when you're busy making other plans" />
          </Picker>
        </TouchableHighlight>
      )}

      <RNButton title="Toggle StatusBar" color="#21675e" onPress={() => setShowStatusBar(!showStatusBar)} style={styles.button} />
      {showStatusBar && (
        <TouchableHighlight onPress={() => showAlert('StatusBar')} style={styles.touchable}>
          <StatusBar backgroundColor="#ff0000" barStyle="light-content" />
        </TouchableHighlight>
        
      )}
        <RNButton title="Dailog" color="#21675e" onPress={() => setShowComponent9(!showComponent9)} style={styles.button} />
      {showComponent9 && (
        <TouchableHighlight onPress={() => showAlert('Component 9')} style={styles.touchable}>
          <Text>Component 9</Text>
        </TouchableHighlight>
      )}

      <RNButton title="Badge" color="#21675e" onPress={() => setShowComponent10(!showComponent10)} style={styles.button} />
      {showComponent10 && (
        <TouchableHighlight onPress={() => showAlert('Component 10')} style={styles.touchable}>
          <Text>Component 10</Text>
        </TouchableHighlight>
      )}

      <RNButton title="Avatar" color="#21675e" onPress={() => setShowComponent11(!showComponent11)} style={styles.button} />
      {showComponent11 && (
        <TouchableHighlight onPress={() => showAlert('Component 11')} style={styles.touchable}>
          <Text>Component 11</Text>
        </TouchableHighlight>
      )}

      <RNButton title="Collapsable" color="#21675e" onPress={() => setShowComponent12(!showComponent12)} style={styles.button} />
      {showComponent12 && (
        <TouchableHighlight onPress={() => showAlert('Component 12')} style={styles.touchable}>
          <Text>Component 12</Text>
        </TouchableHighlight>
      )}

      <RNButton title="Checkbox" color="#21675e" onPress={() => setShowComponent13(!showComponent13)} style={styles.button} />
      {showComponent13 && (
        <TouchableHighlight onPress={() => showAlert('Component 13')} style={styles.touchable}>
          <Text>Component 13</Text>
        </TouchableHighlight>
      )}

      <RNButton title="Map" color="#21675e" onPress={() => setShowComponent14(!showComponent14)} style={styles.button} />
      {showComponent14 && (
        <TouchableHighlight onPress={() => showAlert('Component 14')} style={styles.touchable}>
          <Text>Component 14</Text>
        </TouchableHighlight>
      )}

      <RNButton title="Drawer" color="#21675e" onPress={() => setShowComponent15(!showComponent15)} style={styles.button} />
      {showComponent15 && (
        <TouchableHighlight onPress={() => showAlert('Component 15')} style={styles.touchable}>
          <Text>Component 15</Text>
        </TouchableHighlight>
      )}

      <RNButton title="Web View" color="#21675e" onPress={() => setShowComponent16(!showComponent16)} style={styles.button} />
      {showComponent16 && (
        <TouchableHighlight onPress={() => showAlert('Component 16')} style={styles.touchable}>
          <Text>Component 16</Text>
        </TouchableHighlight>
        
      )}
      
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#21675e',
  },
  button: {
    width: '80%', 
    height: 50,
    marginVertical: 10,
    backgroundColor: 'green',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
  buttonText: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    color: 'white',
  },
  touchable: {
    width: '80%', 
    marginVertical: 10,
    backgroundColor: 'lightyellow', 
    padding: 15, 
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'blue',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  scrollViewContent: {
    width: '100%',
    padding: 30,
  },
  sectionHeader: {
    width: '100%', 
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionItem: {
    width: '100%',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    marginLeft: 10,
    fontFamily: 'Montserrat',
    fontSize: 16,
  },
  picker: {
    width: '80%', 
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginVertical: 10,
  },
});
export default MyComponent;

