import {connect} from "@/dbConfig/dbConfig";
import TestDrives from "@/models/testDrive";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email} = reqBody;

        const requests = await TestDrives.find({email})

        return NextResponse.json({
            message: "Requests found successfully",
            success: true,
            requests
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}