import React, { useEffect, useState } from "react";
import "../../App.css";
import { GalleryCard } from "tabler-react";
import zion from "./zion.jpg";
import cvs from "./cvs.jpg";
import mini from "./mini.jpg";
import local from "./local.jpg";
import pen from "./pen.jpg";
import firebase from "firebase";
import { makeid } from "./helpers";
import styled from "styled-components";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDnYn_55Fxu5meXkjNN6awzJTZwb3-fwbI",
    authDomain: "lahacksteam-86084.firebaseapp.com",
    databaseURL: "https://lahacksteam-86084.firebaseio.com",
    projectId: "lahacksteam-86084",
    storageBucket: "lahacksteam-86084.appspot.com",
    messagingSenderId: "182070089013",
    appId: "1:182070089013:web:278daaeb65cec49e8a287c",
    measurementId: "G-4YT56H5DCW"
  });
}

const firestore = firebase.firestore();

const databaseRef = firebase.database().ref();

export const todosRef = databaseRef.child("favorites");

export const addTodo = newTodo => {
  todosRef.push().set(newTodo);
};

const snapshotToArray = snapshot => {
  const newArray = [];
  snapshot.forEach(doc => {
    newArray.push(doc.val());
  });
  return newArray;
};

export const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    todosRef.on("value", snapshot => {
      console.log(snapshot);
      setFavorites(snapshotToArray(snapshot));
    });
  }, []);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  return (
    <GalleryCard class="store">
      {favorites.map(favorite => (
        <>
          <GalleryCard.Image src={zion} />
          <GalleryCard.Footer>
            <GalleryCard.Details
              fullName={favorite["businessName"]}
              dateString="3 Toilet Paper in stock"
            />
          </GalleryCard.Footer>
        </>
      ))}
      <GalleryCard.Image src={zion} />
      <GalleryCard.Footer>
        <GalleryCard.Details
          fullName="Zion Market"
          dateString="3 Toilet Paper in stock"
        />
      </GalleryCard.Footer>

      <GalleryCard.Image src={pen} />
      <GalleryCard.Footer>
        <GalleryCard.Details
          fullName="Pen's General Store"
          dateString="4 Toilet Paper in stock"
        />
      </GalleryCard.Footer>

      <GalleryCard.Image src={mini} />
      <GalleryCard.Footer>
        <GalleryCard.Details
          fullName="Mini Marketplace"
          dateString="8 Toilet Paper in stock"
        />
      </GalleryCard.Footer>

      <GalleryCard.Image src={cvs} />
      <GalleryCard.Footer>
        <GalleryCard.Details
          fullName="CVS"
          dateString="0 Toilet Paper in stock"
        />
      </GalleryCard.Footer>

      <GalleryCard.Image src={local} />
      <GalleryCard.Footer>
        <GalleryCard.Details
          fullName="LA Local"
          dateString="2 Toilet Paper in stock"
        />
      </GalleryCard.Footer>
    </GalleryCard>
  );
};

const NewlyAdded = styled.div`
  background-color: #ffdc00;
  padding: 5px;
`;
