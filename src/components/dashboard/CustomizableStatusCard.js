import { useState } from 'react';
import DashboardStatusCard from './DashboardStatusCard';
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactCardLayout = WidthProvider(Responsive);


const setColumnPartition = (cols, setCols, totalItems) => {
  let noCols = cols["lg"];
  debugger;
  if(Math.ceil(noCols/totalItems) !== noCols/totalItems){
    Object.keys(cols).map(itemKey => {
      cols[itemKey] = Math.ceil(noCols/totalItems) * totalItems
    })
    setCols(cols);
  }
}

const generateLayout = (cols, setCols) => {
  const totalItems = Object.keys(statusCardItems).length;
  const result = {};

  setColumnPartition(cols, setCols, totalItems);

  Object.keys(cols).map((colKey, key) => {
    key++;
    const col = cols[colKey];
    const direction = (colKey === "xs" || colKey === "xxs") ? "row" : "col";
    const width = direction === "col" ? (col / totalItems) : col;

    result[colKey] = Object.keys(statusCardItems).map((item, itemKey) => {
      itemKey++;
      return {
        w: width,
        h: 4,
        x: direction === "col" ? (itemKey - 1) * width : 0,
        y: direction === "col" ? 0 : (itemKey - 1) * 4,
        i: itemKey+""
      }
    })
  })

  return result;
}

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

const statusCardItems = {
  "1": {
    color: "pink",
    icon: "trending_up",
    title: "Pending Trade Requests",
    amount: "25",
    percentage: "3.48",
    percentageIcon: "arrow_upward",
    percentageColor: "green",
    date: "Since last month",
  },
  "2": {
    color:"pink",
    icon: "trending_up",
    title: "Pending Trade Requests",
    amount: "25",
    percentage: "3.48",
    percentageIcon: "arrow_upward",
    percentageColor: "green",
    date: "Since last month"
  },
  "3": {
    color: "orange",
    icon: "groups",
    title: "Open Orders",
    amount: "56",
    percentage: "3.48",
    percentageIcon: "arrow_downward",
    percentageColor: "red",
    date: "Since last week"
  },
  "4": {
    color: "purple",
    icon: "paid",
    title: "Outstanding Invoices",
    amount: "9000",
    percentage: "1.10",
    percentageIcon: "arrow_upward",
    percentageColor: "orange",
    date: "Since yesterday"
  },
  "5": {
    color: "blue",
    icon: "poll",
    title: "Active Bids",
    amount: "9",
    percentage: "12",
    percentageIcon: "arrow_upward",
    percentageColor: "green",
    date: "Since last month"
  }
}
export default function CustomizableStatusCard() {
    const [toolbox, setToolbox] = useState({ lg: [] });
    const currentBreakpoint = "lg";
    const [isEdit, setIsEdit] = useState(true);
    const [cols, setCols] = useState({ lg: 10, md: 10, sm: 10, xs: 10, xxs: 10 });

    return (
      <>
        <ToolBox
          items={toolbox[currentBreakpoint] || []}
          onTakeItem={onTakeItem}
        />
        <ResponsiveReactCardLayout
          className="layout"
          layouts={generateLayout(cols, setCols)}
         // onBreakpointChange={this.handleBreakPointChange}
          isDraggable
          isRearrangeable
          isResizable={false}
          rowHeight={23}
         // draggableHandle=".grid-item__title"
          breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
          cols={cols}
        >
          {
            Object.keys(statusCardItems).map(key => {
              return  <div key={key}>
                {isEdit && <div className="cursor-pointer mr-4 absolute right-0" onClick={()=>{onPutItem(key)}}>
                  &times;
                </div>}
                <DashboardStatusCard
                    {...statusCardItems[key]}
                    edit={isEdit}
                />
              </div>
            })
          }
        </ResponsiveReactCardLayout>
        </>
      )
}

const onPutItem = () => {
  console.log(generateLayout());
}
const onTakeItem = () => {

}
const ToolBoxItem = ({item}) => {
    return (
      <div
        className="toolbox__items__item"
        onClick={onTakeItem.bind(undefined, item)}
      >
        {item.i}
      </div>
    );
}
const ToolBox = ({items}) => {
    return (
      <div className="toolbox">
        <span className="toolbox__title">Toolbox</span>
        <div className="toolbox__items">
          {items.map(item => (
            <ToolBoxItem
              key={item.i}
              item={item}
              onTakeItem={onTakeItem}
            />
          ))}
        </div>
      </div>
    );
}