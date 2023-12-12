import styled from 'styled-components'

export const Container = styled.div`
position: relative;
  height: 100vh;
  width: 100vw;
`

export const Search = styled.div`
  height: 20rem;
  width: 100vw;
  h1{
    margin-bottom: 25px;
    color: #fff;
    font-weight: 400;
    text-align: center;
  }
`

export const Background = styled.div`
  left: 0;
  width: 100vw;
  height: 40rem;
  top: 0;
  position: absolute;
  img{
    height: 100%;
    width: 100%;
  }
`

export const Input = styled.input`
  padding: 12px;
  font-size: 14px;
  padding-left: 20px;
  outline: none;
  width: 400px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: none;
  &::placeholder{
   font-size: 14px;
  }
  @media(max-width: 425px){
   width: 80vw;
  }
`

export const Button = styled.button`
  cursor: pointer;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 9px;
  border: none;
  background-color: #000;

  img{
    height: 20px;
    width: 20px;
  }
`

export const DivForm = styled.div`
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 5;

  @media(max-width: 425px){
    top: 15%;
  }
`

export const Form = styled.form`
 display: flex;
 align-items: center;
 margin: 0 auto;
`

export const Informations = styled.div`
  padding: 15px;
  border-radius: 20px;
  width: 45rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(1, 28% 30% 22% 20%);
  grid-template-rows: repeat(1, 1fr);
  background-color: white;

  @media(max-width: 425px){
    width: 90%;
    grid-template-columns: repeat(1,  1fr);
  grid-template-rows: repeat(4, 20%, 28%, 28%, 25%);
  }
`

export const Content = styled.div`
  border-right: 1px solid #6a6969;
  padding: 10px;
  &:last-of-type{
    border-right: none;
  }
  p{
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 10px;
    color: #6a6969;
    font-size: 13px;
  }

  h3{
    font-size: 20px;
    font-weight: 700;
  }
  @media(max-width: 425px){
   border: none;
   text-align: center;
   padding: 5px;

   p{
    font-size: 15px;
    margin-top: 10px;
   }
   p:last-of-type{
    margin: 10px;
   }
  }
`

export const DivMap = styled.div`
z-index: 5;
bottom: 0;
position: absolute;
width: 100vw;
height: 50vh;
@media(max-width: 425px){
  height: 20rem;
}
`