import React from 'react'
import hello from './hello.module.css'

class Hello extends React.Component {
    render() {
        return (
            <h2 className={hello.hello}>Hello, React!</h2>
        )
    }
}           

export default Hello