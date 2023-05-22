import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
const TopPicks = () => {
	// const settings = {
	// 	dots: true,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 4,
	// 	slidesToScroll: 4,
	// 	responsive: [
	// 		{
	// 			breakpoint: 1024,
	// 			settings: {
	// 				slidesToShow: 3,
	// 				slidesToScroll: 3,
	// 				infinite: true,
	// 				dots: true,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 2,
	// 				initialSlide: 2,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 	],
	// };
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div className="container-fluid ">
			<div class="top-picks">
				<h2>Top Picks</h2>
				<div class="carousel">
					<div class="slide">
						<img src="https://via.placeholder.com/400x600" alt="Movie Title" />
						<h3>Movie Title</h3>
					</div>
					<div class="slide">
						<img src="https://via.placeholder.com/400x600" alt="Movie Title" />
						<h3>Movie Title</h3>
					</div>
					<div class="slide">
						<img src="https://via.placeholder.com/400x600" alt="Movie Title" />
						<h3>Movie Title</h3>
					</div>
					<div class="slide">
						<img src="https://via.placeholder.com/400x600" alt="Movie Title" />
						<h3>Movie Title</h3>
					</div>
					<div class="slide">
						<img src="https://via.placeholder.com/400x600" alt="Movie Title" />
						<h3>Movie Title</h3>
					</div>
					<div class="slide">
						<img src="https://via.placeholder.com/400x600" alt="Movie Title" />
						<h3>Movie Title</h3>
					</div>
				</div>
			</div>

			<div className="carousel-section">
				<h2 className="section-title">Top Picks</h2>
				{/* <Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={50}
					slidesPerView={3}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}
					autoplay={{ delay: 3000 }}
					breakpoints={{
						576: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						992: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
						1200: {
							slidesPerView: 5,
							spaceBetween: 50,
						},
					}}
				>

				</Swiper> */}
				<Swiper
					// install Swiper modules
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={50}
					slidesPerView={3}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}
				>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
						<SwiperSlide key={item}>
							<div className="carousel-item">
								<img
									src={`https://picsum.photos/id/${item}/400/600`}
									alt={`Slide ${item}`}
									className="carousel-image"
								/>
								<div className="carousel-overlay">
									<h3 className="carousel-title">Movie Title</h3>
									<button className="carousel-play-btn">Play</button>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default TopPicks;
