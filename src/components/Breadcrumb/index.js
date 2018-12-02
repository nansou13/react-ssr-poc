import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { SCWrap } from "../Layout";
import { SCBreadcrumb, SCBreadcrumbLink } from "./styles";

const Breadcrumb = props => {
  return (
    <SCWrap>
      <SCBreadcrumb>
        {props.links.map((link, i) => (
          <Fragment key={`breadcrumb-${i}`}>
            <SCBreadcrumbLink href={link.href}>{link.label}</SCBreadcrumbLink>
            {i < props.links.length - 1 && <span>/</span>}
          </Fragment>
        ))}
      </SCBreadcrumb>
    </SCWrap>
  );
};

Breadcrumb.propTypes = {
  links: PropTypes.array.isRequired
};

export default Breadcrumb;
