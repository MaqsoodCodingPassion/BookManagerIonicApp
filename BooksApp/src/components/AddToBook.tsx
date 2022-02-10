import { IonButtons,IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar , IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar } from '@ionic/react';

import ExploreContainer from './ExploreContainer';
import React, { useState } from 'react';
import { addBook, getBookById, updateBook } from '../services/BooksRESTAPI';
import { useHistory,useParams } from 'react-router-dom';

export const AddToBook: React.FC = () => {
  const [bLabel,setBLabel] = useState("Add");
  const history = useHistory();
  const params:any = useParams();
    const [book, setBook] = useState({
        id: 0,
        title: '',
        author: '',
        publisher: '',
        isbn: '',
        year: '',
        cover: '',
    })

  const loadCurrentBook = async (recordId:any) =>{
    let loadBook = await getBookById(recordId);
    setBook(loadBook);
    setBLabel('Update');
  }
  
  React.useEffect(() => {
      if(params.recordId){
        console.log(">> params.recordId:"+params.recordId);
        loadCurrentBook(params.recordId);
      }
  }, [params.recordId]);

  const handleAddBook =async ()=>{
    console.log("book.id:: ",book.id);
    if(book.id == 0){ //add
        await addBook(book);
    }else{
        await updateBook(book);
    }
    history.push('/Books')
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{bLabel} Book</IonTitle>
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

          <IonItem>            
            <IonInput
            value={book.author}
            onIonChange={(e:any)=>setBook({...book,author:e.detail.value})}
           placeholder="Author" ></IonInput>
          </IonItem>
          <IonItem>       
                 
            <IonInput name="Publisher" 
            onIonChange={(e:any)=>setBook({...book,publisher:e.detail.value})}
            value={book.publisher}
            placeholder="Publisher" ></IonInput>
          </IonItem>

          <IonItem>            
            <IonInput 
            value={book.isbn}
            onIonChange={(e:any)=>setBook({...book,isbn:e.detail.value})}
            name="isbn" placeholder="Isbn" ></IonInput>
          </IonItem>

          <IonItem>            
            <IonInput 
            value={book.year}
            onIonChange={(e:any)=>setBook({...book,year:e.detail.value})}
            name="year" placeholder="Year" ></IonInput>
          </IonItem>

          <IonItem>            
            <IonInput 
            value={book.cover}
            onIonChange={(e:any)=>setBook({...book,cover:"https://training.pyther.com/books/9781409509202_cover_image.jpg"})}
            name="cover" placeholder="Cover" ></IonInput>
          </IonItem>
        </IonList>
        <br/>
        <br/>
        <IonButton expand='block' color="primary" onClick={handleAddBook} >{bLabel}</IonButton>
        </IonContent>
    </IonPage>
  );
};