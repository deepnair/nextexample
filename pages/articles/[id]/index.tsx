import { GetStaticPaths, GetStaticProps } from "next"
import { ArticleObjectType } from "../../../components/Article"
import styles from '../../../styles/Article.module.css'
import Link from 'next/link'
import { PostType } from "../.."

const index = ({article}: ArticleObjectType) => {
    return (
        
        <article>
            <h2 className={styles.title}>{article.title}</h2>
            <p>{article.body}</p>
            <Link href="/">
                <a>Go back</a>
            </Link>
        </article>            
        
    )
}

export const getStaticProps: GetStaticProps  = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const data = await res.json()

    return{
        props:{
            article: data
        }
    }
    
}

interface ParamType{
    params: IdType
}

interface IdType {
    id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const paths = data.reduce((prev:ParamType[], article:PostType) => {
        prev.push({params:{id: article.id.toString()}});
        return prev;
    }, [])

    return{
        paths: paths,
        fallback: false
    }
    
}

export default index
