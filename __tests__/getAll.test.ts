import { Express } from 'express';
import request from 'supertest';
import Server from '../src/server';
import { expression } from '@hapi/joi';

describe('getAll: Teste de consulta de clientes', () => {
  let app: Express;

  beforeAll(async () => {
    app = new Server().app;
  });

  it('Deve listar clientes', async done => {
    const response = await request(app).get('/customer');

    expect(Array.isArray(response.body)).toBeTruthy();
    done();
  });
});
