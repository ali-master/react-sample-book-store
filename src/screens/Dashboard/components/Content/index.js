import React from 'react';
import Books from '../../screens/Books/';
import booksData from '../../../../db/db.json';

function Content() {
  return (
    <div>
      <Books data={booksData.books} />
    </div>
  );
}
export default Content;