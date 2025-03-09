import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { useState, useEffect } from 'react';

const VocabulaireButtons = (props) => {
    const [selectedCategory, setSelectedCategory] = useState('Noms communs');

    useEffect(() => {
        props.onSelectCategory('Noms communs');
    }, []);

    const handleSelect = (val) => {
        setSelectedCategory(val);
        props.onSelectCategory(val);
    };

    return (
        <ToggleButtonGroup
            type="radio"
            name="categories"
            value={selectedCategory}
            onChange={handleSelect}
            className="mb-3"
        >
            {props.categories.map((category, index) => (
                <ToggleButton
                    key={index}
                    id={`category-${index}`}
                    value={category}
                    variant="secondary"
                    className='no-border-radius'
                >
                    {category}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};

export default VocabulaireButtons;