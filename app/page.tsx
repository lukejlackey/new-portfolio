import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Monke1 from '../public/assets/img/monke/monke1.png'
import Monke2 from '../public/assets/img/monke/monke2.png'
import Monke3 from '../public/assets/img/monke/monke3.png'
import ExpressLogo from '../public/assets/img/logos/expressLogo.png'
import FlaskLogo from '../public/assets/img/logos/flaskLogo.png'
import JavaLogo from '../public/assets/img/logos/javaLogo.png'
import JavaScriptLogo from '../public/assets/img/logos/jsLogo.png'
import MongoDBLogo from '../public/assets/img/logos/mongodbLogo.png'
import MUILogo from '../public/assets/img/logos/muiLogo.png'
import MySQLLogo from '../public/assets/img/logos/mysqlLogo.png'
import PythonLogo from '../public/assets/img/logos/pythonLogo.png'
import ReactLogo from '../public/assets/img/logos/reactLogo.png'
import RedisLogo from '../public/assets/img/logos/redisLogo.png'
import ServerlessLogo from '../public/assets/img/logos/serverlessLogo.png'
import SpringLogo from '../public/assets/img/logos/springLogo.png'
import { Tourney, Josefin_Sans } from '@next/font/google';

const tourney = Tourney({ weight: '900', subsets: ['latin'] });
const josefin_sans = Josefin_Sans({ weight: '300', subsets: ['latin'] });

const logos = [
    {
        logo: PythonLogo,
        name: 'Python',
    },
    {
        logo: FlaskLogo,
        name: 'Flask',
    },
    {
        logo: MySQLLogo,
        name: 'MySQL',
    },
    {
        logo: ServerlessLogo,
        name: 'Serverless',
    },
    {
        logo: JavaScriptLogo,
        name: 'JavaScript',
    },
    {
        logo: ExpressLogo,
        name: 'Express',
    },
    {
        logo: MongoDBLogo,
        name: 'MongoDB',
    },
    {
        logo: MUILogo,
        name: 'Material UI',
    },
    {
        logo: JavaLogo,
        name: 'Java',
    },
    {
        logo: SpringLogo,
        name: 'SpringBoot',
    },
    {
        logo: RedisLogo,
        name: 'Redis',
    },
    {
        logo: ReactLogo,
        name: 'React',
    },
]


function HomePage() {
    return (
        <div className='homePage'>
            <div>
                <h2 className={`${tourney.className} load1`}>About Me</h2>
                <div className='textBox load2'>
                    <p className={josefin_sans.className}>
                        I am a <strong>Full Stack</strong> developer based in the <strong>San Diego</strong> area with experience building and deploying web applications in <strong>Python</strong>, <strong>Java</strong>, & <strong>JavaScript</strong>.
                    </p>
                </div>
                <h2 className={`${tourney.className} load3`}>Skills</h2>
                <div className={`textBox skillsBox ${josefin_sans.className} load4`}>
                    {
                        logos.map((logo, i) => {
                            return (
                                <div className='skillIconCont'>
                                    <Image
                                        key={`logo${i}`}
                                        className="skillIcon"
                                        src={logo.logo}
                                        alt={logo.name}
                                    />
                                    <h5>{logo.name}</h5>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='bottomMonkeyCont load5'>
                <Image
                    className="bottomMonkey"
                    src={Monke1}
                    alt="Purple monkey 1"
                />
                <div className='resumeCont'>
                    <div className={`resumeBox ${josefin_sans.className}`}>
                        <p id='resumeBox'>Click <Link href='/assets/resume.pdf' target="_blank" rel="noopener noreferrer"><strong>here</strong></Link> for my complete resume.</p>
                    </div>
                    <div className='bottomGorillaCont'>
                        <Image
                            className="bottomGorilla"
                            src={Monke3}
                            alt="Purple gorilla"
                        />
                    </div>
                </div>
                <Image
                    className="bottomMonkey"
                    src={Monke2}
                    alt="Purple monkey 2"
                />
            </div>
        </div>
    )
}

export default HomePage