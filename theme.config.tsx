import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg
        height="40"
        width="75"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 512 209"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m156.165577 152.930719h-20.859259l18.070588-36.587364h.223094zm.892375 16.620479 1.227015 14.50109h22.97865l-7.696732-84.440959h-34.244881l-43.1686271 84.440959h23.4248371l7.250544-14.50109zm56.331155-22.532462h3.457952l16.508932-22.197821h21.082353l-22.755555 28.332898 14.054902 30.675381h-22.532462l-9.146841-23.871024h-3.234859l-5.131154 23.871024h-19.520697l17.847494-84.1063182h19.40915zm65.924183 12.493247c6.35817 0 10.59695.446187 9.369934 5.354248-1.450109 6.35817-4.015686 7.250545-12.158605 7.250545-3.011765 0-8.47756 0-7.027451-6.35817 1.115468-5.354249 5.131154-6.246623 9.816122-6.246623zm5.354248 24.317211h19.186057l7.696732-36.810458c4.461873-20.413072-3.569499-22.755555-23.201743-22.755555-13.831808 0-27.217429-.223094-31.233116 18.293682h19.186057c1.227015-5.354249 4.461874-6.35817 9.146841-6.35817 8.47756 0 8.254466 3.569499 6.804357 8.923747l-1.896296 9.369935h-.892375c-.669281-6.804358-9.146841-6.581264-14.724183-6.581264-14.054902 0-22.309368 4.461874-25.321133 18.516776-3.234858 15.058823 4.015687 18.293682 17.401308 18.293682 6.804357 0 15.728104-1.450109 18.962963-9.369935h.669281zm58.450545-59.008279-1.673203 8.47756h.669281c3.792593-7.027451 11.489325-8.923747 18.070588-8.923747 8.47756 0 16.62048 1.450109 15.505011 11.489324h.892375c2.788671-8.47756 11.489325-11.489324 18.962963-11.489324 13.608715 0 19.40915 5.577342 16.397386 19.186056l-8.700654 40.379957h-19.186057l7.250545-34.24488c.892375-6.35817 1.896296-10.820044-5.354248-10.820044-7.250545 0-10.039216 4.908061-11.266231 11.266231l-7.027451 33.575599h-19.186057l7.473638-35.694989c.892375-5.354248 1.450109-9.146841-5.354248-9.146841-7.919826 0-10.373856 4.23878-11.712418 11.266231l-7.027451 33.575599h-19.186057l12.71634-59.119826h17.847495v.223094zm99.165141 34.691068c6.35817 0 10.59695.446187 9.369935 5.354248-1.227015 6.35817-4.015686 7.250545-12.158606 7.250545-2.788671 0-8.47756 0-7.027451-6.35817 1.115469-5.354249 4.908061-6.246623 9.816122-6.246623zm5.131155 24.317211h19.186057l7.696732-36.810458c4.461873-20.413072-3.569499-22.755555-23.201743-22.755555-13.831808 0-27.217429-.223094-31.233116 18.293682h19.186057c1.227015-5.354249 4.461874-6.35817 9.146841-6.35817 8.47756 0 8.254466 3.569499 6.804357 8.923747l-1.896296 9.369935h-.892375c-.669281-6.804358-9.146841-6.581264-14.724183-6.581264-14.054902 0-22.309368 4.461874-25.321133 18.516776-3.234858 15.058823 4.015687 18.293682 17.401308 18.293682 6.804357 0 15.728104-1.450109 18.962962-9.369935h.669282zm47.407407 0h-19.186056l12.381699-59.119826h19.186057zm16.843573-75.182571c0 5.911983-4.908061 10.820044-10.820043 10.820044-5.911983 0-10.820044-4.908061-10.820044-10.820044 0-6.135076 4.908061-10.8200435 10.820044-10.8200435 5.911982 0 10.820043 4.6849675 10.820043 10.8200435z"
          fill="#ffffff"
        />
        <path
          d="m106.192593 204.242266c-42.9455342-13.162527-74.0671028-52.761656-74.0671028-99.388235 0-47.4074079 31.9023965-87.2296301 75.5172118-100.16906368 4.461873-1.22701525 3.234858-4.23877996-2.11939-4.23877996-57.8928109 0-105.07712464 46.62657954-105.07712464 104.07320264 0 57.446623 46.84967324 104.073203 105.07712464 104.073203 5.354248.33464 5.577342-2.677125.669281-4.350327zm-54.1002183-75.294118c-.2230937-2.788671-.4461873-5.577342-.4461873-8.47756 0-45.7342046 37.0335512-82.7677558 82.7677556-82.7677558 43.168628 0 56.331155 19.1860567 57.669717 18.0705883 1.673203-1.450109-15.728104-39.5991286-66.37037-39.5991286-45.734205 0-82.7677562 37.0335512-82.7677562 82.767756 0 10.5969501 2.1193899 20.6361661 5.577342 30.0061001 1.4501089 4.015686 3.7925926 4.015686 3.5694989 0zm34.4679739-59.5660129c21.3054464-9.3699347 48.5228754-9.5930283 75.0710244-.4461874 17.847494 6.3581699 28.109803 15.0588235 29.113725 14.724183 1.450109-.669281-10.373856-19.1860566-31.679303-27.2174292-25.76732-9.5930283-53.430937-4.6849673-73.6209148 11.266231-2.2309368 1.6732026-1.5616558 2.9002178 1.1154684 1.6732026z"
          fill="#ffffff"
        />
      </svg>
    </>
  ),
  head: (
    <head>
      <title>Terraform Training</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Jaime Escalona" />
      <meta
        property="og:url"
        content="https://github.com/jaescalo/terraform-training-docs"
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="675" />
      <meta property="og:title" content="Terraform Training" />
      <meta
        property="og:description"
        content="A Terraform Training by Akamai Advanced Solutions Team"
      />
      <link rel="icon" href="/favicon.ico"></link>
    </head>
  ),
  project: {
    link: 'https://github.com/jaescalo/terraform-training-docs'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  docsRepositoryBase: 'https://github.com/jaescalo/terraform-training-docs',
  footer: {
    text: '2024 Advanced Solutions Team - Akamai Technical Documentation'
  }
};

export default config;
