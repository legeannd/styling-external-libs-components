import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  table {
    background: purple;
    border-radius: 20px;
  }

  th {
    span {
      color: white;
    }
  }

  [class*="is-range-selection"] {
    span {
      color: white;
    }
  }

  [class*="is-selection-start"],
  [class*="is-selection-end"] {
    span {
      color: cyan;
      background: orange;
      border-radius: 50%;
    }
  }
`;
