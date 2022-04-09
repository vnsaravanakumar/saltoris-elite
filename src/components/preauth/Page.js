export default function Page({ children }) {
    return (
        <div className=" bg-cover bg-center w-screen h-screen relative flex flex-col justify-between">
            <div className="w-full h-1/2 top-0 text-center text-white bg-login-background bg-bottom bg-cover absolute mt-14 rounded-br-[40px] rounded-bl-[40px]">
                <div className="mt-20">
                    <h1 className="text-2xl font-semibold mb-4">Embark on your collaborative Journey</h1>
                    <div className="text-sm">A unified platform to collaborate with your customers and explore new possibilities</div>
                </div>
            </div>
            {children}
        </div>
    );
}
