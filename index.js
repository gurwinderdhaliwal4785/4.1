import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './App.css';

import NavigationBar from './Navigationbar';
import CoverImage from './CoverImage';
import HeaderArticle from './HeaderArticle';
import CardList from './Cardlist';
import Button from './Button'
import HeaderTutorial from './HeaderTutorial';
import CustomerCardList from './CustomerCardlist';
import EmailBanner from './EmailBanner'
import FooterBanner from './FooterBanner';
import FooterDevDeakin from './FooterDevDeakin';



ReactDOM.render(<div>
  <NavigationBar />
  <CoverImage />
  <HeaderArticle />
  <CardList />
  <Button />
  <HeaderTutorial />
  <CustomerCardList />
  <Button />
  <EmailBanner />
  <FooterBanner />
  <FooterDevDeakin />


  </div>
  , document.getElementById('root'));