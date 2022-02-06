import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';

export default function ActiveTradeRelationsTable() {
    const data = [
        {
            company: "Tesla",
            lastTransaction: "9,000",
            managedBy: "Telsa",
            action: "Accept"
        },
        {
            company: "Apple",
            lastTransaction: "5,000",
            managedBy: "Amazon",
            action: "Accept"
        },
        {
            company: "Intel",
            lastTransaction: "4,000",
            managedBy: "Walmart",
            action: "Reject"
        },        
        {
            company: "Honda",
            lastTransaction: "10,000",
            managedBy: "Nissan",
            action: "Reject"
        }
    ]

    return (
        <>
         <Card className="rounded-md">
            <h2 className="text-gray-700 text-xl mb-3">Active Trade Relations</h2>
            <h6 className="text-gray-700 text-xs font-medium">
                    Current data as of yesterday at 3:18pm
                </h6>
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
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse mt-6">
                        <thead>
                            <tr>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Company
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Last Transaction
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Managed By
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Edit/Manage
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map(rowData => 
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {rowData.company}
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {rowData.lastTransaction}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {rowData.managedBy}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {rowData.action}
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
             </CardBody>
        </Card>
        </>
    );
}
