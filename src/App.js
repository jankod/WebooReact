import './App.css';
import {createElement} from "react";
import { Route, Switch } from "react-router-dom"


class Weboo {



}
const weboo = new Weboo();
weboo.addPage()

const components = {
    MyButton: MyButton
}

const page1 = {}

function MyButton() {
    return (
        <button>Ovo je button</button>
    );
}

const renderComponent = config => {
    if (typeof componentNames[config.component] !== 'undefined') {
        return createElement(componentNames[config.component], config, config.children && (typeof config.children === 'string' ? config.children : config.children.map(c => renderComponent(c))),)
    }
}


function Page1() {

    return createElement(MyButton, {id: 'nbeki223'}, 'Ovo je pocetak')
}


export default Page1;
