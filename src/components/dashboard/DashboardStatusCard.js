
import Card from '@material-tailwind/react/Card';
import CardRow from '@material-tailwind/react/CardRow';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardStatus from '@material-tailwind/react/CardStatus';
import CardStatusFooter from '@material-tailwind/react/CardStatusFooter';
import Icon from '@material-tailwind/react/Icon';

export default function DashboardStatusCard({
    color,
    icon,
    title,
    amount,
    percentage,
    percentageColor,
    percentageIcon,
    date,
    edit
}) {
    return (
        <div className={"flex h-full "} >
            <Card className="rounded-md">
                {/* <CardRow className="h-full"> */}
                    {/* <CardHeader color={color} iconOnly className="mb-0"> */}
                    <div class={"flex-grow flex flex-1 mb-2 text-right text-sm " + (edit ? " pt-3 ":"")}>
                        <div className=""><Icon name={icon} size="3xl" color={percentageColor} /></div>
                        <div class="flex-grow text-3xl text-gray-900">{amount}</div>
                    </div>
                    {/* </CardHeader> */}

                    {/* <CardStatus title={title} className="text-xl" amount={amount} /> */}
                    
                    <h5 class="bottom-0 absolute pb-2 text-gray-500 font-light tracking-wide mb-1">{title}</h5>
                {/* </CardRow> */}

                {/* <CardStatusFooter
                    amount={percentage}
                    color={percentageColor}
                    date={date}
                >
                    <Icon color={percentageColor} name={percentageIcon} />
                </CardStatusFooter> */}
            </Card>
        </div>
    );
}