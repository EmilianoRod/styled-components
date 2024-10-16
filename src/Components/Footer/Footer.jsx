import { Container } from '../styles/Container.styled'
import { Flex } from '../styles/Flex.styled'
import React from 'react'
import SocialIcons from '../SocialIcon/SocialIcons'
import { StyledFooter } from '../styles/StyledFooter.styled'

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <img width="200px" src="./images/logo.svg" alt='logo' />
                <Flex>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </li>
                        <li>+598 99 123 456</li>
                        <li>consultas@product.com</li>
                    </ul>
                    <ul>
                        <li>Acerca de nosotros</li>
                        <li>Que hacemos?</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Metas</li>
                        <li>Blog</li>
                        <li>Contactenos</li>
                    </ul>

                    <SocialIcons />
                </Flex>
            </Container>
        </StyledFooter>

    )
}

export default Footer