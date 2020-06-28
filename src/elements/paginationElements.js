import React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

export const PaginationWrapper = styled.div`
grid-column:2/ span 12;

    a:nth-child(1){
        ${props => (props.isFirts ? tw`text-gray-800` : tw`text-gray-400`)}
        pointer-events:${props => (props.isFirts ? "none" : "auto")};
        cursor: ${props => (props.isFirts ? "default" : "pointer")};

    }
    a:nth-child(2){
        ${props => (props.isLast ? tw`text-gray-800` : tw`text-gray-400`)}
        pointer-events:${props => (props.isLast ? "none" : "auto")};
        cursor: ${props => (props.isLast ? "default" : "pointer")};

    }
    
`
