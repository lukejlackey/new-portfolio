import React from 'react'
import Image from 'next/image'
import LongingMonke from '../../public/assets/img/monke/longingMonke.png'


function ProjectsPage() {
    return (
        <div className='projectsPage'>
            <Image
                className="longingMonkey load1"
                src={LongingMonke}
                alt="Longing monkey"
            />
        </div>
    )
}

export default ProjectsPage