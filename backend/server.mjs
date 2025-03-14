import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;
const DATA_FILE = path.join(__dirname, 'datas', 'JapaneseWords.json');

app.use(cors());
app.use(bodyParser.json());

/**
 * Get all categories of vocabulary words.
 * 
 * @route GET /api/vocabulaire
 * @returns {Object} 200 - An array of vocabulary categories
 * @returns {Error}  500 - Error reading the file
 */
app.get('/api/vocabulaire', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading the file.' });
        }
        res.json(JSON.parse(data));
    });
});

/**
 * Add new words to a specific category.
 * 
 * @route POST /api/vocabulaire/:category
 * @param {string} category - The category to which the word will be added
 * @param {Object} newWord - The new word to add
 * @returns {Object} 201 - The newly added word
 * @returns {Error}  500 - Error reading or writing the file
 */
app.post('/api/vocabulaire/:category', (req, res) => {
    const category = req.params.category;
    const newWord = req.body;

    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading the file.' });
        }

        const vocabulaire = JSON.parse(data);
        newWord.id = vocabulaire[category].length ? vocabulaire[category][vocabulaire[category].length - 1].id + 1 : 1;
        vocabulaire[category].push(newWord);

        fs.writeFile(DATA_FILE, JSON.stringify(vocabulaire, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error writing the file.' });
            }
            res.status(201).json(newWord);
        });
    });
});

/**
 * Modify an existing word in a specific category.
 * 
 * @route PUT /api/vocabulaire/:category/:id
 * @param {string} category - The category of the word to modify
 * @param {number} id - The ID of the word to modify
 * @param {Object} updatedWord - The updated word data
 * @returns {Object} 200 - The updated word
 * @returns {Error}  404 - Category or word not found
 * @returns {Error}  500 - Error reading or writing the file
 */
app.put('/api/vocabulaire/:category/:id', (req, res) => {
    const category = req.params.category;
    const id = parseInt(req.params.id, 10);
    const updatedWord = req.body;

    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading the file.' });
        }

        const vocabulaire = JSON.parse(data);

        if (!vocabulaire[category]) {
            return res.status(404).json({ error: 'Category not found.' });
        }

        const index = vocabulaire[category].findIndex(word => word.id === id);

        if (index === -1) {
            return res.status(404).json({ error: 'Word not found.' });
        }

        vocabulaire[category][index] = updatedWord;

        fs.writeFile(DATA_FILE, JSON.stringify(vocabulaire, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error writing the file.' });
            }
            res.json(updatedWord);
        });
    });
});

/**
 * Delete a word from a specific category.
 * 
 * @route DELETE /api/vocabulaire/:category/:id
 * @param {string} category - The category of the word to delete
 * @param {number} id - The ID of the word to delete
 * @returns {null} 204 - No content
 * @returns {Error}  404 - Category or word not found
 * @returns {Error}  500 - Error reading or writing the file
 */
app.delete('/api/vocabulaire/:category/:id', (req, res) => {
    const category = req.params.category;
    const id = parseInt(req.params.id, 10);

    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading the file.' });
        }

        const vocabulaire = JSON.parse(data);

        if (!vocabulaire[category]) {
            return res.status(404).json({ error: 'Category not found.' });
        }

        const index = vocabulaire[category].findIndex(word => word.id === id);

        if (index === -1) {
            return res.status(404).json({ error: 'Word not found.' });
        }

        vocabulaire[category].splice(index, 1);

        fs.writeFile(DATA_FILE, JSON.stringify(vocabulaire, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error writing the file.' });
            }
            res.status(204).end();
        });
    });
});

/**
 * Start the server and listen on the specified port.
 */
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});