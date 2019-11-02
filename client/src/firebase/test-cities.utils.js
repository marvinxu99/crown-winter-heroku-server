import { firestore } from './firebase.utils';

export const loadTestCityData = () => {
  console.log('before writing to "cities"');

  const citiesRef = firestore.collection("cities");

  citiesRef.doc("SF").set({
      name: "San Francisco", state: "CA", country: "USA",
      capital: false, population: 860000,
      regions: ["west_coast", "norcal"] });
  citiesRef.doc("LA").set({
      name: "Los Angeles", state: "CA", country: "USA",
      capital: false, population: 3900000,
      regions: ["west_coast", "socal"] });
  citiesRef.doc("DC").set({
      name: "Washington, D.C.", state: null, country: "USA",
      capital: true, population: 680000,
      regions: ["east_coast"] });
  citiesRef.doc("TOK").set({
      name: "Tokyo", state: null, country: "Japan",
      capital: true, population: 9000000,
      regions: ["kanto", "honshu"] });
  citiesRef.doc("BJ").set({
      name: "Beijing", state: null, country: "China",
      capital: true, population: 21500000,
      regions: ["jingjinji", "hebei"] });

  console.log('After writing to "cities"');
}

export const getAllDocsFromCollection = () => {

  console.log('Get all docs'); 

  firestore.collection("cities")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  });  
}

export const getMultiDocsFromCollection = () => {

  console.log('Get multiple docs');

  firestore.collection("cities").where("capital", "==", true)
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(error => {
        console.log("Error getting documents: ", error);
    });
}