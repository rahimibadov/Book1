

import { useLocation } from 'react-router-dom';

const UndefinedPage = () => {
  const { state } = useLocation();

  return (
    <div style={{ height: '80vh' }} className="container my-5">
      <img
        className="rounded img-fluid"
        src="https://cdn.dribbble.com/users/2046015/screenshots/6015680/08_404.gif"
      />
      <p className="text-center fs-3 my-5">
        Sorry page is not found
      </p>

      {state && (
        <p className="fs-3 text-center">
          Hata Kodunuz{' '}
          <span className="badge bg-warning">{state}</span>
        </p>
      )}
    </div>
  );
};

export default UndefinedPage;

 