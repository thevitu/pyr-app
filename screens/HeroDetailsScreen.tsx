import * as React from 'react';
import { Dimensions, View, Text } from 'react-native';
import { Card, Button, ThemeProvider, Image, Avatar, ListItem } from 'react-native-elements';
import LocalImage from '../components/LocalImage';


export default function HeroDetailsScreen( {route} : any) {  
  const userHero = route.params?.userHero;
  return (
    <ThemeProvider>      
      <Card>
        <View style={{flexGrow:1, alignItems: 'center'}}>
        <Avatar
          size="xlarge"
          source={ LocalImage(userHero.hero.image) }          
        />
        </View>
        <View>
          <ListItem title="Level" rightTitle={userHero.baseHero.lvl} 
            subtitle={'Exp: ' + userHero.exp}
            rightSubtitle={userHero.baseHero.expToLvlUp}            
            bottomDivider
          />
          <ListItem title="HP" rightTitle={userHero.currentHp} 
            subtitle={userHero.baseHero.hp + ' + ' + userHero.hero.bonusHp + ' + ' + userHero.bonusHp}
            bottomDivider
          />
          <ListItem title="MP" rightTitle={userHero.currentMp} 
            subtitle={userHero.baseHero.mp + ' + ' + userHero.hero.bonusMp + ' + ' + userHero.bonusMp}
            bottomDivider
          />
          <ListItem title="Strength" rightTitle={userHero.currentStrength} 
            subtitle={userHero.baseHero.strength + ' + ' + userHero.hero.bonusStrength + ' + ' + userHero.bonusStrength}
            bottomDivider
          />
          <ListItem title="Intelligence" rightTitle={userHero.currentIntelligence} 
            subtitle={userHero.baseHero.intelligence + ' + ' + userHero.hero.bonusIntelligence + ' + ' + userHero.bonusIntelligence}
            bottomDivider
          />
          <ListItem title="Hit" rightTitle={userHero.currentHit} 
            subtitle={userHero.baseHero.hit + ' + ' + userHero.hero.bonusHit + ' + ' + userHero.bonusHit}
            bottomDivider
          />
          <ListItem title="Ranged Hit" rightTitle={userHero.currentRHit} 
            subtitle={userHero.baseHero.rhit + ' + ' + userHero.hero.bonusRHit + ' + ' + userHero.bonusRHit}
          />
        </View>
      </Card>     
    </ThemeProvider>    
  );
}
