export default function Container({ children, className }) {
    return (
        <div className={"absolute w-2/4 mt-[48px] top-2/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 " + className}>
            <div >{children}</div>
        </div>
    );
}
