import { IonButtons,IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar , IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar } from '@ionic/react';

import ExploreContainer from './ExploreContainer';
import React, { useState } from 'react';
import { addBook, getBookById, updateBook } from '../services/BooksRESTAPI';
import { useHistory,useParams } from 'react-router-dom';

export const AddBook: React.FC = () => {
  const [bLabel,setBLabel] = useState("Add");
  const history = useHistory();
  const params:any = useParams();
  const [book,setBook] = useState({
      id:0,
      title:'',
      author:'',
      publisher:'',
      isbn:'',
      year:'',
      cover:'',
  })

  const loadCurrentCustomer = async (recordId:any) =>{
    let loadCustomer = await getBookById(recordId);
    setBook(loadCustomer);
    setBLabel('Update');
  }
  
  React.useEffect(() => {
      if(params.recordId){
        console.log(">> params.recordId:"+params.recordId);
        loadCurrentCustomer(params.recordId);
      }
  }, [params.recordId]);

  const handleAddCustomer =async ()=>{
    console.log(">> handleAddCustomer");
    console.log("customer::",book);
    if(book.id == 0){ //add
        await addBook(book);
    }else{
        await updateBook(book);
    }
    history.push('/Books')
  }
  const handleChange =(e:any)=>{
    console.log(">> name",e.detail.name);
    console.log(">> value ",e.detail.value);
    console.log("customer::",book);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{bLabel} Customer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList>
      <IonItem>
            <IonInput
            placeholder="Title" 
            value={book.title}
            onIonChange={(e:any)=>setBook({...book,title:e.detail.value})}
            type="text">  
            </IonInput>
          </IonItem>

          <IonInput
            placeholder="Author" 
            value={book.title}
            onIonChange={(e:any)=>setBook({...book,author:e.detail.value})}
            type="text">  
            </IonInput>

            <IonInput
            placeholder="Publisher" 
            value={book.title}
            onIonChange={(e:any)=>setBook({...book,publisher:e.detail.value})}
            type="text">  
            </IonInput>

          <IonItem>            
            <IonInput
            value={book.isbn}
            onIonChange={(e:any)=>setBook({...book,isbn:e.detail.value})}
            placeholder="isbn" ></IonInput>
          </IonItem>

          <IonItem>            
            <IonInput
             name="year" 
            onIonChange={(e:any)=>setBook({...book,year:e.detail.value})}
            value={book.year}
            placeholder="Year" ></IonInput>
          </IonItem>
        </IonList>
        <br/>
        <br/>
        <IonButton expand='block' color="primary" onClick={handleAddCustomer} >{bLabel}</IonButton>
        </IonContent>
    </IonPage>
  );
};