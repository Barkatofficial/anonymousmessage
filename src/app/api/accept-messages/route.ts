import { getServerSession } from "next-auth";
import { AuthOptions } from "next-auth";
import { User } from "next-auth";
import { dbConnect } from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { authOptions } from "../auth/[...nextauth]/options";

export async function POST(request:Request){
    await dbConnect()

    const session = await getServerSession(authOptions)
    const user:User = session?.user

    if(!session || !session?.user){
        return Response.json(
            {
                success:false,
                message:"Not Authenticated"
            },{status:400}
        )
    }

    const userId  = user._id
    const {acceptMessages}  = await request.json()

    try{
        const updatedUser = await UserModel.findByIdAndUpdate(userId,{isAcceptingMessage:acceptMessages},{new:true})

        if(!updatedUser){
            return Response.json(
                {
                    success:false,
                    message:"failed to update user status to accept message"
                },{
                    status:400
                }
            )
        }


    }catch(error){
        console.log("failed to update user status to accept")
        return Response.json(
            {
                success:false,
                message:"Error verifying user"
            },{
                status:500
            }
        )
    }
}

