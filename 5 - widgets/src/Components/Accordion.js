import React, {useState} from "react";

const Accordion = ({items}) => {
    //first argument is state
    //second arg is function to update state
    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : ''


        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => {
                        onTitleClick(index)
                    }}
                >
                    <i className="dropdown icon" />
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}

export default Accordion