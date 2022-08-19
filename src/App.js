import { Route, Routes } from "react-router-dom";
import AddDate from "./components/HomePage/Expense/AddDate";
import Expense from "./components/HomePage/Expense/Expense";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <>
      
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<Expense/>} path='/expense' />
        <Route element={<AddDate/>} path='/add-date' />
      </Routes>
    </>
  );
}

export default App;
