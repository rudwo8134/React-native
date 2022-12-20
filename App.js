import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
  },
  {
    initialRouteName: "Component",
    defaultNavigationOptions: {
      title: "Testing...",
    },
  }
);

export default createAppContainer(navigator);
