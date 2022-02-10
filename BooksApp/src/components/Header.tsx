import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar , IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar, IonIcon,IonFabButton,IonFab } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';

const Header: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
          <IonFab vertical="center" slot="fixed">
          <IonFabButton color="danger">
            <IonIcon name="add"></IonIcon>
          </IonFabButton>
        </IonFab>
        </IonToolbar>
      </IonHeader>
  );
};

export default Header;
