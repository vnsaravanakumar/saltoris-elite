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
}) {
    return (
        <div className="flex px-4 mb-10">
            <Card className="rounded-md">
                <CardRow>
                    {/* <CardHeader color={color} iconOnly className="mb-0"> */}
                    <div class="w-full  flex-grow flex flex-1 mb-2 text-right text-sm">
                        <div className=""><Icon name={icon} size="3xl" color={percentageColor} /></div>
                        <div class="flex-grow text-3xl text-gray-900">{amount}</div>
                    </div>
                    {/* </CardHeader> */}

                    {/* <CardStatus title={title} className="text-xl" amount={amount} /> */}
                    
                    <h5 class="w-full pt-5 text-gray-500 font-light tracking-wide mb-1">{title}</h5>
                </CardRow>

                <CardStatusFooter
                    amount={percentage}
                    color={percentageColor}
                    date={date}
                >
                    <Icon color={percentageColor} name={percentageIcon} />
                </CardStatusFooter>
            </Card>
        </div>
    );
}
