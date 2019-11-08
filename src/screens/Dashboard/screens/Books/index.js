import React, { useEffect } from 'react';
import Table from './components/Table/'
import booksData from '../../../../db/db.json';

const Books = () => {
    return (
        <Table data={booksData.books} />
    )
}

export default Books;