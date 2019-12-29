import React from "react"
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

export const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>
    }
  };