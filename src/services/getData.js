const { Firestore } = require('@google-cloud/firestore');

async function getData() {
  const db = new Firestore({
    projectId: 'polished-triode-445316-q8',
    databaseId: '(default)'
  });
  
  const snapshot = await db.collection('predictions').get();

  if (snapshot.empty) {
    return [];
  }

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

module.exports = getData;