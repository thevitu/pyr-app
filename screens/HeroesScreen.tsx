import * as React from 'react';
import { Dimensions } from 'react-native';
import { Card, Button, ThemeProvider, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { images } from '../components/LocalImage';


export default function HeroesScreen() {
  const screenWidth = Math.round(Dimensions.get('window').height * 0.3);
  const screenHeight = screenWidth;
  const navigation = useNavigation();
  return (
    <ThemeProvider>
      <Card>
        <Image source={ images.myHeroes } style={{ width: screenWidth, height: screenHeight }} />
        <Button title="My Heroes" raised={ true } onPress={ () => navigation.navigate('MyHeroes') } />
      </Card>
      <Card>
        <Image source={ images.recruit } style={{ width: screenWidth, height: screenHeight }} />
        <Button title="Recruit" raised={ true } onPress={ () => navigation.navigate('Recruit')} />
      </Card>
    </ThemeProvider>    
  );
}
