import { useEffect } from 'react';
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import InvoicesTable from './InvoicesTable';
import FitlerIcon from 'assets/img/filter-icon.svg';

const feedDetails = [
    {
        profileImage: "https://tailwindcss.com/_next/static/media/ryan-florence.34fb7796afb30db4ae598b06a00cbee3.jpg", 
        name: "Artem Sazonov", 
        title:"Codedellaroute Project", 
        message:"Hey Cak, Could you free now? Can you look and read the brief first…",
        dateTime: "10:53 PM"
    },
    {
        profileImage: "https://tailwindcss.com/_next/static/media/guillermo-rauch.f9555769f9ff1d42057c689278bc0876.jpg", 
        name: "Jaroslav Brabec", 
        title:"Website Redesign", 
        message:"Hey Cak, Could you free now? Can you look and read the brief first…",
        dateTime: "03:49 PM"
    },
    {
        profileImage: "https://tailwindcss.com/_next/static/media/kentcdodds.f2473a4e9577b345f55d0467a0a37ef5.jpg", 
        name: "Ren Xue", 
        title:"Fone Dynamics Website", 
        message:"Hey Cak, Could you free now? Can you look and read the brief first…",
        dateTime: "10:53 PM"
    }
];

function FeedCard({feed}){
    const {profileImage, name, title, message, dateTime} = feed;
    return (
        <figure class="relative flex flex-col-reverse bg-mild rounded-lg p-2 dark:bg-slate-800 dark:highlight-white/5">
            <figcaption class="flex items-start space-x-4">
                <img src={profileImage} alt="" class="flex-none w-14 h-14 rounded-full object-cover" loading="lazy" />
                <div class="flex-auto text-sm">
                    <div class="text-slate-900 font-semibold dark:text-slate-300 text-primary-blue">
                        {name}<span className="text-primary-manatee font-normal text-xs float-right">{dateTime}</span>
                    </div>
                    <div class="mt-0.5 text-primary-ketic font-bold">{title}</div>
                    <blockquote class="mt-4 text-xs text-primary-manatee  dark:text-slate-300"><p>{message}</p></blockquote>
                </div>
            </figcaption>
        </figure>
    )
}

export default function ActivityFeed() {
    useEffect(() => {

    }, []);

    return (
        <Card className="!rounded-3xl h-full overflow-auto">
            {/* <CardHeader color="orange" contentPosition="left"> */}
            <div className='flex'>
                <h2 className="font-semibold  flex-1 text-table-heading py-3">Activity Feed</h2>
                <div >...</div>
            </div>
           {/*} </CardHeader> */}
            <CardBody className="p-0 relative">
                <ul class="space-y-8">
                    {
                        feedDetails.map(feed => {
                            return <FeedCard feed={feed} />
                        })
                    }
                </ul>
            </CardBody>
            <div className='text-xs flex justify-center pt-4'>Last Updated: <i>Thursday, March 10, 2022, 02:48:23 IST</i></div>
        </Card>
    );
}
