import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import sanityClient from '../client';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

const Work = () => {
    const [postData, setPostData] = useState(null);
    
    useEffect(() => {
        sanityClient
         .fetch(`*[_type=="post"]{
             title,
             slug,
             mainImage{
                asset ->{
                    _id,
                    url
                },
                alt
            }
         }`)
        .then((data) => setPostData(data))
        .catch(console.error)
    }, []);

    return (
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={transition}
       >
       <main className=" min-h-screen p-12" style={{backgroundColor:"#263C41"}}>
           <section className="container mx-auto">
               <h1 className="text-5xl text-white flex justify-center cursive">The Drawings Page</h1>
               <h2 className="text-xl flex justify-center mb-12 cursive" style={{color:"#E8C6B0"}}> Welcome To My World, Enjoy The Art </h2>
               <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {
                       postData && postData.map((post, index)=>(
                           
                    <article>
                        <Link to={"/work/" + post.slug.current} key={post.slug.current}>
                          <span  className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-yellow-700" key={index}>
                              <img 
                              src={post.mainImage.asset.url}
                              alt={post.mainImage.alt}
                              className="w-full h-full rounded-r object-cover absolute inset-0 z-0" />
                              <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                  <h3 className="opacity-0 hover:opacity-60  duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold" style={{backgroundColor:"#5C4D3C"}} >
                                  {post.title}
                                  </h3>
                              </span>
                          </span>
                        </Link>
                    </article>
                       ))}
               </div>
           </section>
       </main>
     </motion.div> 
    )
}

export default Work
