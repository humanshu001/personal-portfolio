import React from 'react'

export default function About() {
    return (
        <>
            <div className="row about m-3 mb-5">
                <h1 className='text-center my-5' style={{ color: 'var(--color-6)', fontSize: '70px', fontWeight: '900' }}>My Best Repos</h1>
                <div className="repos d-flex justify-content-center flex-wrap align-items-center">
                    <img className=' m-auto mx-2 mb-3' src="https://github-readme-stats.vercel.app/api/pin/?username=humanshu001&repo=101-Hello-World-Programs&bg_color=282c34&hide_border=true" alt="" />
                    <img className=' m-auto mx-2 mb-3' src="https://github-readme-stats.vercel.app/api/pin/?username=TheKaushikGoswami&repo=Interschool-Registration&bg_color=282c34&hide_border=true" alt="" />
                    <img className=' m-auto mx-2 mb-3' src="https://github-readme-stats.vercel.app/api/pin/?username=TheKaushikGoswami&repo=Geeta-Law-College-Revamp&bg_color=282c34&hide_border=true" alt="" />
                    <img className=' m-auto mx-2 mb-3' src="https://github-readme-stats.vercel.app/api/pin/?username=humanshu001&repo=blog-post&bg_color=282c34&hide_border=true" alt="" />
                    <img className=' m-auto mx-2 mb-3' src="https://github-readme-stats.vercel.app/api/pin/?username=humanshu001&repo=Mess-Rating&bg_color=282c34&hide_border=true" alt="" />
                    <img className=' m-auto mx-2 mb-3' src="https://github-readme-stats.vercel.app/api/pin/?username=TheKaushikGoswami&repo=Quiz-System&bg_color=282c34&hide_border=true" alt="" />
                    </div>
            </div>
        </>
    )
}
