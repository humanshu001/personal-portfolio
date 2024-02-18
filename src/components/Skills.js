import React from 'react'

export default function Skills() {
  return (
    <>
        <div className="row skills m-3 mb-5" style={{backgroundColor:'var(--color-1)',borderRadius:'5px'}}>
            <div className="col-12 text-center">
                <h1 className='my-4' style={{color:'var(--color-6)',fontWeight:'900',fontSize:'70px'}}>Skills</h1>
            </div>
            <div className="col-12 text-center">
                <div className="row d-flex justify-content-center">
                    <div className="card p-3 m-3 mb-5" style={{backgroundColor:'var(--color-2)',border:'none',width:'18rem'}}>
                        <h3 className='mx-3 pb-2 mb-3' style={{color:'var(--color-5)',borderBottom:'3px solid var(--color-5)',display:'inline'}}>Frontend</h3>
                        <div className="col-md-8 m-auto">
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=bootstrap&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=react&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/Angular-DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"/>
                        </div>
                    </div>
                    <div className="card p-3 m-3 mb-5" style={{backgroundColor:'var(--color-2)',border:'none',width:'18rem'}}>
                        <h3 className='mx-3 pb-2 mb-3' style={{color:'var(--color-5)',borderBottom:'3px solid var(--color-5)',display:'inline'}}>Backend</h3>
                        <div className="col-md-8 m-auto">
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=node.js&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=express&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/Django-092E20.svg?style=for-the-badge&logo=django&logoColor=white"/> 
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/PHP-777BB4.svg?style=for-the-badge&logo=php&logoColor=white"/>
                        </div>
                    </div>
                    <div className="card p-3 m-3 mb-5" style={{backgroundColor:'var(--color-2)',border:'none',width:'18rem'}}>
                        <h3 className='mx-3 pb-2 mb-3' style={{color:'var(--color-5)',borderBottom:'3px solid var(--color-5)',display:'inline'}}>Databases</h3>
                        <div className="col-md-8 m-auto">
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/SQLite-003B57.svg?style=for-the-badge&logo=sqlite&logoColor=white"/>
                        </div>
                    </div>
                    <div className="card p-3 m-3 mb-5" style={{backgroundColor:'var(--color-2)',border:'none',width:'18rem'}}>
                        <h3 className='mx-3 pb-2 mb-3' style={{color:'var(--color-5)',borderBottom:'3px solid var(--color-5)',display:'inline'}}>Tools</h3>
                        <div className="col-md-8 m-auto">
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=git&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=github&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=postman&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/Visual Studio Code-007ACC.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
                        </div>
                    </div>
                    <div className="card p-3 m-3 mb-5" style={{backgroundColor:'var(--color-2)',border:'none',width:'18rem'}}>
                        <h3 className='mx-3 pb-2 mb-3' style={{color:'var(--color-5)',borderBottom:'3px solid var(--color-5)',display:'inline'}}>Programming Languages</h3>
                        <div className="col-md-8 m-auto">
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=python&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/C-24.svg?style=for-the-badge&logo=C&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/PHP-777BB4.svg?style=for-the-badge&logo=php&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/C++-00599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"/>
                        </div>
                    </div>
                    <div className="card p-3 m-3 mb-5" style={{backgroundColor:'var(--color-2)',border:'none',width:'18rem'}}>
                        <h3 className='mx-3 pb-2 mb-3' style={{color:'var(--color-5)',borderBottom:'3px solid var(--color-5)',display:'inline'}}>Designing Applications</h3>
                        <div className="col-md-8 m-auto">
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/Adobe Photoshop-31A8FF.svg?style=for-the-badge&logo=adobe-photoshop&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/Canva-7333CC.svg?style=for-the-badge&logo=canva&logoColor=white"/>            
                        </div>
                    </div>
                    <div className="card p-3 m-3 mb-5" style={{backgroundColor:'var(--color-2)',border:'none',width:'18rem'}}>
                        <h3 className='mx-3 pb-2 mb-3' style={{color:'var(--color-5)',borderBottom:'3px solid var(--color-5)',display:'inline'}}>Management Skills</h3>
                        <div className="col-md-8 m-auto">
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/Leadership-FFA500.svg?style=for-the-badge&logo=leadership&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/Teamwork-008000.svg?style=for-the-badge&logo=teamwork&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/Communication-318aff.svg?style=for-the-badge&logo=communication&logoColor=white"/>
                            <img alt="Static Badge" className='m-1' src="https://img.shields.io/badge/Problem Solving-FF4500.svg?style=for-the-badge&logo=problem-solving&logoColor=white"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
