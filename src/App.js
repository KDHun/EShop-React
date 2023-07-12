import './App.css';
import Bill from './Components/Bill/Bill';
import Login from './Components/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeaderPage from './pages/HeaderPage';
import Home from './pages/Home';
import SignUp from './Components/Login/SignUp';
import AddCustomer from './Components/Customer/AddCustomer';
import AddEmployee from './Components/Employee/AddEmployee';
import AddItem from './Components/Item/AddItem';
import CustomerList from './Components/Customer/CustomerList';
import EmploydeeList from './Components/Employee/EmployeeList';
import ItemList from './Components/Item/ItemList';
import BillList from './Components/Bills/BillList';
import About from './Components/About/About';




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path:'/login',
      element: <HeaderPage />,
      children: [
        {
          path: '/login',
          element: <Login/>
        }
      ]
    },
    {
      path: '/signup',
      element:<HeaderPage />,
      children:[
        {
          path:'/signup',
          element: <SignUp/>
        }
      ]
    },
    {
      path: '/bill',
      element: <HeaderPage />,
      children:[
        {
          path: '/bill',
          element: <Bill/>
        }
      ]
    },
    {
      path:'/feature',
      element: <HeaderPage />,
      children:[
        {
          path: '/feature/addcustomer',
          element: <AddCustomer/>
        },
        {
          path: '/feature/addemployee',
          element: <AddEmployee/>
        },
        {
          path: '/feature/additem',
          element: <AddItem/>
        },
        {
          path: '/feature/customers',
          element: <CustomerList/>
        },
        {
          path: '/feature/employees',
          element: <EmploydeeList/>
        },
        {
          path: '/feature/items',
          element: <ItemList/>
        },
        {
          path: '/feature/bills',
          element: <BillList/>
        }

      ]
    },
    {
      path: '/about',
      element: <HeaderPage />,
      children:[
        {
          path: '/about',
          element: <About/>
        }
      ]
    },

  ])
 

  return <RouterProvider router={router}/>
 
  
}

export default App;
