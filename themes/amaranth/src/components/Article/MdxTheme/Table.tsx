import React from "react";
import styled, { css } from "styled-components";

import * as styles from "../../../theme";

import { WidthWrapper } from "../Spacing";

const TableWrapper = styled(WidthWrapper)`
  /* Scroll the table when not enough space is available */
  overflow-x: auto;
`;

const TableStyled = styled.table`
  table-layout: fixed;

  margin: 0 auto;

  border-spacing: 5px;
`;

type TableProps = {
  children?: React.ReactNode;
};

export const Table = ({ children }: TableProps): JSX.Element => (
  <TableWrapper>
    <TableStyled>{children}</TableStyled>
  </TableWrapper>
);

export const Head = styled.thead`
  ${styles.styles.ButtonLabel}
`;

export const Row = undefined; // Default style works fine

type CellProps = {
  align?: string;
};

const SharedCellCSS = css<CellProps>`
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 4px;

  text-align: ${({ align }) => align};
`;

export const HeadCell = styled.th<CellProps>`
  ${SharedCellCSS}

  margin-right: 4px;
  margin-left: 4px;
  color: var(--color-crimson);

  border-bottom: 2px solid var(--color-crimson);
`;

export const BodyCell = styled.td<CellProps>`
  ${SharedCellCSS}

  padding-right: 16px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 4px;

  border-bottom: 1px solid var(--color-crimson);

  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const Body = styled.tbody`
  ${styles.styles.Body};
`;
