// pages/api/callback.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.query;

  try {
    // Exchange the authorization code for an access token
    const tokenResponse = await axios.post('http://localhost:5003/auth/callback', null, {
      params: {
        code,
      },
    });

    // Return the token response
    res.status(200).json(tokenResponse.data);
  } catch (error) {
    console.error('Error during Spotify callback:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
