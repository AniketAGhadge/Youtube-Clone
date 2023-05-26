import { Provider } from 'react-redux';
import './App.css';
import Body from './component/Body';
import Header from './component/Header';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './component/WatchPage';
import MainContainer from './component/MainContainer';


const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <Body/> ,
    children : ([
      {
        path : '/' ,
        element : <MainContainer/>
      },
      {
        path : 'watch' ,
        element : <WatchPage/>
      }
    ])
  }
])

const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
