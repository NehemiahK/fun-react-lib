import React from "react";
import "./tabs.css";

export function Tabs(props) {

    const [bindIndex, setBindIndex] = React.useState(props.defaultIndex);

    const changeTab = newIndex => {
        if (typeof props.onTabClick === 'function') props.onTabClick(newIndex);
        setBindIndex(newIndex);
    };

    const items = props.children.filter(item => item.type.name === 'TabItem');

    return (
        <section className="tbs">
            <div className="tbsMenu">
                <span class="line" />
                {items.map(({ props: { name } }, index) => (
                    <React.Fragment key={index}>
                        <button onClick={() => changeTab(index)} className={bindIndex === index ? 'focus' : ''}>{name}</button>
                    </React.Fragment>
                ))}
            </div>

            <div className="tbsView">
                <div {...items[bindIndex].props} className="tbsContent" />
            </div>

        </section>
    )
}

function TabItem(props) {
    return <div {...props} />;
}

Tabs.Tab = TabItem;

export default Tabs;