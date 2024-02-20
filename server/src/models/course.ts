import {Schema,model,Document} from "mongoose"

export interface Course{
    title:string,
    category:string,
    price:string,
    description : string,
    
}
export interface CourseDocument extends Course , Document{}

const childSchema : Schema<CourseDocument>  = new Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required : true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default:''
    }
})
const course = model<CourseDocument>("Course", childSchema)
course.createIndexes
export default course