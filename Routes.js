import React, { useState, useEffect, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/NavigationContainer';
import Providers from './Providers';

const Stack = createStackNavigator();

export const Routes = () => {
  // React hooks to get simulated user login data
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // checks AsyncStorage for if user logged in or not here
    // using state inside the functional component
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
          login();
        }
        setLoading(false);
      })
      .catch(err => {
        console.err();
      });
  }, []);
};
