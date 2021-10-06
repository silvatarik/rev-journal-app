import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
    const { active } = useSelector(state => state.notes);
    const dispatch = useDispatch();

    const handleSaveChanges = () => {
        dispatch(startSaveNote(active));
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
       /*  console.log(e.target.files) */
       const file = e.target.files[0];
       if(file) dispatch( startUploading(file) );
       document.querySelector('#fileSelector').value = '';
    }

    return (
        <>
            <div className="notes_appbar">
                <span>28 de agosto</span>
                <input type="file" name="file" id="fileSelector" style={{ display: 'none' }} onChange={handleFileChange} />
                <div>
                    <button className="btn btn-ghost mr-2" onClick={handlePictureClick}>
                        Picture
                    </button>
                    <button className="btn btn-ghost" onClick={handleSaveChanges}>
                        Guardar
                    </button>
                </div>
            </div>
        </>
    )
}
