import React from 'react'

const Link = ({href, className, children}) => {
    const onClick = (e) => {
        //fix ctrl+click
        if (e.metaKey || e.ctrlKey) {
            return;
        }

        e.preventDefault()
        //update URL
        window.history.pushState({}, '', href)

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)

    }
    return <a
        className={className}
        href={href}
        onClick={onClick}
    >
        {children}
    </a>
}

export default Link