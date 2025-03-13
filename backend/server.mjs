import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 5000;
const DATA_FILE = path.join(__dirname, 'datas', 'JapaneseWords.json');

app.use(cors());
app.use(bodyParser.json());

// Route pour obtenir toutes les catégories de vocabulaire
app.get('/api/vocabulaire', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la lecture du fichier.' });
        }
        res.json(JSON.parse(data));
    });
});

// Route pour ajouter un mot de vocabulaire
app.post('/api/vocabulaire/:category', (req, res) => {
    const category = req.params.category;
    const newWord = req.body;

    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la lecture du fichier.' });
        }

        const vocabulaire = JSON.parse(data);
        newWord.id = vocabulaire[category].length ? vocabulaire[category][vocabulaire[category].length - 1].id + 1 : 1;
        vocabulaire[category].push(newWord);

        fs.writeFile(DATA_FILE, JSON.stringify(vocabulaire, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Erreur lors de l\'écriture du fichier.' });
            }
            res.status(201).json(newWord);
        });
    });
});

// Route pour mettre à jour un mot de vocabulaire
app.put('/api/vocabulaire/:category/:id', (req, res) => {
    const category = req.params.category;
    const id = parseInt(req.params.id, 10);
    const updatedWord = req.body;

    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la lecture du fichier.' });
        }

        const vocabulaire = JSON.parse(data);

        // Vérifie que la catégorie existe
        if (!vocabulaire[category]) {
            return res.status(404).json({ error: 'Catégorie non trouvée.' });
        }

        // Trouve l'index du mot à mettre à jour
        const index = vocabulaire[category].findIndex(word => word.id === id);

        // Vérifie que le mot existe
        if (index === -1) {
            return res.status(404).json({ error: 'Mot non trouvé.' });
        }

        // Met à jour le mot
        vocabulaire[category][index] = updatedWord;

        // Écrit les données mises à jour dans le fichier
        fs.writeFile(DATA_FILE, JSON.stringify(vocabulaire, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Erreur lors de l\'écriture du fichier.' });
            }
            res.json(updatedWord);
        });
    });
});

// Route pour supprimer un mot de vocabulaire
app.delete('/api/vocabulaire/:category/:id', (req, res) => {
    const category = req.params.category;
    const id = parseInt(req.params.id, 10);

    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la lecture du fichier.' });
        }

        const vocabulaire = JSON.parse(data);

        // Vérifie que la catégorie existe
        if (!vocabulaire[category]) {
            return res.status(404).json({ error: 'Catégorie non trouvée.' });
        }

        // Trouve l'index du mot à supprimer
        const index = vocabulaire[category].findIndex(word => word.id === id);

        // Vérifie que le mot existe
        if (index === -1) {
            return res.status(404).json({ error: 'Mot non trouvé.' });
        }

        // Supprime le mot
        vocabulaire[category].splice(index, 1);

        // Écrit les données mises à jour dans le fichier
        fs.writeFile(DATA_FILE, JSON.stringify(vocabulaire, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Erreur lors de l\'écriture du fichier.' });
            }
            res.status(204).end();
        });
    });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});