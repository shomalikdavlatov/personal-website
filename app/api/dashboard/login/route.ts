// app/api/dashboard/login/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { username, password } = await req.json();

        const adminUsername = process.env.ADMIN_USERNAME;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminUsername || !adminPassword) {
            return NextResponse.json(
                { success: false, error: "Admin credentials are not set." },
                { status: 500 }
            );
        }

        if (username === adminUsername && password === adminPassword) {
            // create a token (base64 of "username:password" for example)
            const token = Buffer.from(`${username}:${password}`).toString(
                "base64"
            );

            // return the token to the client
            return NextResponse.json({ success: true, token });
        }

        return NextResponse.json(
            { success: false, error: "Invalid credentials" },
            { status: 401 }
        );
    } catch (err) {
        return NextResponse.json(
            { success: false, error: "Something went wrong." },
            { status: 500 }
        );
    }
}
