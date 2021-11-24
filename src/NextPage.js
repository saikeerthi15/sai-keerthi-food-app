import { Breadcrumb } from 'antd';
import React from 'react';
import BreadcrumbCarryPage from './BreadcrumbCarryPage';
import CardsForCarry from './CardsForCarry';
import NavBarCarryPage from './NavBarCarryPage';
import TagsForCarry from './TagsForCarry';

function NextPage(props){
    debugger
    return(
        <div className="CarryPage">
         <NavBarCarryPage all_data={props.all_data}/>
         <BreadcrumbCarryPage/>
         <TagsForCarry/>
         <CardsForCarry  all_data={props.all_data}/>
        </div>
    );
}
export default NextPage;
    
       
    



