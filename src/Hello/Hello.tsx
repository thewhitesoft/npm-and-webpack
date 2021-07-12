import * as React from "react";
import './hello.scss';
import Hi from './hi.svg';

export default class Hello extends React.Component {
    click() {
        import('../lazy-loading').then(lazy => {
            lazy.default();
        });
    }

    render() {
        return <h1 className={'hello'}>Hello, world! <Hi className={'hi'} width="100px" height="100px" onClick={this.click}/></h1>;
    }
}