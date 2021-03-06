import React from 'react';
import { storiesOf } from '@storybook/react';
import 'react-bulma-components/dist/react-bulma-components.min.css';

// window.API_ENDPOINT = "http://192.168.43.91:5000";
window.API_ENDPOINT = "http://localhost:5000";

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
import NewRepositoryBoard from "../Home/organisms/NewRepositoryBoard"


storiesOf('Home')
  .add('[Page] Home', () => (<BrowserRouter><Homepage /></BrowserRouter>))
  .add('[Page] Scrape Method Select', () => (<BrowserRouter><ScrapeMethodSelect /></BrowserRouter>))
  .add('[Page] Scrape Using Primary Key', () => (<BrowserRouter><PrimaryKeyScrape /></BrowserRouter>))
  .add('[Page] Scrape Using File', () => (<BrowserRouter><FileScrape/></BrowserRouter>))
  .add('[Organism] New repository board', () => (<BrowserRouter><NewRepositoryBoard /></BrowserRouter>))


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
import BubbleStream from '../Experiment/BubbleStream';

storiesOf('Template')
  .add('Navbar', () => (<Navbar />))

import Parse from '../Parse/Pages/Parse'
import VisualizerArea from '../Parse/Organisms/VisualizerArea'
import MyNetwork from '../Parse/Atoms/MyNetwork'
import Popup from '../Parse/Atoms/SimplePopup'
import MenuBar from '../Parse/Molecules/MenuBar'
import VisNetwork from '../Parse/Atoms/VisNetwork'
import VisNetworkNoPopup from '../Parse/Atoms/VisNetworkNoPopup'
import NewVisualizationArea from '../Parse/Organisms/NewVisualizationArea'
import BaseButton from '../Parse/Atoms/BaseButton'
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import DataTable from "../Parse/Molecules/DataTable"

storiesOf('Parse')
  .add('[Page] Parse main page', () => (<BrowserRouter><Parse /></BrowserRouter>))
  .add('[Organism] Visualizing Area', () => (<VisualizerArea />))
  .add('[Atom] Porting vis.js into react', () => (<MyNetwork />))
  .add('[Atom] VisNetwork', () => (<VisNetwork />))
  .add('[Atom] Simple Popup', () => (<Popup />))
  .add('----')
  .add('[Atom] VisNetwork No popup', () => (<VisNetworkNoPopup />))
  .add('[Atom] Base Button with fullscreen button', () => (<BaseButton icon={faExpandArrowsAlt}/>))
  .add('[Molecule] Menubar', () => (<MenuBar />))
  .add('----')
  .add('[Organism] New Vis Area', () => (<NewVisualizationArea repositoryName="mock"/>))
  .add('[Molecules] Data Table', () => (<DataTable />))

  import Credit from '../Miscellaneous/pages/Credit';
  import ProfileCard from '../Miscellaneous/organisms/ProfileCard'

storiesOf('Misc')
  .add('[Page] Credit', () => (<Credit />))
  .add('[Organism] Profile Card', () => (<ProfileCard />))


import ExportSelect from "../Export/Pages/ExportSelect"
import OptionCard from "../Export/Molecules/OptionCard"
import ExportMenuBox from "../Export/Orgnaisms/ExportMenuBox"

storiesOf('Export')
  .add('[Page] Export method select', () => (<BrowserRouter><ExportSelect /></BrowserRouter>))
  .add('[Organism] Export menu box', () => (<ExportMenuBox />))
  .add('[Molecule] Option Card', () => (<OptionCard title="Export into JSON file" subtitle="this is the only option available" icon="something"/>))
