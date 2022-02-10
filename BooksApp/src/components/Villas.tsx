import {
  IonButtons, IonContent, IonThumbnail, IonHeader, IonCard, IonCardHeader, IonPage, IonTitle, IonToolbar,
  IonList, IonCardSubtitle, IonItem, IonMenuButton, IonCardTitle, IonLabel, IonCardContent, IonButton, IonImg, IonAvatar, IonIcon, IonFabButton, IonFab
} from '@ionic/react';
import { add, location } from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';

import { useState } from 'react';
import { getVillas } from '../services/VillasRESTAPI'
import avtar from '../assets/bandit.png'
import React from 'react';
import { useHistory } from 'react-router';

interface myProps {
  random: number;
}

interface myVilla {
  "id": any,
  "image": string,
  "title": string,
  "price": string,
  "Location": string,
  "rooms": any,
  "totalarea": any
}

const Villas = () => {
  const history = useHistory();
  const [villaList, setVillas] = useState([]);
  const loadVillas = async () => {
    let tempData = await getVillas();
    setVillas(tempData);
    console.log("tempData:", tempData);
  }

  React.useEffect(() => {
    let unlisten = history.listen((location, action) => {
      loadVillas();
    });
    loadVillas();
    return (unlisten);
  }, []);

  return (
    <IonPage>
      <IonHeader>   
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Villas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonList>
          {villaList.map((data: any) => {
            return (
              <IonCard>
                <IonImg src={data.image} />
                <IonCardContent>
                  <IonLabel>
                    <h2 color="white">{data.title}</h2>
                    <h2>{data.price}</h2>
                    <br></br>
                   
                    <IonIcon size={'30'} icon={location} />
                    
                    {data.Location}
                  </IonLabel>

                  <br></br>
                  <IonButton slot="end" size='small' color="danger" >{'MORE'}</IonButton>
                  <IonButton slot="end" size='small' color="danger" >{'BOOK Villa'}</IonButton>

                </IonCardContent>
              </IonCard>
            )
          })}
        </IonList>        
        </IonContent>
    </IonPage>
  );
};
export default Villas;
