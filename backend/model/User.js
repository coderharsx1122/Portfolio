import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:[true,'Please enter email'],

    },
    password:{
        type:String,
        select:false,
        required:[true,'Please Enter password']
    },
    timeline:[
        {
            title:String,
            description:String,
             date:Date   
        }
    ],
    skills:{
        image1:{
            public_id:String,
            url:String
        },
        image2:{
            public_id:String,
            url:String
        },
        image3:{
            public_id:String,
            url:String
        },
        image4:{
            public_id:String,
            url:String
        },
        image5:{
            public_id:String,
            url:String
        },
        image6:{
            public_id:String,
            url:String
        },
    },
    projects:[
        {
            url:String,
            title:String,
            image:{
                public_id:String,
                url:String
            },
            description:String,
            techstack:String
        }
    ],
    about:{
        name:String,
        title:String,
        subtitle:String,
        description:String,
        qoute:String,
        Avatar:{
            public_id:String,
            url:String
        }
    }
})

// creating collection named Users
export const User = mongoose.model("User",userSchema)