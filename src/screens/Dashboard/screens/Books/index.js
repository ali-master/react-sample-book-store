import React, { useEffect } from 'react';
import Table from './components/Table/'
import booksData from '../../../../db/db.json';
import AddBook from './components/AddBook';

const Books = () => {
    return (
        <div>
            <AddBook />

            <Table data={booksData.books} />
        </div>
    )
}

export default Books;