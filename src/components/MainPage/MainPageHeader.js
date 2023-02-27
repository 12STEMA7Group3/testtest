import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import WordPortfolio from './WordPortfolio';

const MainPageHeader = () => {
    return (
        <div className='main-page-header absolute w-fit inline-flex flex-col items-end top-0 left-0 
                        p-8 uppercase font-montserrat font-extrabold'>
            <WordPortfolio />
        </div>
    )
};

export default MainPageHeader;