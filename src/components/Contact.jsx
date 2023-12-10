import { useState,useRef } from "react"
import {motion} from 'framer-motion'
import emailjs from "@emailjs/browser"
import {styles} from '../styles'
import {EarthCanvas} from './canvas'
import {sectionWrapper} from '../hoc'
import {slideIn} from '../utils/motion'


// template_vu8ocf5 
// above is template email id

// service_k02oyf8  ==> service id

// 65LlYEy8IObBwGMBD

const Contact = () => {
  const formRef = useRef();
  const [form,setForm] = useState({
    name: '',
    email:'',
    message:'',
  });

  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    const {name,value} = e.target;
    setForm({ ...form,[name]:value })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_k02oyf8',
    'template_vu8ocf5',
    {
      from_name:form.name,
      to_name:'Uttam',
      from_email:form.email,
      to_emil:'uk3729061@gmail.com',
      message:form.message,
    },
    '65LlYEy8IObBwGMBD'

    )

    .then(()=>{
        setLoading(false),
        alert('Thank You. I will get back to you as soon as possible.');

        setForm({
          name:'',
          email:'',
          message:'',
        },(error)=>{
          setLoading(false)
          console.log(error);
          alert('Something went wrong.')
        })
    })

  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
    <motion.div 
      variants={slideIn('left','tween',0.2,1)}
      className="flex-[0.75] bg-color-100 p-8 rounded-2xl "
    >

    <p className={styles.sectionSubText}>Get in Touch</p>
    <h3 className={styles.sectionHeadText}>Contact.</h3>

    <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
    >

      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your Name</span>
        <input
          type="text"
          name ="name"
          value={form.name}
          onChange={handleChange}
          placeholder="What's your name?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-mediun"
          
        />
      </label>

      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your Email</span>
        <input
          type="email"
          name ="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What's your email?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-mediun"
          
        />
      </label>

      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your Message</span>
        <textarea
          rows='7'
          name ="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What do you want to say?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-mediun"
          
        />
      </label>

      <button
        type="submit"
        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
      >
      {loading?'sending...':'send'}

      </button>


    </form>

    </motion.div>

    <motion.div
      variants={slideIn('right','tween',0.2,1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"

     >
     <EarthCanvas/>

    </motion.div>

    </div>
  )
}

export default sectionWrapper(Contact,"contact")