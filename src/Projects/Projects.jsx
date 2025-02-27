import React from 'react';
import styles from './Projects.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

import vivo from '../Assests/Vivo.png';
import lucky from '../Assests/Luckyace.png';
import yogh from '../Assests/Yogh.png';
import studio from '../Assests/Ad Formats studio.png';
import adctv from '../Assests/Adctv site.png';

const Projects = () => {
    return (
        <div id='projects'>
            <div className={styles.projectCtnr}>
                <div className={styles.projectheroCtnr}>
                    <h1 className="heading">Projects</h1>
                </div>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    autoplay={{ delay: 3500 }}
                    loop={true}
                    modules={[Autoplay, Navigation]}
                    navigation={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1110: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className={styles.projectContentCtnr}>
                            <img src={vivo} alt="Vivo" className={styles.projectImg} />
                            <div className={styles.projectContent}>
                                <p className={styles.descprjt}>Vivobet.mx is a Mexican online casino offering real-money slots, table games, secure transactions, and exciting promotions. Enjoy seamless gameplay and thrilling rewards, making it a top choice for players.</p>
                                <a href="https://vivobet.mx" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Visit Site</a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.projectContentCtnr}>
                            <img src={lucky} alt="luckyace" className={styles.projectImg} />
                            <div className={styles.projectContent}>
                                <p className={styles.descprjt}>LuckyAce offers VIP rewards and personalized bonuses based on activity, unlike Vivobet’s standard promos. This unique approach boosts engagement, ensuring a rewarding experience with exclusive deals and loyalty perks.</p>
                                <a href="https://luckyace.casino/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Visit Site</a>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className={styles.projectContentCtnr}>
                            <img src={yogh} alt="Yogh" className={styles.projectImg} />
                            <div className={styles.projectContent}>
                                <p className={styles.descprjt}>Yogh.sr, a Suriname-based platform, lets users book rooms and order food easily. It streamlines services, ensuring convenience for travelers and locals. A user-friendly interface enhances booking and dining efficiently.</p>
                                <a href="https://yogh.sr/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Visit Site</a>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className={styles.projectContentCtnr}>
                            <img src={studio} alt="Studio" className={styles.projectImg} />
                            <div className={styles.projectContent}>
                                <p className={styles.descprjt}>Airtory Studio is an advanced ad tool for web and mobile, offering 500+ formats. With tracking, analytics, and a user-friendly interface, it boosts engagement, streamlines production, and ensures high-quality ads.</p>
                                <a href="https://studio.airtory.com/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Visit Site</a>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className={styles.projectContentCtnr}>
                            <img src={adctv} alt="Adctv" className={styles.projectImg} />
                            <div className={styles.projectContent}>
                                <p className={styles.descprjt}>ADCTV is an advanced ad tool for OTT and CTV, enabling seamless creation, deployment, and tracking. With precision targeting, real-time analytics, and intuitive controls, it boosts engagement and enhances ad efficiency.</p>
                                <a href="https://www.adctv.com/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Visit Site</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Projects