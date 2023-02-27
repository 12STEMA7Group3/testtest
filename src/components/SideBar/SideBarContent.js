import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const SideBarUpperContent = () => {
    const SideBarFunction = () => {
        const sideBarButtons = document.querySelectorAll('.bg-surfaceBlue-lowopacity');
        const circleUser = document.querySelectorAll('.fa-circle-user');
        const heartIcon = document.querySelector('.fa-heart');
        const gearIcon = document.querySelector('.fa-gear');
        sideBarButtons.forEach(button => {
            let child = button.firstChild;
                button.addEventListener('mouseenter', () => {
                    button.animate({
                        transform: 'scale(1.07)',
                        backgroundColor: 'rgb(0 148 182 / 1)',
                        borderRadius: '0.5rem',
                    },
                    {
                        duration: 450,
                        easing: 'ease-in-out',
                        fill: 'forwards',
                    });
    
                    if (child == heartIcon) {
                        child.animate({
                            color: 'rgb(150 0 24 / .9)',
                        },
                        {
                            duration: 450,
                            easing: 'ease-in-out',
                            fill: 'forwards',
                        });
                    } else if (child == gearIcon) {
                        child.animate({
                            transform: 'rotate(90deg)',
                        },
                        {
                            duration: 450,
                            easing: 'ease-in-out',
                            fill: 'forwards',
                        });
                    }
                    if (child == circleUser[0]) {
                        child.animate({
                            opacity: '0',
                        },
                        {
                            duration: 450,
                            easing: 'ease-in-out',
                            fill: 'forwards',
                        });
                        circleUser[1].animate({
                            opacity: 1,
                        },
                        {
                            duration: 450,
                            easing: 'ease-in-out',
                            fill: 'forwards',
                        });
                    }
                });
    
                button.addEventListener('mouseleave', () => {
                    child.animate({
                    color: 'white',
                },
                {
                    duration: 450,
                    easing: 'ease-in-out',
                    fill: 'forwards',
                });
    
                if (child == gearIcon) {
                    child.animate({
                    transform: 'rotate(0deg)',
                },
                {
                    duration: 450,
                    asing: 'ease-in-out',
                    fill: 'forwards',
                });
                } else if (child == circleUser[0]) {
                    child.animate({
                    opacity: '1',
                },
                {
                    duration: 450,
                    easing: 'ease-in-out',
                    fill: 'forwards',
                });
                    circleUser[1].animate({
                    opacity: 0,
                },
                {
                    duration: 350,
                    easing: 'ease-in-out',
                    fill: 'forwards',
                });
            }
    
                button.animate({
                    transform: 'scale(1)',
                    backgroundColor: 'rgb(0 148 182 / .2)',
                    borderRadius: '0.25rem',
                },
                {
                    duration: 450,
                    easing: 'ease-in-out',
                    fill: 'forwards',
                })
            });
        });
    }
    SideBarFunction();
    const ChangePage = (e) => {
        if (e === 'mp') {
            window.location.hash = 'MainPage';
            console.log(e)
        } else if (e === 'pr') {
            window.location.hash = 'About';
        }
    }
    return (
        <div className="p-1 flex flex-col gap-4">
            <div className="rounded p-3 text-center bg-surfaceBlue-lowopacity" onMouseEnter={SideBarFunction} onClick={() => ChangePage ('mp')}>
                <i className="fa-solid fa-house-chimney"></i>
            </div>
            <div className='mt-8 flex flex-col gap-4'>
                <div className="rounded p-3 text-center bg-surfaceBlue-lowopacity" onMouseEnter={SideBarFunction} onClick={() => ChangePage ('pr')}>
                    <i className="fa-solid fa-circle-user"></i>
                    <i className="fa-regular fa-circle-user" data-value-hidden></i>
                </div>
                <div className="rounded p-3 text-center bg-surfaceBlue-lowopacity" onMouseEnter={SideBarFunction} onClick={() => ChangePage ('bp')}>
                    <i className="fa-solid fa-heart"></i>
                </div>
                <div className="rounded p-3 text-center bg-surfaceBlue-lowopacity" onMouseEnter={SideBarFunction} onClick={() => ChangePage ('wp')}>
                    <i className="fa-solid fa-trash"></i>
                </div>
            </div>
        </div>
    )
};

const SideBarLowerContent = () => {
    return (
        <div className="p-1 flex flex-col gap-4">
            <div className="rounded p-3 text-center bg-surfaceBlue-lowopacity" onMouseEnter={SideBarUpperContent}>
                <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="rounded p-3 text-center bg-surfaceBlue-lowopacity" onMouseEnter={SideBarUpperContent}>
                <i className="fa-solid fa-gear"></i>
            </div>
        </div>
    )
}

export default SideBarUpperContent;
export {SideBarLowerContent};