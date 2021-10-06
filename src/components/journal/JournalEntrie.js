import React from 'react';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { ActiveNotes } from '../../actions/notes';
import { useSelector } from 'react-redux';

export const JournalEntrie = ({ id, date, title, body, url }) => {

    const state = useSelector(state => state.notes.active)

    /* console.log(id) */
    /*  Añadimos el dispatch */
    const dispatch = useDispatch();
    const noteDate = moment(date);
    const notes = { title: title, body: body, url: url }
    // console.log(notes)
    const handleActiveClick = () => {
        dispatch(ActiveNotes(id, notes));
    }

    return (
        <div className="journal__entry cursor-pointer animate__animated animate__fadeIn animate__faster" onClick={handleActiveClick}>

            {(url !== '') && (<img className="w-16" src={url} alt=''/>)}

            <div tabIndex="0" className="collapse  w-full journal__entry-body collapse-arrow">
                <p className="collapse-title font-medium">
                    {title} {(state?.id === id) && (<span className="badge badge-primary ml-1">Selected</span>)}
                </p>
                <div className="collapse-content">
                    <p className="text-justify text-sm truncate ...">
                        {body}
                    </p>
                    <span className="block text-right">{noteDate.format('ll')}</span>
                </div>
            </div>
        </div>
    )
}
