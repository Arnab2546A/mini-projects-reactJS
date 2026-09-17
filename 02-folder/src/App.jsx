
import Section1 from "./components/Section1"
const App = () => {
  const profiles = [
  {
    name: "Arjun Mehta",
    description:
      "Passionate about building clean and interactive web experiences using React and modern frontend technologies.",
    status: "Available",
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },

  {
    name: "Priya Sharma",
    description:
      "Creates simple, intuitive and visually engaging interfaces with a strong focus on user experience.",
    status: "Available",
    color: "pink",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },

  {
    name: "Rohan Gupta",
    description:
      "Enjoys developing complete web applications and working with both frontend and backend technologies.",
    status: "Busy",
    color: "green",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },

  {
    name: "Ananya Das",
    description:
      "Transforms ideas into useful digital products by combining design thinking, research and creativity.",
    status: "Available",
    color: "purple",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  },

  {
    name: "Vikram Patel",
    description:
      "Works on scalable APIs, databases and backend systems while focusing on performance and reliability.",
    status: "Offline",
    color: "orange",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },

  {
    name: "Sneha Roy",
    description:
      "Builds modern mobile applications with a focus on smooth performance and intuitive user interfaces.",
    status: "Available",
    color: "yellow",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
];
  return (
    <div>
        <Section1 profiles={profiles}/>
    </div>
  )
}

export default App