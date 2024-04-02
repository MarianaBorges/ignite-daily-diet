import { ActivityIndicator } from 'react-native';
import { 
  useFonts,
  NunitoSans_400Regular, 
  NunitoSans_700Bold 
} from '@expo-google-fonts/nunito-sans';
import { ThemeProvider } from 'styled-components/native';

import { Routes } from '@routes/index';
import theme from './src/theme';


export default function App() {
  const [ fontsLoaded ] = useFonts({
    NunitoSans_400Regular, 
    NunitoSans_700Bold 
  })

  if (!fontsLoaded)
    return <ActivityIndicator size="large" color="#00ff00"/>

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
