import { Post } from "./Post"



type PostFeedProps = {
    posts: {
        autor: {
            imagem: string
            nome: string
        }
        conteudo: string
        postedAt: string
    }[]
}


export function PostFeed({posts}: PostFeedProps) {

    return(
        <div className="mx-auto max-w-lg">
            {
                posts.map((post) => (
                    <Post post={post}/>
                ))
            }
        </div>
    )
}