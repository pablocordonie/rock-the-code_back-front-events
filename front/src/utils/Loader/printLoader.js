import createNewLoader from '../../templates/Loader/loader';
import disableLoader from '../Loader/disableLoader';

const printLoader = () => {
    const body = document.querySelector('#app');
    const content = document.querySelector('.sc');
    const footer = document.querySelector('footer');

    body.style.margin = '0';
    content.style.display = 'none';
    footer.style.display = 'none';

    body.innerHTML += createNewLoader();

    setTimeout(function () {
        disableLoader();
    }, 2000);
};

export default printLoader;