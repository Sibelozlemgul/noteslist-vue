import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { getDocs, collection, onSnapshot } from 'firebase/firestore';
import { db } from '../js/firebase';

export const useNotesStore = defineStore('notesStore', () => {
  const notes = ref([]);

  const getNoteContentById = computed(() => {
    return (id) => {
      return notes.value.find((note) => note.id === id).content;
    };
  });

  const getNotes = async () => {
    // const querySnapshot = await getDocs(collection(db, 'notes'));
    // querySnapshot.forEach((doc) => {
    //   let note = {
    //     id: doc.id,
    //     content: doc.data().content
    //   };
    //   notes.value.push(note);
    // });

    onSnapshot(collection(db, 'notes'), (querySnapshot) => {
      let notesData = [];
      querySnapshot.forEach((doc) => {
        let note = {
          id: doc.id,
          content: doc.data().content
        };
        notesData.push(note);
      });

      notes.value = notesData;
    });
  };

  const totalNotesCount = computed(() => {
    return notes.value.length;
  });

  const totalCharactersCount = computed(() => {
    let count = 0;
    for (let note of notes.value) {
      count += note.content.length;
    }
    return count;
  });

  const addNote = (noteContent) => {
    const currentDate = new Date().getTime().toString();
    const note = {
      id: currentDate,
      content: noteContent
    };

    notes.value.unshift(note);
  };

  const deleteNote = (noteId) => {
    notes.value = notes.value.filter((note) => note.id !== noteId);
  };

  const updateNote = (id, content) => {
    const index = notes.value.findIndex((note) => note.id === id);
    notes.value[index].content = content;
  };

  return {
    notes,
    updateNote,
    getNoteContentById,
    addNote,
    deleteNote,
    totalCharactersCount,
    totalNotesCount,
    getNotes
  };
});