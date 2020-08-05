import * as React from 'react';
import { Button, Input, ThemeProvider, Card, Divider, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import FacebookLogin from '../components/FacebookLogin';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(screenWidth * 0.678);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ThemeProvider>
          <Image source={ require('../assets/images/home.jpg') } style={{ width: screenWidth, height: screenHeight }} />
          <Card title="Protect Your Realm"> 
            <Input label="Username" placeholder="Username" leftIcon={{ type: 'material', name: 'account-circle' }} defaultValue={''} textContentType="username"  />
            <Input label="Password" placeholder="Password" leftIcon={{ type: 'material', name: 'lock' }} defaultValue={''} textContentType="password" secureTextEntry={true} />
            <Button title="Login" raised={ true } onPress={() => { navigation.navigate('Root'); }} />
            <FacebookLogin />
          </Card>
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
};
