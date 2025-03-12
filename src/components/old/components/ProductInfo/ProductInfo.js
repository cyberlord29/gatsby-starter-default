import React from 'react';
import { ProductInfoContainer, ProductImage, ProductCard, ProductTitle, ProductDescription } from './ProductInfo.elements';
import { WhiteButton } from '../../globalStyles';
import dashboard from '../../img/dashboard.png'
import progress from '../../img/progress.png'

const ProductInfo = (props) => {
    const productInfo = props.data;
    const [firstProduct, secondProduct] = productInfo;
    return(
        <div>
        <ProductInfoContainer>
            <ProductImage>
            <img
              className="image"
              src={dashboard}
              height={425}
            >
            </img>
            </ProductImage>
            <ProductCard>
                <ProductTitle>
                    {firstProduct.title}
                </ProductTitle>
                <ProductDescription>
                    {firstProduct.description}
                </ProductDescription>
                <WhiteButton>
                    {firstProduct.buttonText}
                </WhiteButton>
            </ProductCard>
        </ProductInfoContainer>
        <ProductInfoContainer>
            <ProductImage>
                <img
                    className="image"
                    src={progress}
                    height={450}
                >
                </img>
            </ProductImage>
            <ProductCard>
                <ProductTitle>
                   {secondProduct.title}
                </ProductTitle>
                <ProductDescription>
                    {secondProduct.description}
                </ProductDescription>
                <WhiteButton>
                    {secondProduct.buttonText}
                </WhiteButton>
            </ProductCard>
        </ProductInfoContainer>
        </div>

    );
}

export default ProductInfo;