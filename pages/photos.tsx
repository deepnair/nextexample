import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Layout2 from '../components/Layout2'
import { server } from '../config'
import imageLoader from '../imageLoader'
import Link from 'next/link'

export interface PhotoType {
    albumId:      number;
    id:           number;
    title:        string;
    url:          string;
    thumbnailUrl: string;
}

export interface PhotosType {
    photos: PhotoType[]
}



const photos = ({photos}:PhotosType) => {
    
    return (
        <>
            {photos.map((photo, index) => {
                return (<Link href={`${server}/photos/${photo.id}`} key={index}>
                    <a>
                    <p>{photo.title}</p>
                    <Image height="200px" width="200px" loader={imageLoader} unoptimized src={photo.url} alt={photo.title}/>
                    </a>
                </Link>)
            })}
            
        </>
    )
}

export default photos

photos.getLayout = (page:typeof photos) => {
    return (<Layout2>{page}</Layout2>)
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=6')
    const data = await res.json()

    return{
        props:{
            photos: data
        }
    }
}
