
import Card from 'components/card/Card';
import CardRow from '@material-tailwind/react/CardRow';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardStatus from '@material-tailwind/react/CardStatus';
//import CardStatusFooter from '@material-tailwind/react/CardStatusFooter';
import Icon from '@material-tailwind/react/Icon';
import StatusCardFooter from './StatusCardFooter';

export default function StatusCard({
    title,
    amount,
    percentage,
    lastYearAmount
}) {
    return (
        <div className={"flex h-full w-full pr-4"} >
            <Card className="rounded-full">
                {/* <CardRow className="h-full"> */}
                    {/* <CardHeader color={color} iconOnly className="mb-0"> */}
                    <div class="text-sm font-bold">{title}</div>
                    <h2 className="font-bold text-2xl inline-block mr-2 mt-4 mb-2">${amount}</h2><span class="text-sm font-bold text-secondary-green">{percentage}%</span>
                    {/* </CardHeader> */}

                    {/* <CardStatus title={title} className="text-xl" amount={amount} /> */}
                    
                    
                {/* </CardRow> */}
                {/* <div
                    className={`text-sm text-gray-700 pt-4 flex items-center ${className}`}
                >
                    <span className={`${Colors[percentageColor]} ml-1 mr-2`}>{amount}</span>
                    <span className="font-light whitespace-nowrap">{date}</span>
                </div> */}
                <StatusCardFooter
                    className="w-full font-semibold "
                >
                    <div class="text-xs text-primary-manatee">Compared to (${lastYearAmount} last year)</div>
                </StatusCardFooter>
            </Card>
        </div>
    );
}