import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      !name.trim() ||
      !message ||
      !message.trim()
    ) {
      res.status(422).json({ message: 'Invaid input.' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    let client;

    const url = `mongodb+srv://${process.env.db_username}:${process.env.db_password}@${process.env.db_clustername}.wvudi.mongodb.net/?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(url);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db('next');

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Storing message failed' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage });
  }
};

export default handler;
