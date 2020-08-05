import * as React from 'react';
import { ThemeProvider, Card, Button } from 'react-native-elements';
import usePyrApiAsync from '../hooks/usePyrApi';
import { View, ScrollView } from 'react-native';
import Recruit from '../components/Recruit';
import CounterButton from '../components/CounterButton';

export default function RecruitScreen() {
  const [isUserLoaded, user] = usePyrApiAsync('/users/45');
  const emptyArray : number[]  = [];
  const [recruits, setRecruits] = React.useState(emptyArray);    
  return (
    <ThemeProvider>
      <Card>
          <View style={{flexGrow: 1, flexDirection: "row"}}>
            <View  style={{marginRight: 20}}>
              <CounterButton 
                title="Recruit Hero" 
                increase={false} 
                diasabledAt={0} 
                value={isUserLoaded && user?.recruitmentPosters != null ? user?.recruitmentPosters : 0} 
                onPress={() => {
                  setRecruits([...recruits, recruits.length]);                  
                }}
                confirm={true}
              />           
            </View>
            <Button title="Clear" onPress={() => setRecruits(emptyArray) } />
          </View>          
      </Card>
      <ScrollView>
        { recruits.map(item => (<Recruit key={item} />)) }
      </ScrollView>
    </ThemeProvider>    
  );
};
