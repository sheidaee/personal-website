import styled from 'styled-components';

export const PostFormStyle = styled.div`
  padding: 0 12rem;
  margin: 0 auto;

  h1 {
    padding: 3rem;
    text-align: center;
    margin-bottom: 2rem;

    span {
      border-bottom: 0.2rem solid ${props => props.theme.headerBorder};
      padding-bottom: 2rem;
    }
  }

  .content {
    box-shadow: 0 0 0.5rem 0.3rem rgba(0, 0, 0, 0.05);
    background: rgba(0, 0, 0, 0.02);
    border: 0.1rem solid #eee;
    padding: 2rem;
    margin-bottom: 4rem;
    overflow: hidden;
    p {
      margin-bottom: 2rem;
      font-size: 1.7rem;
      font-weight: 700;
    }

    .selectImage {
      background-color: ${props => props.theme.green};
      :hover {
        background-color: #12b98e;
      }
    }

    .operation-bar {
      text-align: ${props => props.theme.themeNotAlign};
    }

    .previewImageContainer {
      position: relative;
      .post-image {
        margin: 3rem 0;
        border: 0.4rem solid ${props => props.theme.blue};
        border-radius: 0.6rem;
        max-width: 100%;
      }

      button.close {
        position: absolute;
        right: -1.6rem;
        top: 1.6rem;
        padding: 0;
        border-radius: 50%;
        width: 3.6rem;
        height: 3.6rem;
      }
    }
  }
`;
