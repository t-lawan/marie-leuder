import React from "react"
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import styled from 'styled-components';

const HEADING_TWO = styled.h4`
  font-style: initial;
  font-weight: normal;
`
export const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_4]: (node, children) => <HEADING_TWO> {children} </HEADING_TWO>,
      [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} target="__blank">{children}</a>
    }
  };