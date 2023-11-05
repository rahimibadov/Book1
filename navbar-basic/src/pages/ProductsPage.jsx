import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../components/Card';

const ProductsPage = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3090/books")
      .then((res) => setBooks(res.data));
  }, []);


  return (
    <div>
      {!books ? (<div className="text-center my-5">Loading..</div>
      ) : (
        <>
          <h3 className='mx-5 mt-3'>{books.length}kitab var</h3>
          <div className='card-container'>
            {books.map((book) => (
              <Card key={book.id} book={book} />
            ))}
          </div>
        </>
        )}
    </div>
  );
};

export default ProductsPage;

//dfjvndfjv
