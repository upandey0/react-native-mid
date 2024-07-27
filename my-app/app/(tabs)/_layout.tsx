// app/(tabs)/_layout.tsx
import { Stack,Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    // <Tabs>
    //   <Tabs.Screen name="index" options={{ title: 'Home' }} />
    //   <Tabs.Screen name="explore" options={{ title: 'Explore' }} />
    // </Tabs>
    <Stack
       screenOptions={{headerShown : false}}
    />
  );
}