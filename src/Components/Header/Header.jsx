import { Image, Logo, Nav, StyledHeader } from '../styles/Header.styled';

import { Button } from '../styles/Button.styled';
import { Container } from '../styles/Container.styled';
import { Flex } from '../styles/Flex.styled';
import React from 'react'

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt="Logo" />
                    <Button>Probar Gratis</Button>
                </Nav>

                <Flex>
                    <div>
                        <h1>Cree una comunidad extraordinaria</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Beatae, quasi! Nobis incidunt officiis magnam impedit,
                            optio culpa obcaecati saepe consequuntur rem id dignissimos qui quis quae aperiam quas,
                            voluptate molestiae?
                        </p>
                        <Button $bg="#ff0099" $color="#fff">
                            Empezá Gratis
                        </Button>
                    </div>
                    <Image src='./images/ilustration.svg' />
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header;