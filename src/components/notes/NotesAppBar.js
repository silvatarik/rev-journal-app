import React from 'react'

export const NotesAppBar = () => {
    return (
        <>
            <div className="notes_appbar">
                <span>28 de agosto</span>

                <div>
                    <button className="btn btn-ghost mr-2">
                        Picture
                    </button>
                    <button className="btn btn-ghost">
                        Save
                    </button>
                </div>
            </div>
        </>
    )
}
