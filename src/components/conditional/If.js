/* <if test={exp}>
    <span>...</span>
    <span>...</span>
    <span>...</span>
</if> */

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChild = props.children.filter(child => {
        return child !== elseChild
    })[0]

    if(props.test) {
        return ifChild
    } else if (elseChild) {
        return elseChild
    } else {
        return false
    }
}

export const Else = props => props.children