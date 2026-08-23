import React from 'react'
import NetflixBannerLogo from '../../assets/Images/logo.png'
import {Play, Info} from 'lucide-react'
import Styles from './Banner.module.css'

function Banner() {
return (
    <div className={Styles.banner}>
        <div className={Styles.contents}>
            {/* netflix img */}
            <img className={Styles.logoImg} src={NetflixBannerLogo} alt="Netflix logo" />

            {/* title */}
            <h1 className={Styles.title}>Bridgerton</h1>

            {/* description */}
            <h1 className={Styles.description}>
                {" "}
                shondaland's Emmy-winning series brings julia Quinn's novels to life,
                as eight siblings seek their perfect match amid London's scandals and soirees
            </h1>


            {/* button */}
            <div className={Styles.buttonContainer}>
                <button className={Styles.button}>
                    <Play size={30} />
                    Play
                </button>
                <button className={Styles.button}>
                    <Info size={30} />
                    My List
                </button>
            </div>
        </div>
        {/* fading */}
        <div className={Styles.fadeBottom}>

        </div>
    </div>
)
}

export default Banner