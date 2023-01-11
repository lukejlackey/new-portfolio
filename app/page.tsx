import React from 'react'
import Image from 'next/image'
import Monke1 from '../public/assets/img/monke1.png'
import Monke2 from '../public/assets/img/monke2.png'
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
    PythonLogo, JavaLogo, JavaScriptLogo,
    FlaskLogo, ExpressLogo, SpringLogo,
    MySQLLogo, MongoDBLogo, RedisLogo,
    ServerlessLogo, ReactLogo, MUILogo
]

function HomePage() {
    return (
        <div className='homePage'>
            <div>
                <h2 className={tourney.className}>About Me</h2>
                <div className='textBox'>
                    <p className={josefin_sans.className}>
                        I am a <strong>Full Stack</strong> developer based in the <strong>San Diego</strong> area with experience building and deploying web applications in <strong>Python</strong>, <strong>Java</strong>, & <strong>JavaScript</strong>.
                    </p>
                </div>
                <h2 className={tourney.className}>Skills</h2>
                <div className={`textBox ${josefin_sans.className}`}>
                    {

                    }
                    <Image
                        className="skillIcon"
                        src={ExpressLogo}
                        alt="ExpressLogo"
                    />
                </div>
            </div>
            <div className='bottomMonkeyCont'>
                <Image
                    className="bottomMonkey"
                    src={Monke1}
                    alt="Purple monkey 1"
                />
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