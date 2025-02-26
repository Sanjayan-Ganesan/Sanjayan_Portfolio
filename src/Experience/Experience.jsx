import React from 'react';
import styles from './Experience.module.css';


import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay,Navigation } from 'swiper/modules';
import 'swiper/css';


const Experience = () => {
    return (
        <div className={styles.ctnr}>
            <div className={styles.experienceCtnr}>
                <div className={styles.expimgCtnr}>
                    <h1 className={styles.heading}>Experience</h1>
                </div>
                <Swiper spaceBetween={50} slidesPerView={1} autoplay={{delay: 2500}} loop={true}
                 modules={[Autoplay,Navigation]} navigation={true}>
                    <SwiperSlide>
                        <div className={styles.expContentCtnr}>
                        <div className={styles.expContentCtnr1}>
                            <div className={styles.expContentCtnr2}>
                                <p className={styles.expContentHeading}>Associate Software Engineer</p>
                                <p className={styles.expContentSubHeading}>2023 to 2024</p>
                            </div>
                            <p className={styles.expContentSubHeading}>YsecIt Software Ltd</p>
                            <p className={styles.expContentSubHeading}>Bangalore</p>
                        </div>
                        <div className={styles.expContentCtnr3}>
                            <ul>
                                <li>Developed and optimized casino games using AngularJS, increasing user engagement by 15% in one quarter.</li>
                                <li>Designed and implemented a ReactJS dashboard for real-time game statistics, improving data visualization and monitoring.</li>
                                <li>Conducted testing and debugging, reducing reported bugs by 20% and enhancing overall game stability and performance.</li>
                            </ul>
                        </div>
                        </div>                        
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className={styles.expContentCtnr}>
                        <div className={styles.expContentCtnr1}>
                            <div className={styles.expContentCtnr2}>
                                <p className={styles.expContentHeading}>Software Development Engineer</p>
                                <p className={styles.expContentSubHeading}>2022 to 2023</p>
                            </div>
                            <p className={styles.expContentSubHeading}>Airtory Inc</p>
                            <p className={styles.expContentSubHeading}>Bangalore</p>
                        </div>
                        <div className={styles.expContentCtnr3}>
                            <ul>
                                <li>Developed 10+ interactive rich media ads with real-time analytics, improving engagement and ad performance.</li>
                                <li>Managed 30+ digital ad formats across platforms, utilizing CI/CD pipelines for efficient deployment.</li>
                                <li>Implemented SEO strategies, boosting online presence and increasing organic traffic significantly.</li>
                            </ul>
                        </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Experience