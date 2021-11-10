import { GetServerSideProps } from "next"
import { server } from "../../../config"
import { PhotoType } from "../../photos"
import Image from 'next/image'
import Link from 'next/link'
import imageLoader from "../../../imageLoader"

const index = ({photo}:{photo: PhotoType}) => {
    return (
        <figure>

            <figcaption>{photo.title}</figcaption>
            <Image width="200px" height="200px" unoptimized loader={imageLoader} src={photo.url} />
            <Link href="/"><a>Go home</a></Link>
            <Link href="/photos"><a>Go to photos</a></Link>
            
        </figure>
    )
}

export default index

export const getServerSideProps: GetServerSideProps = async ({query:{id}}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const data = await res.json();

    return{
        props:{
            photo:data
        }
    }
}
