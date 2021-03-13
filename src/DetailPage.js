import React, {useState} from 'react';
import { Text, View } from 'react-native';
import {WebView} from 'react-native-webview';
import * as Progress from 'react-native-progress';

const DetailPage = ({
  navigation, route
}) => {
  const {imagelink} = route.params
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <>
    {!isLoaded ?
      <Progress.Bar 
        borderWidth={0}
        borderRadius={0}
        color="#f4511e"
        progress={progress}
        width={null}
      />:
      null
    }
    <WebView
      source={{uri: imagelink}}
      onError={(event)=> alert(`Webview error ${event.nativeEvent.description}`)}
      onLoadProgress={({nativeEvent}) => setProgress(nativeEvent.progress)}
      onLoadEnd={()=> setIsLoaded(true)}
    />
    </>
)};

export default DetailPage;
