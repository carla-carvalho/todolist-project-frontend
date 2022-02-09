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

export const List = styled.div`
    display: flex;
    list-style: none;
    font-weight: 700;  
    font-size: 0.9rem;
    align-items: center;

    a{
        color: #484848;
        font-weight: 700;
        padding: 0 1rem;
    }


    ul{
            display:none;
          
        }

        li{
            position: relative;
            float:left;
            list-style: none;
        }

        li  ul{
            position:absolute;
            display:none;
            }

            li  ul li:hover{
                color: #000;
            }

            li:hover ul, li.over ul{display:block;}

`