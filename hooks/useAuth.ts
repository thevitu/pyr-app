import * as React from 'react';
import * as SecureStore from 'expo-secure-store';

export default function useAuthAsync() {
  const ACCESS_TOKEN = 'AccessToken';
  const [isAuthenticated, setAuthenticated] = React.useState(false);

  React.useEffect(() => {
    async function getTokenAsync() {
      let token = null;
      try {
        token = await SecureStore.getItemAsync(ACCESS_TOKEN);
      } catch (e) {
        console.warn(e);
      } finally {
        setAuthenticated(token != null);
      }
    }
  }, []);

  return isAuthenticated;
}
