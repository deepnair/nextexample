import { PostType } from "../pages"
import Link from 'next/link'
import styles from '../styles/Article.module.css'

export interface ArticleObjectType{
    article: PostType;
}

const Article = ({article}:ArticleObjectType) => {
    return (
        <Link href={`articles/${article.id}`}>
            <article className={styles.card}>
                <h2 className={styles.title}>{article.title}</h2>
                <p>{article.body}</p>
            </article>
        </Link>
    )
}

export default Article
