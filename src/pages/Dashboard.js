import DashboardStatusCard from 'components/DashboardStatusCard';
import Invoices from 'components/dashboard/Invoices';
import ChartBar from 'components/ChartBar';
import PageVisitsCard from 'components/PageVisitsCard';
import TrafficCard from 'components/TrafficCard';
import Orders from 'components/dashboard/Orders';

export default function Dashboard() {
    return (
        <>
            {/* <div className="bg-light-blue-500 px-3 md:px-8 h-40" /> */}

            <div className="px-3 md:px-8">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 auto-cols-min lg:grid-cols-2 xl:grid-cols-5 mb-4">
                        <DashboardStatusCard
                            color="pink"
                            icon="trending_up"
                            title="Pending Notifications"
                            amount="25"
                            percentage="3.48"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                        <DashboardStatusCard
                            color="pink"
                            icon="trending_up"
                            title="Pending Trade Requests"
                            amount="25"
                            percentage="3.48"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                        <DashboardStatusCard
                            color="orange"
                            icon="groups"
                            title="Open Orders"
                            amount="56"
                            percentage="3.48"
                            percentageIcon="arrow_downward"
                            percentageColor="red"
                            date="Since last week"
                        />
                        <DashboardStatusCard
                            color="purple"
                            icon="paid"
                            title="Outstanding Invoices"
                            amount="9000"
                            percentage="1.10"
                            percentageIcon="arrow_upward"
                            percentageColor="orange"
                            date="Since yesterday"
                        />
                        <DashboardStatusCard
                            color="blue"
                            icon="poll"
                            title="Active Bids"
                            amount="9"
                            percentage="12"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-6">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            <Orders />
                        </div>
                        <div className="xl:col-start-4 xl:col-end-7 px-4 mb-14">
                            <Invoices />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            <PageVisitsCard />
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
