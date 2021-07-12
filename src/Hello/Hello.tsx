import * as React from "react";
import './hello.scss';

export default class Hello extends React.Component {
    render() {
        return <h1 className={'hello'}>Hello, world!</h1>;
    }
}