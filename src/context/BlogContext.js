import createDataContext from "./createDataContext";


// const BlogContext =  React.createContext();

// we are using context to move information. amd state is maintained by useState only.
// context doesnot manage state

const blogReducer = (state,action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter((blogPost) => (blogPost.id !== action.payload));
        case 'add_blogpost':
            return [...state,
                { 
                id: (Math.floor(Math.random()*9999)),
                title: `Blog Post #${state.length + 1}`
                 }
                ];
        default:
            return state; 
    }
};
const addBlogPost = dispatch => {
    return () =>{
        dispatch({type: 'add_blogpost'});
    };
};

const deleteBlogPost = dispatch =>{
    return (
        (id) => {
            dispatch({type: 'delete_blogpost',payload: id})
        }
    );
};

// export const BlogProvider =({children}) => {
//     const [blogPosts,dispatch] = useReducer(blogReducer,[]);
//     const addBlogPost= () => {
//         dispatch({type:'add_blogpost'});
//     };
//     return (
//         <BlogContext.Provider value={{data: blogPosts,addBlogPost}}>
//             {children}
//         </BlogContext.Provider>
//     );

// };

// useState is used in this way
// export const BlogProvider = ({children}) => {
//     const [blogPosts,setBlogPosts] = useState([]);


//     const addBlogPost = () =>{
//         setBlogPosts([...blogPosts,{title: `Blog Post #${blogPosts.length+1}`}]);
//     };


//     // const blogPosts = [
//     //     {title: 'Blog Post #1'},
//     //     {title: 'Blog Post #2'}
//     // ];
//     return <BlogContext.Provider value={{data: blogPosts,addBlogPost}}>
//         {children}
//     </BlogContext.Provider>;
// };

// export default BlogContext;



export const {Context,Provider} = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost},
    []
);