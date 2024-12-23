import './results.css';
import './error.css';

export default function error() {
    return (
        <div className="results">
            <h2>Results</h2>
            <div className='error'>
            <p className="textoError">
                Ooops, you went out of orbit.
            </p>
            <img className="imagenError" src="/images/astronauterror.png" alt="search not fount" />
            </div>
        </div>
    )
}