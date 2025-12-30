import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import 'react-native-reanimated';
import { Colors } from '../constants/theme';

export default function RootLayout() {

  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync('white');
      NavigationBar.setButtonStyleAsync('dark');
    }
  }, []);

  const WorkaaTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary,
      background: '#ffffff',
      card: Colors.secondary,
      text: Colors.primary,
      border: Colors.secondary,
      notification: Colors.accent,
    },
  };

  return (
    <ThemeProvider value={WorkaaTheme}>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="dark" backgroundColor="white" />
    </ThemeProvider>
  );
}
