import React from 'react';
import style from './blogPreview.module.css';
import Image from "next/image";

export default function BlogPreview() {
  return (
	<>
        <h3>Blog Name</h3>
        <div>
            <Image src="./imageLinkHere" alt="img" width={500} height={500}/>
            <p>Blog description</p>
            <p>Posted on...</p>
        </div>
    </>
  );
}