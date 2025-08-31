import BookTable from "@/components/books-table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative h-72">
        <div className="w-full h-full bg-black/80 absolute"></div>
        <div className="w-full px-4 h-full flex flex-col gap-3 text-white justify-center items-center absolute text-center">
          <h1 className="text-center text-xl md:text-3xl font-bold">
            Space Library Management System
          </h1>
          <p className="max-w-[500px] text-gray-300">
            Your Digital Library, Simplified. Easily manage your entire book collection. Add new finds, update details, remove old titles, and track borrowed books—all through one simple, clean interface.
          </p>
        </div>
        <img
          className="w-full h-full"
          src="https://images.unsplash.com/photo-1502700807168-484a3e7889d0?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Library"
        />
      </div>
      <div className="flex justify-between items-center mx-4 md:mx-8 my-3">
        <h1
          className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
        >
          Book List
        </h1>
        <Button onClick={() => navigate("/create-book")}>Add Book</Button>
      </div>
      <div className="mx-4 md:mx-8">
        <BookTable />
      </div>
    </div>
  );
}
