import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon

interface InputComponentProps {
  secureText: boolean;
  placeholder: string;
  value: string;
  setValue: (newValue: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ secureText, placeholder, value, setValue }) => {
  const [isSecure, setIsSecure] = useState(secureText); // State to toggle secureTextEntry

  // Function to toggle visibility
  const toggleSecureTextEntry = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={styles.inputContainer}>
      {value.length > 0 && <Text style={styles.label}>{placeholder}</Text>}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={isSecure} // Controls text visibility
          value={value}
          onChangeText={(text) => setValue(text)}
          placeholderTextColor="#1D1D1D"
        />
        {secureText && 
        <TouchableOpacity onPress={toggleSecureTextEntry}>
          <Icon
            name={isSecure ? 'eye-off' : 'eye'} // Switch icon based on the secure state
            size={20}
            color="gray"
            style={styles.icon}
          />
        </TouchableOpacity>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  input: {
    flex: 1,
    height: 40,
    color: '#1D1D1D',
    fontSize: 18,
    fontWeight:'600'
  },
  icon: {
    marginLeft: 10,
  },
});

export default InputComponent;
