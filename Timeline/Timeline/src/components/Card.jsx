import Moment from 'moment';
import { Heart, MessageCircle, Share2, Plus } from "lucide-react";
import { useState } from "react";
import api from '../services/api';

const Card = ({ CardDetails }) => {

    // Like button
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);

    // Comment field
    const [open, setOpen] = useState(false);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);  

    // Submit comment
    const handleSubmit = async () => {
        if (!comment.trim()) return;
        try {
            const res = await api.put(`/timeline/${CardDetails.id}`, {
                comment: comment
            });

            setComments(prev => [...prev, comment]);
            setComment("");
            setOpen(false);

        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="card mb-2 mx-auto mt-3 col-4 position-relative p-3 d-flex justify-content-center align-item-center " style={{ width: "300px" }}>
            {/* Avatar */}
            <img
                src={CardDetails.avatar}
                alt="avatar"
                className="rounded-circle position-absolute"
                style={{ height: "50px", width: "50px", top: "15px" }}
            />

            {/* Name */}
            <div className="fw-bold ms-5">
                {CardDetails.name}
            </div>

            {/* Mobile */}
            <div className="ms-5 small">
                {CardDetails.mobile}
            </div>

            {/* City */}
            <div className="ms-5 text-secondary">
                {CardDetails.city}
            </div>

            {/* Image */}
            <img
                src={CardDetails.image}
                alt="card"
                className="card-img-top mt-3"
                style={{ height: "250px", width: "250px" }}
            />

            {/* Card Body */}
            <div className="card-body">
                {/* Icons */}
                <div className="d-flex gap-3">
                    <Heart
                        size={24}
                        style={{ cursor: "pointer" }}
                        color={like ? "red" : "black"}
                        fill={like ? "red" : "none"}
                        onClick={() => {
                            setLike(!like),
                                setCount(count => count ? count - 1 : count + 1)
                            console.log(count);
                        }}
                    />

                    <MessageCircle size={24} style={{ cursor: "pointer" }}
                        onClick={() => setOpen(true)}
                    />

                    {/* Input field */}
                    {open && (
                        <div>
                            <input
                                type="text"
                                value={comment}
                                placeholder="Write a comment..."
                                onChange={(element) => setComment(element.target.value)}
                            />
                            <button onClick={handleSubmit} >save</button>

                        </div>
                    )}

                    <Share2 size={24} />
                </div>

                <div>
                    <p>like: {count}</p>
                    {comments.map((cmt, index) => (
                        <p key={index} className="small mb-1">
                            Comment: {cmt}
                        </p>
                    ))}
                </div>

                {/* Caption */}
                <div className="card-text">
                    {CardDetails.caption}
                </div>

                {/* Date */}
                <div className="text-muted small mt-2">
                    {Moment(CardDetails.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </div>
            </div>
        </div>
    );
};

export default Card;