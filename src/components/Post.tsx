"use client"

type PostProps = {
    post: {
        autor: {
            imagem: string
            nome: string
        }
        conteudo: string
        postedAt: string
    }
}

export function Post({ post }: PostProps) {
    return (
        <div className="flex bg-white my-10 p-7 rounded-md shadow-md flex-col max-w-lg  mx-auto">
            <div className="flex">
            <img src={post.autor.imagem} alt="" className="h-12 w-12 rounded-full p" />
            <div>  
                    <h2>{post.autor.nome}</h2>
                    <span>{post.postedAt}</span>
            </div>
            </div>
            <p className="mt-4 text-xl">{post.conteudo}</p>
        </div>
    )
}