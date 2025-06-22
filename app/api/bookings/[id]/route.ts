import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI || 'mongodb+srv://anurag132200:mongodbs@cluster0.gxvpbqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'beyond_economy_travels';
const collectionName = 'consultations';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await request.json();
    
    if (!['pending', 'confirmed', 'cancelled'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      );
    }

    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    
    const result = await db.collection(collectionName).updateOne(
      { _id: new ObjectId(params.id) },
      { $set: { status } }
    );
    
    await client.close();

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Consultation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating consultation:', error);
    return NextResponse.json(
      { error: 'Failed to update consultation' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    
    const result = await db.collection(collectionName).deleteOne({
      _id: new ObjectId(params.id)
    });
    
    await client.close();

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Consultation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting consultation:', error);
    return NextResponse.json(
      { error: 'Failed to delete consultation' },
      { status: 500 }
    );
  }
}
