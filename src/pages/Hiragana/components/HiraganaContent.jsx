import { Table } from 'react-bootstrap';
import hiraganaData from '../../../../datas/Hiragana.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const HiraganaContent = () => {
    
    const third = Math.ceil(hiraganaData.length / 3);
    const firstColumn = hiraganaData.slice(0, third);
    const secondColumn = hiraganaData.slice(third, third * 2);
    const thirdColumn = hiraganaData.slice(third * 2);

    const renderTable = (data) => (
        <Table striped bordered hover>
            <thead className="thead-dark">
                <tr>
                    <th className='text-center'>Caractères</th>
                    <th className='text-center'>Prononciations</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td style={{ width: '50%' }}>{item.character}</td>
                        <td style={{ width: '50%' }}>{item.romanization}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center mb-4">Hiragana</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    {renderTable(firstColumn)}
                </div>
                <div className="col-4">
                    {renderTable(secondColumn)}
                </div>
                <div className="col-4">
                    {renderTable(thirdColumn)}
                </div>
            </div>
        </div>
    );
};

export default HiraganaContent;