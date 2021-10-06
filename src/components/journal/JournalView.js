import React from 'react'
import { useSelector } from 'react-redux'
import { NoteView } from '../notes/NoteView'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const JournalView = () => {

    const {active} = useSelector(state => state.notes);

    return (
        <div className="journal__main-content w-full">
            <Sidebar />

            <main className="w-full">
                {
                    ( active )
                    ? (<NoteView />)
                    : (<NothingSelected/>)
                }              
            </main>
        </div>
    )
}
