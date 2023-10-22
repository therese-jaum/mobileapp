import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !contactNumber || !password) {
      Alert.alert('Error', 'Please fill out all fields.', [{text: 'OK'}]);
    } else if (password.length < 8) {
      Alert.alert('Warning', 'Your password should be at least 8 characters long.', [{text: 'OK'}]);
    } else {
      Alert.alert('Form Submitted', `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nContact Number: ${contactNumber}\nPassword: ${password}`, [{text: 'OK'}]);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '100%' }}
        placeholder="First Name"
        onChangeText={text => setFirstName(text)}
        defaultValue={firstName}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '100%' }}
        placeholder="Last Name"
        onChangeText={text => setLastName(text)}
        defaultValue={lastName}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '100%' }}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        defaultValue={email}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '100%' }}
        placeholder="Contact Number"
        onChangeText={text => setContactNumber(text)}
        defaultValue={contactNumber}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '100%' }}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        defaultValue={password}
        secureTextEntry={true}
      />
      <Button
        title="Sign Up"
        onPress={handleSubmit}
      />
    </View>
  );
};

export default SignUp;
