import './card-result.css';
import Link from 'next/link';

export default function CardResult({ result }) {
    const imagen = result['image_url'] || '/images/misteryplanet.png';
    return (
        <Link href={`/information/${result._id}`}  >
            <div className="card">
            <div className='description_imagen'>
            <img src={imagen} width="300px" alt={result.name}/>
            </div>
            <div className='description'>
            <h3 className="cardTitle">{result.name}</h3>
            <p className='cardDescription'>{result.description}</p>
            </div>
            </div>
        </Link>
    )
}