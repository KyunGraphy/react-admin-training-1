import { LayoutProps } from "react-admin";
import React from "react";

export const MyLayout = ({ children }: LayoutProps) => (
    <React.Fragment>{children}</React.Fragment>
);
