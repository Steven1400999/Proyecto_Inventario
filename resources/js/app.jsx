import './bootstrap';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//import './components/ListCards';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
import Main from './components/main';
import Login from './components/Login';

ReactDOM.createRoot(document.getElementById('app')).render(
    <BrowserRouter>

<Login/>





    </BrowserRouter>
)