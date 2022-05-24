import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import FitlerIcon from 'assets/img/filter-icon.svg';

export default function OrdersTable() {
    const data = [
        {
            poNumber: 10180540,
            poDate: "01-02-2022",
            shipTo: "Mumbai",
            material: "material 1",
            quantity: 600,
            amount: 5000,
            status: "Received"
        },
        {
            poNumber: 13243240,
            poDate: "02-21-2022",
            shipTo: "Japan",
            material: "material 2",
            quantity: 700,
            amount: 20000,
            status: "Dispatched"
        },
        {
            poNumber: 231432453,
            poDate: "02-02-2022",
            shipTo: "New York",
            material: "material 3",
            quantity: 1700,
            amount: 26000,
            status: "Invoiced"
        },        
        {
            poNumber: 243324234,
            poDate: "01-02-2022",
            shipTo: "Berlin",
            material: "material 4",
            quantity: 500,
            amount: 8000,
            status: "Received"
        }
    ]

    return (
        <>
                    <Card className="!rounded-3xl h-full overflow-auto">
            {/* <CardHeader color="orange" contentPosition="left"> */}
            {/* <div className="mb-5">
                <h2 className="text-gray-700 text-xl mb-3">Invoices</h2>
                <h6 className="text-gray-700 text-xs font-medium mb-5">
                    Current data as of yesterday at 3:18pm
                </h6>
            </div> */}
            <div className='flex'>
                <h2 className="font-semibold  flex-1 text-table-heading py-3">Purchase Orders</h2>
                <div ><img src={FitlerIcon} className='bg-mild rounded-full p-3 h-auto' /></div>
            </div>
        {/*} </CardHeader> */}
            <CardBody className="p-0">
         {/* <Card className="rounded-md"> */}
            {/* <CardHeader color="blue" contentPosition="none"> */}
                {/* <div className="w-full flex items-center justify-between">
                    <h2 className=" text-2xl">Page Visits</h2>
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ padding: 0 }}
                    >
                        See More
                    </Button>
                </div> */}
            {/* </CardHeader> */}
            {/* <CardBody> */}
                <div className="overflow-auto">
                    <table className="items-center w-full bg-transparent border-collapse mt-2">
                        <thead className=' text-table-heading font-light uppercase text-xs'>
                            <tr>
                                <th className="px-2 bg-mild rounded-l-xl align-middle py-3 whitespace-nowrap text-left">
                                    PO Number
                                </th>
                                <th className="px-2 bg-mild align-middle py-3 whitespace-nowrap text-center">
                                    PO Date
                                </th>
                                <th className="px-2 bg-mild align-middle py-3 whitespace-nowrap text-center">
                                    Ship To
                                </th>                                
                                <th className="px-2 bg-mild align-middle py-3 whitespace-nowrap text-center">
                                    Material
                                </th>
                                <th className="px-2 bg-mild align-middle py-3 whitespace-nowrap text-center">
                                    Quantity
                                </th>
                                <th className="px-2 bg-mild align-middle py-3 whitespace-nowrap text-center">
                                    Amount
                                </th>
                                <th className="px-2 bg-mild rounded-r-xl  align-middle  py-3 whitespace-nowrap  text-center">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map(rowData => 
                            <tr className='leading-3 text-primary-ketic'>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-6 text-left">
                                    {rowData.poNumber}
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-6 text-center">
                                    {rowData.poDate}
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-6 text-center">
                                    {rowData.shipTo}
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-6 text-center">
                                    {rowData.material}
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-6 text-center">
                                    {rowData.quantity}
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-6 text-center">
                                    {rowData.amount}
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-6 text-center">
                                    {rowData.status}
                                </td>                                                                
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            {/* </CardBody>
        </Card> */}
                            </CardBody>
        </Card>
        </>
    );
}
