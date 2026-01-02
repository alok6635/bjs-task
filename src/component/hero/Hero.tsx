import Header from "../Header/Header";
import SliderDetail from "../slider/SliderDetail";
import SliderView from "../slider/SliderView";
import "./hero.css";

const Hero = () => {

    return (
        <section className="hero_section">
            <div className="container">
                <Header />
                <section className="slider_section">
                    <SliderDetail />
                    <SliderView />
                </section>
            </div>
        </section>
    )
}

export default Hero