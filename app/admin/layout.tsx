import { logoutAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen w-full h-full flex flex-col">
            <header className="py-4 border-b border-border  px-4 flex justify-between">
                <h1 className="text-lg font-semibold">Chiranjeev CMS</h1>
                <form action={logoutAction}>
                    <Button variant={"destructive"} className="cursor-pointer" type={"submit"} size={"sm"} >
                        Logout
                    </Button>   
                </form>
            </header>
            <main className="flex-1 h-full container mx-auto px-4 py-4">
                {children}
            </main>
        </div>
    )
}
