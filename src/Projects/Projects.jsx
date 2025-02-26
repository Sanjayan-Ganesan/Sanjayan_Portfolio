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
        <div>
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
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className={styles.projectContentCtnr}>
                            <img src={vivo} alt="Vivo" className={styles.projectImg} />
                            <div className={styles.projectContent}>
                                <p className={styles.descprjt}>Vivobet.mx is a Mexican online casino offering slots and table games for real money, featuring an enhanced user experience.</p>
                                <a href="https://vivobet.mx" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Visit Site</a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.projectContentCtnr}>
                            <img src={lucky} alt="luckyace" className={styles.projectImg} />
                            <div className={styles.projectContent}>
                                <p className={styles.descprjt}>LuckyAce focuses on personalized promotions and VIP rewards, offering tailored bonuses based on player activity, unlike Vivobet’s standard promotional system.</p>
                                <a href="https://luckyace.casino/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Visit Site</a>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.projectContentCtnr}>
                            <img src={yogh} alt="Yogh" className={styles.projectImg} />
                            <div className={styles.projectContent}>
                                <p className={styles.descprjt}>Yogh.sr is a Suriname-based hospitality platform for booking rooms and ordering food, offering seamless management of accommodations and dining services.</p>
                                <a href="https://yogh.sr/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Visit Site</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.projectContentCtnr}>
                            <img src={studio} alt="Studio" className={styles.projectImg} />
                            <div className={styles.projectContent}>
                                <p className={styles.descprjt}>Airtory Studio is an advanced ad creation tool for web and mobile, offering 500+ creative formats with tracking and data analytics.</p>
                                <a href="https://studio.airtory.com/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Visit Site</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.projectContentCtnr}>
                            <img src={adctv} alt="Adctv" className={styles.projectImg} />
                            <div className={styles.projectContent}>
                                <p className={styles.descprjt}>ADCTV is an ad creation tool designed for OTT and CTV platforms, enabling seamless ad development, deployment, and performance tracking.</p>
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