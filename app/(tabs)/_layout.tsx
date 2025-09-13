// app/(tabs)/_layout.tsx
import { Slot, useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function TabsLayout() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to login after mount
    router.replace('/login');
  }, []);

  return <Slot />; // renders children routes
}
