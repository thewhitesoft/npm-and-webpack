import * as React from "react";
import styles from './hello.module.css';

export default class Hello extends React.Component {
    render() {
        return <h1 className={styles.hello}>Hello, world!</h1>;
    }
}