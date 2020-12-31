import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
`

export const FilterArea = styled.div`
    
    width: 100%;
    display: flex;
    /* pesquisar sobre dps, e sobre responsividade
    flex-wrap: wrap;
    */
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;

    button{
        background: none;
        border: none;
    }
    button:focus{
        outline-style: none;
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Title = styled.div`

    width: 100%;
    border-bottom: 1px solid #20295F;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;

    h2{
        color: #20295F;
        position: relative;
        top: 33px;
        background: #fff;
        padding: 0 15px;
    }
`