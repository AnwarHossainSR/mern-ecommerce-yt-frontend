import {
  Alert,
  Button,
  CircularProgress,
  Stack,
  TextField,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import WHiteSpace from '../../components/App/whitespac/WHiteSpace';
import { registerUserAction } from '../../redux/actions/UserAction';

const Register = () => {
  const navigate = useNavigate();
  const { error, isAuth, isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(null);
  const [image, setImage] = useState(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = () => {
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      image: avatar,
    };
    dispatch(registerUserAction(data));
  };

  useEffect(() => {
    if (isAuth) navigate('/');
  }, [isAuth]);
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
          <h2>Register</h2>
          {error && <Alert severity="error">{error}</Alert>}
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
            <input
              type="file"
              hidden
              onChange={(e) => {
                setAvatar(e.target.files[0]);
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = () => {
                  setImage(reader.result);
                };
              }}
            />
          </Button>
          {image && (
            <img src={image} alt="avatar" width="100px" height="100px" />
          )}
          <WHiteSpace height={20} />
          <Button variant="contained" onClick={handleSubmit}>
            {isLoading ? (
              <CircularProgress color="warning" size={22} />
            ) : (
              'Register'
            )}
          </Button>
          <WHiteSpace height={50} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Register;
