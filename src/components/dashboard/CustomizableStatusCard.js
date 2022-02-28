import { useEffect, useState } from 'react';
import DashboardStatusCard from './DashboardStatusCard';
import { Responsive, WidthProvider } from "react-grid-layout";
import { useAppContext } from 'services/app.context';
import { ToolBox} from "./ToolBox";

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
    {w: 2, h: 4, x: 0, y: 0 , i: '1'},
    {w: 2, h: 4, x: 2, y: 0 , i: '2'},
    {w: 2, h: 4, x: 4, y: 0 , i: '3'},
    {w: 2, h: 4, x: 6, y: 0 , i: '4'},
    {w: 2, h: 4, x: 8, y: 0 , i: '5'}
  ],
  xs: [
    {w: 10, h: 4, x: 0, y: 0 , i: '1'},
    {w: 10, h: 4, x: 0, y: 4 , i: '2'},
    {w: 10, h: 4, x: 0, y: 8 , i: '3'},
    {w: 10, h: 4, x: 0, y: 12, i: '4'},
    {w: 10, h: 4, x: 0, y: 16, i: '5'}
  ],
  xxs: [
    {w: 10, h: 4, x: 0, y: 0 , i: '1'},
    {w: 10, h: 4, x: 0, y: 4 , i: '2'},
    {w: 10, h: 4, x: 0, y: 8 , i: '3'},
    {w: 10, h: 4, x: 0, y: 12, i: '4'},
    {w: 10, h: 4, x: 0, y: 16, i: '5'}
  ]
};

const setColumnPartition = (cols, setCols, totalItems) => {
  let noCols = cols["lg"];

  if(Math.ceil(noCols/totalItems) !== noCols/totalItems){
    Object.keys(cols).map(itemKey => {
      cols[itemKey] = Math.ceil(noCols/totalItems) * totalItems
    })
    setCols({...cols});
  }
}

const generateLayout = (cols, setCols, toolbox, isEdit) => {
  let layout = JSON.parse(localStorage.getItem("statusCard.layout"));

  //console.log(layout);
  if(layout) return layout;

  //return statusCardLayouts;
  const selectedItems = getSelectedItems(toolbox);
  const totalItems = selectedItems.length;
  const result = {};

  setColumnPartition(cols, setCols, totalItems);

  Object.keys(cols).map((colKey, key) => {
    key++;
    const col = cols[colKey];
    const direction = (colKey === "xs" || colKey === "xxs") ? "row" : "col";
    let  width = direction === "col" ? (col / totalItems) : col;

    if(isEdit && (colKey !== "xs" && colKey !== "xxs")){
      width = 3
    }

    let xValue = 0;
    let yValue = 0;
    result[colKey] = selectedItems.map((item, itemKey) => {
      if((itemKey + 1) % 6 === 0){ 
        xValue = 0;
        yValue = yValue + 4; 
      }

      itemKey++;
      return {
        w: width,
        h: 4,
        x: direction === "col" ? (isEdit ? (++xValue - 1) : (itemKey - 1)) * width : 0,
        y: direction === "col" ? 0 : (itemKey - 1) * 4,
        i: item.id+""
      }
    })
  })

  //console.log(cols);
  //console.log(result);
  return result;
}


const statusCardItems = [
  {
    id: "1",
    color: "pink",
    icon: "ad_units",
    title: "Orders",
    amount: "5",
    percentage: "3.48",
    percentageIcon: "arrow_upward",
    percentageColor: "green",
    date: "last 30 days",
  },
  {
    id: "2",
    color:"pink",
    icon: "trending_up",
    title: "Opportunities",
    amount: "2",
    percentage: "3.48",
    percentageIcon: "arrow_upward",
    percentageColor: "green",
    date: "last 30 days"
  },
  {
    id: "3",
    color: "orange",
    icon: "groups",
    title: "Pending Notifications",
    amount: "6",
    percentage: "3.48",
    percentageIcon: "arrow_downward",
    percentageColor: "red",
    date: "new notifications"
  },
  {
    id: "4",
    color: "purple",
    icon: "paid",
    title: "Outstanding Invoices",
    amount: "2",
    percentage: "1.10",
    percentageIcon: "arrow_upward",
    percentageColor: "orange",
    date: "last 30 days"
  },
  {
    id: "5",
    color: "blue",
    icon: "poll",
    title: "Active Bids",
    amount: "9",
    percentage: "12",
    percentageIcon: "arrow_upward",
    percentageColor: "green",
    date: "last 30 days"
  }
]
/*
,
  {
    id: "5",
    color: "blue",
    icon: "poll",
    title: "Active Bids",
    amount: "9",
    percentage: "12",
    percentageIcon: "arrow_upward",
    percentageColor: "green",
    date: "Since last month"
  }
*/
const getSelectedItems = (toolbox) => {
  const toolboxIds = toolbox.map(item => item.id)
  return statusCardItems.filter(item => !toolboxIds.includes(item.id))
}

export default function CustomizableStatusCard() {
    const initialRemovedItems = JSON.parse(localStorage.getItem("statusCard.removedToolbox"))
    const [toolbox, setToolbox] = useState(initialRemovedItems || []);
    const currentBreakpoint = "lg";
    const { appState } = useAppContext();
    const [cols, setCols] = useState({ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 });
    const [layout, setLayout] = useState({});

    const onPutItem = (item) => {
      let removedItems = [...toolbox, item];
      setToolbox(removedItems);
      localStorage.setItem("statusCard.removedToolbox", JSON.stringify(removedItems));
    }
  
  const onGetItem = (selecteItem) => {
      let removedItems = [...toolbox.filter(item => item.id !== selecteItem.id)]
      setToolbox(removedItems)
      localStorage.setItem("statusCard.removedToolbox", JSON.stringify(removedItems));
  }

  const onLayoutChange = (layout, layouts) => {
      if(!appState.customizeDashboard) return;

      layout.map(item => {
        if(item.w === 1) {
          item.w = 2; 
          item.h = 4;
        }
      })
      localStorage.setItem("statusCard.layout", JSON.stringify(layouts));
      setLayout({});
    }
    const onDrop = (layout, layoutItem, _event) => {
      alert(`Dropped element props:\n${JSON.stringify(layoutItem, ['x', 'y', 'w', 'h'], 2)}`);
    };

    return (
      <>
        {appState.customizeDashboard && <ToolBox
          items={toolbox || []}
          onTakeItem={onGetItem}
        />}
        <ResponsiveReactCardLayout
          className="layout"
          layouts={generateLayout(cols, setCols, toolbox, appState.customizeDashboard)}
         // onBreakpointChange={this.handleBreakPointChange}
          onLayoutChange={onLayoutChange}
          isDraggable={appState.customizeDashboard}
          isRearrangeable
          isResizable={appState.customizeDashboard}
          rowHeight={23}
          onDrop={onDrop}
         // draggableHandle=".grid-item__title"
          breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
          cols={cols}
        >
          {
            getSelectedItems(toolbox).map((item, key) => {
              return  <div key={item.id}>
                {appState.customizeDashboard && <div className="cursor-pointer mr-4 absolute right-0" onClick={()=>{onPutItem(item)}}>
                  &times;
                </div>}
                <DashboardStatusCard
                    {...item}
                    edit={appState.customizeDashboard}
                />
              </div>
            })
          }
        </ResponsiveReactCardLayout>
        </>
      )
}

