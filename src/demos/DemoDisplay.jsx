
import React from 'react'
import './demodisplay.css'
/*add your demo in the import statement below */
import { SimpleButtonDemo, HeadingDemo, ProgressBarDemo } from '../exports/exports'

const switchTo = (componentName) => {
    switch (componentName) {
        case 'Simple Button':
            return <SimpleButtonDemo />
        case 'Heading':
            return <HeadingDemo />
        case 'Progress Bar':
            return <ProgressBarDemo/>
        default:
            return ''
    }
}

const importView = (DemoComponentName) =>
  React.lazy(() =>
    import(`./${DemoComponentName || 'SimpleButton'}Demo`).catch((e) =>
      console.log('demo component not exported')
    )
  );

const DemoDisplay = (props) => {
  const [views, setViews] = React.useState();

  React.useEffect(() => {
    async function loadViews() {
      const View = await importView(props.demo);
      setViews(<View />);
    }
    loadViews();
  }, [props.demo]);

  return (
    <React.Suspense fallback="Loading views...">
      <div className="docs-content markdown-body">{views}</div>
    </React.Suspense>
  );
};

export default DemoDisplay;
