import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import AccountDetails from "./components/Accounts/AccountDetails";
import AccountsMain from "./components/Accounts/AccountsMain";
import AddAccount from "./components/Accounts/AddAccount";
import AddToMeal from "./components/Accounts/AddToMeal";
import AddToOther from "./components/Accounts/AddToOther";
import AddExpense from "./components/ExpensesPage/AddExpense";
import ExpensesMain from "./components/ExpensesPage/ExpensesMain";
import HomeMain from "./components/HomePage/HomeMain";
import Login from "./components/Login";
import AddPerson from "./components/MealCount/AddPerson";
import MealCountCardUpdate from "./components/MealCount/MealCountCardUpdate";
import MealCountDetails from "./components/MealCount/MealCountDetails";
import MealCountMain from "./components/MealCount/MealCountMain";
import AddToOtherExpense from "./components/OtherExpenses/AddToOtherExpense";
import OtherExpensesMain from "./components/OtherExpenses/OtherExpensesMain";
import Protect from "./components/Protect";
const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Login />} path='/login'></Route>
          <Route element={<HomeMain />} path='/'></Route>
          <Route element={<ExpensesMain />} path='/expenses'></Route>
          <Route element={<MealCountMain />} path='/meal-count'></Route>
          <Route element={<Protect><AddPerson /></Protect>} path='/add-person'></Route>
          <Route element={<MealCountDetails />} path='/meal-count-details/:person'></Route>
          <Route element={<MealCountCardUpdate />} path='/meal-count-card-update'></Route>
          <Route element={<Protect><AddExpense /></Protect>} path='/add-expense'></Route>
          <Route element={<AccountsMain />} path='/accounts'></Route>
          <Route element={<AccountDetails />} path='/account-details/:name'></Route>
          <Route element={<Protect><AddToOther /></Protect>} path='/add-to-other/:name'></Route>
          <Route element={<Protect><AddToMeal /></Protect>} path='/add-to-meal/:name'></Route>
          <Route element={<OtherExpensesMain />} path='/other-expenses'></Route>
          <Route element={<Protect><AddToOtherExpense /></Protect>} path='/add-to-other-expenses'></Route>
          <Route element={<Protect><AddAccount /></Protect>} path='/add-account'></Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;