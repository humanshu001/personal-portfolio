import React from 'react'
import BannerImage from '../assets/images/BannerImage.webp'
import { useState, useEffect } from 'react';

export default function Banner() {
    const [text, setText] = useState('');
    const [isFirstText, setIsFirstText] = useState(true);

    useEffect(() => {
        const fullText1 = "Web Developer    ";
        const fullText2 = "Python Programmer    ";

        let currentIndex = 0;
        let isBackspacing = false;

        const typingInterval = setInterval(() => {
            if (isBackspacing) {
                if (isFirstText) {
                    setText(fullText1.slice(0, currentIndex - 1));
                } else {
                    setText(fullText2);
                }
                currentIndex--;
            } else {
                if (isFirstText) {
                    setText(fullText1.slice(0, currentIndex + 1));
                } else {
                    if (currentIndex < fullText2.length) {
                        setText(fullText2.slice(0, currentIndex + 1));
                    }
                }
                currentIndex++;
            }

            if (isBackspacing && currentIndex === 0) {
                if (isFirstText) {
                    setIsFirstText(false);
                    currentIndex = 0;
                    isBackspacing = false;
                } else {
                    setIsFirstText(true);
                    currentIndex = 0;
                    isBackspacing = false;
                }
            } else if (currentIndex === (isFirstText ? fullText1.length : fullText2.length)) {
                if (!isFirstText) {
                    clearInterval(typingInterval);
                }
                isBackspacing = true;
            }
        }, 200);

        return () => {
            clearInterval(typingInterval);
        };
    }, [isFirstText]);

    // Rest of the code...

  return (
    
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between">
                    <div className="left banner-left">
                        I'm a <br /><span>#{text}</span>
                    </div>
                    <div className="right banner-right" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <img src={BannerImage} alt="" style={{width:'60%'}}/>
                    </div>
                </div>
                <div className="col-md-12 px-5">
                    <div className="social-icons col-md-3 d-flex justify-content-around py-3 mx-5" style={{backgroundColor:'var(--color-1)',borderRadius:'10px',padding:'15px!important'}}>
                        <a className='m-3 mx-1' href="https://www.github.com/humanshu001">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        </a>
                        <a className='m-3 mx-1' href="https://www.instagram.com/humanshu_jaat123/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#b5179e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                        </a>
                        <a className='m-3 mx-1' href="https://www.linkedin.com/in/humanshu-jaglan/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#0277b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a className='m-3 mx-1' href="https://www.facebook.com/profile.php?id=61550547220983">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#4267B2" width="35" height="35" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="facebook"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13 22H9a1 1 0 0 1-1-1v-6.2H6a1 1 0 0 1-1-1v-3.6a1 1 0 0 1 1-1h2V7.5A5.77 5.77 0 0 1 14 2h3a1 1 0 0 1 1 1v3.6a1 1 0 0 1-1 1h-3v1.6h3a1 1 0 0 1 .8.39 1 1 0 0 1 .16.88l-1 3.6a1 1 0 0 1-1 .73H14V21a1 1 0 0 1-1 1zm-3-2h2v-6.2a1 1 0 0 1 1-1h2.24l.44-1.6H13a1 1 0 0 1-1-1V7.5a2 2 0 0 1 2-1.9h2V4h-2a3.78 3.78 0 0 0-4 3.5v2.7a1 1 0 0 1-1 1H7v1.6h2a1 1 0 0 1 1 1z"/></g></g></svg>
                        </a>


                    </div>
                </div>
            </div>
        </div>
    
  )
}
