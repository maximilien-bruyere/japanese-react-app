import HeaderContent from '../../components/HeaderContent/HeaderContent';
import KatakanaContent from './components/KatakanaContent.jsx';
import FooterContent from '../../components/FooterContent/FooterContent';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hiragana = () => {

    return (
        <>
            <HeaderContent />
            <KatakanaContent />
            <FooterContent />
        </>
    );
};
export default Hiragana;