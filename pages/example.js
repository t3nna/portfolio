import Link from 'next/link'
import React from "react";

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
// eslint-disable-next-line react/display-name
const MyButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref} >
            Click Me
        </a>
    )
})

function Example() {
    return (
        <div style={{paddingTop: '5rem'}}>
            <Link href="/" passHref >
                <MyButton onClick={console.log('clicked')}/>
            </Link>
        </div>

    )
}

export default Example