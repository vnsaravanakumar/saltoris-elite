import CustomizableStatusCard from 'components/dashboard/CustomizableStatusCard';
import CustomizableTiles from 'components/dashboard/CustomizableTiles';

export default function Dashboard(props) {
    return (
      <>
      <CustomizableStatusCard />
      <CustomizableTiles />
      </>
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
