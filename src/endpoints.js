export const END_POINTS = {
    create_post: `/posts`,
    own_posts: `/posts/me`,
    following_posts: `/posts/following`,
    getUserPosts({ username }) {
        return `/posts/user/${username}`;
    },
    follow({ username }) {
        return `/users/follow/${username}`;
    },
    unfollow({ username }) {
        return `/users/unfollow/${username}`;
    },
    products: `/products`,
    cart: `/cart`,
    deleteCartItem({ itemId }) {
        return `/cart/${itemId}`;
    },
    recommended: `/recommended`,
}