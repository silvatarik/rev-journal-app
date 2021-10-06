import React from 'react'

export const PageTest = () => {
    return (
        <div>
            <div tabIndex="0" className="collapse  w-96 journal__entry-body collapse-arrow">
                <p className="collapse-title  pl-1 font-medium">
                    {title}
                </p>
                <div className="collapse-content">
                    <p className=" pl-1">
                        {body}
                    </p>
                    <div className="">
                        <span>{noteDate.format('LL')}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
