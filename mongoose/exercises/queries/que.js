const Post = require('./post')

const postByTitle = (title) => {
    return Post.findOne({ title }).exec()
}

const postsForAuthor = (authorId) => {
}

const fullPostById = (id) => {
}

const allPostsSlim = (fieldsToSelect) => {
}

const postByContentLength = (maxContentLength, minContentLength) => {
}

const addSimilarPosts = (postId, similarPosts) => {
}

module.exports = {
    postByTitle,
    postsForAuthor,
    fullPostById,
    allPostsSlim,
    postByContentLength,
    addSimilarPosts
}
