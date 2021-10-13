import React, { useState } from 'react';
import './App.css';
import CustomerSupportCard from './customer-support';
import EmailCard from './email';
import ChatCard from './chat';
import CallBackCard from './callback';
import ContactCard from './contact';
import ProductCard from './product';
import HistoryCard from './history';


function App() {
  var data = [
    {
      agentId: 5001, extension: 5001, ivr: "CREDIT CARD MENU, PAYMENT OPTIONS", name: "Jenifer Lopez",
      contact: {
        name: 'Brayden Waylon', email: 'braydenw@yahoo.com', address: '4280 Grand Avenue', city: 'Apopka', state: 'FL', zipCode: 327003
      },
      history: {
        voice: 'Feb 16, 2020',
        mail: 'Feb 12, 2020',
        chat: 'Feb 16, 2020'
      }
    }
  ]
  const [dataSource, setDataSource] = useState(data);
  return (
    <div>
      <div className="row">
        <div className="customer-support-card card-container">
          <CustomerSupportCard />
        </div>
        <div className="email-card card-container">
          <EmailCard />
        </div>
        <div className="chat-card card-container">
          <ChatCard />
        </div>
        <div className="call-back-card card-container">
          <CallBackCard />
        </div>
      </div>
      <div className="row">
        <div className="contact-card card-container">
          <ContactCard dataSource={dataSource[0]} />
        </div>
        <div className="product-card card-container">
          <ProductCard />
        </div>
        <div className="history-card card-container">
          <HistoryCard dataSource={dataSource[0]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
