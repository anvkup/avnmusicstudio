// src/lib/mongodb.js

import { MongoClient } from 'mongodb';

// Ensure the MONGODB_URI is available
if (!process.env.MONGODB_URI) {
  // If this error is visible, the .env.local file is not being loaded.
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In development, use a global variable so the database connection
  // is preserved across module reloads (Fast Refresh).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, connect normally
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the connection can be shared across API routes.
export default clientPromise;