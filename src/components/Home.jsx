import React from 'react'
import vg from "../assets/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai"
const Home = () => {
    return (
        <>
            <div className="home" id ="home"  >Home

                <main>
                    <h1>
                        techystar
                    </h1>
                    <p>solution to all your problems</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>we are your one and only solution to the tech problems you face
                        everyday.we are leading tech company  whose aim is to increase the
                        problem solving ability in children.
                    </p>
                </div>



            </div>
            <div className="home3" id="about">
                <div>
                    <h1>
                        who are we
                    </h1>
                    <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                        The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
                        The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.


                    </p>

                </div>
            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationdelay: "0.3 sec",
                        }}>
                            <AiFillAmazonCircle />
                          
                            <p>  Amazon </p>
   
                        </div>
                        <div style={{
                            animationdelay: "0.5sec",
                        }}>
                            <AiFillYoutube /><p>
                                Youtube
                            </p>
                        </div>
                        <div style={{
                            animationdelay: "0.7 sec",
                        }}>
                            <AiFillInstagram /><p>
                                Instagram
                            </p>
                        </div>
                        <div style={{
                            animationdelay: "0.9 sec",
                        }}>
                            <AiFillGoogleCircle /><p>
                                Google
                            </p>
                        </div>

                    </article>
                </div>
            </div>

        </>
    )
}

export default Home