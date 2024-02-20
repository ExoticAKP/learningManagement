import {Schema,model,Document} from "mongoose"

export interface Child{
    name:string,
    email:string,
    password:string,
    purchasedCourses? : []
}
export interface ChildDocument extends Child , Document{}

const childSchema : Schema<ChildDocument>  = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required : true
    },
    password:{
        type:String,
        required:true
    },
    purchasedCourses:{
        type:Array,
        default:[]
    }
})
const child = model<ChildDocument>("Child", childSchema)
child.createIndexes
export default child