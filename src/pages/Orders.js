import StatusCard from 'components/StatusCard';
import ActiveTradeRelationsTable from 'components/ActiveTradeRelationsTable';
import ChartBar from 'components/ChartBar';
//import PageVisitsCard from 'components/PageVisitsCard';
import TrafficCard from 'components/TrafficCard';
import PendingTradeRequestsTable from 'components/PendingTradeRequestsTable';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import FitlerIcon from 'assets/img/filter-icon.svg';
import Icon from '@material-tailwind/react/Icon';
import {useState} from 'react';

export default function Orders() {
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

    const [expandedRows, setExpandedRows] = useState([]);
    const handleShowHideDetails = (requestId) => {
        let elmIndex = expandedRows.findIndex(id => id === requestId);
        if(elmIndex !== -1){
            expandedRows.splice(elmIndex, 1);
        }else{
            expandedRows.push(requestId);
        }

        setExpandedRows([...expandedRows]);
        
    }
    return (
        <>
            <Card className="!rounded-3xl h-full w-auto m-8">
            <div className='flex'>
                <h2 className="font-semibold  flex-1 text-table-heading py-3">Order Details</h2>
                <div><img src={FitlerIcon} className='bg-mild rounded-full p-3 h-auto' /></div>
            </div>
            <CardBody className="p-0">
                <div className="overflow-auto">
                    <table className="items-center w-full bg-transparent border-collapse mt-2 text-sm">
                        <thead className=' text-table-heading font-light uppercase'>
                            <tr>
                                <th className="px-2 bg-mild rounded-l-xl align-middle py-3 whitespace-nowrap text-left">
                                </th>
                                <th className="px-2 bg-mild align-middle py-3 whitespace-nowrap text-left">
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
                            <>
                            <tr className='leading-3 text-primary-ketic' id={rowData.requestId} >
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-4 text-left">
                                    <div className='flex justify-center' onClick={() => handleShowHideDetails(rowData.requestId)}>
                                        <div className='p-3 w-fit cursor-pointer bg-mild rounded-full'>
                                            {expandedRows.findIndex(id => id === rowData.requestId) > -1 ? "-" :"+"}
                                        </div>
                                    </div>
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-4 text-left">
                                    {rowData.requestId}
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-4 text-center">
                                    {rowData.company}
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-4 text-center">
                                    {rowData.type}
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-4 text-center">
                                    {rowData.expiringOn}
                                </td>
                                <td className=" align-middle font-light whitespace-nowrap px-1 py-4 text-center">
                                    {rowData.status}
                                </td>
                            </tr>
                            {expandedRows.findIndex(id => id === rowData.requestId) > -1 && 
                                <tr id={rowData.requestId + "-details"}>
                                    <td colspan="6">
                                        <div className='flex justify-end m-5'>
                                            <div>
                                                <div className='m-5'>Sub Total:</div>
                                                <div className='m-5'>Tax:</div>
                                                <div className='m-5'>Total:</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            }
                            </>
                        )}
                        </tbody>
                    </table>
                </div>
                </CardBody>
            </Card>
            {/* <div className="bg-light-blue-500 px-3 md:px-8 h-40" /> */}

            {/* <div className="px-3 md:px-8">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-6">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            <PendingTradeRequestsTable />
                        </div>
                        <div className="xl:col-start-4 xl:col-end-7 px-4 mb-14">
                            <ActiveTradeRelationsTable />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            {/* <PageVisitsCard /> */}
                        {/* </div>
                        <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                            <TrafficCard />
                        </div>
                    </div>
                </div> */}
           {/* </div> */}
        </>
    );
}
