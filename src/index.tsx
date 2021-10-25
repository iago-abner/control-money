import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Hackathon',
          type: 'withdraw',
          category: 'Evento',
          amount: 298.89,
          createdAt: new Date('2021-07-22 23:00:00'),  
        },
        {
          id: 2,
          title: 'Freelance',
          type: 'deposit',
          category: 'Trabalho',
          amount: 2490,
          createdAt: new Date('2021-07-14 11:00:00'),
        },
        {
          id: 3,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'casa',
          amount: 2200,
          createdAt: new Date('2021-07-12 11:00:00'),
        },
        {
          id: 4,
          title: 'Salário',
          type: 'deposit',
          category: 'Trabalho',
          amount: 5800,
          createdAt: new Date('2021-07-05 09:00:00'),
        }
      ],
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      //schema = banco de dados miragejs
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);