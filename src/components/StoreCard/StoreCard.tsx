import React, { FC } from 'react';

import './StoreCard.css';

export type StoreCardTitleProps = JSX.IntrinsicElements["h3"];
export type StoreCardSubitleProps = JSX.IntrinsicElements["h4"];
export type StoreCardDescriptionProps = JSX.IntrinsicElements["p"];
export type StoreCardFooterProps = JSX.IntrinsicElements["div"];
export type StoreCardImageProps = JSX.IntrinsicElements["div"] & { readonly src: string };
export type StoreCardContainerProps = JSX.IntrinsicElements["div"] & { children: React.ReactNode[] };
export type StoreCardProps = JSX.IntrinsicElements["div"] & { theme?: string };

export const StoreCardTitle: FC<StoreCardTitleProps> = ({className, children, ...props}) => {
    return <h3 {...props} className={`ms-card-title ${className}`}>{children}</h3>
}

export const StoreCardSubtitle: FC<StoreCardSubitleProps> = ({className, children, ...props}) => {
    return <h4 {...props} className={`ms-card-subtitle ${className}`}>{children}</h4>
}

export const StoreCardDescription: FC<StoreCardDescriptionProps> = ({className, children, ...props}) => {
    return <p {...props} className={`ms-card-description ${className}`}>{children}</p>
}

export const StoreCardFooter: FC<StoreCardFooterProps> = ({className, children, ...props}) => {
    return <div {...props} className={`ms-card-footer ${className}`}>{children}</div>
}

export const StoreCardImage: FC<StoreCardImageProps> = ({className, src, ...props}) => {
    return (<div {...props} className={`ms-card-image ${className}`}>
        <div className={`ms-card-image-wrapper`}>
        {
            (src !== '') ?
            <img src={src} /> :
            src
        }
        </div>
    </div>)
}

export const StoreCardContainer: FC<StoreCardContainerProps> = ({className, children, ...props}) => {
    const renderImg = (children: any[]) => {
        let img = children.filter(c => c.type.name === 'StoreCardImage');
        if(img.length > 1) throw new Error('There can only be one image in this element.');
        return img[0];
    }

    const renderFooter = (children: any[]) => {
        return children.filter(c => c.type.name === 'StoreCardFooter')[0];
    }

    const renderInfo = (children: any[]) => {
        const getTitle = () => {
            return children.filter(c => c.type.name === 'StoreCardTitle')[0];
        }
        const getSubtitle = () => {
            return children.filter(c => c.type.name === 'StoreCardSubtitle')[0];
        }
        const getDescription = () => {
            console.log(children.filter(c => c.type.name === 'StoreCardDescription')[0])
            return children.filter(c => c.type.name === 'StoreCardDescription')[0];
        }

        return <div className={`ms-card-info`}>
            { getTitle() }
            { getSubtitle() }
            { getDescription() }
        </div>
    }
    return (
        <div {...props} className={`ms-card-container ${className}`}>
        {
            renderImg(children) 
        }
        {
            renderInfo(children) 
        }
        {
            renderFooter(children)
        }
        </div>
    )
}

const StoreCard: FC<StoreCardProps> = ({className, theme, ...props}) => {
    return (<div {...props} className={`ms-card-custom ${className}`} data-theme={theme} style={{}}>
        {props.children}
        </div>);
}

StoreCardTitle.defaultProps = { className: '' }
StoreCardSubtitle.defaultProps = { className: '' }
StoreCardDescription.defaultProps = { className: '' }
StoreCardFooter.defaultProps = { className: '' }
StoreCardImage.defaultProps = {
    src: '',
    className: ''
}
StoreCardContainer.defaultProps = { className: '' }
StoreCard.defaultProps = {
    theme: 'light',
    className: '',
}

export default StoreCard;