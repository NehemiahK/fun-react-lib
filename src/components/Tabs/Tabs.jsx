import React from 'react';

import PropTypes from 'prop-types';

import './Tabs.scss';

export function Tabs({ defaultIndex, onTabClick, children }) {
  const [bindIndex, setBindIndex] = React.useState(defaultIndex);

  const changeTab = (newIndex) => {
    if (typeof onTabClick === 'function') onTabClick(newIndex);
    setBindIndex(newIndex);
  };

  const items = children.filter((item) => item.type.name === 'TabItem');

  return (
    <section className="tbs">
      <div className="tbsMenu">
        <span className="line" />
        {items.map(({ props: { name } }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={`${index}_${name}`}>
            <button
              onClick={() => changeTab(index)}
              className={bindIndex === index ? 'focus' : ''}
              type="button"
            >
              {name}
            </button>
          </React.Fragment>
        ))}
      </div>

      <div className="tbsView">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <div {...items[bindIndex].props} className="tbsContent" />
      </div>
    </section>
  );
}

function TabItem({ name }) {
  return <div name={name} />;
}

Tabs.Tab = TabItem;

Tabs.propTypes = {
  defaultIndex: PropTypes.number,
  onTabClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Tabs.defaultProps = {
  defaultIndex: 0,
};

TabItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Tabs;
