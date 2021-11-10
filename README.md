## Next app example

This is done based on tutorials by Traversy media and TomDoesTech on youtube. They can be found at [Next.js crash course 2021](https://www.youtube.com/watch?v=mTz0GXj8NN0&t=3631s) and [Learn Next.js in Typescript with Typescript](https://www.youtube.com/watch?v=OTuHnVvxTDs&t=511s)

### Approach

1. Create a layout for the homepage using a layout component in the component folder.
1. In the _app.tsx document under pages, create a getLayout function that wraps Component and is optional. Type this component as AppPropsWithLayout which extends AppProps (import type {AppProps} from next/app). This has a Component property which is of type NextPageWithProps. NextPageWithProps is yet another type that extends NextPage and has an optional getLayout function that takes a parameter called page of type ReactElement and returns a ReactNode (both imported from 'react'). Then 
1. On the index.tsx call Component.getLayout and set it equal to a function that takes a page and returns <Layout>{page}<Layout>. The Layout needs to be imported onto the page.
1. To CSS style the page, import Home.module.css as styles, then in the relevant divs, set the classNames equal to styles.class and change class with the class name defined in the css file.
1. Use getStaticProps to fetch from jsonplaceholder.typicode.com. Limit the results to 6 and set the return equal to props:{ data }. 
1. Catch the prop in the functional component and use it to populate the articles. Have each article lead to a page with a single article shown on it as articles/[id].
1. In pages create a folder called articles, wth another folder underneath it called [id]. Then create a tsx folder underneath it called index.tsx.
1. In this folder, create a getStaticProps to bring in the data. This time however give the function a context paramater, and destructure params and further id from the params. Return props as with the previous getStatisProps, and pass it to the functional component to display the prop.
1. Then create a getStaticPaths function of type GetStaticPaths from next. Map it so that in the return you map out objects with a property called {params: {id: ##}} in the array. Now if you go to articles/1 in the site address, it should go to that particular site.
1. To be sure of the domain according to where the site is create a file called index.ts in the config folder in the root. Here create a variable called const dev and set it equal to process.end.NODE_ENV !== 'production'. Then export const server which is equal to your localhost address if dev is true and to your domain name if dev is false. You can them import and use server wherever you may have links within your site.
1. Next create a photos page that uses serverside props. For this use getServerSideProps. Get Layout2 from the Layout2 component to wrap this page, the rest is the same. 
1. The images for the photos will be brought in using an Image imported form 'next/image'. It will take in a src, width, height, loader, as well as unoptimized if your images don't need to be optimized.
1. The loader is defined in an imageLoader.ts in the root folder. Here you write
    ```
    const imageLoader = ({src}: {src:string}) => src;
    export default imageLoader;
    ```
1. Also in next.config.json, you need to add an images object under module.exports with a domains property which takes an array of domains you can get images from. A loader property which is set to "custom" and a path: which is set to "/".
1. Once these are done ensure that your photos are linked to image pages which are generated using a photos folder with an [id] folder and thus generating pages using getStaticProps. 
1. Create a folder under the apis folder of pages called posts. Then create an index.ts and a [id].ts over there. Grab the data from jsonplaceholder.typicode for todos?_limit=6 and put it in a file called data.json in the root folder and export it as const todos. 
1. In the index folder create a handler function that takes a req which is and a res of type NextApiRequest and NextApiResult respectively (can be imported from next). Then returns res.status(200).json(todos).
1. In the [id].ts. The req is destructured out to query then that is destructured out to get id. Set let filtered to an empty array of Todo objects. Then if typeof id is a string, use a filter function to filter out the id from the todos and set it equal to todo. If the length of the filtered array is greater than 0 then res.status(200).json(filtered[0]) else res.status(404).json({message: \`This ${id} was not found`})
1. Then create a posts page with links to each post. Use getStaticProps to get this data, but use the api as the site.
1. Then for each post use getServerSideProps with context destructured out as query, then id being destrcutured out of it to show the page. Use the jsonplaceholder site rather than the api for these to demonstrate server side generation of pages.
