import styled from "styled-components";

export const Wrapper = styled.footer`
  display: grid;
  gap: 40px;
  justify-items: center;
  align-items: center;
  padding: 32px 0px 16px;
  background-color: var(--color-black-dark);
  color: var(--color-grey-600);
  @media (max-width: 768px) {
    max-width: 450px;
    margin: auto;
  }
`;

export const MobileFooter = styled.div`
  font-family: "Fira Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  color: var(--color-infernal-orange);
  font-size: 14px;
  line-height: 16px;
  text-align:center;
  letter-spacing: 0.4px;
`;

export const LinkGrid = styled.section`
  display: inline-grid;
  gap: 12px;
  justify-items: center;
  align-items: center;
`;

export const Info = styled.div`
  display: grid;
  gap: 8px;
  justify-items: center;
  align-items: center;

  /* Override link colors to improve color contrast */
  & a {
    color: var(--color-white);

    :hover {
      color: var(--color-primary-600);
    }
  }
`;
