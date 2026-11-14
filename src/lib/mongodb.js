import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

if (!globalThis.__mongoClientPromise && uri) {
  globalThis.__mongoClientPromise = new MongoClient(uri, options).connect();
}

export const clientPromise = globalThis.__mongoClientPromise ?? null;

export async function getMongoClient() {
  if (!uri) {
    throw new Error('MONGODB_URI is not defined. Add it to your environment variables before using the contact form API.');
  }

  if (!globalThis.__mongoClientPromise) {
    globalThis.__mongoClientPromise = new MongoClient(uri, options).connect();
  }

  return globalThis.__mongoClientPromise;
}

export default getMongoClient;
