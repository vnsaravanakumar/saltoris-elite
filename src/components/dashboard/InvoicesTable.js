import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import FitlerIcon from 'assets/img/filter-icon.svg';

export default function InvoicesTable() {
    const data = [
        {
            buyer: "John Doe",
            invoice: "#01208",
            date: "Mar 21, 2022, 3:30pm",
            amount: "5000",
            status: "Sent"
        },
        {
            buyer: "Jake ammuneal",
            invoice: "#01209",
            date: "Mar 21, 2022, 3:30pm",
            amount: "13000",
            status: "Sent"
        },
        {
            buyer: "Kay Siger",
            invoice: "#01210",
            date: "Mar 21, 2022, 3:30pm",
            amount: "4000",
            status: "Payment"
        },        
        {
            buyer: "Kevin Patt",
            invoice: "#01211",
            date: "Mar 21, 2022, 3:30pm",
            amount: "6000",
            status: "Approved"
        }
    ]

    const statusColor = {
        sent: "#3DD598",
        payments: "#50B5FF",
        approved: "#0062FF",
        rejected: "#FC5A5A"
    }
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
                <h2 className="font-semibold  flex-1 text-table-heading py-3">Invoice Details</h2>
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
                <div className="overflow-auto rounded-lg">
                    <table className="items-center w-full bg-transparent border-collapse mt-2 text-sm">
                        <thead className=' text-table-heading font-light uppercase'>
                            <tr>
                                <th className="px-2 bg-mild rounded-l-xl align-middle py-3 whitespace-nowrap text-left">
                                    buyer
                                </th>
                                <th className="px-2 bg-mild align-middle py-3 whitespace-nowrap text-center">
                                    invoice no
                                </th>
                                <th className="px-2 bg-mild align-middle py-3 whitespace-nowrap text-center">
                                    due date
                                </th>
                                <th className="px-2 bg-mild align-middle  py-3 whitespace-nowrap text-center">
                                    order amount
                                </th>
                                <th className="px-2 bg-mild rounded-r-xl  align-middle  py-3 whitespace-nowrap  text-center">
                                    status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map(rowData => 
                            <tr className='leading-3 text-primary-ketic'>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-6 text-left">
                                    {rowData.buyer}
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-6 text-center">
                                    {rowData.invoice}
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-6 text-center">
                                    {rowData.date}
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-6 text-center">
                                    {"+ $"+rowData.amount}
                                </td>
                                <td className={"align-middle font-light whitespace-nowrap px-1 py-3  text-center " + "text-status-"+rowData.status.toLowerCase()}>
                                    <div className='bg-mild py-2 px-1 rounded-lg '>{rowData.status}</div>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    <span className='text-status-payment'></span>
                    <span className=' text-status-sent'></span>
                    <span className='  text-status-approved '></span>
                    <span className=' text-status-rejected'></span>
                </div>
            {/* </CardBody>
        </Card> */}
                    </CardBody>
        </Card>
        </>
    );
}
