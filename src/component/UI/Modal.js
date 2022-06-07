import { Fragment } from 'react'
import reactDom from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = props => {
    return (
        <div onClick={props.onClick} className={classes.backdrop}></div>
    )
}

const Overlays = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

const Modal = props => {
    return (
        <Fragment>
            {reactDom.createPortal(<Backdrop onClick={props.onClick}/>,portalElement)}
            {reactDom.createPortal(<Overlays>{props.children}</Overlays>,portalElement)}
        </Fragment>
    )
}

export default Modal;