import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";
import { useDeleteBookMutation, useGetBookQuery } from "@/redux/api/baseApi";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useNavigate } from "react-router";
import type { IBook } from "@/types";
import { Card } from "./ui/card";
import { XCircle } from "lucide-react";
import BorrowBook from "@/components/BorrowBook";

export default function BookTable() {
  const navigate = useNavigate();
  
  const { data, isLoading, isError } = useGetBookQuery(
    {
      filter: "",
      skip: 0,
    },
    {
      pollingInterval: 30000,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    }
  );

  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await deleteBook(id).unwrap();
          toast.success(res.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Bounce,
          });
        }
      });
    } catch (error) {
      console.log(error, "error from delete book function");
      toast.error("Failed to delete book");
    }
  };

  if (isLoading) {
    return (
      <div className="px-4 md:px-8 mt-4">
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex space-x-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="p-8 text-center">
          <div className="flex flex-col items-center space-y-4">
            <XCircle className="h-16 w-16 text-red-500" />
            <h2 className="text-2xl font-bold text-gray-900">
              Error Loading Books
            </h2>
            <p className="text-gray-600">
              There was an error loading the book list. Please try again.
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="mb-4">
      </div>

      <div className="hidden md:block mb-6">
        <Table className="text-center">
          <TableHeader className="bg-blue-300 dark:bg-blue-500 text-black text-center">
            <TableRow>
              <TableHead className="text-black">Title</TableHead>
              <TableHead className="text-black">Author</TableHead>
              <TableHead className="text-black">Genre</TableHead>
              <TableHead className="text-black">ISBN</TableHead>
              <TableHead className="text-black">Copies</TableHead>
              <TableHead className="text-black">Availability</TableHead>
              <TableHead className="text-black">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data &&
              data.data &&
              data.data.map((book: IBook, index: number) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.genre}</TableCell>
                    <TableCell>
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                        {book.isbn}
                      </code>
                    </TableCell>
                    <TableCell>{book.copies}</TableCell>
                    <TableCell>
                      {book.available ? "Available" : "Not Available"}
                    </TableCell>
                    <TableCell className="flex justify-center gap-2">
                      <Button
                        onClick={() => navigate(`/edit-book/${book._id}`)}
                      >
                        Edit
                      </Button>
                      <BorrowBook
                        book={book._id}
                        available={book.available}
                      />
                      <Button
                        onClick={() => handleDelete(book._id)}
                        variant="destructive"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>

      <div className="md:hidden mb-3">
        <div className="flex flex-wrap justify-center gap-4">
          {data.data.length === 0 ? (
            <p className="text-center py-8 text-gray-500">No books available</p>
          ) : (
            data.data.map((book: IBook, index: number) => {
              return (
                <Card
                  key={index}
                  className="w-full p-4"
                >
                  <h3 className="font-bold text-lg mb-2">{book.title}</h3>
                  <p className="mb-1"><span className="font-medium">Author:</span> {book.author}</p>
                  <p className="mb-1"><span className="font-medium">Genre:</span> {book.genre}</p>
                  <p className="mb-1">
                    <span className="font-medium">ISBN:</span>{" "}
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                      {book.isbn}
                    </code>
                  </p>
                  <p className="mb-1"><span className="font-medium">Copies:</span> {book.copies}</p>
                  <p className="mb-3">
                    <span className="font-medium">Availability:</span>{" "}
                    {book.available ? "Available" : "Not Available"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      onClick={() => navigate(`/edit-book/${book._id}`)}
                      size="sm"
                    >
                      Edit
                    </Button>
                    <BorrowBook 
                      book={book._id} 
                      available={book.available}
                      
                    />
                    <Button
                      onClick={() => handleDelete(book._id)}
                      variant="destructive"
                      size="sm"
                    >
                      Delete
                    </Button>
                  </div>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}