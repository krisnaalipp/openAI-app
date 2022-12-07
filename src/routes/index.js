import { createBrowserRouter } from "react-router-dom";
import GrammarCheckerPage from "../pages/GrammarCheckerPage";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import StudyNotesPage from "../pages/StudyNotesPage";
import KeyWordsCreatorPage from "../pages/KeyWordsCreatorPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/grammar",
        element: <GrammarCheckerPage />,
      },
      {
        path: "/keywords",
        element: <KeyWordsCreatorPage />,
      },
      {
        path: "/studynotes",
        element: <StudyNotesPage />,
      },
    ],
  },
]);

export default router;
