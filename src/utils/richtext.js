import React from "react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import styled from "styled-components"
import ARROW_IMAGE from "../components/assets/LUEDER-ARROW.png"
import { size } from "../index.styles";
const HEADING_TWO = styled.h4`
  font-style: initial;
  font-weight: normal;
`

const OrderedList = styled.ul`
  margin: 0;
  padding: 0.5rem 0;
  padding-top: 0;
  li {
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
  padding-top: 0;
  li {
    text-decoration: none;
    list-style-type: none;
    margin-bottom: 0;
    p {
      margin-bottom: 0;
    }
  }
`
const LinkIcon = styled.img`
width: 10%;
display: inline-flex;
margin-right: 1rem;
/* @media (max-width: ${size.tablet}) {
  mari
  } */
`

const HyperlinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  :hover {
    font-style: italic;
  }
  cursor: pointer;
`
const AssetHyperlink = styled.a`
  ${"" /* text-decoration: underline; */}
  font-weight: bold;
  display: inline-flex;
  :hover {
    font-style: italic;
  }
`

export const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_4]: (node, children) => (
      <HEADING_TWO> {children} </HEADING_TWO>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} target="__blank">
        {children}
      </a>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <OrderedList> {children} </OrderedList>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <UnorderedList> {children} </UnorderedList>
    ),
    [INLINES.ASSET_HYPERLINK]: (node, children) => (
      <HyperlinkWrapper>
        <LinkIcon src={ARROW_IMAGE} />
        <AssetHyperlink
          href={node.data.target.fields.file["en-US"].url}
          target="__blank"
        >
          {children}
        </AssetHyperlink>
      </HyperlinkWrapper>
    ),
  },
}
