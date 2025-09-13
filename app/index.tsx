import { Redirect, useRootNavigationState } from 'expo-router';

export default function Index() {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;  // wait for root layout

  return <Redirect href="/login" />;  // safely redirect
}
