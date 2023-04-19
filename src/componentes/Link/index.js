import React from 'react'
import NextLink from 'next/link'
import LinkEstilizado from '../LinkEstilizado'

export default function Link({ children, href, ...props }) {
    return (
        <NextLink {...props} href={href} passHref>
            <LinkEstilizado {...props}>{children}</LinkEstilizado>
        </NextLink>
    )
}
