import React from 'react'

export const JournalEntrie = () => {
    return (
        <div className="journal__entry cursor-pointer">
            <div className="grid grid-cols-12">
                <div className="col-span-2 hidden lg:block journal__entry-picture"
                    style={{ backgroundSize: 'cover', backgroundImage: 'url(https://picsum.photos/200/300)' }}>

                </div>
                <div className=" col-span-10 journal__entry-body">
                    <p className="journal__entry-title pl-1">
                        Un nuevo día
                    </p>
                    <p className="journal__entry-content pl-1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, error repudiandae iste odit labore illum corporis consequuntur repellendus
                        iure sapiente dolor itaque laborum ex delectus numquam magni soluta quasi doloribus?
                    </p>
                    <div className="journal__entry-date-box">
                        <span>Monday 28</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
