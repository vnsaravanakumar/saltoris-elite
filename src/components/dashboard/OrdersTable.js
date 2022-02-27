import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';

export default function ServiceRequestsTable() {
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
                    <table className="items-center w-full bg-transparent border-collapse mt-2 text-xs ">
                        <thead>
                            <tr>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap font-light text-left">
                                    Request ID
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3  whitespace-nowrap font-light text-left">
                                    Company
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3  whitespace-nowrap font-light text-left">
                                    Type of Request
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3  whitespace-nowrap font-light text-left">
                                    Expiring On
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3  whitespace-nowrap font-light text-left">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map(rowData => 
                            <tr className='leading-3'>
                                <th className="border-b border-gray-200 align-middle font-light  whitespace-nowrap px-1 py-2 text-left">
                                    {rowData.requestId}
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light whitespace-nowrap px-1 py-2 text-left">
                                    {rowData.company}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light whitespace-nowrap px-1 py-2 text-left">
                                    {rowData.type}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light whitespace-nowrap px-1 py-2 text-left">
                                    {rowData.expiringOn}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light whitespace-nowrap px-1 py-2 text-left">
                                    {rowData.status}
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            {/* </CardBody>
        </Card> */}
        </>
    );
}
