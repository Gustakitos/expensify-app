import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

//child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })


// database.ref("expenses").on("value", snapshop => {
//   const expenses = [];

//   snapshop.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses)
// });

// database.ref('expenses').once('value')
//   .then((snapshop) => {
//     //console.log(snapshop.val())
//     const expenses = []

//     snapshop.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses)

//   }).catch((e) => {
//     console.log(e.message)
//   })

// database.ref('expenses').push({
//     description: '1',
//     note: '',
//     amount: 2,
//     createdAt: 15,
// })

// database.ref('notes/-LbMSB_JDr9FTjmaKnlM').remove()

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, GraphQL.'
// })

// const firebaseNotes = {
//   notes: {
//     safdgas: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     fghdfghdfy: {
//       title: 'First note',
//       body: 'This is my note'
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Second note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);
// database.ref('notes/12')

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log(e.message)
// })

// setTimeout(() => {
//   database.ref('age').set(24);
// }, 3500);

// setTimeout(() => {
//   database.ref('age').off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref().once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val())
//   }).catch((e) => {
//     console.log(e.message)
//   })

// database.ref().set({
//     name: "Gustavo",
//     age: 23,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Resource IT'
//     },
//     location: {
//       city: "Sao Paulo",
//       country: "Brazil"
//     }
//   }).then(() => {
//     console.log("Data is saved!");
//   }).catch(e => {
//     console.log("This failed.", e.message);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Legends of Learning',
//   'location/city': 'SP'
// });

// const removeSingle = database.ref('isSingle')

// removeSingle.remove()
// .then(() => {
//   console.log('Remove works')
// }).catch((e) => {
//   console.log('Remove failed:', e.message)
// })
