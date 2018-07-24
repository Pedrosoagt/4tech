import React from 'react'
import Container from '../../layout/Container/Container'

const main = (props) => (
    <section>
        <Container>
            {props.children}
        </Container>
    </section>
)
export default main;