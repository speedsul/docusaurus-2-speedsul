import Styles from "styled-components";

export const Container = Styles.div`
background: ${(props) => (props.color ? props.color : "white")};
display: flex;

width: 40%;
margin: 20px;
> article{
background: #c53e3e;
border-radius: 10px 10px 0 0;


}
> article:after{

    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    height: 20px;
    width: 100%;
    background: url(img/rip.svg) bottom center;
    background-size: 150%;
}
`
export const CardItem = Styles.article`
background: ${props => props.color || "#c53e3e"};
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
position: relative;
>h2{
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    background: #f85656;
    color: bisque;
}
`

export const Title = Styles.h2`
color: ${(props) => (props.colorTitle ? props.colorTitle : "#ffffff")}
display: flex;
max-height: 80px;
background: #fff;
font-size: 24px;
width: 100%;
padding: 10px;
text-align: center;

`
export const Content = Styles.div`
background: ${(props) => (props.color ? props.color : "#c53e3e")};

width: 100%;
height: 100%;
padding: 25px;
color: white;

`
