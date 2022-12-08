import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '83fe187206b146a8b99f310d368aae3d'
        });
    }
}

export default AppLoader;
