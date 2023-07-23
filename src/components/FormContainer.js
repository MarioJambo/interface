import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form, Input, Button } from 'antd';

const FormContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Senha:', password);

    try {
      const response = await axios.post('http://localhost:3000/login', { email, password }, {
        headers: { 'Content-Type': 'application/json' }
      });

      console.log('Resposta do servidor:', response.data);
      // Coloque aqui o código para lidar com a resposta do servidor (caso necessário)
    } catch (error) {
      console.error('Erro durante a solicitação:', error);
      // Coloque aqui o código para lidar com erros durante a solicitação (caso necessário)
    }
  };

  return (
    <div className="form-container">
      <Card className="custom-card">
        <h1>Login Frame</h1>
        <Form>
          <Form.Item label="Email">
            <Input
              placeholder="Digite seu email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Senha">
            <Input.Password
              placeholder="Digite sua senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="large" onClick={handleLogin}>
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default FormContainer;
