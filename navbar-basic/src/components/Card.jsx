import { Link } from 'react-router-dom'

const Card = ({ book }) => {
  return (
    <div className="card shadow rounded p-2 text-center">
        <img className="rounded" src={book.image}/>

        <div className="card-body">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <Link 
            to={`/ürün/${book.id}`} 
            className="btn btn-primary w-100">Detala bax</Link>
        </div>
    </div>
  )
}

export default Card;

