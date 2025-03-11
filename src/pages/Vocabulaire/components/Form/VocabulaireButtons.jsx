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
            {props.categories.map((category, index) => {

                const isFirstOfType = index === 0;
                const isEndOfType = index === props.categories.length - 1;

                return (

                <ToggleButton
                    key={index}
                    id={`category-${index}`}
                    value={category}
                    variant="secondary"
                    style={{
                        transition: 'background-color 0.35s ease',
                        borderRadius: '0',
                        borderBottomLeftRadius: isFirstOfType ? '8px' : '0',
                        borderBottomRightRadius: isEndOfType ? '8px' : '0'
                    }}
                >
                    {category}
                </ToggleButton>
                );
            })}
            
        </ToggleButtonGroup>
    );
};

export default VocabulaireButtons;