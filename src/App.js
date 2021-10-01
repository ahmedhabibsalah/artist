import { Route, Switch, useLocation} from 'react-router-dom'
import './App.css';
import Home from './components/Hero';
import SingleWork from './components/SingleWork';
import Bar from './pages';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import Work from './components/Work';
import Contact from './components/Contact';


const Section = styled.section`
  overflow-x: hidden;
`;

function App() {
  let location = useLocation();
  return (
    <Section>
    <GlobalStyle />
    <AnimatePresence  exitBeforeEnter >
    <Bar />
     <Switch location={location} key={location.pathname}>
       <Route component={Home} path="/" exact />
       <Route component={SingleWork} path="/work/:slug" />
       <Route component={Work} path="/work" />
       <Route component={Contact} path="/contact" />
     </Switch>
     </AnimatePresence>
     </Section>
  );
}

export default App;
