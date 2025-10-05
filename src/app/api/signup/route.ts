import dbconnect from "@/lib/dbconnect";
import UserModel from "@/models/User";
import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";



export async function POST(request: NextRequest){

    dbconnect()

    try {

        const {username, email, password} = await request.json()

        const existingUser = await UserModel.findOne({
        $or: [{username}, {email}]
        })

        if(existingUser){
            console.log("user already exist");

            return Response.json({
                success: false,
                message: "user with name or email already exist"
            }, {status: 400})
            
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = await UserModel.create({
            username,
            email,
            password: hashedPassword
        })

         return Response.json({
  success: true,
  message: "User registered successfully",
}, { status: 201 })
        
    } catch (error) {

         console.error('error registering user', error);
        return Response.json({
            success: false,
            message: "error registering user"
        },
        {
            status: 500
        }
    )
        
    
    
        
    }

}