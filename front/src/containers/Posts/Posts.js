import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {fetchPosts} from "../../store/actions/postsActions";
import './Posts.css';
import cap from '../../assets/images/cap.jpg';
import PostThumbnail from "../../components/PostThumbnail/PostThumbnail";

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className='container'>
                <div className="card text-center shadow-sm mb-5 bg-white rounded" style={{maxWidth: '700px', margin: '0 auto'}}>
                    <img src={cap} className="card-img-top" alt='cap'/>
                    <div className="card-body">
                        <h5 className="card-title">Create any thread anonymously, without registration</h5>
                        <NavLink className="btn btn-primary" to='/posts/new'>Start a New Thread</NavLink>
                    </div>
                </div>
                {this.props.posts.map(post => (
                    <div className="card mb-3" style={{maxWidth: "540px", margin: '0 auto'}} key={post.id}>
                        <div className="row no-gutters">
                            {post.image ? <div className="col-md-4">
                                <PostThumbnail image={post.image}/>
                            </div>: null}
                            <div className="col-md-8">
                                <div className="card-body">
                                    {post.author ? <p className="card-text"><small className="text-muted">{post.author}</small></p> :
                                        <p className="card-text"><small className="text-muted">anonymous</small></p>}
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);