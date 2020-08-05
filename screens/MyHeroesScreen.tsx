import * as React from 'react';
import { FlatList } from 'react-native';
import { ThemeProvider, Text } from 'react-native-elements';
import { ListItem } from 'react-native-elements'
import usePyrApiAsync from '../hooks/usePyrApi';
import { useNavigation } from '@react-navigation/native';
import LocalImage from '../components/LocalImage';

export default function MyHeroesScreen() {
  const navigation = useNavigation();
  const [isLoaded, response] = usePyrApiAsync('/users/45/heroes');
  return (
    <ThemeProvider>
      { !isLoaded ? <Text>Loading...</Text> : 
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={response._embedded.userHeroes}
          renderItem={({item}) => (
            <ListItem
              title={item.hero.name}
              subtitle={'Level: ' +  item.baseHero.lvl }
              leftAvatar={{ source: LocalImage(item.hero.image) }}
              bottomDivider
              chevron
              onPress={() => navigation.navigate('HeroDetails', {title: item.hero.name, userHero: item})}
            />           
          )}
        />
      }
    </ThemeProvider>    
  );
};

