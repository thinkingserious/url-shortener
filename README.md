# URL Shortener

A simple, fast URL shortener built with Node.js, Express, and MongoDB. Features include click tracking and a clean, responsive interface.

## Features

- 🔗 URL Shortening
- 📊 Click Analytics
- 🚀 Fast Redirects
- 📱 Mobile-Friendly UI
- 🔄 Real-time Stats

## Live Demo

Visit [your-vercel-url] to try it out!

## Tech Stack

- **Frontend**: HTML, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Deployment**: Vercel
- **Other**: nanoid (for URL generation)

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
```

4. Run locally:
```bash
npm start
```

Visit `http://localhost:3000` to see the app.

## Deployment

This project is configured for easy deployment on Vercel:

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

## API Endpoints

- `POST /api/shorten`: Create a new short URL
  - Body: `{ "url": "https://example.com" }`
  - Response: `{ "shortUrl": "abc123", ... }`

- `GET /api/stats/:shortUrl`: Get URL statistics
  - Response: `{ "clicks": 0, "createdAt": "2024-..." }`

## Local Development

1. Ensure MongoDB is running locally or use MongoDB Atlas
2. Update environment variables as needed
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is MIT licensed - see [LICENSE.md](LICENSE.md) for details

## Acknowledgments

- Built with [Express](https://expressjs.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)
- Database hosted on [MongoDB Atlas](https://www.mongodb.com/atlas)
