import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Books from './components/Books';
import { AddToBook } from './components/AddToBook';
import Menu from './components/Menu';
import Inbox from './components/Inbox';
import DefaultPage from './components/DefaultPage';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route path="/page/:name" exact={true}>
            <DefaultPage />
          </Route>
          <Route path="/" exact={true}>
            <Redirect to="/page/Home" />
          </Route>
          <Route path="/Books" exact={true}>
            <Books />
          </Route>
          <Route path="/AddBook" exact={true}>
            <AddToBook />
          </Route>
          <Route path="/EditBook/:recordId" exact={true}>
            <AddToBook />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
