import React from 'react';
import './Blog.css';  // Import the CSS for the blog component

const Blog = () => {
    const blogs = [
        { title: 'Blog 1', content: 'This is the first blog.', date: '2024-12-12', author: 'John Doe' },
        { title: 'Blog 2', content: 'This is the second blog.', date: '2024-12-10', author: 'Jane Smith' },
    ];

    return (
        <div className="blog-container">
            {blogs.map((blog, idx) => (
                <div key={idx} className="blog-card">
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <p className="blog-meta">By {blog.author} | Posted on {blog.date}</p>
                    <a href={`/blog/${idx}`} className="read-more">Read more</a>
                </div>
            ))}
        </div>
    );
};

export default Blog;
