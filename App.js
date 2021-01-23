import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
