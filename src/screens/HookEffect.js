import React, { useEffect } from 'react';
import {  View, Text } from 'react-native';

const HookEffect = () => {

    useEffect( () => {
        getUserData();
    }, [])

    const getUserData = async() => {
        try {
            const response = await fetch("https://thapatechnical.github.io/userapi/users.json");
            const myData = await response.json();
            console.log(myData);
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <View>
        <Text> HookEffect </Text>
      </View>
    );
  }

export default HookEffect;
