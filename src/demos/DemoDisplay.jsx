/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import './DemoDisplay.scss';

const importView = (DemoComponentName) =>
  React.lazy(() =>
    import(`./${DemoComponentName}`).catch((e) =>
      console.error('demo component not exported', e)
    )
  );

const DemoDisplay = ({ demo }) => {
  const [views, setViews] = React.useState();

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const comp = demo || urlParams.get('c');
    console.log(`${comp}Demo`);
    async function loadViews() {
      const View = await importView(`${comp}Demo`);
      setViews(<View />);
    }
    loadViews();
  }, [demo]);

  return (
    <React.Suspense
      fallback={
        <div className="loadWrapper">
          <div className="loader" />
        </div>
      }
    >
      <div className="docs-content markdown-body">{views}</div>
    </React.Suspense>
  );
};

DemoDisplay.propTypes = {
  demo: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
    .isRequired,
};

export default DemoDisplay;
