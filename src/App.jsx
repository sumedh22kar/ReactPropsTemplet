import {Bookmark} from 'lucide-react'
import Card from './components/Card'
const App = () =>{

  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-aa4QAmLM93FQ0PPNQ0kNuxwSr3C84c8GTgI6LotBg&s=10",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-DN8JuBVqnVzi9ib4zpDiRwE9ab9KziRGVb2OW2lIQ&s=10",
    name: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYP_30XlcDi6iBfOhFFePungB8hP8g7WM4Yl-4BKLsw&s=10",
    name: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPd6pKSGfqhrwmLLsOBldVxbIe11zF38ZpM6Zlyvl3w&s=10",
    name: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYd6r-ePzB7eRYUs8NUTxn-TlP8nrLYRq7B44ZgxTlA&s",
    name: "Meta",
    datePosted: "4 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$80/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPND1gzuX-XconUqe_R0cziing8DUo0TcRyJFTjV53g&s=10",
    name: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaZ_jjj9NNyfN-01u5dn5mMIDkLKgsTrdAnUC4FNTAwg&s=10",
    name: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhxIOBdwbEGXJ4d1Vp-TNJu_0_s7ur-TqW553Idjlxw&s=10",
    name: "Adobe",
    datePosted: "3 weeks ago",
    post: "Java Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYtbhelCze2StCuHjQmZayKFMLu74faF2RSk9ADFv7w&s=10",
    name: "Uber",
    datePosted: "12 days ago",
    post: "Java Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROyhZNhigX_PWUWcXEKyKkj0NLpwiwb0rJdmaw2fsCbw&s=10",
    name: "Tesla",
    datePosted: "8 days ago",
    post: "Software Engineer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$88/hr",
    location: "Pune, India"
  }
];
  return (
    <div className="parent">
     {jobOpenings.map(function(elem,index){
      return <Card 
      key={index}
      logo={elem.brandLogo}
      company={elem.name}
      date={elem.datePosted}
      post={elem.post}
      tag1={elem.tag1}
      tag2={elem.tag2}
      pay={elem.pay}
      location={elem.location}
       />
     })}
       
    </div>
  )
}
export default App