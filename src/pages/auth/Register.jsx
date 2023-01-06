import { Button, Stack, TextField } from '@mui/material';
import { useRef } from 'react';
import WHiteSpace from '../../components/App/whitespac/WHiteSpace';

const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = () => {
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
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
            label="Name"
            type="text"
            variant="outlined"
            inputRef={nameRef}
          />
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
          <Button variant="contained" component="label" color="warning">
            Upload Avatar
            <input type="file" hidden />
          </Button>
          <WHiteSpace height={20} />
          <Button variant="contained" onClick={handleSubmit}>
            Sign Up
          </Button>
          <WHiteSpace height={50} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Register;
