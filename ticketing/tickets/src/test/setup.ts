import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';
import jwt from 'jsonwebtoken';

declare global {
  var signin: () => string[];
}

let mongo: any;

beforeAll(async () => {
  process.env.JWT_KEY = 'asdf';

  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri, {});
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  if (mongo) {
    await mongo.stop();
  }
  await mongoose.connection.close();
});

global.signin = () => {
  // Build a JWT payload { id, email, }
  const payload = {
    id: 'j23l4j23lj',
    email: 'testemail@test.com'
  }
  // Create the JWT!
  const token = jwt.sign(payload, process.env.JWT_KEY!);
  // Build the session object { jwt: MY_JWT }
  const session = { jwt: token }
  // Turn that session into JSON
  const sessionJson = JSON.stringify(session);
  // Take JSON and encode it as base64
  const base64 = Buffer.from(sessionJson).toString('base64')
  // return string thats the cookie with the encoded data
  return [`session=${base64}`];
};
