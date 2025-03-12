import React, { useState } from 'react'
import { MenuContainer, MenuTitle, MenuDescription, MenuCard, MenuItemsContainer, MenuItemIllustration, MenuItemTitle, MenuItemDescription, MenuItem} from './Menu.elements'
import { WhiteButton } from '../../globalStyles';
import './index.css'
import arrow from '../../img/right-icon.png'


const Menu = (props) => {
    const { title, description, items } = props.data
    const [size, setSize] = useState(50000)

    const onClickScroll = () => {
        const element = document.getElementById('scroll-target')
        element.scroll({
            left: element.scrollLeft + 150,
            behavior: 'smooth'
          });
    }
    return (
        <MenuContainer>
            <MenuCard>
                <MenuTitle>
                  {title}
                </MenuTitle>
                <MenuDescription style={{color: "white"}}>
                  {description}
                </MenuDescription>
            </MenuCard>
            <MenuItemsContainer style={{position: "relative", overflow: "hidden"}}>
                <div className="account-size-selection">
                    <div style={{fontWeight: "bold", fontSize: "26px"}}>
                      Balance
                    </div>
                    <WhiteButton selected={size==25000} onClick={()=>setSize(25000)}>$25,000</WhiteButton>
                    <WhiteButton selected={size==50000} onClick={()=>setSize(50000)}>$50,000</WhiteButton>
                    <WhiteButton selected={size==100000} onClick={()=>setSize(100000)}>$100,000</WhiteButton>
                    <WhiteButton selected={size==200000} onClick={()=>setSize(200000)}>$200,000</WhiteButton>
                </div>
            <div 
            id="scroll-target"
            style={{
                display: "flex",
                overflow: "scroll",
                borderRadius: "20px 0px 0px 20px",
                position: "relative"
            }}>
                <table style={{
                  width: "100%"
                }}>
                <tr>
                    <th className="sticky-col" style={{backgroundColor: "white"}}></th>
                    <th style={{textAlign: "left"}}>Assessment</th>
                    <th style={{textAlign: "left"}}>Verification</th>
                    <th style={{textAlign: "left"}}>1000Plus Capital Funded</th>
                </tr>
                <tr>
                    <td classname="sticky-col"><div>Trading Period</div></td>
                    <td><div>30 Days</div></td>
                    <td><div>60 Days</div></td>
                    <td><div>-</div></td>
                </tr>
                <tr>
                    <td classname="sticky-col"><div>Minimum Trading Days</div></td>
                    <td><div>10 Days</div></td>
                    <td><div>10 Days</div></td>
                    <td><div>-</div></td>
                </tr>
                <tr>
                    <td classname="sticky-col"><div>Maximum Daily Loss</div></td>
                    <td><div>${size*5/100}</div></td>
                    <td><div>${size*5/100}</div></td>
                    <td><div>${size*5/100}</div></td>
                </tr>
                <tr>
                    <td classname="sticky-col"><div>Maximum Loss</div></td>
                    <td><div>${size*10/100}</div></td>
                    <td><div>${size*10/100}</div></td>
                    <td><div>${size*10/100}</div></td>
                </tr>
                <tr>
                    <td classname="sticky-col"><div>Profit Target</div></td>
                    <td><div>${size*10/100}</div></td>
                    <td><div>${size*5/100}</div></td>
                    <td><div>-</div></td>
                </tr>
                <tr>
                    <td classname="sticky-col"><div>Price</div></td>
                    <td><div>
                        {size===25000?'$450':size===50000?'$650':size===100000?'$950':'$1850'}
                    </div></td>
                    <td><div>$0</div></td>
                    <td><div>$0</div></td>
                </tr>
                </table>
            </div>
            <div className="scroll-arrow" onClick={onClickScroll}>
                <img
                src={arrow}
                alt="arrow"
                height={50}>
                </img>
            </div>
            </MenuItemsContainer>
        </MenuContainer>
    )
}

export default Menu
