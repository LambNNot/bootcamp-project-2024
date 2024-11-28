
type Blog = {
    title:string;
    date:string;
    description:string;
    image:string;
    imageAlt:string;
    slug:string;
};

const blogs: Blog[] = [
    {
        title:"First Blog",
        date:"11-26-2024",
        description:"This is my first blog.",
        image:"./pk_ball.png",
        imageAlt: "Pokeball Placeholder",
        slug: "first-blog",
    },
    {
        title:"Second Blog",
        date:"11-27-2024",
        description:"This is my second blog.",
        image:"./pk_ball.png",
        imageAlt: "Pokeball Placeholder pt 2!",
        slug: "second-blog",
    }
];

//Reference blogs container
const blogsContainer = document.getElementById("blogs-container")

//Traverse through blogs list, appending to blogs container
blogs.forEach(blog=>{
    const blogPostContainer = document.createElement("div");
    blogPostContainer.classList.add("blog-post");

    const blogTitle = document.createElement("h1");
    blogTitle.textContent = blog.title;
    blogTitle.classList.add("blog-title");
    blogPostContainer.appendChild(blogTitle);       //Add blog title

    const blogImg = document.createElement("img");
    blogImg.src = blog.image;
    blogImg.style.cssText = "width:50px; height:50px;";
    blogPostContainer.appendChild(blogImg);         //Add blog image

    const blogDesc = document.createElement("p");
    blogDesc.textContent = blog.description;
    blogPostContainer.appendChild(blogDesc);        //Add blog description

    blogsContainer?.appendChild(blogPostContainer); //Add blog post to blogs container
});
