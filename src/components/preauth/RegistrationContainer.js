export default function Container({ children, className }) {
    return (
        <div className={"absolute  m-auto left-0 right-0  " + className}>
            <div >{children}</div>
        </div>
    );
}
