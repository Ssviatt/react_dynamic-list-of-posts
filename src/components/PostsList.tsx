import React from 'react';
import { Post } from '../types/Post';

type Props = {
  userPosts: Post[],
  setIsPostOpen: (post: Post | null) => void,
  isPostOpen: Post | null,
  setIsFormOpen: (value: boolean) => void,
};
export const PostsList: React.FC<Props> = ({
  userPosts,
  setIsPostOpen,
  isPostOpen,
  setIsFormOpen,
}) => (
  <div data-cy="PostsList">
    <p className="title">Posts:</p>

    <table className="table is-fullwidth is-striped is-hoverable is-narrow">
      <thead>
        <tr className="has-background-link-light">
          <th>#</th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {userPosts.map((post) => (
          <tr data-cy="Post" key={post.id}>
            <td data-cy="PostId">{post.id}</td>

            <td data-cy="PostTitle">{post.title}</td>

            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */}
            <td
              className="has-text-right is-vcentered"
              onClick={() => setIsFormOpen(false)}
            >
              {isPostOpen && isPostOpen.id === post.id ? (
                <button
                  type="button"
                  data-cy="PostButton"
                  className="button is-link"
                  onClick={() => setIsPostOpen(null)}
                >
                  Close
                </button>
              ) : (
                <button
                  type="button"
                  data-cy="PostButton"
                  className="button is-link is-light"
                  onClick={() => setIsPostOpen(post)}
                >
                  Open
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);