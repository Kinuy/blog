import './Post.css'

type Props = {
    data: {
        postTitle: string,
        postImage: string,
        postContent: string
    }
}

export default function Post(props: Props) {
    return (

        <div className="postClass">
            <h3>{props.data.postTitle}</h3>
            <img className="imgClass" src={props.data.postImage} alt="landscape image"/>
            <p>{props.data.postContent}</p>
        </div>
    );
}

