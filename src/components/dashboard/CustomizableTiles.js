import Card from '@material-tailwind/react/Card';
import CardRow from '@material-tailwind/react/CardRow';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardStatus from '@material-tailwind/react/CardStatus';
import CardStatusFooter from '@material-tailwind/react/CardStatusFooter';
import Icon from '@material-tailwind/react/Icon';
import DashboardStatusCard from './DashboardStatusCard';
import Invoices from 'components/dashboard/Invoices';
import ChartBar from 'components/ChartBar';
// import PageVisitsCard from 'components/PageVisitsCard';
// import TrafficCard from 'components/TrafficCard';
// import Orders from 'components/dashboard/Orders';
import { ToolBox } from "./ToolBox";
import { useState } from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";
import { useAppContext } from 'services/app.context';
import React, { lazy, Suspense } from 'react';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const layouts = {
  lg: [
    {w: 4, h: 11, x: 0, y: 0, minH:11, maxH:11, minW:3 , i: '1'},
    {w: 4, h: 11, x: 4, y: 0, minH:11, maxH:11, minW:3 ,i: '2'},
    {w: 4, h: 11, x: 8, y: 0, minH:11, maxH:11, minW:3 ,i: '3'}
  ],
  md: [
    {w: 4, h: 11, x: 0, y: 0,  i: '1'},
    {w: 3, h: 11, x: 4, y: 0, i: '2'},
    {w: 3, h: 11, x: 8, y: 0,i: '3'}
  ],
  sm: [
    {w: 12, h: 11, x: 0, y: 0, minH:11, minW:4 , i: '1'},
    {w: 12, h: 11, x: 4, y: 0, minH:11, minW:4 ,i: '2'},
    {w: 12, h: 11, x: 8, y: 0, minH:11, minW:4 ,i: '3'}
  ],
  xs: [
    {w: 12, h: 11, x: 0, y: 0, minH:11, i: '1'},
    {w: 12, h: 11, x: 11, y: 0, minH:11, i: '2'},
    {w: 12, h: 11, x: 22, y: 0, minH:11, i: '3'}
  ],
  xxs: [
    {w: 12, h: 11, x: 0, y: 0, minH:11, i: '1'},
    {w: 12, h: 11, x: 4, y: 0, minH:11, i: '2'},
    {w: 12, h: 11, x: 8, y: 0, minH:11, i: '3'}
  ]
};

const tileItems = [
  {
    id: "1",
    title: "Orders",
    component: "Orders"
  },  
  {
    id: "2",
    title: "Invoices",
    component: "Invoices"
  },
  {
    id: "3",
    title: "PageVisitsCard",
    component: "PageVisitsCard"
  }
];

const generateLayout = () => {
  let savedLayout = JSON.parse(localStorage.getItem("dashboardTiles.layout"));

  //console.log(layout);
  if(savedLayout) return savedLayout;

  return layouts
}

const getSelectedItems = (toolbox) => {
  const toolboxIds = toolbox.map(item => item.id)
  return tileItems.filter(item => !toolboxIds.includes(item.id))
}

export default function CustomizableTiles({props}) {
  const initialRemovedItems = JSON.parse(localStorage.getItem("dashboardTiles.removedToolbox"))
  const [toolbox, setToolbox] = useState(initialRemovedItems || []);
  const { appState } = useAppContext();
  const [layout, setLayout] = useState({});

  const onPutItem = (item) => {
    let removedItems = [...toolbox, item];
    setToolbox(removedItems);
    localStorage.setItem("dashboardTiles.removedToolbox", JSON.stringify(removedItems));
  }

  const onGetItem = (selecteItem, props) => {
    let removedItems = [...toolbox.filter(item => item.id !== selecteItem.id)]
    setToolbox(removedItems)
    localStorage.setItem("dashboardTiles.removedToolbox", JSON.stringify(removedItems));
  }

  const getDynamicComponent = (componentName, props) => {
    const DynamicComponent = lazy(() => import(`./${componentName}`));
    return <DynamicComponent {...props} />
  }

  const onLayoutChange = (layout, layouts) => {
    layout.map(item => {
      if(item.w === 1) {
        item.w = 4; 
        item.h = 11;
      }
    })
    localStorage.setItem("dashboardTiles.layout", JSON.stringify(layouts));
    setLayout({});
  }
    return (
      <>
      {appState.customizeDashboard && <ToolBox
        items={toolbox || []}
        onTakeItem={onGetItem}
      />}
      <ResponsiveReactGridLayout
          className="layout"
          layouts={generateLayout()}
         // onBreakpointChange={this.handleBreakPointChange}
          onLayoutChange={onLayoutChange}
          isDraggable={appState.customizeDashboard}
          isRearrangeable
          isResizable={appState.customizeDashboard}
          rowHeight={30}
         // draggableHandle=".grid-item__title"
          breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          
      >
           { getSelectedItems(toolbox).map((item, key) => {
              return  <div key={item.id}>
                {appState.customizeDashboard && <div className="cursor-pointer mr-4 absolute right-0" onClick={()=>{onPutItem(item)}}>
                  &times;
                </div>}
                <Suspense fallback={<div>Loading...</div>}>
                    {getDynamicComponent(item.component, props)}
                </Suspense>
              </div>
            })
          }
        {/* <div key="1" > <Orders /></div>
        <div key="2" > <Invoices /></div>
        <div key="3" ><PageVisitsCard /></div> */}
        {/* <div key="c"><TrafficCard /></div> */}
      </ResponsiveReactGridLayout>
      </>
      )
}
