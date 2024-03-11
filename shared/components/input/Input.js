import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
Ionicons.loadFont();
AntDesign.loadFont();
Feather.loadFont();
const Input = ({
  label,
  error,
  password,
  defaultValues,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const onTextEmail = () => {
    console.log('email is entered');
  };
  const [hidePassword, setHidePassword] = React.useState(password);
  return (
    <View style={{marginBottom: 9}}>
      <View style={[style.inputContainer]}>
        {console.log(defaultValues)}
        <TextInput
          style={{paddingLeft: 10, flex: 1}}
          secureTextEntry={hidePassword}
          onChange={onTextEmail}
          defaultValue={defaultValues}
          {...props}
        />
        {password && (
          <Feather
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye' : 'eye-off'}
            size={20}
            color="black"
            style={{marginRight: 15}}
          />
        )}
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  inputContainer: {
    height: 46,

    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',

    borderColor: 'black',
  },
});
export default Input;
