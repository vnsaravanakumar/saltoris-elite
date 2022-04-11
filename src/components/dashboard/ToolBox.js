 

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
export const ToolBox = ({items, onTakeItem}) => {
    return (
      items.length > 0 && <div className="toolbox p-2 bg-gray-200 rounded-2xl ml-2">
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

