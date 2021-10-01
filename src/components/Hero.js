import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

const builder = imageUrlBuilder(sanityClient);
const urlFor =(source) => {
  return builder.image(source);
}

const Home = () => {
    const [author, setAuthor] = useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "author"]{
            name,
            "bio": bio[0].children[0].text,
            "authorImage": image.asset->url
        }`)
        .then((data)=>setAuthor(data[0]))
        .catch(console.error);
    },[])

    if (!author) return <div></div>;

    return (
        <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition}
    >
        <main className="relative" style={{backgroundColor:"#263C41"}}>
      <div className="p-8  container mx-auto relative">
        <section className=" rounded-lg shadow-2xl lg:flex p-20" style={{backdropFilter: "blur(10px)",boxShadow:"0 0 1rem 0 rgba(0, 0, 0, .2)" ,backgroundColor:"rgba(255, 255, 255, .15)"}}>
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-full h-full mr-8"
            alt="Kapehe"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-yellow-500 mb-4">
              Hey there. I'm{" "}
              <span className="text-yellow-100">{author.name}</span>
            </h1>
            <p className="text-yellow-200 text-lg">{author.bio}</p>
          </div>
        </section>
      </div>
    </main>
    </motion.div>
    )
}

export default Home
