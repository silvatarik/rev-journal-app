import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActiveNotes, startDeleteNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForm/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteView = () => {
    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset] = useForm(note);

    const { title, body, url } = formValues;
    /* Para que el useEffect no haga un bucle infinito fuardamos en referencia la id para posteriormente
    usarla como  condicion si realmente cambia */
    const activeId = useRef(note.id);

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset])

    useEffect(() => {
        dispatch(ActiveNotes(formValues.id, { ...formValues }));
    }, [formValues, dispatch])

    const handleDelete = () =>{
        dispatch(startDeleteNote(formValues.id));
    }

    return (
        <div className="notes_main-content w-full">
            <div className="w-full">
                <NotesAppBar />
                <div className="container mx-auto p-5 notes__content flex flex-col animate__animated animate__fadeInDown">
                    <div className="form-control mx-auto w-3/4">
                        <label className="label">
                            <span className="label-text">Titulo</span>
                        </label>
                        <input type="text" placeholder="Some awesome title" className="input input-primary input-bordered " name="title" onChange={handleInputChange} value={title} />
                    </div>
                    <div className="form-control mx-auto w-3/4">
                        <label className="label">
                            <span className="label-text">Descripcion</span>
                        </label>
                        <textarea className="textarea h-60 textarea-bordered" placeholder="What happened today" name="body" onChange={handleInputChange} value={body}></textarea>
                    </div>

                    <div className="notes__image mx-auto">
                        <img className="mask mask-decagon object-cover h-60 w-96" src={(url !== '') ? url : ('https://picsum.photos/200/300')} alt="imagen" />
                    </div>

                    <div className="pt-24 text-center">
                        <button className="bottom-0 w-1/2 btn btn-error" onClick={handleDelete}>Eliminar Nota</button>
                    </div>
                </div>
            </div>
        </div>


    )
}
