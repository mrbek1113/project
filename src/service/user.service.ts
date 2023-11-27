import prisma from "../prisma/prisma.servise"

const getAllUser=async(verified?:boolean)=>{
const users=await  prisma.user.findMany({
    where:{
        // verified,
    },
    select:{
        id:true ,
        name:true,
        email:true,
        phone:true
    }
})
}