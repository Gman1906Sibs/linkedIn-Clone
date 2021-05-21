import React from 'react';
import './PostModal.css';
import User from '../images/user.svg';

function PostModal() {
    return (
        <div className="postModal">
            <div className="postmodal__content">
                <div className="postModal__header">
                    <h2>Create a post</h2>
                    <button>
                        <span>✕</span>
                    </button>
                </div>
                <div className="postModal__sharedContent">
                    <div className="postModal__userInfo">
                        <img src={User} alt=""/>
                        <span>Name</span>
                    </div>
                    <div className="postModal__shareConent">
                        <div className="postModal__assetButton">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostModal
