import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
  } from '@ionic/react';
  
  import { useLocation } from 'react-router-dom';
  import { archiveOutline, archiveSharp, book, bookmarkOutline, checkboxSharp, heartOutline, heartSharp, home, homeOutline, homeSharp, list, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trash, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
  import './Menu.css';
  
  interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  
  const appPages: AppPage[] = [
    {
      title: 'Home',
      url: '/page/Home',
      iosIcon: home,
      mdIcon: homeSharp
    },
    {
        title: 'Books',
        url: '/Books',
        iosIcon: book,
        mdIcon: list
      },
      {
        title: 'Inbox',
        url: '/page/Inbox',
        iosIcon: mailOutline,
        mdIcon: mailSharp
      },
      {
        title: 'Trash',
        url: '/page/Trash',
        iosIcon: trashOutline,
        mdIcon: trashSharp
      },
      {
        title: 'Villas',
        url: '/Villas',
        iosIcon: homeOutline,
        mdIcon: homeSharp
      }
  ];
  
  const Menu: React.FC = () => {
    const location = useLocation();
  
    return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>Menu</IonListHeader>
            <IonNote>Books</IonNote>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };
  
  export default Menu;
  