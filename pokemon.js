const request = require('supertest');
const expect = require('chai').expect;

require('dotenv').config();

const url_base = process.env.URL_BASE;

describe("GET Pokemon", () => {

console.log('Variavel de Ambiente', url_base);

if("Cenário buscar Pokemon", async () => {
    const response = await request(url_base).get('pokemon/25');

    expect(response.body.forms[0].name).to.equal('pikachu');
    })
)};