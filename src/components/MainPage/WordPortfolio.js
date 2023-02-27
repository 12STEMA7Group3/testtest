import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WordPortfolio = () => {
    const textAnimation = () => {
        const div = document.querySelectorAll('[data-value]');
        div.forEach(div => {
            div.addEventListener('mouseover', () => {
                div.animate({
                    color: 'red',
                    transform: 'translate(10px, -10px)',
                },
                {
                    duration: 200,
                    easing: 'linear',
                    fill: 'forwards',
                });
            });
            div.addEventListener('mouseleave', () => {
                div.animate({
                    color: 'black',
                    transform: 'translate(0, 0)',
                },
                {
                    duration: 200,
                    easing: 'linear',
                    fill: 'forwards',
                });
            })
        });
    }
    return (
        <div id="Portfolio" className="flex flex-col gap-3">
            <div data-value='p' onMouseEnter={() => textAnimation ()}>p</div>
            <div data-value='o' onMouseEnter={() => textAnimation ()}>o</div>
            <div data-value='r' onMouseEnter={() => textAnimation ()}>r</div>
            <div data-value='t' onMouseEnter={() => textAnimation ()}>t</div>
            <div data-value='f' onMouseEnter={() => textAnimation ()}>f</div>
            <div data-value='o' onMouseEnter={() => textAnimation ()}>o</div>
            <div data-value='l' onMouseEnter={() => textAnimation ()}>l</div>
            <div data-value='i' onMouseEnter={() => textAnimation ()}>i</div>
            <div data-value='o' onMouseEnter={() => textAnimation ()}>o</div>
        </div>
    )
};

export default WordPortfolio;