import { useContext } from "react"
import { Context } from "../App"

export default function Posts() {
    const { posts } = useContext(Context)
    return (
        <>
            {posts.map(post => {
                return (
                    <div className="card">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                )
            })}
        </>
    )
}
