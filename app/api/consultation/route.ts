import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI || 'mongodb+srv://anurag132200:mongodbs@cluster0.gxvpbqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.date || !data.time) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db('beyond_economy_travels');
    const collection = db.collection('consultations');
    
    // Insert the new consultation
    const result = await collection.insertOne({
      ...data,
      createdAt: new Date(),
      status: 'pending'
    });

    return NextResponse.json(
      { message: 'Consultation booked successfully!', id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error booking consultation:', error);
    return NextResponse.json(
      { message: 'Error booking consultation' },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
