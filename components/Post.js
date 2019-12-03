import React from "react";
import styled from "styled-components";
import { format, parseISO } from "date-fns";

// preferably set as env var
const POSTS_URL = "https://upply-interview.herokuapp.com";

const Root = styled.div`
  margin-top: 3rem;
`;

const Title = styled.h3`
  a {
    color: rgb(255, 94, 94);
  }
`;

const Content = styled.p`
  white-space: pre-line;
`;

const Footer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-end;
  font-size: 0.8rem;
`;

const Date = styled.div``;

const Post = ({ post }) => {
  return (
    <Root>
      <img src={`${POSTS_URL}/images/${post.src}`} alt={post.title} />

      <Title>
        <a href="#">{`${post.title.substring(0, 60)}${
          post.title.length > 60 ? "..." : ""
        }`}</a>
      </Title>

      <Content>{post.text}</Content>

      <Footer>
        {post.date && (
          <Date>{format(parseISO(post.date), "dd/MM/yyyy - HH:mm")}</Date>
        )}
      </Footer>

      <hr />
    </Root>
  );
};

export { Post as default, POSTS_URL };
