import React from 'react'

const importView = DemoComponentName =>
  React.lazy(() =>
    import(`./${DemoComponentName || "SimpleButton"}Demo`).catch((e) => console.log("demo component not exported"))
  );

const DemoDisplay = (props) => {
  const [views, setViews] = React.useState();

  React.useEffect(() => {
    async function loadViews() {
      const View = await importView(props.demo);
      setViews(<View />)
    }
    loadViews();

  }, [props.demo]);

  return (
    <React.Suspense fallback='Loading views...'>
      <div className='docs-content markdown-body'>{views}</div>
    </React.Suspense>
  )
}

export default DemoDisplay;
