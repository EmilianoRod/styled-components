import React from 'react'
import { StyledCard } from '../styles/StyledCard.styled'

const Card = ({ id, title, body, image }) => {
    const layoutValue = (id % 2 === 0) ? 'row-reverse' : 'row';

    return (
        <StyledCard layout={layoutValue}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <img src={`./images/${image}`} alt='card-description' />
            </div>
        </StyledCard>
    )
}

export default Card