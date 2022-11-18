import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onCanceled}/>;
};

const ModalOverlay = props => {
    return (<Card className={classes.modal}>

        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onCanceled}>Got it</Button>
        </footer>

    </Card>);
};


const ErrorModal = props => {

    return (
        <>
            {ReactDOM.createPortal(<Backdrop onCanceled={props.onCanceled}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay
                    title={props.title}
                    message={props.message}
                    onCanceled={props.onCanceled}
                />,
                document.getElementById('overlay-root'))}
        </>
    )
};

export default ErrorModal;
