// pages/spotify.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    const getCode = async () => {
      const { code } = router.query;

      if (code) {
        try {
          // Exchange the authorization code for an access token
          const tokenResponse = await axios.post('/api/callback', null, {
            params: {
              code,
            },
          });

          // Redirect to the home page after successful authentication
          if (tokenResponse.status === 200) {
            router.push('/');
          } else {
            console.error('Failed to authenticate with Spotify.');
          }
        } catch (error) {
          console.error('Error during authentication:', error);
        }
      }
    };

    getCode();
  }, [router.query]);

  return <div>Authenticating...</div>;
};

export default Login;
