
import Card from './components/Card.jsx'

function App() {

const jobOpenings = [
  {
    brandLogo: "https://cdn.vectorstock.com/i/1000v/48/30/google-logo-symbol-vector-46334830.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Developer",
    pay: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://png.pngtree.com/png-clipart/20190613/original/pngtree-microsoft-logo-icon-png-image_3588810.jpg",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Developer",
    pay: "$45/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Senior Developer",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.thesun.co.uk/wp-content/uploads/2023/02/netflix-logoglowgo-op.jpg?quality=80&strip=all&w=1080&h=1080&crop=1",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Mid-Developer",
    pay: "$50/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://crystalpng.com/wp-content/uploads/2025/02/meta-logo-png.png",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Contract",
    tag2: "Senior Developer",
    pay: "$65/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
    companyName: "Infosys",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Developer",
    pay: "$30/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/009/127/845/non_2x/tcs-logo-tcs-letter-tcs-letter-logo-design-initials-tcs-logo-linked-with-circle-and-uppercase-monogram-logo-tcs-typography-for-technology-business-and-real-estate-brand-vector.jpg",
    companyName: "TCS",
    datePosted: "10 weeks ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid-Developer",
    pay: "$35/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://varindia.com/storage/news/uploads/2018/02/5fabd46375dd1.jpg",
    companyName: "Wipro",
    datePosted: "4 days ago",
    post: "Node.js Developer",
    tag1: "Part Time",
    tag2: "Junior Developer",
    pay: "$28/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://s3-alpha.figma.com/hub/file/2734964093/9f5edc36-eb4d-414a-8447-10514f2bc224-cover.png",
    companyName: "Spotify",
    datePosted: "6 days ago",
    post: "Mobile App Developer",
    tag1: "Contract",
    tag2: "Senior Developer",
    pay: "$58/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/5436/5436922.png",
    companyName: "Adobe",
    datePosted: "8 weeks ago",
    post: "Product Engineer",
    tag1: "Full Time",
    tag2: "Mid-Developer",
    pay: "$52/hr",
    location: "Bangalore, India"
  }
];


console.log(jobOpenings)

  return (
    <>
<div className="parent">
  {jobOpenings.map((elem, idx) => (
    <div key={idx}>
      <Card
        company={elem.companyName}
        date={elem.datePosted}
        post={elem.post}
        tag1={elem.tag1}
        tag2={elem.tag2}
        pay={elem.pay}
        location={elem.location}
        brandLogo={elem.brandLogo}
      />
    </div>
  ))}
</div>

    </> 
  )
}
export default App
