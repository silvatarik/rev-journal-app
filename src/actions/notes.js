import { db } from "../firebase/firebase-config";
import { collection, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from "../helpers/fileUpload";
import Swal from 'sweetalert2';

/* Tarea asincrona */
export const startNewNotes = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            url: ''
        }

        const doc = await addDoc(collection(db, `${uid}`, '/journal/notes'), { ...newNote });

        dispatch(ActiveNotes(doc.id, newNote));

        /* dispatch(startLoadingNotes(uid)); */
        dispatch(addNewNote(doc.id,newNote));
    }
}

export const addNewNote = (id , note) => ({
    type: types.notesAddNew,
    payload:{id,...note}
})

export const ActiveNotes = (id, note) => {
    return {
        type: types.notesActive,
        payload: {
            id: id,
            ...note
        }
    }
}

export const setNotes = (notes) => {
    return {
        type: types.notesLoad,
        payload: notes
    }
}

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const noteRef = doc(db, `${uid}/journal/notes/${note.id}`);

        await updateDoc(noteRef, noteToFireStore);
        dispatch(refreshNotes(note.id, note));
        sweetAlertSaving('Guardado con Exito');
    }
}

export const refreshNotes = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id, note
    }
})

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const { active: activeNotes } = getState().notes;

        const fileUrl = await fileUpload(file);
        sweetAlertLoading();
        activeNotes.url = fileUrl;
        dispatch(startSaveNote(activeNotes));
        /* console.log(fileUrl) */
    }
}


export const startDeleteNote = (id) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const noteRef = doc(db, `${uid}/journal/notes/${id}`);

        try {
            await deleteDoc(noteRef);
            dispatch(deleteNote(id));
        } catch (error) {
            console.log(error)
        }

    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})

export const cleanNotes = () => ({
    type: types.notesCleaning
})

/* sweetAlert */

const sweetAlertSaving = (text) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: text
    })
}

const sweetAlertLoading = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            Swal.showLoading()
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Subiendo Foto'
    })
}