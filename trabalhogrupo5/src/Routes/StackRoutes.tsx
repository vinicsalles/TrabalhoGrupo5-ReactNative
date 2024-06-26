import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../Pages/Login";
import DrawerNavigation from "./DrawerNavigation";
import ProductDetailScreen from "../Pages/Produto";
import { Auth } from "../Hooks/useAuth";
import { Pagamentos } from "../Pages/Pagamento";

export type ParametrosRota = {
  StackLogin: { name: string };
  StackTabsPages: { name: string };
  StackDetails: { id: number };
  Drawer: { name: string };
  StackPagamento: { name: string };
};

const Stack = createNativeStackNavigator<ParametrosRota>();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Auth>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="StackLogin" component={Login} />
          <Stack.Screen name="Drawer" component={DrawerNavigation} />
          <Stack.Screen name="StackDetails" component={ProductDetailScreen} />
          <Stack.Screen name="StackPagamento" component={Pagamentos} />
        </Stack.Navigator>
      </Auth>
    </NavigationContainer>
  );
}
