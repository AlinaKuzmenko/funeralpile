import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
