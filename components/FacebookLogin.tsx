import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import useAuth from '../hooks/useAuth';
import { Button, SocialIcon } from 'react-native-elements';
import { View } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function FacebookLogin() {
  const discovery = {
    authorizationEndpoint: 'https://www.facebook.com/v7.0/dialog/oauth',
    tokenEndpoint: 'https://graph.facebook.com/v7.0/oauth/access_token',
  };  
  const ACCESS_TOKEN = 'AccessToken';  
  const isAuthenticated = useAuth();
  const redirectUri = makeRedirectUri({
    useProxy: true,
    native: Constants.manifest.facebookScheme + '://authorize',
  });
  console.log(redirectUri);
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: Constants.manifest.facebookAppId,
      scopes: ['public_profile','email', 'user_likes'],
      redirectUri,
      extraParams: {
        display: 'popup',
        auth_type: 'rerequest',
      },      
    },
    discovery
  );  
  React.useEffect(() => {
    if (response?.type === 'success') {
      SecureStore.setItemAsync(ACCESS_TOKEN, JSON.stringify(response.params));
    }
  }, [response]);
  const [userId, setUserId] = React.useState('');
  return (
    <View style={{marginVertical: 20}}>
      <SocialIcon
        title='Sign In With Facebook'
        button
        type='facebook'
        onPress={() => {
          promptAsync({
            windowFeatures: { width: 700, height: 600 }
          });
        }}
      />
    </View>
  );
}


