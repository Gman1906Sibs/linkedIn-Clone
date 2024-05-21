import React, { useState } from 'react';
import './PostModal.css';
import User from '../images/user.svg';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PanoramaIcon from '@material-ui/icons/Panorama';
import CommentIcon from '@material-ui/icons/Comment';
import PublicIcon from '@material-ui/icons/Public';
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase";
import { postArticleAPI } from "../actions";

function PostModal(props) {
    const [editorText, setEditorText] = useState("");
    const [shareImage, setShareImage] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] = useState(""); 

    const handleChange = (e) => {
        const image = e.target.files[0];

        if (image === "" || image === undefined) {
            alert(`not an image, the file ia a ${typeof image}`);
            return;
        }

        setShareImage(image);
    };

    const switchAssetArea = (area) => {
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);
    };

    const postArticle = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }

        const payload = {
            image: shareImage,
            video: videoLink,
            user: props.user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now(),
        };

        props.postArticle(payload);
        reset(e);
    };

    const reset = (e) => {
        setEditorText("");
        setShareImage("");
        setVideoLink("");
        setAssetArea("")
        props.handleClick(e)
    };

    return (
        <>
        { props.showModal === "open" &&

        <div className="postModal">
            <div className="postmodal__content">
                <div className="postModal__header">
                    <p>Create a post</p>
                    <button onClick={(event) => reset(event)}>
                        <span>✕</span>
                    </button>
                </div>
                <div className="postModal__sharedContent">
                    <div className="postModal__userInfo">
                        {props.user.photoURL ? <img src={props.user.photoURL} />
                        :
                        <img src={User} alt=""/>
                        }
                        <div className="postModal__view">
                            <span>{props.user.displayName}</span>
                            <button className="postModal__viewViewer">
                                <PublicIcon className="postModal__viewIcon"/>
                                <span>Anyone</span>
                            </button>    
                        </div>
                    </div>
                    <div className="postModal__textEditor">
                        <textarea 
                            value={editorText} 
                            onChange={(e) => setEditorText(e.target.value)}
                            placeholder="What do you want to talk about?"
                            autoFocus={true} 
                        />
                    </div>
                    { assetArea === "image" ? (
                    <div className="postModal__uploadImage">
                        <input 
                            type="file"
                            accept = "image/gif, image/jpeg, image/png, image/jpg"
                            name="image"
                            id="file"
                            style={{ display: "none" }}
                            onChange={handleChange}
                        />
                        <span>
                            <label htmlFor="file">
                                Click here to select an image to share
                            </label>
                        </span>
                        {shareImage && (
                            <img src={URL.createObjectURL(shareImage)}/>
                        )}
                    </div> 
                          )  : ( assetArea === 'media' && (
                        <div className="postModal__uploadImage">
                            <input 
                                type="text"
                                placeholder="Please input a video link"
                                onChange={(e) => setVideoLink(e.target.value)}
                            />
                            {videoLink && (
                                <ReactPlayer width={"100%"} url={videoLink} />
                            )}
                        </div>
                            )
                    
                          )}
                    <div className="postModal__shareConent">
                        <div className="postModal__attachAssets">
                            
                            <button 
                                className="postModal__assetButton" 
                                onClick={() => switchAssetArea("image")}
                            >
                                <PanoramaIcon />
                            </button>
                            <button 
                                className="postModal__assetButton"
                                onClick={() => switchAssetArea("media")}
                            >
                                <YouTubeIcon />
                            </button>
                        </div>
                        <div className="postModal__shareComment">
                            <button>
                                <CommentIcon className="postModal__shareCommentIcon"/>
                                <span>Anyone</span>
                            </button>
                        </div> 
                        <button 
                            className="postModal__postBTN" 
                            disabled={!editorText ? true : false}
                            onClick={(event) => postArticle(event)}
                            >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
