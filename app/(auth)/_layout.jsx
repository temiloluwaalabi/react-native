import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useUser } from "../../hooks/use-user";
const AuthLayout = () => {
  const { user } = useUser();

  console.log("Current User", user);
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      />
    </>
  );
};

export default AuthLayout;
