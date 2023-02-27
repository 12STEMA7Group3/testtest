import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import SideBarUpperContent from './SideBarContent';
import {SideBarLowerContent} from './SideBarContent';

const SideBar = () => {
    return (
        <div className="sidebar flex flex-col items-center justify-between py-3
                        fixed left-0 top-0 h-screen w-20 bg-deepBlue text-white">
            <SideBarUpperContent />
            <SideBarLowerContent />
        </div>
    )
};

export default SideBar