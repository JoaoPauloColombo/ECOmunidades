import React from 'react';
import styled from 'styled-components';

const QuoteContainer = styled.section`
    padding: 20px;
    text-align: center;
    font-size: 1.3em;
    font-weight: bold;
`;

function QuoteSection(){
    return(
        <QuoteContainer>
            <blockquote>
                "Isso é o que ela disse! - Michael Scott"
            </blockquote>
        </QuoteContainer>
    );
}

export default QuoteSection;