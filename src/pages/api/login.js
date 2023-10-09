import { connectMongoDB } from "../../../util/mongodb"
import User from "../../../models/user"

export default async function handler(req, res) {

  await connectMongoDB()

  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username, password });

      if (user) {
        // success login
        res.status(200).json({ message: 'Succesfully Login!' });
      } else {
        // failed login
        res.status(401).json({ message: 'Failed to Login.' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Cannot connecting to database.' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
