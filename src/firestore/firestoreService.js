import firebase from "../firebase";

const db = firebase.firestore();

export function listenToEventsFromFirestore() {
  let eventsRef = db.collection("Items");
  return eventsRef;
}

export function dataFromSnapshot(snapshot) {
  const data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return {
    ...data,
  };
}
