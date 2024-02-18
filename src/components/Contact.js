import React,{useState} from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  // eslint-disable-next-line
  const [error, setError] = useState('')

  function onSubmit(e){
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/OL5THyzwkiV", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    }) 
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        alert("We received your submission, thank you!");
        setName('');
        setEmail('');
        setMessage('');
      }
      else if(response.code === 422){
        // Field validation failed
        setError(response.message)
      }
      else {
        // other error from formcarry
        setError(response.message)
      }
    })
    .catch(error => {
      // request related error.
      setError(error.message ? error.message : error);
    });
  }

  return (
    <>
        <div className="row resume m-3" style={{backgroundColor:'var(--color-1)',borderRadius:'5px'}}>
            <div className="col-12 text-center">
            <h1 className='my-4' style={{color:'var(--color-6)',fontWeight:'900',fontSize:'70px'}}>Contact</h1>
            </div>
            <div className="d-flex cont">
              <div className="card p-3 m-3 col-md-6 d-flex align-items-center justify-content-center" style={{backgroundColor:'var(--color-2)',border:'none'}}>
                <div className="card-body mobile w-50">
                <div className="contact mb-3 d-flex justify-content-between">
                  <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                    <b>Mobile no. : </b>
                  </div>
                  <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                    <img className='m-0' src="https://img.shields.io/badge/9034710039-%230077B5.svg?style=for-the-badge" alt="" />
                  </div>
                  </div>
                  <div className="contact mb-3 d-flex justify-content-between">
                  <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                    <b>Email : </b>
                  </div>
                  <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                    <a href="mailto:humanshujaglan@gmail.com">
                    <img className='m-0' src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="" />
                    </a>
                  </div>
                  </div>
                  <div className="contact mb-3 d-flex justify-content-between">
                  <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                    <b>LinkedIn : </b>
                  </div>
                  <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                    <a href="https://www.linkedin.com/in/humanshu-jaglan">
                    <img className='m-0' src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="" />
                    </a>
                  </div>
                  </div>
                  <div className="contact mb-3 d-flex justify-content-between">
                  <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                    <b>WhatsApp : </b>
                  </div>
                  <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                    <a href="https://wa.me/+919034710039">
                    <img className='m-0' src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="" />
                    </a>
                  </div>
                  </div>
                  <div className="contact mb-3 d-flex justify-content-between">
                  <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                    <b>Facebook : </b>
                  </div>
                  <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                    <a href="https://www.facebook.com/profile.php?id=61550547220983">
                    <img className='m-0' src="https://img.shields.io/badge/facebook-%231877F2.svg?style=for-the-badge&logo=facebook&logoColor=white" alt="" />
                    </a>
                  </div>
                  </div>
                  <div className="contact mb-3 d-flex justify-content-between">
                    <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                      <b>GitHub : </b>
                      </div>
                    <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                      <a href="https://www.github.com/humanshu001">
                      <img className='m-0' src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="" />
                      </a>
                      </div>
                  </div>
                  <div className="contact mb-3 d-flex justify-content-between">
                    <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                      <b>Twitter : </b>
                      </div>
                    <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                      <a href="https://twitter.com/humanshu001">
                      <img className='m-0' src="https://img.shields.io/badge/twitter-%231DA1F2.svg?style=for-the-badge&logo=twitter&logoColor=white" alt="" />
                      </a>
                      </div>
                  </div>
                  <div className="contact mb-3 d-flex justify-content-between">
                    <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                      <b>Instagram : </b>
                      </div>
                    <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                      <a href="https://instagram.com/humanshu_jaat123">
                      <img className='m-0' src="https://img.shields.io/badge/instagram-%23E4405F.svg?style=for-the-badge&logo=instagram&logoColor=white" alt="" />
                      </a>
                      </div>
                  </div>
                  <div className="contact mb-3 d-flex justify-content-between">
                    <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                      <b>Discord : </b>
                      </div>
                    <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                      <a href="https://discord.com/users/1160599417146052629">
                      <img className='m-0' src="https://img.shields.io/badge/discord-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white" alt="" />
                      </a>
                      </div>
                  </div>
                </div>
              </div>
              

              <div className="card p-3 m-3 col-md-5" style={{backgroundColor:'var(--color-2)',border:'none'}}>
              <h3 className='text-center' style={{color:'var(--color-6)',fontSize:'30px'}}>Contact Form</h3>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group formcarry-block">
                  <label style={{color:'var(--color-5)'}} htmlFor="name">Full Name</label>
                  <input className='mb-2' style={{backgroundColor:'var(--color-2)',padding:'7px',color:'var(--color-6)',borderRadius:'5px',width:'100%',border:'1px solid var(--color-6)',outline:'none'}} type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" />
                </div>
                
                <div className="form-group formcarry-block">
                  <label style={{color:'var(--color-5)'}} htmlFor="email">Your Email Address</label>
                  <input className='mb-2' style={{backgroundColor:'var(--color-2)',padding:'7px',color:'var(--color-6)',borderRadius:'5px',width:'100%',border:'1px solid var(--color-6)',outline:'none'}} type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" />
                </div>
                
                <div className="form-group formcarry-block">
                  <label style={{color:'var(--color-5)'}} htmlFor="message">Your message</label>
                  <textarea className='mb-2' style={{backgroundColor:'var(--color-2)',padding:'7px',color:'var(--color-6)',borderRadius:'5px',width:'100%',border:'1px solid var(--color-6)',outline:'none'}} value={message} onChange={(e) => setMessage(e.target.value)} id="message"></textarea>
                </div>
                
                <div className="formcarry-block d-flex justify-content-center">  
                  <button type="submit" style={{width:'100%',backgroundColor:'var(--color-1)',borderRadius:'5px',border:'none',padding:'5px 20px',color:'var(--color-6)',fontSize:'20px'}}>Send</button>
                </div>
              </form>
              </div>
            </div>
        </div>
    </>
  )
}
