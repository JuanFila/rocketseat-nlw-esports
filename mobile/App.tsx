import { StatusBar } from 'react-native';

import{
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import {Routes} from './src/routs';
import { Loading } from './src/componenets/Loading';
import {Background} from './src/componenets/Background';

export default function App() {
  const[fontsPag] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

 
  return (
    <Background> 
    <StatusBar
      barStyle="Light-content"
      backgroundColor="transparent"
      translucent
    />
    { fontsPag ?  <Routes/> : <Loading/>}
    </Background>

  );
}

