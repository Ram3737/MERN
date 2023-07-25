const posts = require("../models/posts");

exports.getPosts = (req, res, next) => {
  posts
    .find()
    .then((posts) => {
      if (posts) {
        res.status(200).json({
          posts: posts,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// exports.createPost = (req, res, next) => {
//   const title = req.body.title;
//   const content = req.body.content;
//   // Create post in db
//   res.status(201).json({
//     message: 'Post created successfully!',
//     post: { id: new Date().toISOString(), title: title, content: content }
//   });
// };
