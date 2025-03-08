import { Table, Button } from 'react-bootstrap';

const VocabulaireTable = ({ words, onEditWord, onDeleteWord }) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Japanese</th>
                    <th>On-yomi</th>
                    <th>Kun-yomi</th>
                    <th>Traduction</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {words.map((word, index) => (
                    <tr key={index}>
                        <td>{word.japanese}</td>
                        <td>{word["onYomi"]}</td>
                        <td>{word["kunYomi"]}</td>
                        <td>{word.translation}</td>
                        <td>
                            <Button variant="light" onClick={() => onEditWord(word)}>Modifier</Button>{' '}
                            <Button variant="danger" onClick={() => onDeleteWord(word)}>Supprimer</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default VocabulaireTable;