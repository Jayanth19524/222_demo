import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Input from '../../shared/components/input/Input';
import Header from './Header';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../AuthContext';

export const loginData = [];

const MyScreen = () => {
  const [category, setCategory] = useState('landlord');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
  const [professionId, setProfessionId] = useState('');
  const navigation = useNavigation();
  const {state, dispatch} = useAuth();

  const handleCategoryChange = value => {
    setCategory(value);
  };

  const handleInputChange = (key, value) => {
    switch (key) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'profession':
        setProfession(value);
        break;
      case 'professionId':
        setProfessionId(value);
        break;
      default:
        break;
    }
  };

  const handleCreateAccount = () => {
    const areAllEmpty = [
      firstName,
      lastName,
      email,
      phone,
      profession,
      professionId,
    ].every(str => !str || str.trim() === '');
    console.log('string boy' + areAllEmpty);
    if (areAllEmpty) {
      console.log('All strings are empty or contain only whitespace.');
    } else {
      console.log(loginData);
      if (loginData.length > 1) {
        console.log('All strings are empty or contain only whitespace.');
      } else {
        const userData = {
          category,
          firstName,
          lastName,
          email,
          phone,
          profession,
          professionId,
        };

        loginData.push(userData);

        navigation.navigate('Tabs');
        dispatch({type: 'LOGIN'});

        if (category === 'landlord') {
          // Handle landlord form data
        } else if (category === 'serviceProvider') {
          // Handle service provider form data
        }
      }
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 60,
      backgroundColor: '#f0f0f0',
    },
    logoContainer: {
      marginBottom: 30,
      alignItems: 'center',
    },
    logo: {
      width: 100,
      height: 100,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'regular',
      marginTop: 200,
      paddingBottom: 30,
    },
    categoryContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    categoryButton: {
      flex: 1,
      paddingVertical: 10,
      alignItems: 'center',
      borderBottomWidth: 2,
      borderColor: 'transparent',
    },
    selectedCategory: {
      borderColor: '#BE2448',
    },
    categoryText: {
      fontSize: 15,
      fontWeight: 'regular',
      color: '#ccc',
    },
    selectedCategoryText: {
      fontWeight: 'regular',
      color: 'black',
    },
    formContainer: {
      width: '100%',
      marginBottom: 20,
      maxHeight: 250, // Add maxHeight to limit the height of the form container
    },
    input: {
      height: 40,
      borderColor: 'black',
      borderWidth: 1.5,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 2,
      backgroundColor: '#fff',
    },
    createAccountButton: {
      backgroundColor: '#BE2448',
      borderRadius: 8,
      paddingVertical: 15,
      paddingHorizontal: 40,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',

      // eslint-disable-next-line no-dupe-keys
      fontSize: 12,
      // eslint-disable-next-line no-dupe-keys
      fontWeight: '700',
      lineHeight: 14,
      letterSpacing: 0,
    },
  });

  return (
    <View style={styles.container}>
      <Header style={{width: '100%', height: 170}} />

      <Text style={styles.heading}>Create Your Account</Text>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            category === 'landlord' && styles.selectedCategory,
          ]}
          onPress={() => handleCategoryChange('landlord')}>
          <Text
            style={[
              styles.categoryText,
              category === 'landlord' && styles.selectedCategoryText,
            ]}>
            Landlord
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            category === 'serviceProvider' && styles.selectedCategory,
          ]}
          onPress={() => handleCategoryChange('serviceProvider')}>
          <Text
            style={[
              styles.categoryText,
              category === 'serviceProvider' && styles.selectedCategoryText,
            ]}>
            Service Provider
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <Input
          placeholder="firstName"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <Input
          placeholder="Last Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder="Phone"
          value={phone}
          onChangeText={text => setPhone(text)}
        />

        {category === 'serviceProvider' && (
          <>
            <Input
              placeholder="Profession"
              value={profession}
              onChangeText={text => setProfession(text)}
            />
            <Input
              placeholder="Profession ID Number"
              value={professionId}
              onChangeText={text => setProfessionId(text)}
            />
          </>
        )}
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>Create Your Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyScreen;
