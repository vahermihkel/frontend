import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddProduct from './pages/AddProduct';
import NavigationBar from './components/NavigationBar';
import AdminHome from './pages/AdminHome';
import EditProduct from './pages/EditProduct';
import MaintainProducts from './pages/MaintainProducts';
import Cart from './pages/Cart';
import Category from './pages/Category';
import PaymentCompleted from './pages/PaymentCompleted';

function App() {

  return (
    <div className="App">
      
        <NavigationBar />
        
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/admin" element={ <AdminHome /> } />
          <Route path="/ostukorv" element={ <Cart /> } />
          <Route path="/lisa-toode" element={ <AddProduct /> } />
          <Route path="/muuda-toode/:id" element={ <EditProduct /> } />
          <Route path="/halda-tooteid" element={ <MaintainProducts /> } />
          <Route path="/halda-kategooriaid" element={ <Category /> } />
          <Route path="/tellimus" element={ <PaymentCompleted /> } />
        </Routes>
    </div>
  );
}

export default App;
