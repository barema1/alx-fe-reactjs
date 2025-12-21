import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  return <div><h1>Viewing Blog Post ID: {id}</h1></div>;
};

export default BlogPost;