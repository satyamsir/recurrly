import { Link } from "expo-router";
import React from 'react';
import { Text, View } from 'react-native';

const signUp = () => {
  return (
    <View>
      <Text>Sign-up</Text>
      <Link href="/(auth)/sign-in">Sign in</Link>
    </View>
  )
}

export default signUp