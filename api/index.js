import express from 'express';
import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
app.use(express.json());
app.use(express.static('public'));

// Simple URL schema
const Url = mongoose.model('Url', {
  originalUrl: String,
  shortUrl: String,
  clicks: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

// API Routes
app.get('/api/stats/:shortUrl', async (req, res) => {
  try {
    const urlDoc = await Url.findOne({ shortUrl: req.params.shortUrl });
    if (!urlDoc) {
      return res.status(404).json({ error: 'URL not found' });
    }
    res.json(urlDoc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/shorten', async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    const shortUrl = nanoid(8);
    const urlDoc = await Url.create({
      originalUrl: url,
      shortUrl
    });

    res.json(urlDoc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/:shortUrl', async (req, res) => {
  try {
    const urlDoc = await Url.findOne({ shortUrl: req.params.shortUrl });
    if (!urlDoc) {
      return res.sendFile(join(dirname(fileURLToPath(import.meta.url)), 'public', 'index.html'));
    }
    urlDoc.clicks++;
    await urlDoc.save();
    res.redirect(urlDoc.originalUrl);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Root route
app.get('/', (req, res) => {
  res.sendFile(join(dirname(fileURLToPath(import.meta.url)), 'public', 'index.html'));
});

// MongoDB connection
await mongoose.connect(process.env.MONGODB_URI);

export default app;