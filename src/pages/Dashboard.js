import DashboardStatusCard from 'components/DashboardStatusCard';
import Invoices from 'components/dashboard/Invoices';
import ChartBar from 'components/ChartBar';
import PageVisitsCard from 'components/PageVisitsCard';
import TrafficCard from 'components/TrafficCard';
import Orders from 'components/dashboard/Orders';
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const ResponsiveReactCardLayout = WidthProvider(Responsive);

const statusCardLayouts = {
  lg: [
    {w: 2, h: 4, x: 0, y: 0 , i: '1'},
    {w: 2, h: 4, x: 2, y: 0 , i: '2'},
    {w: 2, h: 4, x: 4, y: 0 , i: '3'},
    {w: 2, h: 4, x: 6, y: 0 , i: '4'},
    {w: 2, h: 4, x: 8, y: 0 , i: '5'}
  ],
  md: [
    {w: 2, h: 4, x: 0, y: 0 , i: '1'},
    {w: 2, h: 4, x: 2, y: 0 , i: '2'},
    {w: 2, h: 4, x: 4, y: 0 , i: '3'},
    {w: 2, h: 4, x: 6, y: 0 , i: '4'},
    {w: 2, h: 4, x: 8, y: 0 , i: '5'}
  ],
  sm: [
    {w: 2, h: 5, x: 0, y: 0 , i: '1'},
    {w: 2, h: 5, x: 2, y: 0 , i: '2'},
    {w: 2, h: 5, x: 4, y: 0 , i: '3'},
    {w: 2, h: 5, x: 6, y: 0 , i: '4'},
    {w: 2, h: 5, x: 8, y: 0 , i: '5'}
  ],
  xs: [
    {w: 12, h: 4, x: 0, y: 0 , i: '1'},
    {w: 12, h: 4, x: 0, y: 4 , i: '2'},
    {w: 12, h: 4, x: 0, y: 8 , i: '3'},
    {w: 12, h: 4, x: 0, y: 12 , i: '4'},
    {w: 12, h: 4, x: 0, y: 16, i: '5'}
  ],
  xxs: [
    {w: 12, h: 4, x: 0, y: 0 , i: '1'},
    {w: 12, h: 4, x: 0, y: 4 , i: '2'},
    {w: 12, h: 4, x: 0, y: 8 , i: '3'},
    {w: 12, h: 4, x: 0, y: 12 , i: '4'},
    {w: 12, h: 4, x: 0, y: 16, i: '5'}
  ]
};

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

