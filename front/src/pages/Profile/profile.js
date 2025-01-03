import createLogoutListener from '../../utils/Listeners/Menu/logoutListener';
import createNewForm from '../../templates/Form/form';
import createProfileForm from '../../templates/Form/EditProfileForm/editProfileForm';
import createUpdateProfileListener from '../../utils/Listeners/Profile/updateListener';
import createUserNavbar from '../../templates/Navbar/userNavbar';
import dropdownMenuToggle from '../../utils/Toggle/dropdownMenuToggle';
import errorHandler from '../../utils/Error/errorHandler';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';

const printProfileForm = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;

    try {
        const header = querySelectorChecker(`.${headerClassName}`, 'printProfileForm');

        const headerNavbar = createUserNavbar(`${headerClassName}-nav`, currentPage, 'random_user');
        header.appendChild(headerNavbar);

        dropdownMenuToggle(`${headerClassName}-nav`, HTMLElementsWithListeners);
        createLogoutListener(appConfig, currentPage, HTMLElementsWithListeners);

        const main = querySelectorChecker(`.${mainClassName}`, 'printProfileForm');

        const editProfileForm = createNewForm(`${mainClassName}-${currentPage}_form`, createProfileForm(`${mainClassName}-${currentPage}_form-fields`, currentPage));
        main.appendChild(editProfileForm);

        createUpdateProfileListener(appConfig, currentPage, HTMLElementsWithListeners);

        return main;
    } catch (error) {
        return errorHandler(error, 'printProfileForm');
    }
};

export default printProfileForm;