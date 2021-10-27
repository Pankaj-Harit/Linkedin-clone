import React ,{ useState , useEffect }from 'react'
import './Feed.css'
import InputOption from './InputOption';
import Post from './Post';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { onSnapshot ,addDoc } from './config/firebasedependencies'
import { getCollection , orderedList } from './Firebase';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';


function Feed() {
    const [input,setinput] = useState("");
    const [posts, setposts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() =>{
        onSnapshot((orderedList), (snapshot) =>
        {
                setposts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(), 
                    }))
                )
        }); 
        
    },[]);

    const sendPost = (e) =>{
        e.preventDefault();

        addDoc(getCollection , {
            name: user.displayName,
            description:   "This is a test",
            message: input,
            photoUrl: user.photoUrl || "" ,
            CreatedAt: new Date(),
        })
        setinput("");
    }

    return (
        <div className="feed">
            <div className="feed_inputcontainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" value={input} onChange={(e) =>{setinput(e.target.value)}}/>
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>

                <div className="feed_inputoptions">
                    <InputOption 
                        Icon={ImageIcon} 
                        title="Photos" 
                        color="#70B5F9" 
                    />
                    <InputOption 
                        Icon={SubscriptionsIcon} 
                        title="Video" 
                        color="#E7A33E" 
                    />
                    <InputOption 
                        Icon={EventNoteIcon} 
                        title="Event" 
                        color="#C0CBCD" 
                    />
                    <InputOption 
                        Icon={CalendarViewDayIcon} 
                        title="write article" 
                        color="#7FC15E" 
                    />
                </div>
            </div>
            <FlipMove>
            {
                posts.map(({id, data}) =>{
                    return(
                        <Post 
                        key={id}
                        name= {data.name}
                        description={data.description}
                        message={data.message}
                        photoUrl={data.photoUrl}
                        />  
                    )})
            }    
            </FlipMove>

        </div>
    )
}

export default Feed
