import { useEffect, useState } from 'react';
import DashboardStatusCard from './DashboardStatusCard';
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactCardLayout = WidthProvider(Responsive);


const setColumnPartition = (cols, setCols, totalItems) => {
  let noCols = cols["lg"];

  if(Math.ceil(noCols/totalItems) !== noCols/totalItems){
    Object.keys(cols).map(itemKey => {
      cols[itemKey] = Math.ceil(noCols/totalItems) * totalItems
    })
    setCols({...cols});
  }
}

const generateLayout = (cols, setCols, toolbox) => {
  const selectedItems = getSelectedItems(toolbox);
  const totalItems = selectedItems.length;
  const result = {};

  //setColumnPartition(cols, setCols, totalItems);

  Object.keys(cols).map((colKey, key) => {
    key++;
    const col = cols[colKey];
    const direction = (colKey === "xs" || colKey === "xxs") ? "row" : "col";
    const width = direction === "col" ? (col / totalItems) : col;

    result[colKey] = selectedItems.map((item, itemKey) => {
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

  console.log(cols);
  console.log(result);
  return result;
}

const fourLayout = {
  lg: [
    {w: 3, h: 4, x: 0, y: 0, i: '1'},
    {w: 3, h: 4, x: 3, y: 0, i: '2'},
    {w: 3, h: 4, x: 6, y: 0, i: '3'},
    {w: 3, h: 4, x: 9, y: 0, i: '4'}
  ],
  md: [
    {w: 3, h: 4, x: 0, y: 0, i: '1'},
    {w: 3, h: 4, x: 3, y: 0, i: '2'},
    {w: 3, h: 4, x: 6, y: 0, i: '3'},
    {w: 3, h: 4, x: 9, y: 0, i: '4'}
  ],
  sm: [
    {w: 3, h: 4, x: 0, y: 0, i: '1'},
    {w: 3, h: 4, x: 3, y: 0, i: '2'},
    {w: 3, h: 4, x: 6, y: 0, i: '3'},
    {w: 3, h: 4, x: 9, y: 0, i: '4'}
  ],
  xs: [
    {w: 3, h: 4, x: 0, y: 0, i: '1'},
    {w: 3, h: 4, x: 3, y: 0, i: '2'},
    {w: 3, h: 4, x: 6, y: 0, i: '3'},
    {w: 3, h: 4, x: 9, y: 0, i: '4'}
  ],
  xxs: [
    {w: 3, h: 4, x: 0, y: 0, i: '1'},
    {w: 3, h: 4, x: 3, y: 0, i: '2'},
    {w: 3, h: 4, x: 6, y: 0, i: '3'},
    {w: 3, h: 4, x: 9, y: 0, i: '4'}
  ]
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

const statusCardItems = [
  {
    id: "1",
    color: "pink",
    icon: "ad_units",
    title: "Orders",
    amount: "25",
    percentage: "3.48",
    percentageIcon: "arrow_upward",
    percentageColor: "green",
    date: "Since last month",
  },
  {
    id: "2",
    color:"pink",
    icon: "trending_up",
    title: "Opportunities",
    amount: "25",
    percentage: "3.48",
    percentageIcon: "arrow_upward",
    percentageColor: "green",
    date: "Since last month"
  },
  {
    id: "3",
    color: "orange",
    icon: "groups",
    title: "Pending Notifications",
    amount: "56",
    percentage: "3.48",
    percentageIcon: "arrow_downward",
    percentageColor: "red",
    date: "Since last week"
  },
  {
    id: "4",
    color: "purple",
    icon: "paid",
    title: "Outstanding Invoices",
    amount: "9000",
    percentage: "1.10",
    percentageIcon: "arrow_upward",
    percentageColor: "orange",
    date: "Since yesterday"
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
    date: "Since last month"
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
    const [toolbox, setToolbox] = useState([]);
    const currentBreakpoint = "lg";
    const [isEdit, setIsEdit] = useState(true);
    const [cols, setCols] = useState({ lg: 10, md: 10, sm: 10, xs: 10, xxs: 10 });
    const [layout, setLayout] = useState();

    const onPutItem = (item) => {
      setToolbox([...toolbox, item])
    }

    const onGetItem = (selecteItem) => {
      setToolbox([...toolbox.filter(item => item.id !== selecteItem.id)])
    }

    // useEffect(()=>{
    //   setLayout({...generateLayout(cols, setCols, toolbox)})
    // }, [])

    // useEffect(()=>{
    //   setLayout({...generateLayout(cols, setCols, toolbox)})
    // }, [toolbox])

    return (
      <>
        <ToolBox
          items={toolbox || []}
          onTakeItem={onGetItem}
        />
        <ResponsiveReactCardLayout
          className="layout"
          layouts={generateLayout(cols, setCols, toolbox)}
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
            getSelectedItems(toolbox).map((item, key) => {
              return  <div key={key+1}>
                {isEdit && <div className="cursor-pointer mr-4 absolute right-0" onClick={()=>{onPutItem(item)}}>
                  &times;
                </div>}
                <DashboardStatusCard
                    {...item}
                    edit={isEdit}
                />
              </div>
            })
          }
        </ResponsiveReactCardLayout>
        </>
      )
}

const ToolBoxItem = ({item, onTakeItem}) => {
    return (
      <div
        className="bg-white w-fit p-2 relative cursor-pointer rounded-md"
        onClick={onTakeItem.bind(undefined, item)}
      >
        <span className='absolute right-0 top-0 p-1'>+</span>
        <span className='pt-5 pr-3'>{item.title}</span>
      </div>
    );
}
const ToolBox = ({items, onTakeItem}) => {
    return (
      <div className="toolbox pl-3 pt-2 bg-gray-200">
        {/* <span className="toolbox__title">Toolbox</span> */}
        <div className="flex gap-2">
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