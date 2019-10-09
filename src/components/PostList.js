import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Leya",
          avatar:
            "http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Princess-Leia.png"
        },
        date: "04 Out 2019",
        content: "Olá, Gostaria de saber como esta a Galaxia?",
        comments: [
          {
            id: 1,
            author: {
              name: "Chewb",
              avatar:
                "http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Chewbacca.png"
            },
            content: "Tá Tranquilo, pode chegar."
          },
          {
            id: 3,
            author: {
              name: "C3PO",
              avatar:
                "http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-C3PO.png"
            },
            content: "Vai ter evento neste fim de semana."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Lucky ",
          avatar:
            "http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Rebel-Pilot.png"
        },
        date: "09 Out 2019",
        content:
          "Preciso de indicação de conserto de Aeronaves, alguem pode ajudar?",
        comments: [
          {
            id: 2,
            author: {
              name: "Yoda",
              avatar:
                "http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Yoda.png"
            },
            content: "Precisar de ajuda é só buscar a Força."
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
