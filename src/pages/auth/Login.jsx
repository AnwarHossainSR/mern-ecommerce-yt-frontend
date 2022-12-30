import { Button, Stack, TextField, Typography } from '@mui/material';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import WHiteSpace from '../../components/App/whitespac/WHiteSpace';
import { PostRequest } from '../../utils/requests';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = () => {
    const response = PostRequest('/login', {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    console.log(response);
  };
  return (
    <Stack>
      <Stack
        sx={{
          width: '40%',
          height: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          borderRadius: '5px',
          my: 4,
          boxShadow: 2,
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{
            width: '60%',
            textAlign: 'center',
          }}
          pt={5}
        >
          <h2>Login</h2>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            inputRef={emailRef}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            inputRef={passwordRef}
          />
          <WHiteSpace height={20} />
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>

          <Typography variant="p">
            Don&#39;t have an account? <Link to="/register">Register</Link>
          </Typography>
          <WHiteSpace height={50} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
