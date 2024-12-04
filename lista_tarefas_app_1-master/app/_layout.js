import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="configuracao" />
      <Stack.Screen name="lista" />
    </Stack>
  );
} 