import React from 'react';
import '../../App.css';
import PythonFramworks from './HoverMenu/PythonFramworks';
import MVC from './HoverMenu/mvc';
import PHP from './HoverMenu/php';
import UIUX from './HoverMenu/UIUX';
import API from './HoverMenu/API';
import AI from './HoverMenu/Ai';
import Mobile from './HoverMenu/mobile';
import Programming from './HoverMenu/Programming';
import BigData from './HoverMenu/BigData';
import NoSqlDB from './HoverMenu/NoSqlDb';
import WareHouse from './HoverMenu/WareHouse';
import Analysis from './HoverMenu/Analysis';

const Hover1 = ({ setIsOpens }) => {
    return (


        <div className="container bg-slate-300">
            {/* <div className="topic">ALL SERVICES</div> */}
            <div className="content">
                <input type="radio" name="slider" defaultChecked="" id="home" />
                <input type="radio" name="slider" id="blog" />
                <input type="radio" name="slider" id="help" />
                <input type="radio" name="slider" id="code" />
                <input type="radio" name="slider" id="about" />
                <input type="radio" name="slider" id="artificial" />
                <input type="radio" name="slider" id="mobile" />
                <input type="radio" name="slider" id="programming" />
                <input type="radio" name="slider" id="bigData" />
                <input type="radio" name="slider" id="noSqlDB" />
                <input type="radio" name="slider" id="wareHouse" />
                <input type="radio" name="slider" id="analysis" />
                <div className="list">
                    <label htmlFor="home" className="home">
                        <span>Python Frameworks</span>
                    </label>
                    <label htmlFor="blog" className="blog">
                        <span>MVC Frameworks</span>
                    </label>
                    <label htmlFor="help" className="help">
                        <span>PHP Frameworks </span>
                    </label>
                    <label htmlFor="code" className="code">
                        <span>UI/UX Design </span>
                    </label>
                    <label htmlFor="about" className="about">
                        <span>API Integration</span>
                    </label>
                    <label htmlFor="artificial" className="artificial">
                        <span>AI / ML </span>
                    </label>
                    <label htmlFor="mobile" className="mobile">
                        <span>Mobile Applications</span>
                    </label>
                    <label htmlFor="programming" className="programming">
                        <span>Programming</span>
                    </label>
                    <label htmlFor="bigData" className="bigData">
                        <span>Big Data</span>
                    </label>
                    <label htmlFor="noSqlDB" className="noSqlDB">
                        <span>No Sql DB</span>
                    </label>
                    <label htmlFor="wareHouse" className="wareHouse">
                        <span>Ware House</span>
                    </label>
                    <label htmlFor="analysis" className="analysis">
                        <span>Analysis</span>
                    </label>
                    <div className="slider" />
                </div>
                <div className="text-content">
                    <div className="home text">
                    <p>
                    <PythonFramworks setIsOpens={setIsOpens} />
                    </p>
                        
                    </div>
                    <div className="blog text mx-auto">
                        <MVC setIsOpens={setIsOpens}/>
                    </div>
                    <div className="help text">
                        <PHP setIsOpens={setIsOpens}/>
                    </div>
                    <div className="code text">
                        <UIUX setIsOpens={setIsOpens}/>
                    </div>
                    <div className="about text">
                        <API setIsOpens={setIsOpens}/>
                    </div>
                    <div className="artificial text">
                        <AI setIsOpens={setIsOpens}/>
                    </div>
                    <div className="mobile text">
                        <Mobile setIsOpens={setIsOpens}/>
                    </div>
                    <div className="programming text">
                        <Programming setIsOpens={setIsOpens}/>
                    </div>
                    <div className="bigData text">
                        <BigData setIsOpens={setIsOpens}/>
                    </div>
                    <div className="noSqlDB text">
                        <NoSqlDB setIsOpens={setIsOpens}/>
                    </div>
                    <div className="wareHouse text">
                        <WareHouse setIsOpens={setIsOpens}/>
                    </div>
                    <div className="analysis text">
                        <Analysis setIsOpens={setIsOpens}/>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Hover1;