import Image from 'next/image'
import { CreatePostWizzard } from '@/components/CreatePostWizzard'
import { PostFeed } from '@/components/PostFeed'
export default function Home() {

  const posts = [
    {
      autor: {
        imagem: "https://avatars.githubusercontent.com/u/119082080?v=4",
        nome: "Giovanni Braga"
      },
      conteudo: "🤓",
      postedAt: "30 segundos atrás"
    },
    {
      autor: {
        imagem: "https://avatars.githubusercontent.com/u/119082080?v=4",
        nome: "Giovanni Braga"
      },
      conteudo: "🥶",
      postedAt: "30 segundos atrás"
    },
    {
      autor: {
        imagem: "https://avatars.githubusercontent.com/u/119082080?v=4",
        nome: "Giovanni Braga"
      },
      conteudo: "😌",
      postedAt: "30 segundos atrás"
    }
  ]

  return (

    <div>
      <CreatePostWizzard />
      <PostFeed posts={posts} />
    </div>

  )
}
