
import './App.css';
import Index from './components/navbar';
import Blog from "./components/bloglist"
import { useState , useEffect } from 'react';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  let blogsContent = [
    {
      id: 0,
      author: "Bassam",
      title: "First Blog",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
      id: 1,
      author: "Kareem",
      title: "Second Blog",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
      id: 2,
      author: "Omar",
      title: "Third Blog",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
      id: 3,
      author: "Adham",
      title: "fourth Blog",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    
  ];
  useEffect(() => {
    setTimeout(() => {
      setBlogData(blogsContent);
      setIsLoading(false);
    }, 2000);
  }, []);

  
  return (
    <>
    
    <Index />
    <Blog data={blogsContent}isLoading={isLoading} />
  </>
  );
}

export default App;
