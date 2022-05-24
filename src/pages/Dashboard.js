import CustomizableStatusCard from 'components/dashboard/CustomizableStatusCard';
import CustomizableTiles from 'components/dashboard/CustomizableTiles';

export default function Dashboard(props) {
    return (
      <div className='p-3'>
      <div className='flex text-primary-manatee py-8 pl-2'>
        <h1 className='text-xl text-primary-ketic font-semibold'>Overview</h1>
        <div className='text-primary-manatee pl-5 flex text-sm items-end'>Show:
          <select className='text-primary-ketic bg-mild'><option>90</option><option>60</option></select>
          <span className='text-primary-ketic'>Days</span>
        </div>
      </div>
      <CustomizableStatusCard />
      <CustomizableTiles />
      </div>
    );
}
