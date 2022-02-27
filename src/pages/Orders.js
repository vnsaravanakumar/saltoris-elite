import StatusCard from 'components/StatusCard';
import ActiveTradeRelationsTable from 'components/ActiveTradeRelationsTable';
import ChartBar from 'components/ChartBar';
//import PageVisitsCard from 'components/PageVisitsCard';
import TrafficCard from 'components/TrafficCard';
import PendingTradeRequestsTable from 'components/PendingTradeRequestsTable';

export default function Orders() {
    return (
        <>
            {/* <div className="bg-light-blue-500 px-3 md:px-8 h-40" /> */}

            <div className="px-3 md:px-8">
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
                        </div>
                        <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                            <TrafficCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
