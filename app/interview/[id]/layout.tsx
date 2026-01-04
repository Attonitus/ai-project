
export default function InterviewLayout({children}: React.PropsWithChildren) {
    return (
        <div className="w-full min-h-screen bg-gray-900">
            <main className="w-full h-screen">
                {children}
            </main>
        </div>
    )
}
