import React from "react";
import style from './comment.module.css';
import {IComment} from "@/../database/blogSchema";


{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date){
	return new Date(time).toLocaleTimeString();
}

export default function Comment({ comment }: CommentProps) {
    return (
        <>
        <div className={style.commentContainer}>
            <h4 className={style.commenter}><i>{comment.user}</i></h4>
            <span className={style.commentTime}>{parseCommentTime(comment.time)}</span>
            <p className={style.comment}>{comment.comment}</p>
        </div>
        </>
    );
}