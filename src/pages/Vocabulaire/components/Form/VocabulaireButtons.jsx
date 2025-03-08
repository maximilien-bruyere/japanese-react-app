import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { useState } from 'react';

const VocabulaireButtons = ({ categories, onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSelect = (val) => {
        setSelectedCategory(val);
        onSelectCategory(val);
    };

    return (
        <ToggleButtonGroup
            type="radio"
            name="categories"
            value={selectedCategory}
            onChange={handleSelect}
            className="mb-3"
        >
            {categories.map((category, index) => (
                <ToggleButton
                    key={index}
                    id={`category-${index}`}
                    value={category}
                    variant="secondary"
                >
                    {category}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};

export default VocabulaireButtons;