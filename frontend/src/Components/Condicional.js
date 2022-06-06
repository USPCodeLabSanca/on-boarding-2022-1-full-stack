import React from "react"

const Condicional = props => {
    if (props.if) {
        return props.children;
    }
}
export default Condicional;