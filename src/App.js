import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import AddExpense from "./components/ExpensesPage/AddExpense";
import ExpensesMain from "./components/ExpensesPage/ExpensesMain";
import HomeMain from "./components/HomePage/HomeMain";
import AddPerson from "./components/MealCount/AddPerson";
import MealCountCardUpdate from "./components/MealCount/MealCountCardUpdate";
import MealCountDetails from "./components/MealCount/MealCountDetails";
import MealCountMain from "./components/MealCount/MealCountMain";
const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<HomeMain />} path='/'></Route>
          <Route element={<ExpensesMain />} path='/expenses'></Route>
          <Route element={<MealCountMain />} path='/meal-count'></Route>
          <Route element={<AddPerson />} path='/add-person'></Route>
          <Route element={<MealCountDetails />} path='/meal-count-details/:person'></Route>
          <Route element={<MealCountCardUpdate />} path='/meal-count-card-update'></Route>
          <Route element={<AddExpense />} path='/add-expense'></Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
