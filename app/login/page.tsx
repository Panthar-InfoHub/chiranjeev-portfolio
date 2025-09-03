import { loginAction } from "@/actions/auth";

export default function LoginPage({
    searchParams,
}: {
    searchParams?: { error?: string };
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
                action={loginAction}
                className="bg-white p-6 rounded-xl shadow-md w-80 space-y-3"
            >
                <h1 className="text-xl font-bold">Admin Login</h1>

                {searchParams?.error && (
                    <p className="text-red-500 text-sm">{searchParams.error}</p>
                )}

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-md"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded-md"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
