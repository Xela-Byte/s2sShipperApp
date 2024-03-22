import {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {WithSplashScreen} from './src/components/splashScreen/SplashScreen';
import Navigator from './src/utils/navigation/Navigator';
import {Provider as StateProvider} from 'react-redux';
import store, {persistor} from './src/stateManagement/store';
import {PersistGate} from 'redux-persist/integration/react';

type Props = {};

const App = (props: Props) => {
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAppReady(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <WithSplashScreen isAppReady={isAppReady}>
        <PersistGate persistor={persistor}>
          <StateProvider store={store}>
            <Navigator />
          </StateProvider>
        </PersistGate>
      </WithSplashScreen>
    </GestureHandlerRootView>
  );
};

export default App;
