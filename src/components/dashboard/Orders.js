import { useEffect } from 'react';
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import OrdersTable from './OrdersTable';

export default function ServiceRequests() {
    useEffect(() => {
        let config = {
            type: 'bar',
            data: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: '#03a9f4',
                        borderColor: '#03a9f4',
                        data: [30, 78, 56, 34, 100, 45, 13],
                        fill: false,
                        barThickness: 8,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: '#f44336',
                        borderColor: '#f44336',
                        data: [27, 68, 86, 74, 10, 4, 87],
                        barThickness: 8,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: 'Orders Chart',
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,
                },
                legend: {
                    labels: {
                        fontColor: 'rgba(17,17,17,.7)',
                    },
                    align: 'end',
                    position: 'bottom',
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month',
                            },
                            gridLines: {
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.3)',
                                zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value',
                            },
                            gridLines: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.2)',
                                zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        let ctx = document.getElementById('bar-chart').getContext('2d');
        window.myBar = new Chart(ctx, config);
    }, []);
    return (
        <Card className="rounded-md h-full overflow-auto">
            {/* <CardHeader color="pink" contentPosition="left"> */}
            <div className="mb-5">
                <h2 className="text-gray-700 text-xl mb-3">Orders</h2>
                <h6 className="text-gray-700 text-xs font-medium mb-5">
                    Current data as of yesterday at 3:18pm
                </h6>
            </div>
            {/* </CardHeader> */}
            <CardBody className="p-0">
                <div className="relative h-auto">
                    <canvas id="bar-chart"></canvas>
                </div>
                <OrdersTable />
            </CardBody>
        </Card>
    );
}
