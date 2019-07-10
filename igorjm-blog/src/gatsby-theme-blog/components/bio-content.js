import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Hello there, my name is Igor Melo
    {` `}
    .
    <br />
    And this is my personal blog.
    <br />
    This blog has been deployed <Styled.a href="http://igorjm-blog.surge.sh/">HERE</Styled.a> using <Styled.a href="https://surge.sh/">surge</Styled.a>
  </Fragment>
)
