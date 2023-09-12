import {connect} from "@/dbConfig/dbConfig";
import TestDrives from "@/models/testDrive";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email,city,carType,additionalInfo} = reqBody;

        const newTestDrive = new TestDrives({
            email,
            city,
            carType,
            additionalInfo,
        })

        const savedTest = await newTestDrive.save()
        console.log(savedTest);

        return NextResponse.json({
            message: "Request test drive added successfully",
            success: true,
            savedTest
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}