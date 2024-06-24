import React from 'react'

const works = [
    {
        title: "Discussion Community Board",
        desc: "For Website Toolbox",
        imgSrc: 'https://uploads-ssl.webflow.com/61facd488c01b90a022d127e/62a20ce8f7b71269355b4b7f_7dc4c8f3.png',
        link: 'https://www.websitetoolbox.com/'
    },
    {
        title: "Digital Credentials Platform",
        desc: "For ItsCredible",
        imgSrc: 'https://itscredible.com/wp-content/uploads/2023/10/The-Business-Value-of-Digital-Badges-Unlocking-Recognition-and-Success-1024x576.webp',
        link: 'https://itscredible.com/'
    },
    {
        title: "Woof Partner",
        desc: "A platform for pet owners to connect, chat, and arrange meetings for their pets.",
        imgSrc: 'https://i.pinimg.com/originals/4b/fb/48/4bfb48bba1761031c67a30f3372b073e.jpg',
        link: 'https://woofpartner.com/'
    },
    {
        title: "Social Media Post Designer",
        desc: "For Self",
        imgSrc: 'https://media.licdn.com/dms/image/D4D12AQEBgmT7Sbj5kg/article-cover_image-shrink_600_2000/0/1693650431771?e=2147483647&v=beta&t=hmfuNJTj_O-S5hbQ6qiOfhZU0MWQZ3c2jTg3JUKR5Fo',
        link: "https://design-r.com/"
    }
];

function WorkCard(props) {
    const { imgSrc, title, desc, link } = props;
    return (
        <div className='py-10 px-20'>
            <img src={imgSrc} className='bg-slate-200 h-[calc(100dvh-15rem)] rounded-3xl object-cover w-full border' />
            <h3 className='text-3xl mt-6'>{title}</h3>
            <p className='txt-xl my-2'>{desc}</p>
            <a href="" className='txt-xl underline'>Read More</a>
        </div>
    )
}
export default function Work() {
    return (
        <div className='py-5'>
            <h2 className='py-10 px-20 pb-0 text-3xl '>Featured Work</h2>
            {works.map(work => (
                <WorkCard {...work} key={work.link} />
            ))}
        </div>
    )
}
