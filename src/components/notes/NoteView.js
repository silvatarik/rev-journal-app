import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteView = () => {
    return (
        <div className="notes_main-content w-full">
            <div className="w-full">
                <NotesAppBar />
                <div className="container mx-auto p-5 notes__content flex flex-col">
                    <div className="form-control mx-auto w-3/4">
                        <label className="label">
                            <span className="label-text">Primary</span>
                        </label>
                        <input type="text" placeholder="Some awesome title" className="input input-primary input-bordered " />
                    </div>
                    <div className="form-control mx-auto w-3/4">
                        <label className="label">
                            <span className="label-text">Your bio</span>
                        </label>
                        <textarea className="textarea h-60 textarea-bordered" placeholder="What happened today"></textarea>
                    </div>

                    <div className="notes__image mx-auto">
                        <img className="mask mask-decagon" src="https://picsum.photos/200/300" alt="imagen" />
                    </div>
                </div>
            </div>




        </div>


    )
}
