import React from 'react';
import { storiesOf } from '@storybook/react';
import 'react-bulma-components/dist/react-bulma-components.min.css';

// // Views
// import TemplateView from '../views/Template'
// import HomePage from '../views/Home'
// import Scrape from '../views/Scrape'
// storiesOf('Views', module)
//   .add('Template View', () => (<TemplateView />))
//   .add('HomePage', () => (<HomePage />))
//   .add('Scrape', () => (<Scrape />))

// // Bars
// import SidebarContainer from '../containers/SidebarContainer'
// import NavbarContainer from '../containers/NavbarContainer'

// storiesOf('Bars', module)
//   .add('Sidebar Container', () => ( <SidebarContainer /> ))
//   .add('Navbar Conatiner', () => (<NavbarContainer />))


// // Home Components
// import Bubble from '../components/RepositoryCard/components/RepoBubblesPanel/Bubble'
// import BubblePanel from  '../components/RepositoryCard/components/RepoBubblesPanel'
// import RepositoryCard from '../components/RepositoryCard'
// import LoginBox from '../components/LoginBox'

// storiesOf('Home Components')
//   .add('Bubble', () => (<Bubble />))
//   .add('Bubble Panel', () => (<BubblePanel />))
//   .add('Repo Card', () => (<RepositoryCard />))
//   .add("Login Box", () => (<LoginBox />))

// // Scrape Component
// import LargeBubble from '../scrapeComponents/ScrapeMethodSelect/components/LargeBubble'
// import LargeBox from '../scrapeComponents/'
// import ScrapeMethodSelect from '../scrapeComponents/ScrapeMethodSelect'

// storiesOf('Scrape Components')
//   .add('Large Bubble', () => (<LargeBubble />))
//   .add('1. Scrape Method Select', () => (<ScrapeMethodSelect />))


// // Scrape using PK
// import MenuBox from '../scrapeComponents/components/MenuBox'
// import ScrapeUsingPKContainer from '../containers/ScrapeUsingPKContainer'
// import PrimaryKeyInputForm from '../scrapeComponents/ScrapeUsingPK/InputForm'

// storiesOf('Scrape Using PK')
//   .add('MenuBox', () => (<MenuBox />))
//   .add('ScrapeUsingPK Container', () => (<ScrapeUsingPKContainer />))
//   .add('Input Form', () => (<PrimaryKeyInputForm />))


// New src
import {BrowserRouter} from 'react-router-dom';
import RepositoryCardBubble from '../Home/atoms/RepositoryCardBubble';
import RepositoryCard from '../Home/molecules/RepositoryCard'
import RepositoryBoard from '../Home/organisms/RepositoryBoard'
import RepositoryDeleteButton from '../Home/molecules/RepositoryDeleteButton'
import RepositoryCreateButton from '../Home/molecules/RepositoryCreateButton'

storiesOf('New src')
  .add('[Atom] Bubble', () => (<RepositoryCardBubble />))
  .add('[Atom] Bubble with Link', () => (<BrowserRouter><RepositoryCardBubble linkTo="/scrape" bubbleColor="salmon"/></BrowserRouter>))
  .add('[Atom] Scraping Button', () => (<RepositoryCardBubble upText="Scraper" midText="100%" lowText="80/80"/>))
  .add('[Molecule] Bubbles Panel', () => (<RepositoryCard />))
  .add('[Organism] Repository Board', () => (<RepositoryBoard />))
  .add('[Molecules] Repository Delete Button (with confirm box)', () => (<RepositoryDeleteButton />))
  .add('[Atom] Add New Repository', () => (<RepositoryCreateButton />));

import Homepage from '../Home/pages/Homepage'
import ScrapeMethodSelect from '../Scrape/pages/SelectMethodSelect'
import PrimaryKeyScrape from '../Scrape/pages/PrimaryKeyScrape'

storiesOf('Pages')
  .add('[Page] Home', () => (<BrowserRouter><Homepage /></BrowserRouter>))
  .add('[Page] Scrape Method Select', () => (<BrowserRouter><ScrapeMethodSelect /></BrowserRouter>))
  .add('[Page] Scrape Using Primary Key', () => (<BrowserRouter><PrimaryKeyScrape /></BrowserRouter>))
  


import MenuBox from '../Scrape/atoms/MenuBox'
import MenuBubble from '../Scrape/atoms/MenuBubble'
import ScrapeMethodMenuBox from '../Scrape/organisms/ScrapeMethodMenuBox'
import TextInput from '../Scrape/atoms/TextInput'
import ScrapeUsingPrimaryKeyBox from '../Scrape/organisms/ScrapeUsingPrimaryKeyBox'

storiesOf('Scrape')
  .add('[Atom] MenuBox', () => (<MenuBox />))
  .add('[Atom] MenuBubble with icon', () => (<MenuBubble />))
  .add('[Molecule] Scrape Method Menubox', () => (<BrowserRouter><ScrapeMethodMenuBox /></BrowserRouter>))
  .add('[Atom] Text Input', () => (<TextInput />))
  .add('[Organism] Scrape Primary Key Form Box', () => (<BrowserRouter><ScrapeUsingPrimaryKeyBox /></BrowserRouter>))