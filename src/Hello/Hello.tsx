import * as React from "react";
import './hello.scss';
import Hi from './hi.svg';

export default class Hello extends React.Component {
    render() {
        return <h1 className={'hello'}>Hello, world! <Hi className={'hi'} width="100px" height="100px"/></h1>;
    }
}