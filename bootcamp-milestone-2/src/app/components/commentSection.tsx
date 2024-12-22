"use client";
import React, { useEffect, useState } from "react";
import style from "@/components/commentSection.module.css";
import {IComment} from "@/../database/comment";
import Comment from "@/components/comment";

type Props = {
    collection: string, 
    slug: string,
};

export default function CommentSection({collection, slug}: Props) {
    const [user, setUser] = useState("");
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<IComment[]>([]); // Lets comments be re-rendered automatically

    // Fetch initial comments
    useEffect(()=>{
        const fetchComments = async () => {
            try{
                const res = await fetch(`/api/${collection}/${slug}`);
                if(!res.ok){
                    throw new Error(`Failed to fetch comments: ${res.statusText}`);
                }
                const data = await res.json();
                if(!data){
                    console.error("Received empty response");
                }
                setComments(data.comments);
            }catch(err){
                console.error("Error fetching comments: ", err);
            }
        }
        fetchComments();
    }, [slug, collection]);

    const postComment = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validate comment
        if (!user || !comment) {
            console.error("Name & Comment required");
            return;
        }

        // Create new comment to post
        const newComment = {
            user,
            comment,
            time: new Date(),
        };

        try {
            //Make POST request
            const response = await fetch(`/api/${collection}/${slug}/comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newComment),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            // Update comments
            setComments((prevComments) => [...prevComments, newComment]);

            //  Clear form 
            setUser("");
            setComment("");
        } catch (err) {
            console.error("Error posting comment:", err);
        }
    };

    return (
        <>
        <h4 className={style.commentsSectionTitle}>
            <b>------- Comments -------</b>
        </h4>
        <form className={style.form} onSubmit={postComment}>
            <input
                className={style.field}
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <textarea
                className={style.comment}
                name="message"
                placeholder="Your Message"
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit">Post A Comment</button>
        </form>
        <div className={style.commentContainer}>
            {comments.map((comment, index) =>(
            <Comment key={index} comment={comment}/>
            ))}
        </div>
        </>
    );
}
