import React from "react"
import styles from "../styles/Layout2.module.css"


const Layout2 = ({children}:{children:React.ReactNode}) => {
    return (
        <div className={styles.container}>
            {children}            
        </div>
    )
}

export default Layout2
