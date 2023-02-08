import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewLetter from '../components/NewLetter';
import Products from '../components/Products';

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size 20px;
    font-weight: 600;
    margin: 20px;
`;
const Select = styled.select`
    padding:10px;
    margin-right: 20px;
`;
const Option = styled.option``;


const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>
                    color
                </Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Green</Option>
                <Option>Yellow</Option>
            </Select>
            <Select>
                <Option disabled selected>
                    Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
        </Filter>
        <Filter><FilterText>Sort Products:</FilterText></Filter>
        </FilterContainer>
        <Products/>
        <NewLetter/>
        <Footer/>


    </Container>
  )
}

export default ProductList