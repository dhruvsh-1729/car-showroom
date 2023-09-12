import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function PUT(request: NextRequest) {
    try {
        const updatedUser: any = await request.json();

        const { _id, email } = updatedUser;

        // Find the user by _id
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const update = await User.findByIdAndUpdate(_id, 
            {
               $set : updatedUser,
            },
            );
        console.log(update);
        
        return NextResponse.json({
            message: "User details updated successfully",
            user: update, // Optional: Return the updated user data
        }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
