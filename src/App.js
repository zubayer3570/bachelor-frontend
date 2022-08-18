import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Expenses from './components/Expenses';
import Options from './components/Options';
import MealCount from './components/MealCount';
import MyAccount from './components/MyAccount';
import ExpenseDetails from './components/ExpenseDetails';
import AddExpense from './components/AddExpense';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Options />} />
        <Route path='/expenses' element={<Expenses />} />
        <Route path='/expenses-deatils/:id' element={<ExpenseDetails />} />
        <Route path='/meal-count' element={<MealCount />} />
        <Route path='/my-account' element={<MyAccount />} />
        <Route path='/add-expense' element={<AddExpense />} />
      </Routes>
    </>
  );
}

export default App;
