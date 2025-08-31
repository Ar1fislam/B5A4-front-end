import App from "@/App";
import AllBook from "@/pages/allBook";
import BorrowedBooksSummary from "@/pages/BorrowSummary";
import CreateBook from "@/pages/CreateBook";
import ErrorPage from "@/pages/error-page";
import Home from "@/pages/Home";
import UpdateBook from "@/pages/UpdateBook";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "books",
        Component: AllBook,
      },
      {
        path: "create-book",
        Component: CreateBook,
      },
      {
        path: "borrow-summary",
        Component: BorrowedBooksSummary,
      },
      {
        path: "edit-book/:id",
        Component: UpdateBook,
      },
      {
        path: "borrow/:bookId",
        element: (
          <div>
            <h1>borrow a book</h1>
          </div>
        ),
      },
    ],
  },
]);
