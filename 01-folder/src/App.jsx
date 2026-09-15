import './App.css'
import Card from "./components/Cards"
import lingImage from './assets/ling.png'


function App() {
  const profiles = [
  {
    pic: "https://i.pravatar.cc/150?img=1",
    name: "Rahul Sharma",
    tech_tag: ["React", "JavaScript", "Tailwind"],
    desc: "Frontend developer who loves building clean and responsive web applications."
  },
  {
    pic: "https://i.pravatar.cc/150?img=2",
    name: "Priya Singh",
    tech_tag: ["HTML", "CSS", "JavaScript"],
    desc: "UI developer focused on creating simple and user-friendly interfaces."
  },
  {
    pic: "https://i.pravatar.cc/150?img=3",
    name: "Arjun Mehta",
    tech_tag: ["React", "Node.js", "MongoDB"],
    desc: "Full-stack developer interested in building scalable web applications."
  },
  {
    pic: "https://i.pravatar.cc/150?img=4",
    name: "Ananya Das",
    tech_tag: ["Vue", "JavaScript", "CSS"],
    desc: "Frontend enthusiast who enjoys creating interactive and responsive websites."
  },
  {
    pic: "https://i.pravatar.cc/150?img=5",
    name: "Rohan Gupta",
    tech_tag: ["Python", "Django", "SQL"],
    desc: "Backend developer who enjoys working with APIs and database-driven applications."
  },
  {
    pic: "https://i.pravatar.cc/150?img=6",
    name: "Sneha Roy",
    tech_tag: ["React", "TypeScript", "Redux"],
    desc: "React developer passionate about building reliable and maintainable applications."
  },
  {
    pic: "https://i.pravatar.cc/150?img=7",
    name: "Vikram Patel",
    tech_tag: ["Java", "Spring", "MySQL"],
    desc: "Java developer interested in backend systems and enterprise applications."
  },
  {
    pic: "https://i.pravatar.cc/150?img=8",
    name: "Ishita Kapoor",
    tech_tag: ["Figma", "UI/UX", "CSS"],
    desc: "UI/UX designer who enjoys turning ideas into clean and engaging interfaces."
  },
  {
    pic: "https://i.pravatar.cc/150?img=9",
    name: "Aditya Verma",
    tech_tag: ["Next.js", "React", "Tailwind"],
    desc: "Web developer building modern and performant applications with React and Next.js."
  },
  {
    pic: "https://i.pravatar.cc/150?img=10",
    name: "Neha Banerjee",
    tech_tag: ["JavaScript", "Git", "React"],
    desc: "Frontend developer who enjoys learning new technologies and solving real-world problems."
  }
];
  return (
    <div className="m-0 p-10 font-sans bg-[#f2f2f2] bg-cover bg-center bg-no-repeat min-h-screen w-full"
      style={{ backgroundImage: `url(${lingImage})` }}>
  <div className='flex flex-wrap gap-3'>
      {profiles.map((elem)=>{
        return <Card pic={elem.pic} name={elem.name} tech_tag={elem.tech_tag} desc={elem.desc}/>
      })}
  </div>
  </div>
)
  
}



export default App