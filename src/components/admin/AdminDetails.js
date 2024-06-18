import React, { useRef } from 'react'
import add from '../../assets/images/add.svg'

export default function AdminDetails() {

  const [hobbies, setHobbies] = React.useState([])

  const data = require('../../data/my_details.json')

  React.useEffect(() => {
    setHobbies(data.hobbies)
  })

  const hobb = useRef()
  const addHobby = () => {
    if(hobb.current.value.trim()!==''){
      setHobbies([...hobbies, hobb.current.value])
      data.hobbies = [...hobbies, hobb.current.value]
      hobb.current.value = ''
    }
  }

  const addBtn = useRef()

  React.useEffect(() => {
    addBtn.current.addEventListener('click', (e) => {
      e.preventDefault()
    })
  }, [])

  

  return (
    <div className='' style={{backgroundColor:'var(--color-1)',width:'100%',borderRadius:'10px',margin:'15px',marginLeft:0}}>
        <h1 className='text-center my-3' style={{ color: 'var(--color-5)', fontSize: '60px', fontWeight: '900' }}>My Details</h1>

        <div className='container-fluid d-flex justify-content-evenly' style={{color:'var(--color-5)'}}>
          <form className='col-md-5'>
            <label htmlFor="">About</label><br />
            <textarea name="" id="" style={{backgroundColor:'var(--color-2)',padding:'7px',color:'var(--color-5)',borderRadius:'5px',width:'100%',border:'1px solid var(--color-5)',outline:'none',height:'200px'}} value={data.about}></textarea>
            <br />
            <label htmlFor="">Hobbies</label>
            <div className="input-group">
              <input type="text" ref={hobb} className='form-control' style={{backgroundColor:'var(--color-2)',padding:'7px',color:'var(--color-5)',borderRadius:'5px 0 0 5px',border:'1px solid var(--color-5)',outline:'none'}} />
              <button className='btn btn-success' ref={addBtn} onClick={addHobby} style={{border:'1px solid var(--color-5)',backgroundColor:'var(--color-5)'}}>
                <img style={{width:'30px'}} src={add} alt="" />
              </button>
            </div>
            <div className="hobbies my-3 d-flex justify-content-center flex-wrap" style={{backgroundColor:'var(--color-5)',width:'100%',borderRadius:'7px'}}>
              {
                hobbies.map((hobby, index) => {
                  return (
                    <div key={index} className='hobby' style={{backgroundColor:'var(--color-2)',padding:'7px',color:'var(--color-5)',borderRadius:'5px',margin:'5px',display:'inline-block'}}>
                      {hobby}
                    </div>
                  )
                })
              }
            </div>

          </form>
          <div className="json-view col-md-4">
            <pre  style={{overflowX:'hidden',overflowY:'scroll',textWrap:'wrap',height:'70vh',backgroundColor:'var(--color-2)',padding:'20px',borderRadius:'10px'}}>
              {JSON.stringify(data, null, 4)}
            </pre>  
          </div>
        </div>
    </div>
  )
}
