
export default function AuthLayout({children}:React.PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 p-12 sm:p-24">
            {children}
        </div>
    )
}
