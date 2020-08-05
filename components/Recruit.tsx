import * as React from 'react';
import usePyrApiAsync from "../hooks/usePyrApi";
import { Card, Text, ListItem } from "react-native-elements";
import LocalImage from './LocalImage';

export default function Recruit() {
  const [isLoadRecruited, hero] = usePyrApiAsync('/recruitHero?userId=45');
  if (!isLoadRecruited) {
    return null;
  } else {
    const subtitle = "hp " + hero.bonusHp + " mp " + hero.bonusMp + " str " + hero.bonusStrength + " int " + hero.bonusIntelligence + " hit " + hero.bonusHit + " rhit " + hero.bonusRHit;
    return (
      <Card>
        <ListItem
              title={hero.name}
              subtitle={subtitle}
              leftAvatar={{ source: LocalImage(hero.image) }}
              />  
      </Card>
    );
  }
};

