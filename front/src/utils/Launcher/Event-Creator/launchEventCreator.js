import activateListenersCleaner from '../../Cleaner/listenersCleaner';
import printLoader from '../../Loader/printLoader';
import { renderApp } from '../../../../main';

const launchEventCreatorPage = (appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    printLoader(appId, footerClassName, loaderClassName, webContentClassName);

    HTMLElements.length >= 1 ? activateListenersCleaner(HTMLElements) : console.log('No hay elementos de HTML por eliminar');

    currentPage = 'create-event';
    renderApp(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
};

export default launchEventCreatorPage;