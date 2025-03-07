import FooterContent from '../../components/FooterContent/FooterContent';
import HeaderContent from '../../components/HeaderContent/HeaderContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from './components/MainContent';

const Accueil = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <HeaderContent />
            <MainContent />
            <FooterContent />
        </div>
    );
};

export default Accueil;