import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import FitlerIcon from 'assets/img/filter-icon.svg';

export default function OrdersTable() {
    const data = [
        {
            requestId: 10180540,
            company: "Tesla",
            type: "Type of Request",
            expiringOn: "01-02-2022",
            status: "Accept"
        },
        {
            requestId: 10180541,
            company: "Apple",
            type: "Type of Request",
            expiringOn: "06-12-2022",
            status: "Accept"
        },
        {
            requestId: 10180542,
            company: "Intel",
            type: "Type of Request",
            expiringOn: "03-04-2022",
            status: "Reject"
        },        
        {
            requestId: 10180544,
            company: "Honda",
            type: "Type of Request",
            expiringOn: "10-20-2022",
            status: "Reject"
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
                <h2 className="font-semibold  flex-1 text-table-heading py-3">Order Details</h2>
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
                        <thead className=' text-table-heading font-light uppercase'>
                            <tr>
                                <th className="px-2 bg-mild rounded-l-xl align-middle py-3 whitespace-nowrap text-left">
                                    Request ID
                                </th>
                                <th className="px-2 bg-mild align-middle py-3 whitespace-nowrap text-center">
                                    Company
                                </th>
                                <th className="px-2 bg-mild align-middle py-3 whitespace-nowrap text-center">
                                    Type of Request
                                </th>
                                <th className="px-2 bg-mild align-middle py-3 whitespace-nowrap text-center">
                                    Expiring On
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
                                    {rowData.requestId}
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-6 text-center">
                                    {rowData.company}
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-6 text-center">
                                    {rowData.type}
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-6 text-center">
                                    {rowData.expiringOn}
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
