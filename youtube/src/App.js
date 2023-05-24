import { Provider } from 'react-redux';
import './App.css';
import Body from './component/Body';
import Header from './component/Header';
import store from './utils/store';

const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <Body/>
    </Provider>
  );
}

export default App;
