import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Parent, Child} from './Context'
import * as serviceWorker from './serviceWorker';

const MountPoint : React.FC = () => (
    <React.Fragment>
        <App />
        <section className="App">
            <h1>React Context</h1>
            <Parent><Child/></Parent>
        </section>
    </React.Fragment>
)

ReactDOM.render(<MountPoint />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
