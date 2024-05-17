import  { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import '../styles/LoginStyle.css'



export const LoginPage = () => {
    
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleModeChange = () => {
    setIsLoginMode(!isLoginMode);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    return (
      <div className='container container-login'>
        <div className='form-content'>
          <h2 className='title-form'>{isLoginMode ? 'Iniciar Sesión' : 'Registro'}</h2>
          <Box
          className='box-form'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  id="standard-basic" label="Email" variant="standard" required/>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
      <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            required
          />
          </FormControl>
      {!isLoginMode && (
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Confirmar Contraseña</InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                required
              />
             </FormControl>
          )}
        </Box>
        <p className='olvidada-contra'>{isLoginMode ? '¿No tienes una cuenta? ' : '¿Ya tienes una cuenta? '}
          <a  onClick={handleModeChange}>{isLoginMode ? 'Regístrate aquí' : 'Iniciar Sesión'}</a>
        </p>
        <Button variant="outlined" size="small">{isLoginMode ? 'Iniciar Sesión' : 'Registrarse'}</Button>
        </div>
      </div>
    );
  };


