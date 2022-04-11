export default function Container({ children, className }) {
    return (
        <div className={"absolute w-auto m-auto left-0 right-0 translate-y-52 " + className}>
            <div >{children}</div>
        </div>
    );
}
