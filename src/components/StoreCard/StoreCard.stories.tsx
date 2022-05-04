import React, { useEffect } from 'react';

import { withKnobs, text, optionsKnob as options } from '@storybook/addon-knobs';

import StoreCard, { StoreCardContainer, StoreCardTitle, StoreCardImage, StoreCardSubtitle, StoreCardDescription, StoreCardFooter } from './StoreCard';

export default {
    title: 'Store Card Story',
    decorators: [withKnobs],
};

export function StoreCardStory(){
    const title = text('Title', 'Title');
    const subtitle = text('Subtitle', 'Subtitle');
    const description = text('Description', 'Content');
    const theme = options('Theme', { auto: 'auto', dark: 'dark', light: 'light'}, 'auto', {display: 'select'});
    document.documentElement.dataset.theme = theme;
    console.log(document.documentElement.dataset)
    return (
            <div style={{maxWidth: '100%', height: '20rem'}}>
                <StoreCard theme={theme}>
                    <StoreCardContainer>
                        <StoreCardImage src='https://vignette.wikia.nocookie.net/secretlifeofpets/images/5/59/Spotify_logo_without_text.svg.png/revision/latest/scale-to-width-down/480?cb=20170813213127' />
                        <StoreCardTitle>{title}</StoreCardTitle>
                        <StoreCardSubtitle>{subtitle}</StoreCardSubtitle>
                        <StoreCardDescription>{description}</StoreCardDescription>
                        <StoreCardFooter>Free</StoreCardFooter>
                    </StoreCardContainer>
                </StoreCard>
            </div>
        );
};