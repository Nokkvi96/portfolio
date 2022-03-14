import * as React from "react";
import { SVGProps } from "react";

const SvgGithubBranch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M160 80c0 32.8-19.7 60.1-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7c-28.3-13.2-48-40.5-48-73.3 0-44.18 35.8-80 80-80s80 35.82 80 80c0 32.8-19.7 60.1-48 73.3v6.7c0 70.7-57.3 128-128 128h-96c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80-44.18 0-80-35.8-80-80 0-32.8 19.75-61 48-73.3V153.3C19.75 140.1 0 112.8 0 80 0 35.82 35.82 0 80 0c44.2 0 80 35.82 80 80zm-80 24c13.25 0 24-10.75 24-24S93.25 56 80 56 56 66.75 56 80s10.75 24 24 24zm288-48c-13.3 0-24 10.75-24 24s10.7 24 24 24 24-10.75 24-24-10.7-24-24-24zM80 456c13.25 0 24-10.7 24-24s-10.75-24-24-24-24 10.7-24 24 10.75 24 24 24z" />
  </svg>
);

export default SvgGithubBranch;
