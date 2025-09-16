// backend/server.js
const express = require('express');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config({ path: '../.env' });

const app = express();
const port = process.env.PORT || 3000;

// --- Middlewares ---
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// --- Database Connection ---
const mongoUri = process.env.MONGO_URI;
const dbName = 'smartNotesDB';
let db;

async function connectToDb() {
    try {
        const client = await MongoClient.connect(mongoUri);
        db = client.db(dbName);
        console.log('Successfully connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
}

// --- LLM API Setup ---
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// --- API Endpoints ---
app.get('/api/notes', async (req, res) => {
    try {
        const notes = await db.collection('notes').find({}).toArray();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching notes', error: err });
    }
});

app.post('/api/notes', async (req, res) => {
    try {
        const { title, body, tags } = req.body;
        const newNote = {
            title,
            body,
            tags: tags || [] // Corrected line
        };
        const result = await db.collection('notes').insertOne(newNote);
        res.status(201).json({ ...newNote, _id: result.insertedId });
    } catch (err) {
        res.status(500).json({ message: 'Error creating note', error: err });
    }
});

app.put('/api/notes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, body, tags } = req.body;
        const updatedNote = {
            title,
            body,
            tags: tags || [] // Corrected line
        };
        await db.collection('notes').updateOne(
            { _id: new ObjectId(id) },
            { $set: updatedNote }
        );
        res.status(200).json({ message: 'Note updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error updating note', error: err });
    }
});

app.delete('/api/notes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db.collection('notes').deleteOne({ _id: new ObjectId(id) });
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting note', error: err });
    }
});

// POST /api/llm: Gemini integration for summarization and generation
app.post('/api/llm', async (req, res) => {
    try {
        const { prompt, type } = req.body;
        if (!prompt || !type) {
            return res.status(400).json({ message: 'Prompt and type are required' });
        }

        const systemMessage = getSystemMessage(type);
        const fullPrompt = `${systemMessage} Here is the content to process: ${prompt}`;

        const result = await model.generateContent(fullPrompt);
        const aiResponse = result.response.text();

        res.status(200).json({ aiResponse });
    } catch (err) {
        console.error('LLM API Error:', err);
        res.status(500).json({ message: 'Error from LLM service', error: err.message });
    }
});

function getSystemMessage(type) {
    switch (type) {
        case 'summarize':
            return 'Summarize the following text concisely.';
        case 'generate-title':
            return 'Generate a concise and creative title for the following text.';
        case 'elaborate':
            return 'Elaborate on the following topic, providing key concepts and essential information.';
        default:
            return 'You are a helpful assistant.';
    }
}

// --- Server Startup ---
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectToDb();
});