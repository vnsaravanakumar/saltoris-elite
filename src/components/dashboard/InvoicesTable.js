import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';

export default function InvoicesTable() {
    const data = [
        {
            month: "Oct",
            noClients: "200,000",
            change: "+5,000"
        },
        {
            month: "Sept",
            noClients: "195,000",
            change: "+13,000"
        },
        {
            month: "Aug",
            noClients: "182,000",
            change: "+4,000"
        },        
        {
            month: "July",
            noClients: "172,000",
            change: "+6,000"
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
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse mt-2 text-xs">
                        <thead>
                            <tr>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap font-light text-left">
                                    Month
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap font-light text-left">
                                    # Clients
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap font-light text-left">
                                    Previous period
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map(rowData => 
                            <tr className='leading-3'>
                                <th className="border-b border-gray-200 align-middle font-light whitespace-nowrap px-1 py-2 text-left">
                                    {rowData.month}
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light whitespace-nowrap px-1 py-2 text-left">
                                    {rowData.noClients}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light whitespace-nowrap px-1 py-2 text-left">
                                    {rowData.change}
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
