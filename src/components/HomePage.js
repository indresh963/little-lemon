import Hero from './Hero';
import Highlight from './Highlight';
import Testimonial from './Testimonial';
import Parallax from './Parallax';
import {memo} from 'react';

function HomePage(){
    return(
        <>
        <Hero/>
        <Highlight/>
        <Parallax/>
        <Testimonial/>
        </>
    )
}

export default memo(HomePage);