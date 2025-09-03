
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen w-full h-full flex flex-col">
            <header className="py-4 border-b border-border  px-4 ">
                <h1 className="text-lg font-semibold">Admin CMS</h1>
            </header>
            <main className="flex-1 h-full container mx-auto px-4 py-4">
                {children}
            </main>
        </div>
    )
}
