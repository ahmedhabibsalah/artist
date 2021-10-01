import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import sanityClient from '../client';
import BlockContent from "@sanity/block-content-to-react";
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';


const SingleWork = () => {
    const [singleWork, setSingleWork] = useState(null);
    const {slug} = useParams();

    useEffect(() => {
        sanityClient.fetch(`
        *[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "authorName" : author->name
        }`)
        .then((data) => setSingleWork(data[0]))
        .catch(console.error);
        
    }, [slug])

    if (!singleWork) return <div>Loading...</div>;

    return (
        <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition}
    >
        <main className="min-h-screen p-12" style={{backgroundColor:"#263C41"}}>
          <article className="container shadow-lg mx-auto rounded-lg flex items-center justify-center">
            <header className="relative">
              <div className="p-12">
                <h1 className="cursive text-3xl lg:text-6xl mb-4" style={{color:"#fff"}}>
                  {singleWork.title}
                </h1>        
              </div>
              <img
              src={singleWork.mainImage.asset.url}
              alt={singleWork.title}
              className=" object-cover rounded-t "
              />
              <div className="flex justify-center" style={{color:"#E8C6B0"}}>
                <p className="cursive items-center pl-2 text-2xl">
                  {singleWork.authorName}
                </p>
              </div>         
              <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full " style={{color:"#fff"}}>
               <BlockContent
                blocks={singleWork.body}
                projectId="#####"
                dataset="production"
               />
              </div>
            </header>
          </article>
        </main>
        </motion.div>
    )
}

export default SingleWork ;
