import React from 'react'
import styled from 'styled-components'
import img4 from '../assets/coop.jpg'
import img5 from '../assets/costred.png'
import img6 from '../assets/media.png'

const Section = styled.section`
position: relative;
min-height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
margin: 0 auto;
background-color: ${props => props.theme.body};
img{
    width: 80vw;
    margin-left: 10%;
    margin-right: 10%;
    height: 100vh;
}
h2{
    font-family: 'Open Sans', sans-serif;
    justify-content: center;
    text-align: center;
    font-size: 2.3rem;
    font-weight: 400;
    margin: 5rem 10rem;
    line-height: 3.5rem;
    color: #333;
}
.LeftRight{
    display: flex;
    flex-direction: row;
}
`
const Title = styled.h1`
font-size: ${props => props.theme.fontBig};
font-family: 'Open Sans', sans-serif;
font-weight: 300;
position: absolute;
justify-content: center;
text-align: center;
top: 15%;
left: 35%;
z-index: 5;
color: #f2f2f2;
text-shadow: 2px 2px #222;
`

const Left = styled.div`
width: 40%;
font-size: ${props => props.theme.fontlg};
font-weight: 300;
position: relative;
z-index: 5;
margin-top: 2rem;
margin-left: 10%;
padding-right: 5%;
display: flex;
flex-direction: column;
.h3{
    font-family: "Open Sans";
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 1rem;
    margin: 0.75rem 0px;
    color: rgba(0,0,0,.85);
}
img{
    width: 100%;
    margin-left: 0;

    height: auto;
}
`

const Right = styled.div`
    width: 40%;
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    position: relative;
    z-index: 5;
    margin-top: 2rem;
    margin-left: 5%;
    padding-right: 10%;
    display: flex;
    flex-direction: column;
.h3{
    font-family: "Open Sans";
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 2rem;
    margin: 0.75rem 0px;
    color: rgba(0,0,0,.85);
}
img{
    width: 100%;
    margin-left: 0%;
    height: 40%;
}
`


const Cooperation = () => {
  return (
    <Section>
        <Title data-scroll data-scroll-speed='-2' data-scroll-direction='horizontal'>
            Wsp????praca
        </Title>
        <img src={img4} alt='Cooperation' className='wall-img'/>
        <h2>W Homeeer jeste??my otwarci na wszelkie propozycje wsp????pracy,
            wszystkich producent??w materia????w budowlanych ch??tnych by do????czy?? do naszego projektu
            zapraszamy do kontaktu!
            <br /><br />
            W zamian oferujemy: 
        </h2>
        <div className='LeftRight'>
            <Left>
                <h3>
                    Zwi??kszenie sprzeda??y poprzez udost??pnienie swoich produkt??w tysi??com potencjalnych klient??w. 
                    <br /><br /><br /><br />
                </h3>
                <h3>
                    Ponad 120 000 ods??on miesi??cznie.
                </h3>
                <br/><br/>
                <p>
                    Dzi??ki rewolucyjnemu podej??ciu do budowy domu, Tw??j produkt ma szanse zosta?? rozreklamowany ponad milionowi potencjalnych klient??w! <br/><br/>
                </p>
                <br/><br/>
                <img src={img6} alt='Cooperation' className='wall-img'/>
                <br/><br/>
                <h3>
                    Wspo??praca z tooba.pl.
                </h3>
                <br/><br/>
                <p>
                    Dzia??amy razem z tooba.pl, co przek??ada si?? na blisko 10 000 sprzedanych projekt??w dom??w ka??dego roku,
                    projekt??w w kt??rych mo??e by?? uwzgl??dniony w??a??nie Tw??j produkt!
                </p>
                <br/><br/>
                
                
            </Left>
            <Right>
                <h3>                   
                    Redukcja koszt??w marketingowych.<br /><br />
                </h3>
                <img src={img5} alt='Cooperation' className='wall-img'/>
                <br /><br />
                <h3>
                    Poszerzenie us??ug dzi??ki serwisowi posprzeda??owemu. 
                    Dost??p do obs??ugi serwisowej WORKET:<br /><br />
                </h3>
                <br/><br/>
                <p>
                    - dost??p do zlece??,<br/>
                    - prosty system sk??adania ofert bazuj??cy na kilku klikni??ciach,<br/>
                    - bezp??atny dost??p, prowizj?? pobieramy po zrealizowanym zleceniu!<br/></p>
                <br/><br/>
            </Right>
        </div>
    </Section>
  )
}

export default Cooperation