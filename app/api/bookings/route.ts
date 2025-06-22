import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI || 'mongodb+srv://anurag132200:mongodbs@cluster0.gxvpbqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'beyond_economy_travels';
const collectionName = 'consultations';

type Consultation = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  travelDate: string;
  destination: string;
  message?: string;
  createdAt: Date;
  status: string;
};

export async function GET() {
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const consultations = await db
      .collection<Consultation>(collectionName)
      .find({})
      .sort({ createdAt: -1 }) // Sort by most recent first
      .toArray();
    
    await client.close();
    
    // Convert _id to string for serialization
    const serializedConsultations = consultations.map(consultation => ({
      ...consultation,
      _id: consultation._id.toString(),
      createdAt: consultation.createdAt.toISOString()
    }));
    
    return NextResponse.json(serializedConsultations);
  } catch (error) {
    console.error('Error fetching consultations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch consultations' },
      { status: 500 }
    );
  }
}
