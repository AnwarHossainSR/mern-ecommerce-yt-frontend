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
import { Link, useNavigate } from 'react-router-dom';
import WHiteSpace from '../../components/App/whitespac/WHiteSpace';
import { getForgotPasswordAction } from '../../redux/actions/UserAction';
import { notify } from '../../utils/helper';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { error, isAuth, isLoading, user, message } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();
  const emailRef = useRef();
  const handleSubmit = () => {
    if (emailRef.current.value === '')
      return notify('Email is required', 'error');
    dispatch(getForgotPasswordAction({ email: emailRef.current.value }));
  };
  useEffect(() => {
    if (isAuth && user) {
      if (user.role === 'admin') {
        navigate('/admin/dashboard');
      } else if (user.role === 'user') {
        navigate('/dashboard');
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
          <h2>Forgot Password</h2>
          {error && <Alert severity="error">{error}</Alert>}
          {message && <Alert severity="success">{message}</Alert>}
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            inputRef={emailRef}
          />
          <WHiteSpace height={10} />

          <Button variant="contained" onClick={handleSubmit}>
            {isLoading ? (
              <CircularProgress size={25} color="warning" />
            ) : (
              'Send'
            )}
          </Button>

          <Typography variant="p">
            Go to Sign In <Link to="/login">Login</Link>
          </Typography>
          <WHiteSpace height={50} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ForgotPassword;
