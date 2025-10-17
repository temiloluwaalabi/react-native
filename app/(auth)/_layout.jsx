import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useUser } from "../../hooks/use-user";
import GuestOnly from "../../components/auth/GuestOnly";
const AuthLayout = () => {
  const { user } = useUser();

  console.log("Current User", user);
  return (
    <GuestOnly>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      />
    </GuestOnly>
  );
};

export default AuthLayout;
