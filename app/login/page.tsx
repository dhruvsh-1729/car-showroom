"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Loader } from "@/components";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        username: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            window.location.reload();
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.username.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-6">
            <h1 className={`text-3xl mb-6 ${loading ? "text-gray-500" : "text-black"}`}>
                {loading ? <div className="flex flex-row">Processing....<Loader /></div> : "Login"}
            </h1>
            <hr className="w-16 border-t border-gray-400 mb-6" />

            <div className="w-72">
                <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
                    UserName
                </label>
                <input
                    id="username"
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder="username"
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                />
                <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="Password"
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                />
                <button
                    onClick={onLogin}
                    className={`w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none ${buttonDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
                        }`}
                    disabled={buttonDisabled}
                >
                    {buttonDisabled ? "No Login" : "Login"}
                </button>
                <Link href="/signup" className="text-blue-500 hover:underline">
                    Visit Signup page
                </Link>
            </div>
        </div>
    );
}
