import BookTable from "@/components/books-table";

export default function AllBook() {
  return (
    <div className="px-4 md:px-8 flex flex-col py-4 gap-3">
          <h1
                className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 text-center md:text-left"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
              >
                All Books
              </h1>
      <BookTable/>
    </div>
  );
}
