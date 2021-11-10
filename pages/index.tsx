import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Article from '../components/Article'
import Layout from '../components/Layout'
import { NextPageWithLayout } from './_app'
import {ReactElement, ReactNode} from 'react'

export interface PostType{
  userId: number;
  id: number;
  title: string;
  body: string;

}

export interface PostsType{
  articles:PostType[];
}

// const Home: NextPage<PostsType> = ({articles}) => {
const Home = ({articles}:PostsType) => {
  console.log(articles);

  return (
    <div>
      <h1> Web Dev Trendz </h1>
      {articles.map((article,index) => (
        <Article key={index} article={article}/>
      ))}
      
    </div>
  )
}

Home.getLayout = function getLayout(page: typeof Home){
  return(<Layout>{page}</Layout>)
}

export default Home
//
export const getStaticProps = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=6')
  const data = await res.json();
  return{
    props:{
      articles: data
    }
  }
}
