import React from 'react';
import PostModal from "./PostModal";
import './HomeMiddleContent.css';
import UserIcon from '../images/user.svg';
import PhotoIcon from '../images/user.svg';

function HomeMiddleContent() {
    return (
        <div className='HomeMiddleContent'>
            <div className="postBox">
                <div className="postBox__userPost">
                    <img src={UserIcon} alt=""/>
                    <button><span>Start a post</span></button>
                </div>
                <div className="postBox__attach">
                    <div className="attach">
                        <img src="https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png" alt=""/>
                        <span>Photo</span> 
                    </div>
                    <div className="attach">
                        <img src="https://img.favpng.com/18/16/25/youtube-play-button-computer-icons-png-favpng-w5VfgMmeXRJNYDnPj42tt7Mpj.jpg" alt=""/>
                        <span>Video</span> 
                    </div>
                    <div className="attach">
                        <img src="https://image.flaticon.com/icons/png/512/243/243925.png" alt=""/>
                        <span>Event</span> 
                    </div>
                    <div className="attach">
                        <img src="data:image/jpeg;base64,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" alt=""/>
                        <span>Write article</span> 
                    </div>
                </div>
            </div>

            <div className="article">
                <div className="article__header">
                    <img src={UserIcon} alt=""/>
                    <div className="article__hearderInfo">
                        <p>Title</p>
                        <span>Followers</span>
                        <span>Date</span>
                    </div>
                    <div className="article__headerOptions">
                        <button>
                            • • •
                        </button>
                    </div>
                </div>
                <div className="article__image">
                    <img src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80" alt=""/>
                </div>
                <div className="article__socialCounts">
                    <div className="article__icons">
                        <button>
                            <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt=""/>
                            <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt=""/>
                            <span>75</span>
                        </button>
                        <span>・</span>
                        <a>
                            <span>5 comments</span>
                        </a>                       
                    </div>
                    <div className="article__underline" /> 
                    <div className="article__buttons">
                        <button className="article__like">
                            <img  src="https://cdn.iconscout.com/icon/free/png-256/like-2036553-1740207.png" alt=""/>
                            <span>Like</span>
                        </button>
                        <button className="article__comment">
                            <img  src="https://static.vecteezy.com/system/resources/previews/002/238/503/original/comment-icon-free-vector.jpg" alt=""/>
                            <span>Comment</span>
                        </button>
                        <button className="article__share">
                            <img  src="https://pics.freeicons.io/uploads/icons/png/11930121041540882615-512.png" alt=""/>
                            <span>Share</span>
                        </button>
                        <button className="article__send">
                            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTe7WB32kjVbNJ4o4NSbOlxMH8nWdeVpA7sEQ_gIBJlrHAOWWrB4qbh1Qwx_4nx9Dle9Q&usqp=CAU" alt=""/>
                            <span>Send</span>
                        </button>
                    </div>
                </div>
            </div>
            <PostModal />
        </div>
    )
}

export default HomeMiddleContent
