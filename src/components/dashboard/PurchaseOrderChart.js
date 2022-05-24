import { useEffect } from 'react';
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import InvoicesTable from './InvoicesTable';
import FitlerIcon from 'assets/img/filter-icon.svg';

export default function PurchaseOrderChart() {
    useEffect(() => {
        var config = {
            type: 'line',
            data: {
                labels: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                ],
                datasets: [
                    {
                        label: "Purchase Orders",
                        backgroundColor: '#3DD598',
                        borderColor: '#3DD598',
                        data: [65, 78, 66, 44, 56, 67, 75],
                        fill: false,
                    },
                    {
                        label: "Dispatch",
                        fill: false,
                        backgroundColor: '#0062FF',
                        borderColor: '#0062FF',
                        data: [40, 68, 86, 74, 56, 60, 87],
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: 'Sales Charts',
                    fontColor: 'white',
                },
                legend: {
                    labels: {
                        fontColor: 'black',
                        pointStyle: 'circle',
                        usePointStyle: true,
                        boxWidth: 5
                    },
                    align: 'center',
                    position: 'bottom'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: 'rgba(17,17,17,.7)',
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Month',
                                fontColor: 'white',
                            },
                            gridLines: {
                                display: false,
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.3)',
                                zeroLineColor: 'rgba(0, 0, 0, 0)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: 'rgba(17,17,17,.7)',
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value',
                                fontColor: 'white',
                            },
                            gridLines: {
                                borderDash: [3],
                                borderDashOffset: [3],
                                drawBorder: false,
                                color: 'rgba(17, 17, 17, 0.15)',
                                zeroLineColor: 'rgba(33, 37, 41, 0)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        var ctx = document.getElementById('purchase-order-chart').getContext('2d');
        window.myLine = new Chart(ctx, config);
    }, []);

    return (
        <Card className="!rounded-3xl h-full overflow-auto">
            {/* <CardHeader color="orange" contentPosition="left"> */}
            <div className='flex'>
                <h2 className="font-semibold  flex-1 text-table-heading py-3">Purchase Order Chart</h2>
                <div ><img src={FitlerIcon} className='bg-mild rounded-full p-3 h-auto' /></div>
            </div>
           {/*} </CardHeader> */}
            <CardBody className="p-0">
                <div className="relative h-80">
                    <canvas id="purchase-order-chart" className=''></canvas>
                </div>
            </CardBody>
            <div className='text-xs flex justify-center pt-4'>Last Updated: <i>Thursday, March 10, 2022, 02:48:23 IST</i></div>
        </Card>
    );
}
