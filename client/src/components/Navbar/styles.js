import styled from 'styled-components';

export const Container = styled.div`
    color: #484848;
    border-bottom: 1px solid #dadada;
    display:flex;
    align-items: center;
    justify-content: space-between;


`

export const Logo = styled.a`
    background-color: white;


img{
    width: 6rem;
    margin: 0 1rem;
}
`

export const Search = styled.div`
    input{ 
        background-color:#8888;
    border:solid 1px;
    border-radius:15px;
    width:300px;
    height: 1.5rem;
    border-color: #8888;
    }



`

export const List = styled.ul`
    display: flex;
    list-style: none;

    a{
        text-decoration: none;
        color: #484848;
        font-weight: 700;
        padding: 0 1rem;
        font-size: 0.9rem;
        display:flex;
        align-items: center;
       
        ul{
            display:none;
          
        }

        span{
            padding: 0 0.2rem;
        }

        &:hover{
            color: #897eb3;
            cursor: pointer;
            transition: all 200ms ease
        }
    }
    
`