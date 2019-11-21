import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  padding: 40px 8%;

  h1 {
    text-transform: none;
    color: #333;
  }
`;

export const EventList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3%;
  list-style: none;
  width: 100%;
  margin: 0 auto;

  a {
    text-decoration: none;
  }
`;

export const Event = styled.li`
  background: #fff;
  margin-top: 16px;
  border-radius: 4px;
  border: 1px solid ${colors.border};
`;

export const EventHeader = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    border: none;
    background: none;

    svg {
      cursor: pointer;
      height: 28px;
      width: 28px;
      fill: ${colors.text};
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  .promoterImage {
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    background: linear-gradient(
      90deg,
      ${colors.primary},
      ${colors.darkPrimary}
    );
    border-radius: 50%;
  }

  div {
    border: 2px solid #fff;
  }
`;

export const Description = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  section {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
    }
  }

  .buttons {
    display: flex;
    align-items: center;

    .favoriteButton {
      border: none;
      background: none;
      svg {
        cursor: pointer;
        height: 25px;
        width: 25px;
        fill: ${colors.text};
        margin-right: 16px;
      }
    }
  }

  .date {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-right: 12px;
    margin-right: 12px;
    border-right: 1px solid #bbb;

    h3 {
      color: ${colors.darkPrimary};
      font-weight: normal;
      text-transform: uppercase;
      font-size: 0.9rem;
    }

    h2 {
      margin-top: 8px;
      font-weight: normal;
      font-size: 1.5rem;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      font-size: 1.5rem;
      color: #222;
      font-weight: normal;
    }

    span {
      max-width: 300px;
      font-size: 14px;
      color: #777;

      a {
        margin-left: 5px;
      }
    }
  }
`;
