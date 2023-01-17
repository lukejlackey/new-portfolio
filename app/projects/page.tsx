import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import GitHubIcon from "../../public/assets/img/github.png"
import DocsIcon from "../../public/assets/img/docsIcon.png"
import { Tourney, Josefin_Sans } from '@next/font/google';
import LongingMonke from '../../public/assets/img/monke/longingMonke.png'
import ShockedMonke from '../../public/assets/img/monke/shockedMonke.png'
import CloakMonke1 from '../../public/assets/img/monke/cloakMonke1.png'
import CloakMonke2 from '../../public/assets/img/monke/cloakMonke2.png'
import Project from './Project';

const tourney = Tourney({ weight: '900', subsets: ['latin'] });
const josefin_sans = Josefin_Sans({ weight: '300', subsets: ['latin'] });

function ProjectsPage() {
    return (
        <div className={`${josefin_sans.className} projectsPage`}>
            <div className='projectBottomMonkeyCont load5'>
                <Image
                    className="projectBottomMonkey"
                    src={LongingMonke}
                    alt="Longing monkey"
                />
                <Image
                    className="projectBottomMonkey"
                    src={CloakMonke2}
                    alt="Cloak monkey 2"
                />
                <Image
                    className="projectBottomMonkey"
                    src={CloakMonke1}
                    alt="Cloak monkey 1"
                />
                <Image
                    className="projectBottomMonkey"
                    src={ShockedMonke}
                    alt="Shocked monkey"
                />
            </div>
            <h2 className={`${tourney.className} projectsTitle load1`}>Projects</h2>
            <div className='projectsCont load2'>
                <Project
                    title='Quotosophy API'
                    gitHubLink='https://github.com/lukejlackey/quotosophy'
                    liveLink='http://docs.quotosophy.com'
                    desc='Philosophy Quote API'
                    role='Full Stack Developer'
                    backend='Express.js, Node.js, Serverless'
                    frontend='React.js, Material-UI, EC2'
                    database='Redis (Redis-OM + RedisGraph)'
                />
                <Project
                    title='Green Guzzler'
                    gitHubLink='https://github.com/lukejlackey/greenGuzzler'
                    liveLink='https://greenguzzler.link/'
                    desc='Beer/Brewery Tracking App'
                    role='Full Stack Developer'
                    backend='Flask, Serverless'
                    frontend='Jinja2, Bootstrap'
                    database='MySQL, AWS RDS'
                />
                <Project
                    title='Force Battles'
                    gitHubLink='https://github.com/lukejlackey/starWarsForceBattles'
                    desc='Star Wars Power-Level Voting App'
                    role='Full Stack Developer'
                    backend='Express.js, Node.js'
                    frontend='React.js, EC2'
                    database='MongoDB'
                />
            </div>
        </div>
    )
}

export default ProjectsPage