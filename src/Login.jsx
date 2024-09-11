import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  
  const inputChangeHandle = (event) => {
    const value = event.target.value;
    if (value.toLowerCase().includes('o')) {
      alert('Por favor, ¡Nombres de usuario sin la letra o!'); 
    } else {
      setUsername(value);
    }
  };
  
  const submitHandle = () => {
    if (username.trim() === '' || 
    username.toLowerCase().includes('o')) 
    {
      alert('Usuario inválido para registrarse');
    } else {
      alert('¡Usuario registrado correctamente!');
    }
  };
  
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={inputChangeHandle}
        placeholder="Ingrese su nombre de usuario"/>
      <button onClick={submitHandle}>Registrarse</button>
      <p>{username}</p> 
    </div>
  );
};

export default Login;