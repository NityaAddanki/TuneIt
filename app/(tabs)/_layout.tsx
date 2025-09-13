// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: 'Home',
          headerShown: false,
          tabBarStyle: {display: 'none'}
        }} 
      />
      {/* Add other tab screens here if needed */}
    </Tabs>
  );
}