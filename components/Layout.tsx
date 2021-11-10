import Head from "next/head"
import React from "react"
import homeStyles from '../styles/Home.module.css'

const Layout = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <Head>
                <meta name="keywords" content="web development news"/>
                <title>Web Dev Newz</title>
            </Head>
            <div className={homeStyles.container}>
                {children}
            </div>
            
        </>
    )
}

export default Layout
