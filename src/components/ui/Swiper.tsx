import { Swiper as SwiperSW, SwiperProps as SwiperPropsSW } from "swiper/react"
import styled from "styled-components"
type SwiperProps = SwiperPropsSW & {
    // định nghĩa thêm props của mình
}
export const Swiper = ({ children, ...props }: SwiperProps) => {
    return (
        <SwiperS {...props}>
            {children}
        </SwiperS>
    );
}
const SwiperS = styled(SwiperSW)`
    .swiper-slide {
        background-position: center;
        background-size: cover;
        img {
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 500px;
        }
    }
    .swiper-button-prev, 
    .swiper-button-next{
        color: var(--primary-color);
    }
    .swiper-pagination-bullet{
        height: 20px;
        width: 20px;
    }
    .swiper-pagination-bullet-active{
        background-color: var(--primary-color);
    }
    .autoplay-progress {
        position: absolute;
        right: 16px;
        bottom: 16px;
        z-index: 10;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: var(--primary-color);
    }
    .autoplay-progress svg {
        --progress: 0;
        position: absolute;
        left: 0;
        top: 0px;
        z-index: 10;
        width: 100%;
        height: 100%;
        stroke-width: 4px;
        stroke: var(--primary-color);
        fill: none;
        stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
        stroke-dasharray: 125.6;
        transform: rotate(-90deg);
    }
`;