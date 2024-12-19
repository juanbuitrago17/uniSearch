import './card-result.css';

export default function CardResult({ result }) {
    return (
        <a href='#'>
            <div className="card">
            <div className='description_imagen'>
            <img src={result['image_url']} width="300px" />
            </div>
            <div className='description'>
            <h3 className="cardTitle">{result.name}</h3>
            <p className='cardDescription'>{result.description}</p>
            </div>
            </div>
        </a>
    )
}