import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

const NotFoundContent = () => {
    return(
    <div className='body'>
    <Alert variant="danger">
        <Alert.Heading>Une erreur s&apos;est produite !</Alert.Heading>
        <p>Impossible de trouver cette page.</p>
        <Link to={{pathname: '/home'}}>
            <p>Cliquez sur le lien</p>
        </Link>
    </Alert>
    </div>
    );
}

export default NotFoundContent