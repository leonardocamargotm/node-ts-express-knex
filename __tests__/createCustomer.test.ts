import { Express } from 'express';
import request from 'supertest';
import Server from '../src/server';
import { expression } from '@hapi/joi';

describe('createCustomer: Teste de cadastro de clientes', () => {
  
  let app: Express;

  beforeAll(async () => {
    app = new Server().app;
  });

  it('Deve cadastrar um cliente', async done => {
    const response = await request(app)
      .post('/customer')
      .send({
        name: 'Rodolfo',
        email: 'rodolfo@email.com'
      });
    
    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Rodolfo');
    done();
  });

  it('Deve retornar erro de duplicidade de email', async done => {
    const response = await request(app)
      .post('/customer')
      .send({
        name: 'Douglas',
        email: 'rodolfo@email.com'
      });
    
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Existe um cadastro com este email');
    done();
  });

  it('Deve retornar erro email inválido', async done => {
    const response = await request(app)
      .post('/customer')
      .send({
        name: 'Douglas',
        email: 'rodolfo'
      });
    
    expect(response.status).toBe(422);
    expect(response.body.message).toBe('"email" must be a valid email');
    done();
  });

});