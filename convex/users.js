import { mutation } from "./_generated/server";

export const CreateUser=mutation({
    args:{
        name:v.string(),
        email:v.string()
    },
    handler:async(convexToJson,args)=>{
        // If user already existed
        const userData=await ctc.db.query('user').filter(q=>q.eq(q.field('email'),args.email))
        .collect();

        // If not then add new user
        if(userData?.length==0){
            const data={
                name:args.name,
                email:args.email,
                credits:50000
            }
            const result=await convexToJson.db.insert('users',{...data});
            console.log(result);
            return data;
        }
        return userData[0]
    }
})