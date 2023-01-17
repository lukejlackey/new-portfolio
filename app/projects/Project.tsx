import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GitHubIcon from "../../public/assets/img/github.png"
import DocsIcon from "../../public/assets/img/docsIcon.png"
import { Tourney } from '@next/font/google';

const tourney = Tourney({ weight: '900', subsets: ['latin'] });

interface ProjectProps {
    title: string,
    gitHubLink: string,
    liveLink?: string,
    desc: string,
    role: string,
    backend: string,
    frontend: string,
    database: string,
}

function Project(props: ProjectProps) {
    return (
        <div className='projectsTextbox'>
            <div className='projectsHeading'>
                <h4 className={tourney.className}>{props.title}</h4>
                <div>
                    <Link href={props.gitHubLink} target='_blank'>
                        <Image
                            className="projectsSocialIcon"
                            src={GitHubIcon}
                            width={25}
                            height={25}
                            alt="GitHub Icon"
                        />
                    </Link>
                    {
                        props.liveLink ?
                            <Link href={props.liveLink} target='_blank'>
                                <Image
                                    className="projectsSocialIcon"
                                    src={DocsIcon}
                                    width={25}
                                    height={25}
                                    alt="Live Link Icon"
                                />
                            </Link> :
                            ''
                    }
                </div>
            </div>
            <div className='projectsBody'>
                <div>
                    <strong>Desc:</strong>
                    <p>{props.desc}</p>
                </div>
                <div>
                    <strong>Role:</strong>
                    <p>{props.role}</p>
                </div>
                <div>
                    <strong>Backend:</strong>
                    <p>{props.backend}</p>
                </div>
                <div>
                    <strong>Frontend:</strong>
                    <p>{props.frontend}</p>
                </div>
                <div>
                    <strong>Database:</strong>
                    <p>{props.database}</p>
                </div>
            </div>
        </div>
    )
}

export default Project