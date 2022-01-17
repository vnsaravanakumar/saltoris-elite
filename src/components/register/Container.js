export default function Container({ children }) {
    return (
        <div className="px-3 md:px-8 h-auto mt-24 mb-24">
            <div className="container mx-auto max-w-full flex justify-center">
                <div className="md:w-3/5">
                    {children}
                </div>
            </div>
        </div>
    );
}
