import createConfirmAttendanceListeners from '../../utils/Listeners/Event/Confirm-Attendance/confirmAttendanceListeners';
import createEditProfileListener from '../../utils/Listeners/Menu/editProfileListener';
import createEventsFilter from '../../utils/Listeners/Filter/eventsFilter';
import createEventsList from '../../templates/Event/List/eventsList';
import createEventListener from '../../utils/Listeners/Event/eventListener';
import createLogoutListener from '../../utils/Listeners/Menu/logoutListener';
import createNewButton from '../../templates/Button/button';
import createNewInput from '../../templates/Input/input';
import createProfileListener from '../../utils/Listeners/Menu/profileListener';
import createUserNavbar from '../../templates/Navbar/userNavbar';
import dropdownMenuToggle from '../../utils/Toggle/dropdownMenuToggle';
import errorHandler from '../../utils/Error/errorHandler';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';
import testCards from '../../../testCards';
import toggleClass from '../../utils/Toggle/toggleClass';

const printEventsList = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;

    try {
        const header = querySelectorChecker(`.${headerClassName}`, 'printEventsList');
        toggleClass(header, `${headerClassName}-events`, currentPage);

        const headerNavbar = createUserNavbar(`${headerClassName}-nav`, currentPage, 'random_user');
        header.appendChild(headerNavbar);

        const headerInput = createNewInput(`${header.className}-search_input`, 'Buscar eventos...');
        header.appendChild(headerInput);

        const headerEventCreatorButton = createNewButton(`${headerClassName}-events-create_btn`, 'Crear Nuevo Evento');
        header.appendChild(headerEventCreatorButton);

        dropdownMenuToggle(`${headerClassName}-nav`, HTMLElementsWithListeners);
        createLogoutListener(appConfig, currentPage, HTMLElementsWithListeners);
        createEditProfileListener(appConfig, currentPage, HTMLElementsWithListeners);
        createProfileListener(appConfig, currentPage, HTMLElementsWithListeners);

        const main = querySelectorChecker(`.${mainClassName}`, 'printEventsList');
        toggleClass(main, `${mainClassName}-events`, currentPage);

        const eventsList = createEventsList(main.className, testCards);
        main.appendChild(eventsList);

        createEventListener(appConfig, currentPage, HTMLElementsWithListeners);
        createEventsFilter(header.className, appConfig, HTMLElementsWithListeners);

        const eventItems = Array.from(document.querySelectorAll(`.${main.className}-card`));
        createConfirmAttendanceListeners(eventItems, HTMLElementsWithListeners);

        return main;
    } catch (error) {
        return errorHandler(error, 'printEventsList');
    }
};

export default printEventsList;