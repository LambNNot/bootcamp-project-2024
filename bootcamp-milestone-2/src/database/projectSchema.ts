import mongoose, { Schema } from "mongoose";
import commentSchema from "@/../database/comment";
import {IComment} from "@/../database/comment";


export type Project = {
    name: string;
    description: string;
    image: string; // Public string
    imageAlt: string; // Alt for image
    slug: string;
    comments: IComment[];
};

const projectSchema = new Schema<Project>({
    name : {type:String, required: true},
    description : {type:String, required:true},
    image : {type:String, required:true},
    imageAlt : {type:String, required:true},
    slug : {type:String, required:true},
    comments : {type:[commentSchema], required:false},
});

const Project = mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;