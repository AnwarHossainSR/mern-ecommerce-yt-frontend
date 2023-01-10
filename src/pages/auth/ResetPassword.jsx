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
import { Link, useNavigate, useParams } from 'react-router-dom';
import WHiteSpace from '../../components/App/whitespac/WHiteSpace';
import { resetPasswordAction } from '../../redux/actions/UserAction';
import { notify } from '../../utils/helper';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { error, isAuth, isLoading, user, message } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();
  const handleSubmit = () => {
    if (
      newPasswordRef.current.value === null ||
      newPasswordRef.current.value === null
    )
      return notify('Both fields are required', 'error');

    if (newPasswordRef.current.value !== confirmPasswordRef.current.value)
      return notify('Password does not match', 'error');

    dispatch(
      resetPasswordAction(
        {
          password: newPasswordRef.current.value,
          confirmPassword: confirmPasswordRef.current.value,
        },
        token
      )
    );
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
          <h2>Reset Password</h2>
          {error && <Alert severity="error">{error}</Alert>}
          {message && <Alert severity="success">{message}</Alert>}
          <TextField
            label="New Password"
            type="password"
            variant="outlined"
            inputRef={newPasswordRef}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            inputRef={confirmPasswordRef}
          />
          <WHiteSpace height={10} />

          <Button variant="contained" onClick={handleSubmit}>
            {isLoading ? (
              <CircularProgress size={25} color="warning" />
            ) : (
              'Reset'
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

export default ResetPassword;
