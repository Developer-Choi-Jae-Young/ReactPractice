import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const Image = styled.img`
    width: 150px;
    height: 200px;

    transform: scale(1.0);
    transition: transform .7s;

    &:hover {
        transform: scale(1.1);
        transition: transform .7s;
    }
`

const style = {
    height: '250px',
    padding: '20px',
    cursor: 'pointer',
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
};

function ContentsArea({ list }) {
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const updateSlidesToShow = () => {
            const width = window.innerWidth;
            if (width <= 600) {
                setSlidesToShow(2); // 화면이 작아지면 2개 보여줌
            } else {
                setSlidesToShow(3); // 기본값 3개
            }
        };

        updateSlidesToShow(); // 초기 설정
        window.addEventListener("resize", updateSlidesToShow); // 사이즈 변경 시 업데이트

        return () => window.removeEventListener("resize", updateSlidesToShow); // cleanup
    }, []);

    const sliderSettings = {
        ...settings,
        slidesToScroll: slidesToShow,
        slidesToShow: slidesToShow
    };

    return (
        <div>
            <Slider {...sliderSettings}>
                {
                    list.map((item, index) => {
                        return (
                            <div style={style}>
                                <Image src={item.img} alt={item.text}></Image>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default ContentsArea;