export default function Dashboard(props) {
    // layout is an array of objects, see the demo for more complete usage

    // const handleBreakPointChange = breakpoint => {
    //     props.setBreakPoint(breakpoint);
    //   };
     
    return (
        // <div>Dashboard</div>
        <>
        <ResponsiveReactCardLayout
          className="layout"
          layouts={statusCardLayouts}
         // onBreakpointChange={this.handleBreakPointChange}
          isDraggable
          isRearrangeable
          isResizable={false}
          rowHeight={23}
         // draggableHandle=".grid-item__title"
          breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
          cols={{ lg: 10, md: 10, sm: 10, xs: 10, xxs: 10 }}
          
        >
          <div key="1">  
            <DashboardStatusCard
                color="pink"
                icon="trending_up"
                title="Pending Notifications"
                amount="25"
                percentage="3.48"
                percentageIcon="arrow_upward"
                percentageColor="green"
                date="Since last month"
            />
          </div>
          <div key="2"> 
            <DashboardStatusCard
                color="pink"
                icon="trending_up"
                title="Pending Trade Requests"
                amount="25"
                percentage="3.48"
                percentageIcon="arrow_upward"
                percentageColor="green"
                date="Since last month"
            />
          </div>
          <div key="3">    
            <DashboardStatusCard
                color="orange"
                icon="groups"
                title="Open Orders"
                amount="56"
                percentage="3.48"
                percentageIcon="arrow_downward"
                percentageColor="red"
                date="Since last week"
            />
          </div>
          <div key="4"> 
            <DashboardStatusCard
                color="purple"
                icon="paid"
                title="Outstanding Invoices"
                amount="9000"
                percentage="1.10"
                percentageIcon="arrow_upward"
                percentageColor="orange"
                date="Since yesterday"
            />
          </div>
          <div key="5">
            <DashboardStatusCard
                color="blue"
                icon="poll"
                title="Active Bids"
                amount="9"
                percentage="12"
                percentageIcon="arrow_upward"
                percentageColor="green"
                date="Since last month"
            />
          </div>


        {/* <div key="c"><TrafficCard /></div> */}
      </ResponsiveReactCardLayout>
     
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
     
      </>
        // <>
        //     {/* <div className="bg-light-blue-500 px-3 md:px-8 h-40" /> */}

        //     <div className="px-3 md:px-8">
        //         <div className="container mx-auto max-w-full">
        //             <div className="grid grid-cols-1 auto-cols-min lg:grid-cols-2 xl:grid-cols-5 mb-4">
        //                 <DashboardStatusCard
        //                     color="pink"
        //                     icon="trending_up"
        //                     title="Pending Notifications"
        //                     amount="25"
        //                     percentage="3.48"
        //                     percentageIcon="arrow_upward"
        //                     percentageColor="green"
        //                     date="Since last month"
        //                 />
        //                 <DashboardStatusCard
        //                     color="pink"
        //                     icon="trending_up"
        //                     title="Pending Trade Requests"
        //                     amount="25"
        //                     percentage="3.48"
        //                     percentageIcon="arrow_upward"
        //                     percentageColor="green"
        //                     date="Since last month"
        //                 />
        //                 <DashboardStatusCard
        //                     color="orange"
        //                     icon="groups"
        //                     title="Open Orders"
        //                     amount="56"
        //                     percentage="3.48"
        //                     percentageIcon="arrow_downward"
        //                     percentageColor="red"
        //                     date="Since last week"
        //                 />
        //                 <DashboardStatusCard
        //                     color="purple"
        //                     icon="paid"
        //                     title="Outstanding Invoices"
        //                     amount="9000"
        //                     percentage="1.10"
        //                     percentageIcon="arrow_upward"
        //                     percentageColor="orange"
        //                     date="Since yesterday"
        //                 />
        //                 <DashboardStatusCard
        //                     color="blue"
        //                     icon="poll"
        //                     title="Active Bids"
        //                     amount="9"
        //                     percentage="12"
        //                     percentageIcon="arrow_upward"
        //                     percentageColor="green"
        //                     date="Since last month"
        //                 />
        //             </div>
        //         </div>
        //     </div>

        //     <div className="px-3 md:px-8">
        //         <div className="container mx-auto max-w-full">
        //             <div className="grid grid-cols-1 xl:grid-cols-6">
        //                 <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
        //                     <Orders />
        //                 </div>
        //                 <div className="xl:col-start-4 xl:col-end-7 px-4 mb-14">
        //                     <Invoices />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="px-3 md:px-8 h-auto">
        //         <div className="container mx-auto max-w-full">
        //             <div className="grid grid-cols-1 xl:grid-cols-5">
        //                 <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
        //                     <PageVisitsCard />
        //                 </div>
        //                 <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
        //                     <TrafficCard />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    );
}

// Dashboard.defaultProps = {
//     className: "layout",
//    // initialLayout: generateLayout(),
//     isDraggable: true,
//     isRearrangeable: true,
//     isResizable: true,
//     items: 3,
//     cols: 6,
//     onLayoutChange: function() {},
//     rowHeight: 600,
//     autoSize: true,
//     droppingItem: {

//     }
//   };

// function generateLayout() {
//     return [
//         { x: 0, y: 6, w:3, h:10, minW: 3,minH: 12, maxH: 12, i: '0'},
//         { x: 0, y: 8, w:1, minW: 3,minH: 6 , i: '1'},
//         { x: 0, y: 6, w:1, minW: 4,minH: 7, i: '2'}
//     ]
//   }
