import { getAllPosts, PostData } from '../../lib/markdown';

export type Post = PostData;

/**
 * Returns all posts with metadata, sorted by date.
 * This keeps the data directory clean while providing a scalable way
 * to access post metadata throughout the app.
 */
export async function getPosts(): Promise<Post[]> {
  return getAllPosts();
}
