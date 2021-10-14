import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNotes } from '../../actions/notes';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(startLogout());
    }
    
    const state = useSelector(state => state);
    const { auth: user } = state;

    
    const handleAddEntry = () => {
        dispatch(startNewNotes());
    }


    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon px-2"></i>
                    <span>{user.name}</span>
                </h3>

                <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
            </div>

            <div className="journal__new-entry" onClick={ handleAddEntry }>
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New Entry
                </p>
            </div>

            <JournalEntries />
        </aside>
    )
}
