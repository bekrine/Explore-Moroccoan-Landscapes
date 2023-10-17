"use client"
import React, { useEffect } from 'react'

const SectionSlider = () => {

    useEffect(() => {
        const init = async () => {
          const { Carousel, initTE } = await import("tw-elements");
          initTE({ Carousel });
        };
        init();
      }, []);
    return (
        <div
            id="sliderSection"
            className="relative w-full mr-4 "
            data-te-carousel-init
            data-te-ride="carousel">
            <div
                className="absolute bottom-0 left-0 right-0 z-50 mx-[15%] mb-4 flex list-none justify-center p-0"
                data-te-carousel-indicators>
                <button
                    type="button"
                    data-te-target="#sliderSection"
                    data-te-slide-to="0"
                    data-te-carousel-active
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label="Slide 1"></button>
                <button
                    type="button"
                    data-te-target="#sliderSection"
                    data-te-slide-to="1"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 2"></button>
                <button
                    type="button"
                    data-te-target="#sliderSection"
                    data-te-slide-to="2"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 3"></button>
                <button
                    type="button"
                    data-te-target="#sliderSection"
                    data-te-slide-to="3"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 4"></button>
                <button
                    type="button"
                    data-te-target="#sliderSection"
                    data-te-slide-to="4"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 5"></button>
                <button
                    type="button"
                    data-te-target="#sliderSection"
                    data-te-slide-to="5"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 6"></button>
                <button
                    type="button"
                    data-te-target="#sliderSection"
                    data-te-slide-to="6"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 7"></button>
                <button
                    type="button"
                    data-te-target="#sliderSection"
                    data-te-slide-to="7"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 8"></button>
                <button
                    type="button"
                    data-te-target="#sliderSection"
                    data-te-slide-to="8"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 9"></button>
                <button
                    type="button"
                    data-te-target="#sliderSection"
                    data-te-slide-to="9"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 10"></button>
                <button
                    type="button"
                    data-te-target="#sliderSection"
                    data-te-slide-to="10"
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 11"></button>
            </div>

            <div
                className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                <div
                    className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-active
                    data-te-carousel-item
                    style={{ backfaceVisibility: "hidden" }}>
                    <img
                        src="/sectionSliderImage.webp"
                        className="block w-full aspect-[2/2]"
                        alt="..." />
                    <div
                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">First slide label</h5>
                        <p>
                            Some representative placeholder content for the first slide.
                        </p>
                    </div>
                </div>
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    style={{ backfaceVisibility: "hidden" }}>
                    <img
                        src="/sectionSliderImage1.webp"
                        className="block w-full aspect-[2/2]"
                        alt="..." />
                    <div
                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Second slide label</h5>
                        <p>
                            Some representative placeholder content for the second slide.
                        </p>
                    </div>
                </div>
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    style={{ backfaceVisibility: "hidden" }}>
                    <img
                        src="/sectionSliderImage2.webp"
                        className="block w-full aspect-[2/2]"
                        alt="..." />
                    <div
                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Third slide label</h5>
                        <p>
                            Some representative placeholder content for the third slide.
                        </p>
                    </div>
                </div>
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    style={{ backfaceVisibility: "hidden" }}>
                    <img
                        src="/sectionSliderImage3.webp"
                        className="block w-full aspect-[2/2]"
                        alt="..." />
                    <div
                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Third slide label</h5>
                        <p>
                            Some representative placeholder content for the third slide.
                        </p>
                    </div>
                </div>
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    style={{ backfaceVisibility: "hidden" }}>
                    <img
                        src="/sectionSliderImage4.webp"
                        className="block w-full aspect-[2/2]"
                        alt="..." />
                    <div
                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Third slide label</h5>
                        <p>
                            Some representative placeholder content for the third slide.
                        </p>
                    </div>
                </div>
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    style={{ backfaceVisibility: "hidden" }}>
                    <img
                        src="/sectionSliderImage5.webp"
                        className="block w-full aspect-[2/2]"
                        alt="..." />
                    <div
                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Third slide label</h5>
                        <p>
                            Some representative placeholder content for the third slide.
                        </p>
                    </div>
                </div>
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    style={{ backfaceVisibility: "hidden" }}>
                    <img
                        src="/sectionSliderImage6.webp"
                        className="block w-full aspect-[2/2]"
                        alt="..." />
                    <div
                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Third slide label</h5>
                        <p>
                            Some representative placeholder content for the third slide.
                        </p>
                    </div>
                </div>
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    style={{ backfaceVisibility: "hidden" }}>
                    <img
                        src="/sectionSliderImage7.webp"
                        className="block w-full aspect-[2/2]"
                        alt="..." />
                    <div
                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Third slide label</h5>
                        <p>
                            Some representative placeholder content for the third slide.
                        </p>
                    </div>
                </div>
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    style={{ backfaceVisibility: "hidden" }}>
                    <img
                        src="/sectionSliderImage8.webp"
                        className="block w-full aspect-[2/2]"
                        alt="..." />
                    <div
                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Third slide label</h5>
                        <p>
                            Some representative placeholder content for the third slide.
                        </p>
                    </div>
                </div>
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    style={{ backfaceVisibility: "hidden" }}>
                    <img
                        src="/sectionSliderImage9.webp"
                        className="block w-full aspect-[2/2]"
                        alt="..." />
                    <div
                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Third slide label</h5>
                        <p>
                            Some representative placeholder content for the third slide.
                        </p>
                    </div>
                </div>
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    style={{ backfaceVisibility: "hidden" }}>
                    <img
                        src="/sectionSliderImage10.webp"
                        className="block w-full aspect-[2/2]"
                        alt="..." />
                    <div
                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Third slide label</h5>
                        <p>
                            Some representative placeholder content for the third slide.
                        </p>
                    </div>
                </div>
         
            </div>

            <button
                className="absolute bottom-0 left-0 top-0 z-[10] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#sliderSection"
                data-te-slide="prev">
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </span>
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
            </button>
            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#sliderSection"
                data-te-slide="next">
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Next</span>
            </button>
        </div>


  )
}

export default SectionSlider