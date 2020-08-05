import * as React from 'react';
import axios, { Method } from 'axios'

export default function usePyrApiAsync(url : string, method = "get", ...params : any[] ) : [boolean, any] {  
  const [isLoaded, setLoaded] = React.useState(false);
  const [response, setResponse] = React.useState(null);
  //TODO: handling idempotent requset and cache control  
  let m : Method = <Method>method;
  React.useEffect(() => {
    async function getApi() {      
      try {
        const json = await axios('http://192.168.1.93:8080/api' + url, {
          method: m,
          params: {date: new Date()}
        });
        //console.log(json.data);
        setResponse(json.data);
        setLoaded(true);
      } catch (e) {
        console.warn(e);        
      };
    };
    getApi();
  }, [url]);
  return [isLoaded, response];
};
