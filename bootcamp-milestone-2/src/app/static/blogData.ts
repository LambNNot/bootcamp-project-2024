
export type Blog = {
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
        image:"/pk_ball.png",
        imageAlt: "Pokeball Placeholder",
        slug: "first-blog",
    },
    {
        title:"Second Blog",
        date:"11-27-2024",
        description:"This is my second blog.",
        image:"/pk_ball.png",
        imageAlt: "Pokeball Placeholder pt 2!",
        slug: "second-blog",
    }
];

export default blogs;
