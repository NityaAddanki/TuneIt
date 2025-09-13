// app/_layout.tsx
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
            {/* Login screen */}
            <Stack.Screen name="login" options={{ headerShown: false }} />

            {/* Tabs layout - this will handle all tab screens */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

            {/* Not found / fallback */}
            <Stack.Screen name="+not-found" />
        </Stack>

        <StatusBar style="auto" />
        </ThemeProvider>
    </GestureHandlerRootView>
  );
}