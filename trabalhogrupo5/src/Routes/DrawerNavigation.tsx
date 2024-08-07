import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Catalogo } from "../Pages/Catalogo";
import { Home } from "../Pages/Home";
import { Profile } from "../Pages/Profile";
import { DrawerStyle } from "./style";
import { BottomTabsRoutes } from "./BottomTabsRoutes";
import { Login } from "../Pages/Login";

const drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <drawer.Navigator
      screenOptions={{
        drawerStyle: DrawerStyle.container,
        headerStyle: DrawerStyle.header,
        headerTintColor: "#FF7E04",
        drawerLabelStyle: DrawerStyle.corTextoLateral,
      }}
    >
      <drawer.Screen
        name="Home"
        component={BottomTabsRoutes}
        options={{ title: "Promoções" }}
      />

      <drawer.Screen
        name="Perfil"
        component={Profile}
        options={{ title: "Meu perfil" }}
      />
      <drawer.Screen
        name="Catalogo"
        component={Catalogo}
        options={{ title: "Catálogo" }}
      />
    </drawer.Navigator>
  );
}
