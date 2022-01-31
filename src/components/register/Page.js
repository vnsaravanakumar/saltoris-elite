export default function Page({ children }) {
    return (
        <div className="bg-register-background bg-cover bg-center relative flex flex-col justify-between">
            {children}
        </div>
    );
}
