import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import MainPageContent from './MainPageContent';
import MainPageHeader from './MainPageHeader';

const MainPage = () => {
    return (
        <div id='#MainPage' className='relative text-center ml-15 bg-sunset text-cyan-700 h-screen'>
            <MainPageHeader />
            <MainPageContent />
        </div>
    )
};

export default MainPage;