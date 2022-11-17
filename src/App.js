import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import './App.scss';


function App() {
  return (
    <div className="app">
      <Layout>
        <Header />
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
