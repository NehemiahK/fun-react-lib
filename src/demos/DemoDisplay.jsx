import React from 'react';
import './demodisplay.css';
/*add your demo in the import statement below */

const importView = (DemoComponentName) =>
  React.lazy(() =>
    import(`./${DemoComponentName}`).catch((e) =>
      console.log('demo component not exported')
    )
  );

const DemoDisplay = (props) => {
  const [views, setViews] = React.useState();

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const comp = props.demo ? props.demo : urlParams.get('c');
    console.log(`${comp}Demo`);
    async function loadViews() {
      const View = await importView(`${comp}Demo`);
      setViews(<View />);
    }
    loadViews();
  }, [props.demo]);

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

export default DemoDisplay;
