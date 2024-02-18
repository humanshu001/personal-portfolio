import React from 'react'

export default function About() {
    return (
        <>
            <div className="row about m-3 mb-5">
                <div className="col-12 col-md-3 m-auto d-flex justify-content-center align-items-center my-5">
                    <img src="https://avatars.githubusercontent.com/u/140067860?v=4" alt="Humanshu Jaglan" style={{ width: '90%', borderRadius: '50%' }} />    
                </div>   
                <div className="col-12 col-md-8 mx-auto mb-5">
                <h1 className='text-center my-5' style={{ color: 'var(--color-6)', fontSize: '70px', fontWeight: '900' }}>My Overview</h1>
                    <p style={{ color: 'var(--color-5)', fontSize: '20px' }}>
                        I am a Full Stack Developer, a competitive programmer and a tech enthusiast. I am currently pursuing my B.Tech in Computer Science and Engineering from Geeta University, Panipat. I am a passionate learner who's always willing to learn and work across technologies and domains. I love to explore new technologies and leverage them to solve real-life problems. I am a fast learner and a good team player with good communication skills. I am an open-source enthusiast and a quick learner. I am always ready to face new challenges and learn new technologies.
                    </p>

                    <div className="col-md-12 m-auto">
                    <h3 className='mb-4' style={{ color: 'var(--color-6)', fontSize: '40px', fontWeight: '700' }}>Education :</h3>
                    <ul>
                    <li className='mb-3' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                        B.Tech in Computer Science and Engineering from Geeta University, Panipat.
                    </li>
                    <li className='mb-3' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                        Schooling from Geeta Bharti Sr. Sec. School, Israna.
                    </li>       
                    </ul>

                    <h3 className='mb-4' style={{ color: 'var(--color-6)', fontSize: '40px', fontWeight: '700' }}>Hobbies :</h3>
                    <ul>
                    <li className='mb-3' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                        Competitive Programming
                    </li>
                    <li className='mb-3' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                        Web Development
                    </li>
                    <li className='mb-3' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                        Reading Books
                    </li>
                    <li className='mb-3' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                        Playing Chess
                    </li>
                    <li className='mb-3' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                        Listening to Music
                    </li>
                    </ul>
                    </div> 
                </div>             
            </div>
        </>
    )
}
