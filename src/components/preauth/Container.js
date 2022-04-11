export default function Container({ children, className }) {
    return (
        <div className={"absolute  m-auto left-0 right-0 -translate-y-1/2 " + className}>
            <div >{children}</div>
        </div>
    );
}
