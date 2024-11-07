import './Blog.css'
import Navi from "./Navi.tsx";
import Post from "./Post.tsx";
import ImageSlider from "./ImageSlider.tsx";

type Trip = {
    postTitle: string,
    postImage: string,
    postContent: string
}

type Slide = {
    url: string,
    title:string
}

const Trips: Trip[] = [
{
    postTitle: "Vancouver trip 2012",
    postImage: "/image/foto1.jpg",
    postContent: "Fazit: War klasse!!"
},
{
    postTitle: "Portugal trip 2021",
    postImage: "/image/foto2.jpg",
    postContent: "Fazit: Geht so...."
}]

const Slides: Slide[] = [
    {url: 'image/foto1.jpg', title: 'Trip to Vancouver'},
    {url: 'image/foto2.jpg', title: 'Beach at Algave'},
]


export default function Blog() {
    return (
        <>
            <h1>Into the wild - Mein Reise Blog</h1>
            <Navi/>

            <ImageSlider Slides={Slides}/>


            <div>
                {
                    Trips.map((element)=><Post data={element} key={element.postTitle}/>)
                }
            </div>

        </>

    );
}
