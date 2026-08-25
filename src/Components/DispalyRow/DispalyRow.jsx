import React from 'react'
import styles from './DispalyRow.module.css'
import SlideShow from '../SlideShow/SlideShow'
import {movies} from '../../Data/Data'

function DispalyRow() {
return (
    <div className={styles.mainWrapper}>
        <SlideShow title="Movie suggestion" movies={movies}/>
        <SlideShow title="Popular on Netflix" movies={movies}/>
        <SlideShow title="Trending Now" movies={movies}/>
        <SlideShow title="Now Releases" movies={movies}/>
    </div>
)
}

export default DispalyRow