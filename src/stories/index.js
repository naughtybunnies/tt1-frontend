import React from 'react';
import { storiesOf } from '@storybook/react';
import 'react-bulma-components/dist/react-bulma-components.min.css';

window.API_ENDPOINT = "http://192.168.43.91:5000";

// New src
import { BrowserRouter } from 'react-router-dom';
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
  .add('[Organism] Repository Board', () => (<BrowserRouter><RepositoryBoard /></BrowserRouter>))
  .add('[Molecules] Repository Delete Button (with confirm box)', () => (<RepositoryDeleteButton />))
  .add('[Atom] Add New Repository', () => (<RepositoryCreateButton />));

import Homepage from '../Home/pages/Homepage'
import ScrapeMethodSelect from '../Scrape/pages/SelectMethodSelect'
import PrimaryKeyScrape from '../Scrape/pages/PrimaryKeyScrape'
import FileScrape from '../Scrape/pages/FileScrape'

storiesOf('Pages')
  .add('[Page] Home', () => (<BrowserRouter><Homepage /></BrowserRouter>))
  .add('[Page] Scrape Method Select', () => (<BrowserRouter><ScrapeMethodSelect /></BrowserRouter>))
  .add('[Page] Scrape Using Primary Key', () => (<BrowserRouter><PrimaryKeyScrape /></BrowserRouter>))
  .add('[Page] Scrape Using File', () => (<BrowserRouter><FileScrape/></BrowserRouter>))


import MenuBox from '../Scrape/atoms/MenuBox'
import MenuBubble from '../Scrape/atoms/MenuBubble'
import ScrapeMethodMenuBox from '../Scrape/organisms/ScrapeMethodMenuBox'
import TextInput from '../Scrape/atoms/TextInput'
import ScrapeUsingPrimaryKeyBox from '../Scrape/organisms/ScrapeUsingPrimaryKeyBox'
import ScrapeUsingFileBox from '../Scrape/organisms/ScrapeUsingFileBox'
import UploadButton from '../Scrape/atoms/UploadButton'
import FileDataScrapeConfirmBox from '../Scrape/atoms/FileDataScrapeConfirmBox';

storiesOf('Scrape')
  .add('[Atom] MenuBox', () => (<MenuBox />))
  .add('[Atom] MenuBubble with icon', () => (<MenuBubble />))
  .add('[Molecule] Scrape Method Menubox', () => (<BrowserRouter><ScrapeMethodMenuBox /></BrowserRouter>))
  .add('[Atom] Text Input', () => (<TextInput />))
  .add('[Organism] Scrape Primary Key Form Box', () => (<BrowserRouter><ScrapeUsingPrimaryKeyBox /></BrowserRouter>))
  .add('[Organism] Scrape File Box', () => (<BrowserRouter><ScrapeUsingFileBox repositoryName="mock"/></BrowserRouter>))
  .add('[Atom] Upload Button', () => (<UploadButton />))
  .add('[Atom] FileDataScrapeConfirmBox', () => (<FileDataScrapeConfirmBox />))

import Navbar from '../Template/Navbar'

storiesOf('Template')
  .add('Navbar', () => (<Navbar />))