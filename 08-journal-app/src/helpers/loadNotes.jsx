import { db, collection, getDocs } from "../firebase/firebase.config"

export const loadNotes = async (uid) => {
  const notesSnap = await getDocs(collection(db, `${uid}/journal/notes`));
  const notes = [];
  notesSnap.forEach(snapChild => {
    notes.push({
      id: snapChild.id,
      ...snapChild.data()
    })
  });

  return notes;
}