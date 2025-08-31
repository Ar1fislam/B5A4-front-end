# Library Management System

A simple and modern library management system built with React, TypeScript, and Redux Toolkit.

## Features

- **Book Management**: Add, edit, and delete books
- **Borrow System**: Borrow books with quantity tracking
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Real-time Updates**: Automatic data refreshing
- **Clean UI**: Modern and user-friendly interface

##  Pages

- **Home**: Overview of all books
- **All Books**: Complete book list with actions
- **Add Book**: Form to add new books
- **Borrow Summary**: View borrowed books statistics

## Technologies Used

- **Frontend**: React + TypeScript
- **State Management**: Redux Toolkit Query (RTK Query)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Notifications**: React Toastify

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd library-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```


## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

##  How to Use

1. **View Books**: Go to the "All Books" page to see all available books
2. **Add Book**: Click "Add Book" to add new books to the library
3. **Edit Book**: Click the "Edit" button on any book to update its details
4. **Borrow Book**: Use the "Borrow" button to borrow books
5. **View Summary**: Check "Borrow Summary" to see borrowing statistics

## Responsive Design

The application works perfectly on:
- Desktop computers
- Tablets
- Mobile phones

## API Integration

The app uses RTK Query for all API operations:
- Fetching book lists
- Adding new books
- Updating book information
- Deleting books
- Managing borrow operations