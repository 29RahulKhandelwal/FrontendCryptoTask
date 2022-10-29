import React from 'react'
import Carousel1 from "../assets/Carousel 1.png";
import Carousel2 from "../assets/Carousel 2.png";
import Carousel3 from "../assets/Carousel 3.png";
import './Carousel.css';

const Carousel = () => {
    return (
        <div className="mainCarousel">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className='carouselDiv'>
                    <button data-bs-target="#carouselExampleDark" data-bs-slide="prev" className='carouselBtn prev'><i class="fa-solid fa-chevron-left"></i></button>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <div className="carousel3 c1">
                                <div className='carouselInner'>
                                    <img src={Carousel1} class="d-block w-30 h-30 carouselImg" alt="..." />
                                    <div class="carouselHeadline">
                                        <p className='para'>Take a quiz!.</p>
                                        <h5>Learn and earn $CKB</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel3 c2">
                                <div className='carouselInner'>
                                    <img src={Carousel2} class="d-block w-30 h-30 carouselImg" alt="..." />
                                    <div class="carouselHeadline">
                                        <p className='para'>Portfolio</p>
                                        <h5>Track your trades in one place, not all over the place <i class="fa-solid fa-fire iconFire"></i></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel3 c3">
                                <div className='carouselInner'>
                                    <img src={Carousel3} class="d-block w-30 h-30 carouselImg" alt="..." />
                                    <div class="carouselHeadline">
                                        <p className='para'>Portfolio</p>
                                        <h5>Track your trades in one place, not all over the place</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <div className="carousel3 c1">
                                <div className='carouselInner'>
                                    <img src={Carousel2} class="d-block w-30 h-30 carouselImg" alt="..." />
                                    <div class="carouselHeadline">
                                        <p className='para'>Portfolio</p>
                                        <h5>Track your trades in one place, not all over the place <i class="fa-solid fa-fire iconFire"></i></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel3 c2">
                                <div className='carouselInner'>
                                    <img src={Carousel1} class="d-block w-30 h-30 carouselImg" alt="..." />
                                    <div class="carouselHeadline">
                                        <p className='para'>Take a quiz!.</p>
                                        <h5>Learn and earn $CKB</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel3 c3">
                                <div className='carouselInner'>
                                    <img src={Carousel3} class="d-block w-30 h-30 carouselImg" alt="..." />
                                    <div class="carouselHeadline">
                                        <p className='para'>Portfolio</p>
                                        <h5>Track your trades in one place, not all over the place</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <div className="carousel3 c1">
                                <div className='carouselInner'>
                                    <img src={Carousel3} class="d-block w-30 h-30 carouselImg" alt="..." />
                                    <div class="carouselHeadline">
                                        <p className='para'>Portfolio</p>
                                        <h5>Track your trades in one place, not all over the place</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel3 c2">
                                <div className='carouselInner'>
                                    <img src={Carousel1} class="d-block w-30 h-30 carouselImg" alt="..." />
                                    <div class="carouselHeadline">
                                        <p className='para'>Portfolio</p>
                                        <h5>Track your trades in one place, not all over the place <i class="fa-solid fa-fire iconFire"></i></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel3 c3">
                                <div className='carouselInner'>
                                    <img src={Carousel2} class="d-block w-30 h-30 carouselImg" alt="..." />
                                    <div class="carouselHeadline">
                                        <p className='para'>Take a quiz!.</p>
                                        <h5>Learn and earn $CKB</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button data-bs-target="#carouselExampleDark" data-bs-slide="next" className='carouselBtn next'><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Carousel