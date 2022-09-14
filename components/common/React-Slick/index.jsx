import Slider from "react-slick";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer, ClientReviewDescription, ClientName, ClientRole, ClientReviewProfile, ClientReviewCardWrapper } from "./style.jsx";
import Image from "next/image";

const ImageSlider = ({ clientReviewData }) => {

	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  initialSlide: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };
	return (
			<SliderContainer>
				<Slider {...settings}>
					{clientReviewData.map((item) => (
						<ClientReviewCardWrapper key={item.id}>
							<ClientReviewDescription>{item.description}</ClientReviewDescription>
							<ClientReviewProfile>
								<Image src={item.src} alt={item.alt} width={40} height={40} style={{borderRadius: '50%'}}/>
								<ClientName>{item.name}</ClientName>
								<ClientRole>{item.role}</ClientRole>
							</ClientReviewProfile>
						</ClientReviewCardWrapper>
					))}
				</Slider>
			</SliderContainer>
	)
}
export default ImageSlider;
