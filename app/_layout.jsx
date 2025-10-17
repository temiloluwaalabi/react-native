import { Stack } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../constants/colors";
import { StatusBar } from "expo-status-bar";
const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <>
      <StatusBar value="auto" />

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title, // color of the back button
          headerTitleStyle: { fontWeight: "bold" }, // weight of header title color
        }}
      >
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />

        <Stack.Screen
          name="index"
          // options={{
          //   headerTitle: () => (
          //     <Text style={{ fontSize: 18, fontWeight: "bold" }}>Home</Text>
          //   ),
          // }}
          options={{ headerTitle: "Home" }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
