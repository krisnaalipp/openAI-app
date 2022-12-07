import HomePage from "./pages/HomePage";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <HomePage />
      </div>
    </RouterProvider>
  );
}

export default App;
