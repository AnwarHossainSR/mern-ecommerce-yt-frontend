import {
  Alert,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import WHiteSpace from '../../components/App/whitespac/WHiteSpace';
import { getAuthAction } from '../../redux/actions/UserAction';

const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { error, isAuth, isLoading, user } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = () => {
    dispatch(
      getAuthAction({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
  };
  useEffect(() => {
    if (isAuth) {
      if (user.role === 'admin') {
        navigate(state?.from ? state.from : '/admin/dashboard');
      } else {
        navigate(state?.from ? state.from : '/dashboard');
      }
    }
  }, [isAuth, user]);

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
          {error && <Alert severity="error">{error}</Alert>}
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
          <WHiteSpace height={10} />

          <Button variant="contained" onClick={handleSubmit}>
            {isLoading ? (
              <CircularProgress size={25} color="warning" />
            ) : (
              'Login'
            )}
          </Button>

          <Typography variant="p">
            Forgot Password? <Link to="/forgot-password">Forgot Password</Link>
          </Typography>

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
