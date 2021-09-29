import React from 'react'
import { NoteView } from '../notes/NoteView'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const JournalView = () => {
    return (
        <div className="journal__main-content w-full">
            <Sidebar/>

            <main className="w-full">
                {/* <NothingSelected/> */}
                <NoteView/>
            </main>
        </div>
    )
}
