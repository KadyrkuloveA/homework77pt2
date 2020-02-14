import axiosPosts from "../../axiosPosts";


export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';

export const fetchPostsSuccess = posts => ({type: FETCH_POSTS_SUCCESS, posts});
export const createPostSuccess = () => ({type: CREATE_POST_SUCCESS});

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
            const response = await axiosPosts.get('/posts');
            dispatch(fetchPostsSuccess(response.data));
        } catch (e) {
            console.error(e);
        }
    };
};

export const createPost = postData => {
    return async (dispatch) => {
        try {
            await axiosPosts.post('/posts', postData);
            dispatch(createPostSuccess());
            dispatch(fetchPosts());
        } catch (e) {
            console.error(e);
        }
    };
};