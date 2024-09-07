import { connect } from "@/dbConfig/dfConfig";
import User from "@/models/usermodel"
import { NextRequest, NextResponse } from "next/server";
 


connect()


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { message, email, Subject } = reqBody
        //validation
        console.log(reqBody);

        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({ error: "User already exist" }, { status: 500 })
        }
 
        const newUser = new User({
            message,
            Subject,
            email
        })
        const savedUser = await newUser.save()
        console.log(savedUser);
  
        return NextResponse.json({
            message: "User registered succesfully",
            success: true,
            savedUser
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}