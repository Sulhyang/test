import styled from "styled-components";

const Article = () => {
  return (
    <ArticleArr>
      <h2>아티클</h2>
      <p>아티클내용</p>
    </ArticleArr>
  );
};

const ArticleArr = styled.article`
  background-color: red;
`;

export default Article;
