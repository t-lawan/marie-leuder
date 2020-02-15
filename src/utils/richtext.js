import React from "react"
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import styled from 'styled-components';

const HEADING_TWO = styled.h4`
  font-style: initial;
  font-weight: normal;
`

const OrderedList = styled.ul`
  margin: 0;
  padding: 0.5rem 0;
  li {
    &:first-of-type {
      font-weight: bold;
    }
    text-decoration: none;
    list-style-type: none;
    margin-bottom: 0;
    p {
      margin-bottom: 0;
    }
  }
`

const UnorderedList = styled.ul`
  margin: 0;
  padding: 0.5rem 0;
  li {
    &:first-of-type {
      /* font-weight: bold; */
    }
    text-decoration: none;
    list-style-type: none;
    margin-bottom: 0;
    p {
      margin-bottom: 0;
    }
  }
`

export const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_4]: (node, children) => <HEADING_TWO> {children} </HEADING_TWO>,
      [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} target="__blank">{children}</a>,
      [BLOCKS.OL_LIST]: (node, children) => <OrderedList> {children} </OrderedList>,
      [BLOCKS.UL_LIST]: (node, children) => <UnorderedList> {children} </UnorderedList>
    }
  };