import Card from '@material-tailwind/react/Card';
import CardRow from '@material-tailwind/react/CardRow';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardStatus from '@material-tailwind/react/CardStatus';
import CardStatusFooter from '@material-tailwind/react/CardStatusFooter';
import Icon from '@material-tailwind/react/Icon';
import DashboardStatusCard from './DashboardStatusCard';
import Invoices from 'components/dashboard/Invoices';
import ChartBar from 'components/ChartBar';
import PageVisitsCard from 'components/PageVisitsCard';
import TrafficCard from 'components/TrafficCard';
import Orders from 'components/dashboard/Orders';

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const layouts = {
  lg: [
    {w: 4, h: 11, x: 0, y: 0, minH:11, maxH:11, minW:3 , i: '1'},
    {w: 4, h: 11, x: 4, y: 0, minH:11, maxH:11, minW:3 ,i: '2'},
    {w: 4, h: 11, x: 8, y: 0, minH:11, maxH:11, minW:3 ,i: '3'}
  ],
  md: [
    {w: 4, h: 11, x: 0, y: 0, minH:11, minW:4 , i: '1'},
    {w: 3, h: 11, x: 4, y: 0, minH:11, minW:3 ,i: '2'},
    {w: 3, h: 11, x: 8, y: 0, minH:11, minW:3 ,i: '3'}
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

export default function CustomizableTiles({props}) {
    return (
      <ResponsiveReactGridLayout
          className="layout"
          layouts={layouts}
         // onBreakpointChange={this.handleBreakPointChange}
          isDraggable
          isRearrangeable
          isResizable
          rowHeight={30}
         // draggableHandle=".grid-item__title"
          breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          
        >
        <div key="1" > <Orders /></div>
        <div key="2" > <Invoices /></div>
        <div key="3" ><PageVisitsCard /></div>
        {/* <div key="c"><TrafficCard /></div> */}
      </ResponsiveReactGridLayout>
      )
}
